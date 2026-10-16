import React from 'react';

interface SkillIconProps {
  id: string;
  size?: number;
  color?: string;
  className?: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({
  id,
  size = 14,
  color = 'currentColor',
  className = '',
}) => {
  const s = size;

  switch (id) {
    /* ─── AI Tools & Development Platforms ─────────────────────── */
    case 'lovable':
      // Lovable heart icon
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill={color} className={className} aria-hidden="true">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      );

    case 'google-antigravity':
      // Antigravity upward floating core & orbital gravity ring
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 16V8M8 12l4-4 4 4" />
        </svg>
      );

    case 'curzo':
      // Curzo terminal cursor & arrow
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill={color} className={className} aria-hidden="true">
          <path d="M4 4l7.07 17 2.51-7.39L21 11.07 4 4z" />
        </svg>
      );

    case 'claude-code':
      // Claude / Anthropic sunburst asterisk
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" className={className} aria-hidden="true">
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="5.64" y1="5.64" x2="18.36" y2="18.36" />
          <line x1="5.64" y1="18.36" x2="18.36" y2="5.64" />
        </svg>
      );

    case 'chatgpt':
      // ChatGPT / OpenAI spiral rosette
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M19.5 10.5a4.5 4.5 0 0 0-3.5-4.4M16 6a4.5 4.5 0 0 0-6.2-1.8M9.8 4.2a4.5 4.5 0 0 0-4.8 3.5M5 7.7a4.5 4.5 0 0 0-.5 6M4.5 13.5a4.5 4.5 0 0 0 3.5 4.4M8 18a4.5 4.5 0 0 0 6.2 1.8M14.2 19.8a4.5 4.5 0 0 0 4.8-3.5M19 16.3a4.5 4.5 0 0 0 .5-6" />
          <circle cx="12" cy="12" r="2.2" fill={color} />
        </svg>
      );

    case 'google-gemini':
      // Google Gemini 4-pointed sparkle
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill={color} className={className} aria-hidden="true">
          <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" />
        </svg>
      );

    case 'n8n':
      // n8n connected workflow nodes
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="5" cy="12" r="3" fill={color} stroke="none" />
          <circle cx="19" cy="6" r="3" fill={color} stroke="none" />
          <circle cx="19" cy="18" r="3" fill={color} stroke="none" />
          <path d="M8 12h3.5l4-5.5M11.5 12l4 5.5" />
        </svg>
      );

    case 'langflow':
      // Langflow visual DAG flow nodes
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="3" y="3" width="6" height="6" rx="2" />
          <rect x="15" y="3" width="6" height="6" rx="2" />
          <rect x="9" y="15" width="6" height="6" rx="2" />
          <path d="M6 9v2a2 2 0 0 0 2 2h4M18 9v2a2 2 0 0 1-2 2h-4" />
        </svg>
      );

    case 'openai-codex':
      // OpenAI Codex code brackets with central AI spark
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <polyline points="7 8 3 12 7 16" />
          <polyline points="17 8 21 12 17 16" />
          <circle cx="12" cy="12" r="2" fill={color} stroke="none" />
        </svg>
      );

    /* ─── Languages & Web Frameworks ────────────────────────────── */
    case 'python':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M12 2H8a4 4 0 0 0-4 4v3a2 2 0 0 0 2 2h6v-2H6a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v1h2V6a4 4 0 0 0-4-4z" fill={color} stroke="none" />
          <path d="M12 22h4a4 4 0 0 0 4-4v-3a2 2 0 0 0-2-2h-6v2h6a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-5a1 1 0 0 1-1-1v-1h-2v2a4 4 0 0 0 4 4z" fill={color} stroke="none" />
        </svg>
      );

    case 'typescript':
    case 'javascript':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M9 10v6M13 14c.5.8 1.4 1 2.2.8.8-.2 1.3-.8 1.3-1.6 0-1.5-2.5-1.2-2.5-2.7 0-.7.5-1.3 1.3-1.5.8-.2 1.7 0 2.2.8" />
        </svg>
      );

    case 'react':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className={className} aria-hidden="true">
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill={color} stroke="none" />
        </svg>
      );

    case 'fastapi':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill={color} className={className} aria-hidden="true">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );

    case 'sql':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );

    case 'rest-apis':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M17 3l4 4-4 4" />
          <path d="M3 7h18" />
          <path d="M7 21l-4-4 4-4" />
          <path d="M21 17H3" />
        </svg>
      );

    /* ─── AI Frameworks & Concepts ──────────────────────────────── */
    case 'langchain':
    case 'langgraph':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="18" r="3" />
          <circle cx="18" cy="6" r="3" />
          <path d="M8.5 7.5L15.5 16.5M8.5 6h7" />
        </svg>
      );

    case 'gen-ai':
    case 'prompt-eng':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z" />
        </svg>
      );

    case 'rag':
    case 'embeddings':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      );

    case 'llms':
    case 'ml':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-5.04z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-5.04z" />
        </svg>
      );

    case 'vector-db':
    case 'chromadb':
    case 'supabase':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );

    /* ─── Testing, DevOps, Data ─────────────────────────────────── */
    case 'vitest':
    case 'rtl':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M9 3h6M10 9h4M10 3v6l-4 9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l-4-9V3" />
        </svg>
      );

    case 'playwright':
    case 'vercel':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill={color} className={className} aria-hidden="true">
          <polygon points="12 2 22 20 2 20" />
        </svg>
      );

    case 'github-actions':
    case 'workflow-automation':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );

    case 'excel':
    case 'power-bi':
    case 'tableau':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );

    /* ─── Consistent Fallback Icon ─────────────────────────────── */
    default:
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v3M12 20v3M1 12h3M20 12h3" />
        </svg>
      );
  }
};
