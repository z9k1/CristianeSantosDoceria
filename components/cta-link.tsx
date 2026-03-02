"use client";

import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type CtaLinkProps = {
  label: string;
  message?: string;
  href?: string;
  eventName?: string;
  className?: string;
  external?: boolean;
};

export function CtaLink({
  label,
  message,
  href,
  eventName = "click_external_link",
  className = "",
  external = true
}: CtaLinkProps) {
  const finalHref = message ? buildWhatsAppUrl(message) : href ?? "#";

  const handleClick = () => {
    trackEvent(eventName, { target: label, href: finalHref });
  };

  return (
    <a
      href={finalHref}
      onClick={handleClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${className}`}
    >
      {label}
    </a>
  );
}
