export interface SkillNode {
  id: string;
  label: string;
  category: string;
  description: string;
  related: string[];
}

export interface SkillCategory {
  id: string;
  label: string;
  color: string;
  skills: SkillNode[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-ml',
    label: 'AI / ML',
    color: '#4f8ef7',
    skills: [
      { id: 'gen-ai', label: 'Generative AI', category: 'AI / ML', description: 'Building and working with generative AI systems for text, analysis, and automation.', related: ['llms', 'prompt-eng', 'rag'] },
      { id: 'rag', label: 'RAG', category: 'AI / ML', description: 'Retrieval-Augmented Generation — grounding LLM responses in domain-specific knowledge.', related: ['embeddings', 'vector-db', 'llms'] },
      { id: 'llms', label: 'LLMs', category: 'AI / ML', description: 'Working with large language models via APIs, prompt design, and pipeline integration.', related: ['gen-ai', 'prompt-eng', 'langchain'] },
      { id: 'embeddings', label: 'Embeddings', category: 'AI / ML', description: 'Generating and working with vector embeddings for semantic search and similarity.', related: ['rag', 'vector-db'] },
      { id: 'vector-db', label: 'Vector Databases', category: 'AI / ML', description: 'Storing and querying vector embeddings for retrieval systems.', related: ['rag', 'embeddings', 'chromadb'] },
      { id: 'prompt-eng', label: 'Prompt Engineering', category: 'AI / ML', description: 'Designing structured, effective prompts for reliable LLM output across varied tasks.', related: ['llms', 'gen-ai'] },
      { id: 'ml', label: 'Machine Learning', category: 'AI / ML', description: 'Core machine learning concepts and practical application in AI systems.', related: ['gen-ai', 'embeddings'] },
    ],
  },
  {
    id: 'ai-tools',
    label: 'AI Tools & Development Platforms',
    color: '#2dd4bf',
    skills: [
      { id: 'lovable', label: 'Lovable', category: 'AI Tools & Development Platforms', description: 'Full-stack AI development platform for rapid application building, visual prototyping, and prompt-driven software development.', related: ['react', 'typescript', 'google-antigravity'] },
      { id: 'google-antigravity', label: 'Google Antigravity', category: 'AI Tools & Development Platforms', description: 'Advanced agentic coding and AI developer platform for intelligent pair programming, workflow execution, and multi-agent systems.', related: ['google-gemini', 'claude-code', 'gen-ai'] },
      { id: 'curzo', label: 'Curzo', category: 'AI Tools & Development Platforms', description: 'AI-assisted development platform and intelligent coding companion designed to accelerate software engineering and code generation.', related: ['chatgpt', 'claude-code', 'typescript'] },
      { id: 'claude-code', label: 'Claude Code', category: 'AI Tools & Development Platforms', description: 'Agentic command-line interface and coding assistant from Anthropic, enabling terminal-based AI pair programming, codebase exploration, and automated refactoring.', related: ['google-antigravity', 'chatgpt', 'llms'] },
      { id: 'chatgpt', label: 'ChatGPT', category: 'AI Tools & Development Platforms', description: 'Conversational AI and prompt engineering environment powered by OpenAI models for architecture brainstorming, debugging, and code generation.', related: ['openai-codex', 'llms', 'prompt-eng'] },
      { id: 'google-gemini', label: 'Google Gemini', category: 'AI Tools & Development Platforms', description: 'Multimodal AI platform and models by Google used for complex reasoning, long-context analysis, code synthesis, and intelligent application integration.', related: ['google-antigravity', 'llms', 'gen-ai'] },
      { id: 'n8n', label: 'n8n', category: 'AI Tools & Development Platforms', description: 'Workflow automation and orchestration platform for connecting AI agents, REST APIs, databases, and custom webhooks into cohesive pipelines.', related: ['langflow', 'rest-apis', 'fastapi'] },
      { id: 'langflow', label: 'Langflow', category: 'AI Tools & Development Platforms', description: 'Visual development framework and UI for prototyping, orchestrating, and experimenting with LangChain pipelines and multi-agent RAG architectures.', related: ['langchain', 'langgraph', 'rag', 'n8n'] },
      { id: 'openai-codex', label: 'OpenAI Codex', category: 'AI Tools & Development Platforms', description: 'Specialized AI model architecture designed for code translation, algorithmic synthesis, and AI-assisted programming.', related: ['chatgpt', 'llms', 'python', 'typescript'] },
    ],
  },
  {
    id: 'development',
    label: 'Development',
    color: '#7c6af7',
    skills: [
      { id: 'python', label: 'Python', category: 'Development', description: 'Primary language for AI/ML development, backend APIs, and data processing.', related: ['fastapi', 'langchain'] },
      { id: 'typescript', label: 'TypeScript', category: 'Development', description: 'Strongly-typed JavaScript for building reliable, maintainable frontend applications.', related: ['react', 'javascript'] },
      { id: 'javascript', label: 'JavaScript', category: 'Development', description: 'Core web language for building dynamic, interactive user experiences.', related: ['typescript', 'react'] },
      { id: 'react', label: 'React', category: 'Development', description: 'Building component-based user interfaces for production web applications.', related: ['typescript', 'javascript'] },
      { id: 'fastapi', label: 'FastAPI', category: 'Development', description: 'High-performance Python web framework for AI-driven API development.', related: ['python', 'rest-apis'] },
      { id: 'sql', label: 'SQL', category: 'Development', description: 'Querying and managing relational databases.', related: ['supabase'] },
      { id: 'rest-apis', label: 'REST APIs', category: 'Development', description: 'Designing and consuming RESTful API architectures for frontend-backend integration.', related: ['fastapi', 'react'] },
    ],
  },
  {
    id: 'ai-frameworks',
    label: 'AI Frameworks',
    color: '#f76a4f',
    skills: [
      { id: 'langchain', label: 'LangChain', category: 'AI Frameworks', description: 'Composable framework for building LLM-powered applications and pipelines.', related: ['langgraph', 'rag', 'llms'] },
      { id: 'langgraph', label: 'LangGraph', category: 'AI Frameworks', description: 'Stateful graph-based orchestration for complex, multi-step AI workflows.', related: ['langchain', 'rag'] },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    color: '#4ff7b0',
    skills: [
      { id: 'chromadb', label: 'ChromaDB', category: 'Databases', description: 'Open-source vector database for semantic search and embedding storage.', related: ['vector-db', 'rag', 'embeddings'] },
      { id: 'supabase', label: 'Supabase', category: 'Databases', description: 'Open-source Firebase alternative with PostgreSQL, auth, and real-time subscriptions.', related: ['sql'] },
    ],
  },
  {
    id: 'testing-devops',
    label: 'Testing & DevOps',
    color: '#f7c94f',
    skills: [
      { id: 'vitest', label: 'Vitest', category: 'Testing & DevOps', description: 'Fast unit testing framework for Vite-powered projects.', related: ['react', 'typescript'] },
      { id: 'rtl', label: 'React Testing Library', category: 'Testing & DevOps', description: 'Component testing focused on user behavior rather than implementation details.', related: ['react', 'vitest'] },
      { id: 'playwright', label: 'Playwright', category: 'Testing & DevOps', description: 'End-to-end browser testing for full user workflow validation.', related: ['typescript'] },
      { id: 'github-actions', label: 'GitHub Actions', category: 'Testing & DevOps', description: 'Automated CI/CD pipelines for testing and deployment workflows.', related: ['vercel'] },
      { id: 'vercel', label: 'Vercel', category: 'Testing & DevOps', description: 'Zero-config deployment platform for frontend applications.', related: ['react', 'github-actions'] },
    ],
  },
  {
    id: 'automation',
    label: 'Automation',
    color: '#f74fdc',
    skills: [
      { id: 'workflow-automation', label: 'Workflow Automation', category: 'Automation', description: 'Designing event-driven automations, webhook integrations, and scheduled tasks.', related: ['n8n', 'rest-apis'] },
    ],
  },
  {
    id: 'data',
    label: 'Data',
    color: '#4fccf7',
    skills: [
      { id: 'excel', label: 'Excel', category: 'Data', description: 'Data analysis, modeling, and reporting with spreadsheets.', related: ['power-bi'] },
      { id: 'power-bi', label: 'Power BI', category: 'Data', description: 'Business intelligence and interactive data visualization.', related: ['excel', 'tableau'] },
      { id: 'tableau', label: 'Tableau', category: 'Data', description: 'Visual analytics and data storytelling.', related: ['power-bi'] },
    ],
  },
];

export const allSkills: SkillNode[] = skillCategories.flatMap(c => c.skills);
