"use client"
import { useEffect, useState } from "react"
import { Headset, FileStack, Phone, Handshake, MessageSquareDiff, Navigation, LayoutTemplate, Route } from 'lucide-react'


function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (Math.PI / 180) * (angleDeg - 90)
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

function ringSegmentPath(
  cx: number,
  cy: number,
  rOuter: number,
  rInner: number,
  start: number,
  end: number
) {
  const p1o = polar(cx, cy, rOuter, start)
  const p2o = polar(cx, cy, rOuter, end)
  const p2i = polar(cx, cy, rInner, end)
  const p1i = polar(cx, cy, rInner, start)
  const largeArc = end - start > 180 ? 1 : 0
  const sweep = 1
  return [
    `M ${p1o.x} ${p1o.y}`,
    `A ${rOuter} ${rOuter} 0 ${largeArc} ${sweep} ${p2o.x} ${p2o.y}`,
    `L ${p2i.x} ${p2i.y}`,
    `A ${rInner} ${rInner} 0 ${largeArc} ${0} ${p1i.x} ${p1i.y}`,
    'Z',
  ].join(' ')
}

function quadrantPath(cx: number, cy: number, r: number, start: number, end: number) {
  const p1 = polar(cx, cy, r, start)
  const p2 = polar(cx, cy, r, end)
  const largeArc = end - start > 180 ? 1 : 0
  const sweep = 1
  return [
    `M ${cx} ${cy}`,
    `L ${p1.x} ${p1.y}`,
    `A ${r} ${r} 0 ${largeArc} ${sweep} ${p2.x} ${p2.y}`,
    'Z',
  ].join(' ')
}

export default function Target() {
  const size = 256
  const cx = size / 2
  const cy = size / 2
  const rOuter = 100
  const rInner = 72
  const rDisc = 50
  const gapX = 5
  const gapY = 5

  const [active, setActive] = useState<number | null>(null)
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)")
    const update = () => setMobile(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  const ringColors = ['#9B3133', '#6C2B2B', '#9B3133', '#C73538']
  const discColors = ['#9B3133', '#C73538', '#9B3133', '#C73538']

  const quads = [
    { start: 0, end: 90 },
    { start: 90, end: 180 },
    { start: 180, end: 270 },
    { start: 270, end: 360 },
  ]

  const infoItems = [
    '5 encontros individuais (1h cada) com acompanhamento personalizado.',
    'Plano de ação estratégico para aumentar suas vendas e garantir crescimento rápido.',
    'Materiais de apoio (planilhas, guias e ferramentas práticas) para implementação.',
    'Acesso direto a mim entre os encontros para dúvidas rápidas e ajustes.',
    'Suporte contínuo para garantir que você esteja no caminho certo para o sucesso.',
    'Feedback personalizado por áudio/vídeo para acelerar decisões.',
    'Templates e modelos prontos para execução imediata.',
    'Relatório final com próximos passos e roadmap de crescimento.',
  ]
  const infoIcons = [Headset, Route, FileStack, Phone, Handshake, MessageSquareDiff, LayoutTemplate, Navigation]

  return (
    <div className="w-full flex flex-col items-center bg-white py-10">
      <h2 className="text-2xl md:text-3xl font-normal text-[#C73638]">O que você vai <span className="font-bold">receber</span>:</h2>
      <p className="text-sm text-zinc-600 mt-1">{mobile ? 'toque para visualizar' : 'passe o mouse para visualizar'}</p>
      <div className="relative">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        className="max-w-sm"
      >
        {quads.map((q, i) => {
          const tx = i === 0 || i === 1 ? gapX : -gapX
          const ty = i === 0 || i === 3 ? -gapY : gapY
          const idx = i
          const activeScale = active === idx ? 'scale-110' : ''
          return (
            <g
              key={`ring-g-${i}`}
              transform={`translate(${tx}, ${ty})`}
              onMouseEnter={() => !mobile && setActive(idx)}
              onMouseLeave={() => !mobile && setActive(null)}
              onClick={() => setActive(active === idx ? null : idx)}
              onTouchStart={() => setActive(active === idx ? null : idx)}
              className={`transition-transform duration-200 ease-out hover:scale-105 ${activeScale} cursor-pointer`}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            >
              <path
                d={ringSegmentPath(cx, cy, rOuter, rInner, q.start, q.end)}
                fill={ringColors[i]}
              />
            </g>
          )
        })}

        {quads.map((q, i) => {
          const tx = i === 0 || i === 1 ? gapX : -gapX
          const ty = i === 0 || i === 3 ? -gapY : gapY
          const idx = 4 + i
          const activeScale = active === idx ? 'scale-110' : ''
          return (
            <g
              key={`disc-g-${i}`}
              transform={`translate(${tx}, ${ty})`}
              onMouseEnter={() => !mobile && setActive(idx)}
              onMouseLeave={() => !mobile && setActive(null)}
              onClick={() => setActive(active === idx ? null : idx)}
              onTouchStart={() => setActive(active === idx ? null : idx)}
              className={`transition-transform duration-200 ease-out hover:scale-110 ${activeScale} cursor-pointer`}
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            >
              <path
                d={quadrantPath(cx, cy, rDisc, q.start, q.end)}
                fill={discColors[i]}
              />
            </g>
          )
        })}
      </svg>
      {active !== null && (() => {
        const q = active % 4
        const offset = 16
        let pos: React.CSSProperties
        if (mobile) {
          pos = { left: cx, top: -offset, transform: 'translate(-50%, -100%)' }
            
        } else {
          const isRight = q === 0 || q === 1
          pos = isRight
            ? { left: size + offset, top: cy, transform: 'translate(0, -50%)' }
            : { left: -offset, top: cy, transform: 'translate(-100%, -50%)' }
        }
        const Icon = infoIcons[active]
        return (
          <div className="absolute" style={pos}>
            <div className="bg-white text-zinc-900 rounded-xl shadow-lg px-4 py-3 w-96 flex items-center gap-5">
              <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#C73638] shrink-0" />
              <p className="text-sm md:text-lg font-semibold">{infoItems[active]}</p>
            </div>
          </div>
        )
      })()}
      </div>
    </div>
  )
}