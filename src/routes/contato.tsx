import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/contato")({
  component: Contato,
  head: () => ({ meta: [{ title: "Contato — Inkara Studio" }, { name: "description", content: "Endereço, horários e canais de contato do estúdio Inkara em São Paulo." }] }),
});

function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Estamos por aqui."
        italicWord="aqui"
        subtitle="Visite o estúdio, mande mensagem ou acompanhe nossos próximos projetos."
      />
      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
          {[
            { h: "Endereço", l: ["Rua das Palmeiras, 432", "Vila Madalena · SP", "01234-000"] },
            { h: "Horário", l: ["Terça a Sábado", "11h às 20h", "Atendimento agendado"] },
            { h: "Canais", l: ["@inkara.studio", "ola@inkara.studio", "+55 11 99999-9999"] },
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
