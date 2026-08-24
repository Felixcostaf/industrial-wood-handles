import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ADDRESS,
  EMAIL,
  HOURS,
  PHONE_DISPLAY,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/contact";

const fields = [
  { id: "nome", label: "Nome", type: "text", required: true },
  { id: "empresa", label: "Empresa", type: "text", required: true },
  { id: "whatsapp", label: "WhatsApp", type: "tel", required: true },
  { id: "email", label: "E-mail", type: "email", required: true },
  { id: "cidade", label: "Cidade / Estado", type: "text", required: true },
  { id: "quantidade", label: "Quantidade estimada", type: "text", required: false },
  { id: "produto", label: "Tipo de produto", type: "text", required: false },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Solicitação registrada", {
        description: "Nossa equipe comercial entrará em contato em até 24 horas úteis.",
      });
    }, 700);
  };

  return (
    <section id="contato" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.24em] text-primary">Contato</span>
          <h2 className="mt-4 text-3xl font-semibold lg:text-5xl">Solicite seu orçamento</h2>
          <p className="mt-4 text-muted-foreground">
            Descreva o modelo, a medida e o volume estimado. Retornamos com preço, prazo e amostra.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="surface-panel rounded-md p-7 lg:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                {fields.map((f) => (
                  <div key={f.id} className="space-y-2">
                    <Label htmlFor={f.id} className="text-xs text-muted-foreground">
                      {f.label}
                      {f.required && <span className="text-primary"> *</span>}
                    </Label>
                    <Input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      required={f.required}
                      className="h-11 bg-background"
                    />
                  </div>
                ))}
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="mensagem" className="text-xs text-muted-foreground">
                    Mensagem / descrição da necessidade
                  </Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    className="bg-background"
                    placeholder="Ex.: 5.000 cabos de 220 mm em eucalipto, com furação para rebite."
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="ember"
                size="xl"
                disabled={sending}
                className="mt-7 w-full sm:w-auto"
              >
                <Send className="size-4" />
                {sending ? "Enviando..." : "Solicitar Orçamento"}
              </Button>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-panel h-full rounded-md p-7 lg:p-9">
              <h3 className="text-lg font-semibold">Fale com a fábrica</h3>
              <ul className="mt-6 space-y-6 text-sm">
                <li className="flex gap-4">
                  <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <span className="block text-muted-foreground">Telefone</span>
                    <a href={`tel:${PHONE_DISPLAY.replace(/\D/g, "")}`}>{PHONE_DISPLAY}</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MessageCircle className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <span className="block text-muted-foreground">WhatsApp</span>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      {WHATSAPP_DISPLAY}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <span className="block text-muted-foreground">E-mail</span>
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <span className="block text-muted-foreground">Localização da fábrica</span>
                    {ADDRESS}
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <span className="block text-muted-foreground">Horário de atendimento</span>
                    {HOURS}
                  </div>
                </li>
              </ul>

              <Button asChild variant="whatsapp" size="lg" className="mt-8 w-full">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" />
                  Falar pelo WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
