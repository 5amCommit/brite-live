import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-brite-cream relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brite-teal/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brite-dark tracking-tight leading-[1.1]">
          The hardest decision is{" "}
          <em className="italic font-normal text-brite-teal">
            to actually make one
          </em>
        </h2>
        <p className="mt-8 text-lg text-brite-text-light leading-relaxed max-w-2xl mx-auto">
          Most decline is preventable. Don&apos;t wait for symptoms to show.
          BRITE helps you take control of your hormonal health with
          expert-guided, personalized bio-identical hormone therapy.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/getting-started"
            className="group inline-flex items-center justify-center rounded-full bg-brite-teal px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brite-teal/25 hover:bg-brite-teal-dark hover:shadow-xl hover:shadow-brite-teal/30 transition-all duration-300"
          >
            Get Started Today
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
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-brite-text/20 px-8 py-4 text-base font-medium text-brite-text hover:bg-brite-dark hover:text-white hover:border-brite-dark transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        <p className="mt-8 text-sm text-brite-text-light">
          Free consultation &middot; No obligation &middot; Expert guidance
        </p>
      </div>
    </section>
  );
}
