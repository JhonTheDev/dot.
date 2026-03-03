import type { ServiceItem } from '../../../data/services';
import { useActiveService } from '../hooks/useActiveService';
import { useServicesHoverMode } from '../hooks/useServicesHoverMode';
import { ServiceHoverCard } from './ServiceHoverCard';
import '../servicesHover.css';

type ServicesHoverGridProps = {
  services: ServiceItem[];
  ctaHref: string;
};

export function ServicesHoverGrid({ services, ctaHref }: ServicesHoverGridProps) {
  const { isDesktopInteractive } = useServicesHoverMode();
  const { activeIndex, layoutIndex, activate, activateImmediately, deactivate } = useActiveService({
    itemsCount: services.length,
    interactive: isDesktopInteractive,
  });

  return (
    <div
      className={`services-hover-grid ${isDesktopInteractive ? 'services-hover-grid--interactive' : ''}`}
      onMouseLeave={deactivate}
    >
      {services.map((service, index) => (
        <ServiceHoverCard
          key={service.title}
          service={service}
          index={index}
          isActive={activeIndex === index}
          isLayoutActive={layoutIndex === index}
          interactive={isDesktopInteractive}
          onActivate={activate}
          onFocusActivate={activateImmediately}
          ctaHref={ctaHref}
        />
      ))}
    </div>
  );
}
