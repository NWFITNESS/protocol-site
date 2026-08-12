"use client";

import { useEffect, useState } from "react";
import { ShaderBackground } from "@/components/ui/shader-background";

/**
 * Hero backdrop: the WebGL plasma shader, swapped for a static cobalt gradient
 * under prefers-reduced-motion (and as the SSR/first-paint fallback). The shader
 * itself pauses off-screen and when the tab is hidden, so it's cheap once you
 * scroll past the hero.
 */
export function HeroShader({ className = "" }: { className?: string }) {
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (reduced) {
    return (
      <div
        className={`${className} bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.2),rgba(124,58,237,0.12)_45%,transparent_72%)]`}
      />
    );
  }
  return <ShaderBackground className={className} />;
}
