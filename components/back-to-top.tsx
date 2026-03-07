"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 240);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handleCartState = (event: Event) => {
      const detail = (event as CustomEvent<{ isOpen: boolean }>).detail;
      setIsCartOpen(detail?.isOpen ?? false);
    };
    window.addEventListener("csg:cart-state", handleCartState);
    return () => window.removeEventListener("csg:cart-state", handleCartState);
  }, []);

  if (!visible || isCartOpen) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-cocoa-700 text-white shadow-lg transition hover:bg-cocoa-800 focus:outline-none focus:ring-2 focus:ring-cocoa-700/30"
      aria-label="Voltar ao topo"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
