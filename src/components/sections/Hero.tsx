import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brite-dark">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
        {/* Radial teal glow — top right */}
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-brite-teal/10 blur-[120px]" />
        {/* Radial green glow — bottom left */}
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-brite-green/8 blur-[100px]" />
        {/* Subtle gold accent — center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brite-gold/5 blur-[80px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-28 text-center">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-8">
          <span className="h-2 w-2 rounded-full bg-brite-green animate-pulse" />
          <span className="text-sm font-medium text-brite-cream/80">
            Trusted by patients since 2009
          </span>
        </div>

        {/* Headline — Cascaid-inspired editorial serif with italic accent */}
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.1] max-w-5xl mx-auto">
          Your hormones,{" "}
          <em className="not-italic text-brite-teal-light font-normal italic">
            guided by experts
          </em>
        </h1>

        {/* Subheadline */}
        <p className="mt-8 text-lg sm:text-xl text-brite-cream/70 max-w-2xl mx-auto leading-relaxed">
          Bio-identical hormone replacement therapy backed by a Medical Board of
          18 physicians, pharmacists, and scientists. The right hormones, the
          right dose, at the right time.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/getting-started"
            className="group inline-flex items-center justify-center rounded-full bg-brite-teal px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brite-teal/25 hover:bg-brite-teal-dark hover:shadow-xl hover:shadow-brite-teal/30 transition-all duration-300"
          >
            Start Your Journey
            <svg
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white hover:bg-white/5 hover:border-white/30 transition-all duration-300"
          >
            Learn How It Works
          </Link>
        </div>

        {/* Stats Bar — Cascaid-inspired big numbers */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-white/10">
          <div>
            <p className="font-heading text-4xl lg:text-5xl font-bold text-white">
              17+
            </p>
            <p className="mt-2 text-sm text-brite-cream/60">
              Years of Excellence
            </p>
          </div>
          <div>
            <p className="font-heading text-4xl lg:text-5xl font-bold text-white">
              18
            </p>
            <p className="mt-2 text-sm text-brite-cream/60">
              Board-Certified Experts
            </p>
          </div>
          <div>
            <p className="font-heading text-4xl lg:text-5xl font-bold text-white">
              100%
            </p>
            <p className="mt-2 text-sm text-brite-cream/60">
              Bio-Identical & Organic
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator — hidden on mobile, positioned below stats */}
      <div className="hidden lg:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1 pointer-events-none">
        <div className="h-8 w-px bg-gradient-to-b from-brite-cream/20 to-transparent" />
      </div>
    </section>
  );
}
