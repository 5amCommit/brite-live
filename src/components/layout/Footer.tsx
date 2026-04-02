import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  company: [
    { href: "/about", label: "About BRITE" },
    { href: "/medical-board", label: "Medical Board" },
    { href: "/contact", label: "Contact" },
  ],
  patients: [
    { href: "/services", label: "How It Works" },
    { href: "/getting-started", label: "Getting Started" },
    { href: "/faq", label: "FAQ" },
    { href: "/login", label: "Patient Login" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brite-dark text-brite-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Image
              src="/brand-assets/brite-logo.png"
              alt="BRITE"
              width={100}
              height={77}
              className="brightness-0 invert mb-6"
            />
            <p className="text-sm text-brite-cream/70 leading-relaxed max-w-xs">
              Expert-guided bio-identical hormone replacement therapy, backed by
              a world-class Medical Board. Serving patients since 2009.
            </p>
            {/* App Store Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-xs font-medium text-white hover:bg-white/20 transition-colors duration-300"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-xs font-medium text-white hover:bg-white/20 transition-colors duration-300"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.71c-.36-.19-.64-.47-.83-.83L2 22.17V1.83l.35-.71c.19-.36.47-.64.83-.83L13.6 10.71 3.18 23.71zm.53-23.12L14.82 9.5l2.85-3.13L4.34.19c-.22-.12-.43-.1-.63.4zM20.16 10.35L17.67 8.9 14.5 12.35l3.17 3.45 2.49-1.45c.7-.4 1.05-.95 1.05-1.65s-.35-1.25-1.05-1.65v-.7zM3.71 23.41l11.11-12.7L4.34 23.81c.22.12.43.1.63-.4h-1.26z" />
                </svg>
                Google Play
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brite-cream/70 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">
              For Patients
            </h4>
            <ul className="space-y-3">
              {footerLinks.patients.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brite-cream/70 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brite-cream/70 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brite-cream/50">
            &copy; 2009-{new Date().getFullYear()} BRITE.Live All rights
            reserved.
          </p>
          <p className="text-xs text-brite-cream/50">
            Bio-Identical Hormone Replacement Therapy
          </p>
        </div>
      </div>
    </footer>
  );
}
