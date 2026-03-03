import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cardápio",
  description: "Página em construção."
};

export default function CardapioPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-rose-50 px-4 text-center">
      <div>
        <p className="text-sm uppercase tracking-[0.4em] text-rose-400">Cardápio</p>
        <h1 className="mt-4 font-serifDisplay text-3xl text-cocoa-900">Em construção</h1>
        <p className="mt-3 text-sm text-cocoa-700">Aguarde próximas instruções.</p>
      </div>
    </div>
  );
}
