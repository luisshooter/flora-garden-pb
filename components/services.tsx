import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const services = [
  {
    title: "Buquês & Arranjos",
    description:
      "Composições artesanais feitas no dia, com flores frescas escolhidas uma a uma.",
    image: "/images/service-buques.png",
    message: "Olá! Gostaria de encomendar um buquê na Flora Garden.",
  },
  {
    title: "Plantas & Vasos",
    description:
      "Espécies de interior e externas, vasos e substratos para deixar qualquer ambiente mais bonito.",
    image: "/images/service-plantas.png",
    message: "Olá! Gostaria de saber quais plantas vocês têm disponíveis.",
  },
  {
    title: "Paisagismo",
    description:
      "Projeto, execução e manutenção de jardins residenciais e corporativos.",
    image: "/images/service-paisagismo.png",
    message: "Olá! Quero um orçamento de paisagismo com a Flora Garden.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.4em] text-muted-foreground uppercase">
            O que fazemos
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-5xl">
            Flores, plantas e jardins
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-8 px-6 sm:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={0.1 + i * 0.1}>
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
              <div className="arch-card relative mx-4 mt-4 aspect-[4/5] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 640px) 33vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col items-center px-6 py-6 text-center">
                <h3 className="font-display text-xl text-foreground">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href={buildWhatsAppUrl(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 border-b border-primary/40 pb-0.5 text-xs font-medium tracking-[0.15em] text-primary uppercase transition-colors hover:border-primary"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
