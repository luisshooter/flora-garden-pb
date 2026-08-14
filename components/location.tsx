import { Reveal } from "@/components/reveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const hours = [
  { label: "Segunda a sexta", value: "08h30 — 18h30" },
  { label: "Sábado", value: "08h30 — 14h00" },
  { label: "Domingo", value: "Fechado" },
];

const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Flora+Garden+Floricultura&query_place_id=ChIJLYLluQ9T5ZQRWaHKV8MbDyw";

const mapEmbedUrl =
  "https://www.google.com/maps?q=-26.2450048,-52.676643&z=17&output=embed";

export function Location() {
  return (
    <section id="local" className="bg-secondary py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.4em] text-muted-foreground uppercase">
            Onde estamos
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-5xl">
            Venha tomar um café entre as plantas
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="space-y-8 text-left">
            <div>
              <h3 className="font-display text-xl text-foreground">Endereço</h3>
              <p className="mt-1 text-muted-foreground">
                Av. Tupi, 4417 — Cristo Rei, Pato Branco — PR
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-foreground">Horários</h3>
              <ul className="mt-2 space-y-1">
                {hours.map((h) => (
                  <li key={h.label} className="flex justify-between gap-6 text-muted-foreground">
                    <span>{h.label}</span>
                    <span>{h.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-foreground/25 px-6 py-2.5 text-xs font-medium tracking-[0.15em] text-foreground uppercase transition-colors hover:bg-foreground/5"
              >
                Ver rota no Google Maps
              </a>
              <a
                href={buildWhatsAppUrl("Olá! Quero combinar uma visita à loja da Flora Garden.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-6 py-2.5 text-xs font-medium tracking-[0.15em] text-primary-foreground uppercase transition-transform hover:scale-[1.03]"
              >
                Combinar visita
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border">
            <iframe
              src={mapEmbedUrl}
              title="Mapa da Flora Garden"
              loading="lazy"
              className="h-full w-full grayscale-[15%]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
