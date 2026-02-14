import type { Metadata } from "next";
import PricingCards from "@/components/sections/PricingCards";
import Faq from "@/components/sections/Faq";
import CtaBanner from "@/components/sections/CtaBanner";
import { faqItems } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Decidel is free to use. Upgrade to Pro for unlimited AI features, offline reading, and advanced export.",
};

export default function PricingPage() {
  const pricingFaq = faqItems.filter(
    (item) => item.category === "pricing" || item.category === "ai"
  );

  return (
    <>
      <PricingCards />
      <Faq
        items={pricingFaq}
        title="Pricing FAQ"
        subtitle="Common questions about pricing and AI features"
        elevated
      />
      <CtaBanner />
    </>
  );
}
