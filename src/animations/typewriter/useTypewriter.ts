import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

type UseTypewriterOptions = {
  words: string[];
  cycleMs?: number;
  typeDurationRatio?: number;
  holdDurationRatio?: number;
  eraseDurationRatio?: number;
  tickIntervalMs?: number;
};

type UseTypewriterResult = {
  displayedWord: string;
  prefersReducedMotion: boolean;
};

export const useTypewriter = ({
  words,
  cycleMs = 2300,
  typeDurationRatio = 0.48,
  holdDurationRatio = 0.22,
  eraseDurationRatio = 0.3,
  tickIntervalMs = 50,
}: UseTypewriterOptions): UseTypewriterResult => {
  const prefersReducedMotion = Boolean(useReducedMotion());
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState('');

  useEffect(() => {
    if (words.length === 0 || prefersReducedMotion) {
      return;
    }

    const currentWord = words[activeWordIndex];
    const typeDuration = cycleMs * typeDurationRatio;
    const holdDuration = cycleMs * holdDurationRatio;
    const eraseDuration = cycleMs * eraseDurationRatio;
    const startedAt = performance.now();

    const intervalId = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;

      if (elapsed >= cycleMs) {
        setActiveWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        return;
      }

      if (elapsed <= typeDuration) {
        const progress = elapsed / typeDuration;
        const visibleChars = Math.max(1, Math.ceil(progress * currentWord.length));
        setTypedWord(currentWord.slice(0, visibleChars));
        return;
      }

      if (elapsed <= typeDuration + holdDuration) {
        setTypedWord(currentWord);
        return;
      }

      const eraseElapsed = elapsed - typeDuration - holdDuration;
      const eraseProgress = eraseElapsed / eraseDuration;
      const charsToErase = Math.ceil(eraseProgress * currentWord.length);
      const visibleChars = Math.max(0, currentWord.length - charsToErase);
      setTypedWord(currentWord.slice(0, visibleChars));
    }, tickIntervalMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [
    activeWordIndex,
    cycleMs,
    eraseDurationRatio,
    holdDurationRatio,
    prefersReducedMotion,
    tickIntervalMs,
    typeDurationRatio,
    words,
  ]);

  if (words.length === 0) {
    return {
      displayedWord: '',
      prefersReducedMotion,
    };
  }

  return {
    displayedWord: prefersReducedMotion ? words[0] : typedWord,
    prefersReducedMotion,
  };
};
