import { Link } from "@tanstack/react-router";
import { PenTool } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/70 bg-background pt-16 md:pt-24">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">

        {/* TOP */}
        <div className="grid gap-12 md:gap-16 md:grid-cols-12">

          {/* LEFT */}
          <div className="md:col-span-6">

            {/* INFO */}
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

            {/* TITLE */}
            <h2
              className="mt-6 font-display text-black leading-[1] tracking-tight"
              style={{
                fontSize: "clamp(2.2rem, 6vw, 6rem)",
              }}
            >
              Vamos transformar a sua{" "}
              <em className="italic">história</em> em arte.
            </h2>

            {/* CTA */}
            <Link
              to="/agendamento"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-sm text-white transition hover:scale-[1.03]"
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

        {/* BIG TYPO (CONTROLADA) */}
        <div className="relative mt-20 md:mt-28">

          <p
            className="text-center font-display uppercase text-black leading-[0.8] tracking-tight select-none"
            style={{
              fontSize: "clamp(4rem, 18vw, 20rem)",
            }}
          >
            MINEIRO
          </p>

          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6">

            <p
              className="font-display uppercase text-black leading-[0.8] tracking-tight select-none"
              style={{
                fontSize: "clamp(4rem, 18vw, 20rem)",
              }}
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