"use client"
import { useRef, useState, useId } from "react"

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const panelId = useId()

  const toggle = () => {
    const el = ref.current
    if (!el) return
    if (!open) {
      setOpen(true)
      setHeight(el.scrollHeight)
    } else {
      setHeight(el.scrollHeight)
      requestAnimationFrame(() => {
        setHeight(0)
        setOpen(false)
      })
    }
  }

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
      {/* eslint-disable jsx-a11y/aria-proptypes */}
      <button
        type="button"
        onClick={toggle}
        className="w-full text-left px-6 py-4 bg-red-900 text-white hover:bg-red-800 cursor-pointer"
        aria-expanded={open ? "true" : "false"}
        aria-controls={panelId}
      >
        <p className="text-white font-medium">{q}</p>
      </button>
      <div
        style={{ height: open ? "auto" : 0, transition: "height 300ms ease" }}
        className="overflow-hidden"
        id={panelId}
      >
        <div ref={ref} className="px-6 md:py-3 py-2 text-zinc-700">
          {a}
        </div>
      </div>
    </div>
  )
}

export default function FAQSectionMentoriaIndividual() {
  const faqs = [
    {
      q: "Será que preciso desse conteúdo?",
      a: "Se você deseja organizar suas finanças e aumentar o faturamento do seu negócio de maneira realista, este conteúdo é para você!",
    },
    {
      q: "Quais as formas de pagamento",
      a: "Você pode pagar com cartão de crédito, boleto bancário ou Pix. O pagamento é rápido e seguro.",
    },
    {
      q: "Posso aplicar as aulas mesmo sem experiência?",
      a: "Sim! O método foi feito para mulheres iniciantes e experientes que querem organizar seus negócios e alcançar resultados mais consistentes.",
    },
  ]

  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-3xl font-semibold text-red-900 text-center">
          Ainda tem dúvidas? Aqui estão as respostas para você
        </h2>
        <p className="mt-2 text-center text-red-600">Perguntas frequentes</p>

        <div className="md:mt-8 mt-4 md:text-base text-sm md:space-y-4 space-y-2">
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/5573998181724?text=Quero%20saber%20mais%20sobre%20a%20mentoria%20individual"
            aria-label="Quero saber mais sobre a mentoria individual"
            className="inline-flex items-center justify-center text-center rounded-lg bg-gradient-to-r from-[#C53537] to-[#9E3134] text-white px-7 md:px-14 py-8 hover:cursor-pointer text-sm sm:text-xl font-bold transition-transform transition-shadow hover:scale-105 hover:shadow-[0_0_24px_#C73638]"
          >
            Quero empreender, planejar e faturar
          </a>
        </div>
      </div>
    </section>
  )
}