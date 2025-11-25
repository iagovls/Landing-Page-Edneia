Você é um desenvolvedor sênior de Next.js. Sua tarefa é recriar o site amarcaevoce.com.br como uma landing page moderna e responsiva, usando Next.js (App Router) e TypeScript, com foco em conversão para a oferta “Mentoria Individual”. Use exclusivamente o conteúdo fornecido no arquivo c:\Users\Iagov\OneDrive\Documentos\GitHub\Landing-Page-Edneia\texto.md como texto base, mantendo redação e tom. Onde forem necessários links, use placeholders indicados abaixo.

Requisitos técnicos

- Framework: Next.js (App Router), TypeScript
- Estilo: CSS Modules (sem dependências externas) ou Tailwind CSS (se julgar necessário); mantenha design limpo e profissional
- Imagens: next/image com otimização e sizes responsivo
- Acessibilidade: semântica HTML5, foco visível, labels e aria nos botões
- SEO: metadata com title , description , canonical: https://amarcaevoce.com.br , Open Graph e Twitter Cards
- Performance: lazy-load em imagens não críticas, evitar JS desnecessário
- Deploy-ready: estrutura pronta para Vercel
Arquitetura e rotas

- Página principal / como landing page
- Opcional: /contato com formulário simples (nome, email, mensagem) validado no client; ação envia para MAILTO placeholder
- Componentização:
  - Hero (headline, subtítulo e CTA)
  - Benefits (5 itens “O que você vai conquistar”)
  - WhyNow (“Por que investir agora”)
  - Price (investimento)
  - WhatYouGet (“O que você vai receber”)
  - Process (“Como funciona o processo” em 5 passos)
  - CTASection (vagas limitadas + botão)
  - Footer (links legais e contato)
- Variáveis de integração:
  - CTA_URL : link de conversão (checkout/WhatsApp)
  - WHATSAPP_NUMBER : telefone em formato internacional
  - CONTACT_EMAIL : email de contato para formulário
Diretrizes de layout

- Paleta: profissional e acolhedora (tons neutros com destaque em cor de ação)
- Tipografia: hierarquia clara de títulos, alta legibilidade
- CTA dominante com rótulo “GARANTIR MINHA VAGA”
- Seções com espaçamento generoso e ícones simples nos bullets
Mapeamento do conteúdo oficial (texto.md)
Use como fonte única de copy, mantendo títulos e bullets. Estruture em seções conforme abaixo:

Hero

- Título: “Mentoria Individual”
- Headline: “Transforme Seu Negócio em 30 Dias: Aumente Seu Faturamento e Destrave Seu Potencial!”
- Subtexto:
  - “Empreender é mais do que ter uma ideia. É sobre transformar essa ideia em um negócio próspero.”
  - “Se você está pronto para aumentar o faturamento do seu negócio em até 30 dias e finalmente destravar todo o potencial que você já tem, este é o momento para dar o próximo passo.”
  - “Com 5 encontros individuais totalmente personalizados, vamos trabalhar juntos para planejar, executar e alavancar seu negócio de forma eficaz.”
- CTA: Botão principal “GARANTIR MINHA VAGA” apontando para CTA_URL
O que você vai conquistar (5 encontros)

1. Diagnóstico Completo e Planejamento Estratégico:
   - “Vamos começar com um diagnóstico detalhado do seu negócio... criar um plano estratégico personalizado para aumentar suas vendas...”
2. Definição de Metas Claras e KPIs:
   - “Vamos definir metas de faturamento claras para os próximos 30 dias...”
3. Desbloqueio de Potencial Pessoal e Profissional:
   - “...trabalhar no desbloqueio de crenças limitantes... fortalecer sua confiança...”
4. Estratégias de Crescimento e Ações Práticas para Faturar Mais:
   - “...implementar estratégias práticas de crescimento... ações imediatas...”
5. Planejamento de Longo Prazo e Escalabilidade:
   - “...plano de longo prazo... continuar crescendo e escalando de maneira sustentável.”
Por que investir agora

- “Este programa de 5 encontros individuais foi desenhado para empreendedores que estão prontos para agir...”
- “Em até 30 dias, você pode transformar seu faturamento... eu estarei ao seu lado...”
Investimento

- “Investimento: R$ 1.497,00”
- Parágrafo explicativo sobre valor como investimento e resultados
O que você vai receber

- “5 encontros individuais (1h cada) com acompanhamento personalizado.”
- “Plano de ação estratégico...”
- “Materiais de apoio...”
- “Acesso direto a mim entre os encontros...”
- “Suporte contínuo...”
Como funciona o processo (timeline)

- Primeiro Encontro: Diagnóstico e planejamento estratégico.
- Segundo Encontro: Definição de metas e KPIs.
- Terceiro Encontro: Desbloqueio do potencial pessoal e profissional.
- Quarto Encontro: Estratégias práticas para aumento de vendas.
- Quinto Encontro: Planejamento de longo prazo e escalabilidade.
CTA final

- “Garanta Sua Vaga Agora!”
- “As vagas são limitadas...”
- Botão: “GARANTIR MINHA VAGA” → CTA_URL
SEO e metadados

- title : “Mentoria Individual | A Marca é Você”
- description : “Aumente seu faturamento em até 30 dias com 5 encontros individuais, plano estratégico e suporte contínuo.”
- Open Graph: título, descrição, url: https://amarcaevoce.com.br , imagem genérica de mentoria
- robots : index, follow
- canonical : https://amarcaevoce.com.br
Entrega esperada

- Projeto Next.js com App Router e TypeScript
- Componentes e páginas conforme especificado
- Placeholders implementados: CTA_URL , WHATSAPP_NUMBER , CONTACT_EMAIL
- Texto exatamente conforme texto.md (sem alterações de sentido)
- Pronto para deploy em Vercel
Observações

- Caso opte por WhatsApp, o CTA pode abrir https://wa.me/WHATSAPP_NUMBER com mensagem pré-preenchida
- Formulário de contato pode ser opcional; se implementado, validar no client e usar mailto:CONTACT_EMAIL até existir backend
Conteúdo Oficial (copiar e usar no site)
Mentoria Individual

Transforme Seu Negócio em 30 Dias: Aumente Seu Faturamento e Destrave Seu Potencial!

Empreender é mais do que ter uma ideia. É sobre transformar essa ideia em um negócio próspero.
Se você está pronto para aumentar o faturamento do seu negócio em até 30 dias e finalmente destravar todo o potencial que você já tem, este é o momento para dar o próximo passo.
Com 5 encontros individuais totalmente personalizados, vamos trabalhar juntos para planejar, executar e alavancar seu negócio de forma eficaz.

O que você vai conquistar com este programa de 5 encontros individuais:

1. Diagnóstico Completo e Planejamento Estratégico:
   Vamos começar com um diagnóstico detalhado do seu negócio. Avaliaremos juntos os pontos fortes, as oportunidades e os desafios. A partir disso, vamos criar um plano estratégico personalizado para aumentar suas vendas e garantir que você esteja no caminho certo para crescer rapidamente.
2. Definição de Metas Claras e KPIs:
   Vamos definir metas de faturamento claras para os próximos 30 dias e estabelecer os KPIs (Indicadores-Chave de Desempenho) que irão medir o progresso. Você saberá exatamente o que precisa fazer para alcançar os resultados que deseja, com um acompanhamento direto.
3. Desbloqueio de Potencial Pessoal e Profissional:
   Empreender também é sobre a sua mentalidade. Durante este encontro, vamos trabalhar no desbloqueio de crenças limitantes e crenças que estão impedindo seu crescimento. Juntos, vamos fortalecer sua confiança e capacidade de tomar decisões impactantes para o sucesso do seu negócio.
4. Estratégias de Crescimento e Ações Práticas para Faturar Mais:
   Você vai aprender a implementar estratégias práticas de crescimento para aumentar suas vendas e expandir sua presença no mercado. Analisaremos quais ações podem ser feitas imediatamente para gerar resultados rápidos e escaláveis, garantindo que você veja um aumento real em seu faturamento.
5. Planejamento de Longo Prazo e Escalabilidade:
   Ao final, vamos olhar para o futuro do seu negócio. Desenvolveremos um plano de longo prazo, com estratégias para continuar crescendo e escalando seu negócio de maneira sustentável. Você sairá com uma visão clara de onde quer chegar e como alcançar esses objetivos de forma consistente.
Por que você deve investir neste programa agora?

Este programa de 5 encontros individuais foi desenhado para empreendedores que estão prontos para agir e ver resultados rápidos. Se você já tem um negócio, mas sente que não está crescendo o suficiente, ou que não está explorando todo o seu potencial, este é o momento certo para investir no futuro do seu negócio.

Em até 30 dias, você pode transformar seu faturamento. E o melhor: você não estará sozinho. Eu estarei ao seu lado, passo a passo, garantindo que você tenha todo o apoio necessário para alcançar seus objetivos.

Investimento: R$ 1.497,00

O valor de R$ 1.497,00 é um investimento no futuro do seu negócio. Isso é um custo pequeno diante dos resultados que você pode alcançar com o plano certo. Vamos trabalhar com ações práticas, objetivas e personalizadas, que já ajudaram outros empreendedores a destravar o seu potencial e gerar um aumento no faturamento de forma rápida e consistente.

O que você vai receber:

5 encontros individuais (1h cada) com acompanhamento personalizado.
Plano de ação estratégico para aumentar suas vendas e garantir crescimento rápido.
Materiais de apoio (planilhas, guias e ferramentas práticas) para implementação.
Acesso direto a mim entre os encontros para dúvidas rápidas e ajustes.
Suporte contínuo para garantir que você esteja no caminho certo para o sucesso.

Como funciona o processo:

Primeiro Encontro: Diagnóstico e planejamento estratégico.
Segundo Encontro: Definição de metas e KPIs.
Terceiro Encontro: Desbloqueio do potencial pessoal e profissional.
Quarto Encontro: Estratégias práticas para aumento de vendas.
Quinto Encontro: Planejamento de longo prazo e escalabilidade.

Garanta Sua Vaga Agora!

As vagas são limitadas para garantir que cada cliente tenha a atenção exclusiva que merece. Não perca a chance de transformar o seu negócio em até 30 dias.

Clique abaixo para garantir sua vaga e começar a mudar seu negócio hoje mesmo.

[Botão: GARANTIR MINHA VAGA]