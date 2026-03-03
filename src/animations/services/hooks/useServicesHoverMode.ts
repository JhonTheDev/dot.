import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { SERVICES_DESKTOP_HOVER_QUERY } from '../config/hoverExpandConfig';

const getInitialDesktopState = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.matchMedia(SERVICES_DESKTOP_HOVER_QUERY).matches;
};

export const useServicesHoverMode = (): { isDesktopInteractive: boolean } => {
  const prefersReducedMotion = Boolean(useReducedMotion());
  const [isDesktopHover, setIsDesktopHover] = useState(getInitialDesktopState);

  useEffect(() => {
    const mediaQuery = window.matchMedia(SERVICES_DESKTOP_HOVER_QUERY);
    const handleChange = (event: MediaQueryListEvent): void => {
      setIsDesktopHover(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return {
    isDesktopInteractive: isDesktopHover && !prefersReducedMotion,
  };
};
