import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
      <span className="inline-block h-px w-8 bg-foreground/40" />
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  italicWord,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  italicWord?: string;
  subtitle?: string;
}) {
  const words = title.split(" ");

  return (
    <section className="relative px-6 pb-16 pt-40">
      <div className="mx-auto max-w-6xl">
        <Eyebrow>{eyebrow}</Eyebrow>

        {/* HERO ANIMADO */}
        <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight md:text-[8rem] flex flex-wrap gap-x-3">
          {words.map((word, i) => {
            const cleanWord = word.replace(/[.,—]/g, "");
            const isItalic = italicWord && cleanWord === italicWord;

            return (
              <span
                key={i}
                className={`hero-word ${
                  isItalic ? "italic text-foreground" : ""
                }`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {word}
              </span>
            );
          })}
        </h1>

        {/* SUBTITLE */}
        {subtitle && (
          <p
            className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl hero-sub"
            style={{ animationDelay: `${words.length * 0.08 + 0.2}s` }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* ANIMAÇÕES */}
      <style>
        {`
          .hero-word {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
            filter: blur(6px);
            display: inline-block;

            animation: heroWordIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          @keyframes heroWordIn {
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          .hero-sub {
            opacity: 0;
            transform: translateY(30px);
            animation: heroWordIn 0.8s ease forwards;
          }

          @media (max-width: 768px) {
            .hero-word {
              transform: translateY(25px);
              filter: none;
            }
          }
        `}
      </style>
    </section>
  );
}