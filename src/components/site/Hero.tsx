import { useEffect, useMemo, useState } from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import forest from "@/assets/step-forest.jpg";
import logs from "@/assets/step-logs.jpg";
import lathe from "@/assets/hero-lathe.jpg";
import finished from "@/assets/cta-handles.jpg";

const stages = [
  { src: forest, label: "Floresta manejada", caption: "Origem da matéria-prima" },
  { src: logs, label: "Toras selecionadas", caption: "Corte e dimensionamento" },
  { src: lathe, label: "Torneamento", caption: "Precisão no torno" },
  { src: finished, label: "Cabo finalizado", caption: "Acabamento e expedição" },
];

function Dust() {
  const motes = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        left: `${(i * 37) % 100}%`,
        top: `${40 + ((i * 23) % 60)}%`,
        size: 2 + ((i * 7) % 4),
        delay: (i * 0.7) % 14,
        duration: 12 + ((i * 3) % 10),
      })),
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {motes.map((m, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-primary-glow/70"
          style={{
            left: m.left,
            top: m.top,
            width: m.size,
            height: m.size,
            animation: `dust-drift ${m.duration}s linear ${m.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % stages.length), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="topo" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        {stages.map((s, i) => (
          <img
            key={s.label}
            src={s.src}
            alt={`${s.label} — ${s.caption}`}
            width={1920}
            height={1080}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            className={cn(
              "absolute inset-0 size-full object-cover transition-opacity duration-[1600ms] ease-out",
              i === active ? "opacity-100" : "opacity-0",
            )}
            style={{ animation: "slow-zoom 14s ease-out forwards" }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/85 to-forest/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,transparent,var(--foreground)_85%)] opacity-70" />
      <Dust />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-14 pt-32 text-primary-foreground lg:justify-center lg:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] backdrop-blur">
            Fábrica de cabos de madeira · B2B
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-7xl">
            Cabos de Madeira com <span className="text-primary-glow">Qualidade, Precisão</span> e
            Produção em Escala
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 lg:text-lg">
            Somos fabricantes especializados em cabos de madeira para panelas, frigideiras,
            caçarolas e utensílios domésticos. Atendemos indústrias, fabricantes e distribuidores
            com produção padronizada, modelos personalizados e controle de qualidade em todas as
            etapas.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="ember" size="xl">
              <a href="#contato">
                Solicitar Orçamento
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="heroGhost" size="xl">
              <a href="#catalogo">
                <BookOpen className="size-4" />
                Ver Catálogo
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-primary-foreground/20 bg-primary-foreground/20 sm:grid-cols-4">
          {stages.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              className={cn(
                "group px-4 py-4 text-left backdrop-blur transition-colors duration-500",
                i === active
                  ? "bg-primary-foreground/15"
                  : "bg-forest/40 hover:bg-primary-foreground/10",
              )}
            >
              <span
                className={cn(
                  "block text-[11px] font-medium tracking-[0.2em]",
                  i === active ? "text-primary-glow" : "text-primary-foreground/60",
                )}
              >
                0{i + 1}
              </span>
              <span className="mt-1.5 block text-sm font-medium">{s.label}</span>
              <span className="mt-0.5 block text-xs text-primary-foreground/70">{s.caption}</span>
              <span
                className={cn(
                  "mt-3 block h-px bg-primary-glow transition-all duration-700",
                  i === active ? "w-full" : "w-6",
                )}
              />
            </button>
          ))}
        </div>
      </div>

    </section>
  );
}
