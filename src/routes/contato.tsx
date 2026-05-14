import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/contato")({
  component: Contato,
  head: () => ({ meta: [{ title: "Contato — Mineiro Tattoo" }, { name: "description", content: "Endereço, horários e canais de contato do Mineiro Tattoo em Ivoti, RS." }] }),
});

function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Canais de Contato"
        centered
      />
      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
          {[
            {
              h: "Endereço",
              l: [
                { text: "R. Cel. Gaelzer Neto, 40", href: "https://maps.google.com/?q=R.+Cel.+Gaelzer+Neto,+40+-+Centro,+Ivoti+-+RS" },
                { text: "Centro · Ivoti, RS" },
                { text: "CEP 93900-000" },
              ],
            },
            {
              h: "Horário",
              l: [
                { text: "Segunda a Sábado" },
                { text: "9h às 19h" },
                { text: "Somente com agendamento" },
              ],
            },
            {
              h: "Canais",
              l: [
                { text: "@mineiro_tattoo", href: "https://instagram.com/mineiro_tattoo" },
                { text: "Instagram", href: "https://instagram.com/mineiro_tattoo" },
                { text: "WhatsApp", href: "/agendamento" },
              ],
            },
          ].map((c) => (
            <div key={c.h} className="reveal rounded-3xl border border-border bg-card p-8">
              <Eyebrow>{c.h}</Eyebrow>
              <ul className="mt-6 space-y-1.5 text-lg">
                {c.l.map((line, i) => (
                  <li key={i}>
                    {line.href ? (
                      <a
                        href={line.href}
                        target={line.href.startsWith("http") ? "_blank" : undefined}
                        rel={line.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="hover:text-foreground transition-colors underline decoration-border underline-offset-4 hover:decoration-foreground"
                      >
                        {line.text}
                      </a>
                    ) : (
                      line.text
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
