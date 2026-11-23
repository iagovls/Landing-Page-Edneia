"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HeartHandshake, Users, Sparkles, MessageCircle } from "lucide-react";

export default function RedeElasPage(){
 const [nome,setNome]=useState("");
 const [cidade,setCidade]=useState("");
 const [momento,setMomento]=useState("");
 const [interesse,setInteresse]=useState(false);
 const [consentimento,setConsentimento]=useState(false);
 const [erro,setErro]=useState("");
 function enviar(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();
  if(!nome.trim()||!cidade.trim()||!momento||!consentimento){setErro("Preencha os campos obrigatórios e confirme que deseja enviar suas respostas.");return;}
  setErro("");
  const mensagem=["Olá! Quero solicitar minha entrada gratuita na Rede Elas com Propósito.","","Nome: "+nome.trim(),"Cidade: "+cidade.trim(),"Meu momento: "+momento,"Tenho interesse em receber informações sobre mentorias e eventos: "+(interesse?"Sim":"Não"),"","Envio estas informações voluntariamente para solicitar minha participação."].join("\n");
  window.location.href="https://wa.me/5573998181724?text="+encodeURIComponent(mensagem);
 }
 return <main className="min-h-screen bg-[#FFFAF7] text-[#402635]">
  <header className="relative overflow-hidden bg-cover bg-center text-white" style={{backgroundImage:"linear-gradient(105deg,rgba(63,14,32,.96),rgba(112,40,63,.88)),url('/bg-hero.jpg')"}}>
   <div className="mx-auto max-w-6xl px-5 pb-20 pt-7 md:pb-24">
    <nav className="flex flex-wrap items-center justify-between gap-4"><Link href="/" aria-label="Voltar ao site A Marca É Você"><Image src="/a-marca-e-voce-branco.png" width={190} height={85} alt="A Marca É Você" className="h-auto w-40 object-contain"/></Link><span className="rounded-full border border-[#E8C37A] px-4 py-2 text-xs font-semibold text-[#F6DFA8]">Comunidade gratuita</span></nav>
    <div className="mt-16 max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#E8C37A]">Rede Elas com Propósito</p><h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">Empreender fica mais leve quando você encontra mulheres que caminham com você.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">Uma rede regional gratuita de mulheres que compartilham experiências, criam conexões e fortalecem seus caminhos no empreendedorismo.</p><a href="#participar" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#E8C37A] px-6 py-4 font-bold text-[#4B1930] hover:bg-[#F6DFA8]">Quero fazer parte da Rede Elas <ArrowRight size={19}/></a></div>
   </div>
  </header>
  <section aria-label="Mulheres da Rede Elas com Propósito" className="bg-[#FFFAF7] px-5 pt-14 md:pt-20">
   <div className="mx-auto max-w-6xl">
    <p className="text-xs font-bold uppercase tracking-widest text-[#A78347]">Mulheres reais, conexões verdadeiras</p>
    <h2 className="mt-3 max-w-3xl text-3xl font-bold text-[#70283F] md:text-4xl">Aqui, cada mulher tem uma história. E juntas, construímos novas possibilidades.</h2>
    <div className="mt-8 overflow-hidden rounded-2xl border border-[#E8D8D6] bg-white shadow-sm">
     <Image src="/elas%20com%20proposito1.png" alt="Registro real de mulheres participantes da Rede Elas com Propósito" width={1200} height={720} className="h-auto w-full object-cover" />
    </div>
    <div className="mt-10 grid items-center gap-7 rounded-2xl border border-[#E8D8D6] bg-white p-6 md:grid-cols-[220px_1fr] md:p-8">
     <Image src="/imagem%20quem%20%C3%A9%20Edneia.png" alt="Ednéia Silva, idealizadora da Rede Elas com Propósito" width={220} height={260} className="mx-auto h-auto max-h-64 w-full max-w-[220px] rounded-xl object-contain" />
     <div><p className="text-xs font-bold uppercase tracking-widest text-[#A78347]">Quem idealizou essa rede</p><h3 className="mt-2 text-2xl font-bold text-[#70283F]">Ednéia Silva</h3><p className="mt-3 leading-relaxed">Acredito na força de mulheres que se conectam, compartilham experiências e crescem juntas. A Rede Elas com Propósito nasceu para aproximar mulheres e abrir espaço para encontros, aprendizado e novas oportunidades.</p><a href="#participar" className="mt-5 inline-block font-bold text-[#70283F] underline underline-offset-4">Quero fazer parte dessa rede</a></div>
    </div>
   </div>
  </section>
  <section className="mx-auto max-w-6xl px-5 py-16 md:py-20"><p className="text-xs font-bold uppercase tracking-widest text-[#A78347]">Conexão com propósito</p><h2 className="mt-3 max-w-3xl text-3xl font-bold text-[#70283F] md:text-4xl">Um espaço para trocar, aprender e crescer juntas.</h2><div className="mt-9 grid gap-5 md:grid-cols-3">{[{i:<Users size={28}/>,t:"Conexões reais",d:"Conheça outras mulheres empreendedoras da região e amplie sua rede de relacionamentos."},{i:<HeartHandshake size={28}/>,t:"Apoio e troca",d:"Compartilhe experiências, desafios e oportunidades com mulheres que também empreendem."},{i:<Sparkles size={28}/>,t:"Encontros e aprendizado",d:"Acompanhe convites para encontros, conversas e atividades promovidas pela Rede."}].map(x=><article key={x.t} className="rounded-2xl border border-[#E8D8D6] bg-white p-6"><div className="text-[#B18B4B]">{x.i}</div><h3 className="mt-4 text-xl font-bold text-[#70283F]">{x.t}</h3><p className="mt-3 leading-relaxed">{x.d}</p></article>)}</div><p className="mt-8 text-sm text-[#66545D]">Participar da Rede é gratuito. Mentorias, cursos e eventos específicos podem ter inscrições ou condições próprias, sempre informadas separadamente.</p></section>
  <section id="participar" className="bg-[#F2E9E6] px-5 py-16 md:py-20"><div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-widest text-[#A78347]">Seu próximo passo</p><h2 className="mt-3 text-3xl font-bold text-[#70283F] md:text-4xl">Conte um pouquinho sobre você.</h2><p className="mt-5 leading-relaxed">Queremos conhecer quem deseja participar da nossa comunidade. Responda ao cadastro rápido e envie sua solicitação pelo WhatsApp. Você receberá orientações para entrar no grupo.</p><p className="mt-5 text-sm text-[#66545D]">O formulário não cria cadastro em banco de dados: ao enviar, você abre o WhatsApp com suas respostas para confirmar o envio. Não é necessário comprar nenhum serviço.</p></div>
   <form onSubmit={enviar} className="space-y-5 rounded-2xl bg-white p-6 shadow-sm md:p-8">
    <div><label htmlFor="nome" className="mb-2 block text-sm font-semibold">Como você se chama? *</label><input id="nome" value={nome} onChange={e=>setNome(e.target.value)} maxLength={100} required className="w-full rounded-lg border border-[#D8C9C8] bg-white px-4 py-3 outline-[#70283F]" placeholder="Seu nome"/></div>
    <div><label htmlFor="cidade" className="mb-2 block text-sm font-semibold">De qual cidade você é? *</label><input id="cidade" value={cidade} onChange={e=>setCidade(e.target.value)} maxLength={100} required className="w-full rounded-lg border border-[#D8C9C8] bg-white px-4 py-3 outline-[#70283F]" placeholder="Sua cidade"/></div>
    <div><label htmlFor="momento" className="mb-2 block text-sm font-semibold">Em que momento você está? *</label><select id="momento" value={momento} onChange={e=>setMomento(e.target.value)} required className="w-full rounded-lg border border-[#D8C9C8] bg-white px-4 py-3 outline-[#70283F]"><option value="">Selecione uma opção</option><option>Quero começar a empreender</option><option>Já tenho meu negócio</option><option>Quero fortalecer ou expandir meu negócio</option></select></div>
    <label className="flex items-start gap-3 text-sm leading-relaxed"><input type="checkbox" checked={interesse} onChange={e=>setInteresse(e.target.checked)} className="mt-1 accent-[#70283F]"/>Também gostaria de receber convites sobre mentorias e eventos. (Opcional)</label>
    <label className="flex items-start gap-3 text-sm leading-relaxed"><input type="checkbox" required checked={consentimento} onChange={e=>setConsentimento(e.target.checked)} className="mt-1 accent-[#70283F]"/>Concordo em enviar estas informações pelo WhatsApp para solicitar minha entrada na Rede Elas. *</label>
    {erro&&<p role="alert" className="text-sm font-semibold text-red-700">{erro}</p>}
    <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#70283F] px-5 py-4 font-bold text-white hover:bg-[#552038]"><MessageCircle size={20}/> Solicitar minha entrada gratuita</button>
    <p className="text-xs text-[#66545D]">Ao clicar, o WhatsApp será aberto com sua mensagem. Confirme o envio para concluir sua solicitação.</p>
   </form></div></section>
  <footer className="bg-[#501B2C] px-5 py-8 text-center text-sm text-white/80"><Link href="/" className="underline underline-offset-4">A Marca É Você®</Link><p className="mt-2">A virada começa em você.</p></footer>
 </main>;
}