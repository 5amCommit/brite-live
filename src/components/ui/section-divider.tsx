interface SectionDividerProps {
  from?: string;
  to?: string;
  className?: string;
}

export default function SectionDivider({
  from = "bg-brite-dark",
  to = "bg-brite-cream",
  className = "",
}: SectionDividerProps) {
  return (
    <div className={`relative h-24 lg:h-32 ${className}`} aria-hidden="true">
      <div className={`absolute inset-0 ${from}`} />
      <svg
        className={`absolute bottom-0 w-full h-full ${to} text-current`}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path
          d="M0,120 L0,60 Q360,0 720,60 Q1080,120 1440,60 L1440,120 Z"
          className={to}
          style={{ fill: "currentcolor" }}
        />
      </svg>
    </div>
  );
}
