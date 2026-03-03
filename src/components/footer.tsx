import { Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer" aria-label="Rodapé do site">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand-col">
            <a className="site-brand" href="/" aria-label="Voltar ao início">
              dot<span className="site-brand__dot">.</span>
            </a>
            <p className="site-footer__description">
              Agência digital focada em criar experiências web excepcionais, identidades visuais marcantes e resultados reais para sua marca.
            </p>
          </div>

          <div className="site-footer__links-col">
            <p className="site-footer__title">Links Rápidos</p>
            <nav className="site-footer__links" aria-label="Links rápidos do rodapé">
              <NavLink to="/" end>
                Início
              </NavLink>
              <NavLink to="/sobre">Sobre Nós</NavLink>
              <NavLink to="/servicos">Serviços</NavLink>
              <NavLink to="/contato">Contato</NavLink>
            </nav>
          </div>

          <div className="site-footer__contact-col">
            <p className="site-footer__title">Conecte-se</p>
            <div className="site-footer__socials" aria-label="Redes sociais">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
                <Twitter size={18} />
              </a>
              <a href="https://gmail.com" target="_blank" rel="noreferrer" aria-label="Gmail">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© 2026 dot. Todos os direitos reservados.</p>
          <div className="site-footer__legal">
            <a href="#">Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;