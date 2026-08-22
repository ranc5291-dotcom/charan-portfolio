import agentKnowledge from '../data/agentKnowledgeData.json';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  retrievedSources?: string[];
  isError?: boolean;
}

// Local RAG retriever for development fallback
function localRetrieveChunks(query: string, topK: number = 4) {
  const queryLower = query.toLowerCase();
  const queryTokens = queryLower.split(/\s+/).filter(t => t.length > 2);

  const scored = agentKnowledge.map(chunk => {
    let score = 0;
    for (const kw of chunk.keywords) {
      if (queryLower.includes(kw)) score += 3;
    }
    const titleLower = chunk.title.toLowerCase();
    const contentLower = chunk.content.toLowerCase();
    for (const token of queryTokens) {
      if (titleLower.includes(token)) score += 2;
      if (contentLower.includes(token)) score += 1;
    }
    return { ...chunk, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, topK);
}

export async function sendAgentMessage(
  message: string,
  history: ChatMessage[]
): Promise<{ reply: string; sources?: string[] }> {
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        conversationHistory: history.map(h => ({
          role: h.role,
          content: h.content
        }))
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return {
        reply: data.reply,
        sources: data.retrievedChunks
      };
    }

    // If running in local Vite dev (where /api/chat may return 404), check if client-side VITE_GROQ_API_KEY is provided
    const localGroqKey = (import.meta as any).env?.VITE_GROQ_API_KEY;
    if (localGroqKey) {
      const relevantChunks = localRetrieveChunks(message);
      const context = relevantChunks.map(c => `### ${c.title}\n${c.content}`).join('\n\n');

      const systemPrompt = `You are the personal AI Portfolio Agent for H N Charan. Your goal is to accurately answer questions from recruiters, hiring managers, engineers, and collaborators about Charan's background, skills, experience, projects, education, and career interests.

CRITICAL OPERATIONAL RULES:
1. GROUNDED FACTUALITY: Answer ONLY using the Grounded Knowledge below. Never fabricate details.
2. THIRD PERSON PERSPECTIVE: Always speak about Charan in the third person ("Charan is...", "He built...").
3. SCOPE & REDIRECTION: If asked unrelated questions (e.g. general trivia, coding puzzles), politely decline and state your focus on Charan's portfolio.
4. HONESTY: If a detail isn't present, clearly state: "I don't have that specific information in Charan's portfolio, but you can reach him at charanhn629@gmail.com."
5. TONE: Professional, concise, articulate, and welcoming.

GROUNDED KNOWLEDGE ABOUT H N CHARAN:
${context}`;

      const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localGroqKey}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: systemPrompt },
            ...history.slice(-4).map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: message }
          ],
          temperature: 0.3,
          max_tokens: 650
        })
      });

      if (groqRes.ok) {
        const groqData = await groqRes.json();
        return {
          reply: groqData.choices?.[0]?.message?.content || "No response received.",
          sources: relevantChunks.map(c => c.title)
        };
      }
    }

    const errData = await res.json().catch(() => ({}));
    if (res.status === 500 && errData.error?.includes('GROQ_API_KEY')) {
      return {
        reply: "The Portfolio Agent backend is deployed, but `GROQ_API_KEY` is not yet configured in your Vercel Environment Variables. Please set `GROQ_API_KEY` in your Vercel project settings to enable AI answers!"
      };
    }

    if (res.status === 404) {
      // Local dev mode without vercel cli proxy
      return {
        reply: "You're currently viewing this locally in Vite development mode. On production (Vercel), queries are processed by the `/api/chat` serverless function using Groq's `llama-3.3-70b-versatile`. (Tip: You can also set `VITE_GROQ_API_KEY` in a local `.env` file to test live inference locally!)"
      };
    }

    throw new Error(errData.error || `Server responded with status ${res.status}`);
  } catch (error: any) {
    console.error('Agent Service Error:', error);
    throw error;
  }
}
