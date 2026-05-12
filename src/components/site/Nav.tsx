import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/trabalhos", label: "Trabalhos" },
  { to: "/estilos", label: "Estilos" },
  { to: "/agendamento", label: "Agendamento" },
  { to: "/contato", label: "Contato" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // trava scroll quando menu abre
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 md:px-4 md:pt-4">
        <nav
          className={`
            relative
            flex
            w-full
            max-w-6xl
            items-center
            justify-between
            overflow-hidden
            rounded-2xl
            md:rounded-full
            border
            px-4
            py-3
            md:px-5
            md:py-2.5
            backdrop-blur-2xl
            transition-all
            duration-500

            ${
              scrolled
                ? `
                  border-black/10
                  bg-background/90
                  shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                `
                : `
                  border-black/5
                  bg-background/60
                `
            }
          `}
        >
          {/* linhas decorativas */}
          <div className="absolute left-8 top-0 h-px w-20 bg-gradient-to-r from-transparent via-black/30 to-transparent" />

          <div className="absolute bottom-0 right-8 h-px w-20 bg-gradient-to-r from-transparent via-black/20 to-transparent" />

          {/* LOGO */}
          <Link
            to="/"
            className="group flex items-center gap-3"
          >
            <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-black/10">
              <span
                className="absolute inset-0 opacity-90"
                style={{
                  background: "var(--gradient-spectrum)",
                }}
              />

              <span className="absolute inset-[1.5px] rounded-full bg-background" />

              <span className="relative font-display text-lg text-foreground">
                i
              </span>
            </span>

            <span className="relative font-display text-lg tracking-tight text-foreground md:text-xl">
              Inkara

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-black transition-all duration-500 group-hover:w-full" />
            </span>
          </Link>

          {/* DESKTOP */}
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l, index) => (
              <li
                key={l.to}
                className="flex items-center"
              >
                <Link
                  to={l.to}
                  className="
                    group
                    relative
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    text-muted-foreground
                    transition-all
                    duration-300
                    hover:bg-black/[0.04]
                    hover:text-foreground
                  "
                  activeProps={{
                    className:
                      "group relative rounded-full bg-black/[0.06] px-4 py-2 text-sm text-foreground",
                  }}
                  activeOptions={{ exact: true }}
                >
                  {l.label}

                  <span
                    className="
                      absolute
                      bottom-1
                      left-1/2
                      h-px
                      w-0
                      -translate-x-1/2
                      bg-black
                      transition-all
                      duration-300
                      group-hover:w-[55%]
                    "
                  />
                </Link>

                {index !== links.length - 1 && (
                  <span className="h-4 w-px bg-black/10" />
                )}
              </li>
            ))}
          </ul>

          {/* CTA DESKTOP */}
          <Link
            to="/agendamento"
            className="
              btn-shine
              group
              relative
              hidden
              items-center
              gap-2
              overflow-hidden
              rounded-full
              border
              border-black
              bg-black
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:shadow-[0_10px_25px_rgba(0,0,0,0.18)]
              md:inline-flex
            "
          >
            <span className="relative z-10">
              Agendar
            </span>

            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
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
              text-foreground
              transition-all
              duration-300
              hover:bg-black/[0.06]
              md:hidden
            "
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed
          inset-0
          z-40
          md:hidden
          transition-all
          duration-500

          ${
            mobileOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      >
        {/* backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          className="
            absolute
            inset-0
            bg-black/40
            backdrop-blur-md
          "
        />

        {/* painel */}
        <div
          className={`
            absolute
            inset-x-3
            top-24
            overflow-hidden
            rounded-[2rem]
            border
            border-black/10
            bg-background/95
            shadow-[0_30px_80px_rgba(0,0,0,0.18)]
            backdrop-blur-3xl
            transition-all
            duration-500

            ${
              mobileOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-6 opacity-0"
            }
          `}
        >
          {/* topo */}
          <div className="relative border-b border-black/5 px-5 py-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display text-xl text-foreground">
                  Navegação
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Explore o universo Inkara
                </p>
              </div>

              <div className="h-px w-16 bg-gradient-to-r from-black/20 to-transparent" />
            </div>
          </div>

          {/* links */}
          <div className="p-3">
            <ul className="flex flex-col gap-2">
              {links.map((l, index) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className="
                      group
                      relative
                      flex
                      items-center
                      justify-between
                      overflow-hidden
                      rounded-2xl
                      border
                      border-transparent
                      bg-black/[0.02]
                      px-4
                      py-4
                      transition-all
                      duration-300
                      hover:border-black/10
                      hover:bg-black/[0.04]
                    "
                  >
                    {/* glow */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute inset-y-0 left-0 w-1 bg-black rounded-full" />
                    </div>

                    <div className="flex items-center gap-4">
                      {/* número */}
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-background text-xs font-medium text-muted-foreground">
                        0{index + 1}
                      </span>

                      {/* texto */}
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {l.label}
                        </p>

                        <p className="text-xs text-muted-foreground">
                          Navegar para seção
                        </p>
                      </div>
                    </div>

                    {/* seta */}
                    <span className="translate-x-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              to="/agendamento"
              onClick={() => setMobileOpen(false)}
              className="
                group
                relative
                mt-4
                flex
                items-center
                justify-center
                gap-2
                overflow-hidden
                rounded-2xl
                bg-black
                px-5
                py-4
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-[1.02]
              "
            >
              <span className="relative z-10">
                Agendar Sessão
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
        </div>
      </div>
    </>
  );
}