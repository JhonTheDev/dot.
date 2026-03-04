export const SERVICES_DESKTOP_HOVER_QUERY = '(min-width: 1025px) and (hover: hover) and (pointer: fine)';

export const hoverExpandMotion = {
  cardTransition: {
    duration: 0.36,
    ease: [0.22, 1, 0.36, 1] as const,
  },
  layoutTransition: {
    type: 'spring' as const,
    stiffness: 230,
    damping: 38,
    mass: 0.78,
  },
  panelTransition: {
    type: 'spring' as const,
    stiffness: 200,
    damping: 34,
    mass: 0.74,
  },
  panelExpandTransition: {
    duration: 0.4,
    ease: [0.16, 1, 0.3, 1] as const,
  },
  panelCollapseTransition: {
    duration: 0.3,
    ease: [0.16, 1, 0.3, 1] as const,
  },
  panelContentExpandTransition: {
    duration: 0.32,
    ease: [0.16, 1, 0.3, 1] as const,
  },
  panelContentCollapseTransition: {
    duration: 0.26,
    ease: [0.16, 1, 0.3, 1] as const,
  },
};

export const hoverExpandTicker = {
  initialExpandDelayMs: 120,
  collapseDelayMs: 180,
  switchExpandDelayMs: 120,
  panelCollapseDurationMs: 180,
};

export const defaultServiceTopics = [
  'Estratégia Personalizada',
  'Design Premium',
  'Foco em Resultados',
];
