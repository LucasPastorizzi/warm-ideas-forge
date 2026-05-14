import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";

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

const styles = [
  { n: "01", name: "Blackwork", img: workBlackwork, desc: "Sólidos profundos, ornamentos, simbologia." },
  { n: "02", name: "Fine Line", img: workFineline, desc: "Traço único, delicadeza, minimalismo." },
  { n: "03", name: "Realismo", img: workRealismo, desc: "Retratos, profundidade, narrativa visual." },
  { n: "04", name: "Oriental", img: workOriental, desc: "Cor saturada, fluxo, tradição irezumi." },
];

const testimonials = [
  { q: "É como vestir uma obra de arte. Cada detalhe pensado para mim.", a: "Marina V." },
  { q: "Inkara entendeu uma história que eu mal sabia contar — e a desenhou na minha pele.", a: "Rafael C." },
  { q: "O processo é quase ritualístico. O resultado é único.", a: "Helena S." },
];

function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [sobreInView, setSobreInView] = useState(false);
  const sobreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer para animação 3D da seção sobre
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSobreInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sobreRef.current) {
      observer.observe(sobreRef.current);
    }

    return () => observer.disconnect();
  }, []);



  // 👇 efeito baseado no scroll
  const translate = scrollY * 0.3; // movimento suave
  const opacity = Math.max(1 - scrollY / 400, 0); // fade out

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden px-4 sm:px-6 pt-20 sm:pt-32">
        <div className="mx-auto grid max-w-7xl gap-8 sm:gap-12 grid-cols-1 md:grid-cols-12 md:items-end">

          {/* TEXTO */}
          <div className="md:col-span-7">

            <h1
              className="mt-4 sm:mt-8 font-display tracking-tight will-change-transform"
              style={{
                fontSize: "clamp(2rem, 8vw, 9rem)",
                lineHeight: 0.92,
                transform: `translateY(${translate}px)`,
                opacity: opacity,
                transition: "transform 0.1s linear, opacity 0.1s linear",
              }}
            >
              Histórias <em className="italic">eternas</em><br />
              em arte<br />
              permanente
            </h1>

            <div className="mt-6 sm:mt-10 flex flex-wrap items-center gap-2 sm:gap-3">
              <Link
                to="/agendamento"
                className="btn-shine inline-flex items-center gap-2 sm:gap-3 rounded-full bg-foreground px-4 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm font-medium text-background hover:scale-105 transition"
              >
                Agendar sessão →
              </Link>

              <Link
                to="/trabalhos"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm font-medium hover:bg-secondary hover:scale-105 transition"
              >
                Ver trabalhos
              </Link>
            </div>
          </div>

          {/* IMAGEM */}
          <div className="md:col-span-5 mt-8 md:mt-0">
            <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl sm:rounded-3xl bg-secondary shadow-[var(--shadow-card)]">
              <img
                src={heroImg}
                className="img-hover h-full w-full object-cover scale-105 group-hover:scale-110 transition duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* SOBRE */}
      <section ref={sobreRef} className="px-4 sm:px-6 py-16 sm:py-32 overflow-hidden" style={{ perspective: "1200px" }}>
        <div className="mx-auto grid max-w-7xl gap-8 sm:gap-16 grid-cols-1 md:grid-cols-12 md:items-center">

          {/* IMAGEM */}
          <div
            className="md:col-span-6 order-2 md:order-1"
            style={{
              transform: sobreInView ? "rotateY(0) rotateX(0) scale(1)" : "rotateY(-35deg) rotateX(10deg) scale(0.9)",
              opacity: sobreInView ? 1 : 0.6,
              transition: "all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
              transformStyle: "preserve-3d" as any,
            }}
          >
            <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl">
              <img
                src={studioImg}
                className="sobre-img h-full w-full object-cover"
              />

              {/* overlay sutil */}
              <div className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition duration-700 group-hover:opacity-100" />
            </div>
          </div>

          {/* TEXTO */}
          <div
            className="md:col-span-6 order-1 md:order-2"
            style={{
              transform: sobreInView ? "translateX(0) rotateZ(0)" : "translateX(60px) rotateZ(-5deg)",
              opacity: sobreInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s",
            }}
          >
            <h2 className="sobre-text mt-0 md:mt-6 font-display text-3xl sm:text-5xl md:text-7xl leading-[0.95]">
              Mais de 12 anos dedicados à <em className="italic">arte da pele</em>.
            </h2>

            <p className="sobre-text mt-4 sm:mt-8 text-base sm:text-lg text-muted-foreground">
              Apaixonado pelo traço autoral, criando experiências únicas.
            </p>
          </div>

        </div>
      </section>

      {/* PORTFÓLIO — AMONTOADO DE FOTOS */}
      <section className="px-4 sm:px-6 py-16 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl">

          <Eyebrow>Portfólio</Eyebrow>

          <h2 className="mt-4 font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95] max-w-xl">
            Projetos que ficam <em className="italic">para sempre</em>.
          </h2>

          {/* GRADE ORGÂNICA */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gridAutoRows: "80px",
              gap: "12px",
              marginTop: "56px",
              position: "relative",
            }}
          >
            {/* Foto grande — topo esquerda */}
            <div
              style={{
                gridColumn: "1 / span 5",
                gridRow: "1 / span 5",
                transform: "rotate(-2deg)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.35), 4px 4px 0 rgba(0,0,0,0.12)",
                borderRadius: "6px",
                overflow: "hidden",
                zIndex: 2,
                background: "#1a1a1a",
              }}
            >
              <div style={{ width: "100%", height: "100%", background: "#222", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#555", fontSize: "12px", fontFamily: "monospace" }}>foto 1</span>
              </div>
            </div>

            {/* Foto média — topo centro */}
            <div
              style={{
                gridColumn: "5 / span 4",
                gridRow: "1 / span 4",
                transform: "rotate(1.5deg)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.35), -3px 4px 0 rgba(0,0,0,0.12)",
                borderRadius: "6px",
                overflow: "hidden",
                zIndex: 3,
                background: "#1a1a1a",
              }}
            >
              <div style={{ width: "100%", height: "100%", background: "#2a2a2a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#555", fontSize: "12px", fontFamily: "monospace" }}>foto 2</span>
              </div>
            </div>

            {/* Foto alta — direita topo */}
            <div
              style={{
                gridColumn: "9 / span 4",
                gridRow: "1 / span 6",
                transform: "rotate(-1deg)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.35), 3px 3px 0 rgba(0,0,0,0.12)",
                borderRadius: "6px",
                overflow: "hidden",
                zIndex: 2,
                background: "#1a1a1a",
              }}
            >
              <div style={{ width: "100%", height: "100%", background: "#1f1f1f", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#555", fontSize: "12px", fontFamily: "monospace" }}>foto 3</span>
              </div>
            </div>

            {/* Foto quadrada — meio esquerda */}
            <div
              style={{
                gridColumn: "1 / span 4",
                gridRow: "6 / span 4",
                transform: "rotate(2.5deg)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.35), 4px -2px 0 rgba(0,0,0,0.12)",
                borderRadius: "6px",
                overflow: "hidden",
                zIndex: 4,
                background: "#1a1a1a",
              }}
            >
              <div style={{ width: "100%", height: "100%", background: "#252525", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#555", fontSize: "12px", fontFamily: "monospace" }}>foto 4</span>
              </div>
            </div>

            {/* Foto paisagem — meio centro */}
            <div
              style={{
                gridColumn: "5 / span 5",
                gridRow: "5 / span 3",
                transform: "rotate(-1.8deg)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.35), -2px -2px 0 rgba(0,0,0,0.12)",
                borderRadius: "6px",
                overflow: "hidden",
                zIndex: 3,
                background: "#1a1a1a",
              }}
            >
              <div style={{ width: "100%", height: "100%", background: "#202020", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#555", fontSize: "12px", fontFamily: "monospace" }}>foto 5</span>
              </div>
            </div>

            {/* Foto quadrada — baixo direita */}
            <div
              style={{
                gridColumn: "9 / span 4",
                gridRow: "7 / span 4",
                transform: "rotate(1.2deg)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.35), -3px -3px 0 rgba(0,0,0,0.12)",
                borderRadius: "6px",
                overflow: "hidden",
                zIndex: 2,
                background: "#1a1a1a",
              }}
            >
              <div style={{ width: "100%", height: "100%", background: "#272727", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#555", fontSize: "12px", fontFamily: "monospace" }}>foto 6</span>
              </div>
            </div>

            {/* Foto larga — fundo esquerda */}
            <div
              style={{
                gridColumn: "2 / span 6",
                gridRow: "10 / span 4",
                transform: "rotate(-0.8deg)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.35), 2px 2px 0 rgba(0,0,0,0.12)",
                borderRadius: "6px",
                overflow: "hidden",
                zIndex: 3,
                background: "#1a1a1a",
              }}
            >
              <div style={{ width: "100%", height: "100%", background: "#212121", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#555", fontSize: "12px", fontFamily: "monospace" }}>foto 7</span>
              </div>
            </div>

            {/* Foto alta — fundo direita */}
            <div
              style={{
                gridColumn: "8 / span 5",
                gridRow: "11 / span 3",
                transform: "rotate(2deg)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.35), -4px 2px 0 rgba(0,0,0,0.12)",
                borderRadius: "6px",
                overflow: "hidden",
                zIndex: 2,
                background: "#1a1a1a",
              }}
            >
              <div style={{ width: "100%", height: "100%", background: "#242424", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#555", fontSize: "12px", fontFamily: "monospace" }}>foto 8</span>
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-14 text-center">
            <Link
              to="/trabalhos"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary hover:scale-105 transition"
            >
              Ver todos os trabalhos →
            </Link>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="px-4 sm:px-6 py-16 sm:py-32">
        <div className="mx-auto max-w-7xl">

          <Eyebrow>Depoimentos</Eyebrow>

          <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="reveal rounded-2xl sm:rounded-3xl border p-4 sm:p-8 hover:shadow-xl transition duration-500"
              >
                <blockquote className="text-lg sm:text-2xl">
                  "{t.q}"
                </blockquote>

                <p className="mt-4 sm:mt-6 text-xs sm:text-sm">{t.a}</p>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}