import { TreePine, Scissors, Cog, Sparkles, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    icon: TreePine,
    title: "Seleção da Madeira",
    desc: "Escolha e preparação da matéria-prima, com avaliação de umidade, densidade e ausência de defeitos.",
  },
  {
    n: "02",
    icon: Scissors,
    title: "Corte e Dimensionamento",
    desc: "Preparação das peças nas dimensões exatas de cada modelo, garantindo aproveitamento e repetibilidade.",
  },
  {
    n: "03",
    icon: Cog,
    title: "Torneamento e Modelagem",
    desc: "Transformação da madeira no perfil específico do cabo em tornos calibrados por gabarito.",
  },
  {
    n: "04",
    icon: Sparkles,
    title: "Lixamento e Acabamento",
    desc: "Refinamento da superfície, selagem e padronização visual e dimensional de todo o lote.",
  },
  {
    n: "05",
    icon: ShieldCheck,
    title: "Controle de Qualidade",
    desc: "Inspeção por amostragem, conferência de medidas e embalagem para envio seguro.",
  },
];

export function Process() {
  return (
    <section id="processo" className="relative border-y border-border bg-card/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.24em] text-primary">
            Processo de fabricação
          </span>
          <h2 className="mt-4 text-3xl font-semibold lg:text-5xl">Da madeira ao produto final</h2>
          <p className="mt-4 text-muted-foreground">
            Cinco etapas controladas que garantem padronização de lote a lote, mesmo em grandes
            volumes.
          </p>
        </Reveal>

        <ol className="relative mt-16 space-y-px">
          <span
            aria-hidden
            className="absolute left-[27px] top-4 hidden h-[calc(100%-2rem)] w-px bg-border lg:block"
          />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 80}>
              <div className="group relative flex flex-col gap-5 rounded-md border border-transparent px-0 py-7 transition-colors duration-500 hover:border-border hover:bg-card lg:flex-row lg:items-center lg:gap-10 lg:px-6">
                <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-sm border border-border bg-background text-primary transition-all duration-500 group-hover:border-primary group-hover:shadow-[var(--shadow-ember)]">
                  <s.icon className="size-6" />
                </span>
                <span className="font-display text-3xl font-semibold text-muted-foreground/40 transition-colors duration-500 group-hover:text-primary lg:w-20">
                  {s.n}
                </span>
                <div className="lg:flex-1">
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
