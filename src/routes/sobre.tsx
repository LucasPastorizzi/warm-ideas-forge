import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import studioImg from "@/assets/studio.jpg";
import { PageHero, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/sobre")({
  component: Sobre,
  head: () => ({
    meta: [
      { title: "Sobre — Inkara Studio" },
      {
        name: "description",
        content:
          "Conheça a trajetória, valores e processo do estúdio Inkara.",
      },
    ],
  }),
});

function Sobre() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));

    const isMobile = window.innerWidth < 768;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const maxHeight =
            document.documentElement.scrollHeight - window.innerHeight;

          // progress bar
          const progress = (scrolled / maxHeight) * 100;
          const bar = document.getElementById("progress-bar");
          if (bar) bar.style.width = progress + "%";

          // parallax (apenas desktop)
          if (!isMobile) {
            const img = document.getElementById("parallax-img");
            if (img) {
              img.style.transform = `translateY(${scrolled * 0.04}px) scale(1.04)`;
            }

            const black = document.getElementById("black-section");
            if (black) {
              const scale = Math.min(1 + scrolled * 0.0002, 1.06);
              black.style.transform = `scale(${scale})`;
            }
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* PROGRESS BAR */}
      <div
        id="progress-bar"
        className="fixed left-0 top-0 z-50 h-[2px] w-0 bg-foreground transition-all duration-200"
      />

      {/* HERO */}
      <PageHero
        eyebrow=""
        title="Tatuagem é memória — e nós tratamos como tal."
        italicWord="memória"
        subtitle="Há mais de uma década, o Inkara dedica-se ao traço autoral, à pesquisa estética e à construção de peças que duram para além da pele."
      />

      {/* SOBRE */}
      <section className="px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-20 md:items-center">
          
          {/* IMAGEM */}
          <div className="md:col-span-7 reveal">
            <div className="overflow-hidden rounded-3xl group">
              <img
                id="parallax-img"
                src={studioImg}
                alt="Estúdio Inkara"
                className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* TEXTO */}
          <div className="md:col-span-5 space-y-6 md:space-y-8 text-muted-foreground reveal">
            <Eyebrow>Manifesto</Eyebrow>

            <p className="text-base md:text-lg leading-relaxed text-foreground">
              Acreditamos em peças que respeitam o corpo, a história e o tempo
              de cada pessoa. Cada projeto é único, autoral, e construído em
              parceria.
            </p>

            <p className="text-sm md:text-base">
              Nosso estúdio em Vila Madalena foi pensado como um espaço de
              imersão: luz quente, silêncio quando preciso, conversa quando
              convém — e biossegurança total em todas as etapas.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO PRETA FULL */}
      <section
  id="black-section"
  className="relative w-screen left-1/2 -translate-x-1/2 min-h-screen flex items-center overflow-hidden"
>
  {/* IMAGEM DE FUNDO */}
 <img
  id="bg-img"
  src={studioImg}
  alt=""
  className="absolute inset-0 h-full w-full object-cover will-change-transform transition-transform duration-300"
/>

  {/* OVERLAY ESCURO (ESSENCIAL) */}
  <div className="absolute inset-0 bg-black/70" />

  {/* GRADIENTE SUAVE (profundidade) */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

  {/* GLOW */}
  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

  {/* CONTEÚDO */}
  <div className="relative mx-auto max-w-4xl px-5 md:px-6 text-center reveal text-white">
  

    <h2 className="mt-8 font-display text-3xl md:text-6xl leading-tight">
      Não fazemos apenas tatuagens.
      <span className="block text-white/70">
        Criamos marcas que atravessam o tempo.
      </span>
    </h2>

    <p className="mx-auto mt-8 max-w-2xl text-sm md:text-lg text-white/60">
      Cada traço é pensado, cada detalhe é intencional. O corpo é a tela,
      mas a história é o que realmente importa.
    </p>
  </div>

  {/* FADES */}
  <div className="absolute top-0 left-0 h-24 w-full bg-gradient-to-b from-black to-transparent" />
  <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black to-transparent" />
</section>

      {/* TRAJETÓRIA */}
      <section className="px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Trajetória</Eyebrow>

          <ol className="mt-16 space-y-16">
            {[
              { y: "2013", t: "Primeiros traços", d: "Início da formação..." },
              { y: "2017", t: "Inkara nasce", d: "Abertura do estúdio..." },
              { y: "2021", t: "Linguagem própria", d: "Assinatura visual..." },
              { y: "2025", t: "Hoje", d: "Mais de 1.200 sessões..." },
            ].map((s, i) => (
              <li
                key={s.y}
                className="reveal grid md:grid-cols-3 gap-6"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="text-sm text-muted-foreground">{s.y}</p>
                <h3 className="text-2xl font-display">{s.t}</h3>
                <p className="text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>

          <div className="reveal mt-20">
            <Link
              to="/agendamento"
              className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-background transition-all duration-300 hover:scale-105"
            >
              Agendar uma conversa →
            </Link>
          </div>
        </div>
      </section>

      {/* ANIMAÇÃO GLOBAL */}
     <style>
{`
  .reveal {
    opacity: 0;
    transform: translateY(60px);
    filter: blur(8px);
    transition:
      opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
      filter 0.8s ease;
    will-change: transform, opacity;
  }

  .reveal.active {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }

  /* variações */
  .reveal-left {
    transform: translateX(-60px);
  }

  .reveal-right {
    transform: translateX(60px);
  }

  .reveal-scale {
    transform: scale(0.95);
  }

  .reveal.active.reveal-left,
  .reveal.active.reveal-right {
    transform: translateX(0);
  }

  .reveal.active.reveal-scale {
    transform: scale(1);
  }

  /* MOBILE OTIMIZADO */
  @media (max-width: 768px) {
    .reveal {
      transform: translateY(30px);
      filter: none;
    }
  }
`}
</style>
    </>
  );
}