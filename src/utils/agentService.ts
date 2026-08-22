export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  retrievedSources?: string[];
  isError?: boolean;
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

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error(
          "API endpoint `/api/chat` not found. Please ensure the backend serverless function is running."
        );
      }
      throw new Error(data.error || data.message || `Server responded with status ${res.status}`);
    }

    return {
      reply: data.reply || "No response received from the server.",
      sources: data.retrievedChunks || []
    };
  } catch (error: any) {
    console.error('Portfolio Agent Error:', error);
    throw error;
  }
}
