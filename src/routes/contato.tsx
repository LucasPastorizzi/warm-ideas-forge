import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/contato")({
  component: Contato,
  head: () => ({
    meta: [
      { title: "Contato — Mineiro Tattoo" },
      {
        name: "description",
        content:
          "Endereço, horários e canais de contato do Mineiro Tattoo em Ivoti, RS.",
      },
    ],
  }),
});

function Contato() {
  return (
    <>
      <PageHero  title="Canais de Contato" centered />

      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">

          {[
            {
              h: "Endereço",
              l: [
                {
                  text: "R. Cel. Gaelzer Neto, 40",
                  href: "https://maps.google.com/?q=R.+Cel.+Gaelzer+Neto,+40+-+Centro,+Ivoti+-+RS",
                },
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
          ].map((c, index) => (
            <div
              key={c.h}
              className="
                group
                reveal
                rounded-3xl
                border border-border
                bg-card
                p-8
                transition-all duration-500 ease-out
                hover:-translate-y-2
                hover:shadow-2xl
                hover:border-foreground/20
                opacity-0
                animate-fadeIn
              "
              style={{
                animationDelay: `${index * 120}ms`,
                animationFillMode: "forwards",
              }}
            >
              <Eyebrow>{c.h}</Eyebrow>

              <ul className="mt-6 space-y-2 text-lg">
                {c.l.map((line, i) => (
                  <li key={i}>
                    {line.href ? (
                      <a
                        href={line.href}
                        target={line.href.startsWith("http") ? "_blank" : undefined}
                        rel={line.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="
                          inline-block
                          transition-all duration-300
                          underline decoration-border underline-offset-4
                          hover:decoration-foreground
                          hover:text-foreground
                          hover:translate-x-1
                        "
                      >
                        {line.text}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{line.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* animação global */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
}