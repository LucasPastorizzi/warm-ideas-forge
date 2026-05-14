import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";

export const Route = createFileRoute("/agendamento")({
  component: Agendamento,
  head: () => ({
    meta: [
      { title: "Agendamento — Mineiro Tattoo" },
      {
        name: "description",
        content:
          "Solicite sua sessão de tatuagem com o Mineiro Tattoo em Ivoti, RS. Especialista em realismo.",
      },
    ],
  }),
});

function Agendamento() {
  const whatsappNumber = "555196475674"; // <- troca pelo número real com DDI
  const message = encodeURIComponent(
    `Olá! Vim pelo site e gostaria de fazer um orçamento para tatuagem.

Me chamo:
Estilo desejado:
Local do corpo:
Tamanho aproximado:
Ideia / referência:`
  );

  const whatsappLink = `https://wa.me/${555196475674}?text=${'Olá! Gostaria de agendar um horário!'}`;

  return (
    <>
      <PageHero
        title="Vamos transformar sua ideia em arte!"
      />

      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-12 items-center">
          {/* Lado esquerdo - infos */}
          <aside className="md:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-display tracking-tight">
                Como funciona o processo
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Mande sua ideia, tamanho e local do corpo pelo WhatsApp.
                Com essas informações consigo te passar um retorno sobre prazo e valor.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <p>• Resposta em até 48h — sem enrolação</p>
              <p>• Cada peça pensada do zero pra você</p>
              <p>• Agenda com vagas controladas por semana</p>
              <p>• Estúdio em Ivoti, RS</p>
            </div>
          </aside>

          {/* Lado direito - CTA */}
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-10 shadow-[var(--shadow-soft)] text-center space-y-6">
              <h3 className="text-3xl font-display tracking-tight">
                Manda sua ideia
              </h3>

              <p className="text-sm text-muted-foreground">
                Sem formulário, sem burocracia. É só mandar uma mensagem
                com sua referência — a gente resolve direto no zap.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-green-500 px-8 py-4 text-sm font-medium text-white transition hover:bg-green-600"
              >
                Abrir WhatsApp
                <span aria-hidden>→</span>
              </a>

              <p className="text-xs text-muted-foreground">
                Você vai direto pro WhatsApp do Mineiro.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}