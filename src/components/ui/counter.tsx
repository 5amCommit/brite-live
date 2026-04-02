"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  target: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export default function Counter({
  target,
  suffix = "",
  className = "",
  duration = 2,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const obj = { value: 0 };

    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        setHasAnimated(true);
        gsap.to(obj, {
          value: target,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(obj.value) + suffix;
          },
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [target, suffix, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
