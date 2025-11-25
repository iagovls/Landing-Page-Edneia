import Image from "next/image"

function renderEmphasis(base: string, phrases: string[]) {
  let out = base
  phrases.forEach((p) => {
    out = out.replace(p, `<strong class=\"font-bold\">${p}</strong>`)
  })
  return out
}

export default function AboutEdneia() {
  const paragraphs = [
    {
      text:
        "Mentora e criadora do método A Marca É Você , estou aqui para ajudar mulheres empreendedoras a aumentar o faturamento de seus negócios e despertar o potencial que já existe dentro delas. Minha jornada começou no setor administrativo de uma loja, onde percebi que, para fazer a diferença, era necessário mais do que simplesmente cumprir tarefas – era preciso treinar pessoas, motivar equipes e buscar resultados .",
      emphasize: [
        "A Marca É Você",
        "aumentar o faturamento",
        "treinar pessoas, motivar equipes e buscar resultados",
      ],
    },
    {
      text:
        "No início, comecei como auxiliar administrativo, mas meu desejo de contribuir para o crescimento da loja me levou a iniciar treinamentos internos com meus colegas de trabalho. Mesmo sem nenhuma formação, passei a buscar formas de inspirar e treinar a equipe, focando em aumentar o desempenho e alcançar as metas estabelecidas .",
      emphasize: [
        "inspirar e treinar a equipe, focando em aumentar o desempenho e alcançar as metas estabelecidas",
      ],
    },
    {
      text:
        "Com isso, comecei a me destacar e percebi que meu propósito era ajudar as pessoas a crescerem , então dei o próximo passo na minha carreira e assumi o cargo de gerente da loja.",
      emphasize: ["meu propósito era ajudar as pessoas a crescerem"],
    },
    {
      text:
        "Minha trajetória de transformação pessoal e profissional me levou a investir fortemente no meu próprio desenvolvimento. Me formei em Ciências Contábeis , fiz cursos de Coach Integral Sistêmico (FEBRACIS Bahia), Business High Performance (FEBRACIS), Metas e Objetivos, Mentalidade Financeira , e me especializei em liderança e negócios . Hoje, além de ser mentora de mulheres empreendedoras , também realizo treinamentos de liderança para gerentes e líderes , ajudando-os a aprimorar suas habilidades e alcançar resultados extraordinários.",
      emphasize: [
        "Ciências Contábeis",
        "Coach Integral Sistêmico (FEBRACIS Bahia)",
        "Business High Performance (FEBRACIS)",
        "Metas e Objetivos",
        "Mentalidade Financeira",
        "liderança e negócios",
        "mentora de mulheres empreendedoras",
        "treinamentos de liderança para gerentes e líderes",
      ],
    },
    {
      text:
        "Sou também coautora do livro “Legado”  e tenho o privilégio de criar e desenvolver o programa A Marca É Você , que já impactou diversas mulheres. Acredito firmemente que, com o senso de dono, qualquer mulher, independentemente do seu ramo de atuação, pode aumentar seu faturamento  e deixar um legado significativo no mercado .",
      emphasize: [
        "coautora do livro “Legado”",
        "A Marca É Você",
        "aumentar seu faturamento",
        "deixar um legado significativo no mercado",
      ],
    },
    {
      text:
        "Além disso, sou a fundadora da Rede Elas com Propósito , um movimento que conecta mais de 130 mulheres empreendedoras , com encontros mensais no Café com Propósito , onde compartilhamos experiências, ideias e vivemos a transformação que só o empreendedorismo feminino pode proporcionar .",
      emphasize: [
        "Rede Elas com Propósito",
        "mais de 130 mulheres empreendedoras",
        "Café com Propósito",
        "transformação que só o empreendedorismo feminino pode proporcionar",
      ],
    },
    {
      text:
        "Sou grata a Deus  por ter a oportunidade de viver meu propósito e por poder ajudar tantas mulheres a atingirem seus objetivos e a prosperarem em seus negócios .",
      emphasize: [
        "grata a Deus",
        "atingirem seus objetivos",
        "prosperarem em seus negócios",
      ],
    },
  ]

  return (
    <section className="px-6 pb-16 bg-gradient-to-r from-red-900 to-red-950">
      <div className="max-w-6xl mx-auto grid gap-1 md:grid-cols-2 items-start">
        <div className="order-2 md:order-1">
          <div className="mb-6 flex justify-center">
            <Image
              src="/Logo%20Neia%20branco.png"
              alt="Logo Ednéia"
              width={240}
              height={120}
              priority
            />
          </div>
          <div className="space-y-5 text-white max-h-[420px] overflow-y-auto pr-3 scrollbar scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                dangerouslySetInnerHTML={{ __html: renderEmphasis(p.text, p.emphasize) }}
              />
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <Image
            src="/imagem%20quem%20%C3%A9%20Edneia.png"
            alt="Quem é Ednéia"
            width={520}
            height={600}
            className="w-9/12"
            priority
          />
        </div>
      </div>
    </section>
  )
}