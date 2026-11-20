"""
Portfolio Agent - Ground Truth Knowledge Ingestion Script
Author: H N Charan Portfolio
Description: Chunks, categorizes, and vectorizes portfolio knowledge for RAG retrieval.
Run this script whenever profile information is updated:
    python scripts/ingest.py
"""

import json
import os

GROUND_TRUTH_DATA = [
    {
        "id": "contact_info",
        "category": "contact",
        "title": "Contact Information & Resume",
        "content": (
            "Name: H N Charan\n"
            "Role: AI Engineer & Final-Year Computer Science (AIML) Student\n"
            "Phone: +91-7337615979\n"
            "Email: charanhn629@gmail.com\n"
            "LinkedIn: https://www.linkedin.com/in/hn-charan-23282329b/\n"
            "GitHub: https://github.com/ranc5291-dotcom\n"
            "HackerRank: https://www.hackerrank.com/profile/charanhn629\n"
            "Location: Bengaluru, Karnataka, India\n"
            "Languages Spoken: English, Kannada, Hindi\n"
            "Resume: Downloadable directly from the portfolio website (available via the \"Resume\" button in the navbar, "
            "\"Download Resume\" in the hero section, and \"Resume\" in the contact section, linking to /Charan_Resume.pdf)."
        ),
        "keywords": ["contact", "email", "phone", "linkedin", "github", "hackerrank", "location", "bengaluru", "reach", "hire", "languages", "resume", "cv", "download resume"]
    },
    {
        "id": "professional_summary",
        "category": "summary",
        "title": "Professional Summary, Career Interest & Availability",
        "content": (
            "H N Charan is a final-year Computer Science (AIML) student and AI Engineer with hands-on experience "
            "building AI-powered applications, GenAI solutions, RAG systems, and intelligent user experiences. "
            "He focuses on building production-ready systems rather than just prototypes — having shipped RAG pipelines, "
            "agentic LLM workflows, and full-stack AI backends. He is passionate about developing practical AI solutions "
            "and solving real-world problems through modern technologies.\n\n"
            "Career Interest & Availability:\n"
            "- Open to full-time AI Engineer roles? Yes, he is looking for fresher AI / GenAI engineer roles, based in Bengaluru.\n"
            "- Core Focus: Applied AI / GenAI Engineering, RAG systems, LLM application development, agentic workflows, and AI-powered product engineering.\n"
            "- Opportunities: Fully open to fresher AI engineer roles, full-time positions, internships, and high-impact AI opportunities.\n"
            "- Resume & Contact: Resume is downloadable from the portfolio (nav, hero, and contact section). Charan can be reached at charanhn629@gmail.com, "
            "or through the LinkedIn (https://www.linkedin.com/in/hn-charan-23282329b/) and GitHub (https://github.com/ranc5291-dotcom) links on the site."
        ),
        "keywords": ["summary", "about", "bio", "career", "availability", "full-time", "job", "open to work", "roles", "goals", "fresher", "ai engineer", "genai", "bengaluru", "open to full-time"]
    },
    {
        "id": "technical_skills",
        "category": "skills",
        "title": "Technical Skills & Competencies",
        "content": (
            "Programming Languages: Python, SQL, TypeScript, JavaScript\n"
            "AI / Machine Learning / GenAI: Generative AI, Retrieval-Augmented Generation (RAG), Large Language Models (LLMs), "
            "Vector Embeddings, Vector Databases, Prompt Engineering, Agentic Workflows, Machine Learning\n"
            "AI Tools & Development Platforms: Lovable, Google Antigravity, Cursor, Claude Code, ChatGPT, Google Gemini, n8n, Langflow, OpenAI Codex\n"
            "Frameworks & Libraries: LangChain, LangGraph, FastAPI, React, REST APIs, Docker, Vite, Tailwind CSS, Framer Motion\n"
            "Databases & Storage: ChromaDB, Supabase, PostgreSQL, Firebase / Firestore, MongoDB\n"
            "Testing & DevOps: Vitest, React Testing Library, Playwright, GitHub Actions, Vercel, Render, CI/CD pipelines\n"
            "Workflow Automation: n8n, Workflow Automation\n"
            "Data & Business Intelligence: Microsoft Excel, Power BI, Tableau"
        ),
        "keywords": ["skills", "tech stack", "languages", "python", "typescript", "fastapi", "react", "langchain", "langgraph", "chromadb", "rag", "docker", "testing", "playwright", "n8n", "lovable", "antigravity", "cursor", "claude code", "chatgpt", "gemini", "langflow", "codex", "ai tools"]
    },
    {
        "id": "exp_flyrank",
        "category": "experience",
        "title": "Work Experience - AI Engineer Intern at FlyRank AI",
        "content": (
            "Company: FlyRank AI\n"
            "Role: AI Engineer Intern\n"
            "Duration: July 2026 – August 2026\n"
            "Location: Bengaluru, India\n"
            "Work Mode: Remote\n"
            "Key Contributions:\n"
            "- Worked with LLMs, prompt engineering, AI APIs, and AI tools for AI-powered application development.\n"
            "- Worked on AI workflows and LLM integrations using React, TypeScript, and REST APIs.\n"
            "- Applied prompt optimization, structured outputs, and error-handling techniques to improve AI workflows.\n"
            "- Contributed to system design, testing, debugging, and deployment of AI-powered features."
        ),
        "keywords": ["flyrank", "flyrank ai", "internship", "ai engineer intern", "experience", "work", "frontend", "rest apis"]
    },
    {
        "id": "exp_innomatic",
        "category": "experience",
        "title": "Work Experience - Gen AI Intern at Innomatic Research Lab",
        "content": (
            "Company: Innomatic Research Lab\n"
            "Role: Gen AI Intern\n"
            "Location: Bengaluru (Remote)\n"
            "Period: Feb 2026 – May 2026\n"
            "Key Contributions:\n"
            "- Designed and deployed FastAPI endpoints powering AI-driven automation workflows across multiple internal applications.\n"
            "- Built LLM pipelines with LangChain and LangGraph, reducing manual query-handling effort by streamlining context-aware routing.\n"
            "- Engineered RAG systems with vector retrieval that significantly cut irrelevant AI responses by improving retrieval precision through structured prompt pipelines.\n"
            "- Contributed to 3 production-grade Gen AI features shipped to real users within a 4-month internship cycle.\n"
            "Stack Used: Python, FastAPI, LangChain, LangGraph, ChromaDB, Groq API."
        ),
        "keywords": ["innomatic", "innomatic research lab", "gen ai intern", "internship", "fastapi", "langgraph", "rag", "chromadb"]
    },
    {
        "id": "proj_nexusai",
        "category": "projects",
        "title": "Project - NexusAI: Customer Support Assistant (RAG)",
        "content": (
            "Project Name: NexusAI — Customer Support Assistant\n"
            "GitHub Repository: https://github.com/ranc5291-dotcom/customer-support-assistance-RAG\n"
            "Stack: LangChain, LangGraph, ChromaDB, Groq API (llama-3.3-70b-versatile), FastAPI, HTML/CSS/JS\n"
            "Key Highlights:\n"
            "- RAG-based customer support assistant resolving 80%+ of user queries autonomously without human intervention.\n"
            "- Smart query routing with intent detection: routes requests to Knowledge Path (RAG + LLM), Simple Reply (predefined fast answers), or Escalation (admin/human support).\n"
            "- Ingestion pipeline: splits uploaded documents (PDF/TXT) into semantic chunks, converts them to embeddings, and indexes them in ChromaDB.\n"
            "- Features: Human-in-the-loop escalation, real-time voice I/O via browser speech recognition, and an admin dashboard for document management, monitoring AI responses, and session analytics.\n"
            "- Includes formal High Level Design (HLD) and complete technical documentation."
        ),
        "keywords": ["nexusai", "customer support", "rag", "langgraph", "llama-3.3-70b", "voice", "admin dashboard", "intent detection"]
    },
    {
        "id": "proj_aipromptstudio",
        "category": "projects",
        "title": "Project - AI Prompt Studio",
        "content": (
            "Project Name: AI Prompt Studio — AI Prompt Engineering Workspace\n"
            "GitHub Repository: https://github.com/ranc5291-dotcom/flyrank-capstone\n"
            "Stack: React, TypeScript, Groq API, Firebase, Zod, Playwright, Vitest\n"
            "Key Highlights:\n"
            "- Comprehensive AI workspace for prompt analysis, testing, optimization, and prompt template management.\n"
            "- Implemented secure Firebase authentication, Zod schema validation, protected routes, and resilient error boundaries.\n"
            "- Robust testing suite with 30 unit tests and 4 Playwright end-to-end (E2E) tests, automated via CI/CD and deployed on Vercel."
        ),
        "keywords": ["ai prompt studio", "prompt engineering", "groq", "firebase", "playwright", "testing", "vitest", "zod"]
    },
    {
        "id": "proj_yumrush",
        "category": "projects",
        "title": "Project - YumRush: AI-Powered Food Delivery Platform",
        "content": (
            "Project Name: YumRush — AI-Powered Food Delivery Platform\n"
            "GitHub Repository: https://github.com/ranc5291-dotcom/yumrush\n"
            "Stack: FastAPI, Python, JWT Authentication, React, Render\n"
            "Key Highlights:\n"
            "- Full-stack food delivery application with secure JWT-authenticated FastAPI endpoints handling end-to-end order processing.\n"
            "- Integrated an LLM-powered assistant, automated AI review summarization, voice-based food ordering, and personalized meal recommendations.\n"
            "- Deployed on Render with an administrative dashboard for user management, real-time order tracking, and sales analytics."
        ),
        "keywords": ["yumrush", "food delivery", "fastapi", "voice ordering", "jwt", "recommendations", "render"]
    },
    {
        "id": "proj_cseaiml_lms",
        "category": "projects",
        "title": "Project - CSEAIML LMS: Full-Stack Department LMS (PWA)",
        "content": (
            "Project Name: CSEAIML LMS — Full-Stack Department LMS (PWA)\n"
            "Status: Live production PWA for the CSE (AI/ML) department with 100+ active students and faculty users\n"
            "Institution: East West Institute of Technology, Bengaluru\n"
            "Repository: https://github.com/ranc5291-dotcom/CSE-AIML---LMS-APP\n"
            "Live: https://cse-aiml-lms-app.vercel.app\n"
            "Stack: React, Vite, Tailwind v4, Firebase (Auth, Firestore, FCM), Supabase (PostgreSQL, Storage), Cloudinary, FastAPI backend, Groq-powered in-app AI support agent\n"
            "Features:\n"
            "- Role-based dashboards for student, faculty, HOD, and admin.\n"
            "- Semester-aware student views and progression tracking.\n"
            "- Internal marks with publish/unpublish and CSV/Excel bulk upload.\n"
            "- Attendance uploads and monitoring.\n"
            "- Department notice board and placement drives.\n"
            "- Phone and email OTP login.\n"
            "- FCM push notifications.\n"
            "- Installable PWA on Android and iOS.\n"
            "- In-app AI support agent powered by Groq for answering college and departmental inquiries."
        ),
        "keywords": ["lms", "cseaiml lms", "college", "pwa", "supabase", "firebase", "fastapi", "east west institute", "projects", "live", "100+ users", "groq", "attendance", "marks", "hod", "fcm"]
    },
    {
        "id": "proj_other",
        "category": "projects",
        "title": "Other Projects - Resume Matcher & Hirebridge",
        "content": (
            "1. Resume Matcher (RAG Project):\n"
            "   - RAG-based resume-to-job-description analyzer using LangChain, ChromaDB, Groq API, and React/Vite.\n"
            "   - Features role suitability matching, gap analysis, side-by-side comparison, and ATS-optimized PDF export.\n\n"
            "2. Hirebridge (AI Interview Practice Platform):\n"
            "   - AI-powered mock interview practice platform built with FastAPI, MongoDB, Anthropic Claude API, ElevenLabs Text-to-Speech, and React/Vite."
        ),
        "keywords": ["resume matcher", "hirebridge", "interview", "ats", "elevenlabs", "anthropic", "rag"]
    },
    {
        "id": "education_certs",
        "category": "education",
        "title": "Education & Certifications",
        "content": (
            "Degree: Bachelor of Engineering (B.E.) in Computer Science & Engineering (AIML)\n"
            "Institution: East West Institute of Technology, Bengaluru, Karnataka\n"
            "CGPA: 8.5\n"
            "Expected Graduation: 2027\n\n"
            "Certifications Earned:\n"
            "- Introduction to Large Language Models — Google\n"
            "- Fundamentals of ML & AI — AWS\n"
            "- AWS AI Practitioner Learning Plan — AWS\n"
            "- Machine Learning using Python — Simplilearn\n"
            "- Generative AI Studio — Simplilearn"
        ),
        "keywords": ["education", "degree", "college", "east west institute", "cgpa", "certifications", "aws", "google llm", "simplilearn", "graduation"]
    },
    {
        "id": "growth_areas",
        "category": "summary",
        "title": "Growth Areas & Self-Awareness",
        "content": (
            "When asked about weaknesses, areas for improvement, or growth areas, note that Charan is a final-year student "
            "who has grown quickly by shipping real production features rather than only building prototypes. Like any early-career "
            "engineer moving fast, he is still deepening his depth in large-scale distributed systems and formal MLOps practices "
            "(model monitoring, evaluation pipelines at scale), since most of his experience so far has been in applied product engineering "
            "(RAG, LLM integration, full-stack features) rather than infrastructure-heavy ML systems work. He treats this as an active, "
            "ongoing focus rather than a gap, and is deliberately seeking roles that will stretch him in this direction."
        ),
        "keywords": ["weakness", "weaknesses", "weekness", "improve", "improvement", "growth", "gap", "challenge", "struggle", "shortcoming", "development area"]
    },
    {
        "id": "hackathons_activities",
        "category": "hackathons",
        "title": "Hackathons, Competitions & Leadership",
        "content": (
            "Hackathons & Competitions:\n"
            "- VishwaNova — National Level Weboreel AI Hackathon (Participant)\n"
            "- IDEATHON 2025 — Shortlisted, State-level Hackathon Participant\n"
            "- Agentic AI Hackathon — HACK2SKILL (Participant)\n"
            "- HackerRank Challenges (Participant)\n\n"
            "HackerRank Profile & Achievements:\n"
            "- H N Charan has a HackerRank profile (https://www.hackerrank.com/profile/charanhn629) with a Python Gold badge (975 points). Earned the Python Gold badge through problem-solving challenges.\n\n"
            "Leadership & Volunteering:\n"
            "- Hackathon Coordinator & Volunteer Coordinator at East West Institute of Technology."
        ),
        "keywords": ["hackathons", "competitions", "vishwanova", "ideathon", "agentic ai", "hackerrank", "python gold", "gold badge", "coding profile", "problem solving", "volunteer", "coordinator"]
    }
]

def generate_knowledge_base():
    output_dir = os.path.join(os.path.dirname(__file__), "..", "src", "data")
    os.makedirs(output_dir, exist_ok=True)
    output_file = os.path.join(output_dir, "agentKnowledgeData.json")
    
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(GROUND_TRUTH_DATA, f, indent=2, ensure_ascii=False)
    
    print(f"Successfully generated knowledge base with {len(GROUND_TRUTH_DATA)} grounded chunks at: {output_file}")

if __name__ == "__main__":
    generate_knowledge_base()
