import React from "react";

const HeroGlow = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Bottom-center primary glow */}
      <div className="hero-glow-primary absolute left-1/2 bottom-0 h-40 w-80 -translate-x-1/2 translate-y-1/2 rounded-xl blur-3xl sm:h-56 sm:w-120" />

      {/* Bottom-center glows */}
      <div className="hero-glow-secondary absolute left-1/2 bottom-0 h-70 w-150 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl sm:h-90 sm:w-180" />
      <div className="hero-glow-secondary absolute left-1/2 bottom-0 h-90 w-150 -translate-x-1/2 translate-y-1/3 rounded-full blur-3xl sm:h-100 sm:w-160" />
      <div className="hero-glow-secondary absolute left-1/2 bottom-0 h-64 w-150 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl opacity-40 sm:h-72 sm:w-140" />

      {/* Bottom border line soft gradient */}
      {/* <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(to_top,color-mix(in_oklch,var(--brand)_18%,transparent),transparent)] sm:h-40" /> */}
    </div>
  );
};

export default HeroGlow;
