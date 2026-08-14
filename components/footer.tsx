import Image from "next/image";

import { buildWhatsAppUrl } from "@/lib/whatsapp";

const footerWhatsappUrl = buildWhatsAppUrl(
  "Olá! Vim pelo site da Flora Garden e gostaria de um orçamento."
);

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-4">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.99.36 1.96.7 2.89a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.19-1.27a2 2 0 0 1 2.11-.45c.93.34 1.9.57 2.89.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-4">
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-background py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <Image
          src="/images/logo.png"
          alt="Flora Garden"
          width={72}
          height={72}
          className="h-16 w-16 rounded-full object-cover"
        />
        <p className="mt-6 max-w-sm text-sm text-muted-foreground">
          Flora Garden — Floricultura e Paisagismo em Pato Branco. Buquês, plantas e
          projetos sob medida.
        </p>
        <div className="mt-6 flex items-center gap-5 text-foreground">
          <a
            href={footerWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="transition-colors hover:text-primary"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.instagram.com/flora_garden_pb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-colors hover:text-primary"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Flora+Garden+Floricultura&query_place_id=ChIJLYLluQ9T5ZQRWaHKV8MbDyw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Localização"
            className="transition-colors hover:text-primary"
          >
            <PinIcon />
          </a>
        </div>
        <p className="mt-8 text-xs tracking-[0.1em] text-muted-foreground uppercase">
          © 2026 Flora Garden
        </p>
      </div>
    </footer>
  );
}
