import { lazy, Suspense, useMemo, useRef, useState } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import {
  ArrowRight,
  Zap,
  Layers,
  Target,
  Lightbulb,
  Rocket,
  Mail,
  Phone,
  MapPin,
  Video,
} from 'lucide-react';
import './home.css';
import { servicesData } from '../data/services';
import { useTypewriter } from '../animations/typewriter/useTypewriter';
import CursorGlow from '../animations/glow/CursorGlow';

const TYPEWRITER_WORDS = [
  'Sites que convertem',
  'Branding com estratégia',
  'Conteúdo que engaja',
  'Presença que gera confiança',
];
const HeroOrbitBackground = lazy(() =>
  import('../animations/orbit/HeroOrbitBackground')
);

export default function Home() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, margin: '-100px' });
  const isServicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const { displayedWord } = useTypewriter({ words: TYPEWRITER_WORDS });
  const [contactName, setContactName] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const contactMailtoHref = useMemo(() => {
    const recipient = 'contato@dotstudio.com.br';
    const subject = contactSubject.trim() || 'Novo contato via site';
    const body = [
      `Nome: ${contactName.trim() || '-'}`,
      `Assunto: ${contactSubject.trim() || '-'}`,
      `Email: ${contactEmail.trim() || '-'}`,
      '',
      'Projeto / Mensagem:',
      contactMessage.trim() || '-',
    ].join('\n');

    return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [contactEmail, contactMessage, contactName, contactSubject]);

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !contactName.trim() ||
      !contactSubject.trim() ||
      !contactEmail.trim() ||
      !contactMessage.trim()
    ) {
      return;
    }

    window.location.href = contactMailtoHref;
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  const highlights = [
    {
      icon: Layers,
      title: 'Web Design',
      desc: 'Sites que carregam rápido, impressionam no primeiro acesso e transformam visitantes em clientes.',
    },
    {
      icon: Video,
      title: 'Edição de Vídeos',
      desc: 'Vídeos que param o scroll e geram compartilhamentos feitos para Instagram, TikTok e YouTube.',
    },
    {
      icon: Zap,
      title: 'Experiência (UX/UI)',
      desc: 'Design pensado para que seu cliente encontre o que precisa em segundos sem frustração, sem abandono.',
    },
  ];

  const aboutValues = [
    {
      icon: Target,
      title: 'Foco no Cliente',
      description:
        'Antes de qualquer linha de código ou pixel, entendemos seu mercado, seu cliente e seus objetivos.',
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description:
        'React, Figma, animações e performance, ferramentas modernas aplicadas com propósito, não por modismo.',
    },
    {
      icon: Rocket,
      title: 'Resultados',
      description:
        'Sites mais rápidos, mais bonitos e que aparecem no Google. Presença digital que trabalha por você 24h por dia.',
    },
  ];

  return (
    <div className="home-page">
      <CursorGlow hiddenSelectors={['.hero']} />
      <section id="inicio" className="hero">
        <Suspense fallback={null}>
          <HeroOrbitBackground />
        </Suspense>
        <div className="section-container">
          <motion.div
            className="hero__content"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="hero__badge">
              <span className="hero__badge-dot" />
              Agência Digital · Sites, Branding e Social Media
            </motion.div>

            <motion.h1 className="hero__title">Sua marca merece um site que vende.</motion.h1>

            <motion.p variants={itemVariants} className="hero__typewriter">
              Do site às redes sociais:&nbsp;
              <span className="hero__title-highlight hero__typewriter-word">{displayedWord}</span>
            </motion.p>

            <motion.p variants={itemVariants} className="hero__description">
              A <strong>dot<span className="site-brand__dot">.</span></strong> cria sites, identidades visuais e conteúdo digital para pequenas e
              médias empresas que querem crescer com consistência no digital.
            </motion.p>

            <motion.div variants={itemVariants} className="hero__actions">
              <a href="#contato" className="btn btn--primary btn--hero">
                Solicitar Orçamento <ArrowRight size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="highlights">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="highlights__header"
          >
            <div>
              <h2 className="highlights__title">O que fazemos.</h2>
              <p className="highlights__subtitle">
                Soluções práticas para fortalecer sua marca, atrair clientes e gerar resultado no digital.
              </p>
            </div>
            <a href="/servicos" className="highlights__more">
              Ver todos <ArrowRight size={16} />
            </a>
          </motion.div>

          <div className="highlights__grid">
            {highlights.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card"
              >
                <div className="card__icon">
                  <feature.icon size={24} />
                </div>
                <h3 className="card__title">{feature.title}</h3>
                <p className="card__description">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="about" ref={aboutRef}>
        <div className="section-container">
          <div className="about__layout">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="eyebrow">
                SOBRE NÓS
              </span>
              <h2 className="about__title">
                Presença digital forte para empresas que querem <strong>crescer</strong>
              </h2>
              <p className="about__text">
                A <strong>dot<span className="site-brand__dot">.</span></strong> nasceu para resolver um problema real: muitas pequenas e médias
                empresas ainda têm presença digital fraca, sites lentos, sem identidade e sem estratégia.
              </p>
              <p className="about__text">
                Combinamos design de alto impacto com tecnologia moderna para criar sites e conteúdos
                que posicionam sua marca de verdade e transformam visitas em oportunidades.
              </p>
              <div className="about__highlight">
                <div className="about__highlight-icon">+</div>
                <div>
                  <p className="about__highlight-title">Operação remota, atendimento nacional</p>
                  <p className="about__highlight-text">Qualidade e proximidade para clientes em todo o Brasil</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="about__values"
            >
              {aboutValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="about-value"
                >
                  <div className="about-value__row">
                    <div className="about-value__icon">
                      <value.icon size={22} />
                    </div>
                    <div>
                      <h3 className="about-value__title">{value.title}</h3>
                      <p className="about-value__text">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="servicos" className="services" ref={servicesRef}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="services__header"
          >
            <span className="eyebrow">
              O QUE FAZEMOS
            </span>
            <h2 className="services__title">
              Nossos <strong>Serviços</strong>
            </h2>
            <p className="services__description">
              Tudo que sua marca precisa para crescer no digital do site às redes sociais.
            </p>
          </motion.div>

          <div className="services__grid">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`service-card ${service.highlight ? 'service-card--featured' : ''}`}
              >
                <div className="service-card__icon">
                  <service.icon size={26} />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__text">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="contact">
        <div className="section-container">
          <motion.div
            className="contact__card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact__layout">
              <div>
                <span className="eyebrow">Fale Conosco</span>
                <h2 className="contact__title">Pronto para decolar no digital? A gente cuida de tudo.</h2>
                <p className="contact__text">
                  Conte com a <strong>dot<span className="site-brand__dot">.</span></strong> para transformar suas ideias em um projeto digital com estratégia,
                  performance e identidade visual profissional.
                </p>

                <div className="contact__meta">
                  <div className="contact-meta">
                    <Mail size={16} /> contato@dotstudio.com.br
                  </div>
                  <div className="contact-meta">
                    <Phone size={16} /> +55 (00) 0000-0000
                  </div>
                  <div className="contact-meta">
                    <MapPin size={16} /> Operação remota · Brasil
                  </div>
                </div>

                <a className="btn btn--ghost btn--hero contact__phone-btn" href="tel:+5500000000000">
                  Conversar Agora
                </a>
              </div>

              <form className="contact-form" onSubmit={handleContactSubmit}>
                <label className="contact-form__field" htmlFor="contact-name">
                  Nome
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={contactName}
                    onChange={(event) => setContactName(event.target.value)}
                    placeholder="Seu nome"
                    required
                  />
                </label>

                <label className="contact-form__field" htmlFor="contact-subject">
                  Assunto
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={contactSubject}
                    onChange={(event) => setContactSubject(event.target.value)}
                    placeholder="Qual é o objetivo do projeto?"
                    required
                  />
                </label>

                <label className="contact-form__field" htmlFor="contact-email">
                  E-mail
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={contactEmail}
                    onChange={(event) => setContactEmail(event.target.value)}
                    placeholder="seuemail@exemplo.com"
                    required
                  />
                </label>

                <label className="contact-form__field" htmlFor="contact-message">
                  Projeto / Mensagem
                  <textarea
                    id="contact-message"
                    name="message"
                    value={contactMessage}
                    onChange={(event) => setContactMessage(event.target.value)}
                    placeholder="Descreva seu projeto, objetivo ou problema"
                    rows={5}
                    required
                  />
                </label>

                <button className="btn btn--primary btn--hero contact-form__submit" type="submit">
                  Enviar E-mail <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}