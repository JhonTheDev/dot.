## Objetivo

Estilizar o projeto com uma identidade visual clara e organizada. Será utilizado somente css para estilização com bibliotecas de icones. 

## COLORS

#### Paleta do Tema escuro

Esta é a combinação para o tema escuro, garantindo contraste e sofisticação.

- --bg-dark: hsl(0, 0%, 1%)
- --bg: hsl(300, 0%, 4%)
- --bg-light: hsl(0, 0%, 9%)
- --text: hsl(0, 0%, 100%)
- --text-muted: hsl(300, 0%, 69%)
- --text-highlight: hsl(60, 100%, 50%)
- --highlight: hsl(330, 2%, 45%)
- --primary: hsl(52, 95%, 57%)
- --secondary: hsl(237, 85%, 75%)
- --danger: hsl(9, 85%, 60%)
- --success: hsl(146, 70%, 50%)
- --info: hsl(217, 80%, 65%)

#### Paleta do Tema claro
Esta versão limpa é ideal para fundos claros, invertendo a polaridade do texto.

- --bg-dark: hsl(0, 0%, 95%)
- --bg: hsl(0, 0%, 100%)
- --bg-light: hsl(0, 0%, 90%)
- --text: hsl(0, 0%, 5%)
- --text-muted: hsl(300, 0%, 35%)
- --text-highlight: hsl(60, 100%, 45%)
- --highlight: hsl(330, 5%, 85%)
- --primary: hsl(52, 90%, 50%)
- --secondary: hsl(237, 60%, 45%)
- --danger: hsl(9, 75%, 45%)
- --success: hsl(146, 60%, 35%)
- --info: hsl(217, 70%, 40%)

## TYPOGRAPHY

Configuração baseada na fonte Lexend para títulos (foco em geometria e legibilidade digital) e Inter para textos de suporte.

#### Font Families
- --font-primary: 'Lexend', sans-serif; (H1, H2, H3, UI Buttons)
- --font-secondary: 'Inter', sans-serif; (Body text, UI Muted labels)

#### Font Sizes (Scale)
- --text-xs: 0.75rem;    /* 12px */
- --text-sm: 0.875rem;   /* 14px */
- --text-base: 1rem;     /* 16px - Default */
- --text-lg: 1.125rem;   /* 18px */
- --text-xl: 1.25rem;    /* 20px */
- --text-2xl: 1.5rem;    /* 24px - H3 */
- --text-3xl: 2.25rem;   /* 36px - H2 Standard */
- --text-4xl: 3.5rem;    /* 56px - H1 Hero */

#### Weights & Spacing
- --weight-normal: 400;
- --weight-medium: 500;
- --weight-semibold: 600; /* Estilo padrão para H2 */
- --weight-bold: 700;
- --leading-tight: 1.1;   /* Headings */
- --leading-normal: 1.6;  /* Reading text */
- --tracking-tighter: -0.04em; /* Impacto para títulos */
- --tracking-tight: -0.02em;

## REFERÊNCIA EXTRAÍDA (surfedigital.io)

Base observada em 27/02/2026 a partir do HTML e CSS públicos da homepage. Esta seção é um complemento de referência para orientar implementação visual, sem substituir os tokens já definidos acima.

### Cores-base detectadas (tokens do tema do site)

- --color_1: rgba(0,191,214,1);     /* ciano principal */
- --color_2: rgba(65,67,69,1);      /* grafite médio */
- --color_3: rgba(90,90,90,1);      /* cinza texto auxiliar */
- --color_4: rgba(51,51,51,1);      /* grafite escuro */
- --color_5: rgba(255,255,255,1);   /* branco */
- --color_6: rgba(0,0,0,1);         /* preto */
- --color_7: rgba(255,255,255,0.7); /* branco translúcido */
- --color_8: rgba(0,210,235,1);     /* ciano de ação */

#### Cores literais recorrentes encontradas
- rgba(27,27,27,1)
- rgba(252,246,240,1)
- rgba(185,35,59,1)
- rgba(221,78,108,1)
- rgba(159,159,159,1)
- rgba(169,169,169,1)
- rgba(230,230,230,1)
- #912a3e

### Tipografia observada

#### Fontes detectadas
- SurfeDigitalSans (fonte principal de interface e CTAs)
- Roboto / Roboto Fallback (texto de apoio)
- 'Roboto Slab' (destaques e headings pontuais)

#### Escala percebida (homepage)
- Font sizes recorrentes: 13px, 14px, 15px, 16px, 20px
- Títulos de destaque grandes observados: 60px e 70px
- Line-height recorrente: 1.5
- Line-height de títulos/ênfase: ~1.2em

### Padrão de botões observado

- --btn-border-radius: 50px
- --btn-border-width: 0px
- --btn-bg-color: var(--color_8)
- --btn-text-color: var(--color_5)
- --btn-text-font-family: SurfeDigitalSans
- --btn-text-font-size: 15px
- --btn-hover-bg: var(--color_1)
- --btn-hover-text-font-weight: 700

Leitura de UX: botão tipo "pill" com contraste alto (ciano + texto branco), foco em legibilidade e ação clara.

### Espaçamento e bordas (padrão detectado)

- Border radius comum: 0, 2px, 3px, 4px, 50px
- Espaçamentos frequentes em blocos/componentes: 10px, 15px, 20px, 30px
- Padrão de ritmo vertical identificado em áreas grandes com seção/hero

#### Proposta de escala de spacing para o projeto (incremento)
- --space-1: 0.25rem; /* 4px */
- --space-2: 0.5rem;  /* 8px */
- --space-3: 0.625rem;/* 10px */
- --space-4: 0.75rem; /* 12px */
- --space-5: 0.9375rem; /* 15px */
- --space-6: 1rem;    /* 16px */
- --space-7: 1.25rem; /* 20px */
- --space-8: 1.875rem;/* 30px */

### Motion / animações observadas

#### Transições predominantes
- transition: all .2s ease-out
- transition: color .2s ease
- transition: background-color .2s ease-in-out
- transition: transform .3s ease-out
- transition: all 0.5s cubic-bezier(0.25, 1, 0.25, 1)

#### Efeitos de interação encontrados
- Hover zoom: scale(1.06)
- Hover float: translateY(-8px)
- Hover forward: translateX(8px)
- Grayscale/reverse grayscale em imagens

#### Keyframes disponíveis no runtime
- fadeIn, fadeInUp, fadeInLeft, fadeInRight
- slideInUp, slideInDown, slideInLeft, slideInRight
- zoomIn, zoomInUp
- pulse, bounce, swing, wobble, spin

### Diretriz de aplicação no projeto DOT

- Manter seus tokens atuais como base principal de identidade.
- Usar a referência Surfe para reforçar: contraste de CTA, botão pill (50px), microtransições rápidas (0.2s–0.3s).
- Aplicar animações somente em elementos interativos/chave para evitar ruído visual.
- Priorizar consistência de spacing pela escala sugerida acima.

