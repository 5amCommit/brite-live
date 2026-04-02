export default function TrustBar() {
  const badges = [
    "100% Organic Base",
    "Made in USA",
    "Cruelty Free",
    "Toxin Free",
    "Personalized Formulations",
  ];

  return (
    <section className="relative py-5 bg-brite-warm-gray border-y border-border/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {badges.map((badge) => (
            <div key={badge} className="flex items-center gap-2">
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
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
