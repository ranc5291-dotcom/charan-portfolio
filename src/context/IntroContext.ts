import { createContext, useContext } from 'react';

export interface IntroContextType {
  introActive: boolean;
  completeIntro: () => void;
}

export const IntroContext = createContext<IntroContextType>({
  introActive: false,
  completeIntro: () => {},
});

export function useIntro() {
  return useContext(IntroContext);
}
