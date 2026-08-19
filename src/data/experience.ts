export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
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
    period: 'Present',
    location: 'Bengaluru | Remote',
    type: 'Internship',
    isCurrent: true,
    focus: 'AI Engineer | AI-Powered Frontend Development',
    responsibilities: [
      'Building and integrating AI-powered product features',
      'Developing AI-enhanced frontend experiences',
      'Integrating LLM capabilities into user-facing applications',
      'Building production-oriented features with React, TypeScript, AI APIs, and modern frontend workflows',
      'Contributing to testing, error handling, and deployment',
    ],
    technologies: ['React', 'TypeScript', 'LLMs', 'AI APIs'],
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
