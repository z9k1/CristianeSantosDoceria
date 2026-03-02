import Link from "next/link";
import { brandSettings } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-rose-100 bg-rose-50/60">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-semibold text-cocoa-800">{brandSettings.businessName}</p>
          <p className="mt-2 text-sm text-cocoa-700">{brandSettings.summary}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-cocoa-700">Contato</p>
          <ul className="mt-2 space-y-1 text-sm text-cocoa-700">
            <li>{brandSettings.phoneDisplay}</li>
            <li>{brandSettings.address}</li>
            <li>Cobertura: {brandSettings.coverage}</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-cocoa-700">Links</p>
          <div className="mt-2 flex flex-wrap gap-3 text-sm text-cocoa-700">
            <a href={brandSettings.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-cocoa-900">
              Instagram
            </a>
            <a href={brandSettings.ifoodUrl} target="_blank" rel="noreferrer" className="hover:text-cocoa-900">
              Pedido rapido
            </a>
            <a href={brandSettings.menuPdfUrl} target="_blank" rel="noreferrer" className="hover:text-cocoa-900">
              Catalogo PDF
            </a>
            <Link href="/politica-de-privacidade" className="hover:text-cocoa-900">
              Politica de privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
