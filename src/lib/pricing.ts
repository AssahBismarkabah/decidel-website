import { PricingTier } from "@/types";

export const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to browse HN smarter",
    features: [
      { text: "Full HN browsing (all feeds)", included: true },
      { text: "Bookmarks & History", included: true },
      { text: "Basic keyword filters", included: true },
      { text: "AI Summaries (15/day)", included: true },
      { text: "3 Smart Mute concepts", included: true },
      { text: "Export to Markdown", included: true },
      { text: "Single AI provider", included: true },
      { text: "Offline reading bundles", included: false },
      { text: "Advanced export (Notion, Obsidian)", included: false },
      { text: "Multiple AI providers", included: false },
    ],
    ctaLabel: "Download Free",
  },
  {
    name: "Pro",
    price: "$3.99",
    period: "/month",
    description: "Unlock the full power for serious HN readers",
    features: [
      { text: "Everything in Free", included: true },
      { text: "Unlimited AI Summaries", included: true },
      { text: "Unlimited Smart Mute concepts", included: true },
      { text: "Multiple AI providers", included: true },
      { text: "Offline reading bundles", included: true },
      { text: "Advanced export (Notion, Obsidian)", included: true },
      { text: "Custom feed views", included: true },
      { text: "Priority feature requests", included: true },
    ],
    ctaLabel: "Get Pro",
    highlighted: true,
    annualPrice: "$19.99/year",
  },
];
