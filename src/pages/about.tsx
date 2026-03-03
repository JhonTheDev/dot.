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
                A <strong>dot<span className="about-page__title-highlight">.</span></strong> nasceu como uma iniciativa experimental, uma LTDA unipessoal criada com um
                propósito claro: desafiar a mesmice da web atual através de design experimental e
                tecnologia de ponta.
              </p>

              <p className="about-page__text">
                Acreditamos que cada pixel importa e que a performance técnica não deve sacrificar
                a estética. Nosso foco inicial é a criação de sites institucionais de alto impacto,
                servindo como a base de um plano de expansão futura para serviços digitais mais
                amplos e complexos.
              </p>

              <p className="about-page__text">
                Com um time seleto, estamos comprometidos para entregar soluções digitais onde 
                não apenas atendemos, mas superamos as expectativas de nossos clientes, 
                criando experiências memoráveis e resultados tangíveis.
              </p>



              <div className="about-page__vision">
                <h2 className="about-page__vision-title">Nossa Visão</h2>
                <p className="about-page__vision-text">
                  Ser a ponte entre a estética experimental e a viabilidade comercial, criando
                  produtos digitais que não apenas funcionam perfeitamente, mas que são lembrados.
                </p>
              </div>
            </div>

            <div className="about-page__stats" role="list" aria-label="Indicadores da dot.">
              <div className="about-page__stat" role="listitem">
                <h4 className="about-page__stat-value">2026</h4>
                <p className="about-page__stat-label">Ano de fundação</p>
              </div>

              <div className="about-page__stat" role="listitem">
                <h4 className="about-page__stat-value">100%</h4>
                <p className="about-page__stat-label">Foco em qualidade</p>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  );
}