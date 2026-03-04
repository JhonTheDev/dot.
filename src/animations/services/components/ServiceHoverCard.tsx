import { useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import type { ServiceItem } from '../../../data/services';
import { hoverExpandMotion } from '../config/hoverExpandConfig';
import { ServiceExpandedPanel } from './ServiceExpandedPanel';

type ServiceHoverCardProps = {
  service: ServiceItem;
  index: number;
  isActive: boolean;
  isLayoutActive: boolean;
  interactive: boolean;
  onActivate: (index: number) => void;
  onFocusActivate: (index: number) => void;
  ctaHref: string;
};

export function ServiceHoverCard({
  service,
  index,
  isActive,
  isLayoutActive,
  interactive,
  onActivate,
  onFocusActivate,
  ctaHref,
}: ServiceHoverCardProps) {
  const [inlineExpanded, setInlineExpanded] = useState(false);

  const toggleInlineExpand = (): void => {
    if (interactive) {
      return;
    }

    setInlineExpanded((current) => !current);
  };

  const handleInlineKeyDown = (event: KeyboardEvent<HTMLElement>): void => {
    if (interactive) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleInlineExpand();
    }
  };

  return (
    <motion.article
      layout={interactive}
      className={`services-hover-card ${service.highlight ? 'services-hover-card--featured' : ''} ${interactive ? 'services-hover-card--interactive' : ''} ${isLayoutActive ? 'services-hover-card--active' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: 'easeOut',
        layout: hoverExpandMotion.layoutTransition,
      }}
      onMouseEnter={() => onActivate(index)}
      onFocus={() => onFocusActivate(index)}
      onClick={toggleInlineExpand}
      onKeyDown={handleInlineKeyDown}
      tabIndex={interactive ? 0 : 0}
      aria-expanded={interactive ? isActive : inlineExpanded}
    >
      <div className="services-hover-card__summary">
        <div className="services-hover-card__icon-wrap">
          <service.icon size={22} />
        </div>

        <h2 className="services-hover-card__title">{service.title}</h2>
        <p className="services-hover-card__description">{service.description}</p>

        {!interactive && (
          <div className="services-hover-card__actions-mobile">
            <a href={ctaHref} className="services-hover-card__cta-inline" onClick={(event) => event.stopPropagation()}>
              {service.ctaLabel || 'Solicitar Orçamento'} <ArrowRight size={16} />
            </a>
            <button
              type="button"
              className="services-hover-card__toggle"
              onClick={(event) => {
                event.stopPropagation();
                toggleInlineExpand();
              }}
            >
              {inlineExpanded ? 'Ocultar detalhes' : 'Ver detalhes'} <ChevronDown size={16} />
            </button>
          </div>
        )}

        <div className="services-hover-card__watermark" aria-hidden="true">
          <service.icon size={92} strokeWidth={1.4} />
        </div>
      </div>

      {interactive && (
        <AnimatePresence initial={false}>
          {isActive && <ServiceExpandedPanel service={service} ctaHref={ctaHref} />}
        </AnimatePresence>
      )}

      {!interactive && inlineExpanded && <ServiceExpandedPanel service={service} ctaHref={ctaHref} />}

      <motion.div
        className="services-hover-card__accent"
        aria-hidden="true"
        initial={false}
        animate={{ opacity: isLayoutActive && interactive ? 1 : 0 }}
        transition={hoverExpandMotion.cardTransition}
      />
    </motion.article>
  );
}
