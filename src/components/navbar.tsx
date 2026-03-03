import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {
	const { pathname } = useLocation();

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

		window.alert('Popup de contato em breve.');
	};

	return (
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
	);
}

export default Navbar;
