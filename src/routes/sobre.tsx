import { createFileRoute, Link } from "@tanstack/react-router";
import studioImg from "@/assets/studio.jpg";
import { PageHero, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/sobre")({
  component: Sobre,
  head: () => ({ meta: [{ title: "Sobre — Inkara Studio" }, { name: "description", content: "Conheça a trajetória, valores e processo do estúdio Inkara." }] }),
});

function Sobre() {
  return (
    <>
      <PageHero
        eyebrow="Sobre o estúdio"
        title="Tatuagem é memória — e nós tratamos como tal."
        italicWord="memória"
        subtitle="Há mais de uma década, o Inkara dedica-se ao traço autoral, à pesquisa estética e à construção de peças que duram para além da pele."
      />

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl">
              <img src={studioImg} alt="Estúdio Inkara" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="md:col-span-5 space-y-6 text-muted-foreground">
            <Eyebrow>Manifesto</Eyebrow>
            <p className="text-lg leading-relaxed text-foreground">
              Acreditamos em peças que respeitam o corpo, a história e o tempo de cada pessoa. Cada projeto é único, autoral, e construído em parceria.
            </p>
            <p>
              Nosso estúdio em Vila Madalena foi pensado como um espaço de imersão: luz quente, silêncio quando preciso, conversa quando convém — e biossegurança total em todas as etapas.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Trajetória</Eyebrow>
          <ol className="mt-12 space-y-12">
            {[
              { y: "2013", t: "Primeiros traços", d: "Início da formação em ilustração e estudos de tatuagem tradicional." },
              { y: "2017", t: "Inkara nasce", d: "Abertura do primeiro espaço autoral, focado em projetos exclusivos." },
              { y: "2021", t: "Linguagem própria", d: "Consolidação de uma assinatura visual entre o blackwork e o cinematográfico." },
              { y: "2025", t: "Hoje", d: "Mais de 1.200 sessões realizadas e clientes em 7 países." },
            ].map((s) => (
              <li key={s.y} className="reveal grid grid-cols-12 gap-6 border-b border-border pb-12">
                <p className="col-span-12 font-mono text-sm text-muted-foreground md:col-span-2">{s.y}</p>
                <h3 className="col-span-12 font-display text-3xl tracking-tight md:col-span-5">{s.t}</h3>
                <p className="col-span-12 text-muted-foreground md:col-span-5">{s.d}</p>
              </li>
            ))}
          </ol>
          <Link to="/agendamento" className="btn-shine mt-16 inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-background">
            Agendar uma conversa →
          </Link>
        </div>
      </section>
    </>
  );
}
