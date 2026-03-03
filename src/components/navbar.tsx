import { NavLink } from 'react-router-dom';

function Navbar() {
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
					<NavLink className="btn btn--primary btn--small" to="/contato">
						Fale Conosco
					</NavLink>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
