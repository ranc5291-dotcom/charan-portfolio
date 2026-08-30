Charan — Personal Portfolio & AI Agent

An interactive personal portfolio showcasing my projects, technical skills, experience, and an AI-powered personal agent designed to help visitors learn more about my work.

🌐 Live Website: https://charan-portfolio-opal.vercel.app/

💻 GitHub: https://github.com/ranc5291-dotcom/charan-portfolio

🚀 About the Project

This project is my personal portfolio website, built to serve as both a professional portfolio and an interactive introduction to my technical work.

Instead of creating a traditional static portfolio, I integrated a personal AI agent that allows visitors to interact with my portfolio conversationally and learn about my projects, skills, experience, and technical interests.

The goal is to combine personal branding, modern web development, and practical AI integration into one real-world project.

The portfolio is designed primarily for recruiters, hiring managers, internship coordinators, developers, and anyone interested in understanding my technical background.

🤖 Personal AI Agent

The portfolio includes Charan's Portfolio Agent, an AI-powered interface focused specifically on my professional profile.

Visitors can ask questions such as:

What projects has Charan built?
What technologies does Charan work with?
Tell me about Charan's technical skills.
Which projects demonstrate his AI experience?
Does Charan have RAG experience?
What kind of roles is Charan interested in?

The purpose of the agent is not to act as a general-purpose chatbot. Instead, it provides a conversational way for visitors to explore information about my professional background.

For example, instead of manually searching through multiple portfolio sections, a visitor can ask a direct question about my projects or experience.

✨ Features
🎨 Modern personal portfolio design
🤖 Integrated personal AI agent
📂 Project showcase
💻 Technical skills and experience
⚡ Interactive animations and UI
🌐 Fully deployed web application
📱 Responsive design
🧩 Interactive 3D elements
🚀 Modern frontend architecture
🔗 Direct GitHub, LinkedIn, and email contact options
🔍 SEO and metadata configuration
🛠️ Tech Stack
Frontend
React
TypeScript
Vite
Tailwind CSS
CSS
UI & Animation
Framer Motion
Three.js
React Three Fiber
AI
Personal AI agent integrated into the portfolio experience
LLM-based conversational interaction
Portfolio-focused knowledge and instructions
Deployment
Vercel
🏗️ Project Structure
charan-portfolio/
├── public/
├── src/
│   ├── components/
│   ├── sections/
│   ├── assets/
│   └── ...
├── package.json
├── vite.config.ts
└── README.md

The project is organized around reusable frontend components and portfolio sections, with the AI agent integrated into the overall portfolio experience.

🏗️ Architecture

The simplified architecture of the project is:

                    ┌──────────────────────┐
                    │       Visitor       │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Portfolio Website  │
                    │                      │
                    │ About / Experience   │
                    │ Skills / Projects    │
                    │ Contact              │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │  Portfolio Agent UI  │
                    │                      │
                    │ Visitor asks a      │
                    │ portfolio question  │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     AI / LLM Layer   │
                    │                      │
                    │ Processes the query  │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Portfolio Knowledge  │
                    │                      │
                    │ Projects / Skills /  │
                    │ Experience / Profile │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Grounded Answer    │
                    │ returned to visitor  │
                    └──────────────────────┘

The key design principle is that the AI feature is focused on my professional portfolio rather than being a general-purpose chatbot.

💻 Getting Started
Prerequisites

Make sure the following are installed:

Node.js
npm
Git
Installation

Clone the repository:

git clone https://github.com/ranc5291-dotcom/charan-portfolio.git

Navigate into the project:

cd charan-portfolio

Install dependencies:

npm install

Start the development server:

npm run dev

The application will then be available at the local development URL provided by Vite.

🏭 Production Build

To create a production build:

npm run build

The generated application can be deployed using a supported hosting platform such as Vercel.

🌐 Live Demo

The deployed portfolio is available at:

https://charan-portfolio-opal.vercel.app/

The live application demonstrates:

Personal portfolio sections
Project showcase
Technical skills
Experience
Contact information
Personal AI Agent
Interactive UI
Responsive design
🎯 Project Purpose

This project was created as a practical demonstration of my ability to:

Build and deploy a real-world web application
Create a professional personal brand
Work with modern frontend technologies
Integrate AI into a useful user-facing experience
Design an interactive and responsive interface
Present technical projects through an accessible portfolio
Evaluate and improve a deployed application

The project combines:

Web Development + AI + Personal Branding

into one deployable application.

🧠 Important Design Decision

One of my main design decisions was to make the AI feature a portfolio-specific personal agent instead of a general-purpose chatbot.

The purpose of the website is to help visitors understand my professional background, projects, skills, and experience.

A general chatbot would introduce unnecessary scope and would not necessarily provide value to someone visiting a portfolio.

Keeping the agent focused on my professional profile makes the feature more useful for recruiters and visitors while keeping the project manageable.

It also makes evaluation easier because the expected knowledge domain is clearly defined.

📊 Evaluation Results

I used Lighthouse to evaluate the deployed portfolio after making performance and usability improvements.

Category	Score
Performance	81
Accessibility	96
Best Practices	100
SEO	100
Evaluation summary

The results indicate that:

Accessibility — 96: strong accessibility with some room for improvement.
Best Practices — 100: the site meets the tested best-practice checks.
SEO — 100: the basic SEO and metadata checks are strong.
Performance — 81: performance is good but remains the primary area for future optimization.

These scores represent a snapshot from the testing environment. Performance can vary depending on the browser, device, network conditions, and Lighthouse run.

🧪 Testing

I tested the portfolio through the deployed website rather than relying only on local development.

The testing process included:

Opening the deployed website
Testing navigation
Testing the AI agent
Testing portfolio interactions
Checking responsive behaviour
Checking project links
Checking contact links
Running Lighthouse
Reviewing accessibility
Reviewing SEO
Reviewing best practices
Reviewing performance

The goal was to identify problems before treating the portfolio as a finished public project.

⚠️ Known Limitations

The project currently has several known limitations.

1. Portfolio information dependency

The AI agent depends on the information provided about my portfolio.

If my projects, experience, skills, or other profile information changes and the underlying information is not updated, responses can become outdated.

2. AI response reliability

Because the portfolio agent uses an LLM, responses may not always be perfectly phrased or interpreted.

For important professional information, the actual portfolio content should remain the source of truth.

3. Performance

The recorded Lighthouse performance score was 81.

Although performance improvements have already been made, there is still room to optimize areas such as loading behaviour, JavaScript execution, animations, and frontend resources.

4. Limited scope

The agent is intentionally focused on my professional portfolio.

It is not designed to function as a general-purpose AI assistant.

5. Browser and device differences

The portfolio is responsive, but rendering and performance can vary across different browsers, devices, screen sizes, and network conditions.

🔍 Human Review

AI-assisted development does not mean that generated output is automatically correct.

I reviewed the application myself by:

Running the application
Testing the deployed website
Checking the navigation
Testing the portfolio agent
Reviewing responsive behaviour
Checking external links
Running Lighthouse
Reviewing the resulting performance, accessibility, best-practice, and SEO results

The final deployed experience was checked by me before submission.

🤖 AI Development Transparency

AI tools were used as a development and problem-solving partner during this project.

AI assistance was used for activities such as:

Exploring implementation approaches
Debugging development issues
Generating UI/UX ideas
Improving portfolio presentation
Refining the AI agent experience
Reviewing implementation approaches
Suggesting code improvements

I remained responsible for reviewing and testing the resulting implementation.

I did not treat AI-generated output as automatically correct. I tested the application myself, reviewed the deployed website, checked responsive behaviour, tested the AI agent, and used Lighthouse to evaluate the final result.

📈 Future Improvements

If I continue developing the portfolio, I would like to:

Improve the Lighthouse performance score further.
Optimize JavaScript and frontend resource loading.
Expand evaluation cases for the Personal Portfolio Agent.
Improve response reliability and grounding.
Keep portfolio information synchronized with new projects and experience.
Improve the mobile experience further.
Add more structured portfolio information for the agent.
Improve analytics and visitor insights.
Add more intelligent project-specific interactions.



👨‍💻 About Me

I'm H N Charan, a Computer Science and Engineering (AIML) student and developer interested in building practical software and AI-powered applications.

My interests include:

Artificial Intelligence
Generative AI
RAG systems
LLM applications
Full-stack development
Frontend development
AI-powered products
Automation

This portfolio represents my ongoing projects, technical interests, experimentation, and development work.

📬 Contact

If you would like to connect with me:

Email:
charanhn629@gmail.com

LinkedIn:
https://www.linkedin.com/in/hn-charan-23282329b/

GitHub:
https://github.com/ranc5291-dotcom/

⭐ Conclusion

This project started as a personal portfolio but developed into more than a traditional static website.

The main idea was to combine a professional portfolio with a focused AI assistant that makes my background easier to explore.

Building the project also helped me understand that an AI-powered product is not only about getting a model to generate an answer. The surrounding user experience, data, instructions, testing, deployment, evaluation, performance, and limitations are equally important.

The final result is a live portfolio that combines:

Personal Branding + Web Development + AI + Interactive User Experience
