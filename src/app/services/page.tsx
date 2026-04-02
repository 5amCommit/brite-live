import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/scroll-reveal";
import StaggerReveal from "@/components/ui/stagger-reveal";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | BRITE — Bio-Identical Hormone Therapy",
  description:
    "Learn how BRITE's compounded bio-identical hormone replacement therapy works. Personalized formulations, organic bases, advanced decision support, and compliance tools.",
};

const symptoms = {
  women: [
    "Hot flashes & night sweats",
    "Difficulty sleeping & anxiety",
    "Mood swings & irritability",
    "Memory loss & brain fog",
    "Low libido & discomfort during intimacy",
    "Weight gain & metabolism changes",
    "Fatigue & low energy",
    "Muscle loss & weakness",
    "Hair thinning or loss",
    "Decreased skin vibrancy",
  ],
  men: [
    "Erectile dysfunction & low libido",
    "Loss of muscle mass & bone density",
    "Weight gain",
    "Low energy & mood fluctuations",
    "Decreased motivation & mental clarity",
    "Loss of bladder control",
    "General sense of losing vitality",
    "Reduced body hair growth",
  ],
};

const steps = [
  {
    number: "01",
    title: "Schedule Your Discovery Call",
    description:
      "Connect with a cBHRT specialist to assess if you're a candidate, discuss the program, and answer any initial questions.",
  },
  {
    number: "02",
    title: "Complete Your Medical Consultation",
    description:
      "Share your detailed health history and book a consultation with one of our highly trained medical providers.",
  },
  {
    number: "03",
    title: "Begin Your Hormone Therapy",
    description:
      "Your provider prescribes personalized hormones using our organic formulations, delivered straight to your home.",
  },
  {
    number: "04",
    title: "Ongoing Support & Monitoring",
    description:
      "Easily reorder prescriptions and consult with your medical provider as needed. The app tracks dosages and sends reminders.",
  },
];

const benefits = [
  "Oil-based topical application — no needles, no pellets",
  "Patented formula for efficient absorption into the bloodstream",
  "Precise dosing tailored to individual hormone needs",
  "100% USDA Certified Organic Jojoba oil base",
  "Minimizes the need for frequent clinic visits",
  "Bypasses the digestive system — no gastrointestinal side effects",
  "Convenient at-home application",
  "Prescriptions last 3-5 months with easy refills",
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-brite-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
          <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-brite-teal/10 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal-light mb-4">
              How It Works
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
              Hormone health,{" "}
              <em className="italic font-normal text-brite-teal-light">made simple</em>
            </h1>
            <p className="mt-6 text-lg text-brite-cream/70 max-w-2xl mx-auto leading-relaxed">
              Aging is natural, but hormone imbalance isn&apos;t. Our compounded
              bio-identical hormone therapy restores balance with plant-based
              compounds that mimic your body&apos;s natural hormones.
            </p>
          </div>
        </section>

        {/* Symptoms Section */}
        <section className="py-24 lg:py-32 bg-brite-cream">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal mb-4">
                  Recognizing the Signs
                </p>
                <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brite-dark tracking-tight leading-[1.1]">
                  Are you experiencing{" "}
                  <em className="italic font-normal text-brite-teal">
                    any of these?
                  </em>
                </h2>
                <p className="mt-6 text-lg text-brite-text-light leading-relaxed">
                  As we age, our bodies produce less of the hormones that help us
                  feel and perform our best. This decline can significantly impact
                  your physical, mental, and emotional health.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="rounded-2xl bg-white p-8 lg:p-10 border border-border/50 shadow-sm">
                  <h3 className="font-heading text-2xl font-semibold text-brite-dark mb-6">
                    Symptoms in Women
                  </h3>
                  <ul className="space-y-3">
                    {symptoms.women.map((s) => (
                      <li key={s} className="flex items-start gap-3 text-brite-text-light">
                        <svg className="h-5 w-5 text-brite-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="rounded-2xl bg-white p-8 lg:p-10 border border-border/50 shadow-sm">
                  <h3 className="font-heading text-2xl font-semibold text-brite-dark mb-6">
                    Symptoms in Men
                  </h3>
                  <ul className="space-y-3">
                    {symptoms.men.map((s) => (
                      <li key={s} className="flex items-start gap-3 text-brite-text-light">
                        <svg className="h-5 w-5 text-brite-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 4-Step Process */}
        <section className="py-24 lg:py-32 bg-brite-warm-gray">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-3xl mb-16">
                <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal mb-4">
                  Your Path to Balance
                </p>
                <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brite-dark tracking-tight leading-[1.1]">
                  Four simple steps to{" "}
                  <em className="italic font-normal text-brite-teal">
                    feeling like yourself
                  </em>
                </h2>
              </div>
            </ScrollReveal>

            <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.12}>
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="group rounded-2xl bg-white p-8 border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500"
                >
                  <span className="font-heading text-5xl font-bold text-brite-teal/20 group-hover:text-brite-teal/40 transition-colors duration-500">
                    {step.number}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-brite-dark mt-4">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-brite-text-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* Product Benefits */}
        <section className="py-24 lg:py-32 bg-brite-cream">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal mb-4">
                    The BRITE Difference
                  </p>
                  <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brite-dark tracking-tight leading-[1.1]">
                    100% organic.{" "}
                    <em className="italic font-normal text-brite-teal">
                      Zero compromise.
                    </em>
                  </h2>
                  <p className="mt-6 text-lg text-brite-text-light leading-relaxed">
                    Your patients rub more than a quart of product into their skin
                    every year. 95% of that is base. Most bases contain olefins
                    and toxic solvents. Ours uses 100% USDA Certified Organic
                    Jojoba oil — zero artificial additives.
                  </p>
                  <ul className="mt-8 space-y-3">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-brite-text">
                        <svg className="h-5 w-5 text-brite-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="flex justify-center">
                  <Image
                    src="/brand-assets/product-bottle.webp"
                    alt="BRITE organic bio-identical hormone formulation — Progesterone 200mg/30ml"
                    width={400}
                    height={500}
                    className="rounded-2xl"
                    style={{
                      filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))",
                    }}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-brite-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brite-teal/10 blur-[100px]" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                Ready to feel like yourself{" "}
                <em className="italic font-normal text-brite-teal-light">again?</em>
              </h2>
              <p className="mt-6 text-lg text-brite-cream/70 max-w-2xl mx-auto">
                Don&apos;t accept hormone imbalance as part of aging. cBHRT can
                help you restore balance, energy, and confidence.
              </p>
              <div className="mt-10">
                <Link
                  href="/getting-started"
                  className="group inline-flex items-center justify-center rounded-full bg-brite-teal px-8 py-4 text-base font-semibold text-white hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(59,168,154,0.4)] transition-all duration-300"
                >
                  Get Started
                  <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
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
