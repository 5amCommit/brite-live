import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/scroll-reveal";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started | BRITE — Begin Your Hormone Therapy",
  description:
    "Instructions on how, where, when and how much to apply of your new, organic-based, bio-identical hormones from BRITE.",
};

export default function GettingStartedPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-24 bg-brite-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
          <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-brite-green/8 blur-[140px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal-light mb-6">
              Getting Started
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] max-w-4xl mx-auto">
              Your new hormones,{" "}
              <em className="italic font-normal text-brite-teal-light">simplified</em>
            </h1>
            <p className="mt-6 text-xl text-brite-cream/60 max-w-2xl mx-auto">
              Instructions on how, where, when and how much to apply of your new,
              organic-based, bio-identical hormones.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brite-dark tracking-tight leading-[1.1]">
                  Hormones can help in{" "}
                  <em className="italic font-normal text-brite-teal">so many ways</em>
                </h2>
                <p className="mt-6 text-lg text-brite-text-light leading-relaxed max-w-3xl mx-auto">
                  Not only can they reduce the symptoms of menopause, but they can help
                  to protect your bones, your muscles, your arteries, your brain, and
                  your bladder too.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Goal */}
        <section className="py-16 lg:py-20 bg-brite-cream">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal mb-4">
                    Our Goal
                  </p>
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brite-dark tracking-tight leading-[1.1]">
                    As{" "}
                    <em className="italic font-normal text-brite-teal">elegant</em>{" "}
                    as possible
                  </h2>
                  <p className="mt-6 text-lg text-brite-text-light leading-relaxed">
                    We help you make this hormone replenishment process as elegant as
                    possible: the correct amount of each hormone, at the right time(s)
                    of day, applied to the right places — each hormone has its own
                    spots. Welcome!
                  </p>
                  <div className="mt-8 grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <p className="font-heading text-2xl font-bold text-brite-teal">Right</p>
                      <p className="text-sm text-brite-text-light mt-1">Amount</p>
                    </div>
                    <div className="text-center">
                      <p className="font-heading text-2xl font-bold text-brite-teal">Right</p>
                      <p className="text-sm text-brite-text-light mt-1">Time</p>
                    </div>
                    <div className="text-center">
                      <p className="font-heading text-2xl font-bold text-brite-teal">Right</p>
                      <p className="text-sm text-brite-text-light mt-1">Place</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="flex justify-center">
                  <Image
                    src="/brand-assets/product-bottle.webp"
                    alt="BRITE hormone product with organic base"
                    width={320}
                    height={400}
                    style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.12))" }}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-brite-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brite-teal/10 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                Ready to{" "}
                <em className="italic font-normal text-brite-teal-light">begin?</em>
              </h2>
              <p className="mt-6 text-lg text-brite-cream/60 max-w-2xl mx-auto">
                Schedule your discovery call to find out if cBHRT is right for you.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-full bg-brite-teal px-10 py-5 text-lg font-semibold text-white hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(59,168,154,0.4)] transition-all duration-300"
                >
                  Schedule a Call
                  <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-10 py-5 text-lg font-medium text-white hover:bg-white/5 transition-all duration-300"
                >
                  Read the FAQ
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
