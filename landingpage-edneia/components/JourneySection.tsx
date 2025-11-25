export default function JourneySection() {
  const cards = [
    {
      image: "/papeis.jpg",
      title: "Empreender",
      text:
        "não é apenas abrir um negócio, mas transformar suas ideias em resultados concretos. O primeiro passo é ter uma visão clara e acreditar no seu potencial para fazer a diferença.",
      emphasize: ["resultados concretos", "visão clara", "acreditar no seu potencial"],
    },
    {
      image: "/laptop.jpg",
      title: "Planejar",
      text:
        "é a chave para o sucesso! Organize sua jornada com estratégias práticas e metas claras para alcançar resultados reais. Saiba exatamente onde está e para onde quer ir",
      emphasize: ["estratégias práticas", "metas claras", "resultados reais"],
    },
    {
      image: "/grafico.jpg",
      title: "Faturar",
      text:
        "Faturar é o reflexo de um planejamento bem executado. Ao aplicar estratégias certas, você verá seu negócio crescer de forma inteligente e gerar resultados financeiros reais, transformando esforço em lucro.",
      emphasize: ["planejamento bem executado", "forma inteligente", "resultados financeiros reais"],
    },
  ]

  function renderText(base: string, emphasize: string[]) {
    let output = base
    emphasize.forEach((phrase) => {
      output = output.replace(
        phrase,
        `<em class=\"italic font-semibold\">${phrase}</em>`
      )
    })
    return output
  }

  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className=" text-xl md:text-3xl text-[#C73638] text-center mb-2">
          <span className="font-bold">Empreenda</span> com Clareza,<br />
          <span className="font-bold">Planeje</span> com Estratégia e<br />
          <span className="font-bold">Fature</span> com Consistência
        </h1>
        <div className="w-24 h-1 bg-[#C73638] mx-auto my-6 rounded-full" />
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative overflow-hidden rounded-2xl min-h-[380px] md:min-h-[440px] group"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent" />
              <div className="relative p-6 pb-8 md:pb-10 flex h-full flex-col justify-end">
                <h2 className="text-2xl font-semibold text-white">{card.title}</h2>
                <p
                  className="mt-3 font-extralight text-white/90"
                  dangerouslySetInnerHTML={{
                    __html: renderText(card.text, card.emphasize),
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}