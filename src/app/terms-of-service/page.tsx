import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | BRITE",
  description: "BRITE.Live terms of service covering account usage, billing, and service agreements.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-36 pb-12 lg:pt-44 lg:pb-16 bg-brite-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">Terms of Service</h1>
            <p className="mt-4 text-brite-cream/60">Last updated: November 28, 2025</p>
          </div>
        </section>
        <section className="py-16 lg:py-20 bg-brite-cream">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 prose prose-lg max-w-none">
            <p className="text-brite-text-light leading-relaxed">Welcome to BRITE.Live. By using our services, you agree to the following terms and conditions. Please read them carefully.</p>
            <h2 className="font-heading text-2xl font-semibold text-brite-dark mt-10 mb-4">Account Creation</h2>
            <p className="text-brite-text-light leading-relaxed">Users must provide accurate information when creating an account. You are responsible for maintaining the confidentiality of your account credentials.</p>
            <h2 className="font-heading text-2xl font-semibold text-brite-dark mt-10 mb-4">Services</h2>
            <p className="text-brite-text-light leading-relaxed">BRITE provides online coordination tools including patient scheduling, provider integration systems, and hormone therapy management. Our services are intended for use by authorized healthcare providers and their patients.</p>
            <h2 className="font-heading text-2xl font-semibold text-brite-dark mt-10 mb-4">Payment & Billing</h2>
            <p className="text-brite-text-light leading-relaxed">Subscription and payment terms are established during enrollment. Users are responsible for timely payment of all applicable fees.</p>
            <h2 className="font-heading text-2xl font-semibold text-brite-dark mt-10 mb-4">Permitted Use</h2>
            <p className="text-brite-text-light leading-relaxed">You agree to use BRITE services only for lawful purposes and in accordance with these terms. Unauthorized use, distribution, or reproduction of any content is prohibited.</p>
            <h2 className="font-heading text-2xl font-semibold text-brite-dark mt-10 mb-4">Limitation of Liability</h2>
            <p className="text-brite-text-light leading-relaxed">BRITE.Live shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Medical decisions should always be made in consultation with qualified healthcare providers.</p>
            <h2 className="font-heading text-2xl font-semibold text-brite-dark mt-10 mb-4">Contact</h2>
            <p className="text-brite-text-light leading-relaxed">For questions about these terms, contact us at info@brite.live or call (888) 471-0988.</p>
            <p className="text-brite-text-light mt-10 text-sm">Copyright &copy; 2009-{new Date().getFullYear()} BRITE.Live. All rights reserved.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
