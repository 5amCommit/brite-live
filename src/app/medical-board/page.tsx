import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/scroll-reveal";
import StaggerReveal from "@/components/ui/stagger-reveal";
import Counter from "@/components/ui/counter";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Board | BRITE — 18 World-Class Experts",
  description:
    "Meet BRITE's Medical Board of 18 physicians, pharmacists, Ph.D. scientists, and medical practitioners dedicated to improving hormone therapy outcomes.",
};

const founder = {
  name: "Daved Rosensweet, M.D.",
  role: "Founder & Medical Director",
  specialty: "Endocrinology & Hormone Therapy",
  image: "/brand-assets/headshot-daved-rosensweet.png",
  bio: "Dr. Rosensweet has practiced medicine since 1971, graduating from the University of Michigan Medical School in 1968. A pioneer in bio-identical hormone therapy, he trained the first nurse practitioners in the US and directed health promotion for the state of New Mexico. His vision drives every aspect of BRITE.",
};

const boardMembers = [
  { name: "Carol Petersen, RPh, CNP", specialty: "BHRT & Compounding Pharmacy", image: "/brand-assets/headshot-carol-petersen.png", credentials: "University of Wisconsin School of Pharmacy" },
  { name: "Mary Lee Snodgrass, RPh", specialty: "Compounding Pharmacy", image: "/brand-assets/headshot-mary-lee-snodgrass.png", credentials: "University of Kentucky, 39+ years experience" },
  { name: "Devaki Lindsey Berkson, DC", specialty: "Functional Medicine & Nutrition", image: "/brand-assets/headshot-devaki-berkson.png", credentials: "Doctor of Chiropractic, DACBN" },
  { name: "Jill Chmielewski, RN, BSN", specialty: "Women's Health & Aging", image: "/brand-assets/headshot-jill-chmielewski.png", credentials: "RN, BSN, Certified Health Coach" },
  { name: "Phyllis Bronson, Ph.D.", specialty: "Biochemistry & Mood Disorders", image: "/brand-assets/headshot-phyllis-bronson.png", credentials: "Ph.D. Biochemistry, Aspen, CO" },
  { name: "Val Koganski, MD, IFMCP", specialty: "Integrative & Holistic Medicine", image: "/brand-assets/headshot-val-koganski.png", credentials: "Philadelphia Top Doctor 2017-2022" },
  { name: "Kimberly Pryslak, MS, ACNP", specialty: "Advanced Practice Nursing", image: "/brand-assets/headshot-kimberly-pryslak.png", credentials: "Columbia University, 25+ years" },
  { name: "Jim Hrncir, RPh", specialty: "Compounding Pharmacy Pioneer", image: "/brand-assets/headshot-jim-hrncir.png", credentials: "PCCA Pharmacist of the Year 2017" },
  { name: "Jennifer Heiger, ND", specialty: "Naturopathic Women's Health", image: "/brand-assets/headshot-jennifer-heiger.png", credentials: "Board-certified, LA & Silicon Valley" },
  { name: "Frank J. Nordt, Ph.D.", specialty: "Biophysical Chemistry", image: "/brand-assets/headshot-frank-nordt.png", credentials: "CEO, Rhein Consulting Laboratories" },
  { name: 'Philip "Flip" Troiano, MD', specialty: "Functional & Regenerative Medicine", image: "/brand-assets/headshot-philip-troiano.png", credentials: "Board-certified Emergency Medicine" },
  { name: "Bruce Biundo, RPh", specialty: "Men's Health & Compounding", image: "/brand-assets/headshot-bruce-biundo.png", credentials: "Pioneer in low testosterone education" },
  { name: "Beth Claxton, MD", specialty: "OB/GYN & Menopause", image: "/brand-assets/headshot-beth-claxton.png", credentials: "25 years, international experience" },
  { name: "Dian Ginsberg, MD, FACOG", specialty: "OB/GYN & Healthy Aging", image: "/brand-assets/headshot-dian-ginsberg.png", credentials: "FACOG, Houston, TX" },
  { name: "Dr. Eugene Shippen, MD", specialty: "Endocrinology & Testosterone", image: "/brand-assets/headshot-eugene-shippen.png", credentials: "Author, The Testosterone Syndrome" },
  { name: "Holly Papanek, DO", specialty: "Internal Medicine", image: "/brand-assets/headshot-holly-papanek.png", credentials: "Board-certified, 25 years" },
  { name: "Dr. Carlos Reynes", specialty: "Preventive Medicine", image: "/brand-assets/headshot-carlos-reynes.png", credentials: "Internal Medicine, 30+ years" },
];

export default function MedicalBoardPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-24 bg-brite-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
          <div className="absolute -top-1/4 left-1/3 w-[700px] h-[700px] rounded-full bg-brite-teal/8 blur-[140px] animate-[pulse_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brite-gold/5 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal-light mb-6">
              Medical Board
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
              18 experts.{" "}
              <em className="italic font-normal text-brite-teal-light">One mission.</em>
            </h1>
            <p className="mt-6 text-xl text-brite-cream/60 max-w-2xl mx-auto">
              Ph.D.s, scientists, pharmacists, and medical practitioners
              committed to improving patient outcomes through rigorous
              education and ongoing support.
            </p>
            {/* Mini stats */}
            <div className="mt-12 flex items-center justify-center gap-12">
              <div>
                <p className="font-heading text-3xl font-bold text-white"><Counter target={18} duration={1.5} /></p>
                <p className="text-xs text-brite-cream/50 mt-1">Board Members</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="font-heading text-3xl font-bold text-white"><Counter target={500} suffix="+" duration={2} /></p>
                <p className="text-xs text-brite-cream/50 mt-1">Combined Years</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="font-heading text-3xl font-bold text-white"><Counter target={6} duration={1} /></p>
                <p className="text-xs text-brite-cream/50 mt-1">Disciplines</p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Spotlight */}
        <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-brite-teal/[0.03] blur-[100px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Founder headshot */}
                <div className="relative flex justify-center">
                  <div className="relative h-[450px] w-[360px]">
                    {/* Decorative elements */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-t from-brite-teal/10 to-transparent blur-[50px]" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-1 bg-gradient-to-r from-transparent via-brite-teal/30 to-transparent" />
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-contain object-bottom"
                      sizes="360px"
                      priority
                    />
                  </div>
                </div>
                {/* Founder info */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal mb-4">
                    Meet Our Founder
                  </p>
                  <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brite-dark tracking-tight leading-[1.1]">
                    {founder.name}
                  </h2>
                  <p className="mt-2 text-lg font-medium text-brite-teal">
                    {founder.role}
                  </p>
                  <p className="mt-6 text-base text-brite-text-light leading-relaxed">
                    {founder.bio}
                  </p>
                  <div className="mt-8 flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brite-teal" />
                      <span className="text-sm text-brite-text">50+ years in medicine</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brite-teal" />
                      <span className="text-sm text-brite-text">University of Michigan</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Board Grid */}
        <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-brite-teal/[0.03] blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal mb-4">
                  The Full Board
                </p>
                <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brite-dark tracking-tight leading-[1.1]">
                  17 specialists.{" "}
                  <em className="italic font-normal text-brite-teal">Every discipline.</em>
                </h2>
              </div>
            </ScrollReveal>

            <StaggerReveal
              className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              stagger={0.06}
            >
              {boardMembers.map((member) => (
                <div
                  key={member.name}
                  className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-brite-cream to-white border border-border/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Teal accent bar — bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brite-teal via-brite-green to-brite-teal-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-end gap-5 p-6">
                    {/* Headshot */}
                    <div className="relative h-40 w-32 flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-contain object-bottom group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                        sizes="128px"
                      />
                    </div>
                    {/* Info — beside the headshot */}
                    <div className="pb-2">
                      <h3 className="font-heading text-base font-semibold text-brite-dark group-hover:text-brite-teal transition-colors duration-300 leading-tight">
                        {member.name}
                      </h3>
                      <p className="mt-1.5 text-xs text-brite-teal font-medium">
                        {member.specialty}
                      </p>
                      <p className="mt-2 text-[11px] text-brite-text-light leading-relaxed">
                        {member.credentials}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 lg:py-28 bg-brite-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brite-teal/10 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <ScrollReveal>
              <blockquote className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight">
                &ldquo;We are committed to creating systems and tools to make the process{" "}
                <em className="italic font-normal text-brite-teal-light">
                  clearer and more straightforward.
                </em>
                &rdquo;
              </blockquote>
              <p className="mt-6 text-brite-cream/50">— BRITE Medical Board Mission</p>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
