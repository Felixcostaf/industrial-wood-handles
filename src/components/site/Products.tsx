import { ArrowUpRight, Ruler } from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import panela from "@/assets/prod-panela.jpg";
import frigideira from "@/assets/prod-frigideira.jpg";
import cacarola from "@/assets/prod-cacarola.jpg";
import pegador from "@/assets/prod-pegador.jpg";

const products = [
  {
    img: panela,
    name: "Cabo para Panela",
    desc: "Perfil torneado ergonômico para panelas de alumínio, ferro e inox.",
    specs: ["18 a 26 cm", "Furo padrão para rebite", "Acabamento selado"],
  },
  {
    img: frigideira,
    name: "Cabo para Frigideira",
    desc: "Modelo reforçado com encaixe metálico e resistência térmica.",
    specs: ["16 a 22 cm", "Encaixe com virola", "Alta durabilidade"],
  },
  {
    img: cacarola,
    name: "Cabo e Pomo para Caçarola",
    desc: "Alças curtas e pomos torneados para caçarolas e tampas.",
    specs: ["Torneamento simétrico", "Rosca central", "Lote padronizado"],
  },
  {
    img: pegador,
    name: "Pegadores de Madeira",
    desc: "Pegadores e utensílios com lixamento fino e acabamento uniforme.",
    specs: ["Madeira maciça", "Lixa 220", "Personalizável"],
  },
];

export function Products() {
  return (
    <section id="produtos" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.24em] text-primary">Nossos produtos</span>
          <h2 className="mt-4 text-3xl font-semibold lg:text-5xl">
            Linhas fabricadas para produção industrial
          </h2>
          <p className="mt-4 text-muted-foreground">
            Modelos padronizados prontos para pedidos recorrentes e desenvolvimento sob medida
            conforme o projeto de cada fabricante.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 90}>
              <article className="group surface-panel h-full overflow-hidden rounded-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-ember)]">
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={900}
                    height={900}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <ul className="mt-4 space-y-1.5">
                    {p.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="size-1 rounded-full bg-primary" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#catalogo"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-300 hover:gap-3"
                  >
                    Ver detalhes <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-8">
          <div className="surface-panel flex flex-col items-start gap-6 rounded-md p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-sm bg-primary/15 text-primary">
                <Ruler className="size-5" />
              </span>
              <div>
                <h3 className="text-xl font-semibold">Modelos personalizados sob projeto</h3>
                <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground">
                  Produzimos conforme desenho técnico, amostra física ou referência: medida,
                  formato, tipo de madeira, furação e acabamento definidos pela sua produção.
                </p>
              </div>
            </div>
            <Button asChild variant="ember" size="lg">
              <a href="#contato">Desenvolver meu modelo</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
