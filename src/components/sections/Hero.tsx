"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import Counter from "@/components/ui/counter";

export default function Hero() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.set(
      [badgeRef.current, headlineRef.current, subRef.current, ctaRef.current, statsRef.current, imageRef.current],
      { opacity: 0, y: 30 }
    );

    tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.3)
      .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.5)
      .to(subRef.current, { opacity: 1, y: 0, duration: 0.7 }, 0.8)
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.7 }, 1.0)
      .to(imageRef.current, { opacity: 1, y: 0, duration: 0.9 }, 0.7)
      .to(statsRef.current, { opacity: 1, y: 0, duration: 0.7 }, 1.2);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brite-dark">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-brite-teal/10 blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-brite-green/8 blur-[100px] animate-[pulse_10s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-brite-gold/5 blur-[80px] animate-[pulse_12s_ease-in-out_infinite_4s]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-2.5 mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-brite-green animate-pulse" />
              <span className="text-sm font-medium text-brite-cream/80">
                100% Organic Base &middot; Made in USA
              </span>
            </div>

            <h1
              ref={headlineRef}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Transformational{" "}
              <em className="not-italic text-brite-teal-light italic">
                hormone results
              </em>{" "}
              for your practice
            </h1>

            <p
              ref={subRef}
              className="mt-8 text-lg sm:text-xl text-brite-cream/70 leading-relaxed max-w-xl"
            >
              The one-stop hormone solution that dramatically reduces patient
              costs, increases your revenue, and delivers personalized
              bio-identical formulations guided by advanced decision support.
            </p>

            <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/getting-started"
                className="group relative inline-flex items-center justify-center rounded-full bg-brite-teal px-8 py-4 text-base font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(59,168,154,0.4)]"
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <svg
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              >
                See How It Works
              </Link>
            </div>
          </div>

          {/* Right — Product Image */}
          <div ref={imageRef} className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind product */}
              <div className="absolute inset-0 bg-brite-teal/20 blur-[60px] rounded-full scale-75" />
              <Image
                src="/brand-assets/product-box-hero.png"
                alt="BRITE bio-identical hormone products — organic-based formulations"
                width={520}
                height={520}
                className="relative z-10 drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl pt-12 border-t border-white/10"
        >
          <div>
            <p className="font-heading text-3xl lg:text-4xl font-bold text-white">
              <Counter target={17} suffix="+" />
            </p>
            <p className="mt-2 text-sm text-brite-cream/60">Years Serving Practices</p>
          </div>
          <div>
            <p className="font-heading text-3xl lg:text-4xl font-bold text-white">
              <Counter target={18} duration={1.5} />
            </p>
            <p className="mt-2 text-sm text-brite-cream/60">Medical Board Experts</p>
          </div>
          <div>
            <p className="font-heading text-3xl lg:text-4xl font-bold text-white">
              <Counter target={100} suffix="%" duration={2.5} />
            </p>
            <p className="mt-2 text-sm text-brite-cream/60">Organic Oil Base</p>
          </div>
          <div>
            <p className="font-heading text-3xl lg:text-4xl font-bold text-white">
              <Counter target={0} suffix="" duration={1} />
            </p>
            <p className="mt-2 text-sm text-brite-cream/60">Artificial Additives</p>
          </div>
        </div>
      </div>
    </section>
  );
}
