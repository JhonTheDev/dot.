## OVERVIEW

Guia oficial de motion da DOT para produto web.

Objetivo: padronizar animações para que elas:
- reforcem a identidade da marca,
- guiem atenção do usuário,
- aumentem percepção de qualidade,
- entretenham sem distrair,
- mantenham performance estável.

Animação não é decoração. É arquitetura perceptiva.

---

## MOTION PHILOSOPHY

Princípios-base:
1. Clareza > Complexidade
2. Performance > Estética excessiva
3. Intenção > Ornamentação
4. Profundidade > Barulho visual

Regra de ouro:
Toda animação precisa ter propósito funcional ou emocional explícito.

---

## MOTION LEVELS

### LEVEL 1 — Microinterações
Uso: hover, focus, active, feedback imediato.

Padrão recomendado:
- duração: `0.18s – 0.30s`
- movimento: `opacity`, `translate`, `scale` leves
- sensação: resposta rápida e precisa

### LEVEL 2 — Entrada de Conteúdo
Uso: elementos entrando em viewport.

Padrão recomendado:
- duração: `0.25s – 0.45s`
- stagger discreto
- foco em hierarquia visual (não show visual)

### LEVEL 3 — Motion Estrutural
Uso: transição de blocos/seções e composição de profundidade.

Padrão recomendado:
- duração: `0.35s – 0.60s`
- easing mais suave
- prioridade total para scroll fluido (60fps)

### LEVEL 4 — Interações Avançadas
Uso restrito: conceitos hero (ex.: WebGL/3D simulado).

Obrigatório:
- fallback para `prefers-reduced-motion`
- lazy load
- não bloquear render inicial
- intensidade controlada por breakpoint

---

## TIMING & EASING (FAIXAS RECOMENDADAS)

Este documento usa faixas recomendadas (flexíveis por contexto), não hard limits.

- Micro: `0.18s – 0.30s`
- Médio: `0.28s – 0.45s`
- Estrutural: `0.40s – 0.60s`

Easings preferenciais:
- padrão premium: `cubic-bezier(0.16, 1, 0.3, 1)`
- material feel: `cubic-bezier(0.4, 0, 0.2, 1)`

Para colapso/expansão:
- expandir: `380–420ms`
- colapsar: `280–320ms` (mais firme)

---

## PERFORMANCE GUARDRAILS

Sempre priorizar:
- `transform`
- `opacity`

Evitar animar continuamente:
- `width`
- `height`
- `top`
- `left`
- `box-shadow` pesado

Checklist técnico:
- usar `overflow: hidden` onde houver reveal
- `will-change` somente em elementos críticos
- evitar reflow em loop
- evitar múltiplos `setState` por frame
- pausar animação quando aba estiver oculta
- controlar `pixelRatio` em cenas WebGL

Se performance cair, reduzir nesta ordem:
1. brilho (bloom)
2. opacidade
3. velocidade
4. densidade

---

## UX: GUIAR E ENTRETER SEM DISTRair

### Como guiar o usuário
- use motion para destacar:
  - H1
  - subtítulo
  - CTA principal
- entradas com stagger devem reforçar leitura de cima para baixo
- feedback em hover/focus deve confirmar interatividade

### Como entreter com responsabilidade
- “delight” deve ser periférico e controlado
- animação não pode competir com conversão
- assinatura visual (glow/orbit/depth) deve servir a narrativa da marca, não virar protagonista constante

### Critérios de bloqueio
Não publicar quando a animação:
- reduz contraste percebido do texto,
- exige atenção contínua periférica,
- prejudica fluidez de scroll,
- chama mais atenção que o CTA principal.

---

## POLÍTICA RESPONSIVA

### Desktop (>= 1025px)
- pode usar motion avançado com intensidade moderada
- opacidade máxima de camada de fundo: `0.72`
- bloom até `0.20`
- velocidade estrutural até `0.019`

### Tablet (768px–1024px)
- simplificar motion estrutural
- sem parallax pesado
- opacidade máxima: `0.56`
- bloom até `0.08`
- velocidade até `0.013`

### Mobile (<= 767px ou `pointer: coarse`)
- motion discreto
- parallax proibido
- opacidade máxima: `0.40`
- bloom ideal `0` (máximo `0.03`)
- velocidade até `0.010`

---

## ACESSIBILIDADE E FALLBACKS

Obrigatório em qualquer animação nova:
- tratar `prefers-reduced-motion`
- manter legibilidade e operação sem motion
- garantir interação por teclado (`focus`) quando houver comportamento em hover

Padrões usados no projeto:
- fallback estático para typewriter
- modo mínimo para orbit
- desativação de efeitos de cursor em `pointer: coarse`

---

## POLÍTICA DE CORES EM ANIMAÇÃO

- usar apenas tokens oficiais do projeto
- base visual preferencial: `--bg-dark`, `--bg-light`, `--highlight`, `--text-muted`
- `--primary` e `--secondary` como acento, não como preenchimento dominante contínuo
- proibido compensar contraste com cor fora da paleta

---

## PADRÕES IMPLEMENTADOS (BASE REAL DO PROJETO)

### 1) Orbit (Hero)
- nível: 4
- objetivo: profundidade de marca com foco no conteúdo
- práticas: lazy load, limite por breakpoint, pause em aba oculta, ajuste de pixel ratio

### 2) Cursor Glow
- nível: 1/2
- objetivo: feedback atmosférico leve
- práticas: seguir cursor com suavização, estado idle, desativação em coarse pointer, ocultação por seletor em zonas críticas

### 3) Services Hover Expand/Collapse
- nível: 2/3
- objetivo: explicar serviço por progressive disclosure
- práticas: layout estável + aparência animada, colapso firme, foco em clareza da informação

### 4) Typewriter
- nível: 2
- objetivo: reforço de posicionamento de marca
- práticas: ciclo curto, texto legível, fallback sem animação

---

## COLLAPSE/EXPAND (VERSÃO RESUMIDA)

Padrão recomendado para componentes com abertura/fechamento:
- separar Layout de Aparência
- layout deve permanecer previsível
- aparência animada por `transform + opacity`
- quando precisar de altura real, usar medição controlada por hook

Evitar anti-patterns:
- `height: auto` com transição direta
- `max-height` arbitrário gigante
- misturar animação estrutural e visual sem coordenação temporal

---

## PADRÃO ARQUITETURAL

Organização obrigatória:
- `config` → durations, easing, limites
- `hooks` → estado e orquestração
- `components` → render
- `css` → camada visual

Toda animação nova deve declarar:
- nível de motion (1–4)
- objetivo de UX
- limites por tela
- fallback para `prefers-reduced-motion`

---

## PR CHECKLIST (ANIMAÇÃO)

- [ ] A animação tem objetivo claro de UX?
- [ ] O CTA principal continua com prioridade visual?
- [ ] Está respeitando tokens de cor e limites responsivos?
- [ ] Há fallback para `prefers-reduced-motion`?
- [ ] Evita propriedades custosas e mantém fluidez?
- [ ] Não há jitter/layout shift perceptível?
- [ ] A implementação segue padrão `config + hooks + components + css`?

---

## DECISION PROTOCOL

Se a animação:
- melhora clareza → aplicar
- melhora percepção de profundidade sem competir com conteúdo → aplicar
- é apenas decorativa → remover
- compromete performance → simplificar
- gera distração → remover

Em caso de dúvida: preferir simplicidade.
