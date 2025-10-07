// src/components/ServicesSection.tsx
import Magnet from "@/components/Magnet";
import WavyDivider from "@/components/ui/WavyDivider";
import { YellowPill } from "@/components/YellowPill";
import {
  Share2,
  Target,
  Search,
  Palette,
  Smartphone,
  Zap,
  ArrowRight,
} from "lucide-react";

type Service = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: string;
};

const services: Service[] = [
  {
    icon: Share2,
    title: "Social Media Marketing for Local Engagement",
    description:
      "Build strong connections with Aligarh community through strategic social media campaigns",
    color: "text-blue-400",
  },
  {
    icon: Target,
    title: "Google Ads & Meta Ads",
    description:
      "Precision-targeted advertising that converts browsers into buyers across all platforms",
    color: "text-emerald-400",
  },
  {
    icon: Search,
    title: "SEO to Rank #1 in Aligarh",
    description:
      "Dominate local search results and become the go-to choice for Aligarh customers",
    color: "text-violet-400",
  },
  {
    icon: Palette,
    title: "Branding & Content Creation",
    description:
      "Craft compelling brand stories that resonate with your target audience",
    color: "text-pink-400",
  },
  {
    icon: Smartphone,
    title: "Website & App Development",
    description:
      "Modern, responsive digital experiences that drive engagement and conversions",
    color: "text-orange-400",
  },
  {
    icon: Zap,
    title: "Lead Generation Campaigns",
    description:
      "Systematic approach to generating high-quality leads that turn into loyal customers",
    color: "text-yellow-400",
  },
];

export default function ServicesSection() {
  return (
    <>
      <WavyDivider
        // color="white"
        // match next section bg
        height={80}
      />
      <section className="py-20 md:py-24 bg-gray-900 text-neutral-50">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-14 animate-fade-in">
            <div className="mb-6 flex justify-center">
              <YellowPill size="sm" tone="soft" iconLeft={Zap}>
                Our Services
              </YellowPill>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Services for{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Aligarh Businesses
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl leading-relaxed text-neutral-300/90">
              Comprehensive digital solutions designed specifically for the
              unique needs and opportunities in the Aligarh market
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="
                animate-scale-in rounded-xl border border-white/10 bg-gray-800 p-8
                backdrop-blur-sm transition-all duration-300 hover:border-gray-400/30
              "
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="grid h-14 w-14 place-items-center rounded-xl bg-yellow-400/10">
                      {/* icon in brand color, like Lovable */}
                      <s.icon className={`h-7 w-7 ${s.color}`} />
                    </div>
                  </div>
                  <div className="sr-only" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-[oklch(92%_0.03_275)]">
                  {s.title}
                </h3>

                <p className="mb-6 leading-relaxed text-neutral-300/80">
                  {s.description}
                </p>

                <div className="inline-flex items-center text-[oklch(70%_0.15_285)] transition-transform hover:translate-x-1">
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 flex justify-center animate-fade-in">
            <Magnet padding={50} disabled={false} magnetStrength={50}>
              <button className="btn-hero flex flex-row items-center hover:cursor-pointer !bg-[oklch(65%_0.18_280)] !hover:bg-[oklch(75%_0.20_285)] ">
                <span className="text-base">
                  Get Custom Solution for Your Business
                </span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </Magnet>
          </div>
        </div>
      </section>
    </>
  );
}
