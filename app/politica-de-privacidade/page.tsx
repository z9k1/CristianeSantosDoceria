import type { Metadata } from "next";
import { brandSettings } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Politica de Privacidade"
};

export default function PrivacyPage() {
  return (
    <div className="container-pad py-14">
      <article className="rounded-brand border border-rose-100 bg-white p-8 shadow-soft">
        <h1 className="font-serifBrand text-3xl text-cocoa-800">Politica de Privacidade</h1>
        <p className="mt-4 text-sm text-cocoa-700">
          Esta pagina explica como {brandSettings.businessName} coleta e utiliza dados enviados por formularios e
          interacoes no site.
        </p>
        <h2 className="mt-6 text-lg font-semibold text-cocoa-800">Dados coletados</h2>
        <p className="mt-2 text-sm text-cocoa-700">
          Nome, telefone e informacoes de evento enviadas voluntariamente para fins de contato comercial e
          orcamento.
        </p>
        <h2 className="mt-6 text-lg font-semibold text-cocoa-800">Finalidade</h2>
        <p className="mt-2 text-sm text-cocoa-700">
          Atendimento, elaboracao de proposta e acompanhamento de pedidos. Nao comercializamos dados pessoais.
        </p>
        <h2 className="mt-6 text-lg font-semibold text-cocoa-800">Contato</h2>
        <p className="mt-2 text-sm text-cocoa-700">
          Para solicitar alteracao ou exclusao de dados, entre em contato via WhatsApp: {brandSettings.phoneDisplay}.
        </p>
      </article>
    </div>
  );
}
