import { TreePine, Instagram, Facebook, Linkedin } from "lucide-react";
import { ADDRESS, EMAIL, PHONE_DISPLAY } from "@/lib/contact";

const columns = [
  {
    title: "Links rápidos",
    links: [
      { href: "#topo", label: "Início" },
      { href: "#processo", label: "Processo" },
      { href: "#capacidade", label: "Capacidade" },
      { href: "#contato", label: "Contato" },
    ],
  },
  {
    title: "Produtos",
    links: [
      { href: "#produtos", label: "Cabos para panelas" },
      { href: "#produtos", label: "Cabos para frigideiras" },
      { href: "#produtos", label: "Pomos e caçarolas" },
      { href: "#produtos", label: "Pegadores" },
    ],
  },
  {
    title: "Catálogo",
    links: [
      { href: "#catalogo", label: "Ver catálogo" },
      { href: "#catalogo", label: "Baixar PDF" },
      { href: "#contato", label: "Modelos sob medida" },
      { href: "#contato", label: "Solicitar orçamento" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-sm bg-primary text-primary-foreground">
              <TreePine className="size-5" />
            </span>
            <span className="font-display text-lg font-semibold">
              Madeireira <span className="text-primary">Torneart</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm text-muted-foreground">
            Fábrica especializada na produção de cabos de madeira para panelas, frigideiras,
            caçarolas e utensílios domésticos, atendendo indústrias e distribuidores em todo o
            Brasil.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#contato"
                aria-label="Rede social"
                className="grid size-10 place-items-center rounded-sm border border-border text-muted-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((c) => (
          <div key={c.title}>
            <h3 className="text-sm font-semibold">{c.title}</h3>
            <ul className="mt-5 space-y-3">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-muted-foreground lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Madeireira Torneart — CNPJ 00.000.000/0001-00. Todos os
            direitos reservados.
          </p>
          <p>
            {ADDRESS} · {PHONE_DISPLAY} · {EMAIL}
          </p>
        </div>
      </div>
    </footer>
  );
}
