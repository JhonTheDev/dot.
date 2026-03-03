import { Globe, Palette, Code2, Megaphone, HeartHandshake, Clapperboard } from 'lucide-react';

export type ServiceItem = {
  icon: typeof Globe;
  title: string;
  description: string;
  highlight?: boolean;
  imageSrc: string;
  imageAlt: string;
  topics: string[];
  ctaLabel?: string;
};

export const servicesData: ServiceItem[] = [
  {
    icon: Globe,
    title: 'Criação de Sites',
    description:
      'Sites personalizados, responsivos e otimizados para SEO, garantindo que sua presença online seja forte e eficaz.',
    highlight: true,
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    imageAlt: 'Notebook com dashboard de métricas para presença digital',
    topics: ['Estratégia Personalizada', 'Design Premium', 'Foco em Resultados'],
    ctaLabel: 'Solicitar Orçamento',
  },
  {
    icon: Palette,
    title: 'Design de Interface',
    description:
      'Interfaces modernas e intuitivas que proporcionam uma experiência excepcional aos seus usuários.',
    imageSrc: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&h=800&fit=crop',
    imageAlt: 'Processo de criação visual e componentes de interface em uma mesa',
    topics: ['Wireframes Estratégicos', 'Design System Consistente', 'Experiência Centrada no Usuário'],
    ctaLabel: 'Quero esse serviço',
  },
  {
    icon: Code2,
    title: 'Criação de Aplicações Web',
    description:
      'Soluções web robustas e escaláveis, utilizando as tecnologias mais recentes para garantir performance e segurança.',
    imageSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop',
    imageAlt: 'Ambiente de desenvolvimento com código e múltiplos monitores',
    topics: ['Arquitetura Escalável', 'Performance Otimizada', 'Segurança por Padrão'],
    ctaLabel: 'Falar com especialista',
  },
  {
    icon: Megaphone,
    title: 'Marketing Digital',
    description:
      'Estratégias de marketing digital para aumentar a visibilidade da sua marca e atrair mais clientes.',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    imageAlt: 'Tela de análise de campanhas e gráficos de desempenho',
    topics: ['Aquisição Qualificada', 'Planejamento de Campanhas', 'Métricas de Conversão'],
    ctaLabel: 'Impulsionar minha marca',
  },
  {
    icon: HeartHandshake,
    title: 'Consultoria de Branding',
    description:
      'Ajudamos a construir uma identidade de marca sólida e consistente, que ressoe com seu público-alvo.',
    imageSrc: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=1200&h=800&fit=crop',
    imageAlt: 'Sessão de estratégia de marca com anotações e identidade visual',
    topics: ['Posicionamento de Marca', 'Tom de Voz Consistente', 'Percepção de Valor'],
    ctaLabel: 'Quero fortalecer minha marca',
  },
  {
    icon: Clapperboard,
    title: 'Criação de Conteúdo Digital',
    description:
      'Criação de vídeos, animações e outros conteúdos digitais para engajar seu público e fortalecer sua presença online.',
    imageSrc: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1200&h=800&fit=crop',
    imageAlt: 'Equipamentos de captura e edição para conteúdo digital',
    topics: ['Roteiro Orientado à Marca', 'Conteúdo para Redes Sociais', 'Produção com Identidade Visual'],
    ctaLabel: 'Criar conteúdo agora',
  },
];
