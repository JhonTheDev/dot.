import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import { ServicesHoverGrid } from '../animations/services';
import CursorGlow from '../animations/glow/CursorGlow';
import './services.css';

export default function Services() {
  return (
    <div className="services-page" id="servicos">
      <CursorGlow />
      <section className="services-page__section">
        <div className="section-container services-page__container">
          <motion.header
            className="services-page__header"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="services-page__title">Nossos Serviços</h1>
            <p className="services-page__subtitle">
              Tudo que sua marca precisa para crescer no digital — do site às redes sociais.
            </p>
          </motion.header>

          <ServicesHoverGrid
            services={servicesData}
            ctaHref="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20entender%20melhor%20os%20servi%C3%A7os%20da%20dot."
          />
        </div>
      </section>
    </div>
  );
}
