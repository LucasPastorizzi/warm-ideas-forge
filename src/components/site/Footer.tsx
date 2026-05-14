import { Link } from "@tanstack/react-router";
import { PenTool } from "lucide-react";
import { useEffect } from "react";

export function Footer() {
  useEffect(() => {
    const footer = document.getElementById("footer-section");

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footer.classList.add("active");
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      id="footer-section"
      className="footer-anim relative overflow-hidden border-t border-border/70 bg-background pt-16 md:pt-24"
    >
      <div className="footer-inner mx-auto max-w-[1600px] px-5 md:px-10">

        {/* TOP */}
        <div className="footer-block grid gap-12 md:gap-16 md:grid-cols-12">

          {/* LEFT */}
          <div className="md:col-span-6">

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/[0.03]">
                <PenTool size={16} className="text-black" />
              </span>

              <div>
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Estúdio · São Paulo
                </p>

                <p className="mt-1 text-sm text-black/70">
                  Mineiro Tattoo Studio
                </p>
              </div>
            </div>

            <h2
              className="mt-6 font-display text-black leading-[1] tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 6vw, 6rem)" }}
            >
              Vamos transformar a sua{" "}
              <em className="italic">história</em> em arte.
            </h2>

            <Link
              to="/agendamento"
              className="footer-cta mt-8 inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-sm text-white transition hover:scale-[1.03]"
            >
              Agendar uma sessão →
            </Link>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:col-span-6 md:grid-cols-3">

            <FooterCol
              title="Navegar"
              items={[
                { label: "Sobre", to: "/sobre" },
                { label: "Trabalhos", to: "/trabalhos" },
                { label: "Estilos", to: "/estilos" },
              ]}
            />

            <FooterCol
              title="Estúdio"
              items={[
                { label: "Agendar", to: "/agendamento" },
                { label: "Contato", to: "/contato" },
              ]}
            />

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Visite
              </p>

              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                Rua das Palmeiras, 432
                <br />
                Vila Madalena · SP
                <br />
                Ter–Sáb · 11h às 20h
              </p>
            </div>
          </div>
        </div>

        {/* BIG TYPO */}
        <div className="relative mt-20 md:mt-28">

          <p
            className="footer-title text-center font-display uppercase text-black leading-[0.8] tracking-tight select-none"
            style={{ fontSize: "clamp(4rem, 18vw, 20rem)" }}
          >
            MINEIRO
          </p>

          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6">

            <p
              className="footer-title font-display uppercase text-black leading-[0.8] tracking-tight select-none"
              style={{ fontSize: "clamp(4rem, 18vw, 20rem)" }}
            >
              TATTOO
            </p>

            <span
              className="flex items-center justify-center rounded-full border border-black/10 bg-black/[0.03]"
              style={{
                width: "clamp(3.5rem, 10vw, 7rem)",
                height: "clamp(3.5rem, 10vw, 7rem)",
              }}
            >
              <PenTool
                className="text-black"
                style={{
                  width: "clamp(1.5rem, 4vw, 3rem)",
                  height: "clamp(1.5rem, 4vw, 3rem)",
                }}
              />
            </span>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col gap-4 border-t border-black/10 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Mineiro Tattoo. Todos os direitos reservados.
          </p>

          <p className="text-center font-mono uppercase tracking-[0.3em]">
            Tatuagem autoral · 12 anos
          </p>
        </div>
      </div>

      {/* CSS ANIMAÇÃO */}
      <style>
        {`
          .footer-anim {
            opacity: 0;
            transform: translateY(120px) scale(0.98);
            filter: blur(10px);
            transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
          }

          .footer-anim.active {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }

          .footer-inner {
            opacity: 0;
            transform: translateY(40px);
            transition: all 1s ease;
          }

          .footer-anim.active .footer-inner {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.2s;
          }

          .footer-block > * {
            opacity: 0;
            transform: translateY(40px);
          }

          .footer-anim.active .footer-block > * {
            opacity: 1;
            transform: translateY(0);
          }

          .footer-anim.active .footer-block > *:nth-child(1) {
            transition-delay: 0.3s;
          }

          .footer-anim.active .footer-block > *:nth-child(2) {
            transition-delay: 0.45s;
          }

          .footer-cta {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }

          .footer-anim.active .footer-cta {
            opacity: 1;
            transform: translateY(0) scale(1);
            transition: all 0.8s ease;
            transition-delay: 0.6s;
          }

          .footer-title {
            opacity: 0;
            transform: scale(0.85) translateY(60px);
            filter: blur(12px);
          }

          .footer-anim.active .footer-title {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0);
            transition: all 1.4s cubic-bezier(0.22, 1, 0.36, 1);
          }

          .footer-title:nth-of-type(1) {
            transition-delay: 0.5s;
          }

          .footer-title:nth-of-type(2) {
            transition-delay: 0.7s;
          }

          @media (max-width: 768px) {
            .footer-anim {
              transform: translateY(60px);
              filter: none;
            }

            .footer-title {
              transform: scale(0.95) translateY(40px);
              filter: none;
            }
          }
        `}
      </style>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string }[];
}) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </p>

      <ul className="mt-4 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="transition hover:opacity-60">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}