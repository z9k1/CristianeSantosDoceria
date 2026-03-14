"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CtaLink } from "@/components/cta-link";
import { Gallery } from "@/components/gallery";
import { Reveal } from "@/components/reveal";
import { assetPath } from "@/lib/asset-path";

const HERO_HEADLINE = "Macarons, bolos e doces finos para celebrar com presenca e sabor.";

const TRUST_HIGHLIGHTS = [
  {
    title: "Pedido pelo WhatsApp",
    description: "Escolha no site e envie quando for melhor para voce. A loja confirma dentro do horario de atendimento."
  },
  {
    title: "Retirada e entrega",
    description: "Retirada em Londrina e entrega mediante disponibilidade da regiao e confirmacao da loja."
  },
  {
    title: "Personalizacao real",
    description: "Sabores, cores e combinacoes pensadas para presentes, festas e eventos especiais."
  }
] as const;

export default function HomePage() {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  const cardapioPath = `${basePath}/cardapio`;
  const eventosPath = `${basePath}/eventos`;

  return (
    <div>
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 lg:px-6 lg:py-14">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-rose-500">
            Cristiane Santos Gastronomia
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="section-surface grid items-center gap-8 overflow-hidden px-5 py-6 sm:px-7 sm:py-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
            <div className="order-2 flex flex-col items-start text-left lg:order-1">
              <div className="inline-flex items-center rounded-full border border-rose-200 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cocoa-700">
                Pedido rapido, presentes e eventos
              </div>
              <h1 className="mt-5 max-w-[14ch] font-serifDisplay text-4xl leading-[1.02] text-cocoa-900 sm:max-w-[16ch] sm:text-5xl lg:text-[3.6rem]">
                {HERO_HEADLINE}
              </h1>
              <p className="mt-5 max-w-2xl text-base text-cocoa-700 sm:text-lg">
                Escolha no cardapio, monte seu pedido e finalize pelo WhatsApp com mais praticidade.
              </p>
              <p className="mt-2 max-w-2xl text-sm text-cocoa-600 sm:text-base">
                Macarons artesanais, kits festa, doces para presentear e encomendas personalizadas para momentos
                especiais.
              </p>

              <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <CtaLink
                  label="FAÇA SEU PEDIDO"
                  href={cardapioPath}
                  eventName="click_ifood"
                  className="w-full min-w-[17rem] px-8 py-3 shadow-xl !from-rose-500 !to-rose-700 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-2xl hover:!from-rose-700 hover:!to-rose-900 sm:w-auto"
                  external={false}
                />
                <Link
                  href={eventosPath}
                  className="inline-flex h-14 items-center justify-center rounded-lg border border-rose-200 bg-white px-6 text-base font-semibold uppercase tracking-[0.14em] text-cocoa-800 shadow-sm transition hover:border-rose-300 hover:bg-rose-50"
                >
                  Briefing de eventos
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative w-full overflow-hidden rounded-[1.75rem] shadow-panel">
                <div
                  className={`relative aspect-[4/5] w-full transition-opacity duration-700 ease-out sm:aspect-[16/11] lg:aspect-[4/5] ${
                    heroImageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={assetPath("/gallery/imagembonitaparainicio.jpeg")}
                    alt="Imagem de destaque da confeitaria"
                    fill
                    priority
                    className="object-cover"
                    onLoadingComplete={() => setHeroImageLoaded(true)}
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 640px, 540px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cocoa-900/20 via-transparent to-rose-50/10" />
                </div>
                <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-white/82 px-4 py-3 backdrop-blur-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rose-500">Mais pedidos</p>
                  <p className="mt-1 text-sm font-semibold text-cocoa-900">Macarons, kits festa e doces para presentear</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="grid gap-4 md:grid-cols-3">
            {TRUST_HIGHLIGHTS.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-rose-100/80 bg-white/88 p-5 text-left shadow-[0_16px_34px_rgba(93,55,44,0.07)]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rose-500">Confianca</p>
                <h2 className="mt-2 font-serifDisplay text-2xl text-cocoa-900">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-cocoa-700">{item.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container-pad pb-10">
        <Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-lg border border-rose-100 bg-white/85 p-6 text-left shadow-panel">
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-cocoa-800">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8L12 3z" />
                </svg>
              </div>
              <h3 className="font-serifDisplay text-2xl text-cocoa-900">Ingredientes premium</h3>
              <p className="mt-2 text-sm text-cocoa-700">
                Selecionamos materias-primas nobres para garantir sabor marcante, textura e acabamento impecavel.
              </p>
            </article>
            <article className="rounded-lg border border-rose-100 bg-white/85 p-6 text-left shadow-panel">
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-cocoa-800">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 20h16" />
                  <path d="M7 20V8l5-4 5 4v12" />
                </svg>
              </div>
              <h3 className="font-serifDisplay text-2xl text-cocoa-900">Personalizacao para eventos</h3>
              <p className="mt-2 text-sm text-cocoa-700">
                Adaptamos sabores, cores e apresentacao ao estilo de cada celebracao para uma mesa exclusiva.
              </p>
            </article>
            <article className="rounded-lg border border-rose-100 bg-white/85 p-6 text-left shadow-panel">
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-cocoa-800">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 7h12" />
                  <path d="M8 7v10a4 4 0 0 0 8 0V7" />
                  <path d="M9 11h6" />
                </svg>
              </div>
              <h3 className="font-serifDisplay text-2xl text-cocoa-900">Producao artesanal</h3>
              <p className="mt-2 text-sm text-cocoa-700">
                Cada pedido e produzido em pequenos lotes com cuidado tecnico e atencao aos detalhes visuais.
              </p>
            </article>
          </div>
        </Reveal>
      </section>

      <Gallery />

      <section className="container-pad py-14 text-center">
        <Reveal>
          <h2 className="font-serifDisplay text-3xl text-cocoa-900">Veja o cardapio completo</h2>
          <p className="mt-3 text-sm text-cocoa-700">Uma entrada unica para encontrar opcoes, sabores e formatos de pedido.</p>
        </Reveal>
        <div className="mt-6 flex justify-center">
          <CtaLink label="Ver cardapio" href={cardapioPath} eventName="click_ifood" className="px-8 py-3" external={false} />
        </div>
      </section>
    </div>
  );
}
