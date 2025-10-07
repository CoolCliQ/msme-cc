import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { YellowPill } from "@/components/YellowPill";

type Testimonial = {
  name: string;
  handle?: string;
  role?: string;
  quote: string;
  avatar?: string;
};

// Sample testimonial data
const testimonials: Testimonial[] = [
  {
    name: "Ayesha Khan",
    role: "Founder, Aligarh Crafts",
    quote: "They helped us get consistent leads quickly.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    name: "Rahul Verma",
    role: "Owner, Verma Dental",
    quote: "Our local visibility improved and appointments went up.",
    avatar: "🏢",
  },
  {
    name: "Anita Sharma",
    role: "Manager, Royal Sweets",
    quote: "Simple process, clear results. Highly recommend.",
    avatar: "🍬",
  },
  {
    name: "Neha Singh",
    role: "CEO, Spark Marketing",
    quote: "Their team transformed our online presence and sales skyrocketed!",
    avatar: "💼",
  },
  {
    name: "Rohit Patel",
    role: "Founder, TechWave",
    quote: "Efficient, timely, and results-driven. Highly professional.",
    avatar: "🖥️",
  },
  {
    name: "Simran Kaur",
    role: "Owner, Blossom Bakery",
    quote: "Customer engagement increased 3x after their digital solutions.",
    avatar: "🧁",
  },
];

const TestimonialsFeed: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); // start only once
          }
        });
      },
      { threshold: 0.3 } // trigger when 30% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <YellowPill size="sm" tone="soft" iconLeft={Star}>
            Testimonials
          </YellowPill>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            What our{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Clients
            </span>{" "}
            say
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300/80">
            Real feedback from Aligarh businesses we’ve partnered with.
          </p>
        </div>

        {/* Scrolling grid */}
        <div className="relative overflow-hidden">
          {/* top fade mask */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-8 bg-gradient-to-b from-white to-transparent dark:from-neutral-950" />
          {/* bottom fade mask */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8 bg-gradient-to-t from-white to-transparent dark:from-neutral-950" />

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ${
              inView ? "animate-scroll-up" : ""
            }`}
          >
            {testimonials.map((t, i) => (
              <div
                key={t.name + i}
                className="relative overflow-hidden rounded-2xl border border-white/10
                           bg-gradient-to-br from-white/70 to-white/50 p-6
                           shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)]
                           backdrop-blur-md transition-all
                           hover:border-yellow-400/40 hover:shadow-[0_12px_40px_-16px_rgba(234,179,8,0.25)]
                           dark:from-white/10 dark:to-white/[0.05] dark:border-white/10"
              >
                {/* Avatar */}
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-yellow-400/15 ring-1 ring-yellow-400/25">
                    {t.avatar && t.avatar.startsWith("http") ? (
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-base font-semibold text-yellow-700 dark:text-yellow-300 ">
                        {t.name
                          .split(" ")
                          .map((w) => w[0])
                          .slice(0, 2)
                          .join("")}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                      {t.name}
                    </h4>
                    {t.role && (
                      <p className="mt-0.5 text-sm text-neutral-500 dark:text-neutral-400">
                        {t.role}
                      </p>
                    )}
                  </div>
                </div>
                <p className="mt-4 leading-relaxed text-neutral-800 dark:text-neutral-200">
                  “{t.quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-100%); }
        }
        .animate-scroll-up {
          animation: scroll-up 10s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-up { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsFeed;
