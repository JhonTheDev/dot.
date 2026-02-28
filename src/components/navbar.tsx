function Navbar() {
	return (
		<header className="site-header">
			<div className="site-header__inner">
				<a className="site-brand" href="#inicio" aria-label="Voltar ao início">
					dot<span className="site-brand__dot">.</span>
				</a>

				<nav className="site-nav" aria-label="Menu principal">
					<a href="#inicio">Início</a>
					<a href="#sobre">Sobre</a>
					<a href="#servicos">Serviços</a>
					<a href="#contato">Contato</a>
				</nav>

				<a className="btn btn--primary btn--small" href="#contato">
					Fale Conosco
				</a>
			</div>
		</header>
	);
}

export default Navbar;
