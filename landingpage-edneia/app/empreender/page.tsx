"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EmpreenderPage() {
 const [nome,setNome]=useState("");
 const [momento,setMomento]=useState("");
 const [desafio,setDesafio]=useState("");
 const [objetivo,setObjetivo]=useState("");
 const [formato,setFormato]=useState("");
 function enviar(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();
  if(!nome.trim()||!momento||!desafio||!objetivo||!formato)return;
  const msg=["Olá! Quero conversar sobre a mentoria A Marca É Você® Empreender.","","Nome: "+nome.trim(),"Meu momento: "+momento,"Maior desafio: "+desafio,"O que desejo conquistar: "+objetivo,"Tipo de acompanhamento: "+formato].join("\n");
  window.location.href="https://wa.me/5573998181724?text="+encodeURIComponent(msg);
 }
 return <main className="min-h-screen bg-[#FFF9F6] text-[#432734]">
  <header className="bg-cover bg-center text-white" style={{backgroundImage:"linear-gradient(100deg,rgba(64,14,32,.95),rgba(100,31,54,.88)),url('/bg-hero.jpg')"}}>
   <div className="mx-auto max-w-6xl px-5 pb-16 pt-7 md:pb-24">
    <Link href="/"><Image src="/a-marca-e-voce-branco.png" alt="A Marca É Você" width={180} height={85} className="h-auto w-40"/></Link>
    <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
     <div><p className="text-sm font-bold uppercase tracking-widest text-[#E8C37A]">A Marca É Você® Empreender</p><h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">Você não precisa empreender sozinha, nem continuar sem direção.</h1><p className="mt-6 text-lg leading-relaxed text-white/90">Se você trabalha muito, mas sente dificuldade para organizar as finanças, vender com estratégia ou decidir o próximo passo, existe um caminho mais claro.</p><p className="mt-4 text-white/90">A virada começa em você.</p><a href="#conversar" className="mt-7 inline-block rounded-xl bg-[#E8C37A] px-6 py-4 font-bold text-[#4B1930]">Quero encontrar minha direção</a></div>
     <div className="flex justify-center"><Image src="/hero-image.png" alt="Ednéia Silva — mentoria para empreendedoras" width={430} height={420} className="max-h-[430px] w-auto object-contain"/></div>
    </div>
   </div>
  </header>
  <section className="mx-auto max-w-6xl px-5 py-16"><p className="text-sm font-bold uppercase tracking-widest text-[#A78347]">Mentoria individual</p><h2 className="mt-3 max-w-3xl text-3xl font-bold text-[#70283F]">Um acompanhamento construído a partir da sua realidade.</h2><p className="mt-5 max-w-3xl leading-relaxed">Em cinco encontros individuais, vamos identificar o que está travando seu negócio e construir ações práticas para você empreender, planejar e faturar com mais consciência. As ferramentas e prioridades são adaptadas ao seu momento.</p><div className="mt-8 grid gap-5 md:grid-cols-3">{[{t:"Clareza e posicionamento",d:"Entenda seus desafios, seus pontos fortes e as decisões que precisam de atenção."},{t:"Organização e planejamento",d:"Estruture prioridades, rotina e finanças para agir com mais segurança."},{t:"Vendas e execução",d:"Defina ações comerciais viáveis e acompanhe sua evolução sem promessas de resultados automáticos."}].map(x=><article key={x.t} className="rounded-2xl border border-[#E7D7D4] bg-white p-6"><h3 className="text-xl font-bold text-[#70283F]">{x.t}</h3><p className="mt-3 leading-relaxed">{x.d}</p></article>)}</div></section>
  <section id="conversar" className="bg-[#F1E7E4] px-5 py-16"><div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2"><div><p className="text-sm font-bold uppercase tracking-widest text-[#A78347]">Primeiro passo</p><h2 className="mt-3 text-3xl font-bold text-[#70283F]">Me conte o que você está vivendo no seu negócio.</h2><p className="mt-5 leading-relaxed">Responda a cinco perguntas rápidas. Suas respostas serão preparadas para envio pelo WhatsApp, onde conversaremos sobre a mentoria, o formato e o investimento. Sem compromisso de contratação.</p></div><form onSubmit={enviar} className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8"><label className="block text-sm font-semibold">Seu nome<input required maxLength={100} value={nome} onChange={e=>setNome(e.target.value)} placeholder="Como posso chamar você?" className="mt-2 w-full rounded-lg border border-[#D8C9C8] p-3"/></label>{[{label:"Em que momento você está?",value:momento,set:setMomento,options:["Quero começar a empreender","Já tenho meu negócio","Quero expandir meu negócio"]},{label:"Qual é seu maior desafio?",value:desafio,set:setDesafio,options:["Organização e planejamento","Vendas e clientes","Finanças e precificação","Clareza e direção","Outro desafio"]},{label:"O que você mais deseja conquistar?",value:objetivo,set:setObjetivo,options:["Organizar meu negócio","Vender com mais estratégia","Ter mais segurança nas decisões","Crescer de forma sustentável"]},{label:"Que acompanhamento você procura?",value:formato,set:setFormato,options:["Mentoria individual","Quero entender qual opção combina comigo"]}].map(x=><label key={x.label} className="block text-sm font-semibold">{x.label}<select required value={x.value} onChange={e=>x.set(e.target.value)} className="mt-2 w-full rounded-lg border border-[#D8C9C8] bg-white p-3"><option value="">Selecione</option>{x.options.map(o=><option key={o}>{o}</option>)}</select></label>)}<button type="submit" className="w-full rounded-xl bg-[#70283F] px-5 py-4 font-bold text-white">Enviar minhas respostas pelo WhatsApp</button><p className="text-xs text-[#66545D]">Ao clicar, o WhatsApp abrirá com suas respostas. Confirme o envio para concluir.</p></form></div></section>
  <footer className="bg-[#501B2C] px-5 py-8 text-center text-sm text-white/80"><Link href="/" className="underline">A Marca É Você®</Link><p className="mt-2">A virada começa em você.</p></footer>
 </main>;
}