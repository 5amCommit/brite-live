"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-24 bg-brite-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
          <div className="absolute -top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-brite-teal/8 blur-[140px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal-light mb-6">
              Contact
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
              Get in{" "}
              <em className="italic font-normal text-brite-teal-light">touch</em>
            </h1>
            <p className="mt-6 text-xl text-brite-cream/60 max-w-2xl mx-auto">
              Have questions about cBHRT? Ready to get started? Our team is here to help.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-brite-cream">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <ScrollReveal>
                  <h2 className="font-heading text-3xl font-bold text-brite-dark">
                    Let&apos;s talk
                  </h2>
                  <p className="mt-4 text-brite-text-light leading-relaxed">
                    Whether you&apos;re a practitioner looking to offer cBHRT or a patient
                    seeking hormone therapy, we&apos;re ready to help.
                  </p>

                  <div className="mt-10 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brite-teal/10 text-brite-teal flex-shrink-0">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-brite-dark">Phone</p>
                        <a href="tel:+18884710988" className="text-brite-teal hover:text-brite-teal-dark transition-colors">(888) 471-0988</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brite-teal/10 text-brite-teal flex-shrink-0">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-brite-dark">Email</p>
                        <a href="mailto:info@brite.live" className="text-brite-teal hover:text-brite-teal-dark transition-colors">info@brite.live</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brite-teal/10 text-brite-teal flex-shrink-0">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-brite-dark">Website</p>
                        <span className="text-brite-teal">brite.live</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <ScrollReveal delay={0.15}>
                  <div className="rounded-2xl bg-white p-8 lg:p-10 border border-border/50 shadow-sm">
                    {submitted ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 rounded-full bg-brite-green/10 flex items-center justify-center mx-auto mb-6">
                          <svg className="h-8 w-8 text-brite-green" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <h3 className="font-heading text-2xl font-semibold text-brite-dark">Thank you!</h3>
                        <p className="mt-2 text-brite-text-light">We&apos;ll be in touch within 24 hours.</p>
                      </div>
                    ) : (
                      <form
                        onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-brite-dark mb-2">First Name</label>
                            <input type="text" id="firstName" required className="w-full rounded-xl border border-border bg-brite-cream/50 px-4 py-3 text-sm text-brite-dark placeholder:text-brite-text-light/50 focus:border-brite-teal focus:ring-1 focus:ring-brite-teal outline-none transition-colors" placeholder="John" />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-brite-dark mb-2">Last Name</label>
                            <input type="text" id="lastName" required className="w-full rounded-xl border border-border bg-brite-cream/50 px-4 py-3 text-sm text-brite-dark placeholder:text-brite-text-light/50 focus:border-brite-teal focus:ring-1 focus:ring-brite-teal outline-none transition-colors" placeholder="Doe" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-brite-dark mb-2">Email</label>
                          <input type="email" id="email" required className="w-full rounded-xl border border-border bg-brite-cream/50 px-4 py-3 text-sm text-brite-dark placeholder:text-brite-text-light/50 focus:border-brite-teal focus:ring-1 focus:ring-brite-teal outline-none transition-colors" placeholder="john@example.com" />
                        </div>
                        <div>
                          <label htmlFor="type" className="block text-sm font-medium text-brite-dark mb-2">I am a...</label>
                          <select id="type" className="w-full rounded-xl border border-border bg-brite-cream/50 px-4 py-3 text-sm text-brite-dark focus:border-brite-teal focus:ring-1 focus:ring-brite-teal outline-none transition-colors">
                            <option>Practitioner / Provider</option>
                            <option>Patient</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-brite-dark mb-2">Message</label>
                          <textarea id="message" rows={4} required className="w-full rounded-xl border border-border bg-brite-cream/50 px-4 py-3 text-sm text-brite-dark placeholder:text-brite-text-light/50 focus:border-brite-teal focus:ring-1 focus:ring-brite-teal outline-none transition-colors resize-none" placeholder="Tell us how we can help..." />
                        </div>
                        <button
                          type="submit"
                          className="w-full rounded-xl bg-brite-teal px-6 py-4 text-base font-semibold text-white hover:bg-brite-teal-dark hover:shadow-lg transition-all duration-300"
                        >
                          Send Message
                        </button>
                      </form>
                    )}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
