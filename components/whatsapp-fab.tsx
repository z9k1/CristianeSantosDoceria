"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { brandSettings } from "@/lib/site-data";

const CART_STATE_EVENT = "csg:cart-state";
const CART_TOAST_EVENT = "csg:cart-toast";
const DEFAULT_MESSAGE = "Olá! Vim pelo site e gostaria de fazer um pedido.";
const HOME_SCROLL_THRESHOLD_PX = 240;

export function WhatsAppFab() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartToastVisible, setIsCartToastVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const href = `https://wa.me/${brandSettings.whatsappNumber}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  const isEventosPage =
    pathname === "/eventos" ||
    pathname === "/eventos/" ||
    (basePath !== "" &&
      (pathname === `${basePath}/eventos` || pathname === `${basePath}/eventos/`));

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleCartState = (event: Event) => {
      const detail = (event as CustomEvent<{ isOpen: boolean }>).detail;
      setIsCartOpen(detail?.isOpen ?? false);
    };
    const handleCartToast = (event: Event) => {
      const detail = (event as CustomEvent<{ visible: boolean }>).detail;
      setIsCartToastVisible(detail?.visible ?? false);
    };
    window.addEventListener(CART_STATE_EVENT, handleCartState);
    window.addEventListener(CART_TOAST_EVENT, handleCartToast);
    return () => {
      window.removeEventListener(CART_STATE_EVENT, handleCartState);
      window.removeEventListener(CART_TOAST_EVENT, handleCartToast);
    };
  }, []);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > HOME_SCROLL_THRESHOLD_PX);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (isCartOpen) return null;
  if (isCartToastVisible) return null;
  if (isEventosPage) return null;
  if (!isScrolled) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-20 right-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-cocoa-700 text-white shadow-lg transition hover:bg-cocoa-800 focus:outline-none focus:ring-2 focus:ring-cocoa-700/30"
      aria-label="Falar no WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 shrink-0"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M27.13 4.87A15.03 15.03 0 0 0 16.45.5C8.07.5 1.25 7.32 1.25 15.7c0 2.68.7 5.3 2.02 7.61L1 31.5l8.39-2.2a15.2 15.2 0 0 0 7.05 1.78h.01c8.37 0 15.2-6.82 15.2-15.2 0-4.06-1.58-7.88-4.52-10.81ZM16.46 28.5h-.01a12.6 12.6 0 0 1-6.42-1.76l-.46-.27-4.97 1.3 1.33-4.84-.3-.49A12.6 12.6 0 0 1 3.7 15.7c0-7.05 5.72-12.77 12.76-12.77 3.4 0 6.59 1.32 8.98 3.72a12.62 12.62 0 0 1 3.72 8.98c0 7.05-5.72 12.77-12.7 12.77Zm7.01-9.57c-.38-.19-2.24-1.1-2.59-1.22-.34-.13-.59-.19-.84.19-.25.38-.97 1.22-1.18 1.47-.22.25-.43.28-.81.09-.38-.19-1.59-.58-3.04-1.85-1.12-1-1.88-2.24-2.1-2.61-.22-.38-.02-.58.16-.77.16-.15.38-.4.56-.59.19-.22.25-.37.38-.62.13-.25.06-.47-.03-.66-.1-.19-.84-2.03-1.16-2.78-.3-.72-.62-.62-.84-.63h-.72c-.25 0-.66.09-1 .47-.34.37-1.31 1.28-1.31 3.12 0 1.84 1.34 3.62 1.53 3.87.19.25 2.62 4 6.34 5.6.89.38 1.59.61 2.13.78.89.28 1.69.24 2.33.14.71-.11 2.24-.91 2.56-1.79.31-.88.31-1.63.22-1.79-.09-.16-.34-.25-.72-.44Z" />
      </svg>
    </a>
  );
}
