import React, { useState } from 'react';
import { IntroContext } from './IntroContext';

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [introActive, setIntroActive] = useState(() => {
    try {
      if (typeof window === 'undefined') return false;
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) return false;
      // Only show intro on home page
      const path = window.location.pathname;
      if (path !== '/' && path !== '') return false;
      return !sessionStorage.getItem('hc_portfolio_intro_seen');
    } catch {
      return false;
    }
  });

  const completeIntro = () => {
    try {
      sessionStorage.setItem('hc_portfolio_intro_seen', 'true');
    } catch {}
    setIntroActive(false);
  };

  return (
    <IntroContext.Provider value={{ introActive, completeIntro }}>
      {children}
    </IntroContext.Provider>
  );
}
