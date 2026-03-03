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
      'Um site que passa confiança, aparece no Google e transforma visitas em pedidos de orçamento para sua empresa vender mais todos os meses.',
    highlight: true,
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    imageAlt: 'Notebook com dashboard de métricas para presença digital',
    topics: ['Mais pedidos de contato', 'Presença forte no Google', 'Experiência simples no celular'],
    ctaLabel: 'Quero vender mais com meu site',
  },
  {
    icon: Palette,
    title: 'Design de Interface',
    description:
      'Telas claras e fáceis de usar para seu cliente encontrar o que precisa rápido, confiar na sua marca e concluir a compra sem travas.',
    imageSrc: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&h=800&fit=crop',
    imageAlt: 'Processo de criação visual e componentes de interface em uma mesa',
    topics: ['Navegação que reduz abandono', 'Mais confiança na sua marca', 'Jornada de compra mais rápida'],
    ctaLabel: 'Quero melhorar a experiência do cliente',
  },
  {
    icon: Code2,
    title: 'Criação de Aplicações Web',
    description:
      'Sistema web feito para a rotina da sua PME, com menos retrabalho, processos mais organizados e mais tempo para focar em crescer.',
    imageSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop',
    imageAlt: 'Ambiente de desenvolvimento com código e múltiplos monitores',
    topics: ['Automação de tarefas repetitivas', 'Controle do negócio em um só lugar', 'Base pronta para crescer sem caos'],
    ctaLabel: 'Quero organizar minha operação',
  },
  {
    icon: Megaphone,
    title: 'Marketing Digital',
    description:
      'Ações de marketing que atraem clientes certos, aumentam seus pedidos e fazem sua empresa ser lembrada na hora da decisão de compra.',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    imageAlt: 'Tela de análise de campanhas e gráficos de desempenho',
    topics: ['Mais leads com perfil de compra', 'Campanhas com foco em venda', 'Melhor retorno sobre investimento'],
    ctaLabel: 'Quero atrair mais clientes',
  },
  {
    icon: HeartHandshake,
    title: 'Consultoria de Branding',
    description:
      'Sua marca com posicionamento claro para cobrar melhor, ganhar autoridade no seu mercado e ser a escolha natural do cliente.',
    imageSrc: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=1200&h=800&fit=crop',
    imageAlt: 'Sessão de estratégia de marca com anotações e identidade visual',
    topics: ['Diferenciação frente à concorrência', 'Mensagem que o cliente entende', 'Percepção de valor mais alta'],
    ctaLabel: 'Quero valorizar minha marca',
  },
  {
    icon: Clapperboard,
    title: 'Criação de Conteúdo Digital',
    description:
      'Conteúdo que educa, gera confiança e mantém sua empresa presente no dia a dia do cliente até o momento da compra.',
    imageSrc: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1200&h=800&fit=crop',
    imageAlt: 'Equipamentos de captura e edição para conteúdo digital',
    topics: ['Mais autoridade no seu segmento', 'Relacionamento contínuo com o público', 'Conteúdo que apoia vendas'],
    ctaLabel: 'Quero conteúdo que gera negócios',
  },
];
