import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL } from "@/lib/contact";
import handles from "@/assets/cta-handles.jpg";

export function QuoteCta() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={handles}
        alt="Cabos de madeira finalizados organizados em caixas dentro da fábrica"
        width={1600}
        height={912}
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-forest/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/85 to-forest/45" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 text-primary-foreground lg:px-8 lg:py-32">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight lg:text-5xl">
            Precisa de cabos de madeira para sua produção?
          </h2>
          <p className="mt-5 text-primary-foreground/80 lg:text-lg">
            Solicite um orçamento e fale diretamente com nossa equipe para desenvolver ou fornecer
            os modelos ideais para sua empresa.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="ember" size="xl">
              <a href="#contato">
                Solicitar Orçamento
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="heroGhost" size="xl">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Falar pelo WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>
      </div>

    </section>
  );
}
