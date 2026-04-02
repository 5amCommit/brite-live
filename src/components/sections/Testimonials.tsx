import ScrollReveal from "@/components/ui/scroll-reveal";
import StaggerReveal from "@/components/ui/stagger-reveal";

const testimonials = [
  {
    quote:
      "BRITE completely changed my understanding of hormone health. The personalized approach and the expertise of their Medical Board gave me confidence I never had with other providers.",
    name: "Sarah M.",
    detail: "Patient since 2019",
  },
  {
    quote:
      "After struggling with menopause symptoms for years, I finally found a team that listened. The bio-identical hormones have made an incredible difference in my quality of life.",
    name: "Linda K.",
    detail: "Patient since 2021",
  },
  {
    quote:
      "The application process was so much simpler than I expected. The team walked me through everything — the right dose, the right timing, how to apply. I felt supported from day one.",
    name: "James R.",
    detail: "Patient since 2022",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-brite-dark relative overflow-hidden">
      {/* Animated background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brite-teal/5 blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brite-green/5 blur-[100px] animate-[pulse_10s_ease-in-out_infinite_3s]" />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal-light mb-4">
              Patient Stories
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Real results,{" "}
              <em className="italic font-normal text-brite-teal-light">
                real lives
              </em>
            </h2>
          </ScrollReveal>
        </div>

        {/* Testimonial Cards with stagger */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.15}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1 transition-all duration-500 ease-out"
            >
              {/* Quote Mark */}
              <svg
                className="h-8 w-8 text-brite-teal/30 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>

              <blockquote className="text-base text-brite-cream/80 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-brite-cream/50 mt-1">
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
