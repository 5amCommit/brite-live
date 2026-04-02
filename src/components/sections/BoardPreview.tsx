import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/scroll-reveal";
import StaggerReveal from "@/components/ui/stagger-reveal";

const featuredBoard = [
  { name: "Daved Rosensweet, M.D.", role: "Founder & Medical Director", specialty: "Endocrinology & Hormone Therapy", image: "/brand-assets/headshot-daved-rosensweet-v2.png" },
  { name: "Val Koganski, MD", role: "Board Member", specialty: "Integrative & Holistic Medicine", image: "/brand-assets/headshot-val-koganski.png" },
  { name: "Jim Hrncir, RPh", role: "Board Member", specialty: "Compounding Pharmacy Pioneer", image: "/brand-assets/headshot-jim-hrncir.png" },
  { name: "Dian Ginsberg, MD", role: "Board Member", specialty: "OB/GYN & Menopause", image: "/brand-assets/headshot-dian-ginsberg.png" },
  { name: "Dr. Eugene Shippen", role: "Board Member", specialty: "Endocrinology & Testosterone", image: "/brand-assets/headshot-eugene-shippen.png" },
  { name: "Holly Papanek, DO", role: "Board Member", specialty: "Internal Medicine", image: "/brand-assets/headshot-holly-papanek.png" },
];

export default function BoardPreview() {
  return (
    <section className="py-20 lg:py-24 bg-brite-warm-gray relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brite-teal/[0.03] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal mb-4">
                Medical Board
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brite-dark tracking-tight leading-[1.1]">
                Guided by{" "}
                <em className="italic font-normal text-brite-teal">
                  world-class expertise
                </em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-brite-text-light leading-relaxed">
                Our Medical Board of 18 Ph.D.s, scientists, pharmacists, and
                medical practitioners is committed to improving patient outcomes.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <Link
              href="/medical-board"
              className="group inline-flex items-center gap-2 text-base font-semibold text-brite-teal hover:text-brite-teal-dark transition-colors duration-300 flex-shrink-0"
            >
              View All 18 Members
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>

        {/* Board Grid — floating headshots */}
        <StaggerReveal
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10"
          stagger={0.08}
        >
          {featuredBoard.map((member) => (
            <Link
              key={member.name}
              href="/medical-board"
              className="group text-center"
            >
              <div className="relative h-48 w-36 mx-auto mb-4">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-20 rounded-full bg-brite-teal/8 blur-[25px] group-hover:bg-brite-teal/20 transition-all duration-700" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain object-bottom group-hover:scale-[1.06] group-hover:-translate-y-1 transition-all duration-700 ease-out"
                  sizes="144px"
                />
              </div>
              <h3 className="font-heading text-sm font-semibold text-brite-dark group-hover:text-brite-teal transition-colors duration-300 leading-tight">
                {member.name}
              </h3>
              <p className="mt-1 text-xs text-brite-text-light">
                {member.specialty}
              </p>
            </Link>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
