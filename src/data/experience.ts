export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  workMode?: string;
  type: string;
  isCurrent: boolean;
  focus?: string;
  responsibilities: string[];
  technologies?: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: 'flyrank',
    company: 'FlyRank AI',
    role: 'AI Engineer Intern',
    period: 'July 2026 – August 2026',
    location: 'Bengaluru, India',
    workMode: 'Remote',
    type: 'Internship',
    isCurrent: false,
    responsibilities: [
      'Worked with LLMs, prompt engineering, AI APIs, and AI tools for AI-powered application development.',
      'Worked on AI workflows and LLM integrations using React, TypeScript, and REST APIs.',
      'Applied prompt optimization, structured outputs, and error-handling techniques to improve AI workflows.',
      'Contributed to system design, testing, debugging, and deployment of AI-powered features.',
    ],
    technologies: ['React', 'TypeScript', 'LLMs', 'AI APIs', 'REST APIs', 'Prompt Engineering'],
  },
  {
    id: 'innomatic',
    company: 'Innomatic Research Lab',
    role: 'Gen AI Intern',
    period: 'Feb 2026 – May 2026',
    location: 'Bengaluru | Remote',
    type: 'Internship',
    isCurrent: false,
    responsibilities: [
      'Designed and deployed FastAPI endpoints for AI-driven automation workflows',
      'Built LLM pipelines using LangChain and LangGraph',
      'Engineered RAG systems with vector retrieval and structured prompt pipelines',
      'Contributed to production-grade GenAI features',
    ],
    technologies: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'ChromaDB', 'Groq API'],
  },
];
