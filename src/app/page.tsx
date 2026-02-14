import Hero from "@/components/sections/Hero";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import FeatureGrid from "@/components/sections/FeatureGrid";
import PricingCards from "@/components/sections/PricingCards";
import CtaBanner from "@/components/sections/CtaBanner";
import { showcaseFeatures } from "@/lib/features";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Smart Mute — elevated background */}
      <FeatureShowcase
        title={showcaseFeatures[0].title}
        subtitle={showcaseFeatures[0].subtitle}
        description={showcaseFeatures[0].description}
        imageSrc={showcaseFeatures[0].imageSrc}
        imageAlt={showcaseFeatures[0].imageAlt}
        badges={showcaseFeatures[0].badges}
        accentColor={showcaseFeatures[0].accentColor}
        elevated
      />

      {/* AI Summary — base background */}
      <FeatureShowcase
        title={showcaseFeatures[1].title}
        subtitle={showcaseFeatures[1].subtitle}
        description={showcaseFeatures[1].description}
        imageSrc={showcaseFeatures[1].imageSrc}
        imageAlt={showcaseFeatures[1].imageAlt}
        accentColor={showcaseFeatures[1].accentColor}
        reversed
      />

      {/* Comments — elevated background */}
      <FeatureShowcase
        title={showcaseFeatures[2].title}
        subtitle={showcaseFeatures[2].subtitle}
        description={showcaseFeatures[2].description}
        imageSrc={showcaseFeatures[2].imageSrc}
        imageAlt={showcaseFeatures[2].imageAlt}
        accentColor={showcaseFeatures[2].accentColor}
        elevated
      />

      <FeatureGrid />

      <PricingCards elevated />

      <CtaBanner />
    </>
  );
}
