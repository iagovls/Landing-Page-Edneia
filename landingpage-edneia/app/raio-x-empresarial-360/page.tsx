"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, RotateCcw, ShieldCheck } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const questions = [
  {
    pillar: "Cultura Organizacional",
    question: "Sua empresa possui valores claros que são praticados pela equipe no dia a dia?",
  },
  {
    pillar: "Liderança e Pessoas",
    question: "Seus líderes conseguem orientar, desenvolver e acompanhar os colaboradores com eficiência?",
  },
  {
    pillar: "Atendimento e Experiência do Cliente",
    question: "Sua empresa mantém um padrão de atendimento que gera satisfação e fidelização?",
  },
  {
    pillar: "Vendas e Crescimento",
    question: "Sua empresa possui estratégias e metas claras para aumentar as vendas?",
  },
  {
    pillar: "Gestão e Resultados",
    question: "Você acompanha regularmente os indicadores financeiros e os resultados do negócio?",
  },
] as const;

const choices = [
  "Não acontece",
  "Acontece raramente",
  "Acontece parcialmente",
  "Acontece na maioria das vezes",
  "Acontece de forma consistente",
] as const;

export default function RaioXEmpresarialPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  const finished = step === questions.length;
  const allAnswered = answers.every((answer) => answer !== null);

  const result = useMemo(() => {
    if (!allAnswered) return null;
    const scores = answers as number[];
    const total = scores.reduce((sum, value) => sum + value, 0);
    const lowestScore = Math.min(...scores);
    const attentionAreas = questions
      .filter((_, index) => scores[index] === lowestScore)
      .map((item) => item.pillar);

    return { percentage: Math.round((total / (questions.length * 4)) * 100), attentionAreas };
  }, [answers, allAnswered]);

  const whatsappMessage = [
    "Olá! Fiz o Pré-Diagnóstico Empresarial 360° no site A Marca É Você® Business.",
    name.trim() ? "Meu nome: " + name.trim() + "." : "",
    company.trim() ? "Empresa: " + company.trim() + "." : "",
    result ? "Área(s) que mais merecem atenção: " + result.attentionAreas.join("; ") + "." : "",
    "Gostaria de conversar sobre os resultados e entender os próximos passos para minha empresa.",
  ]
    .filter(Boolean)
    .join("\n");

  const whatsappUrl =
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(whatsappMessage);

  function selectAnswer(value: number) {
    setAnswers((previous) => previous.map((answer, index) => (index === step ? value : answer)));
  }

  function restart() {
    setAnswers(Array(questions.length).fill(null));
    setStep(0);
    setName("");
    setCompany("");
  }

  return (
    <main className="min-h-screen bg-[#FFFBF8] text-[#3C2430]">
      <section className="bg-[#70283F] px-5 py-12 text-white md:py-16">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#F6E5C6] underline-offset-4 hover:underline">
            <ArrowLeft size={17} aria-hidden="true" /> Voltar ao site
          </Link>
          <p className="mt-9 text-xs font-semibold uppercase tracking-[0.2em] text-[#E8C37A]">
            A Marca É Você® Business
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            Raio-X Empresarial 360°
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
            Descubra quais áreas da sua empresa merecem mais atenção para crescer com organização, liderança e resultados.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#E8C37A]/60 px-4 py-2 text-sm text-[#F8E7C9]">
            <CheckCircle2 size={17} aria-hidden="true" /> Pré-diagnóstico gratuito • aproximadamente 2 minutos
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 md:py-14" aria-label="Pré-diagnóstico empresarial gratuito">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#E8D8D8] bg-white p-6 shadow-[0_14px_45px_rgba(112,40,63,0.08)] md:p-10">
          {!finished ? (
            <>
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="font-semibold text-[#70283F]">Avaliação inicial gratuita</span>
                <span className="text-[#725E67]">Pergunta {step + 1} de {questions.length}</span>
              </div>
              <div className="mt-4 flex gap-2" aria-hidden="true">
                {questions.map((question, index) => (
                  <span
                    key={question.pillar}
                    className={"h-2 flex-1 rounded-full " + (index <= step ? "bg-[#B58A44]" : "bg-[#F1E7E7]")}
                  />
                ))}
              </div>
              <p className="mt-10 text-xs font-bold uppercase tracking-[0.16em] text-[#95576B]">
                {questions[step].pillar}
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-snug md:text-3xl" id="question-heading">
                {questions[step].question}
              </h2>
              <fieldset className="mt-7 space-y-3" aria-labelledby="question-heading">
                <legend className="sr-only">Escolha uma resposta</legend>
                {choices.map((choice, value) => {
                  const selected = answers[step] === value;
                  return (
                    <label
                      key={choice}
                      className={
                        "flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors " +
                        (selected
                          ? "border-[#70283F] bg-[#F8EBEF] text-[#70283F]"
                          : "border-[#EADFE1] hover:border-[#B58A44]")
                      }
                    >
                      <input
                        type="radio"
                        name={"question-" + step}
                        value={value}
                        checked={selected}
                        onChange={() => selectAnswer(value)}
                        className="h-4 w-4 accent-[#70283F]"
                      />
                      <span className="text-sm font-medium md:text-base">{choice}</span>
                    </label>
                  );
                })}
              </fieldset>
              <div className="mt-9 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep((current) => Math.max(0, current - 1))}
                  disabled={step === 0}
                  className="rounded-xl border border-[#DDC8CF] px-5 py-3 font-semibold text-[#70283F] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Voltar
                </button>
                <button
                  type="button"
                  disabled={answers[step] === null}
                  onClick={() => setStep((current) => Math.min(questions.length, current + 1))}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#70283F] px-5 py-3 font-semibold text-white transition hover:bg-[#582034] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {step === questions.length - 1 ? "Ver meu resultado" : "Próxima pergunta"}
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>
            </>
          ) : result ? (
            <div aria-live="polite">
              <div className="flex items-center gap-2 text-[#70283F]">
                <CheckCircle2 size={23} aria-hidden="true" />
                <span className="font-bold">Pré-diagnóstico concluído</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold md:text-3xl">Seu resultado preliminar</h2>
              <div className="mt-6 rounded-2xl bg-[#F9EFF1] p-6">
                <p className="text-sm font-semibold text-[#765762]">Indicador inicial das cinco respostas</p>
                <p className="mt-2 text-5xl font-bold text-[#70283F]">{result.percentage}%</p>
                <p className="mt-3 text-sm leading-relaxed text-[#5D4851]">
                  Esse percentual é apenas um indicador simplificado, não uma nota definitiva sobre a saúde da empresa.
                </p>
              </div>
              <div className="mt-6 rounded-2xl border border-[#E6D0A6] p-6">
                <h3 className="text-lg font-bold text-[#70283F]">
                  {result.attentionAreas.length === 1
                    ? "Área que merece atenção inicial"
                    : "Áreas que merecem atenção inicial"}
                </h3>
                <ul className="mt-3 space-y-2">
                  {result.attentionAreas.map((area) => (
                    <li key={area} className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#B58A44]" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-[#68545D]">
                  As respostas mostram uma percepção inicial. Para entender causas, impactos e prioridades,
                  é necessária uma avaliação empresarial aprofundada.
                </p>
              </div>
              <div className="mt-9">
                <h3 className="text-xl font-bold">Quer conversar sobre os resultados da sua empresa?</h3>
                <p className="mt-2 leading-relaxed text-[#68545D]">
                  Converse diretamente com a especialista sobre os próximos passos. A conversa inicial é sem compromisso;
                  o Raio-X Aprofundado é um serviço contratado separadamente.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <label className="text-sm font-semibold text-[#70283F]">
                    Seu nome <span className="font-normal text-[#816D75]">(opcional)</span>
                    <input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      maxLength={100}
                      autoComplete="name"
                      className="mt-2 w-full rounded-xl border border-[#DDC8CF] bg-white px-4 py-3 font-normal text-[#3C2430] outline-offset-2 focus:outline-[#70283F]"
                      placeholder="Como podemos chamar você?"
                    />
                  </label>
                  <label className="text-sm font-semibold text-[#70283F]">
                    Nome da empresa <span className="font-normal text-[#816D75]">(opcional)</span>
                    <input
                      value={company}
                      onChange={(event) => setCompany(event.target.value)}
                      maxLength={120}
                      className="mt-2 w-full rounded-xl border border-[#DDC8CF] bg-white px-4 py-3 font-normal text-[#3C2430] outline-offset-2 focus:outline-[#70283F]"
                      placeholder="Nome do seu negócio"
                    />
                  </label>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#70283F] px-5 py-4 text-center font-bold text-white transition hover:bg-[#582034]"
                >
                  <MessageCircle size={20} aria-hidden="true" /> Conversar pelo WhatsApp
                </a>
                <p className="mt-3 text-xs leading-relaxed text-[#78656E]">
                  Ao clicar, você abrirá o WhatsApp com uma mensagem contendo as áreas identificadas e,
                  se informados, seu nome e empresa. O envio da mensagem depende da sua confirmação no WhatsApp.
                  Não armazenamos suas respostas em um cadastro neste pré-diagnóstico.
                </p>
              </div>
              <button
                type="button"
                onClick={restart}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#70283F] underline underline-offset-4"
              >
                <RotateCcw size={16} aria-hidden="true" /> Refazer avaliação
              </button>
            </div>
          ) : null}
        </div>
        <div className="mx-auto mt-7 flex max-w-3xl items-start gap-3 rounded-xl bg-white/80 px-4 py-4 text-sm leading-relaxed text-[#6B5860]">
          <ShieldCheck className="mt-0.5 shrink-0 text-[#8B6B37]" size={20} aria-hidden="true" />
          <p>
            Suas respostas são usadas somente para apresentar este resultado inicial na página.
            O pré-diagnóstico não substitui a análise presencial e estratégica do Raio-X Empresarial 360° Aprofundado.
          </p>
        </div>
      </section>
    </main>
  );
}
