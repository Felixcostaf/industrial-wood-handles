import { Factory, Boxes, PencilRuler, Layers, ShieldCheck, Handshake } from "lucide-react";
import { Reveal } from "./Reveal";
import { useCountUp, useReveal } from "@/hooks/use-reveal";

const stats = [
  { value: 120, suffix: " mil", label: "Peças/mês de capacidade instalada" },
  { value: 24, suffix: "h", label: "Retorno médio para orçamentos" },
  { value: 18, suffix: "+", label: "Anos trabalhando com madeira" },
  { value: 100, suffix: "%", label: "Lotes com inspeção de qualidade" },
];

const pillars = [
  {
    icon: Factory,
    title: "Produção em escala",
    desc: "Capacidade para atender pedidos de diferentes volumes com prazo previsível.",
  },
  {
    icon: PencilRuler,
    title: "Modelos personalizados",
    desc: "Produção conforme desenho, referência ou necessidade específica do cliente.",
  },
  {
    icon: Handshake,
    title: "Atendimento B2B",
    desc: "Soluções para indústrias, fabricantes de panelas e distribuidores.",
  },
  {
    icon: Boxes,
    title: "Fabricação sob demanda",
    desc: "Programação de lotes recorrentes conforme o seu planejamento de produção.",
  },
  {
    icon: Layers,
    title: "Padronização",
    desc: "Gabaritos e tornos calibrados garantem uniformidade dimensional.",
  },
  {
    icon: ShieldCheck,
    title: "Controle de qualidade",
    desc: "Inspeção de umidade, acabamento e medidas antes da expedição.",
  },
];

function Stat({ value, suffix, label }: (typeof stats)[number]) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.4);
  const n = useCountUp(value, visible);
  return (
    <div ref={ref} className="surface-panel rounded-md p-7">
      <span className="font-display text-4xl font-semibold text-ember lg:text-5xl">
        {n}
        {suffix}
      </span>
      <p className="mt-3 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function Capacity() {
  return (
    <section id="capacidade" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.24em] text-primary">
            Produção e capacidade
          </span>
          <h2 className="mt-4 text-3xl font-semibold lg:text-5xl">
            Estrutura industrial pronta para o seu volume
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <Stat {...s} />
            </Reveal>
          ))}
        </div>

        <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 70}>
              <div className="group surface-panel h-full rounded-md p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50">
                <span className="grid size-11 place-items-center rounded-sm bg-primary/15 text-primary transition-transform duration-500 group-hover:scale-110">
                  <p.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
