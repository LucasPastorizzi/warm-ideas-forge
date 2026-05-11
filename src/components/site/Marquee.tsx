const items = [
  "Arte Autoral",
  "Exclusividade",
  "Biossegurança",
  "+12 anos",
  "São Paulo",
  "Sessões customizadas",
  "Black & Grey",
  "Fine Line",
  "Realismo",
  "Oriental",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-background py-6">
      <div className="flex animate-marquee gap-12 whitespace-nowrap will-change-transform">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-3xl tracking-tight md:text-4xl">
            {item}
            <span className="text-spectrum">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
