import Image from "next/image";

import { LeafIcon } from "@/components/leaf-icon";
import { Reveal } from "@/components/reveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const heroWhatsappUrl = buildWhatsAppUrl(
  "Olá! Vim pelo site da Flora Garden e gostaria de um orçamento."
);

export function Hero() {
  return (
    <section id="top" className="relative flex h-screen items-center overflow-hidden">
      <Image
        src="/images/hero-orchids.png"
        alt="Estufa da Flora Garden com orquídeas e plantas"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-cream/75 to-cream/90" />

      <LeafIcon className="leaf-float absolute top-1/3 left-8 hidden h-10 w-10 text-primary/30 sm:block md:left-16" />
      <LeafIcon className="leaf-float-delay absolute right-8 bottom-1/4 hidden h-8 w-8 rotate-45 text-primary/25 sm:block md:right-16" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <Reveal>
          <Image
            src="/images/logo.png"
            alt="Logotipo Flora Garden"
            width={220}
            height={220}
            priority
            className="mx-auto h-28 w-28 rounded-full object-cover shadow-lg shadow-black/10 sm:h-32 sm:w-32"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-sm font-medium tracking-[0.4em] text-primary/80 uppercase">
            Floricultura e Paisagismo
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <h1 className="mt-6 font-display text-4xl leading-[1.15] text-foreground md:text-6xl">
            Flores que dizem o que <em className="text-primary italic">as palavras</em> não
            alcançam
          </h1>
        </Reveal>
        <Reveal delay={0.26}>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
            Buquês feitos à mão, plantas selecionadas e jardins projetados com calma — do
            primeiro desenho ao último regar.
          </p>
        </Reveal>
        <Reveal delay={0.34}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={heroWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium tracking-wide text-primary-foreground uppercase transition-transform hover:scale-[1.03]"
            >
              <svg viewBox="0 0 24 24" className="size-4 fill-primary-foreground">
                <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m0 1.67c2.2 0 4.27.86 5.82 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.55-3.7 8.25-8.25 8.25a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.18 8.18 0 0 1-1.26-4.38c0-4.55 3.7-8.25 8.26-8.25m-4.53 4.7c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.03s.87 2.36.99 2.52c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.35-1.68-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42h-.47Z" />
              </svg>
              Pedir pelo WhatsApp
            </a>
            <a
              href="#local"
              className="flex items-center gap-2 rounded-full border border-foreground/25 px-7 py-3 text-sm font-medium tracking-wide text-foreground uppercase transition-colors hover:bg-foreground/5"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="size-4"
              >
                <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              Visitar a loja
            </a>
          </div>
        </Reveal>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para conhecer a Flora Garden"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-foreground/60 transition-colors hover:text-primary"
      >
        <span className="text-[0.65rem] tracking-[0.3em] uppercase">Role para ver mais</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="size-5 animate-bounce"
        >
          <path d="M12 4v15M12 19l-6-6M12 19l6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
