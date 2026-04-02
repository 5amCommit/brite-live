"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import StaggerReveal from "@/components/ui/stagger-reveal";

const testimonials = [
  {
    quote:
      "I developed chronic insomnia and pills weren't helping me. I was missing deadlines at work, snapping at people, and everything was getting worse. The first day I got my oils, I rubbed them on my inner thigh before going to sleep and was shocked when I slept through the whole night!",
    detail: "Chronic Insomnia Recovery",
    vimeoId: "427009711",
    rating: 5,
  },
  {
    quote:
      "I started experiencing a loss of self-confidence and lots of anxiety and it just got worse and worse. I started treatment right away and started experiencing more clarity, my memory came back stronger, and my energy was much higher!",
    detail: "Anxiety & Memory Recovery",
    vimeoId: "406335753",
    rating: 5,
  },
  {
    quote:
      "My quality of life dropped. I wasn't sleeping well. I was having mood issues. I had no energy. It felt like I lost my umph. Sleep is amazing now, energy is higher than ever, no mood swings, and I feel like my old self again! The organic oils on my skin are so easy to use and so much better than any creams I've used.",
    detail: "Energy & Sleep Restored",
    vimeoId: "791325844",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-brite-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function VideoPlayer({ vimeoId }: { vimeoId: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6">
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="group w-full aspect-video rounded-xl overflow-hidden mb-6 relative bg-brite-dark-light flex items-center justify-center hover:bg-brite-charcoal transition-colors duration-300 cursor-pointer"
    >
      {/* Play button */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brite-teal/80 group-hover:bg-brite-teal group-hover:scale-110 transition-all duration-300 shadow-lg shadow-brite-teal/20">
          <svg className="h-6 w-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <span className="text-sm font-medium text-brite-cream/60 group-hover:text-brite-cream/80 transition-colors">
          Watch Patient Story
        </span>
      </div>
    </button>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-brite-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brite-teal/5 blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brite-green/5 blur-[100px] animate-[pulse_10s_ease-in-out_infinite_3s]" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal-light mb-4">
              Real Patient Stories
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Feel like yourself{" "}
              <em className="italic font-normal text-brite-teal-light">again</em>
            </h2>
          </ScrollReveal>
        </div>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.15}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.detail}
              className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-8 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 ease-out flex flex-col"
            >
              <VideoPlayer vimeoId={testimonial.vimeoId} />

              <blockquote className="text-sm text-brite-cream/80 leading-relaxed flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-6 pt-5 border-t border-white/10">
                <StarRating count={testimonial.rating} />
                <p className="text-sm font-medium text-brite-cream/50 mt-2">
                  {testimonial.detail}
                </p>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
