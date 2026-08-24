import {
  Award,
  Factory,
  Ruler,
  Repeat,
  Building2,
  Timer,
  TreePine,
  ClipboardCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Award, title: "Fabricação especializada", desc: "Foco exclusivo em cabos de madeira para utensílios." },
  { icon: Factory, title: "Produção em escala", desc: "Estrutura para lotes grandes e recorrentes." },
  { icon: ClipboardCheck, title: "Padronização de qualidade", desc: "Peças uniformes em medida e acabamento." },
  { icon: Ruler, title: "Modelos personalizados", desc: "Desenvolvimento conforme desenho ou amostra." },
  { icon: Building2, title: "Atendimento para empresas", desc: "Rotina comercial pensada para o B2B." },
  { icon: Repeat, title: "Flexibilidade de pedidos", desc: "Volumes e mix ajustados ao seu planejamento." },
  { icon: TreePine, title: "Experiência com madeira", desc: "Domínio de espécies, secagem e usinagem." },
  { icon: Timer, title: "Prazos confiáveis", desc: "Programação de entrega acordada por lote." },
];

export function WhyUs() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.24em] text-primary">Diferenciais</span>
          <h2 className="mt-4 text-3xl font-semibold lg:text-5xl">
            Por que escolher nossa fábrica?
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={i * 50}>
              <div className="group h-full bg-card p-7 transition-colors duration-500 hover:bg-secondary">
                <it.icon className="size-6 text-primary transition-transform duration-500 group-hover:-translate-y-0.5" />
                <h3 className="mt-5 text-base font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
