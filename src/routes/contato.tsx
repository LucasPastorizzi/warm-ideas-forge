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
        title="Venha nos encontrar."
        italicWord="encontrar"
        subtitle="Estamos em Ivoti, RS. Atendimento presencial com horário agendado. Mande mensagem pelo Instagram ou pelo formulário."
      />
      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
          {[
            { h: "Endereço", l: ["R. Cel. Gaelzer Neto, 40", "Centro · Ivoti, RS", "CEP 93.900-000"] },
            { h: "Horário", l: ["Segunda a Sábado", "9h às 18h", "Somente com agendamento"] },
            { h: "Canais", l: ["@mineiro_tattoo", "Instagram / WhatsApp", "Ivoti · Vale dos Sinos, RS"] },
          ].map((c) => (
            <div key={c.h} className="reveal rounded-3xl border border-border bg-card p-8">
              <Eyebrow>{c.h}</Eyebrow>
              <ul className="mt-6 space-y-1.5 text-lg">
                {c.l.map((line) => <li key={line}>{line}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
