export interface Feature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  badges?: string[];
  accentColor?: "orange" | "purple";
}

export interface GridFeature {
  icon: string;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: { text: string; included: boolean }[];
  ctaLabel: string;
  highlighted?: boolean;
  annualPrice?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "general" | "pricing" | "ai" | "troubleshooting";
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}
