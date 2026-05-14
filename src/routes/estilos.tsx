import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import { useEffect } from "react";

import workBlackwork from "@/assets/work-blackwork.jpg";
import workFineline from "@/assets/work-fineline.jpg";
import workRealismo from "@/assets/work-realismo.jpg";
import workOriental from "@/assets/work-oriental.jpg";

export const Route = createFileRoute("/estilos")({
  component: Estilos,
  head: () => ({
    meta: [
      { title: "Estilos — Inkara Studio" },
      {
        name: "description",
        content:
          "Estilos dominados pelo estúdio Inkara: Blackwork, Fine Line, Realismo, Oriental e mais.",
      },
    ],
  }),
});

const styles = [
  {
    n: "01",
    name: "Blackwork",
    img: workBlackwork,
    desc: "Sólidos profundos, ornamentação simbólica e altíssimo contraste. Ideal para peças de impacto e longa permanência visual.",
  },
  {
    n: "02",
    name: "Fine Line",
    img: workFineline,
    desc: "Traço único, micro-detalhe e delicadeza. Perfeito para botânicas, escritas e composições minimalistas.",
  },
  {
    n: "03",
    name: "Realismo",
    img: workRealismo,
    desc: "Profundidade fotográfica em preto e cinza, com construção em camadas e foco narrativo.",
  },
  {
    n: "04",
    name: "Oriental",
    img: workOriental,
    desc: "Tradição irezumi, cor saturada, fluxo orgânico do desenho ao corpo.",
  },
];

function Estilos() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHero
        eyebrow=""
        title="Quatro linguagens, uma assinatura."
        italicWord="assinatura"
        subtitle="Trabalhamos com os estilos que melhor traduzem o conceito autoral do estúdio."
      />

      <section className="px-5 md:px-6 pb-28 md:pb-36">
        <div className="mx-auto max-w-6xl space-y-24 md:space-y-32">
          {styles.map((s, i) => (
            <div key={s.name}>
              {/* ITEM */}
              <article
                className={`reveal grid gap-10 md:grid-cols-12 md:items-center ${
                  i % 2 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* IMAGEM */}
                <div className="md:col-span-7">
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-secondary">
                    <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />

                    <img
                      src={s.img}
                      alt={s.name}
                      className="style-img h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* TEXTO */}
                <div className="md:col-span-5 space-y-4 md:space-y-6">
                  <p className="font-mono text-xs text-muted-foreground tracking-widest">
                    N° {s.n}
                  </p>

                  <h2 className="style-title font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">
                    {s.name}
                  </h2>

                  <p className="style-desc text-sm md:text-base text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </article>

              {/* 🔥 SEÇÃO PRETA COM HOVER PREMIUM */}
              {i === 1 && (
                <section
                  className="
                    reveal
                    relative
                    w-screen
                    left-1/2
                    -translate-x-1/2
                    min-h-[70vh]
                    md:min-h-[90vh]
                    bg-black
                    text-white
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                  "
                >
                  {/* glow */}
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

                  {/* conteúdo */}
                  <div className="relative text-center px-6 max-w-3xl">
                    <p className="font-mono text-xs tracking-[0.3em] text-white/50 uppercase">
                      assinatura
                    </p>

                    {/* 🔥 TEXTO COM EFEITO */}
                    <h2
                      className="
                        mt-6
                        font-display
                        text-3xl
                        md:text-6xl
                        leading-tight
                        transition-all
                        duration-500
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        hover:scale-[1.06]
                        hover:tracking-wide
                        hover:text-white
                        cursor-default
                      "
                    >
                      <span className="block transition-all duration-500 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">
                        Não é sobre estilo.
                      </span>

                      <span
                        className="
                          block
                          text-white/60
                          transition-all
                          duration-500
                          hover:text-white
                          hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]
                        "
                      >
                        É sobre identidade.
                      </span>
                    </h2>

                    <p className="mt-6 text-sm md:text-lg text-white/50 leading-relaxed">
                      Cada técnica é apenas um meio. O que permanece é a história marcada no corpo.
                    </p>
                  </div>

                  {/* fades */}
                  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
                </section>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 ANIMAÇÕES */}
      <style>
        {`
        .reveal {
          opacity: 0;
          transform: translateY(80px);
          filter: blur(6px);
          transition: all 1s cubic-bezier(0.22,1,0.36,1);
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }

        .style-img {
          transform: scale(1.08);
          transition: transform 1.4s cubic-bezier(0.22,1,0.36,1);
        }

        .reveal.active .style-img {
          transform: scale(1);
        }

        .group:hover .style-img {
          transform: scale(1.06);
        }

        .style-title {
          transform: translateY(40px);
          opacity: 0;
          transition: all 0.8s ease;
        }

        .reveal.active .style-title {
          transform: translateY(0);
          opacity: 1;
          transition-delay: 0.2s;
        }

        .style-desc {
          transform: translateY(40px);
          opacity: 0;
          transition: all 0.8s ease;
        }

        .reveal.active .style-desc {
          transform: translateY(0);
          opacity: 1;
          transition-delay: 0.35s;
        }

        @media (max-width: 768px) {
          .reveal {
            transform: translateY(40px);
            filter: none;
          }

          .style-title,
          .style-desc {
            transform: translateY(20px);
          }

          .style-img {
            transform: scale(1.03);
          }
        }
        `}
      </style>
    </>
  );
}