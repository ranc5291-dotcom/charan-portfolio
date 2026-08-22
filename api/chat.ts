import type { VercelRequest, VercelResponse } from '@vercel/node';

// Grounded Knowledge Base
const KNOWLEDGE_BASE = [
  {
    id: "contact_info",
    category: "contact",
    title: "Contact Information",
    content: `Name: H N Charan
Role: AI Engineer Intern & Final-Year Computer Science (AIML) Student
Phone: +91-7337615979
Email: charanhn629@gmail.com
LinkedIn: https://www.linkedin.com/in/hn-charan-23282329b/
GitHub: https://github.com/ranc5291-dotcom
Location: Bengaluru, Karnataka, India
Languages Spoken: English, Kannada, Hindi`,
    keywords: ["contact", "email", "phone", "linkedin", "github", "location", "bengaluru", "reach", "hire", "languages", "number", "call"]
  },
  {
    id: "professional_summary",
    category: "summary",
    title: "Professional Summary & Career Interest",
    content: `H N Charan is a final-year Computer Science (AIML) student and AI Engineer Intern with hands-on experience building AI-powered applications, GenAI solutions, RAG systems, and intelligent user experiences. He focuses on building production-ready systems rather than just prototypes — having shipped RAG pipelines, agentic LLM workflows, and full-stack AI backends. He is passionate about developing practical AI solutions and solving real-world problems through modern technologies.

Career Interest & Availability: Actively pursuing a full-time career as an AI Engineer, with a core focus on Applied AI / GenAI Engineering. He is fully open to full-time roles, internships, and opportunities involving RAG systems, LLM application development, agentic workflows, and AI-powered product engineering.`,
    keywords: ["summary", "about", "bio", "career", "availability", "full-time", "job", "open to work", "roles", "goals", "interest", "hire"]
  },
  {
    id: "technical_skills",
    category: "skills",
    title: "Technical Skills & Competencies",
    content: `Programming Languages: Python, SQL, TypeScript, JavaScript
AI / Machine Learning / GenAI: Generative AI, Retrieval-Augmented Generation (RAG), Large Language Models (LLMs), Vector Embeddings, Vector Databases, Prompt Engineering, Agentic Workflows, Machine Learning
Frameworks & Libraries: LangChain, LangGraph, FastAPI, React, REST APIs, Docker, Vite, Tailwind CSS, Framer Motion
Databases & Storage: ChromaDB, Supabase, PostgreSQL, Firebase / Firestore, MongoDB
Testing & DevOps: Vitest, React Testing Library, Playwright, GitHub Actions, Vercel, Render, CI/CD pipelines
Workflow Automation: n8n
Data & Business Intelligence: Microsoft Excel, Power BI, Tableau`,
    keywords: ["skills", "tech stack", "languages", "python", "typescript", "fastapi", "react", "langchain", "langgraph", "chromadb", "rag", "docker", "testing", "playwright", "n8n", "databases", "devops"]
  },
  {
    id: "exp_flyrank",
    category: "experience",
    title: "Work Experience - AI Engineer Intern at FlyRank AI",
    content: `Company: FlyRank AI
Role: AI Engineer Intern | AI-Powered Frontend & System Development
Location: Bengaluru (Remote)
Period: Present (Current)
Key Contributions:
- Works on core AI engineering tasks focused on building and integrating AI-powered product features.
- Develops AI-enhanced frontend experiences and integrates LLM capabilities into user-facing web applications.
- Builds and refines production-oriented features using React, TypeScript, AI APIs, and modern engineering workflows.
- Contributes to end-to-end AI application development, testing, error handling, and deployment throughout the product lifecycle.`,
    keywords: ["flyrank", "flyrank ai", "internship", "ai engineer intern", "experience", "work", "current job", "present", "frontend"]
  },
  {
    id: "exp_innomatic",
    category: "experience",
    title: "Work Experience - Gen AI Intern at Innomatic Research Lab",
    content: `Company: Innomatic Research Lab
Role: Gen AI Intern
Location: Bengaluru (Remote)
Period: Feb 2026 – May 2026
Key Contributions:
- Designed and deployed FastAPI endpoints powering AI-driven automation workflows across multiple internal applications.
- Built LLM pipelines with LangChain and LangGraph, reducing manual query-handling effort by streamlining context-aware routing.
- Engineered RAG systems with vector retrieval that significantly cut irrelevant AI responses by improving retrieval precision through structured prompt pipelines.
- Contributed to 3 production-grade Gen AI features shipped to real users within a 4-month internship cycle.
Stack Used: Python, FastAPI, LangChain, LangGraph, ChromaDB, Groq API.`,
    keywords: ["innomatic", "innomatic research lab", "gen ai intern", "internship", "fastapi", "langgraph", "rag", "chromadb", "experience", "work"]
  },
  {
    id: "proj_nexusai",
    category: "projects",
    title: "Project - NexusAI: Customer Support Assistant (RAG)",
    content: `Project Name: NexusAI — Customer Support Assistant
GitHub Repository: https://github.com/ranc5291-dotcom/customer-support-assistance-RAG
Stack: LangChain, LangGraph, ChromaDB, Groq API (llama-3.3-70b-versatile), FastAPI, HTML/CSS/JS
Key Highlights:
- RAG-based customer support assistant resolving 80%+ of user queries autonomously without human intervention.
- Smart query routing with intent detection: routes requests to Knowledge Path (RAG + LLM), Simple Reply (predefined fast answers), or Escalation (admin/human support).
- Ingestion pipeline: splits uploaded documents (PDF/TXT) into semantic chunks, converts them to embeddings, and indexes them in ChromaDB.
- Features: Human-in-the-loop escalation, real-time voice I/O via browser speech recognition, and an admin dashboard for document management, monitoring AI responses, and session analytics.
- Includes formal High Level Design (HLD) and complete technical documentation.`,
    keywords: ["nexusai", "customer support", "rag", "langgraph", "llama-3.3-70b", "voice", "admin dashboard", "intent detection", "projects"]
  },
  {
    id: "proj_aipromptstudio",
    category: "projects",
    title: "Project - AI Prompt Studio",
    content: `Project Name: AI Prompt Studio — AI Prompt Engineering Workspace
GitHub Repository: https://github.com/ranc5291-dotcom/flyrank-capstone
Stack: React, TypeScript, Groq API, Firebase, Zod, Playwright, Vitest
Key Highlights:
- Comprehensive AI workspace for prompt analysis, testing, optimization, and prompt template management.
- Implemented secure Firebase authentication, Zod schema validation, protected routes, and resilient error boundaries.
- Robust testing suite with 30 unit tests and 4 Playwright end-to-end (E2E) tests, automated via CI/CD and deployed on Vercel.`,
    keywords: ["ai prompt studio", "prompt engineering", "groq", "firebase", "playwright", "testing", "vitest", "zod", "projects"]
  },
  {
    id: "proj_yumrush",
    category: "projects",
    title: "Project - YumRush: AI-Powered Food Delivery Platform",
    content: `Project Name: YumRush — AI-Powered Food Delivery Platform
GitHub Repository: https://github.com/ranc5291-dotcom/yumrush
Stack: FastAPI, Python, JWT Authentication, React, Render
Key Highlights:
- Full-stack food delivery application with secure JWT-authenticated FastAPI endpoints handling end-to-end order processing.
- Integrated an LLM-powered assistant, automated AI review summarization, voice-based food ordering, and personalized meal recommendations.
- Deployed on Render with an administrative dashboard for user management, real-time order tracking, and sales analytics.`,
    keywords: ["yumrush", "food delivery", "fastapi", "voice ordering", "jwt", "recommendations", "render", "projects"]
  },
  {
    id: "proj_cseaiml_lms",
    category: "projects",
    title: "Project - CSEAIML LMS: Full-Stack Department LMS (PWA)",
    content: `Project Name: CSEAIML LMS — Progressive Web App for CSE (AIML) Department
Institution: East West Institute of Technology, Bengaluru
Stack: React, Vite, Tailwind CSS v4, FastAPI, Firebase Auth, Firestore, Supabase (PostgreSQL & Storage), Cloudinary
Key Highlights:
- Role-based portals for Students, Faculty, Placement Officers, and Administrators.
- Internal marks management with per-internal test configs, publish/unpublish toggles, and bulk CSV/Excel upload.
- Placement drive and resource management with Supabase Storage, FCM push notifications, phone OTP authentication, and PWA install capabilities.
- Deployed live on Vercel.`,
    keywords: ["lms", "cseaiml lms", "college", "pwa", "supabase", "firebase", "fastapi", "east west institute", "projects"]
  },
  {
    id: "proj_other",
    category: "projects",
    title: "Other Projects - Resume Matcher & Hirebridge",
    content: `1. Resume Matcher (RAG Project):
   - RAG-based resume-to-job-description analyzer using LangChain, ChromaDB, Groq API, and React/Vite.
   - Features role suitability matching, gap analysis, side-by-side comparison, and ATS-optimized PDF export.

2. Hirebridge (AI Interview Practice Platform):
   - AI-powered mock interview practice platform built with FastAPI, MongoDB, Anthropic Claude API, ElevenLabs Text-to-Speech, and React/Vite.`,
    keywords: ["resume matcher", "hirebridge", "interview", "ats", "elevenlabs", "anthropic", "rag", "projects"]
  },
  {
    id: "education_certs",
    category: "education",
    title: "Education & Certifications",
    content: `Degree: Bachelor of Engineering (B.E.) in Computer Science & Engineering (AIML)
Institution: East West Institute of Technology, Bengaluru, Karnataka
CGPA: 8.5
Expected Graduation: 2027

Certifications Earned:
- Introduction to Large Language Models — Google
- Fundamentals of ML & AI — AWS
- AWS AI Practitioner Learning Plan — AWS
- Machine Learning using Python — Simplilearn
- Generative AI Studio — Simplilearn`,
    keywords: ["education", "degree", "college", "east west institute", "cgpa", "certifications", "aws", "google llm", "simplilearn", "graduation", "gpa"]
  },
  {
    id: "growth_areas",
    category: "summary",
    title: "Growth Areas & Self-Awareness",
    content: `When asked about weaknesses, areas for improvement, or growth areas, note that Charan is a final-year student who has grown quickly by shipping real production features rather than only building prototypes. Like any early-career engineer moving fast, he is still deepening his depth in large-scale distributed systems and formal MLOps practices (model monitoring, evaluation pipelines at scale), since most of his experience so far has been in applied product engineering (RAG, LLM integration, full-stack features) rather than infrastructure-heavy ML systems work. He treats this as an active, ongoing focus rather than a gap, and is deliberately seeking roles that will stretch him in this direction.`,
    keywords: ["weakness", "weaknesses", "weekness", "improve", "improvement", "growth", "gap", "challenge", "struggle", "shortcoming", "development area"]
  },
  {
    id: "hackathons_activities",
    category: "hackathons",
    title: "Hackathons, Competitions & Leadership",
    content: `Hackathons & Competitions:
- VishwaNova — National Level Weboreel AI Hackathon (Participant)
- IDEATHON 2025 — Shortlisted, State-level Hackathon Participant
- Agentic AI Hackathon — HACK2SKILL (Participant)
- HackerRank Challenges (Participant)

Leadership & Volunteering:
- Hackathon Coordinator & Volunteer Coordinator at East West Institute of Technology.`,
    keywords: ["hackathons", "competitions", "vishwanova", "ideathon", "agentic ai", "hackerrank", "volunteer", "coordinator", "activities"]
  }
];

// Simple relevance scoring for retrieval
function retrieveRelevantChunks(query: string, topK: number = 4) {
  const queryLower = query.toLowerCase();
  const queryTokens = queryLower.split(/\s+/).filter(t => t.length > 2);

  const scored = KNOWLEDGE_BASE.map(chunk => {
    let score = 0;

    // Check keywords
    for (const kw of chunk.keywords) {
      if (queryLower.includes(kw)) score += 3;
    }

    // Check tokens in title & content
    const titleLower = chunk.title.toLowerCase();
    const contentLower = chunk.content.toLowerCase();
    for (const token of queryTokens) {
      if (titleLower.includes(token)) score += 2;
      if (contentLower.includes(token)) score += 1;
    }

    return { ...chunk, score };
  });

  scored.sort((a, b) => b.score - a.score);

  // If no strong match, return general summary + skills + experience + projects
  if (scored[0].score === 0) {
    return KNOWLEDGE_BASE.slice(0, topK);
  }

  return scored.slice(0, topK);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only accept POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  const { message, conversationHistory = [] } = req.body || {};

  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'A valid message string is required.' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'GROQ_API_KEY environment variable is not configured on the server.',
      detail: 'Please configure GROQ_API_KEY in your Vercel Project Settings.'
    });
  }

  try {
    const relevantChunks = retrieveRelevantChunks(message);
    const context = relevantChunks.map(c => `### ${c.title}\n${c.content}`).join('\n\n');

    const systemPrompt = `You are the personal AI Portfolio Agent for H N Charan. Your goal is to accurately answer questions from recruiters, hiring managers, engineers, and collaborators about Charan's background, skills, experience, projects, education, and career interests.

CRITICAL OPERATIONAL RULES:
1. GROUNDED FACTUALITY: You must answer ONLY using the provided Grounded Knowledge below. Never fabricate or hallucinate projects, degrees, dates, companies, or skills.
2. THIRD PERSON PERSPECTIVE: Always speak about Charan in the third person ("Charan is...", "He built...", "His experience includes..."). Do not refer to yourself as Charan.
3. SCOPE & REDIRECTION: If asked questions unrelated to Charan (e.g. general trivia, coding puzzles, unrelated world events, writing generic essays), politely decline and state that you are specifically designed to answer questions about H N Charan's portfolio and professional work.
4. HONESTY: If a specific detail is not in the knowledge base, state clearly: "I don't have that specific information in Charan's portfolio, but you can reach him directly at charanhn629@gmail.com." Only say this for details you genuinely have no grounding for (e.g. salary expectations, exact dates not listed, personal opinions). For common interview-style questions like weaknesses, growth areas, or challenges, use the Growth Areas & Self-Awareness knowledge if provided in context — answer thoughtfully and briefly rather than deflecting, the way a well-prepared candidate would.
5. PLAIN TEXT ONLY — NO MARKDOWN, NO HTML: The chat widget displaying your reply renders raw plain text only. It does NOT render Markdown or HTML. You must NEVER use:
   - Markdown tables (no "|" pipe characters or table syntax)
   - Bold/italic markers like **text** or *text* or __text__
   - HTML tags like <br>, <b>, <ul>, <li>
   - Markdown headers like ### or ##
   Instead, for lists use a simple hyphen "-" at the start of a line followed by a space, with each item on its own line (real newlines, not <br>). Use plain sentence case for emphasis instead of bold/italic.
6. LENGTH & STRUCTURE: Keep answers concise. When listing multiple projects or skills, use short plain-text bullet lines (one item per line: "- Name: one-sentence description") rather than dense paragraphs or tables.
7. TONE: Professional, concise, articulate, and welcoming.

==================================================
GROUNDED KNOWLEDGE ABOUT H N CHARAN:
==================================================
${context}
==================================================`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.slice(-6).map((msg: { role: string; content: string }) => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content
      })),
      { role: 'user', content: message.trim() }
    ];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-120b',
        messages,
        temperature: 0.3,
        max_tokens: 650
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Groq API Error:', errText);
      return res.status(response.status).json({
        error: 'Failed to generate response from LLM provider.',
        details: errText
      });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "I couldn't generate a response at this moment. Please try again.";

    return res.status(200).json({
      reply,
      retrievedChunks: relevantChunks.map(c => c.title)
    });
  } catch (error: any) {
    console.error('Portfolio Agent Error:', error);
    return res.status(500).json({
      error: 'An internal server error occurred while processing your request.',
      message: error?.message || 'Unknown error'
    });
  }
}