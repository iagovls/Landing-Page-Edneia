import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

const dores = [
  "Você delega, mas precisa cobrar a mesma tarefa várias vezes?",
  "Quando surge um problema, todos esperam que você resolva?",
  "Sua equipe trabalha, mas falta alinhamento e responsabilidade?",
  "O retrabalho e as urgências impedem você de planejar?",
  "Há pessoas com potencial, mas faltam líderes preparados?"
];
const frentes = [
  {titulo:"Gestão do empresário", texto:"Clareza para decidir, delegar, acompanhar e sair da rotina de apagar incêndios."},
  {titulo:"Desenvolvimento de lideranças", texto:"Preparação de líderes para orientar equipes, comunicar, acompanhar e resolver conflitos."},
  {titulo:"Cultura e equipe", texto:"Valores transformados em atitudes, responsabilidades claras e mais alinhamento no trabalho."},
  {titulo:"Execução e acompanhamento", texto:"Ferramentas e rotinas adaptadas à empresa para acompanhar compromissos e melhorias."}
];
const whatsapp="https://wa.me/5573998181724?text="+encodeURIComponent("Olá! Conheci a A Marca É Você® Business e gostaria de conversar sobre os desafios da minha empresa.");
export const metadata = {
  title:"Consultoria Empresarial Personalizada | A Marca É Você® Business",
  description:"Sua empresa só funciona quando você está presente? Conheça uma consultoria empresarial personalizada para gestão, liderança, cultura e execução."
};
export default function BusinessPage(){
 return <main className="min-h-screen bg-[#FFFBF8] text-[#3C2430]">
   <section className="relative overflow-hidden bg-cover bg-center text-white" style={{backgroundImage:"url('/bg-hero.jpg')"}}>
     <div className="absolute inset-0 bg-gradient-to-r from-[#3D0E1F]/95 via-[#70283F]/90 to-[#3D0E1F]/75"/>
     <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-8 md:pb-28 md:pt-12">
       <nav className="flex flex-wrap items-center justify-between gap-5">
         <Link href="/" aria-label="Voltar à página inicial"><Image src="/a-marca-e-voce-branco.png" alt="A Marca É Você" width={190} height={90} className="h-auto w-40 object-contain md:w-48"/></Link>
         <Link href="/raio-x-empresarial-360" className="rounded-full border border-[#E8C37A] px-5 py-2 text-sm font-semibold text-[#F6DFA8] hover:bg-white/10">Raio-X gratuito</Link>
       </nav>
       <div className="mt-16 max-w-4xl md:mt-24">
         <p className="text-xs font-bold uppercase tracking-[.22em] text-[#E8C37A]">A Marca É Você® Business</p>
         <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">Sua empresa só funciona quando você está presente?</h1>
         <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">Você delega, mas precisa cobrar. Sua equipe trabalha, mas os problemas continuam chegando até você. E, no final, tudo volta para suas mãos.</p>
         <p className="mt-5 max-w-2xl leading-relaxed text-white/90">Desenvolvemos empresários, preparamos lideranças e fortalecemos equipes para transformar responsabilidades em execução — com uma consultoria construída para a realidade da sua empresa.</p>
         <div className="mt-9 flex flex-wrap gap-3"><Link href="/raio-x-empresarial-360" className="inline-flex items-center gap-2 rounded-xl bg-[#E8C37A] px-6 py-4 font-bold text-[#4B1930] hover:bg-[#F6DFA8]">Descobrir o que trava minha empresa <ArrowRight size={18}/></Link><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/60 px-6 py-4 font-semibold hover:bg-white/10"><MessageCircle size={18}/> Conversar diretamente</a></div>
         <p className="mt-10 border-l-2 border-[#E8C37A] pl-4 text-xl font-semibold text-[#F6DFA8] md:text-2xl">O gestor pode não estar presente, mas a cultura está.</p>
         <p className="mt-4 text-sm text-white/70">A virada começa em você.</p>
       </div>
     </div>
   </section>
   <section className="mx-auto max-w-6xl px-5 py-16 md:py-24"><p className="text-xs font-bold uppercase tracking-widest text-[#956B3A]">Reconheça os sinais</p><h2 className="mt-3 max-w-3xl text-3xl font-bold text-[#70283F] md:text-4xl">Você está administrando sua empresa ou apenas apagando incêndios?</h2><div className="mt-9 grid gap-4 md:grid-cols-2">{dores.map((d)=><div key={d} className="flex items-start gap-3 rounded-2xl border border-[#E9D9D9] bg-white p-5"><CheckCircle2 className="mt-1 shrink-0 text-[#B58A44]" size={21}/><p className="leading-relaxed">{d}</p></div>)}</div><p className="mt-8 max-w-3xl text-lg leading-relaxed">O problema nem sempre é falta de esforço. Pode estar na maneira como pessoas, processos, responsabilidades e decisões estão organizados.</p></section>
   <section className="bg-[#F4EBE8] px-5 py-16 md:py-24"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-widest text-[#956B3A]">Nossa diferença</p><h2 className="mt-3 max-w-4xl text-3xl font-bold text-[#70283F] md:text-4xl">Sua empresa não precisa de mais um treinamento genérico.</h2><p className="mt-5 max-w-3xl text-lg leading-relaxed">Precisa de soluções para os problemas que realmente enfrenta. Começamos pela escuta e pelo diagnóstico. A partir da realidade do seu negócio, desenvolvemos um plano de atuação personalizado, com ferramentas práticas, acompanhamento e ações voltadas às necessidades identificadas.</p><div className="mt-10 grid gap-5 md:grid-cols-2">{frentes.map((f,i)=><article key={f.titulo} className="rounded-2xl bg-white p-7 shadow-sm"><span className="text-sm font-bold text-[#B58A44]">0{i+1}</span><h3 className="mt-3 text-xl font-bold text-[#70283F]">{f.titulo}</h3><p className="mt-3 leading-relaxed text-[#594550]">{f.texto}</p></article>)}</div></div></section>
   <section className="mx-auto max-w-6xl px-5 py-16 md:py-24"><p className="text-xs font-bold uppercase tracking-widest text-[#956B3A]">Experiência aplicada</p><h2 className="mt-3 max-w-4xl text-3xl font-bold text-[#70283F] md:text-4xl">Uma liderança preparada pode transformar a rotina de uma empresa.</h2><div className="mt-7 max-w-4xl space-y-4 text-lg leading-relaxed"><p>Em uma empresa atendida, os proprietários precisavam reduzir a concentração de responsabilidades e desenvolver alguém capaz de assumir a gestão no dia a dia.</p><p>Durante o acompanhamento, identificamos uma colaboradora com potencial de liderança e trabalhamos competências de comunicação, gestão de pessoas, conflitos e posicionamento profissional.</p><p className="font-semibold text-[#70283F]">Os proprietários relataram mais confiança e tranquilidade para se ausentar. A profissional segue exercendo a função de gerência.</p><p className="text-sm text-[#75636C]">Caso real apresentado sem identificação da empresa. Os resultados descritos são qualitativos e relatados pelo cliente.</p></div></section>
   <section className="bg-[#70283F] px-5 py-16 text-white md:py-24"><div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1fr_0.8fr]"><div><p className="text-xs font-bold uppercase tracking-widest text-[#E8C37A]">Quem conduz o trabalho</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Ednéia Silva</h2><p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">Consultora empresarial, mentora, Coach Integral Sistêmica, analista de perfil comportamental e graduada em Ciências Contábeis. Une experiência em gestão, desenvolvimento humano, liderança e cultura organizacional para atuar de forma prática nos desafios de cada negócio.</p><p className="mt-6 max-w-3xl text-[#E8C37A]">Desenvolvendo pessoas, fortalecendo empresas e transformando histórias.</p></div><div className="flex justify-center"><Image src="/imagem%20quem%20%C3%A9%20Edneia.png" alt="Ednéia Silva, consultora empresarial" width={520} height={600} className="h-auto max-h-[540px] w-auto max-w-full object-contain" /></div></div></section>
   <section className="mx-auto max-w-4xl px-5 py-20 text-center"><h2 className="text-3xl font-bold text-[#70283F] md:text-4xl">O que está impedindo sua empresa de funcionar melhor?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed">Comece identificando quais áreas merecem mais atenção. O pré-diagnóstico é gratuito, leva aproximadamente dois minutos e apresenta um resultado inicial para orientar sua reflexão.</p><Link href="/raio-x-empresarial-360" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#70283F] px-7 py-4 font-bold text-white hover:bg-[#582034]">Fazer meu Raio-X Empresarial gratuito <ArrowRight size={19}/></Link><p className="mt-5 text-sm text-[#75636C]">A análise aprofundada e a consultoria são serviços contratados separadamente.</p></section>
 </main>;
}