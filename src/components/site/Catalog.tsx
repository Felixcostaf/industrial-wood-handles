import { useState } from "react";
import { Download, FileText, MessageSquare } from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import panela from "@/assets/prod-panela.jpg";
import frigideira from "@/assets/prod-frigideira.jpg";
import cacarola from "@/assets/prod-cacarola.jpg";
import pegador from "@/assets/prod-pegador.jpg";
import handles from "@/assets/cta-handles.jpg";

type Cat =
  | "todos"
  | "longos"
  | "curtos"
  | "pegadores"
  | "panelas"
  | "frigideiras"
  | "especiais";

const filters: { id: Cat; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "longos", label: "Cabos longos" },
  { id: "curtos", label: "Cabos curtos" },
  { id: "pegadores", label: "Pegadores" },
  { id: "panelas", label: "Panelas" },
  { id: "frigideiras", label: "Frigideiras" },
  { id: "especiais", label: "Modelos especiais" },
];

const items = [
  {
    ref: "CB-102",
    name: "Cabo Torneado Clássico",
    img: panela,
    dim: "220 × 28 mm",
    wood: "Eucalipto · selado fosco",
    custom: true,
    cats: ["longos", "panelas"] as Cat[],
  },
  {
    ref: "CB-118",
    name: "Cabo Reto Reforçado",
    img: frigideira,
    dim: "180 × 32 mm",
    wood: "Marfim · verniz PU",
    custom: true,
    cats: ["curtos", "frigideiras"] as Cat[],
  },
  {
    ref: "PM-045",
    name: "Pomo Redondo",
    img: cacarola,
    dim: "45 × 35 mm",
    wood: "Pinus tratado · natural",
    custom: false,
    cats: ["curtos", "especiais"] as Cat[],
  },
  {
    ref: "PG-210",
    name: "Pegador Chato",
    img: pegador,
    dim: "240 × 40 mm",
    wood: "Eucalipto · lixa 220",
    custom: true,
    cats: ["pegadores", "especiais"] as Cat[],
  },
  {
    ref: "CB-260",
    name: "Cabo Longo Industrial",
    img: panela,
    dim: "260 × 26 mm",
    wood: "Eucalipto · selado",
    custom: true,
    cats: ["longos", "panelas"] as Cat[],
  },
  {
    ref: "CB-140",
    name: "Cabo Curto Ergonômico",
    img: frigideira,
    dim: "140 × 30 mm",
    wood: "Marfim · natural",
    custom: false,
    cats: ["curtos", "frigideiras"] as Cat[],
  },
];

export function Catalog() {
  const [active, setActive] = useState<Cat>("todos");
  const list = active === "todos" ? items : items.filter((i) => i.cats.includes(active));

  return (
    <section id="catalogo" className="border-y border-border bg-card/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.24em] text-primary">Catálogo</span>
          <h2 className="mt-4 text-3xl font-semibold lg:text-5xl">
            Referências, medidas e acabamentos
          </h2>
          <p className="mt-4 text-muted-foreground">
            Consulte os modelos de linha. Qualquer referência pode ser adaptada às medidas da sua
            produção.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300",
                  active === f.id
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((it, i) => (
            <Reveal as="li" key={it.ref} delay={i * 60}>
              <article className="group surface-panel h-full overflow-hidden rounded-md transition-all duration-500 hover:-translate-y-1.5">
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={it.img}
                    alt={`${it.name} — referência ${it.ref}`}
                    width={900}
                    height={675}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-sm bg-background/85 px-2.5 py-1 text-[11px] font-medium tracking-widest text-primary backdrop-blur">
                    {it.ref}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold">{it.name}</h3>
                  <dl className="mt-4 space-y-2 text-xs text-muted-foreground">
                    <div className="flex justify-between gap-4">
                      <dt>Dimensões</dt>
                      <dd className="text-foreground">{it.dim}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt>Madeira / acabamento</dt>
                      <dd className="text-right text-foreground">{it.wood}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt>Personalização</dt>
                      <dd className={it.custom ? "text-primary" : "text-foreground"}>
                        {it.custom ? "Disponível" : "Sob consulta"}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12">
          <div className="surface-panel grid gap-8 rounded-md p-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:p-10">
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 overflow-hidden rounded-sm border border-border">
                <img
                  src={handles}
                  alt="Prévia da capa do catálogo de cabos de madeira"
                  width={1600}
                  height={900}
                  loading="lazy"
                  className="aspect-[3/4] size-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3">
                {[panela, frigideira].map((src, i) => (
                  <div key={i} className="overflow-hidden rounded-sm border border-border">
                    <img
                      src={src}
                      alt={`Prévia de página ${i + 1} do catálogo`}
                      width={900}
                      height={900}
                      loading="lazy"
                      className="aspect-square size-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
                <FileText className="size-4" /> Catálogo em PDF
              </span>
              <h3 className="mt-4 text-2xl font-semibold lg:text-3xl">
                Todas as referências em um único arquivo
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Medidas, tipos de madeira, acabamentos e opções de personalização de toda a linha de
                cabos e pegadores.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="ember" size="lg">
                  <a href="#contato">
                    <Download className="size-4" />
                    Baixar Catálogo Completo
                  </a>
                </Button>
                <Button asChild variant="outlineWood" size="lg">
                  <a href="#contato">
                    <MessageSquare className="size-4" />
                    Solicitar Orçamento
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
