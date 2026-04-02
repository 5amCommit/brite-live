import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/scroll-reveal";
import Counter from "@/components/ui/counter";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BRITE | Our Story & Mission",
  description:
    "BRITE has been transforming hormone health since 2009. Led by Dr. Daved Rosensweet and a Medical Board of 18 experts, we deliver organic bio-identical hormone therapy.",
};

const timeline = [
  { year: "2009", event: "BRITE founded with a mission to make hormone replenishment elegant, effective, and accessible" },
  { year: "2011", event: "Developed proprietary organic oil-based formulations using USDA Certified Organic Jojoba oil" },
  { year: "2015", event: "Built advanced decision support systems for personalized hormone dosing" },
  { year: "2018", event: "Launched mobile compliance app — patients are reminded what to take, when to take it" },
  { year: "2022", event: "Expanded Medical Board to 18 world-class physicians, pharmacists, and scientists" },
  { year: "2024", event: "Partnered with Prime IV Hydration & Wellness to bring cBHRT to clinics nationwide" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero — more breathing room */}
        <section className="relative pt-40 pb-28 lg:pt-48 lg:pb-36 bg-brite-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[700px] h-[700px] rounded-full bg-brite-teal/8 blur-[140px] animate-[pulse_10s_ease-in-out_infinite]" />
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-brite-gold/5 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal-light mb-6">
                About BRITE
              </p>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
                Making hormone health{" "}
                <em className="italic font-normal text-brite-teal-light">
                  elegant
                </em>
              </h1>
              <p className="mt-8 text-xl text-brite-cream/60 leading-relaxed max-w-2xl">
                Since 2009, BRITE has been on a mission to make bio-identical
                hormone replenishment as simple and effective as possible — the
                correct amount of each hormone, at the right time of day, applied
                to the right places.
              </p>
              <div className="mt-12 w-px h-16 bg-gradient-to-b from-brite-teal-light/40 to-transparent" />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-brite-warm-gray border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <p className="font-heading text-4xl font-bold text-brite-dark">
                  <Counter target={17} suffix="+" />
                </p>
                <p className="mt-2 text-sm text-brite-text-light">Years in Practice</p>
              </div>
              <div>
                <p className="font-heading text-4xl font-bold text-brite-dark">
                  <Counter target={18} />
                </p>
                <p className="mt-2 text-sm text-brite-text-light">Board Experts</p>
              </div>
              <div>
                <p className="font-heading text-4xl font-bold text-brite-dark">
                  <Counter target={100} suffix="%" />
                </p>
                <p className="mt-2 text-sm text-brite-text-light">Organic Base</p>
              </div>
              <div>
                <p className="font-heading text-4xl font-bold text-brite-dark">
                  <Counter target={0} />
                </p>
                <p className="mt-2 text-sm text-brite-text-light">Artificial Additives</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pull Quote */}
        <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brite-teal via-brite-green to-brite-teal-light" />
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <ScrollReveal>
              <blockquote className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brite-dark leading-[1.15] tracking-tight text-right">
                &ldquo;Our goal is to make hormone replenishment as{" "}
                <em className="italic font-normal text-brite-teal">
                  elegant
                </em>{" "}
                as possible.&rdquo;
              </blockquote>
              <p className="mt-6 text-brite-text-light text-lg text-right">
                — Daved Rosensweet, M.D., Founder & Medical Director
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 lg:py-32 bg-brite-cream">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ScrollReveal>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal mb-4">
                    Our Mission
                  </p>
                  <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brite-dark tracking-tight leading-[1.1]">
                    Before BRITE, it was{" "}
                    <em className="italic font-normal text-brite-teal">
                      complicated
                    </em>
                  </h2>
                  <p className="mt-6 text-lg text-brite-text-light leading-relaxed">
                    Patients couldn&apos;t afford treatment. Practice revenue goals
                    were difficult. It was confusing for everyone and results
                    varied widely.
                  </p>
                  <p className="mt-4 text-lg text-brite-text-light leading-relaxed">
                    By switching to our proven formulas and our unique model,
                    practices dramatically reduce their patients&apos; total expenses
                    and significantly increase their revenue — with patients back
                    online and renewed, more money, and a happier staff.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal mb-4">
                    Our Approach
                  </p>
                  <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brite-dark tracking-tight leading-[1.1]">
                    Why organic{" "}
                    <em className="italic font-normal text-brite-teal">
                      matters
                    </em>
                  </h2>
                  <p className="mt-6 text-lg text-brite-text-light leading-relaxed">
                    Your typical hormone replenishment patient rubs more than a
                    quart of product into their skin every year. 95% of that
                    quart is base.
                  </p>
                  <p className="mt-4 text-lg text-brite-text-light leading-relaxed">
                    That base nearly always contains olefins, potentially toxic
                    solvents, and chemical additives. We use only 100% USDA
                    Certified Organic oil bases, and our products contain zero
                    artificial flavors. Same hormones, quicker delivery.
                    It&apos;s that simple.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 lg:py-32 bg-brite-warm-gray">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal mb-4">
                  Our Journey
                </p>
                <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brite-dark tracking-tight leading-[1.1]">
                  17+ years of{" "}
                  <em className="italic font-normal text-brite-teal">
                    innovation
                  </em>
                </h2>
              </div>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.1}>
                  <div className="flex gap-6 pb-10 last:pb-0">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brite-teal text-white font-heading font-bold text-sm flex-shrink-0">
                        {item.year.slice(2)}
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="w-px flex-1 bg-brite-teal/20 mt-2" />
                      )}
                    </div>
                    <div className="pt-2.5 pb-4">
                      <p className="font-heading text-lg font-semibold text-brite-dark">
                        {item.year}
                      </p>
                      <p className="mt-1 text-base text-brite-text-light leading-relaxed">
                        {item.event}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal mb-4">
                  Our Story
                </p>
                <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brite-dark tracking-tight leading-[1.1]">
                  See what drives{" "}
                  <em className="italic font-normal text-brite-teal">BRITE</em>
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/392276067?h=f6a799e1ef&title=0&byline=0&portrait=0"
                  className="absolute inset-0 w-full h-full"
                  allow="fullscreen"
                  allowFullScreen
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Medical Board CTA — dark premium section */}
        <section className="py-28 lg:py-36 bg-brite-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brite-teal/10 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal-light mb-6">
                Medical Board
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                Backed by{" "}
                <em className="italic font-normal text-brite-teal-light">
                  18 world-class experts
                </em>
              </h2>
              <p className="mt-8 text-xl text-brite-cream/60 leading-relaxed max-w-2xl mx-auto">
                Our Medical Board of Ph.D.s, scientists, pharmacists, and medical
                practitioners is committed to improving patient outcomes through
                rigorous education, ongoing care, training, and support.
              </p>
              <div className="mt-12">
                <Link
                  href="/medical-board"
                  className="group inline-flex items-center justify-center rounded-full bg-brite-teal px-10 py-5 text-lg font-semibold text-white hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(59,168,154,0.4)] transition-all duration-300"
                >
                  Meet the Board
                  <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
