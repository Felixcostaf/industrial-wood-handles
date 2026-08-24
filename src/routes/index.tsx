import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { Process } from "@/components/site/Process";
import { Capacity } from "@/components/site/Capacity";
import { Catalog } from "@/components/site/Catalog";
import { WhyUs } from "@/components/site/WhyUs";
import { QuoteCta } from "@/components/site/QuoteCta";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const title = "Fábrica de Cabos de Madeira para Panelas | Madeireira Torneart";
const description =
  "Fabricante de cabos de madeira para panelas, frigideiras, caçarolas e utensílios. Produção em escala, modelos personalizados e atendimento B2B para indústrias e distribuidores.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Manufacturer",
          name: "Madeireira Torneart",
          description,
          areaServed: "BR",
          makesOffer: [
            "Cabos de madeira para panelas",
            "Cabos de madeira para frigideiras",
            "Pomos e alças para caçarolas",
            "Pegadores de madeira",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Products />
        <Process />
        <Capacity />
        <Catalog />
        <WhyUs />
        <QuoteCta />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
