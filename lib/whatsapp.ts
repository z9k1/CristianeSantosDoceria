import { brandSettings } from "@/lib/site-data";

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${brandSettings.whatsappNumber}?text=${encoded}`;
}
