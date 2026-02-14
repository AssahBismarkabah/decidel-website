import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import FeatureGrid from "@/components/sections/FeatureGrid";
import CtaBanner from "@/components/sections/CtaBanner";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import PhoneMockup from "@/components/ui/PhoneMockup";
import { showcaseFeatures, smartMuteComparison } from "@/lib/features";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Decidel's features: Smart Mute, AI summaries, offline reading, and more.",
};

export default function FeaturesPage() {
  return (
    <>
      {/* Page header */}
      <section className="pb-8 pt-16 lg:pt-24">
        <Container>
          <SectionHeading
            title="Features"
            subtitle="Everything you need to master Hacker News"
          />
        </Container>
      </section>

      {/* Smart Mute — expanded */}
      <FeatureShowcase
        title={showcaseFeatures[0].title}
        subtitle={showcaseFeatures[0].subtitle}
        description={showcaseFeatures[0].description}
        imageSrc={showcaseFeatures[0].imageSrc}
        imageAlt={showcaseFeatures[0].imageAlt}
        badges={showcaseFeatures[0].badges}
        accentColor={showcaseFeatures[0].accentColor}
        elevated
      >
        {/* Comparison table */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-decidel-border">
                <th className="pb-3 pr-4 text-left font-medium text-decidel-gray-300">
                  Your Intent
                </th>
                <th className="pb-3 pr-4 text-left font-medium text-decidel-gray-300">
                  Keyword Filter
                </th>
                <th className="pb-3 text-left font-medium text-decidel-orange">
                  Decidel Smart Mute
                </th>
              </tr>
            </thead>
            <tbody>
              {smartMuteComparison.map((row) => (
                <tr
                  key={row.intent}
                  className="border-b border-decidel-border/50"
                >
                  <td className="py-3 pr-4 text-decidel-gray-200">
                    {row.intent}
                  </td>
                  <td className="py-3 pr-4 text-decidel-gray-500">
                    {row.keyword}
                  </td>
                  <td className="py-3 text-decidel-gray-200">{row.decidel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FeatureShowcase>

      {/* AI Summary — expanded */}
      <FeatureShowcase
        title={showcaseFeatures[1].title}
        subtitle={showcaseFeatures[1].subtitle}
        description="Threads with hundreds of comments? Get an instant TL;DR and categorized Key Points extracted from the discussion. Each point shows supporting comments so you can drill deeper. Bring your own API key from Groq, OpenAI, Anthropic, or use Ollama and on-device AI for full privacy."
        imageSrc={showcaseFeatures[1].imageSrc}
        imageAlt={showcaseFeatures[1].imageAlt}
        accentColor="purple"
        reversed
      />

      {/* Comments */}
      <FeatureShowcase
        title={showcaseFeatures[2].title}
        subtitle={showcaseFeatures[2].subtitle}
        description={showcaseFeatures[2].description}
        imageSrc={showcaseFeatures[2].imageSrc}
        imageAlt={showcaseFeatures[2].imageAlt}
        accentColor={showcaseFeatures[2].accentColor}
        elevated
      />

      {/* Multiple themes */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            title="Themes that fit your style"
            subtitle="Choose from multiple themes — each designed for readability and comfort"
          />
          <AnimateOnScroll direction="up">
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
              <PhoneMockup
                src="/images/screenshots/feed-dark.png"
                alt="Decidel dark theme"
              />
              <PhoneMockup
                src="/images/screenshots/feed-light.png"
                alt="Decidel light theme"
              />
              <PhoneMockup
                src="/images/screenshots/feed-sepia.png"
                alt="Decidel sepia theme"
              />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      <FeatureGrid elevated />

      <CtaBanner />
    </>
  );
}
