import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center bg-brite-dark relative overflow-hidden min-h-[80vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-brite-dark via-brite-dark-light to-brite-charcoal" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brite-teal/8 blur-[120px]" />
        <div className="relative z-10 text-center px-6">
          <p className="font-heading text-8xl font-bold text-brite-teal-light/20">404</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-4">
            Page not found
          </h1>
          <p className="mt-4 text-brite-cream/60 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-brite-teal px-8 py-4 text-base font-semibold text-white mt-8 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(59,168,154,0.4)] transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
