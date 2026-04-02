import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/scroll-reveal";
import StaggerReveal from "@/components/ui/stagger-reveal";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Board | BRITE — 18 World-Class Experts",
  description:
    "Meet BRITE's Medical Board of 18 physicians, pharmacists, Ph.D. scientists, and medical practitioners dedicated to improving hormone therapy outcomes.",
};

const boardMembers = [
  { name: "Daved Rosensweet, M.D.", role: "Founder & Medical Director", specialty: "Endocrinology & Hormone Therapy", image: "/brand-assets/headshot-daved-rosensweet.png", transparent: true },
  { name: "Carol Petersen, RPh, CNP", role: "Board Member", specialty: "BHRT & Compounding Pharmacy", image: "/brand-assets/headshot-carol-petersen.png", transparent: true },
  { name: "Mary Lee Snodgrass, RPh", role: "Board Member", specialty: "Compounding Pharmacy", image: "https://iobim.org/wp-content/uploads/2022/11/MLS-PROF-PIC.jpeg" },
  { name: "Devaki Lindsey Berkson, DC", role: "Board Member", specialty: "Functional Medicine & Nutrition", image: "https://iobim.org/wp-content/uploads/2022/11/professional-pic-2022.jpg" },
  { name: "Jill Chmielewski, RN, BSN", role: "Board Member", specialty: "Women's Health & Aging", image: "https://iobim.org/wp-content/uploads/2022/11/Jill-Chmielewski-500.jpg" },
  { name: "Phyllis Bronson, Ph.D.", role: "Board Member", specialty: "Biochemistry & Mood Disorders", image: "https://iobim.org/wp-content/uploads/2022/10/Bronson14pic.jpg" },
  { name: "Val Koganski, MD, IFMCP", role: "Board Member", specialty: "Integrative & Holistic Medicine", image: "https://iobim.org/wp-content/uploads/2022/10/Val-Koganski-MD-600.jpg" },
  { name: "Kimberly Pryslak, MS, ACNP", role: "Board Member", specialty: "Advanced Practice Nursing", image: "https://iobim.org/wp-content/uploads/2022/10/Kimberly-Pryslak-MS-ACNP-600.jpg" },
  { name: "Jim Hrncir, RPh", role: "Board Member", specialty: "Compounding Pharmacy Pioneer", image: "https://iobim.org/wp-content/uploads/2022/10/Jim-Hrncir-RPH.png" },
  { name: "Jennifer Heiger, ND", role: "Board Member", specialty: "Naturopathic Women's Health", image: "https://iobim.org/wp-content/uploads/2022/10/Jennifer-Heiger-ND-600-300x300.jpg" },
  { name: "Frank J. Nordt, Ph.D.", role: "Board Member", specialty: "Biophysical Chemistry", image: "https://brite.live/wp-content/uploads/2022/11/Frank-J.-Nordt-PhD-600.jpg" },
  { name: 'Philip "Flip" Troiano, MD', role: "Board Member", specialty: "Functional & Regenerative Medicine", image: "https://iobim.org/wp-content/uploads/2022/10/Flip-suit-600-300x300.jpg" },
  { name: "Bruce Biundo, RPh", role: "Board Member", specialty: "Men's Health & Compounding", image: "https://iobim.org/wp-content/uploads/2022/10/Bruce-Biundo-RPh-600.jpg" },
  { name: "Beth Claxton, MD", role: "Board Member", specialty: "OB/GYN & Menopause Management", image: "https://iobim.org/wp-content/uploads/2022/10/Beth-Claxton-MD.jpg" },
  { name: "Dian Ginsberg, MD, FACOG", role: "Board Member", specialty: "OB/GYN & Healthy Aging", image: "https://iobim.org/wp-content/uploads/2022/11/Dian-bio.jpg" },
  { name: "Dr. Eugene Shippen, MD", role: "Board Member", specialty: "Endocrinology & Testosterone", image: "https://brite.live/wp-content/uploads/2023/01/DrShippen.png" },
  { name: "Holly Papanek, DO", role: "Board Member", specialty: "Internal Medicine", image: "https://brite.live/wp-content/uploads/2024/05/Dr.-Holly-Website-Photo-Cropped.jpeg" },
  { name: "Dr. Carlos Reynes", role: "Board Member", specialty: "Preventive Medicine", image: "https://brite.live/wp-content/uploads/2026/01/Dr-Carlos-Reynes-465.jpg" },
];

export default function MedicalBoardPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-24 bg-brite-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
          <div className="absolute -top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-brite-teal/8 blur-[140px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal-light mb-6">
              Medical Board
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
              18 experts.{" "}
              <em className="italic font-normal text-brite-teal-light">One mission.</em>
            </h1>
            <p className="mt-6 text-xl text-brite-cream/60 max-w-2xl mx-auto">
              Our Medical Board of Ph.D.s, scientists, pharmacists, and medical
              practitioners is committed to improving patient outcomes through
              rigorous education and ongoing support.
            </p>
          </div>
        </section>

        {/* Board Grid */}
        <section className="py-20 lg:py-24 bg-brite-cream relative overflow-hidden">
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-brite-teal/[0.03] blur-[100px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <StaggerReveal
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              stagger={0.08}
            >
              {boardMembers.map((member) => (
                <div
                  key={member.name}
                  className="group rounded-2xl bg-white overflow-hidden shadow-sm border border-border/50 hover:shadow-xl hover:border-brite-teal/20 hover:-translate-y-1.5 transition-all duration-500"
                >
                  {"transparent" in member && member.transparent ? (
                    /* Premium transparent headshot card */
                    <div className="relative h-72 overflow-hidden">
                      {/* Gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-charcoal to-brite-dark-light" />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] rounded-full bg-brite-teal/15 blur-[60px]" />
                      {/* Headshot — positioned to float from bottom */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[320px]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-contain object-bottom group-hover:scale-105 transition-transform duration-700"
                          sizes="280px"
                        />
                      </div>
                    </div>
                  ) : (
                    /* Standard photo card */
                    <div className="relative h-64 overflow-hidden bg-brite-warm-gray">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-brite-dark group-hover:text-brite-teal transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-brite-teal">{member.role}</p>
                    <p className="mt-2 text-sm text-brite-text-light">{member.specialty}</p>
                  </div>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
