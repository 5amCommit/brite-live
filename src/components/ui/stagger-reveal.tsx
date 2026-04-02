"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  direction?: "up" | "left";
  distance?: number;
}

export default function StaggerReveal({
  children,
  className = "",
  stagger = 0.12,
  direction = "up",
  distance = 40,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.children;
    if (!items.length) return;

    const props =
      direction === "up"
        ? { y: distance, x: 0 }
        : { x: distance, y: 0 };

    gsap.set(items, { opacity: 0, ...props });

    gsap.to(items, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.7,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [stagger, direction, distance]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
