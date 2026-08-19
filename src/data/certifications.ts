export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerShort: string;
  category: string;
}

export const certifications: Certification[] = [
  {
    id: 'google-llm',
    title: 'Introduction to Large Language Models',
    issuer: 'Google',
    issuerShort: 'Google',
    category: 'AI / ML',
  },
  {
    id: 'aws-ml-ai',
    title: 'Fundamentals of Machine Learning & AI',
    issuer: 'Amazon Web Services',
    issuerShort: 'AWS',
    category: 'AI / ML',
  },
  {
    id: 'aws-ai-practitioner',
    title: 'AWS AI Practitioner Learning Plan',
    issuer: 'Amazon Web Services',
    issuerShort: 'AWS',
    category: 'AI / ML',
  },
  {
    id: 'simplilearn-ml',
    title: 'Machine Learning using Python',
    issuer: 'Simplilearn',
    issuerShort: 'Simplilearn',
    category: 'Machine Learning',
  },
  {
    id: 'simplilearn-gen-ai',
    title: 'Generative AI Studio',
    issuer: 'Simplilearn',
    issuerShort: 'Simplilearn',
    category: 'Generative AI',
  },
];

export interface Hackathon {
  id: string;
  title: string;
  role: string;
  type: string;
  description: string;
  isOrganizer?: boolean;
}

export const hackathons: Hackathon[] = [
  {
    id: 'vishwanova',
    title: 'VishwaNova',
    role: 'Participant',
    type: 'National Level Weboreel AI Hackathon',
    description: 'Participated in a national-level AI hackathon focused on web-based AI applications.',
  },
  {
    id: 'ideathon-2025',
    title: 'IDEATHON 2025',
    role: 'Shortlisted Participant',
    type: 'State-level Hackathon',
    description: 'Shortlisted in a state-level hackathon focused on innovative technology solutions.',
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI Hackathon',
    role: 'Participant',
    type: 'HACK2SKILL | HackerRank Challenges',
    description: 'Participated in an agentic AI hackathon exploring autonomous AI systems and workflows.',
  },
  {
    id: 'coordinator',
    title: 'Hackathon Coordinator',
    role: 'Coordinator',
    type: 'East West Institute of Technology',
    description: 'Organized and coordinated hackathon events at East West Institute of Technology.',
    isOrganizer: true,
  },
];
