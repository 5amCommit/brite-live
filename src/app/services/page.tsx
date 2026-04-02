import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/scroll-reveal";
import StaggerReveal from "@/components/ui/stagger-reveal";
import Counter from "@/components/ui/counter";
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
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Complete Your Medical Consultation",
    description:
      "Share your detailed health history and book a consultation with one of our highly trained medical providers.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Begin Your Hormone Therapy",
    description:
      "Your provider prescribes personalized hormones using our organic formulations, delivered straight to your home.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Ongoing Support & Monitoring",
    description:
      "Easily reorder prescriptions and consult with your medical provider as needed. The app tracks dosages and sends reminders.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
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
        {/* Hero — taller, more breathing room */}
        <section className="relative pt-40 pb-28 lg:pt-48 lg:pb-36 bg-brite-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
          <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-brite-teal/8 blur-[140px] animate-[pulse_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-brite-gold/5 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal-light mb-6">
              How It Works
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] max-w-4xl mx-auto">
              Hormone health,{" "}
              <em className="italic font-normal text-brite-teal-light">made simple</em>
            </h1>
            <p className="mt-8 text-xl text-brite-cream/60 max-w-2xl mx-auto leading-relaxed">
              Aging is natural, but hormone imbalance isn&apos;t. Our compounded
              bio-identical hormone therapy restores balance with plant-based
              compounds that mimic your body&apos;s natural hormones.
            </p>
            {/* Decorative line */}
            <div className="mt-12 mx-auto w-px h-16 bg-gradient-to-b from-brite-teal-light/40 to-transparent" />
          </div>
        </section>

        {/* Pull Quote — visual break */}
        <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brite-teal via-brite-green to-brite-teal-light" />
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <ScrollReveal>
              <blockquote className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brite-dark leading-[1.15] tracking-tight">
                &ldquo;It&apos;s not just what we prescribe that matters —
                it&apos;s what they{" "}
                <em className="italic font-normal text-brite-teal">
                  remember to apply.
                </em>
                &rdquo;
              </blockquote>
              <p className="mt-6 text-brite-text-light text-lg">
                — The BRITE philosophy on patient compliance
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Symptoms Section */}
        <section className="py-24 lg:py-32 bg-brite-cream relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brite-teal/[0.03] blur-[100px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal mb-4">
                  Recognizing the Signs
                </p>
                <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brite-dark tracking-tight leading-[1.1]">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              <ScrollReveal delay={0.1}>
                <div className="rounded-2xl bg-white p-8 lg:p-10 border border-border/50 shadow-sm hover:shadow-lg transition-shadow duration-500">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-brite-teal/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-brite-teal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-brite-dark">
                      Symptoms in Women
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {symptoms.women.map((s) => (
                      <li key={s} className="flex items-start gap-3 text-brite-text-light">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brite-teal flex-shrink-0" />
                        <span className="text-[15px] leading-relaxed">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="rounded-2xl bg-white p-8 lg:p-10 border border-border/50 shadow-sm hover:shadow-lg transition-shadow duration-500">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-brite-teal/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-brite-teal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-brite-dark">
                      Symptoms in Men
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {symptoms.men.map((s) => (
                      <li key={s} className="flex items-start gap-3 text-brite-text-light">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brite-teal flex-shrink-0" />
                        <span className="text-[15px] leading-relaxed">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Closing callout */}
            <ScrollReveal delay={0.3}>
              <p className="mt-12 text-center text-lg text-brite-text leading-relaxed max-w-2xl mx-auto">
                If these symptoms sound familiar, you don&apos;t have to accept
                them as part of aging.{" "}
                <span className="font-semibold text-brite-teal">
                  cBHRT can help you restore balance, energy, and confidence.
                </span>
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 4-Step Process — with connecting lines */}
        <section className="py-24 lg:py-32 bg-brite-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-brite-teal/5 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal-light mb-4">
                  Your Path to Balance
                </p>
                <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                  Four simple steps to{" "}
                  <em className="italic font-normal text-brite-teal-light">
                    feeling like yourself
                  </em>
                </h2>
              </div>
            </ScrollReveal>

            <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.12}>
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className="group relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/[0.08] hover:border-brite-teal/30 hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Connecting line on desktop */}
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-12 -right-3 w-6 h-px bg-gradient-to-r from-white/20 to-transparent" />
                  )}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brite-teal/20 text-brite-teal-light group-hover:bg-brite-teal group-hover:text-white transition-all duration-500">
                      {step.icon}
                    </div>
                    <span className="font-heading text-4xl font-bold text-white/10 group-hover:text-brite-teal/30 transition-colors duration-500">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-brite-cream/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* Stat Break */}
        <section className="py-16 bg-white border-y border-border/50">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <p className="font-heading text-4xl font-bold text-brite-dark"><Counter target={95} suffix="%" /></p>
                <p className="mt-2 text-sm text-brite-text-light">Of most bases are<br />toxic solvents</p>
              </div>
              <div>
                <p className="font-heading text-4xl font-bold text-brite-teal"><Counter target={100} suffix="%" /></p>
                <p className="mt-2 text-sm text-brite-text-light">USDA Certified<br />Organic base</p>
              </div>
              <div>
                <p className="font-heading text-4xl font-bold text-brite-dark"><Counter target={1} suffix=" qt+" /></p>
                <p className="mt-2 text-sm text-brite-text-light">Rubbed into skin<br />per year</p>
              </div>
              <div>
                <p className="font-heading text-4xl font-bold text-brite-teal"><Counter target={0} /></p>
                <p className="mt-2 text-sm text-brite-text-light">Artificial<br />additives</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Benefits — with product image */}
        <section className="py-24 lg:py-32 bg-brite-cream relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brite-green/[0.03] blur-[100px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
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
                  <div className="mt-10 space-y-4">
                    {benefits.map((b) => (
                      <div key={b} className="flex items-start gap-3">
                        <svg className="h-5 w-5 text-brite-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-[15px] text-brite-text leading-relaxed">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="relative flex justify-center">
                  {/* Decorative circle behind product */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-80 h-80 rounded-full border border-brite-teal/10" />
                    <div className="absolute w-96 h-96 rounded-full border border-brite-teal/5" />
                  </div>
                  <Image
                    src="/brand-assets/product-bottle.webp"
                    alt="BRITE organic bio-identical hormone formulation — Progesterone 200mg/30ml"
                    width={380}
                    height={480}
                    className="relative z-10"
                    style={{
                      filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.2))",
                    }}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-24 lg:py-32 bg-brite-warm-gray">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal mb-4">
                  See BRITE in Action
                </p>
                <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brite-dark tracking-tight leading-[1.1]">
                  Watch how{" "}
                  <em className="italic font-normal text-brite-teal">it works</em>
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/791338484?title=0&byline=0&portrait=0"
                  className="absolute inset-0 w-full h-full"
                  allow="fullscreen"
                  allowFullScreen
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 lg:py-36 bg-brite-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brite-teal/10 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                Ready to feel like yourself{" "}
                <em className="italic font-normal text-brite-teal-light">again?</em>
              </h2>
              <p className="mt-8 text-xl text-brite-cream/60 max-w-2xl mx-auto leading-relaxed">
                Don&apos;t accept hormone imbalance as part of aging. cBHRT can
                help you restore balance, energy, and confidence.
              </p>
              <div className="mt-12">
                <Link
                  href="/getting-started"
                  className="group inline-flex items-center justify-center rounded-full bg-brite-teal px-10 py-5 text-lg font-semibold text-white hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(59,168,154,0.4)] transition-all duration-300"
                >
                  Get Started Today
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
