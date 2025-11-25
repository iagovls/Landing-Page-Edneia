"use client";
import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/constants";

export default function ContatoPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !email || !mensagem) return;
    const subject = encodeURIComponent("Contato Mentoria Individual");
    const body = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\n\n${mensagem}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="px-6 py-16">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold">Contato</h1>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">Nome</label>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Mensagem</label>
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2"
              rows={6}
              required
            />
          </div>
          <button type="submit" aria-label="Enviar contato" className="rounded-full bg-black text-white px-6 py-3">Enviar</button>
        </form>
      </div>
    </main>
  );
}