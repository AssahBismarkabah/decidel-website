# Decidel v2.0 - Deep Research & Analytics Feature

**Status**: Post-Launch Roadmap (Build after v1.0 validation)
**Prerequisite**: Core product validated with paying users
**Date**: February 2026

---

## Overview

An AI-powered intelligence layer that synthesizes patterns across HN threads to surface opportunities, trends, pain points, and market gaps. Transforms Decidel from an HN reader into an HN intelligence tool.

---

## Why This Feature

Hacker News is one of the richest datasets for technology and startup intelligence:

- Founders discuss failures and lessons learned openly
- Developers complain about tools and workflows publicly
- Trends surface in comments months before mainstream coverage
- "Ask HN" threads reveal real unmet needs
- "Show HN" threads reveal what's been attempted and what failed

No tool currently synthesizes this signal. Users do it manually by reading hundreds of threads over weeks. Decidel can automate this.

---

## Implementation Phases

### Phase 1: Topic Tracking (v1.1 - First update post-launch)

**What**: Users pick categories to follow. Decidel generates weekly digests summarizing all relevant HN activity in that category.

**How it works**:
1. User creates a tracked topic (e.g., "Rust ecosystem", "Developer tools", "AI infrastructure")
2. App scans daily HN threads and caches relevant ones
3. Weekly: AI synthesizes a digest from all matched threads
4. User receives a push notification with their digest

**Digest format**:
```
Weekly Topic Digest: Developer Tools
Period: Feb 10 - Feb 16, 2026
Threads analyzed: 34

## Top Discussions
- [Thread title] - 245 comments - Key takeaway summary
- [Thread title] - 189 comments - Key takeaway summary
- [Thread title] - 122 comments - Key takeaway summary

## Emerging Themes
- Theme 1: Brief description of recurring pattern
- Theme 2: Brief description of recurring pattern

## Notable Complaints / Pain Points
- "Tool X doesn't handle Y well" (mentioned across 3 threads)
- "No good solution for Z" (mentioned across 2 threads)
```

**Scope**:
- Free tier: 1 tracked topic
- Pro tier: Unlimited tracked topics

**Technical requirements**:
- Background thread scanning and categorization (can use existing AI provider)
- Local storage for weekly thread cache
- Push notification for digest delivery
- New UI: Topic management screen + digest reader

**Validation metrics**:
- Do >20% of Pro users create a tracked topic?
- Do users read their weekly digests? (>50% open rate)
- Do users create multiple topics? (signals demand for deeper features)

---

### Phase 2: Deep Dive Analysis (v2.0)

**What**: On-demand deep research on any topic, question, or domain. User asks a research question, the agent analyzes relevant HN threads and produces a structured report.

**How it works**:
1. User enters a research query:
   - "What are the biggest pain points in CI/CD tooling?"
   - "What opportunities exist in the local-first software space?"
   - "What are developers saying about Kotlin Multiplatform adoption?"
2. Agent searches HN for relevant threads (recent + historical)
3. Agent analyzes comments across threads for patterns
4. Agent produces a structured research report

**Report format**:
```
Deep Research: CI/CD Pain Points
Sources: 87 threads analyzed | 2,340 comments processed
Period: Last 6 months

## TL;DR
One-paragraph executive summary of findings

## Trend Summary
What's changing in this space right now. What's gaining traction,
what's losing it, and why.

## Pain Points (ranked by frequency and intensity)

### 1. Slow build times in monorepos
Frequency: Mentioned in 23 threads
Intensity: High frustration
Context: Developers report 15-30 min build times. Existing solutions
(Bazel, Nx) have steep learning curves.
Key quote: "We spent 2 weeks setting up Bazel and it still doesn't
work with our Gradle setup" - 145 upvotes

### 2. YAML configuration complexity
Frequency: Mentioned in 18 threads
Intensity: Medium frustration
Context: ...

## Existing Solutions & Their Weaknesses
| Solution | What users like | What users complain about |
|----------|----------------|--------------------------|
| GitHub Actions | Ecosystem, free tier | YAML hell, debugging |
| CircleCI | Speed | Pricing changes, config |
| ... | ... | ... |

## Opportunity Gaps
Problems mentioned repeatedly with no good solution linked:
1. Gap description - evidence from threads
2. Gap description - evidence from threads

## Key Threads to Read
The 5 most insightful discussions on this topic:
1. [Thread title](link) - Why it matters
2. ...
```

**Scope**:
- Not available on Free tier
- Pro tier: 3 deep dives per month
- Research tier ($9.99/mo): Unlimited deep dives + saved research library

**Technical requirements**:
- HN search integration (Algolia HN Search API)
- Large context window processing (aggregate many threads into one analysis)
- Report storage and management UI
- Share/export reports as PDF or Markdown
- Token usage will be significant - user's API key covers this

**Key technical consideration**:
The user's API key handles all inference costs. A single deep dive might process thousands of comments, which could cost $0.50-$2.00 in API calls depending on the provider and model. The app should:
- Show an estimated token/cost warning before running a deep dive
- Allow the user to set a scope (last 30 days vs last 6 months vs last year)
- Cache results so re-running the same query doesn't re-process

---

### Phase 3: Continuous Intelligence (v3.0 - Future)

**What**: Always-on research agent that monitors HN for user-defined signals and alerts in real-time.

**Features**:
- **Opportunity Alerts**: "A new pain point is trending in your tracked domain"
- **Competitor Monitoring**: Track mentions of specific companies/products
- **Sentiment Shifts**: "Developer sentiment toward [tool] has dropped 30% this month"
- **Idea Validation**: "12 people asked for [thing you're building] this month"
- **Historical Trends**: Charts showing topic frequency and sentiment over months
- **Research Library**: Saved reports with annotations and notes

**Scope**: This is essentially a separate product tier or standalone product. Only build if Phase 2 shows strong engagement and willingness to pay.

**Potential pricing**:
- Decidel Intelligence: $14.99/mo or $29.99/mo
- Target: indie hackers, VCs, product managers, market researchers

---

## Market Positioning

### Current (v1.0): "The smartest way to read Hacker News"
- Target: HN power users who want to save time
- Value: Read faster, filter noise, get summaries

### Future (v2.0+): "HN intelligence for builders"
- Target: Expands to indie hackers, PMs, VCs, researchers
- Value: Surface opportunities and trends from HN's collective intelligence

This positioning evolution is natural: users start by reading HN smarter, then realize the AI can help them extract business intelligence from the same content.

---

## Competitive Landscape for This Feature

| Potential Competitor | What They Do | Why Decidel Wins |
|---------------------|-------------|-----------------|
| Exploding Topics | Trend tracking from Google/Reddit | Not HN-specific, expensive ($99/mo+) |
| SparkToro | Audience research | Different data source, not real-time |
| Gummy Search | Reddit audience research | Reddit only, no HN, $29/mo |
| Manual HN browsing | Read everything yourself | 2+ hours/day, no synthesis |

**Key insight**: Gummy Search proved there's a market for "community intelligence" tools (Reddit-focused, charges $29/mo). HN is a higher-signal community with a more valuable audience (developers, founders, VCs). A similar tool focused on HN could work.

---

## Revenue Impact Estimates

### Conservative Scenario
- 10% of Pro users upgrade to Research tier
- 500 Pro users x 10% = 50 Research users
- 50 x $9.99/mo = $499/mo additional revenue

### Optimistic Scenario
- Research tier attracts new users who aren't HN daily readers
- 500 Research users (mix of existing + new)
- 500 x $9.99/mo = $4,995/mo additional revenue

### Stretch Scenario
- Decidel Intelligence becomes a standalone product
- Attracts VCs, researchers, product managers
- 1,000 users x $14.99/mo = $14,990/mo

---

## Build vs. Wait Decision Criteria

**Build Phase 1 (Topic Tracking) when**:
- v1.0 has 500+ active users
- Pro conversion rate is >5%
- Users are requesting "more from the AI"
- Core app is stable with <0.5% crash rate

**Build Phase 2 (Deep Research) when**:
- Phase 1 topic tracking has >20% adoption among Pro users
- Users are creating 3+ tracked topics on average
- Users explicitly request deeper analysis capabilities
- You have confidence in the AI quality for synthesis tasks

**Build Phase 3 (Continuous Intelligence) when**:
- Phase 2 shows willingness to pay premium ($9.99+)
- Deep dive reports are being shared/exported regularly
- You see demand from non-HN-reader audience (VCs, PMs)
- Revenue supports hiring or significant time investment

---

## Technical Notes

### API Considerations
- Algolia HN Search API: Free, no auth required, good for historical search
- Rate limits: 10,000 requests/hour (sufficient for research queries)
- HN Firebase API: Real-time data, free, no auth
- Both APIs are unofficial but stable and widely used

### Token Cost Estimates (User's API Key)
| Operation | Estimated Tokens | Cost (GPT-4o) | Cost (Groq/Llama) |
|-----------|-----------------|---------------|-------------------|
| Weekly topic digest | 50K-100K | $0.15-$0.30 | $0.01-$0.03 |
| Deep dive (30 days) | 200K-500K | $0.60-$1.50 | $0.06-$0.15 |
| Deep dive (6 months) | 500K-2M | $1.50-$6.00 | $0.15-$0.60 |

Users should be warned about estimated costs before running deep dives.

### Data Storage
- Thread cache for topic tracking: ~50MB per tracked topic per month
- Research reports: ~1-5MB each
- Consider iCloud sync for research library
- Local-first: all data stored on device

---

## Summary

| Phase | Feature | When to Build | Pricing |
|-------|---------|--------------|---------|
| 1.1 | Topic Tracking (weekly digests) | After 500+ active users | Include in Pro |
| 2.0 | Deep Dive Research | After topic tracking validated | New tier $9.99/mo |
| 3.0 | Continuous Intelligence | After deep dives validated | Premium $14.99-29.99/mo |

**Do not build any of this before v1.0 is validated with paying users.**
