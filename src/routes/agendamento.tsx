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
  const whatsappNumber = "5551999999999"; // <- troca pelo número real com DDI
  const message = encodeURIComponent(
    `Olá! Vim pelo site e gostaria de fazer um orçamento para tatuagem.

Me chamo:
Estilo desejado:
Local do corpo:
Tamanho aproximado:
Ideia / referência:`
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <>
      <PageHero
        title="Vamos conversar sobre o seu projeto."
        italicWord="projeto"
        subtitle="Clique no botão abaixo e fale diretamente com o Mineiro no WhatsApp. Resposta em até 48h úteis."
      />

      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-12 items-center">
          {/* Lado esquerdo - infos */}
          <aside className="md:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-display tracking-tight">
                Atendimento direto no WhatsApp
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Para agilizar o atendimento e garantir um retorno mais rápido,
                todo o processo de orçamento é feito diretamente pelo WhatsApp.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <p>• Resposta em até 48h úteis</p>
              <p>• Orçamento personalizado</p>
              <p>• Vagas limitadas por semana</p>
              <p>• Atendimento em Ivoti / RS</p>
            </div>
          </aside>

          {/* Lado direito - CTA */}
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-10 shadow-[var(--shadow-soft)] text-center space-y-6">
              <h3 className="text-3xl font-display tracking-tight">
                Iniciar conversa no WhatsApp
              </h3>

              <p className="text-sm text-muted-foreground">
                Clique abaixo e já envie os detalhes da sua ideia.
                O briefing já vem pronto pra facilitar.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-green-500 px-8 py-4 text-sm font-medium text-white transition hover:bg-green-600"
              >
                Falar no WhatsApp
                <span aria-hidden>→</span>
              </a>

              <p className="text-xs text-muted-foreground">
                Você será redirecionado para o WhatsApp automaticamente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}