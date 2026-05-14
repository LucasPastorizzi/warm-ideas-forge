import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import workBlackwork from "@/assets/work-blackwork.jpg";
import workFineline from "@/assets/work-fineline.jpg";
import workRealismo from "@/assets/work-realismo.jpg";
import workOriental from "@/assets/work-oriental.jpg";

export const Route = createFileRoute("/trabalhos")({
  component: Trabalhos,
  head: () => ({ meta: [{ title: "Mineiro Tattoo - Studio" }, { name: "description", content: "Galeria de tatuagens autorais realizadas pelo Mineiro Tatto, um pouco sobre mim e meu trabalho." }] }),
});

// Cada item representa um slot na grade orgânica.
// col/row: posição e tamanho na grade de 16 colunas × linhas de 70px
// rot: rotação em graus
// z: z-index de sobreposição
const slots: {
  img: string;
  t: string;
  style: string;
  year: string;
  col: string;
  row: string;
  rot: number;
  z: number;
}[] = [
  // Linha 1
  { img: workRealismo,   t: "Retrato — D'Alessandro", style: "Retrato",    year: "2024", col: "1 / span 5",  row: "1 / span 6",  rot: -1.8, z: 2 },
  { img: workFineline,   t: "Guepardo",               style: "Realismo",   year: "2025", col: "5 / span 4",  row: "1 / span 4",  rot:  1.2, z: 3 },
  { img: workOriental,   t: "Manga Preto e Cinza",    style: "Fechamento", year: "2024", col: "9 / span 4",  row: "1 / span 5",  rot: -0.8, z: 2 },
  { img: workBlackwork,  t: "Leão Realista",          style: "Realismo",   year: "2024", col: "13 / span 4", row: "1 / span 6",  rot:  2.1, z: 3 },

  // Linha 2
  { img: workFineline,   t: "Lobo Cinza",          style: "Realismo",   year: "2023", col: "2 / span 4",  row: "7 / span 4",  rot:  2.4, z: 4 },
  { img: workBlackwork,  t: "Retrato Masculino",   style: "Retrato",    year: "2023", col: "6 / span 5",  row: "5 / span 5",  rot: -1.5, z: 3 },
  { img: workOriental,   t: "Manga Completa",      style: "Fechamento", year: "2024", col: "11 / span 3", row: "6 / span 4",  rot:  0.9, z: 2 },
  { img: workRealismo,   t: "Pantera",             style: "Realismo",   year: "2022", col: "14 / span 3", row: "7 / span 5",  rot: -2.0, z: 3 },

  // Linha 3
  { img: workBlackwork,  t: "Preto e Sombra",      style: "Realismo",   year: "2025", col: "1 / span 4",  row: "11 / span 5", rot:  1.6, z: 2 },
  { img: workRealismo,   t: "Retrato Feminino",    style: "Retrato",    year: "2024", col: "5 / span 6",  row: "10 / span 6", rot: -1.0, z: 3 },
  { img: workFineline,   t: "Textura Animal",      style: "Realismo",   year: "2025", col: "11 / span 3", row: "10 / span 4", rot:  2.8, z: 4 },
  { img: workOriental,   t: "Fechamento Perna",    style: "Fechamento", year: "2023", col: "14 / span 3", row: "12 / span 4", rot: -1.4, z: 2 },
];

function Trabalhos() {
  return (
    <>
      <PageHero
        title="O trabalho fala por si mesmo."
        subtitle="Mais de 1.200 sessões realizadas desde 2012. Retratos, animais, fechamentos e puras obras de realismo — cada peça, uma história real."
      />

      {/* GALERIA ORGÂNICA — margens mínimas para fotos quase tocarem as bordas */}
      <section className="pb-32 px-2 sm:px-3">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(16, 1fr)",
            gridAutoRows: "70px",
            gap: "10px",
            position: "relative",
          }}
        >
          {slots.map((s, i) => (
            <div
              key={i}
              style={{
                gridColumn: s.col,
                gridRow: s.row,
                transform: `rotate(${s.rot}deg)`,
                zIndex: s.z,
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 6px 28px rgba(0,0,0,0.4), 3px 3px 0 rgba(0,0,0,0.15)",
                position: "relative",
                background: "#111",
              }}
            >
              <img
                src={s.img}
                alt={s.t}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              {/* Overlay com estilo + título */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "12px",
                }}
                className="photo-overlay"
              />
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  background: "rgba(0,0,0,0.65)",
                  backdropFilter: "blur(6px)",
                  color: "#fff",
                  fontSize: "9px",
                  fontFamily: "monospace",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "3px 8px",
                  borderRadius: "999px",
                }}
              >
                {s.style}
              </span>
            </div>
          ))}
        </div>

        {/* Legenda de rodapé */}
        <p
          style={{
            textAlign: "center",
            marginTop: "48px",
            fontSize: "12px",
            fontFamily: "monospace",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            opacity: 0.35,
          }}
        >
          {slots.length} obras · Inkara Studio
        </p>
      </section>
    </>
  );
}

