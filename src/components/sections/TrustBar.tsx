export default function TrustBar() {
  const credentials = [
    "Board-Certified Physicians",
    "Licensed Pharmacists",
    "Ph.D. Scientists",
    "Naturopathic Doctors",
    "Nurse Practitioners",
  ];

  return (
    <section className="relative py-6 bg-brite-warm-gray border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-brite-text-light">
            Our Medical Board includes:
          </span>
          {credentials.map((credential) => (
            <div key={credential} className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-brite-teal flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-medium text-brite-text">
                {credential}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
