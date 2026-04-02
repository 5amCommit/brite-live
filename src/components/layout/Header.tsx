"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "How It Works" },
  { href: "/medical-board", label: "Medical Board" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative flex items-center flex-shrink-0 h-8 w-[130px]">
            {/* White logo for dark hero background */}
            <Image
              src="/brand-assets/brite-logo-green.png"
              alt="BRITE"
              width={415}
              height={110}
              priority
              className={`absolute inset-0 h-8 w-auto object-contain brightness-0 invert transition-opacity duration-500 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            />
            {/* Green logo for scrolled white background */}
            <Image
              src="/brand-assets/brite-logo-green.png"
              alt="BRITE"
              width={415}
              height={110}
              priority
              className={`absolute inset-0 h-8 w-auto object-contain transition-opacity duration-500 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-brite-text hover:text-brite-teal"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-brite-text hover:text-brite-teal"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Patient Login
            </Link>
            <Link
              href="/getting-started"
              className="inline-flex items-center justify-center rounded-full bg-brite-teal px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brite-teal-dark hover:shadow-md hover:scale-[1.03] transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  scrolled ? "bg-brite-text" : "bg-white"
                } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  scrolled ? "bg-brite-text" : "bg-white"
                } ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  scrolled ? "bg-brite-text" : "bg-white"
                } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 pb-6 pt-2 bg-white/95 backdrop-blur-md border-t border-border/50">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-brite-text hover:text-brite-teal transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-border" />
            <Link
              href="/login"
              className="text-base font-medium text-brite-text hover:text-brite-teal transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Patient Login
            </Link>
            <Link
              href="/getting-started"
              className="inline-flex items-center justify-center rounded-full bg-brite-teal px-6 py-3 text-base font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
