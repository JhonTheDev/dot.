import { Mail, MapPin, SendHorizontal } from 'lucide-react';
import './contact.css';

export default function Contact() {
  return (
    <div className="contact-page" id="contato">
      <section className="contact-page__section">
        <div className="section-container contact-page__container">
          <header className="contact-page__header">
            <span className="eyebrow">ENTRE EM CONTATO</span>
            <h1 className="contact-page__title">
              Pronto para tirar seu projeto do <strong>papel</strong>?
            </h1>
            <p className="contact-page__subtitle">
              A <strong>dot<span className="site-brand__dot">.</span></strong> cria sites, branding e conteúdo digital para empresas que querem crescer com
              estratégia e presença profissional no digital.
            </p>
          </header>

          <div className="contact-page__grid">
            <form
              className="contact-page__form"
              action="mailto:contato@dotstudio.com.br"
              method="post"
              encType="text/plain"
            >
              <label className="contact-page__field" htmlFor="contact-name">
                Nome
                <input id="contact-name" name="Nome" type="text" placeholder="Seu nome completo" required />
              </label>

              <label className="contact-page__field" htmlFor="contact-email">
                E-mail
                <input id="contact-email" name="Email" type="email" placeholder="voce@empresa.com.br" required />
              </label>

              <label className="contact-page__field" htmlFor="contact-message">
                Mensagem
                <textarea
                  id="contact-message"
                  name="Mensagem"
                  rows={6}
                  placeholder="Conte rapidamente seu objetivo, prazo e serviço de interesse."
                  required
                />
              </label>

              <button type="submit" className="contact-page__submit">
                Quero receber uma proposta <SendHorizontal size={16} />
              </button>
            </form>

            <aside className="contact-page__side">
              <div className="contact-page__card">
                <h2>Informações de Contato</h2>

                <div className="contact-page__contact-list">
                  <div className="contact-page__contact-item">
                    <span className="contact-page__contact-icon">
                      <Mail size={16} />
                    </span>
                    <div>
                      <p className="contact-page__contact-label">E-mail</p>
                      <p className="contact-page__contact-value">contato@dotstudio.com.br</p>
                    </div>
                  </div>

                  <div className="contact-page__contact-item">
                    <span className="contact-page__contact-icon">
                      <MapPin size={16} />
                    </span>
                    <div>
                      <p className="contact-page__contact-label">Localização</p>
                      <p className="contact-page__contact-value">Operação remota · Brasil</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-page__cta">
                <h3>Quer avançar com segurança?</h3>
                <p>
                  Solicite seu orçamento e receba um direcionamento claro para lançar ou evoluir sua
                  presença digital.
                </p>
                <a className="contact-page__submit" href="tel:+5500000000000">
                  Conversar Agora
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
