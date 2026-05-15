import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import workBlackwork from "@/assets/work-blackwork.jpg";
import workFineline from "@/assets/work-fineline.jpg";
import workRealismo from "@/assets/work-realismo.jpg";
import workOriental from "@/assets/work-oriental.jpg";
import imgg1 from "@/assets/iloveimg-converted/IMG_6284.jpg";
import imgg2 from "@/assets/iloveimg-converted/IMG_5106.jpg";
import imgg3 from "@/assets/iloveimg-converted/IMG_6284.jpg";
import imgg4 from "@/assets/iloveimg-converted/IMG_8009.jpg";
import imgg5 from "@/assets/iloveimg-converted/IMG_8118.jpg";
import imgg6 from "@/assets/iloveimg-converted/IMG_8302.jpg";
import imgg7 from "@/assets/iloveimg-converted/IMG_3143.jpg";
import imgg8 from "@/assets/iloveimg-converted/IMG_3685.jpg";
import imgg9 from "@/assets/iloveimg-converted/IMG_4802.jpg";
import imgg10 from "@/assets/iloveimg-converted/IMG_3892.jpg";
import imgg11 from "@/assets/iloveimg-converted/IMG_5076.jpg";
import imgg12 from "@/assets/iloveimg-converted/IMG_3138.jpg"; 








export const Route = createFileRoute("/trabalhos")({
  component: Trabalhos,
  head: () => ({ meta: [{ title: "Trabalhos — Inkara Studio" }, { name: "description", content: "Galeria de tatuagens autorais realizadas pelo estúdio Inkara." }] }),
});

// Cada item representa um slot na grade orgânica.
// col/row: posição e tamanho na grade de 16 colunas × linhas de 70px
// rot: rotação em graus
// z: z-index de sobreposição
const slots: {
  img: string;
  t: string;
  
  year: string;
  col: string;
  row: string;
  rot: number;
  z: number;
}[] = [
  // Linha 1
  { img: imgg1, t: "Tattoo 01",  year: "2024", col: "1 / span 5", row: "1 / span 6", rot: -1.8, z: 2 },
  { img: imgg2, t: "Tattoo 02",  year: "2025", col: "5 / span 4", row: "1 / span 4", rot: 1.2, z: 3 },
  { img: imgg3, t: "Tattoo 03",  year: "2024", col: "9 / span 4", row: "1 / span 5", rot: -0.8, z: 2 },
  { img: imgg4, t: "Tattoo 04",  year: "2024", col: "13 / span 4", row: "1 / span 6", rot: 2.1, z: 3 },

  // Linha 2
  { img: imgg5, t: "Tattoo 05", year: "2023", col: "2 / span 4", row: "7 / span 4", rot: 2.4, z: 4 },
  { img: imgg6, t: "Tattoo 06",  year: "2023", col: "6 / span 5", row: "5 / span 5", rot: -1.5, z: 3 },
  { img: imgg7, t: "Tattoo 07",  year: "2024", col: "11 / span 3", row: "6 / span 4", rot: 0.9, z: 2 },
  { img: imgg8, t: "Tattoo 08",  year: "2022", col: "14 / span 3", row: "7 / span 5", rot: -2.0, z: 3 },

  // Linha 3
  { img: imgg9, t: "Tattoo 09", year: "2025", col: "1 / span 4", row: "11 / span 5", rot: 1.6, z: 2 },
  { img: imgg10, t: "Tattoo 10", year: "2024", col: "5 / span 6", row: "10 / span 6", rot: -1.0, z: 3 },
  { img: imgg11, t: "Tattoo 11",  year: "2025", col: "11 / span 3", row: "10 / span 4", rot: 2.8, z: 4 },
  { img: imgg12, t: "Tattoo 12",  year: "2023", col: "14 / span 3", row: "12 / span 4", rot: -1.4, z: 2 },
];

function Trabalhos() {
  return (
    <>
      <PageHero
        title="Portifólio"
        subtitle="Mais de 1.200 sessões realizadas desde 2012 com traços para todos os gostos."
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
        </p>
      </section>
    </>
  );
}

