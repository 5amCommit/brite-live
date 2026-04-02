import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/scroll-reveal";
import StaggerReveal from "@/components/ui/stagger-reveal";

const featuredBoard = [
  {
    name: "Daved Rosensweet, M.D.",
    role: "Founder & Medical Director",
    specialty: "Endocrinology & Hormone Therapy",
    image: "/brand-assets/headshot-daved-rosensweet.png",
    slug: "daved-rosensweet-m-d",
    transparent: true,
  },
  {
    name: "Val Koganski, MD",
    role: "Board Member",
    specialty: "Integrative & Holistic Medicine",
    image: "https://iobim.org/wp-content/uploads/2022/10/Val-Koganski-MD-600.jpg",
    slug: "val-koganski-md",
  },
  {
    name: "Jim Hrncir, RPh",
    role: "Board Member",
    specialty: "Compounding Pharmacy Pioneer",
    image: "https://iobim.org/wp-content/uploads/2022/10/Jim-Hrncir-RPH.png",
    slug: "jim-hrncir-rph",
  },
  {
    name: "Dian Ginsberg, MD",
    role: "Board Member",
    specialty: "OB/GYN & Menopause Management",
    image: "https://iobim.org/wp-content/uploads/2022/11/Dian-bio.jpg",
    slug: "dian-ginsberg-md",
  },
  {
    name: "Dr. Eugene Shippen",
    role: "Board Member",
    specialty: "Endocrinology & Testosterone",
    image: "https://brite.live/wp-content/uploads/2023/01/DrShippen.png",
    slug: "dr-eugene-shippen",
  },
  {
    name: "Holly Papanek, DO",
    role: "Board Member",
    specialty: "Internal Medicine",
    image: "https://brite.live/wp-content/uploads/2024/05/Dr.-Holly-Website-Photo-Cropped.jpeg",
    slug: "holly-papanek-do",
  },
];

export default function BoardPreview() {
  return (
    <section className="py-24 lg:py-32 bg-brite-warm-gray relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brite-teal/[0.03] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
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
                medical practitioners is committed to improving patient outcomes
                through rigorous research and education.
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
          </ScrollReveal>
        </div>

        {/* Board Grid with stagger */}
        <StaggerReveal
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          stagger={0.1}
        >
          {featuredBoard.map((member) => (
            <Link
              key={member.slug}
              href={`/medical-board/${member.slug}`}
              className="group relative rounded-2xl bg-white overflow-hidden shadow-sm border border-border/50 hover:shadow-xl hover:border-brite-teal/20 hover:-translate-y-2 transition-all duration-500 ease-out"
            >
              {/* Photo */}
              {"transparent" in member && member.transparent ? (
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-charcoal to-brite-dark-light" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] rounded-full bg-brite-teal/15 blur-[60px]" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[320px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain object-bottom group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="280px"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                </div>
              )}

              {/* Info */}
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-brite-dark group-hover:text-brite-teal transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-brite-teal">
                  {member.role}
                </p>
                <p className="mt-2 text-sm text-brite-text-light">
                  {member.specialty}
                </p>
              </div>
            </Link>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
