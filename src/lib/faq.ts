import { FaqItem } from "@/types";

export const faqItems: FaqItem[] = [
  {
    question: "What is Decidel?",
    answer:
      "Decidel is a native iOS app for reading Hacker News. It adds AI-powered features like Smart Mute (semantic topic filtering), thread summaries, offline reading bundles, and advanced export — all in a fast, native interface.",
    category: "general",
  },
  {
    question: "Is it really free?",
    answer:
      "Yes. The free tier gives you a full-featured HN client with 15 AI summaries per day, 3 Smart Mute concepts, bookmarks, history, search, and Markdown export. No account required, no ads.",
    category: "general",
  },
  {
    question: "Do I need my own AI API key?",
    answer:
      "Yes, Decidel uses a Bring-Your-Own-Key (BYOK) model. You provide your own API key from providers like Groq (which has a generous free tier), OpenAI, or Anthropic. This means your data goes directly to your chosen provider — never through our servers.",
    category: "ai",
  },
  {
    question: "Which AI providers are supported?",
    answer:
      "Decidel supports Groq, OpenAI, Anthropic (Claude), Ollama (local models on your Mac), and on-device AI. Free users can use one provider at a time. Pro users can switch between all of them.",
    category: "ai",
  },
  {
    question: "Is my data private?",
    answer:
      "Your reading history, bookmarks, and settings never leave your device. When you use cloud AI providers (Groq, OpenAI, Anthropic), the HN content you summarize is sent to that provider's API — the same as if you used their service directly. For maximum privacy, use Ollama or on-device AI, which process everything locally.",
    category: "ai",
  },
  {
    question: "How does Smart Mute work?",
    answer:
      "Smart Mute uses AI to understand the meaning of stories, not just keywords. When you mute 'Crypto & NFT Speculation', it hides price talk and meme coins but keeps technical blockchain engineering content. It requires a configured AI provider.",
    category: "general",
  },
  {
    question: "What does Pro include?",
    answer:
      "Pro ($3.99/month or $19.99/year) unlocks unlimited AI summaries, unlimited Smart Mute concepts, multiple AI provider switching, offline reading bundles, advanced export to Notion and Obsidian, custom feed views, and priority feature requests.",
    category: "pricing",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Manage your subscription through the App Store. When you cancel, you keep Pro features until the end of your billing period, then revert to the free tier with all your data intact.",
    category: "pricing",
  },
  {
    question: "Is there a free trial?",
    answer:
      "The free tier is the trial. Use 15 AI summaries per day and 3 Smart Mute concepts to see if Decidel fits your workflow. Upgrade to Pro only when you want more.",
    category: "pricing",
  },
  {
    question: "AI summaries are not working. What should I do?",
    answer:
      "Make sure you have configured an AI provider in Settings > AI Provider and entered a valid API key. Check that you have remaining daily summaries (free tier: 15/day). If using Ollama, ensure it is running on your local network.",
    category: "troubleshooting",
  },
  {
    question: "The app is not loading stories.",
    answer:
      "Check your internet connection. Decidel fetches stories from the Hacker News API, which requires an active connection. If the issue persists, try force-quitting and reopening the app.",
    category: "troubleshooting",
  },
  {
    question: "Will Decidel come to Android?",
    answer:
      "Decidel is currently iOS-only. Android support depends on demand and resources. Follow us on X for updates.",
    category: "general",
  },
];
