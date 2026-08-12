import { MessageCircle } from "lucide-react";

import { BRAND } from "@/lib/site-data";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${BRAND.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Écrire sur WhatsApp"
      className="btn-gradient fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full shadow-[var(--shadow-ember)] transition-transform hover:-translate-y-0.5 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
