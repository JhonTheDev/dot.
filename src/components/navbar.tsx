import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ContactModal from './contact';

function Navbar() {
	const { pathname } = useLocation();
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);

	const handleContactClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();

		if (pathname === '/') {
			const contactSection = document.getElementById('contato');
			if (contactSection) {
				contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
				window.history.replaceState(null, '', '#contato');
			}
			return;
		}

		setIsContactModalOpen(true);
	};

	return (
		<>
			<header className="site-header">
				<div className="site-header__inner">
					<a className="site-brand" href="/" aria-label="Voltar ao início">
						dot<span className="site-brand__dot">.</span>
					</a>

					<div className="site-header__actions">
						<nav className="site-nav" aria-label="Menu principal">
							<NavLink to="/" end>
								Início
							</NavLink>
							<NavLink to="/sobre">Sobre</NavLink>
							<NavLink to="/servicos">Serviços</NavLink>
						</nav>
						<a className="btn btn--primary btn--small" href="/#contato" onClick={handleContactClick}>
							Fale Conosco
						</a>
					</div>
				</div>
			</header>

			<ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
		</>
	);
}

export default Navbar;
