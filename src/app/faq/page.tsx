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

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/80">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-6 text-left cursor-pointer"
      >
        <h3 className="font-heading text-lg font-semibold text-brite-dark pr-4">
          {q}
        </h3>
        <svg
          className={`h-5 w-5 text-brite-teal flex-shrink-0 mt-1 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-base text-brite-text-light leading-relaxed pr-12">
          {a}
        </p>
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
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-brite-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
          <div className="absolute -top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-brite-teal/10 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal-light mb-4">
              FAQ
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Frequently asked{" "}
              <em className="italic font-normal text-brite-teal-light">questions</em>
            </h1>
            <p className="mt-6 text-lg text-brite-cream/70 max-w-2xl mx-auto">
              Everything you need to know about bio-identical hormone therapy
              with BRITE.
            </p>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-24 lg:py-32 bg-brite-cream">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <ScrollReveal>
              <div>
                {faqs.map((faq) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-brite-warm-gray">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brite-dark tracking-tight leading-[1.1]">
                Still have questions?
              </h2>
              <p className="mt-4 text-lg text-brite-text-light">
                Our team is here to help you understand if cBHRT is right for you.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-full bg-brite-teal px-8 py-4 text-base font-semibold text-white hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(59,168,154,0.4)] transition-all duration-300"
                >
                  Contact Us
                </Link>
                <Link
                  href="/getting-started"
                  className="inline-flex items-center justify-center rounded-full border border-brite-text/20 px-8 py-4 text-base font-medium text-brite-text hover:bg-brite-dark hover:text-white hover:border-brite-dark transition-all duration-300"
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
