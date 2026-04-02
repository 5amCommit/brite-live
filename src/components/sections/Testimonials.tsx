import ScrollReveal from "@/components/ui/scroll-reveal";
import StaggerReveal from "@/components/ui/stagger-reveal";

const testimonials = [
  {
    quote:
      "I developed chronic insomnia and pills weren't helping me. I was missing deadlines at work, snapping at people, and everything was getting worse. The first day I got my oils, I rubbed them on my inner thigh before going to sleep and was shocked when I slept through the whole night!",
    name: "Patient Testimonial",
    detail: "Chronic Insomnia Recovery",
    videoUrl: "https://vimeo.com/427009711",
    rating: 5,
  },
  {
    quote:
      "I started experiencing a loss of self-confidence and lots of anxiety and it just got worse and worse. I started treatment right away and started experiencing more clarity, my memory came back stronger, and my energy was much higher!",
    name: "Patient Testimonial",
    detail: "Anxiety & Memory Recovery",
    videoUrl: "https://vimeo.com/406335753",
    rating: 5,
  },
  {
    quote:
      "My quality of life dropped. I wasn't sleeping well. I was having mood issues. I had no energy. It felt like I lost my umph. Sleep is amazing now, energy is higher than ever, no mood swings, and I feel like my old self again! The organic oils on my skin are so easy to use and so much better than any creams I've used.",
    name: "Patient Testimonial",
    detail: "Energy & Sleep Restored",
    videoUrl: "https://vimeo.com/791325844",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-brite-gold"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-brite-dark relative overflow-hidden">
      {/* Animated background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brite-teal/5 blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brite-green/5 blur-[100px] animate-[pulse_10s_ease-in-out_infinite_3s]" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brite-teal-light mb-4">
              Real Patient Stories
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Feel like yourself{" "}
              <em className="italic font-normal text-brite-teal-light">
                again
              </em>
            </h2>
          </ScrollReveal>
        </div>

        {/* Testimonial Cards */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.15}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.detail}
              className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col"
            >
              {/* Video Link */}
              {testimonial.videoUrl && (
                <a
                  href={testimonial.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mb-6 flex items-center gap-3 text-sm font-medium text-brite-teal-light hover:text-white transition-colors duration-300"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brite-teal/20 group-hover:bg-brite-teal/40 transition-colors duration-300">
                    <svg className="h-4 w-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  Watch Video
                </a>
              )}

              <blockquote className="text-base text-brite-cream/80 leading-relaxed flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-8 pt-6 border-t border-white/10">
                <StarRating count={testimonial.rating} />
                <p className="font-semibold text-white mt-3">{testimonial.name}</p>
                <p className="text-sm text-brite-cream/50 mt-1">
                  {testimonial.detail}
                </p>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
