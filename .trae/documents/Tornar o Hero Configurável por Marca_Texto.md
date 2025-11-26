## Objetivo

* Recriar a landing page amarcaevoce.com.br em Next.js (App Router) e TypeScript, focada em conversão para “Mentoria Individual”.

* Usar exclusivamente o conteúdo de `c:\Users\Iagov\OneDrive\Documentos\GitHub\Landing-Page-Edneia\texto.md` como copy, preservando títulos, bullets e tom.

* Entrega pronta para Vercel, com SEO, acessibilidade e performance.

## Stack Técnica

* Next.js 14+ (App Router) e TypeScript.

* Estilo com CSS Modules (padrão). Tailwind opcional se necessário.

* Imagens com `next/image` e `sizes` responsivo.

* HTML semântico, foco visível, `aria` adequado em CTAs.

## Estrutura de Pastas

* `app/layout.tsx`: layout global, `metadata` (title, description, canonical, Open Graph, Twitter), fonte e estilos.

* `app/page.tsx`: montagem da landing usando os componentes.

* `app/contato/page.tsx` (opcional): formulário client-side com `mailto:CONTACT_EMAIL`.

* `components/Hero.tsx`, `components/Benefits.tsx`, `components/WhyNow.tsx`, `components/Price.tsx`, `components/WhatYouGet.tsx`, `components/Process.tsx`, `components/CTASection.tsx`, `components/Footer.tsx`.

* `lib/constants.ts`: `CTA_URL`, `WHATSAPP_NUMBER`, `CONTACT_EMAIL`.

* `styles/globals.css` (reset e tokens simples) e `components/*.module.css`.

## Componentes

* `Hero`: título, headline, subtextos do `texto.md` e botão “GARANTIR MINHA VAGA” → `CTA_URL` ou `wa.me/WHATSAPP_NUMBER`.

* `Benefits`: lista dos 5 itens “O que você vai conquistar…”.

* `WhyNow`: parágrafos “Por que você deve investir agora?”.

* `Price`: destaque “Investimento: R$ 1.497,00” + parágrafo explicativo.

* `WhatYouGet`: bullets “O que você vai receber”.

* `Process`: timeline dos 5 encontros.

* `CTASection`: reforço de escassez + botão principal.

* `Footer`: links legais, contato (email/WhatsApp) e direitos.

## Mapeamento de Conteúdo (texto.md)

* Hero: “Mentoria Individual”, headline e 3 parágrafos introdutórios.

* Benefits: 1–5 conforme descrições.

* WhyNow: dois parágrafos de motivação e suporte.

* Price: valor e justificativa.

* WhatYouGet: 5 itens de entregáveis.

* Process: 5 passos dos encontros.

* CTA final: “Garanta Sua Vaga Agora!” + texto de vagas limitadas + botão.

## SEO e Metadados

* `title`: “Mentoria Individual | A Marca é Você”.

* `description`: “Aumente seu faturamento em até 30 dias com 5 encontros individuais, plano estratégico e suporte contínuo.”

* Canonical: `https://amarcaevoce.com.br`.

* Open Graph: `og:title`, `og:description`, `og:url: https://amarcaevoce.com.br`, imagem genérica.

* Twitter Cards: `summary_large_image`.

* `robots`: `index, follow`.

## Acessibilidade

* Hierarquia de headings (`h1` no Hero, `h2` nas seções).

* Botões com `aria-label` e estados de foco visíveis.

* Listas semânticas (`ul/li`) para bullets.

* Contraste adequado para textos e CTAs.

## Integrações e Placeholders

* `CTA_URL`: link para checkout ou WhatsApp.

* `WHATSAPP_NUMBER`: formato internacional (ex.: `55XXXXXXXXXX`).

* `CONTACT_EMAIL`: usado em `mailto` no formulário opcional e no footer.

## Estilo e Layout

* Paleta neutra com cor de ação destacada para CTAs.

* Tipografia com hierarquia clara e alta legibilidade.

* Espaçamentos generosos entre seções, ícones simples nos bullets.

* Responsividade mobile-first com grid simples.

## Páginas e Rotas

* `/`: landing completa (todos os blocos).

* `/contato` (opcional): formulário com validação client-side, envio via `mailto:CONTACT_EMAIL`.

## Fases de Implementação

1. Inicializar projeto Next.js com TypeScript e configurar `app/`.
2. Implementar `app/layout.tsx` com `metadata`, canonical e OG/Twitter.
3. Criar `lib/constants.ts` e conectar CTA/contato.
4. Implementar componentes e importar conteúdo de `texto.md` fielmente.
5. Aplicar estilos (CSS Modules), responsividade e estados de foco.
6. Otimizar imagens (se usadas), lazy-load e evitar JS desnecessário.
7. Validar SEO, acessibilidade e performance (Lighthouse) e preparar deploy na Vercel.

## Validação e Entrega

* Revisão de copy conforme `texto.md` (sem alterar sentido).

* Testes manuais de navegação, CTAs e formulário.

* Checagem de SEO (`metadata` e canonical) e a11y (foco, headings, contraste).

* Projeto pronto para Vercel com placeholders funcionais.

## Confirmação

* Confirma este plano? Se sim, inicio a implementação conforme descrito e entrego o projeto pronto para deploy com o conteúdo do `texto.md`.

