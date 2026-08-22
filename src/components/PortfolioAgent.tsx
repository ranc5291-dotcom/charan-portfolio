import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendAgentMessage, type ChatMessage } from '../utils/agentService';

const SUGGESTED_PROMPTS = [
  "What projects has he built?",
  "Does he have RAG & GenAI experience?",
  "What's his internship history?",
  "What's his technical stack?",
  "Is he open to full-time AI Engineer roles?"
];

export default function PortfolioAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hi! I'm Charan's AI Portfolio Agent.",
      timestamp: new Date()
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: query,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await sendAgentMessage(query, messages);
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.reply,
        retrievedSources: response.sources,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err: any) {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: err?.message || "I encountered a temporary connection issue. Please check your network or try again in a moment.",
        isError: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="portfolio-agent-container" style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
      {/* Floating Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open AI Portfolio Agent"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 20px',
              backgroundColor: '#09090b',
              color: '#f2f2f5',
              border: '1px solid rgba(79, 142, 247, 0.4)',
              borderRadius: '9999px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), 0 0 20px rgba(79, 142, 247, 0.25)',
              cursor: 'pointer',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '0.9rem',
              backdropFilter: 'blur(12px)',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
          >
            {/* Pulsing Status Dot */}
            <span style={{ position: 'relative', display: 'flex', height: '10px', width: '10px' }}>
              <span
                style={{
                  position: 'absolute',
                  display: 'inline-flex',
                  height: '100%',
                  width: '100%',
                  borderRadius: '50%',
                  backgroundColor: '#4f8ef7',
                  opacity: 0.75,
                  animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
                }}
              />
              <span
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  borderRadius: '50%',
                  height: '10px',
                  width: '10px',
                  backgroundColor: '#4f8ef7',
                }}
              />
            </span>

            {/* Sparkle / Bot Icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4f8ef7' }}>
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>

            <span>Ask AI Agent</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              width: 'min(420px, calc(100vw - 32px))',
              height: 'min(580px, calc(100vh - 48px))',
              backgroundColor: '#0c0c0e',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '16px',
              boxShadow: '0 24px 64px rgba(0, 0, 0, 0.8), 0 0 32px rgba(79, 142, 247, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              backdropFilter: 'blur(20px)',
              zIndex: 10000,
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: '16px 20px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(79, 142, 247, 0.15)',
                    border: '1px solid rgba(79, 142, 247, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#4f8ef7',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <circle cx="12" cy="5" r="2" />
                    <path d="M12 7v4" />
                    <line x1="8" y1="16" x2="8" y2="16" />
                    <line x1="16" y1="16" x2="16" y2="16" />
                  </svg>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: '#f2f2f5',
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    Charan's Portfolio Agent
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#a1a1aa' }}>
                      RAG Grounded • Llama 3.3
                    </span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close AI Agent"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#a1a1aa',
                  cursor: 'pointer',
                  padding: '6px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.2s, background-color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#f2f2f5';
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#a1a1aa';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Message History Area */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              {messages.map(msg => (
                <div
                  key={msg.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '100%',
                  }}
                >
                  <div
                    style={{
                      maxWidth: '85%',
                      padding: '12px 16px',
                      borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                      backgroundColor: msg.role === 'user' ? '#4f8ef7' : 'rgba(255, 255, 255, 0.06)',
                      color: msg.role === 'user' ? '#ffffff' : '#f2f2f5',
                      border: msg.role === 'user' ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                      fontSize: '0.88rem',
                      lineHeight: 1.55,
                      fontFamily: 'var(--font-body)',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                    }}
                  >
                    {msg.content}
                  </div>

                  {/* Sources tag if provided */}
                  {msg.retrievedSources && msg.retrievedSources.length > 0 && (
                    <div
                      style={{
                        marginTop: '4px',
                        display: 'flex',
                        gap: '4px',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                      }}
                    >
                      <span style={{ fontSize: '0.68rem', color: '#71717a', fontFamily: 'var(--font-mono)' }}>
                        Sources:
                      </span>
                      {msg.retrievedSources.slice(0, 2).map((s, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: '0.65rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            backgroundColor: 'rgba(79, 142, 247, 0.1)',
                            color: '#4f8ef7',
                            border: '1px solid rgba(79, 142, 247, 0.2)',
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Thinking / Loading Indicator */}
              {isLoading && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.05)', alignSelf: 'flex-start' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4f8ef7', animation: 'pulse 1s infinite' }} />
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4f8ef7', animation: 'pulse 1s infinite 0.2s' }} />
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4f8ef7', animation: 'pulse 1s infinite 0.4s' }} />
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#a1a1aa', marginLeft: '6px' }}>
                    Retrieving knowledge & generating...
                  </span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompt Chips (when few messages) */}
            {messages.length <= 2 && !isLoading && (
              <div
                style={{
                  padding: '8px 16px 12px 16px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  backgroundColor: 'rgba(255, 255, 255, 0.01)',
                }}
              >
                {SUGGESTED_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(prompt)}
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-body)',
                      padding: '6px 10px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      color: '#d4d4d8',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textAlign: 'left',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = 'rgba(79, 142, 247, 0.15)';
                      e.currentTarget.style.borderColor = 'rgba(79, 142, 247, 0.3)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.color = '#d4d4d8';
                    }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input Bar */}
            <div
              style={{
                padding: '12px 16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Charan's skills, projects, background..."
                disabled={isLoading}
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  color: '#f2f2f5',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.target.style.borderColor = '#4f8ef7')}
                onBlur={e => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
              />

              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: input.trim() && !isLoading ? '#4f8ef7' : 'rgba(255, 255, 255, 0.08)',
                  color: input.trim() && !isLoading ? '#ffffff' : '#71717a',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: input.trim() && !isLoading ? 'pointer' : 'not-allowed',
                  transition: 'all 0.2s',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
