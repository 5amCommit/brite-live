import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BRITE",
  description: "BRITE.Live privacy policy governing data collection and usage.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-36 pb-12 lg:pt-44 lg:pb-16 bg-brite-dark overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">Privacy Policy</h1>
            <p className="mt-4 text-brite-cream/60">Last updated: November 28, 2025</p>
          </div>
        </section>
        <section className="py-16 lg:py-20 bg-brite-cream">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 prose prose-lg prose-brite-text max-w-none">
            <p className="text-brite-text-light leading-relaxed">BRITE.Live values your privacy. This Privacy Policy governs the manner in which BRITE.Live collects, uses, maintains and discloses information collected from users of the brite.live website.</p>
            <h2 className="font-heading text-2xl font-semibold text-brite-dark mt-10 mb-4">Information We Collect</h2>
            <p className="text-brite-text-light leading-relaxed">We may collect personal identification information from users in a variety of ways, including when users visit our site, register on the site, subscribe to services, and in connection with other activities, services, features or resources we make available.</p>
            <h2 className="font-heading text-2xl font-semibold text-brite-dark mt-10 mb-4">How We Use Information</h2>
            <p className="text-brite-text-light leading-relaxed">BRITE.Live may collect and use personal information for improving customer service, personalizing user experience, processing transactions, and sending periodic emails related to services.</p>
            <h2 className="font-heading text-2xl font-semibold text-brite-dark mt-10 mb-4">How We Protect Information</h2>
            <p className="text-brite-text-light leading-relaxed">We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information.</p>
            <h2 className="font-heading text-2xl font-semibold text-brite-dark mt-10 mb-4">Your Rights</h2>
            <p className="text-brite-text-light leading-relaxed">Users may decline to share personal identifiable information, though this may prevent access to certain services. Changes to this policy will be communicated via email.</p>
            <h2 className="font-heading text-2xl font-semibold text-brite-dark mt-10 mb-4">Contact</h2>
            <p className="text-brite-text-light leading-relaxed">If you have questions about this Privacy Policy, please contact us at info@brite.live or call (888) 471-0988.</p>
            <p className="text-brite-text-light mt-10 text-sm">Copyright &copy; 2009-{new Date().getFullYear()} BRITE.Live. All rights reserved.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
