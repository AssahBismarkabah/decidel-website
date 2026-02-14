import { NavLink } from "@/types";

export const SITE_NAME = "Decidel";
export const SITE_DESCRIPTION = "The smartest way to read Hacker News";
export const SITE_URL = "https://decidel.app";

export const APP_STORE_URL = "https://apps.apple.com/app/decidel/id_PLACEHOLDER";

export const CONTACT_EMAIL = "hello@decidel.app";
export const TWITTER_HANDLE = "@DecidelD91907";
export const TWITTER_URL = "https://x.com/DecidelD91907";

export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Support", href: "/support" },
];

export const FOOTER_LINKS: Record<string, NavLink[]> = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Download", href: APP_STORE_URL, external: true },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  support: [
    { label: "FAQ", href: "/support" },
    { label: "Contact", href: `mailto:${CONTACT_EMAIL}`, external: true },
  ],
  social: [
    { label: "X / Twitter", href: TWITTER_URL, external: true },
  ],
};
