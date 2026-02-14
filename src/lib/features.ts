import { Feature, GridFeature } from "@/types";

export const showcaseFeatures: Feature[] = [
  {
    id: "smart-mute",
    title: "Mute topics, not keywords",
    subtitle: "Smart Mute uses AI to understand context",
    description:
      "Tired of the same crypto debates and AI hype? Smart Mute filters by meaning, not pattern matching. Hide 'crypto speculation' while keeping technical blockchain content. Finally, a feed that respects your attention.",
    imageSrc: "/images/screenshots/smart-mute-dark.png",
    imageAlt:
      "Decidel Smart Mute screen showing topic filtering for Crypto, AI Hype, and Political Debates",
    badges: [
      "Crypto & NFT",
      "AI Hype",
      "Political Debates",
      "Funding News",
      "Big Tech Drama",
    ],
    accentColor: "orange",
  },
  {
    id: "ai-summary",
    title: "Get the gist in seconds",
    subtitle: "AI-powered thread summaries",
    description:
      "200+ comment threads? Get a TL;DR and categorized Key Points extracted from the discussion. See supporting comments for each point. Skip the noise, keep the insight.",
    imageSrc: "/images/screenshots/ai-summary-dark.png",
    imageAlt:
      "Decidel AI Summary showing TL;DR and Key Points for a programming discussion",
    accentColor: "purple",
  },
  {
    id: "comments",
    title: "Dive into discussions",
    subtitle: "Full comment thread experience",
    description:
      "Search within threads, navigate nested replies, and participate in the conversation. Read articles inline. Everything a power HN reader needs, with none of the friction.",
    imageSrc: "/images/screenshots/comments-dark.png",
    imageAlt:
      "Decidel comment thread view with nested replies and article preview",
    accentColor: "orange",
  },
];

export const gridFeatures: GridFeature[] = [
  {
    icon: "feeds",
    title: "Multiple Feeds",
    description:
      "Browse Top, Ask, Show, Jobs, and Best stories with time filters from 24h to Year.",
  },
  {
    icon: "bookmark",
    title: "Bookmarks & History",
    description:
      "Save stories for later and track everything you've read. Never lose a thread again.",
  },
  {
    icon: "offline",
    title: "Offline Bundles",
    description:
      "Generate smart reading packs for your commute. Read HN without a connection.",
  },
  {
    icon: "export",
    title: "Export Anywhere",
    description:
      "Send threads to Markdown, Notion, or Obsidian. Generate weekly digests of saved content.",
  },
  {
    icon: "search",
    title: "Search",
    description:
      "Full-text search across stories and comments. Find what you need instantly.",
  },
  {
    icon: "theme",
    title: "Multiple Themes",
    description:
      "Choose from several themes to match your style. Optimized for readability in every mode.",
  },
];

export const smartMuteComparison = [
  {
    intent: "Hide crypto speculation",
    keyword: "Blocks ALL crypto mentions",
    decidel: "Hides price talk, keeps technical content",
  },
  {
    intent: "No more AI hype",
    keyword: 'Blocks everything with "AI"',
    decidel: "Filters announcements, keeps engineering",
  },
  {
    intent: "Skip funding news",
    keyword: 'Misses "raised", "series", etc.',
    decidel: "Understands fundraising context",
  },
];
