"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/scroll-reveal";
import Link from "next/link";

const faqs = [
  {
    q: "What is Compounded Bio-Identical Hormone Replacement Therapy (cBHRT)?",
    a: "cBHRT is a natural approach to restoring hormonal balance using compounded bio-identical hormones that are chemically identical to those your body produces. Unlike synthetic hormones, bio-identical hormones are derived from plant-based compounds and custom-compounded to your individual needs. They help alleviate symptoms of hormonal imbalance and improve overall well-being.",
  },
  {
    q: "How do I know if I need cBHRT?",
    a: "If you're experiencing symptoms like fatigue, mood swings, sleep disturbances, weight gain, low libido, brain fog, hot flashes, night sweats, anxiety, or muscle loss — you may have a hormonal imbalance. A discovery call with our specialists can help determine if cBHRT is right for you through a detailed health history and consultation.",
  },
  {
    q: "What makes BRITE different from other hormone therapies?",
    a: "BRITE uses a patented, solvent-free formulation with a 100% USDA Certified Organic Jojoba oil base. Most hormone products use bases containing olefins and toxic solvents — patients rub over a quart of product into their skin annually, and 95% of that is base. Our organic base ensures safer absorption with zero artificial additives. We also provide advanced decision support systems for personalized dosing and a compliance app that reminds patients when and how to apply.",
  },
  {
    q: "How is cBHRT applied?",
    a: "Our cBHRT product is a simple, topical oil-based application — no needles, no pellets, no hassle. You apply it to specific areas of your skin as directed by your provider. It absorbs quickly through the skin and allows for precise, individualized dosing. Each hormone has its own application spots for optimal absorption.",
  },
  {
    q: "How long does it take to see results?",
    a: "Many patients begin noticing improvements within a few weeks, but full results can take a few months as hormone levels stabilize. Your provider will monitor your progress and adjust dosages as needed through our advanced decision support system.",
  },
  {
    q: "Is cBHRT safe?",
    a: "Yes, when monitored by trained professionals, cBHRT is a safe and effective way to restore hormonal balance. BRITE's Medical Board of 18 physicians, pharmacists, and scientists oversees all protocols. Our specialists are highly trained in cBHRT and will guide you throughout your treatment.",
  },
  {
    q: "How much does the program cost?",
    a: "BRITE is designed to be significantly more affordable than traditional BHRT programs. Prescriptions last 3-5 months and are easy to refill. When patients save money, they stay longer and tell their friends and family. Full program details and pricing are available during your discovery call.",
  },
  {
    q: "What's the process to get started?",
    a: "It's simple: (1) Schedule a discovery call to see if you're a candidate, (2) Complete a medical consultation and share your health history, (3) Begin personalized hormone therapy delivered to your home, (4) Enjoy ongoing support with easy reorders and provider consultations as needed.",
  },
  {
    q: "Do I need to visit a clinic?",
    a: "BRITE minimizes the need for frequent clinic visits. Your personalized hormones are delivered directly to your home. Our mobile app handles dosage reminders, scheduling, and compliance tracking. You consult with your provider as needed, but the day-to-day application is simple and done at home.",
  },
  {
    q: "What hormones does BRITE provide?",
    a: "BRITE provides a range of bio-identical hormones including testosterone, progesterone, estradiol, and others based on your individual needs. Every formulation is custom-compounded by specialized pharmacists using our organic oil base. Your provider determines the right combination and dosage through our advanced decision support system.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl bg-white border transition-all duration-500 ${
        open
          ? "border-brite-teal/30 shadow-lg shadow-brite-teal/5"
          : "border-border/50 shadow-sm hover:shadow-md"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 p-6 lg:p-8 text-left cursor-pointer"
      >
        <div className="flex items-start gap-4">
          <span className="font-heading text-sm font-bold text-brite-teal/40 mt-1 flex-shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-heading text-lg font-semibold text-brite-dark pr-4">
            {q}
          </h3>
        </div>
        <div
          className={`flex-shrink-0 mt-1 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            open ? "bg-brite-teal text-white rotate-180" : "bg-brite-teal/10 text-brite-teal"
          }`}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 lg:px-8 pb-6 lg:pb-8 pl-16 lg:pl-20">
          <p className="text-[15px] text-brite-text-light leading-relaxed">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-40 pb-28 lg:pt-48 lg:pb-36 bg-brite-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
          <div className="absolute -top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-brite-teal/8 blur-[140px] animate-[pulse_10s_ease-in-out_infinite]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal-light mb-6">
              FAQ
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
              Frequently asked{" "}
              <em className="italic font-normal text-brite-teal-light">questions</em>
            </h1>
            <p className="mt-8 text-xl text-brite-cream/60 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about bio-identical hormone therapy
              with BRITE.
            </p>
            <div className="mt-12 mx-auto w-px h-16 bg-gradient-to-b from-brite-teal-light/40 to-transparent" />
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-24 lg:py-32 bg-brite-cream relative overflow-hidden">
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-brite-teal/[0.03] blur-[100px]" />
          <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <ScrollReveal key={faq.q} delay={i * 0.05}>
                  <FaqItem q={faq.q} a={faq.a} index={i} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 lg:py-36 bg-brite-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brite-teal/10 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                Still have{" "}
                <em className="italic font-normal text-brite-teal-light">questions?</em>
              </h2>
              <p className="mt-6 text-xl text-brite-cream/60 leading-relaxed">
                Our team is here to help you understand if cBHRT is right for you.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-full bg-brite-teal px-10 py-5 text-lg font-semibold text-white hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(59,168,154,0.4)] transition-all duration-300"
                >
                  Contact Us
                </Link>
                <Link
                  href="/getting-started"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-10 py-5 text-lg font-medium text-white hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                >
                  Schedule a Discovery Call
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
