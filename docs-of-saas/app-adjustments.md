# Decidel App Adjustments - Pre-Launch Review

**Date**: February 14, 2026
**Purpose**: Critical adjustments to make before Monday's App Store launch
**Priority**: Items ordered by impact on launch success

---

## 1. CRITICAL: Restructure the Pro Paywall Value Proposition

### The Problem

The current Pro tier gates **AI summary usage** (5/day free, unlimited Pro) while the user provides their own API key and pays their own API costs. This creates a perception problem:

> "Why am I paying Decidel $3.99/mo for permission to use my own Groq API key more than 5 times?"

This **will** be called out on the Show HN launch. The HN audience is the most price-skeptical, artificial-scarcity-aware community online. Gating someone's own API usage behind a paywall feels extractive, not valuable.

### The Fix

Restructure what's free vs. Pro so the paywall reflects **your development effort**, not an artificial throttle on the user's resources.

**Recommended Free Tier:**
| Feature | Free |
|---------|------|
| Full HN browsing (feed, comments, stories) | Yes |
| Bookmarks & History | Yes |
| Basic keyword filters | Yes |
| AI Summaries (with user's own API key) | **15/day** (raised from 5) |
| Semantic concept muting | **3 concepts** |
| Export to Markdown | Yes |
| Single AI provider | Yes |

**Recommended Pro Tier ($3.99/mo or $19.99/yr):**
| Feature | Pro |
|---------|-----|
| Everything in Free | Yes |
| AI Summaries | **Unlimited** |
| Custom filter concepts | **Unlimited** |
| Multiple AI providers (switch between Groq/OpenAI/Claude) | Yes |
| Offline reading bundles | Yes |
| Advanced export (Notion, Obsidian, weekly digest) | Yes |
| Custom feed views / saved searches | Yes |
| Priority feature requests + early access | Yes |
| Tip Jar (optional support beyond subscription) | Yes |

### Why This Works

- Free tier is generous enough that users experience real value and tell others
- 15 summaries/day is enough for casual use but power users will hit it
- Pro features are things that **require your engineering effort** (offline bundles, advanced export, multiple providers, custom views)
- The paywall doesn't feel like it's standing between the user and their own API key
- Multiple AI provider switching is a natural Pro feature (configuration complexity = value)

### What to Change in Code

- [ ] Raise free daily AI summary limit from 5 to 15
- [ ] Gate multi-provider switching behind Pro (free users get 1 active provider)
- [ ] Add offline reading bundles as a Pro-only feature
- [ ] Add advanced export options (Notion, Obsidian) as Pro-only
- [ ] Update the paywall screen copy to emphasize power-user features over "unlimited summaries"

---

## 2. HIGH: Update the Paywall Screen Copy

### Current Copy (from screenshot)

```
Unlock the Full Experience
Get unlimited AI summaries, custom filters, and more

- Unlimited AI Summaries (No daily limits on comment summaries)
- Custom Filter Concepts (Create unlimited personalized content filters)
- Early Access (Get new features before everyone else)
- Support Development (Help keep Decidel ad-free and improving)
```

### Problems

- "Unlimited AI Summaries" as the lead benefit is weak when users supply their own API key
- "Support Development" is a guilt-trip, not a feature. Users don't pay to support you; they pay for value.
- "Early Access" is filler - it's not a tangible benefit at launch when there's nothing to get early access to yet

### Recommended Copy

```
Power Up Your HN Experience

- Unlimited AI Summaries & Filters
  Use your AI provider without daily limits

- Offline Reading Bundles
  Generate smart reading packs for your commute

- Advanced Export
  Send threads to Notion, Obsidian, or as weekly digests

- Multiple AI Providers
  Switch between Groq, OpenAI, Claude, and local models
```

### What to Change in Code

- [ ] Update paywall headline from "Unlock the Full Experience" to "Power Up Your HN Experience"
- [ ] Replace "Support Development" benefit with a real feature (offline bundles or advanced export)
- [ ] Replace "Early Access" with a tangible feature
- [ ] Update subtitle to emphasize power-user workflow, not just "more of the same"

---

## 3. HIGH: Update the Business Plan to Reflect BYOK Model

### The Problem

The business plan (`business-plan-of-saas.md`) says:

> "All AI processing happens on-device"
> "No user content transmitted to external servers"
> "On-Device AI: Core ML + local LLM - Privacy, no API costs, offline capable"

But the actual app supports **5 AI providers**: Groq, OpenAI, Anthropic, Ollama (local), and On-Device AI. Most of these send data to external servers. The business plan's privacy claims are inaccurate for the majority of usage patterns.

### The Fix

The business plan needs to be updated, but more importantly, **the app should be transparent about this**:

- [ ] Add a brief privacy note in the API Keys settings explaining that cloud providers (Groq, OpenAI, Anthropic) will send HN content to their servers for processing
- [ ] Highlight Ollama and On-Device AI options as "Privacy-first" in the UI
- [ ] Consider a small badge or label: "Local" vs "Cloud" next to each provider
- [ ] Update business plan Section 8 (Technical Architecture) to reflect the BYOK multi-provider model

---

## 4. MEDIUM: Settings Screen Adjustments

### From the screenshots, observations:

#### 4a. "Block Ads" Toggle

There's a "Block Ads" toggle visible at the top of Settings. HN doesn't serve traditional ads. If this refers to blocking promoted/sponsored content or "Show HN" posts by companies, clarify the label. If it blocks ads in linked articles (web view), that's a useful feature but could cause App Store review issues - Apple has rejected apps for ad-blocking functionality in certain contexts.

- [ ] Clarify what "Block Ads" does - rename to be specific (e.g., "Block Ads in Articles" or "Reader Mode")
- [ ] Verify this won't trigger App Store rejection

#### 4b. "Tip Jar" Placement

Tip Jar sits alongside "Upgrade to Pro" in the Support section. This is fine, but consider: if someone is already paying $3.99/mo, seeing a Tip Jar might feel like double-dipping.

- [ ] Only show Tip Jar to Pro subscribers (as a thank-you option)
- [ ] Or remove it entirely for v1.0 and add it later once you have loyal users

#### 4c. AI Summaries Counter

"0 of 5 used today" - this counter creates anxiety. Users start rationing their summaries instead of using the feature freely. This reduces engagement with your core differentiator.

- [ ] If you raise the limit to 15/day (per recommendation #1), the anxiety effect is reduced
- [ ] Consider showing the counter only when the user has used >50% of their daily limit
- [ ] Or reframe as "15 remaining" without showing "X of Y used" (less pressure)

---

## 5. MEDIUM: AI Summary Screen Polish

### What's Good

- TL;DR at the top is the right pattern
- Key Points with categorized topics is genuinely useful
- "3 supporting comments" with View button is smart - lets users drill in
- Share button in the header for export

### What Could Improve

- [ ] Add a "Regenerate" button - if the summary isn't good, let users retry (costs them 1 more API call, but it's their key)
- [ ] Show which AI provider/model generated the summary (small text at the bottom: "Generated by Groq - Llama 3.1")
- [ ] Add a way to expand a Key Point inline instead of only "View" (which presumably navigates away)
- [ ] Consider adding a "Copy as Markdown" quick action alongside the share button

---

## 6. MEDIUM: Pricing Adjustment Consideration

### Current Pricing
- Monthly: $3.99/mo
- Annual: $19.99/yr ($1.67/mo)

### Observation

The annual discount is **58%** ($47.88 vs $19.99). That's extremely aggressive. It means:
- Annual subscribers generate $19.99/yr = $1.40 after Apple's 30% cut per month
- Monthly subscribers generate $3.99/mo = $2.79 after Apple's cut per month

You're incentivizing the plan that earns you half the revenue. For a bootstrapped product at this stage, you need cash flow.

### Options

**Option A (Recommended):** Raise annual to $29.99/yr ($2.50/mo) - still a 37% discount, still compelling, but much better unit economics.

**Option B:** Keep current pricing but default-select Monthly instead of Annual. Let users discover the annual discount.

**Option C:** Keep as-is. The 58% discount drives commitment and reduces churn. Accept lower revenue per user for better retention.

- [ ] Decide on pricing strategy before launch
- [ ] If changing, update StoreKit configuration and paywall UI

---

## 7. LOW: Pre-Launch Checklist Items

These are standard but worth confirming:

- [ ] App Store screenshots are ready (6.7" and 6.1" iPhone, plus iPad if supporting)
- [ ] App Store description written with keyword optimization
- [ ] Privacy Policy URL is live and linked in App Store Connect
- [ ] Terms of Service URL is live
- [ ] Support URL points to a working page (or the website we're building)
- [ ] App category is correct (News or Productivity)
- [ ] Age rating is set appropriately
- [ ] In-App Purchase products are approved in App Store Connect
- [ ] TestFlight build has been tested on multiple device sizes
- [ ] Crash-free rate is >99% on latest TestFlight build
- [ ] Deep links / universal links configured (for sharing from website)

---

## 8. LOW: Feature Naming Clarity

### "Mute Topics" vs "Semantic Concept Muting"

The app says "Mute Topics" in Settings. The business plan calls it "Semantic Concept Muting." For the website and marketing, pick one term and be consistent.

**Recommendation:** Use "Smart Mute" or "Topic Muting" in user-facing UI. Use "Semantic Content Filtering" in technical/marketing copy when explaining how it works.

- [ ] Decide on consistent feature naming
- [ ] Update Settings label if needed
- [ ] Use the same terminology on the website

---

## Summary: Must-Do Before Monday

| Priority | Item | Effort |
|----------|------|--------|
| CRITICAL | Raise free AI summary limit to 15/day | Small |
| CRITICAL | Update paywall copy to lead with real features | Small |
| HIGH | Add privacy labels (Local vs Cloud) to AI providers | Small |
| HIGH | Clarify "Block Ads" feature naming | Small |
| MEDIUM | Decide on annual pricing ($19.99 vs $29.99) | Decision only |
| MEDIUM | Hide usage counter until >50% used | Small |
| LOW | Add "Regenerate" button to AI Summary | Medium |
| LOW | Show which model generated the summary | Small |

The critical and high items are all small changes but will significantly improve how the product is perceived on launch day, especially on HN where every detail gets scrutinized.
