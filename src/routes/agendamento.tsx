import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/agendamento")({
  component: Agendamento,
  head: () => ({ meta: [{ title: "Agendamento — Mineiro Tattoo" }, { name: "description", content: "Solicite sua sessão de tatuagem com o Mineiro Tattoo em Ivoti, RS. Especialista em realismo." }] }),
});

function Agendamento() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        title="Vamos conversar sobre o seu projeto."
        italicWord="projeto"
        subtitle="Preencha o formulário abaixo com os detalhes da sua ideia. O Mineiro retorna em até 48h úteis com disponibilidade e orçamento."
      />

      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-12">
          <aside className="md:col-span-4 space-y-10">
            <div>
              <ol className="mt-6 space-y-4 text-sm">
                <li><span className="font-mono text-muted-foreground mr-2">01</span> Você preenche o formulário</li>
                <li><span className="font-mono text-muted-foreground mr-2">02</span> O Mineiro avalia e retorna</li>
                <li><span className="font-mono text-muted-foreground mr-2">03</span> Criamos um projeto exclusivo</li>
                <li><span className="font-mono text-muted-foreground mr-2">04</span> Sessão agendada em Ivoti</li>
              </ol>
            </div>
            <div>
              <p className="mt-6 text-sm text-muted-foreground">
                Valor por sessão varia conforme tamanho, complexidade e localização da peça.
                Consulte durante o atendimento.
              </p>
            </div>
          </aside>

          <form
            className="md:col-span-8 space-y-6 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            {sent ? (
              <div className="py-16 text-center">
                <p className="font-display text-4xl tracking-tight">Briefing recebido <em className="italic text-spectrum">✦</em></p>
                <p className="mt-4 text-muted-foreground">Retornamos em até 48h úteis. Obrigado pela confiança.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Nome" name="nome" required />
                  <Field label="E-mail" name="email" type="email" required />
                  <Field label="Telefone" name="tel" />
                  <Field label="Instagram" name="ig" />
                </div>
                <Field label="Estilo desejado" name="estilo" placeholder="Blackwork, Fine Line, Realismo…" />
                <Field label="Local do corpo" name="local" />
                <Field label="Tamanho aproximado (cm)" name="tamanho" />
                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Conte sua ideia</label>
                  <textarea
                    name="ideia"
                    rows={5}
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none ring-0 transition-colors focus:border-foreground"
                    placeholder="Referências, simbologia, história por trás…"
                  />
                </div>
                <button type="submit" className="btn-shine inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background">
                  Enviar briefing
                  <span aria-hidden>→</span>
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 block font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}{required && " *"}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
      />
    </div>
  );
}
