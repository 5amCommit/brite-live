import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Login | BRITE",
  description: "Log in to your BRITE patient portal to manage your hormone therapy.",
};

export default function LoginPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-24 bg-brite-dark overflow-hidden min-h-[80vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brite-teal/8 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-md w-full px-6">
            <div className="text-center mb-8">
              <img src="/brand-assets/brite-logo-green.png" alt="BRITE" className="h-8 mx-auto mb-6 invert" />
              <h1 className="font-heading text-3xl font-bold text-white">Patient Login</h1>
              <p className="mt-2 text-brite-cream/60">Access your hormone therapy portal</p>
            </div>
            <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
              <form className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brite-cream/80 mb-2">Email</label>
                  <input type="email" id="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-brite-teal focus:ring-1 focus:ring-brite-teal outline-none transition-colors" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-brite-cream/80 mb-2">Password</label>
                  <input type="password" id="password" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-brite-teal focus:ring-1 focus:ring-brite-teal outline-none transition-colors" placeholder="Enter your password" />
                </div>
                <button type="submit" className="w-full rounded-xl bg-brite-teal px-6 py-4 text-base font-semibold text-white hover:bg-brite-teal-dark transition-colors duration-300">
                  Sign In
                </button>
              </form>
              <div className="mt-6 text-center">
                <a href="#" className="text-sm text-brite-teal-light hover:text-white transition-colors">Forgot your password?</a>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-brite-cream/50 mb-4">Download the BRITE app</p>
              <div className="flex justify-center gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-xs font-medium text-white hover:bg-white/20 transition-colors">
                  App Store
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-xs font-medium text-white hover:bg-white/20 transition-colors">
                  Google Play
                </a>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-brite-cream/40">
              New patient? <Link href="/getting-started" className="text-brite-teal-light hover:text-white transition-colors">Get started here</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
