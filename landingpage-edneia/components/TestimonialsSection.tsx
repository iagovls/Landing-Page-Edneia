import Image from "next/image"

function emph(text: string, phrases: string[]) {
  let out = text
  phrases.forEach((p) => {
    out = out.replace(p, `<strong class=\"font-bold\">${p}</strong>`)
  })
  return out
}

export default function TestimonialsSection() {
  const items = [
    {
      name: "Leza",
      title: "Planejamento e Faturamento Estruturado",
      image: "/leza.png",
      text:
        "Quando eu decidi começar o método A Marca é Você Business, minha vida como empreendedora estava sobrecarregada e sem direcionamento e organização. Eu estava empreendendo, mas sem o planejamento adequado e sem uma estratégia clara para faturar o que meu negócio realmente podia. A maior mudança foi quando eu comecei a planejar de forma estruturada. O A Marca é Você Business me ensinou a organizar minhas finanças, planejar compras e vendas e estabelecer metas claras para o meu negócio. Isso foi a chave para meu crescimento! Com o planejamento certo, meu faturamento começou a crescer significativamente e eu percebi que, ao empreender de maneira planejada, eu tinha total controle sobre o futuro da minha empresa.",
      emphasize: [
        "A Marca é Você Business",
        "planejamento adequado",
        "estratégia clara",
        "planejar de forma estruturada",
        "organizar minhas finanças",
        "planejar compras e vendas",
        "metas claras",
        "meu faturamento",
        "total controle",
      ],
    },
    {
      name: "Lucimar",
      title: "Liderança e Autoconfiança",
      image: "/Lucimar.png",
      text:
        "Não foi só o faturamento que melhorou. Aprendi a liderar minha equipe, a definir objetivos e a me organizar para alcançar as metas que estabeleci. Hoje, sei exatamente onde quero chegar e tenho a estratégia certa para isso. Mas a transformação foi além do negócio. Durante o programa, aprendi a identificar meus medos e a superar limitações que eu mesma havia colocado no meu caminho. Passei a acreditar no meu potencial e a agir com confiança. O A Marca é Você Business me ajudou a entender que eu tinha o poder e a capacidade de alcançar qualquer objetivo.",
      emphasize: [
        "faturamento",
        "liderar minha equipe",
        "definir objetivos",
        "metas",
        "estratégia certa",
        "transformação",
        "superar limitações",
        "acreditar no meu potencial",
        "agir com confiança",
        "A Marca é Você Business",
        "poder",
        "capacidade",
        "alcançar qualquer objetivo",
      ],
    },
  ]

  return (
    <section
      className="relative px-6 py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg%20plateia.png')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">Depoimentos</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.name}
              className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xs shadow-sm overflow-hidden"
            >
              <div className="p-6 flex items-center gap-4">
                <Image src={it.image} alt={it.name} width={72} height={72} className="rounded-full" />
                <div>
                  <p className="text-lg font-semibold text-white">{it.name}</p>
                  <p className="text-sm text-white/80">{it.title}</p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <p
                  className="text-white/90 font-light"
                  dangerouslySetInnerHTML={{ __html: emph(it.text, it.emphasize) }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}