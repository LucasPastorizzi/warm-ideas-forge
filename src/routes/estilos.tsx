import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import workBlackwork from "@/assets/work-blackwork.jpg";
import workFineline from "@/assets/work-fineline.jpg";
import workRealismo from "@/assets/work-realismo.jpg";
import workOriental from "@/assets/work-oriental.jpg";

export const Route = createFileRoute("/estilos")({
  component: Estilos,
  head: () => ({ meta: [{ title: "Estilos — Inkara Studio" }, { name: "description", content: "Estilos dominados pelo estúdio Inkara: Blackwork, Fine Line, Realismo, Oriental e mais." }] }),
});

const styles = [
  { n: "01", name: "Blackwork", img: workBlackwork, desc: "Sólidos profundos, ornamentação simbólica e altíssimo contraste. Ideal para peças de impacto e longa permanência visual." },
  { n: "02", name: "Fine Line", img: workFineline, desc: "Traço único, micro-detalhe e delicadeza. Perfeito para botânicas, escritas e composições minimalistas." },
  { n: "03", name: "Realismo", img: workRealismo, desc: "Profundidade fotográfica em preto e cinza, com construção em camadas e foco narrativo." },
  { n: "04", name: "Oriental", img: workOriental, desc: "Tradição irezumi, cor saturada, fluxo orgânico do desenho ao corpo." },
];

function Estilos() {
  return (
    <>
      <PageHero
        eyebrow="Estilos"
        title="Quatro linguagens, uma assinatura."
        italicWord="assinatura"
        subtitle="Trabalhamos com os estilos que melhor traduzem o conceito autoral do estúdio."
      />
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl space-y-24">
          {styles.map((s, i) => (
            <article key={s.name} className={`grid gap-10 md:grid-cols-12 md:items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="md:col-span-7">
                <div className="group aspect-[4/3] overflow-hidden rounded-3xl bg-secondary">
                  <img src={s.img} alt={s.name} className="img-hover h-full w-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className="md:col-span-5">
                <p className="font-mono text-xs text-muted-foreground">N° {s.n}</p>
                <h2 className="reveal mt-3 font-display text-5xl leading-[0.98] tracking-tight md:text-6xl">{s.name}</h2>
                <p className="mt-6 text-muted-foreground">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
