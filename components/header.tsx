"use client";

import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";
import { brandSettings } from "@/lib/site-data";
import { assetPath } from "@/lib/asset-path";

const CART_STATE_EVENT = "csg:cart-state";
const CART_TOGGLE_EVENT = "csg:toggle-cart";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/cardapio", label: "Cardapio" },
  { href: "/eventos", label: "Eventos e Casamentos" }
] as const;

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [badgeCount, setBadgeCount] = useState(0);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleCartState = (event: Event) => {
      const detail = (event as CustomEvent<{ isOpen: boolean; badgeCount: number }>).detail;
      setIsCartOpen(detail?.isOpen ?? false);
      setBadgeCount(detail?.badgeCount ?? 0);
    };
    window.addEventListener(CART_STATE_EVENT, handleCartState);
    return () => window.removeEventListener(CART_STATE_EVENT, handleCartState);
  }, []);

  const pathname = usePathname();
  const router = useRouter();
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  const cardapioPath = "/cardapio";
  const normalizedPath = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const isCardapioPath = normalizedPath === cardapioPath || normalizedPath === `${basePath}/cardapio`;
  const isActiveNavItem = (href: string) => normalizedPath === href || normalizedPath === `${basePath}${href}`;

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [pathname]);

  const toggleCart = () => {
    if (typeof window === "undefined") return;
    if (isCardapioPath) {
      window.dispatchEvent(new Event(CART_TOGGLE_EVENT));
      return;
    }
    router.push("/cardapio?openCart=1" as Route);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-rose-100 bg-white/90 backdrop-blur">
      <div className="flex w-full items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-wide text-cocoa-700 sm:text-base">
          <Image
            src={assetPath("/gallery/logo.jpg")}
            alt="Logo Cristiane Santos Gastronomia"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span>{brandSettings.businessName}</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  isActiveNavItem(item.href) ? "text-cocoa-900" : "text-cocoa-700 hover:text-cocoa-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label={isMobileNavOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileNavOpen}
            onClick={() => setIsMobileNavOpen((prev) => !prev)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-rose-100 bg-white text-cocoa-800 shadow-sm transition hover:border-rose-200 hover:bg-rose-50 md:hidden"
          >
            {isMobileNavOpen ? <X size={16} strokeWidth={2.25} /> : <Menu size={16} strokeWidth={2.25} />}
          </button>

          <button
            type="button"
            aria-label={isCartOpen ? "Fechar carrinho" : "Abrir carrinho"}
            onClick={toggleCart}
            className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cocoa-800 to-cocoa-900 text-white shadow-lg transition md:hover:from-cocoa-900 md:hover:to-cocoa-950"
          >
            {isCartOpen ? <X size={14} strokeWidth={2.25} /> : <ShoppingCart size={14} strokeWidth={2.25} />}
            {badgeCount > 0 ? (
              <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-rose-500 text-[7px] font-bold leading-none text-white">
                {badgeCount}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      {isMobileNavOpen ? (
        <div className="border-t border-rose-100 bg-white/95 px-4 py-4 shadow-[0_18px_40px_rgba(93,55,44,0.08)] md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  isActiveNavItem(item.href)
                    ? "border-cocoa-900 bg-cocoa-900 text-white"
                    : "border-rose-100 bg-white text-cocoa-800 hover:border-rose-200 hover:bg-rose-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
