import ScrollReveal from "@/components/ui/scroll-reveal";
import StaggerReveal from "@/components/ui/stagger-reveal";

const features = [
  {
    badge: "Personalized",
    title: "Advanced Decision Support",
    description:
      "Because no two humans have identical replenishment needs. Our sophisticated system arrives at the right dosages and adjusts them — reducing guesswork, delivering healthier patients for life.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    badge: "Compliance",
    title: "They Remember to Apply",
    description:
      "It's not just what you prescribe that matters — it's what they remember to apply. Patients are reminded what to take, when to take it, on the schedule you set. Adjust dosages and the app mirrors it.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
  {
    badge: "Organic",
    title: "Why Our Base Matters",
    description:
      "Your patients rub more than a quart into their skin every year. 95% of that is base. Most contain olefins and toxic solvents. Ours is 100% certified organic oil — zero artificial additives. Same hormones, quicker delivery.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    badge: "Affordable",
    title: "Way Less Expensive",
    description:
      "When patients save money, they stay with you longer — and tell their friends and spouses too. Out of the most difficult BHRT programs, easy to sign up, prescriptions last 3-5 months and are simple to refill.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="py-24 lg:py-32 bg-brite-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brite-teal/[0.03] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal mb-4">
              Transform How You Practice
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brite-dark tracking-tight leading-[1.1]">
              Before BRITE, it was{" "}
              <em className="italic font-normal text-brite-teal">complicated</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg text-brite-text-light leading-relaxed max-w-2xl">
              Your patients couldn&apos;t afford treatment. Revenue goals were
              difficult. It was confusing for everyone and results varied widely.
              BRITE changes all of that.
            </p>
          </ScrollReveal>
        </div>

        {/* Feature Cards */}
        <StaggerReveal className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.15}>
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl bg-white p-8 lg:p-10 shadow-sm border border-border/50 hover:shadow-xl hover:border-brite-teal/20 hover:-translate-y-1.5 transition-all duration-500 ease-out"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-brite-teal/10 text-brite-teal group-hover:bg-brite-teal group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  {feature.icon}
                </div>
                <div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-brite-teal bg-brite-teal/10 px-2.5 py-1 rounded-full mb-3">
                    {feature.badge}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-brite-dark">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-base text-brite-text-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
