import { Link } from "@tanstack/react-router";
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
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border border-border/60 px-4 py-2 backdrop-blur-xl transition-all duration-500 ${
          scrolled ? "bg-background/80 shadow-[var(--shadow-soft)]" : "bg-background/40"
        }`}
      >
        <Link to="/" className="flex items-center gap-2 pl-2">
          <span className="relative inline-flex h-7 w-7 items-center justify-center">
            <span className="absolute inset-0 rounded-full" style={{ background: "var(--gradient-spectrum)" }} />
            <span className="absolute inset-[2px] rounded-full bg-background" />
            <span className="relative font-display text-lg leading-none">i</span>
          </span>
          <span className="font-display text-xl tracking-tight">Inkara</span>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "rounded-full px-3 py-1.5 text-sm bg-secondary text-foreground" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/agendamento"
          className="btn-shine inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
        >
          Agendar
          <span className="text-spectrum font-bold">→</span>
        </Link>
      </nav>
    </header>
  );
}
