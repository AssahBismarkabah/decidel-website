# Decidel: Business Whitepaper

**An AI-Powered Hacker News Client for the Modern Developer**

*Version 1.0 | January 2026*

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Problem Statement](#2-problem-statement)
3. [Market Opportunity](#3-market-opportunity)
4. [Product Solution](#4-product-solution)
5. [Competitive Analysis](#5-competitive-analysis)
6. [Business Model](#6-business-model)
7. [Go-to-Market Strategy](#7-go-to-market-strategy)
8. [Technical Architecture](#8-technical-architecture)
9. [Risk Analysis](#9-risk-analysis)
10. [Financial Projections](#10-financial-projections)
11. [Conclusion](#11-conclusion)

---

## 1. Executive Summary

Decidel is a native iOS application that reimagines how busy tech professionals consume Hacker News content. By leveraging on-device AI for semantic content filtering and intelligent thread summarization, Decidel transforms the traditionally time-consuming HN browsing experience into an efficient, curated information stream.

**Key Value Proposition**: Save 30+ minutes daily by intelligently filtering noise and extracting insights from HN discussions.

**Business Model**: Freemium SaaS with Pro tier at $3.99/month

**Target Market**: 300,000+ daily active HN users, focusing on time-constrained developers and entrepreneurs

**Revenue Target**: $2,500 MRR Year 1, scaling to $50,000 MRR by Year 3

**Investment Required**: Bootstrap ($0 external funding)

---

## 2. Problem Statement

### The Information Overload Challenge

Hacker News serves approximately 5 million monthly unique visitors and 300,000 daily active users. These users—primarily developers, founders, and tech professionals—face a persistent challenge: **efficiently extracting value from high-volume, unstructured content**.

### Quantified Pain Points

| Problem | Impact |
|---------|--------|
| Average time spent browsing HN daily | 45-90 minutes |
| Percentage of content relevant to individual users | 15-25% |
| Time lost to repetitive topic discussions | 20-30 minutes/day |
| Comments read before finding key insights | 50-100+ per thread |

### User Testimonials (HN Community Feedback)

> "I waste so much time reading the same crypto/AI debates over and over."

> "By the time I find the actually insightful comment, I've lost 20 minutes."

> "I wish I could just mute entire concepts, not just keywords."

### The Keyword Filter Limitation

Existing solutions offer keyword-based filtering, which fails because:

- "Apple" blocks fruit discussions AND tech news
- "AI" is too broad—users want to filter hype, not substance
- Context matters—the same word has different meanings in different threads

**Decidel solves this with semantic understanding**, not pattern matching.

---

## 3. Market Opportunity

### Total Addressable Market (TAM)

The broader productivity software market is projected to reach $189 billion by 2033, with AI productivity tools specifically growing at 15.9% CAGR to $36.4 billion.

### Serviceable Addressable Market (SAM)

Developer productivity tools market: $13.7 billion by 2030 (16.4% CAGR)

### Serviceable Obtainable Market (SOM)

| Segment | Size | Rationale |
|---------|------|-----------|
| HN Monthly Active Users | 5,000,000 | Platform statistics |
| iOS Users (estimated 40%) | 2,000,000 | US/EU tech demographic skew |
| Willing to pay for tools | 200,000 | 10% of iOS segment |
| Realistic Year 3 capture | 50,000 | 25% of paying segment |

### Market Timing Factors (2026)

1. **AI Maturation**: Moving from hype to practical utility—users expect AI features
2. **On-Device ML**: Apple's Core ML enables cost-effective, private AI processing
3. **Subscription Fatigue Plateau**: Users now accept paying for genuine value
4. **Remote Work Normalization**: Continued demand for async information tools

### Supporting Data

- Agentic AI market expected to reach $8.5B in 2026, $35B by 2030 (Goldman Sachs)
- Developer tools consistently show 10-15% conversion rates for quality products
- HN "Show HN" launches routinely drive 10,000+ visitors in 48 hours

---

## 4. Product Solution

### Core Features

#### 4.1 Semantic Concept Muting (Primary Differentiator)

Unlike keyword filters, Decidel understands context:

| User Intent | Keyword Filter Result | Decidel Semantic Filter Result |
|-------------|----------------------|-------------------------------|
| "Hide crypto speculation" | Blocks all crypto mentions | Hides price/investment talk, keeps technical blockchain content |
| "No more AI hype" | Blocks everything with "AI" | Filters breathless announcements, keeps engineering discussions |
| "Skip startup funding news" | Misses "raised", "series", etc. | Understands fundraising context regardless of terminology |

**How it works**: On-device LLM classifies content against user-defined concept profiles, learning from feedback to improve accuracy.

#### 4.2 Intelligent Thread Summarization

For threads with 100+ comments, Decidel extracts:

- **Key Arguments**: The 3-5 main positions in the discussion
- **Counter-Arguments**: Dissenting views and rebuttals
- **Source Links**: External references cited by commenters
- **Expert Indicators**: Comments from users with relevant domain expertise

#### 4.3 Offline Reading Bundles

- One-tap "reading pack" generation for commutes
- Smart selection based on reading history and time available
- Background sync when on WiFi

#### 4.4 Export & Share

- Export threads as clean Markdown
- Share summaries to Notes, Notion, Obsidian
- Generate "weekly digest" of saved content

### User Experience Flow

![User Experience Flow](diagrams/Decidel_User_Experience_Flow.png)

*Source: [diagrams/user-experience-flow.puml](diagrams/user-experience-flow.puml)*

### Feature Tiers

| Feature | Free | Pro ($3.99/mo) |
|---------|------|----------------|
| HN browsing | ✓ | ✓ |
| Basic keyword filters | ✓ | ✓ |
| Semantic concept muting | 3 concepts | Unlimited |
| Thread summarization | 5/day | Unlimited |
| Offline bundles | 1 active | Unlimited |
| Export to Markdown | ✓ | ✓ |
| Priority support | - | ✓ |

---

## 5. Competitive Analysis

### Direct Competitors

| App | AI Features | Strengths | Weaknesses | Rating |
|-----|-------------|-----------|------------|--------|
| **Octal** | None | Beautiful UI, fast, reliable | No intelligence layer | 4.8 (2.7K) |
| **HACK** | None | Customizable, no ads | Dated interface, notification bugs | 4.7 (1.5K) |
| **Peeks** | Basic AI insights | Novel feed format | Shallow summaries, verbose | N/A |
| **Emerge HN** | None | Open source, clean | Basic feature set | Beta |
| **LevelUp** | Article summaries | Bookmarking | Accuracy issues | N/A |

### Competitive Positioning Matrix

![Competitive Positioning Matrix](diagrams/Competitive_Positioning_Matrix.png)

*Source: [diagrams/competitive-positioning.puml](diagrams/competitive-positioning.puml)*

### Decidel's Competitive Moat

1. **Semantic Muting**: No competitor offers concept-level filtering
2. **Counter-Argument Extraction**: Unique thread analysis feature
3. **On-Device Processing**: Privacy-first approach, no data leaves device
4. **Native Performance**: SwiftUI ensures 60fps, instant interactions

### Barriers to Entry for Competitors

- Adding AI to existing apps requires architectural changes
- On-device ML expertise is specialized
- Semantic understanding requires fine-tuned models
- First-mover advantage in niche creates brand recognition

---

## 6. Business Model

### Revenue Model: Freemium SaaS

**Free Tier**: Full HN client with limited AI features
- Drives adoption and word-of-mouth
- Demonstrates value before asking for payment

**Pro Tier**: $3.99/month or $19.99/year (35% discount)
- Unlimited AI features
- Target: power users who derive daily value

### Unit Economics

| Metric | Value | Notes |
|--------|-------|-------|
| Monthly subscription | $4.99 | Competitive with similar tools |
| Annual subscription | $39.00 | 35% discount incentivizes commitment |
| Apple's cut | 30% (Y1), 15% (Y2+) | Small Business Program eligible |
| Net revenue per Pro user | $3.49-$4.24 | After Apple's commission |
| CAC (Customer Acquisition Cost) | ~$0 | Organic/community-driven |
| LTV (Lifetime Value) | $42-$51 | Assuming 12-month average retention |
| LTV:CAC Ratio | >40:1 | Excellent for bootstrapped SaaS |

### Break-Even Analysis

| Cost Category | Monthly Cost |
|---------------|--------------|
| Apple Developer Program | $8.33 ($99/year) |
| Domain/basic infrastructure | $15 |
| API costs (if any cloud AI) | $50-200 |
| **Total Fixed Costs** | ~$75-225 |

**Break-even point**: 22-65 Pro subscribers (achievable within first month of launch)

### Revenue Projections Summary

| Year | Users | Pro Conversion | MRR | ARR |
|------|-------|----------------|-----|-----|
| 2026 | 5,000 | 10% | $2,500 | $30,000 |
| 2027 | 20,000 | 15% | $15,000 | $180,000 |
| 2028 | 50,000 | 20% | $50,000 | $600,000 |

---

## 7. Go-to-Market Strategy

### Phase 1: Pre-Launch (Weeks 1-4)

**Objective**: Build anticipation and validate demand

| Action | Channel | Expected Outcome |
|--------|---------|------------------|
| Landing page with email capture | ProductHunt upcoming, personal site | 200-500 signups |
| Teaser posts | X/Twitter, relevant subreddits | 50-100 signups |
| Beta invite to HN power users | Direct outreach | 20-30 beta testers |
| Build in public updates | X/Twitter | Community engagement |

### Phase 2: Beta Launch (Weeks 5-8)

**Objective**: Validate product-market fit, gather feedback

| Action | Channel | Expected Outcome |
|--------|---------|------------------|
| TestFlight beta release | Email list | 100-200 active testers |
| Feedback collection | In-app, Discord | Feature prioritization data |
| Iterate on core features | - | >30% Day-2 retention |

**Key Metrics to Validate**:
- Day-1 retention > 60%
- Day-7 retention > 30%
- AI feature usage > 50% of sessions
- NPS > 40

### Phase 3: Public Launch (Week 9)

**Objective**: Maximize launch visibility

| Action | Channel | Expected Outcome |
|--------|---------|------------------|
| "Show HN" post | Hacker News | 10,000+ visitors, 1,000+ downloads |
| Product Hunt launch | ProductHunt | Top 10 of the day, 500+ upvotes |
| X/Twitter announcement | Personal + community accounts | 5,000+ impressions |
| Press/blog outreach | Indie Hackers, dev blogs | 2-3 features |

### Phase 4: Growth (Ongoing)

**Objective**: Sustainable organic growth

| Strategy | Implementation |
|----------|---------------|
| Content marketing | Monthly blog posts on HN insights, AI development |
| Community building | Discord server for power users |
| Feature releases | Monthly updates announced on X |
| User testimonials | In-app prompt after positive interactions |
| Referral program | Free Pro month for successful referrals |

### Marketing Budget

| Item | Cost | Frequency |
|------|------|-----------|
| ProductHunt launch | $0 | One-time |
| Show HN | $0 | One-time |
| X/Twitter ads (optional) | $100-300 | Monthly test |
| **Total Year 1** | $0-3,600 | Minimal paid spend |

---

## 8. Technical Architecture

### Technology Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| UI Framework | SwiftUI | Native performance, modern Apple integration |
| Local Storage | SwiftData | Seamless persistence, iCloud sync ready |
| Networking | async/await + URLSession | Modern concurrency, efficient |
| On-Device AI | Core ML + local LLM | Privacy, no API costs, offline capable |
| Analytics | TelemetryDeck | Privacy-focused, GDPR compliant |

### System Architecture

![System Architecture](diagrams/Decidel_System_Architecture.png)

*Source: [diagrams/system-architecture.puml](diagrams/system-architecture.puml)*

### AI Implementation

**On-Device Model Strategy**:

1. **Base Model**: Quantized Llama/Phi variant optimized for iOS
2. **Fine-Tuning**: Custom training on HN content patterns
3. **Inference**: Core ML for hardware acceleration (Neural Engine)
4. **Fallback**: Rule-based heuristics when model unavailable

**Privacy Guarantees**:
- All AI processing happens on-device
- No user content transmitted to external servers
- Reading history never leaves the device
- Optional iCloud sync (user-controlled)

### Development Timeline

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| MVP Core | 2 weeks | Basic HN client, navigation, reading |
| AI Integration | 2 weeks | Semantic filtering, summarization |
| Polish & Beta | 2 weeks | UI refinement, TestFlight release |
| Launch Prep | 1 week | App Store assets, marketing materials |
| **Total** | **7 weeks** | Production-ready app |

---

## 9. Risk Analysis

### Risk Matrix

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Low initial adoption | Medium | High | Strong launch strategy, beta validation |
| AI feature commoditization | High | Medium | Focus on unique semantic muting, iterate fast |
| HN API rate limiting | Medium | Medium | Aggressive caching, background sync |
| App Store rejection | Low | High | Follow guidelines strictly, no web scraping |
| Competitor response | Medium | Low | First-mover advantage, community loyalty |
| User retention challenges | Medium | High | Continuous feature development, engagement loops |

### Detailed Risk Mitigation

#### Risk 1: Low Adoption

**Indicators**: <500 downloads in first week, <5% conversion
**Response**:
- Pivot messaging to emphasize specific pain points
- Increase beta testing to refine value proposition
- Consider freemium expansion to drive adoption

#### Risk 2: AI Commoditization

**Indicators**: Competitors add similar AI features
**Response**:
- Double down on semantic muting (hardest to copy)
- Accelerate feature roadmap
- Build community moat through engagement

#### Risk 3: Technical Limitations

**Indicators**: Model accuracy <80%, slow inference
**Response**:
- Hybrid approach: on-device + optional cloud
- Simplify initial AI features
- Focus on performance optimization

---

## 10. Financial Projections

### Three-Year Forecast

#### Year 1 (2026) - Launch & Validation

| Quarter | Users | Pro Users | MRR | Cumulative Revenue |
|---------|-------|-----------|-----|-------------------|
| Q1 | 500 | 25 | $125 | $375 |
| Q2 | 1,500 | 100 | $500 | $1,875 |
| Q3 | 3,000 | 250 | $1,250 | $5,625 |
| Q4 | 5,000 | 500 | $2,500 | $13,125 |

**Year 1 Total Revenue**: ~$21,000
**Year 1 Expenses**: ~$2,500 (minimal infrastructure)
**Year 1 Net**: ~$18,500

#### Year 2 (2027) - Growth

| Metric | Value |
|--------|-------|
| End-of-year users | 20,000 |
| Pro conversion rate | 15% |
| Pro users | 3,000 |
| Average MRR | $10,000 |
| Annual Revenue | ~$120,000 |
| Expenses | ~$10,000 |
| Net Profit | ~$110,000 |

#### Year 3 (2028) - Scale

| Metric | Value |
|--------|-------|
| End-of-year users | 50,000 |
| Pro conversion rate | 20% |
| Pro users | 10,000 |
| Average MRR | $35,000 |
| Annual Revenue | ~$420,000 |
| Expenses | ~$30,000 |
| Net Profit | ~$390,000 |

### Scenario Analysis

| Scenario | Year 3 Users | Year 3 ARR | Probability |
|----------|--------------|------------|-------------|
| Conservative | 20,000 | $120,000 | 30% |
| Base Case | 50,000 | $420,000 | 50% |
| Optimistic | 100,000 | $1,000,000 | 20% |

### Key Assumptions

1. HN maintains current traffic levels
2. No major platform changes from Apple
3. AI costs continue decreasing
4. Word-of-mouth drives 60%+ of growth
5. Churn rate stabilizes at 5-8% monthly

---

## 11. Conclusion

### Why Decidel Will Succeed

1. **Clear Problem-Solution Fit**: Information overload is real, semantic filtering is the solution
2. **Underserved Market**: No competitor offers concept-level AI muting
3. **Favorable Economics**: Near-zero CAC, high LTV, low operational costs
4. **Technical Moat**: On-device AI expertise creates barrier to quick copying
5. **Right Timing**: AI maturation + continued remote work + HN loyalty

### Success Metrics

| Milestone | Target Date | Metric |
|-----------|-------------|--------|
| Beta validation | Q1 2026 | >30% Day-7 retention |
| Break-even | Q2 2026 | 100 Pro subscribers |
| Product-market fit | Q3 2026 | >40 NPS score |
| Sustainable growth | Q4 2026 | 20% MoM user growth |
| Profitability | Q1 2027 | $5,000 MRR |

### The Path Forward

Decidel represents an opportunity to build a sustainable, profitable indie business serving a passionate community. By focusing relentlessly on the core value proposition—saving busy developers time through intelligent content curation—and maintaining lean operations, this project can generate meaningful revenue while solving a genuine problem.

The market exists. The technology is ready. The timing is right.

**Next Step**: Build the MVP and validate with beta users.

---

## Appendix

### A. Glossary

| Term | Definition |
|------|------------|
| HN | Hacker News (news.ycombinator.com) |
| MRR | Monthly Recurring Revenue |
| ARR | Annual Recurring Revenue |
| CAC | Customer Acquisition Cost |
| LTV | Lifetime Value |
| NPS | Net Promoter Score |
| Core ML | Apple's on-device machine learning framework |

### B. References

1. Grand View Research - AI Productivity Tools Market Report, 2033
2. Mordor Intelligence - Software Development Tools Market, 2030
3. Goldman Sachs - AI Agents Market Analysis
4. Deloitte - 2026 Technology Predictions
5. HN Community Discussions and User Feedback

### C. Contact

For questions about this whitepaper or Decidel:
- Website: [decidel.app]
- Email: [hello@decidel.app]
- X/Twitter: [@DecidelD91907]

---

*This document is confidential and intended for internal planning purposes.*

*Last Updated: January 2026*
