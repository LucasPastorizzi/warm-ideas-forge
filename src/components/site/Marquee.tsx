import { useRef, useState } from "react";

const items = [
  "Arte autoral",
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const loop = [...items, ...items];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="
        relative
        overflow-hidden
        border-y
        border-black/10
        bg-background
        py-6
      "
    >
      {/* fade lateral */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div
        ref={containerRef}
        style={{
          animationPlayState: paused ? "paused" : "running",
        }}
        className="
          flex
          w-max
          animate-marquee
          items-center
          gap-14
          whitespace-nowrap
          will-change-transform
        "
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="
              group/item
              flex
              items-center
              gap-5
              font-display
              text-2xl
              md:text-3xl
              tracking-tight
              text-black/70
              transition-all
              duration-300
              ease-out
              hover:text-black
              hover:scale-105
            "
          >
            {/* TEXTO */}
            <span className="relative">
              {item}

              {/* underline */}
              <span
                className="
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  w-0
                  bg-black
                  transition-all
                  duration-300
                  ease-out
                  group-hover/item:w-full
                "
              />
            </span>

            {/* separador */}
            <span
              className="
                h-[5px]
                w-[5px]
                rounded-full
                bg-black/30
                transition-all
                duration-300
                ease-out
                group-hover/item:scale-125
                group-hover/item:bg-black
              "
            />
          </span>
        ))}
      </div>
    </div>
  );
}