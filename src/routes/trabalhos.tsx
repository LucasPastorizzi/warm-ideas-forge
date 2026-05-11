import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import workBlackwork from "@/assets/work-blackwork.jpg";
import workFineline from "@/assets/work-fineline.jpg";
import workRealismo from "@/assets/work-realismo.jpg";
import workOriental from "@/assets/work-oriental.jpg";

export const Route = createFileRoute("/trabalhos")({
  component: Trabalhos,
  head: () => ({ meta: [{ title: "Trabalhos — Inkara Studio" }, { name: "description", content: "Galeria de tatuagens autorais realizadas pelo estúdio Inkara." }] }),
});

const works = [
  { img: workBlackwork, t: "Serpente Floral", style: "Blackwork", year: "2025" },
  { img: workOriental, t: "Sleeve Koi", style: "Oriental", year: "2024" },
  { img: workRealismo, t: "Retrato em pele", style: "Realismo", year: "2024" },
  { img: workFineline, t: "Botânica", style: "Fine Line", year: "2025" },
  { img: workBlackwork, t: "Mandala dorso", style: "Blackwork", year: "2023" },
  { img: workOriental, t: "Crisântemo", style: "Oriental", year: "2024" },
];

function Trabalhos() {
  return (
    <>
      <PageHero
        eyebrow="Portfólio"
        title="Cada peça, uma história única."
        italicWord="única"
        subtitle="Uma seleção curada de projetos autorais realizados nos últimos anos."
      />
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {works.map((w, i) => (
              <figure key={i} className="group reveal">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
                  <img src={w.img} alt={w.t} className="img-hover h-full w-full object-cover" loading="lazy" />
                  <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] backdrop-blur">
                    {w.style}
                  </span>
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between">
                  <p className="font-display text-2xl tracking-tight">{w.t}</p>
                  <p className="font-mono text-xs text-muted-foreground">{w.year}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
