// src/components/ClientInterviewsSection.tsx
import { Sparkles } from "lucide-react";

// If you already created <YellowPill />, feel free to use that instead of this local pill.
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-5 py-2.5 text-yellow-700 ring-1 ring-yellow-200 dark:bg-yellow-400/10 dark:text-yellow-300 dark:ring-yellow-400/30">
      <Sparkles className="h-4 w-4" />
      <span className="font-medium">{children}</span>
    </div>
  );
}

type Interview = {
  label: string; // e.g. "BUSINESS MASTERY"
  name: string; // e.g. "Nox, 35 🇺🇸"
  resultLine: string; // e.g. "New revenue: $200,000/month"
  blurb: string; // a few lines of context
  ytId: string; // YouTube video id (e.g. "DXT9dF-WK-I")
  cta?: string; // optional small “Watch interview” etc.
};

type Props = {
  title?: string;
  subtitle?: string;
  interviews: Interview[];
};

export default function ClientInterviewsSection({
  title = "Client Interviews",
  subtitle = "Real businesses. Real growth. Hear their stories in their own words.",
  interviews,
}: Props) {
  return (
    <>
      <section className="py-20 md:py-24 bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 text-center">
            <Pill>Our clients are leveling up</Pill>

            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              {title}
            </h2>

            {subtitle && (
              <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-500 dark:text-neutral-300/80">
                {subtitle}
              </p>
            )}
          </div>

          {/* List */}
          <div className="space-y-8">
            {interviews.map((t, i) => (
              <article
                key={t.name + i}
                className="
                rounded-2xl bg-white/90 shadow-sm ring-1 ring-neutral-200
                transition-shadow hover:shadow-md
                dark:bg-white/5 dark:ring-white/10
              "
              >
                <div className="grid gap-6 p-6 md:grid-cols-2 md:gap-8 md:p-8">
                  {/* Left — details */}
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-yellow-600 dark:text-yellow-400">
                      {t.label}
                    </div>

                    <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
                      {t.name}
                    </h3>

                    <p className="mt-4 text-lg">
                      <span className="text-neutral-500 dark:text-neutral-300/80">
                        {t.resultLine.split(":")[0]}:
                      </span>{" "}
                      <span className="font-semibold">
                        {t.resultLine.split(":")[1]?.trim() ?? t.resultLine}
                      </span>
                    </p>

                    <p className="mt-4 max-w-prose text-neutral-600 dark:text-neutral-300/80">
                      {t.blurb}
                    </p>

                    {t.cta && (
                      <div className="mt-5 inline-flex items-center gap-2 text-yellow-700 dark:text-yellow-300">
                        <span className="font-medium">{t.cta}</span>
                        <span aria-hidden>›</span>
                      </div>
                    )}
                  </div>

                  {/* Right — video */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-neutral-200/70 dark:ring-white/10">
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${t.ytId}?rel=0&modestbranding=1&playsinline=1`}
                        title={`${t.name} interview`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>

                    {/* soft vignette, subtle like Lovable */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-black/0 via-black/0 to-black/5 dark:from-white/0 dark:via-white/0 dark:to-white/5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
