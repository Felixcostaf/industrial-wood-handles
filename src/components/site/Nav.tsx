import { useEffect, useState } from "react";
import { Menu, X, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#produtos", label: "Produtos" },
  { href: "#processo", label: "Processo" },
  { href: "#capacidade", label: "Capacidade" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#topo" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-sm bg-primary text-primary-foreground">
            <TreePine className="size-5" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Madeireira <span className="text-primary">Torneart</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm text-muted-foreground transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild variant="ember" size="sm">
            <a href="#contato">Solicitar Orçamento</a>
          </Button>
        </div>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-sm border border-border lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-muted-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <Button asChild variant="ember" className="w-full">
                <a href="#contato" onClick={() => setOpen(false)}>
                  Solicitar Orçamento
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
