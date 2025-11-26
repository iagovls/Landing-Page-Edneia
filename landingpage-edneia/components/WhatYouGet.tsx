"use client";
import Image from "next/image";
import { FaChalkboardTeacher, FaYoutube, FaBook } from "react-icons/fa";
import Dash from "./Dash";

function boldify(text: string) {
  return text.replace(/\*(.*?)\*/g, '<span class="font-bold">$1</span>');
}

export default function WhatYouGet() {
  return (
    <section className="px-6 py-16 bg-gradient-to-r from-red-900 to-red-950">
      <div className=" mx-auto grid gap-8 items-start xl:w-[1100px]">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            O que você vai receber
          </h1>
          <h2
            className="text-white text-center font-light"
            dangerouslySetInnerHTML={{
              __html: boldify(
                "Você terá acesso a *conteúdos valiosos e ferramentas práticas* que vão ajudar a organizar sua vida financeira e aumentar o faturamento do seu negócio de forma progressiva e sustentável."
              ),
            }}
          />
          <div className="relative flex bg-[url('/montain.jpg')] bg-cover bg-center rounded-2xl mt-10">
            
            <div className="relative grid grid-cols-2 gap-4 p-4 w-[calc(100%-384px)]">
              <div className="flex flex-col text-xs items-start gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-4 text-red-900">
                <div className="flex flex-col items-start gap-2 text-base">
                  <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full ">
                    <FaChalkboardTeacher className="w-10 h-10" />
                  </div>
                  <span
                    dangerouslySetInnerHTML={{ __html: boldify("*Aula 1*") }}
                    className="text-red-900"
                  />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: boldify("*Metas e Objetivos:*"),
                    }}
                    className="text-red-900 -mt-3"
                  />
                </div>
                <div className="bg-white rounded-lg p-2">
                <p className="font-light mt-1">
                  Defina e Alcance o Que Realmente Importa
                </p>
                <p
                  className="font-light mt-2"
                  dangerouslySetInnerHTML={{
                    __html: boldify(
                      "Aprenda a *definir metas claras* para seu negócio, alinhando seus objetivos financeiros e profissionais."
                    ),
                  }}
                />
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-4 text-red-900 text-xs">
                <div className="flex flex-col items-start gap-2 text-base">
                  <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full ">
                    <FaChalkboardTeacher className="w-10 h-10" />
                  </div>
                  <span
                    dangerouslySetInnerHTML={{ __html: boldify("*Aula 2*") }}
                    className="text-red-900"
                  />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: boldify("*Plano de ação:*"),
                    }}
                    className="text-red-900 -mt-3"
                  />
                </div>
                <div className="bg-white rounded-lg p-2">
                <p className="font-light mt-1">
                  Organize Seus Passos e Aumente o Faturamento
                </p>
                <p
                  className="font-light mt-2"
                  dangerouslySetInnerHTML={{
                    __html: boldify(
                      "Monte um *plano de ação claro e eficiente* para executar suas metas de forma estruturada."
                    ),
                  }}
                />
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-4 text-red-900 text-xs">
                <div className="flex flex-col items-start gap-2 text-base">
                  <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full ">
                    <FaYoutube className="w-10 h-10" />
                  </div>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: boldify("*Aula Bônus (exclusiva):*"),
                    }}
                    className="text-red-900"
                  />
                </div>
                <div className="bg-white rounded-lg p-2">
                <p className="font-light mt-1">
                  9 Segredos Para Aumentar o Faturamento
                </p>
                <p
                  className="font-light mt-2"
                  dangerouslySetInnerHTML={{
                    __html: boldify(
                      "Descubra técnicas práticas para *aumentar seu faturamento de forma sustentável*, com estratégias que você pode implementar imediatamente no seu negócio."
                    ),
                  }}
                />

                </div>
              </div>
              <div className="flex flex-col items-start gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-4 text-red-900 text-xs">
                <div className="flex flex-col items-start gap-2 text-base">
                  <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full ">
                    <FaBook className="w-10 h-10" />
                  </div>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: boldify("*Ferramentas Exclusivas:*"),
                    }}
                    className="text-red-900"
                  />
                </div>
                
                <div className="bg-white rounded-lg p-2">
             <p className="font-light mt-1">
                  9 Segredos Para Aumentar o Faturamento
                </p>
                <p
                  className="font-light mt-2"
                  dangerouslySetInnerHTML={{
                    __html: boldify(
                      "Receba *ferramentas e modelos* que vão ajudar a *organizar seus custos fixos e variáveis*, além de otimizar o processo de *planejamento e execução*."
                    ),
                  }}
                />
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex md:justify-end ">
              <Image
                src="/edneia4.png"
                alt="Ednéia"
                width={480}
                height={320}
                className="w-96"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <Dash />
    </section>
  );
}
