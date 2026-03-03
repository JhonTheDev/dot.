import { motion } from 'framer-motion';
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

            <div className="about-page__stats" role="list" aria-label="Indicadores da dot.">
              <div className="about-page__stat" role="listitem">
                <h4 className="about-page__stat-value">2026</h4>
                <p className="about-page__stat-label">Fundação</p>
              </div>

              <div className="about-page__stat" role="listitem">
                <h4 className="about-page__stat-value">100%</h4>
                <p className="about-page__stat-label">Projetos com revisão incluída</p>
              </div>

              <div className="about-page__stat" role="listitem">
                <h4 className="about-page__stat-value">15–30 dias</h4>
                <p className="about-page__stat-label">Prazo médio para sites institucionais</p>
              </div>

              <div className="about-page__stat" role="listitem">
                <h4 className="about-page__stat-value">Remoto</h4>
                <p className="about-page__stat-label">Atendimento em todo o Brasil</p>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  );
}