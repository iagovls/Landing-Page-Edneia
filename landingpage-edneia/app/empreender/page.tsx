"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EmpreenderPage() {
 const [nome,setNome]=useState("");
 const [desafio,setDesafio]=useState("");
 function enviar(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();
  if(!nome.trim()||!desafio)return;
  const msg=["Olá! Quero conversar sobre a mentoria A Marca É Você® Empreender.","","Nome: "+nome.trim(),"Meu maior desafio: "+desafio].join("\n");
  window.location.href="https://wa.me/5573998181724?text="+encodeURIComponent(msg);
 }
 return <main className="min-h-screen bg-[#FFF9F6] text-[#432734]">
  <header className="bg-cover bg-center text-white" style={{backgroundImage:"linear-gradient(100deg,rgba(64,14,32,.96),rgba(100,31,54,.9)),url('/bg-hero.jpg')"}}>
   <div className="mx-auto max-w-6xl px-5 pb-9 pt-6 md:pb-20">
    <Link href="/"><Image src="/a-marca-e-voce-branco.png" alt="A Marca É Você" width={180} height={85} className="h-auto w-40"/></Link>
    <div className="mt-5 grid items-center gap-5 md:mt-12 md:grid-cols-2 md:gap-10">
     <div>
      <p className="text-sm font-bold uppercase tracking-widest text-[#E8C37A]">A Marca É Você® Empreender</p>
      <h1 className="mt-4 max-w-3xl text-[clamp(1.9rem,7.2vw,2.5rem)] font-bold leading-[1.13] sm:text-4xl md:text-5xl">Você sabe que precisa mudar alguma coisa. Mas ainda não sabe por onde começar?</h1>
      <p className="mt-4 text-base leading-relaxed text-white/90 md:text-lg">Você trabalha, se dedica, resolve tudo e continua adiando decisões importantes. No fim do dia, fica a sensação de que se esforçou muito, mas não avançou como gostaria.</p>
      <p className="mt-3 text-base font-semibold text-[#F6DFA8] md:text-lg">Você não precisa descobrir o próximo passo sozinha.</p>
      <div className="mt-5 flex flex-col gap-2 sm:items-start">
       <a href="https://wa.me/5573998181724?text=Ol%C3%A1%21%20Quero%20agendar%20a%20Sess%C3%A3o%20Estrat%C3%A9gica%20Clareza%20%26%20Dire%C3%A7%C3%A3o%20de%2060%20minutos%20por%20R%24%20197.%20Pode%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis%20e%20a%20forma%20de%20pagamento%3F" target="_blank" rel="noopener noreferrer" className="inline-block rounded-xl bg-[#E8C37A] px-6 py-4 text-center font-bold text-[#4B1930]">Quero agendar minha Sessão Estratégica</a>
       <p className="text-sm text-white/85">60 minutos online • R$ 197 • 5 vagas de lançamento</p>
       <a href="#mentoria" className="inline-block rounded-xl border border-[#E8C37A]/70 px-6 py-3 text-center font-semibold text-white">Quero conhecer a mentoria completa</a>
      </div>
      <p className="mt-5 text-sm text-white/80">A virada começa em você.</p>
     </div>
     <div className="flex justify-center"><Image src="/hero-image.png" alt="Ednéia Silva — mentoria para empreendedoras" width={430} height={420} priority className="max-h-[245px] w-auto object-contain sm:max-h-[300px] md:max-h-[430px]"/></div>
    </div>
   </div>
  </header>
  <section className="mx-auto max-w-6xl px-5 py-10 md:py-20">
   <p className="text-sm font-bold uppercase tracking-widest text-[#A78347]">Você se reconhece?</p>
   <h2 className="mt-3 max-w-4xl text-[1.7rem] leading-tight font-bold text-[#70283F] md:text-3xl">O problema nem sempre é falta de esforço. Às vezes, é não saber qual decisão tomar primeiro.</h2>
   <div className="mt-6 grid gap-3 md:grid-cols-2">{[
    "Você tem tantas responsabilidades que não encontra tempo para pensar no seu próprio crescimento.",
    "Você trabalha muito, mas não consegue enxergar com clareza os resultados do negócio.",
    "Existe uma decisão importante que você continua adiando por insegurança.",
    "Você já tentou se organizar sozinha, mas acaba voltando aos mesmos problemas."
   ].map(x=><div key={x} className="rounded-xl border border-[#E7D7D4] bg-white p-4 text-[0.98rem] leading-relaxed md:p-5 md:text-base"><span className="mr-2 font-bold text-[#A78347]">✓</span>{x}</div>)}</div>
   <p className="mt-5 max-w-3xl text-base font-semibold text-[#70283F] md:text-lg">Você não precisa resolver tudo de uma vez. Precisa começar pelo que realmente importa.</p>
  </section>
  <section id="sessao" className="bg-[#70283F] px-5 py-11 text-white md:py-20">
   <div className="mx-auto max-w-6xl">
    <p className="text-sm font-bold uppercase tracking-widest text-[#E8C37A]">Um primeiro passo possível</p>
    <h2 className="mt-3 max-w-4xl text-3xl font-bold md:text-4xl">Sessão Estratégica Clareza & Direção</h2>
    <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90">Uma sessão individual para olhar com profundidade para um desafio prioritário da sua vida profissional ou do seu negócio — e sair com mais clareza sobre o que fazer a seguir.</p>
    <div className="mt-6 grid gap-3 md:grid-cols-3">{[
     {n:"01",t:"Escuta estratégica",d:"Você apresenta seu desafio e identificamos o que precisa de atenção agora."},
     {n:"02",t:"Análise e direção",d:"Organizamos o cenário, avaliamos possibilidades e definimos uma prioridade."},
     {n:"03",t:"Próximos passos",d:"Você recebe um resumo com até três ações práticas para colocar em movimento."}
    ].map(x=><article key={x.n} className="rounded-xl border border-white/20 bg-[#5B2035] p-4 md:p-6"><span className="text-2xl font-bold text-[#E8C37A]">{x.n}</span><h3 className="mt-3 text-xl font-bold">{x.t}</h3><p className="mt-3 leading-relaxed text-white/90">{x.d}</p></article>)}</div>
    <div className="mt-6 rounded-2xl bg-white p-5 md:p-7 text-[#432734] md:flex md:items-center md:justify-between md:gap-8">
     <div><p className="text-xs font-bold uppercase tracking-widest text-[#A78347]">5 vagas de lançamento</p><h3 className="mt-2 text-2xl font-bold text-[#70283F]">Você chega com um desafio. Sai com uma direção.</h3><p className="mt-3 text-sm text-[#66545D]">60 minutos • Online • Individual • Resumo dos próximos passos</p><p className="mt-3 text-3xl font-bold text-[#70283F]">R$ 197 <span className="text-sm font-normal text-[#66545D]">valor de lançamento</span></p></div>
     <a href="https://wa.me/5573998181724?text=Ol%C3%A1%21%20Quero%20agendar%20a%20Sess%C3%A3o%20Estrat%C3%A9gica%20Clareza%20%26%20Dire%C3%A7%C3%A3o%20de%2060%20minutos%20por%20R%24%20197.%20Pode%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis%20e%20a%20forma%20de%20pagamento%3F" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-xl bg-[#70283F] px-6 py-4 text-center font-bold text-white md:mt-0">Consultar horários no WhatsApp</a>
    </div>
    <p className="mt-5 max-w-4xl text-sm text-white/75">A sessão é focada em um desafio e não inclui acompanhamento contínuo. Não há promessa de resolver integralmente um problema em um encontro. Demandas clínicas ou psicológicas devem ser acompanhadas por profissionais habilitados.</p>
   </div>
  </section>
  <section className="bg-white px-5 py-11 md:py-16"><div className="mx-auto max-w-4xl">
   <p className="text-sm font-bold uppercase tracking-widest text-[#A78347]">Quem vai caminhar com você</p><h2 className="mt-3 text-3xl font-bold text-[#70283F]">Ednéia Silva</h2>
   <p className="mt-5 leading-relaxed">Mentora de mulheres empreendedoras, Coach Integral Sistêmica e analista de perfil comportamental. Meu trabalho conecta autoconhecimento, decisões e resultados, considerando a mulher e a realidade do seu negócio.</p>
   <p className="mt-4 leading-relaxed">Aqui você não recebe respostas prontas. Começamos pela escuta, fazemos as perguntas necessárias e construímos um direcionamento personalizado para o desafio que você trouxe.</p>
   <p className="mt-5 font-semibold text-[#70283F]">A virada começa em você!</p>
  </div></section>
  <section className="bg-[#FFF9F6] px-5 py-11 md:py-16"><div className="mx-auto max-w-6xl">
   <p className="text-sm font-bold uppercase tracking-widest text-[#A78347]">Histórias reais de transformação</p>
   <h2 className="mt-3 max-w-4xl text-3xl font-bold text-[#70283F]">Quando a mulher ganha clareza, suas decisões também mudam.</h2>
   <p className="mt-4 max-w-3xl leading-relaxed">Estes exemplos são de acompanhamentos individuais mais amplos, não de sessões avulsas. Cada trajetória tem seu próprio contexto.</p>
   <div className="mt-8 grid gap-5 md:grid-cols-2">
    <article className="rounded-2xl border border-[#E7D7D4] bg-white p-7"><p className="text-sm font-bold uppercase tracking-wider text-[#A78347]">Marciele • Organização e direção</p><h3 className="mt-2 text-xl font-bold leading-snug text-[#70283F] md:text-2xl">Da insegurança para decisões mais conscientes</h3><p className="mt-4 leading-relaxed">Ao longo do acompanhamento, Marciele relatou mais segurança, conquistou novos contratos e avançou na organização da rotina profissional e na compreensão dos números do negócio.</p><p className="mt-4 text-sm text-[#66545D]">Síntese baseada nos registros das sessões, não em depoimento literal.</p></article>
    <article className="rounded-2xl border border-[#E7D7D4] bg-white p-7"><p className="text-sm font-bold uppercase tracking-wider text-[#A78347]">Mayara • Identidade e posicionamento</p><h3 className="mt-3 text-2xl font-bold text-[#70283F]">Reconhecer o próprio diferencial mudou sua forma de se apresentar</h3><p className="mt-4 leading-relaxed">Mayara passou a comunicar com mais segurança seu trabalho em estética natural, desenvolveu iniciativas para fortalecer sua marca e ampliou sua postura comercial. Seu relato de evolução também registra novas parcerias e mais consciência sobre vendas.</p><p className="mt-4 text-sm text-[#66545D]">Síntese baseada no relatório de ganhos após a mentoria.</p></article>
   </div>
  </div></section>
  <section id="mentoria" className="bg-[#F1E7E4] px-5 py-11 md:py-16"><div className="mx-auto max-w-6xl">
   <p className="text-sm font-bold uppercase tracking-widest text-[#A78347]">Para ir além de uma sessão</p>
   <h2 className="mt-3 max-w-4xl text-3xl font-bold text-[#70283F]">Mentoria Individual: acompanhamento para transformar decisões em mudanças consistentes.</h2>
   <p className="mt-5 max-w-3xl leading-relaxed">Se você precisa trabalhar diferentes desafios, organizar seu negócio e acompanhar a execução das mudanças, a mentoria completa oferece um processo individual personalizado. Em cinco encontros, unimos autoconhecimento, diagnóstico, planejamento e revisão dos avanços.</p>
   <div className="mt-8 grid gap-5 md:grid-cols-3">{[
    {t:"Clareza e posicionamento",d:"Identifique seus pontos fortes e as decisões que precisam de atenção."},
    {t:"Organização e planejamento",d:"Estruture prioridades, rotina e finanças para agir com mais segurança."},
    {t:"Vendas e execução",d:"Defina ações comerciais viáveis e acompanhe os ajustes necessários."}
   ].map(x=><article key={x.t} className="rounded-2xl bg-white p-6"><h3 className="text-xl font-bold text-[#70283F]">{x.t}</h3><p className="mt-3 leading-relaxed">{x.d}</p></article>)}</div>
   <a href="#conversar" className="mt-8 inline-block rounded-xl bg-[#70283F] px-6 py-4 font-bold text-white">Quero conhecer a mentoria completa</a>
  </div></section>
  <section className="bg-white px-5 py-11 md:py-16"><div className="mx-auto max-w-4xl">
   <h2 className="text-3xl font-bold text-[#70283F]">Dúvidas antes de começar?</h2>
   <div className="mt-5 space-y-3">{[
    {q:"A sessão é para mim, mesmo sem ter um negócio estruturado?",a:"Sim. A sessão atende mulheres empreendedoras e profissionais que desejam trabalhar um desafio específico de decisão, organização ou posicionamento."},
    {q:"Vou resolver tudo em 60 minutos?",a:"O objetivo é trabalhar uma prioridade, compreender possibilidades e definir até três próximos passos. Alguns desafios exigem mais tempo ou acompanhamento."},
    {q:"Como faço para agendar e pagar?",a:"Clique no botão da sessão para consultar horários e receber as orientações de pagamento pelo WhatsApp."},
    {q:"E se eu precisar de mais de um encontro?",a:"Podemos conversar sobre a mentoria completa, com acompanhamento personalizado em cinco encontros."}
   ].map(x=><article key={x.q} className="rounded-xl border border-[#E7D7D4] bg-[#FFF9F6] p-4 md:p-5"><h3 className="font-bold text-[#70283F]">{x.q}</h3><p className="mt-2 leading-relaxed">{x.a}</p></article>)}</div>
   <a href="https://wa.me/5573998181724?text=Ol%C3%A1%21%20Quero%20agendar%20a%20Sess%C3%A3o%20Estrat%C3%A9gica%20Clareza%20%26%20Dire%C3%A7%C3%A3o%20de%2060%20minutos%20por%20R%24%20197.%20Pode%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis%20e%20a%20forma%20de%20pagamento%3F" target="_blank" rel="noopener noreferrer" className="mt-7 inline-block rounded-xl bg-[#70283F] px-6 py-4 font-bold text-white">Quero agendar minha sessão de R$ 197</a>
  </div></section>
  <section id="conversar" className="bg-[#F1E7E4] px-5 py-11 md:py-16"><div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
   <div><p className="text-sm font-bold uppercase tracking-widest text-[#A78347]">Mentoria completa</p><h2 className="mt-3 text-3xl font-bold text-[#70283F]">Vamos conversar sobre o acompanhamento ideal para você?</h2><p className="mt-5 leading-relaxed">Conte seu nome e o principal desafio que você vive hoje. O WhatsApp abrirá com suas respostas para conversarmos sobre o formato e o investimento da mentoria completa.</p></div>
   <form onSubmit={enviar} className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8"><label className="block text-sm font-semibold">Seu nome<input required maxLength={100} value={nome} onChange={e=>setNome(e.target.value)} placeholder="Como posso chamar você?" className="mt-2 w-full rounded-lg border border-[#D8C9C8] p-3"/></label><label className="block text-sm font-semibold">Qual é seu maior desafio hoje?<select required value={desafio} onChange={e=>setDesafio(e.target.value)} className="mt-2 w-full rounded-lg border border-[#D8C9C8] bg-white p-3"><option value="">Selecione</option>{["Trabalho muito e não vejo o resultado que desejo","Vendas e conquista de clientes","Organização financeira e precificação","Falta de tempo e planejamento","Insegurança e falta de direção","Outro desafio"].map(o=><option key={o} value={o}>{o}</option>)}</select></label><button type="submit" className="w-full rounded-xl bg-[#70283F] px-5 py-4 font-bold text-white">Quero conversar sobre a mentoria</button><p className="text-xs text-[#66545D]">Ao clicar, o WhatsApp abrirá com suas respostas. Confirme o envio para concluir.</p></form>
  </div></section>
  <footer className="bg-[#501B2C] px-5 py-8 text-center text-sm text-white/80"><Link href="/" className="underline">A Marca É Você®</Link><p className="mt-2">A virada começa em você.</p></footer>
 </main>;
}