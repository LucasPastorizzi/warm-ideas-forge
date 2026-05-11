import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/70 bg-background pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Estúdio · São Paulo
            </p>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Vamos transformar a sua <em className="italic text-spectrum">história</em> em arte.
            </h2>
            <Link
              to="/agendamento"
              className="btn-shine mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-background"
            >
              Agendar uma sessão
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-6 md:grid-cols-3">
            <FooterCol title="Navegar" items={[
              { label: "Sobre", to: "/sobre" },
              { label: "Trabalhos", to: "/trabalhos" },
              { label: "Estilos", to: "/estilos" },
            ]} />
            <FooterCol title="Estúdio" items={[
              { label: "Agendar", to: "/agendamento" },
              { label: "Contato", to: "/contato" },
            ]} />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Visite</p>
              <p className="mt-4 text-sm leading-relaxed">
                Rua das Palmeiras, 432<br />
                Vila Madalena · SP<br />
                Ter–Sáb · 11h às 20h
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 select-none">
          <p
            className="text-spectrum font-display leading-none tracking-tighter"
            style={{ fontSize: "clamp(5rem, 22vw, 22rem)" }}
          >
            inkara
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-border py-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Inkara Studio. Todos os direitos reservados.</p>
          <p className="font-mono uppercase tracking-[0.2em]">Tatuagem autoral · 12 anos</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{title}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="transition-opacity hover:opacity-60">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
