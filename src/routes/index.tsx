import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-artist.jpg";
import studioImg from "@/assets/studio.jpg";
import workBlackwork from "@/assets/work-blackwork.jpg";
import workFineline from "@/assets/work-fineline.jpg";
import workRealismo from "@/assets/work-realismo.jpg";
import workOriental from "@/assets/work-oriental.jpg";
import { Marquee } from "@/components/site/Marquee";
import { Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  component: Index,
});

const stats = [
  { v: "1.2k+", l: "Sessões realizadas" },
  { v: "12", l: "Anos de carreira" },
  { v: "4.9", l: "Avaliação média" },
  { v: "8", l: "Estilos dominados" },
];

const styles = [
  { n: "01", name: "Blackwork", img: workBlackwork, desc: "Sólidos profundos, ornamentos, simbologia." },
  { n: "02", name: "Fine Line", img: workFineline, desc: "Traço único, delicadeza, minimalismo." },
  { n: "03", name: "Realismo", img: workRealismo, desc: "Retratos, profundidade, narrativa visual." },
  { n: "04", name: "Oriental", img: workOriental, desc: "Cor saturada, fluxo, tradição irezumi." },
];

const testimonials = [
  { q: "É como vestir uma obra de arte. Cada detalhe pensado para mim.", a: "Marina V.", role: "Cliente desde 2022" },
  { q: "Inkara entendeu uma história que eu mal sabia contar — e a desenhou na minha pele.", a: "Rafael C.", role: "Cliente desde 2021" },
  { q: "O processo é quase ritualístico. O resultado é único.", a: "Helena S.", role: "Cliente desde 2023" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden px-6 pt-32">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: "var(--gradient-soft)" }}
        />
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
           
            <h1 className="mt-8 font-display tracking-tight" style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)", lineHeight: 0.92 }}>
              Histórias <em className="italic text-spectrum">eternas</em><br />
              em arte<br />
              permanente<span className="cursor-bar" />
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Removido
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/agendamento" className="btn-shine inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background">
                Agendar sessão
                <span aria-hidden>→</span>
              </Link>
              <Link to="/trabalhos" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium hover:bg-secondary">
                Ver trabalhos
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-secondary shadow-[var(--shadow-card)]">
              <img
                src={heroImg}
                alt="Artista tatuando em ambiente cinematográfico"
                className="img-hover h-full w-full object-cover"
                width={1080}
                height={1920}
              />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-5 text-xs">
               
              
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-24 grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 border-t border-border pt-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="reveal">
              <p className="font-display text-5xl tracking-tight md:text-6xl">{s.v}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <Marquee />

      {/* SOBRE */}
      <section className="px-6 py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl">
              <img src={studioImg} alt="Estúdio Inkara" className="img-hover h-full w-full object-cover" loading="lazy" width={1600} height={1200} />
            </div>
          </div>
          <div className="md:col-span-6">
            <Eyebrow>O artista</Eyebrow>
            <h2 className="reveal mt-6 font-display text-5xl leading-[0.98] tracking-tight md:text-7xl">
              Mais de 12 anos dedicados à <em className="italic text-spectrum">arte da pele</em>.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground">
              Apaixonado pelo traço autoral, Inkara construiu uma linguagem própria que mescla técnica cinematográfica, sensibilidade narrativa e referências contemporâneas.
            </p>
            <Link to="/sobre" className="mt-10 inline-flex items-center gap-2 border-b border-foreground/40 pb-1 text-sm font-medium hover:border-foreground">
              Conheça a trajetória
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ESTILOS */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Especialidades</Eyebrow>
              <h2 className="reveal mt-6 font-display text-5xl leading-[0.98] tracking-tight md:text-7xl">
                Cada estilo,<br /> uma <em className="italic text-spectrum">assinatura</em>.
              </h2>
            </div>
            <Link to="/estilos" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm hover:bg-secondary">
              Todos os estilos →
            </Link>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {styles.map((s) => (
              <article key={s.name} className="group reveal">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-secondary">
                  <img src={s.img} alt={s.name} className="img-hover h-full w-full object-cover" loading="lazy" width={1024} height={1280} />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="font-display text-2xl tracking-tight">{s.name}</h3>
                  <span className="font-mono text-xs text-muted-foreground">N° {s.n}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="border-t border-border bg-background px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Processo</Eyebrow>
          <h2 className="reveal mt-6 max-w-4xl font-display text-5xl leading-[0.98] tracking-tight md:text-7xl">
            Do primeiro contato ao <em className="italic text-spectrum">último traço</em>.
          </h2>
          <ol className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
            {[
              { n: "01", t: "Conversa", d: "Entendemos a sua história, referências e expectativa de duração." },
              { n: "02", t: "Estudo", d: "Esboços autorais desenvolvidos exclusivamente para o seu corpo." },
              { n: "03", t: "Sessão", d: "Ambiente controlado, biossegurança total e ritmo respeitado." },
              { n: "04", t: "Cuidado", d: "Acompanhamento da cicatrização e retoque incluso após 60 dias." },
            ].map((step) => (
              <li key={step.n} className="reveal bg-background p-8">
                <p className="font-mono text-xs text-muted-foreground">{step.n}</p>
                <h3 className="mt-8 font-display text-3xl tracking-tight">{step.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Depoimentos</Eyebrow>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={i} className="reveal flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
                <blockquote className="font-display text-2xl leading-snug tracking-tight">
                  "{t.q}"
                </blockquote>
                <figcaption className="mt-10">
                  <p className="text-sm font-medium">{t.a}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
