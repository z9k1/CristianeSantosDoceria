import Link from "next/link";
import { brandSettings } from "@/lib/site-data";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/cardapio", label: "Cardápio" },
  { href: "/eventos", label: "Eventos & Casamentos" }
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-rose-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold tracking-wide text-cocoa-700 sm:text-base">
          {brandSettings.businessName}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-cocoa-700 hover:text-cocoa-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={buildWhatsAppUrl("Olá! Quero fazer um pedido.")}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-cocoa-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cocoa-800"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
