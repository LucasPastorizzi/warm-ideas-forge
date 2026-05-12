import { Link } from "@tanstack/react-router";
import { PenTool } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/70 bg-background pt-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">

        {/* TOP */}
        <div className="grid gap-16 md:grid-cols-12">

          {/* LEFT */}
          <div className="md:col-span-6">

            {/* STUDIO INFO */}
            <div className="flex items-center gap-4">

              <span
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  bg-black/[0.03]
                  backdrop-blur-xl
                "
              >
                <PenTool
                  size={18}
                  className="text-black"
                />
              </span>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Estúdio · São Paulo
                </p>

                <p className="mt-1 text-sm text-black/70">
                  Mineiro Tattoo Studio
                </p>
              </div>
            </div>

            {/* TITLE */}
            <h2
              className="
                mt-6
                font-display
                text-black
                leading-[0.9]
                tracking-[-0.05em]
              "
              style={{
                fontSize: "clamp(3.5rem, 7vw, 8rem)",
              }}
            >
              Vamos transformar a sua{" "}
              <em className="italic">história</em> em arte.
            </h2>

            {/* CTA */}
            <Link
              to="/agendamento"
              className="
                btn-shine
                group
                relative
                mt-10
                inline-flex
                items-center
                gap-3
                overflow-hidden
                rounded-full
                bg-black
                px-7
                py-4
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.18)]
              "
            >
              <span className="relative z-10">
                Agendar uma sessão
              </span>

              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

              <span
                className="
                  absolute
                  inset-0
                  translate-x-[-120%]
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  transition-transform
                  duration-1000
                  group-hover:translate-x-[120%]
                "
              />
            </Link>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-10 md:col-span-6 md:grid-cols-3">

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
        <div className="relative mt-28 w-full overflow-visible">

          <p
            className="
              relative
              left-1/2
              w-max
              -translate-x-1/2
              whitespace-nowrap
              font-display
              uppercase
              text-black
              leading-[0.72]
              tracking-[-0.08em]
              select-none
            "
            style={{
              fontSize: "clamp(8rem, 24vw, 25rem)",
            }}
          >
            MINEIRO
          </p>

        <div
  className="
    relative
    left-1/2
    flex
    w-max
    -translate-x-1/2
    items-center
    gap-6
  "
>
  <p
    className="
      whitespace-nowrap
      font-display
      uppercase
      text-black
      leading-[0.72]
      tracking-[-0.08em]
      select-none
    "
    style={{
      fontSize: "clamp(8rem, 24vw, 25rem)",
    }}
  >
    TATTOO
  </p>

  <span
    className="
      flex
      items-center
      justify-center
      rounded-full
      border
      border-black/10
      bg-black/[0.03]
      backdrop-blur-xl
    "
    style={{
      width: "clamp(5rem, 7vw, 8rem)",
      height: "clamp(5rem, 7vw, 8rem)",
    }}
  >
    <PenTool
      className="text-black"
      style={{
        width: "clamp(2rem, 3vw, 3.5rem)",
        height: "clamp(2rem, 3vw, 3.5rem)",
      }}
    />
  </span>
</div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            mt-10
            flex
            flex-col
            items-start
            justify-between
            gap-4
            border-t
            border-black/10
            py-8
            text-xs
            text-muted-foreground
            md:flex-row
            md:items-center
          "
        >
          <p>
            © {new Date().getFullYear()} Mineiro Tattoo. Todos os direitos reservados.
          </p>

          <p className="font-mono uppercase tracking-[0.3em]">
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
            <Link
              to={i.to}
              className="
                transition-all
                duration-300
                hover:opacity-60
              "
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}