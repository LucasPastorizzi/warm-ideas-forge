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
  const parts = italicWord ? title.split(italicWord) : [title];
  return (
    <section className="relative px-6 pb-16 pt-40">
      <div className="mx-auto max-w-6xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="reveal mt-6 font-display text-6xl leading-[0.95] tracking-tight md:text-[8rem]">
          {parts[0]}
          {italicWord && (
            <em className="italic text-spectrum">{italicWord}</em>
          )}
          {parts[1]}
        </h1>
        {subtitle && (
          <p className="reveal mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
