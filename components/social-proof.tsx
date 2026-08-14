import { Reveal } from "@/components/reveal";

const comments = [
  {
    quote: "Simplesmente maravilhoso, aconchegante com ótimo atendimento.",
    author: "@michelyesteticaebemestar",
  },
  {
    quote: "Que lindos! Amei o resultado.",
    author: "@diandraminatti",
  },
  {
    quote: "Que perfeitos, ficaram demais.",
    author: "@angesilva_04",
  },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SocialProof() {
  return (
    <section id="instagram" className="bg-secondary py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.4em] text-muted-foreground uppercase">
            O que dizem no Instagram
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-5xl">
            Quem já levou verde pra casa
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-4 text-sm text-muted-foreground">
            A Flora Garden ainda não tem avaliações no Google — mas tem{" "}
            <span className="font-medium text-foreground">2.369 seguidores</span> acompanhando
            cada arranjo no Instagram.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 px-6 sm:grid-cols-3">
        {comments.map((c, i) => (
          <Reveal key={c.author} delay={0.1 + i * 0.08}>
            <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-8 text-center">
              <InstagramIcon className="size-5 text-primary" />
              <p className="mt-4 font-display text-lg text-foreground italic">
                “{c.quote}”
              </p>
              <p className="mt-4 text-xs tracking-[0.1em] text-muted-foreground uppercase">
                {c.author}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="mt-12 flex justify-center">
          <a
            href="https://www.instagram.com/flora_garden_pb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium tracking-wide text-primary-foreground uppercase transition-transform hover:scale-[1.03]"
          >
            <InstagramIcon className="size-4" />
            Seguir no Instagram
          </a>
        </div>
      </Reveal>
    </section>
  );
}
