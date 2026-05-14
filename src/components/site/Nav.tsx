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
          <Link to="/" className="group flex items-center gap-3">
            <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-black/10">
              <span
                className="absolute inset-0 opacity-90"
                style={{
                  background:
                    "linear-gradient(135deg, #000000, #2a2a2a, #000000)",
                }}
              />
              <span className="absolute inset-[1.5px] rounded-full bg-background" />
              <span className="relative font-display text-lg text-foreground">
                M
              </span>
            </span>

            <span className="relative font-display text-lg tracking-tight text-foreground md:text-xl">
              Mineiro Tattoo
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-black transition-all duration-500 group-hover:w-full" />
            </span>
          </Link>

          {/* DESKTOP */}
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l, index) => (
              <li key={l.to} className="flex items-center">
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
            <span className="relative z-10">Agendar</span>
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

      {/* MOBILE MENU (MELHORADO) */}
      <div
        className={`
          fixed
          inset-0
          z-40
          md:hidden
          transition-all
          duration-500
          ${
            mobileOpen ? "visible opacity-100" : "invisible opacity-0"
          }
        `}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setMobileOpen(false)}
          className="
            absolute
            inset-0
            bg-black/50
            backdrop-blur-md
          "
        />

        {/* PAINEL */}
        <div
          className={`
            absolute
            inset-x-3
            top-20
            overflow-hidden
            rounded-[2.2rem]
            border
            border-white/10
            bg-gradient-to-b from-background/95 to-background/80
            shadow-[0_35px_100px_rgba(0,0,0,0.25)]
            backdrop-blur-3xl
            transition-all
            duration-500

            ${
              mobileOpen
                ? "translate-y-0 scale-100 opacity-100"
                : "-translate-y-8 scale-[0.98] opacity-0"
            }
          `}
        >
          {/* HEADER */}
          <div className="relative px-6 py-6 border-b border-white/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display text-xl text-foreground">
                  Navegação
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Explore o universo Mineiro Tattoo
                </p>
              </div>

              <div className="h-10 w-10 rounded-full bg-black/5 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-black/40 animate-pulse" />
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div className="p-4">
            <ul className="flex flex-col gap-3">
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
                      rounded-2xl
                      border
                      border-black/5
                      bg-black/[0.02]
                      px-4
                      py-4
                      transition-all
                      duration-300
                      hover:scale-[1.01]
                      hover:border-black/10
                      hover:bg-black/[0.05]
                    "
                  >
                    {/* barra lateral */}
                    <span
                      className="
                        absolute
                        left-0
                        top-0
                        h-full
                        w-1
                        scale-y-0
                        bg-black
                        transition-transform
                        duration-300
                        group-hover:scale-y-100
                        rounded-full
                      "
                    />

                    <div className="flex items-center gap-4">
                      <span className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-background
                        border
                        border-black/10
                        text-xs
                        font-semibold
                        text-muted-foreground
                      ">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {l.label}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Acessar seção
                        </p>
                      </div>
                    </div>

                    <span className="text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground">
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
                mt-5
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
                shadow-lg
                shadow-black/20
                transition-all
                duration-300
                hover:scale-[1.02]
              "
            >
              <span className="relative z-10">Agendar Sessão</span>

              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

              <span
                className="
                  absolute
                  inset-0
                  -translate-x-[120%]
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