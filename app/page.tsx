"use client";

import { useEffect } from "react";
import { CtaLink } from "@/components/cta-link";
import { BackToTop } from "@/components/back-to-top";
import { Gallery } from "@/components/gallery";
import { Reveal } from "@/components/reveal";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div>
      <BackToTop />

      {/* Hero minimalista */}
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 text-center lg:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-rose-500">Cristiane Santos Gastronomia</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-serifDisplay text-4xl text-cocoa-900 leading-tight sm:text-5xl">
            Macarons artesanais para momentos marcantes
          </h1>
          <p className="mt-4 text-lg text-cocoa-700">
            Macarons personalizados para casamentos, eventos corporativos e datas especiais em Londrina-PR.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="flex justify-center">
            <CtaLink label="Ver cardápio" href="/cardapio" eventName="click_ifood" className="px-8 py-3" external={false} />
          </div>
        </Reveal>
      </section>

      {/* Especialidade em macarons */}
      <section className="container-pad pb-12">
        <div className="rounded-[1.5rem] bg-white/85 px-6 py-10 shadow-panel">
          <Reveal>
            <h2 className="font-serifDisplay text-3xl text-cocoa-900">Especialidade em macarons</h2>
            <p className="mt-3 text-sm text-cocoa-700">
              Personalização de cores, iniciais e logos com acabamento premium, harmonizando com a paleta do seu evento.
            </p>
            <p className="mt-2 text-sm text-cocoa-700">
              Produção artesanal diária, ingredientes selecionados e técnica refinada para entregas sob medida.
            </p>
          </Reveal>
        </div>
      </section>

      <Gallery />

      {/* CTA final minimal */}
      <section className="container-pad py-14 text-center">
        <Reveal>
          <h2 className="font-serifDisplay text-3xl text-cocoa-900">Veja o cardápio completo</h2>
          <p className="mt-3 text-sm text-cocoa-700">Ação única para conferir opções e sabores disponíveis.</p>
        </Reveal>
        <div className="mt-6 flex justify-center">
          <CtaLink label="Ver cardápio" href="/cardapio" eventName="click_ifood" className="px-8 py-3" external={false} />
        </div>
      </section>
    </div>
  );
}
