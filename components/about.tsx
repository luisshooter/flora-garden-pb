import { Reveal } from "@/components/reveal";

const stats = [
  { value: "2.369", label: "seguidores no Instagram" },
  { value: "121", label: "arranjos e novidades no feed" },
  { value: "6", label: "dias por semana de loja aberta" },
];

export function About() {
  return (
    <section id="sobre" className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.4em] text-muted-foreground uppercase">
            Nossa história
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-5xl">
            Um pequeno jardim no meio da cidade
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
            A Flora Garden nasceu da vontade de acreditar que toda casa fica melhor com
            verde por perto. Hoje somos floricultura, viveiro e estúdio de paisagismo em
            Pato Branco — e continuamos escolhendo cada flor à mão.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.18}>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border px-6 pt-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl text-primary md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-[0.7rem] tracking-[0.15em] text-muted-foreground uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
