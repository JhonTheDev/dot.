import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarClock, Cpu, Gauge, PenTool, Users } from 'lucide-react';
import CursorGlow from '../animations/glow/CursorGlow';
import './about.css';

export default function Sobre() {
  return (
    <div className="about-page" id="sobre">
      <CursorGlow />
      <section className="about-page__section">
        <div className="section-container about-page__container">
          <motion.article
            className="about-page__content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="about-page__title">
              Sobre a dot<span className="about-page__title-highlight">.</span>
            </h1>

            <figure className="about-page__media">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=720&fit=crop"
                alt="Equipe analisando estratégia digital e planejamento de projeto"
                loading="lazy"
              />
            </figure>

            <div className="about-page__text-group">
              <p className="about-page__text">
                A <strong>dot<span className="about-page__title-highlight">.</span></strong> nasceu para resolver um problema real: muitas pequenas e médias
                empresas brasileiras ainda têm presença digital fraca — sites lentos, sem identidade
                e sem estratégia.
              </p>

              <p className="about-page__text">
                Combinamos design de alto impacto com tecnologia moderna para criar sites e conteúdos
                que posicionam sua marca no digital e transformam visitas em oportunidades reais de
                negócio.
              </p>

              <p className="about-page__text">
                Trabalhamos de forma remota, atendendo clientes em todo o Brasil com foco em clareza,
                execução técnica e resultado. Cada projeto nasce de um objetivo: fazer sua marca ser
                percebida, lembrada e escolhida.
              </p>



              <div className="about-page__vision">
                <h2 className="about-page__vision-title">Nossa Visão</h2>
                <p className="about-page__vision-text">
                  Ser a agência de referência para marcas que querem presença digital com identidade,
                  combinando design preciso, tecnologia moderna e estratégia de conteúdo.
                </p>
              </div>
            </div>

            <section className="about-page__timeline" aria-labelledby="timeline-heading">
              <h2 id="timeline-heading" className="about-page__section-title">Nossa trajetória e resultados</h2>
              <div className="about-page__timeline-list" role="list">
                <article className="about-page__timeline-item" role="listitem">
                  <span className="about-page__timeline-icon" aria-hidden="true">
                    <CalendarClock size={16} />
                  </span>
                  <div>
                    <p className="about-page__timeline-year">2026</p>
                    <p className="about-page__timeline-text">Fundação da dot. com foco em sites institucionais de alto impacto.</p>
                  </div>
                </article>

                <article className="about-page__timeline-item" role="listitem">
                  <span className="about-page__timeline-icon" aria-hidden="true">
                    <Users size={16} />
                  </span>
                  <div>
                    <p className="about-page__timeline-year">Hoje</p>
                    <p className="about-page__timeline-text">Atendimento remoto para clientes em todo o Brasil, com execução ponta a ponta.</p>
                  </div>
                </article>

                <article className="about-page__timeline-item" role="listitem">
                  <span className="about-page__timeline-icon" aria-hidden="true">
                    <Cpu size={16} />
                  </span>
                  <div>
                    <p className="about-page__timeline-year">Tecnologia</p>
                    <p className="about-page__timeline-text">Sites com tecnologia moderna para carregamento rápido e manutenção simples.</p>
                  </div>
                </article>

                <article className="about-page__timeline-item" role="listitem">
                  <span className="about-page__timeline-icon" aria-hidden="true">
                    <Gauge size={16} />
                  </span>
                  <div>
                    <p className="about-page__timeline-year">Performance</p>
                    <p className="about-page__timeline-text">Cada projeto é pensado para gerar confiança e trazer insights que ajudam a otimizar o desempenho do negócio.</p>
                  </div>
                </article>

                <article className="about-page__timeline-item" role="listitem">
                  <span className="about-page__timeline-icon" aria-hidden="true">
                    <Gauge size={16} />
                  </span>
                  <div>
                    <p className="about-page__timeline-year">Prazo</p>
                    <p className="about-page__timeline-text">Prazo médio de 15 a 30 dias para entrega de sites institucionais.</p>
                  </div>
                </article>
              </div>
            </section>

            <section className="about-page__stack" aria-labelledby="stack-heading">
              <h2 id="stack-heading" className="about-page__section-title">Tecnologias e ferramentas</h2>
              <div className="about-page__stack-list" role="list">
                {['React', 'TypeScript', 'Vite', 'Figma', 'Framer Motion', 'SEO Técnico', 'Photoshop', 'Illustrator', 'Affinity', 'After Effects', 'Premiere', 'DaVinci Resolve', 'Blender', 'Power BI'].map((item) => (
                  <p key={item} className="about-page__stack-chip" role="listitem">{item}</p>
                ))}
              </div>
            </section>

            <section className="about-page__values" aria-labelledby="values-heading">
              <h2 id="values-heading" className="about-page__section-title">Como trabalhamos</h2>
              <div className="about-page__values-grid">
                <article className="about-page__value-card">
                  <div className="about-page__value-icon" aria-hidden="true">
                    <PenTool size={18} />
                  </div>
                  <h3>Design com direção</h3>
                  <p>Transformamos posicionamento de marca em interfaces claras, elegantes e orientadas à conversão.</p>
                </article>

                <article className="about-page__value-card">
                  <div className="about-page__value-icon" aria-hidden="true">
                    <Cpu size={18} />
                  </div>
                  <h3>Tecnologia aplicada</h3>
                  <p>Escolhemos tecnologia moderna para reduzir fricção, acelerar carregamento e facilitar manutenção.</p>
                </article>

                <article className="about-page__value-card">
                  <div className="about-page__value-icon" aria-hidden="true">
                    <Gauge size={18} />
                  </div>
                  <h3>Execução com foco em resultado</h3>
                  <p>Cada entrega é pensada para gerar confiança, aumentar demanda qualificada e apoiar o crescimento do negócio.</p>
                </article>
              </div>
            </section>

            <div className="about-page__cta">
              <h2>Quer trabalhar com a gente?</h2>
              <p>Fale com a dot. e receba um direcionamento claro para seu próximo projeto digital.</p>
              <Link to="/contato" className="about-page__cta-link">
                Fale com a gente <ArrowRight size={16} />
              </Link>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  );
}