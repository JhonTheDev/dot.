import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { defaultServiceTopics, hoverExpandMotion } from '../config/hoverExpandConfig';
import type { ServiceItem } from '../../../data/services';

type ServiceExpandedPanelProps = {
  service: ServiceItem;
  ctaHref: string;
};

export function ServiceExpandedPanel({ service, ctaHref }: ServiceExpandedPanelProps) {
  const prefersReducedMotion = Boolean(useReducedMotion());
  const topics = service.topics && service.topics.length > 0 ? service.topics : defaultServiceTopics;

  if (prefersReducedMotion) {
    return (
      <div className="services-hover-card__expanded">
        <div className="services-hover-card__image-wrap">
          <div className="services-hover-card__image-overlay" aria-hidden="true" />
          <img
            src={service.imageSrc}
            alt={service.imageAlt || service.title}
            className="services-hover-card__image"
            loading="lazy"
          />
        </div>

        <ul className="services-hover-card__topics">
          {topics.map((topic) => (
            <li key={topic} className="services-hover-card__topic-item">
              {topic}
            </li>
          ))}
        </ul>

        <a href={ctaHref} className="services-hover-card__cta">
          {service.ctaLabel || 'Solicitar Orçamento'} <ArrowRight size={16} />
        </a>
      </div>
    );
  }

  const panelVariants = {
    expanded: {
      opacity: 1,
      x: 0,
      scaleX: 1,
      transition: hoverExpandMotion.panelExpandTransition,
    },
    collapsed: {
      opacity: 0,
      x: 10,
      scaleX: 0.96,
      transition: hoverExpandMotion.panelCollapseTransition,
    },
  };

  const contentVariants = {
    expanded: {
      opacity: 1,
      y: 0,
      transition: hoverExpandMotion.panelContentExpandTransition,
    },
    collapsed: {
      opacity: 0,
      y: 6,
      transition: hoverExpandMotion.panelContentCollapseTransition,
    },
  };

  return (
    <motion.div
      className="services-hover-card__expanded"
      variants={panelVariants}
      initial="collapsed"
      animate="expanded"
      exit="collapsed"
    >
      <motion.div
        className="services-hover-card__image-wrap"
        variants={contentVariants}
        initial="collapsed"
        animate="expanded"
        exit="collapsed"
      >
        <div className="services-hover-card__image-overlay" aria-hidden="true" />
        <img
          src={service.imageSrc}
          alt={service.imageAlt || service.title}
          className="services-hover-card__image"
          loading="lazy"
        />
      </motion.div>

      <motion.ul
        className="services-hover-card__topics"
        variants={contentVariants}
        initial="collapsed"
        animate="expanded"
        exit="collapsed"
      >
        {topics.map((topic) => (
          <li key={topic} className="services-hover-card__topic-item">
            {topic}
          </li>
        ))}
      </motion.ul>

      <motion.a
        href={ctaHref}
        className="services-hover-card__cta"
        variants={contentVariants}
        initial="collapsed"
        animate="expanded"
        exit="collapsed"
      >
        {service.ctaLabel || 'Solicitar Orçamento'} <ArrowRight size={16} />
      </motion.a>
    </motion.div>
  );
}
