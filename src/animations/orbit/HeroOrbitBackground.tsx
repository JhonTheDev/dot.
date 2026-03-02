import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useHeroOrbitScene } from './useHeroOrbitScene';

type OrbitViewport = 'mobile' | 'tablet' | 'desktop';

const getViewport = (): OrbitViewport => {
  if (typeof window === 'undefined') {
    return 'desktop';
  }

  const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const width = window.innerWidth;

  if (hasCoarsePointer || width <= 767) {
    return 'mobile';
  }

  if (width <= 1024) {
    return 'tablet';
  }

  return 'desktop';
};

export default function HeroOrbitBackground() {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [viewport, setViewport] = useState<OrbitViewport>(getViewport);
  const prefersReducedMotion = Boolean(useReducedMotion());

  useEffect(() => {
    const coarsePointerQuery = window.matchMedia('(pointer: coarse)');
    const updateViewport = (): void => {
      setViewport(getViewport());
    };

    window.addEventListener('resize', updateViewport);
    coarsePointerQuery.addEventListener('change', updateViewport);

    return () => {
      window.removeEventListener('resize', updateViewport);
      coarsePointerQuery.removeEventListener('change', updateViewport);
    };
  }, []);

  useHeroOrbitScene({
    container,
    viewport,
    reducedMotion: prefersReducedMotion,
  });

  return <div className="hero-orbit" ref={setContainer} aria-hidden="true" />;
}
