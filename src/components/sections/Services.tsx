const services = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Personalized Formulations",
    description:
      "Every hormone prescription is custom-compounded to your unique biochemistry. No one-size-fits-all approach — your treatment is as individual as you are.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Expert Medical Board",
    description:
      "Guided by 18 physicians, pharmacists, and scientists who specialize in bio-identical hormones. Decades of combined expertise dedicated to your wellbeing.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Organic & Bio-Identical",
    description:
      "We use only organic-based, bio-identical hormones that are molecularly identical to what your body produces naturally. Safe, effective, and proven.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: "Precision Dosing",
    description:
      "The correct amount of each hormone, at the right time of day, applied to the right places. We make hormone replenishment as elegant as possible.",
  },
];

export default function Services() {
  return (
    <section className="py-24 lg:py-32 bg-brite-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header — Cascaid editorial style */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal mb-4">
            How We Help
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brite-dark tracking-tight leading-[1.1]">
            From complexity{" "}
            <em className="italic font-normal text-brite-teal">to clarity</em>
          </h2>
          <p className="mt-6 text-lg text-brite-text-light leading-relaxed max-w-2xl">
            Hormone health doesn&apos;t have to be overwhelming. Our Medical
            Board has created a rigorous system to make the process clearer and
            more straightforward.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl bg-white p-8 lg:p-10 shadow-sm border border-border/50 hover:shadow-lg hover:border-brite-teal/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-brite-teal/10 text-brite-teal group-hover:bg-brite-teal group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-brite-dark">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base text-brite-text-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
