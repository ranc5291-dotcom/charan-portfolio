export interface Project {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  longDescription: string;
  status: 'completed' | 'building';
  statusLabel?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  caseStudy: CaseStudy;
  visualType: 'knowledge-graph' | 'prompt-flow' | 'data-viz' | 'delivery' | 'lms-network';
}

export interface CaseStudySection {
  number: string;
  title: string;
  content: string | string[];
}

export interface CaseStudy {
  sections: CaseStudySection[];
}

export const projects: Project[] = [
  {
    id: 'nexusai',
    number: '01',
    title: 'NexusAI — Customer Support Assistant',
    shortTitle: 'NexusAI',
    category: 'AI / RAG / Intelligent Systems',
    description: 'A RAG-based AI customer support assistant designed to resolve customer queries using contextual knowledge retrieval while supporting human escalation.',
    longDescription: 'An end-to-end intelligent support system combining Retrieval-Augmented Generation with intent-based routing and human-in-the-loop escalation. Resolves 80%+ of queries autonomously.',
    status: 'completed',
    technologies: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'ChromaDB', 'Groq API'],
    githubUrl: 'https://github.com/ranc5291-dotcom/customer-support-assistance-RAG',
    features: [
      'PDF knowledge-base upload',
      'Document chunking & embeddings',
      'Retrieval-Augmented Generation',
      'Intent-based routing',
      'AI responses with instant replies',
      'Human escalation support',
      'Human-in-the-loop workflows',
      'Voice interaction',
      'Admin dashboard',
      'Knowledge-base management',
      'Query & session monitoring',
    ],
    visualType: 'knowledge-graph',
    caseStudy: {
      sections: [
        {
          number: '01',
          title: 'Overview',
          content: 'NexusAI is a production-oriented RAG-based customer support assistant. It ingests domain knowledge from uploaded PDFs, chunks and embeds them into a vector store, and uses retrieval-augmented generation to answer user queries with context-aware responses — resolving over 80% of queries autonomously without human intervention.',
        },
        {
          number: '02',
          title: 'The Problem',
          content: 'Customer support teams frequently handle repetitive, knowledge-based queries that don\'t require human judgment. Standard chatbots fail because they can\'t adapt to new knowledge. Human agents are expensive and don\'t scale. The gap: an intelligent system that knows the product deeply, can adapt as knowledge evolves, and escalates to humans only when genuinely needed.',
        },
        {
          number: '03',
          title: 'What I Built',
          content: [
            'A FastAPI backend with document upload, chunking, and embedding pipelines',
            'ChromaDB vector store for semantic retrieval of relevant knowledge chunks',
            'LangChain-powered RAG pipeline to ground LLM responses in retrieved context',
            'LangGraph workflow for intent-based routing (AI response vs. human escalation)',
            'Human-in-the-loop support for escalated sessions',
            'Admin dashboard for knowledge-base and session management',
            'Voice interaction capability for accessibility',
          ],
        },
        {
          number: '04',
          title: 'Technical Decisions',
          content: [
            'Chose ChromaDB for its lightweight local deployment and strong semantic search performance for the knowledge-base scale',
            'Used LangGraph over simple chains for the routing logic — its stateful graph model handles complex multi-step decision flows cleanly',
            'Groq API for LLM inference — fast latency is critical for a real-time support experience',
            'FastAPI for async endpoints that could handle concurrent query sessions efficiently',
          ],
        },
        {
          number: '05',
          title: 'Architecture',
          content: 'PDF Upload → Document Chunking → Embedding Generation → ChromaDB Vector Store → Query → Semantic Retrieval → LangChain RAG Pipeline → Intent Router (LangGraph) → AI Response or Human Escalation → Session Monitoring → Admin Dashboard',
        },
        {
          number: '06',
          title: 'Key Features',
          content: [
            'PDF knowledge-base ingestion with automatic chunking and embedding',
            'Semantic retrieval grounded responses (RAG)',
            'Intent-based routing via LangGraph state machine',
            'Seamless human escalation with session handoff',
            'Voice interaction for accessibility',
            'Real-time query and session monitoring dashboard',
          ],
        },
        {
          number: '07',
          title: 'Outcome',
          content: '80%+ of customer queries are resolved autonomously without human intervention. The system maintains context across conversation turns, adapts as new knowledge is uploaded, and gracefully escalates complex edge cases to human agents.',
        },
        {
          number: '08',
          title: 'Technologies',
          content: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'ChromaDB', 'Groq API'],
        },
        {
          number: '09',
          title: 'Links',
          content: 'https://github.com/ranc5291-dotcom/customer-support-assistance-RAG',
        },
      ],
    },
  },
  {
    id: 'prompt-studio',
    number: '02',
    title: 'AI Prompt Studio',
    shortTitle: 'AI Prompt Studio',
    category: 'AI / Prompt Engineering / Frontend',
    description: 'An AI workspace for prompt analysis, optimization, and management — built with production-grade testing, CI/CD, and authentication.',
    longDescription: 'A full-stack AI workspace that helps users analyze, optimize, and manage prompts. Features Firebase auth, Zod validation, 30 unit tests, 4 E2E tests, and Vercel deployment.',
    status: 'completed',
    technologies: ['React', 'TypeScript', 'Groq', 'Firebase', 'Zod', 'Playwright', 'Vitest', 'Vercel'],
    githubUrl: 'https://github.com/ranc5291-dotcom/flyrank-capstone',
    features: [
      'Prompt analysis & optimization',
      'Prompt management system',
      'Firebase authentication',
      'Protected routes',
      'Zod schema validation',
      'Error handling',
      '30 unit tests (Vitest + RTL)',
      '4 E2E tests (Playwright)',
      'CI/CD pipeline (GitHub Actions)',
      'Vercel deployment',
    ],
    visualType: 'prompt-flow',
    caseStudy: {
      sections: [
        {
          number: '01',
          title: 'Overview',
          content: 'AI Prompt Studio is a production-grade AI workspace that helps users write, analyze, optimize, and manage prompts. Built during my AI Engineer internship at FlyRank AI as the capstone project, it demonstrates a full product engineering workflow — from feature design to testing to CI/CD deployment.',
        },
        {
          number: '02',
          title: 'The Problem',
          content: 'Prompt engineering lacks structured tooling. Engineers write prompts in ad-hoc notes, have no way to version or compare them, and no systematic way to improve them. The result is inconsistent AI output quality. There was an opportunity to build a workspace that treats prompts as first-class engineering artifacts.',
        },
        {
          number: '03',
          title: 'What I Built',
          content: [
            'React + TypeScript frontend with a clean, structured workspace UI',
            'Prompt analysis engine using Groq API — evaluates clarity, specificity, potential failure modes',
            'Prompt optimization flow: raw prompt → analyzed → suggested improvements → optimized output',
            'Prompt management system for storing, organizing, and revisiting prompts',
            'Firebase authentication with protected route middleware',
            'Zod-based schema validation for all API inputs',
            'Complete test suite: 30 unit tests with Vitest + React Testing Library, 4 E2E tests with Playwright',
            'GitHub Actions CI/CD pipeline with automated test runs on push',
            'Vercel deployment with environment variable management',
          ],
        },
        {
          number: '04',
          title: 'Technical Decisions',
          content: [
            'TypeScript throughout — strong typing prevents a class of runtime errors common in AI API integrations',
            'Zod for runtime validation — API responses from LLMs are inherently unpredictable, so schema validation before rendering is essential',
            'Playwright for E2E tests — captures the full user authentication and prompt workflow that unit tests cannot',
            'Firebase Auth chosen for its simple integration with React and robust session management',
            'Groq for fast inference — prompt analysis needs to feel near-instant to be useful',
          ],
        },
        {
          number: '05',
          title: 'Architecture',
          content: 'User → Firebase Auth → Protected Routes → Prompt Workspace → Groq API (Analysis & Optimization) → Zod Validation → UI Response → Prompt Manager (Store / Organize) → GitHub Actions CI → Vercel Deploy',
        },
        {
          number: '06',
          title: 'Key Features',
          content: [
            'Structured prompt analysis: clarity, specificity, failure mode detection',
            'Optimization suggestions with before/after comparison',
            'Persistent prompt management with organization',
            'Firebase authentication with protected routes',
            'Comprehensive validation with Zod',
            'Full test coverage: unit + E2E',
          ],
        },
        {
          number: '07',
          title: 'Testing & Validation',
          content: [
            '30 unit tests covering components, hooks, validation logic, and API utilities',
            '4 Playwright E2E tests covering authentication flow, prompt creation, analysis, and optimization',
            'GitHub Actions pipeline runs full test suite on every push',
            'Zod schema validation on all external data before state updates',
          ],
        },
        {
          number: '08',
          title: 'Outcome',
          content: 'A fully functional, tested, and deployed AI workspace that demonstrates a complete product engineering cycle — from design through testing and production deployment. This project was the capstone of my FlyRank AI internship.',
        },
        {
          number: '09',
          title: 'Technologies',
          content: ['React', 'TypeScript', 'Groq', 'Firebase', 'Zod', 'Playwright', 'Vitest', 'Vercel'],
        },
        {
          number: '10',
          title: 'Links',
          content: 'https://github.com/ranc5291-dotcom/flyrank-capstone',
        },
      ],
    },
  },
  {
    id: 'lms',
    number: '03',
    title: 'Learning Management System',
    shortTitle: 'LMS',
    category: 'Full Stack / Education / Product Engineering',
    description: 'An ongoing production-oriented LMS designed to bring academic, faculty, placement, and administrative workflows into one unified platform.',
    longDescription: 'Currently building and refining the platform with a focus on real-world academic workflows, role-based experiences, and production-oriented architecture.',
    status: 'building',
    statusLabel: 'Currently Building',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase'],
    features: [
      'Student dashboard & semester progression',
      'Marks, attendance & notes',
      'Notice board & gallery',
      'Faculty academic management',
      'Marks & attendance workflows',
      'Placement dashboard & workflows',
      'Admin management dashboard',
      'Role-based access control',
      'Authentication system',
      'PWA support & mobile-friendly',
      'Responsive interface',
      'Database-backed application',
    ],
    visualType: 'lms-network',
    caseStudy: {
      sections: [
        {
          number: '01',
          title: 'The Problem',
          content: 'Academic institutions manage student records, faculty workflows, placement pipelines, and administrative operations across disconnected tools — spreadsheets, email, physical registers. There is no unified platform that gives every stakeholder a role-appropriate view of the same data. This creates friction, duplication, and missed information for students, faculty, placement teams, and administrators.',
        },
        {
          number: '02',
          title: 'Why I Built It',
          content: 'This is a product I wanted to exist — not just as a demo, but as a genuinely useful platform for real academic institutions. The goal is to centralize the academic experience into a single application that different roles can actually rely on, with clean workflows designed around how these roles actually operate.',
        },
        {
          number: '03',
          title: 'Users & Roles',
          content: [
            'Student — dashboard, semester progression, marks, attendance, notes, notice board, gallery, placement information',
            'Faculty — dashboard, student academic management, marks management, attendance workflows, content management',
            'Placement — dashboard, placement information, student placement workflows',
            'Admin — administrative dashboard, user and application management, academic data management, notices and content management',
          ],
        },
        {
          number: '04',
          title: 'What I Built',
          content: [
            'Multi-role authentication system with role-based access control',
            'Student dashboard with semester progression, marks tracking, and attendance',
            'Faculty workflows for marks and attendance management',
            'Placement dashboard and information management',
            'Administrative control panel for users, academic data, and notices',
            'PWA support for mobile-first access',
            'Supabase database backend with real-time data',
            'Responsive interface designed for students, faculty, and admins',
          ],
        },
        {
          number: '05',
          title: 'Technical Architecture',
          content: 'React + TypeScript frontend with Vite build tooling. Tailwind CSS for a consistent, responsive design system. Supabase as the backend — PostgreSQL database, authentication, and row-level security for role-based data access. PWA configuration for installability and offline capability.',
        },
        {
          number: '06',
          title: 'Key Product Decisions',
          content: [
            'Supabase chosen for integrated auth + database + real-time subscriptions — reduces backend complexity while maintaining production capability',
            'Row-level security (RLS) enforced at the database level — role restrictions are not just frontend guards',
            'PWA support prioritized early — academic institutions have high mobile usage',
            'Tailwind CSS for rapid, consistent UI development that scales across role-specific dashboards',
          ],
        },
        {
          number: '07',
          title: 'Current Progress',
          content: 'Currently building and refining the platform with a focus on real-world academic workflows, role-based experiences, and production-oriented architecture. Core authentication, role-based routing, and primary student and faculty views are in active development.',
        },
        {
          number: '08',
          title: 'Challenges & Iterations',
          content: [
            'Designing a single UI system that serves four very different user roles without feeling generic',
            'Structuring Supabase RLS policies to cleanly enforce role boundaries without complex query gymnastics',
            'Balancing feature scope — a real LMS has many possible features; prioritizing what genuinely matters for each role',
          ],
        },
        {
          number: '09',
          title: "What's Next",
          content: [
            'Complete faculty marks and attendance management workflows',
            'Placement dashboard with student application tracking',
            'Admin reporting and analytics views',
            'Progressive enhancement with notifications and calendar integration',
            'Production deployment and user testing',
          ],
        },
        {
          number: '10',
          title: 'Demo / Repository',
          content: 'Repository and live demo coming as development progresses.',
        },
      ],
    },
  },
  {
    id: 'course-recommendation',
    number: '04',
    title: 'Course Recommendation System',
    shortTitle: 'Course Recommender',
    category: 'AI / Recommendation / Data Visualization',
    description: 'An end-to-end AI-powered course recommendation platform focused on data-driven decision-making and personalized learning paths across multiple academic domains.',
    longDescription: 'A comprehensive recommendation system covering Medical, Science, Engineering, and Commerce domains. Supports undergraduate, master\'s, and skill-based programs with rich data visualizations.',
    status: 'completed',
    technologies: ['Python', 'Prompt Engineering'],
    features: [
      'Course recommendations by domain',
      'Required skills mapping',
      'Real-world application context',
      'Hiring company insights',
      '5-year demand trend analysis',
      'Future predictions',
      'Alternative & emerging course suggestions',
      'Multi-course comparison',
      'Radar, Pie, Line, Tree visualizations',
    ],
    visualType: 'data-viz',
    caseStudy: {
      sections: [
        {
          number: '01',
          title: 'Overview',
          content: 'An end-to-end AI-powered course recommendation platform that helps students make data-driven decisions about their education. Covers Medical, Science, Engineering, and Commerce domains with support for undergraduate programs, master\'s programs, and skill-based learning.',
        },
        {
          number: '02',
          title: 'The Problem',
          content: 'Students face information overload when choosing courses. Standard recommendation lists don\'t provide context — why a course matters, what skills it builds, which companies hire for it, or how demand will trend over the next 5 years. A meaningful recommendation system needs to answer all these questions in one place.',
        },
        {
          number: '03',
          title: 'What I Built',
          content: [
            'Domain-aware recommendation engine for Medical, Science, Engineering, and Commerce',
            'Skills mapping: what you\'ll learn and what the market demands',
            'Hiring company insights aligned with each course path',
            '5-year demand trend modeling with future predictions',
            'Alternative and emerging course suggestions to broaden decision context',
            'Multi-course comparison view for side-by-side evaluation',
            'Rich data visualizations: Radar, Pie, Line, and Tree charts',
          ],
        },
        {
          number: '04',
          title: 'Technical Decisions',
          content: [
            'Prompt engineering as the core intelligence layer — carefully structured prompts generate structured, domain-specific recommendations with consistent output format',
            'Multiple visualization types chosen deliberately: Radar for skill comparison, Pie for domain distribution, Line for trends, Tree for course hierarchy',
            'Data-driven design — every recommendation includes supporting context rather than a bare course list',
          ],
        },
        {
          number: '05',
          title: 'Key Features',
          content: [
            'Personalized recommendations across 4 academic domains',
            'Undergraduate, master\'s, and skill-based program coverage',
            'Skills-to-market demand alignment',
            '5-year demand trend analysis',
            'Multi-course comparison with visualizations',
            'Emerging course discovery',
          ],
        },
        {
          number: '06',
          title: 'Outcome',
          content: 'A working end-to-end recommendation system that demonstrates idea execution through prompt engineering and data visualization. The project illustrates how AI can transform a raw data problem into a structured, actionable decision-support tool.',
        },
        {
          number: '07',
          title: 'Technologies',
          content: ['Python', 'Prompt Engineering'],
        },
      ],
    },
  },
  {
    id: 'yumrush',
    number: '05',
    title: 'YumRush — Food Delivery App',
    shortTitle: 'YumRush',
    category: 'Full-Stack / AI / Web Application',
    description: 'A full-stack food delivery application built with FastAPI and web technologies, enhanced with AI-powered customer support, review analysis, personalized recommendations, health-aware ordering, voice interaction, and gamification.',
    longDescription: 'A robust full-featured food delivery backend with FastAPI, JWT auth, REST APIs, and AI-enhanced features including review summarization, voice ordering, and health-based recommendations.',
    status: 'completed',
    technologies: ['FastAPI', 'HTML', 'CSS', 'JavaScript', 'Database', 'AI/LLM capabilities'],
    githubUrl: 'https://github.com/ranc5291-dotcom/yumrush',
    features: [
      'JWT authentication & REST APIs',
      'Menu management & Cart operations',
      'Order processing',
      'AI-powered review summary analyzer',
      'Admin dashboard',
      'Customer support chatbot',
      'Voice-based ordering',
      'Personalized recommendations',
      'Health-based recommendations',
      'Spin wheel discounts and rewards',
    ],
    visualType: 'delivery',
    caseStudy: {
      sections: [
        {
          number: '01',
          title: 'Overview',
          content: 'YumRush is a full-stack food delivery application featuring JWT authentication, REST APIs, admin management, and deep AI-powered enhancements including review summarization, a support chatbot, voice ordering, and personalized recommendations.',
        },
        {
          number: '02',
          title: 'The Problem',
          content: 'Standard food delivery apps focus strictly on the transactional ordering pipeline. The opportunity here was to extend that baseline with AI features — making the product feel intelligent, proactive, and personalized beyond a basic order-menu-cart-checkout flow.',
        },
        {
          number: '03',
          title: 'What I Built',
          content: [
            'FastAPI backend with JWT authentication and REST API architecture',
            'Core ordering flow: menu management, cart operations, order processing',
            'AI review summary analyzer for digesting massive amounts of user feedback',
            'Admin dashboard for operational and menu management',
            'Customer support chatbot handling common transactional queries',
            'Voice ordering capability for accessibility and convenience',
            'Personalized and health-based recommendation engine',
            'Gamified spin wheel for discounts and rewards',
          ],
        },
        {
          number: '04',
          title: 'Key Features',
          content: [
            'Secure JWT auth for customers and admins',
            'Complete ordering pipeline from browse to checkout',
            'AI-powered review summarization',
            'Personalized and health-aware recommendations',
            'Voice ordering interface',
            'Gamified loyalty system',
          ],
        },
        {
          number: '05',
          title: 'Technologies',
          content: ['FastAPI', 'HTML', 'CSS', 'JavaScript', 'Database', 'AI/LLM capabilities'],
        },
        {
          number: '06',
          title: 'Links',
          content: 'https://github.com/ranc5291-dotcom/yumrush',
        },
      ],
    },
  },
];
