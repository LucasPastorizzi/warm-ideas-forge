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
  const [carouselRotation, setCarouselRotation] = useState(0);
  const [carouselInView, setCarouselInView] = useState(false);
  const sobreRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  // Carrosel 3D com rotação automática
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setCarouselInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!carouselInView) return;

    const interval = setInterval(() => {
      setCarouselRotation((prev) => (prev + 90) % 360);
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselInView]);

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

      {/* ESTILOS - CARROSEL 3D */}
      <section ref={carouselRef} className="px-4 sm:px-6 py-16 sm:py-32" style={{ perspective: "1000px" }}>
        <div className="mx-auto max-w-7xl">

          <h2 className="reveal mt-0 sm:mt-6 font-display text-3xl sm:text-5xl md:text-7xl">
            Seu desejo, minha <em className="italic">arte</em>.
          </h2>

          {/* CARROSEL 3D CILÍNDRICO */}
          <div className="mt-12 sm:mt-20 flex justify-center items-center h-80 sm:h-96 perspective-1000 w-full">
            <div
              style={{
                perspective: "1000px",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "clamp(200px, 90vw, 280px)",
                  height: "clamp(260px, 110vw, 360px)",
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${carouselRotation}deg)`,
                  transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                {styles.map((s, i) => {
                  const angle = (i / styles.length) * 360;
                  const radius = 150;
                  return (
                    <div
                      key={s.name}
                      style={{
                        position: "absolute",
                        width: "clamp(200px, 90vw, 280px)",
                        height: "clamp(260px, 110vw, 360px)",
                        left: "50%",
                        top: "50%",
                        marginLeft: "calc(-50%)",
                        marginTop: "calc(-50%)",
                        transformStyle: "preserve-3d",
                        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <div className="group relative w-full h-full overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
                        <img
                          src={s.img}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Overlay com info */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4 sm:p-6">
                          <h3 className="text-lg sm:text-2xl font-bold text-white">{s.name}</h3>
                          <p className="text-xs sm:text-sm text-white/80 mt-1 sm:mt-2 line-clamp-2">{s.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* INDICADORES */}
          <div className="mt-8 sm:mt-12 flex justify-center items-center gap-2 sm:gap-3">
            {styles.map((s, i) => (
              <button
                key={s.name}
                onClick={() => setCarouselRotation((i / styles.length) * 360)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  Math.round(carouselRotation) % 360 === Math.round((i / styles.length) * 360) % 360
                    ? "bg-foreground w-6 sm:w-8"
                    : "w-2 sm:w-2.5 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>

          {/* INFO EXTRA */}
          <div className="mt-8 sm:mt-16 text-center px-2">
            <p className="text-muted-foreground text-xs sm:text-sm">🔄 Rotaciona automaticamente • Toque/Clique nos indicadores</p>
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