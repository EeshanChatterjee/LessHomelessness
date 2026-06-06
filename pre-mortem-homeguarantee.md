# Pre-Mortem: HomeGuarantee — Landlord Guarantee Platform
**Date**: June 6, 2026
**Status**: Draft
**PRD version**: 1.0 (Houston Pilot)

> Imagine it's June 2028. HomeGuarantee has shut down. The 500-unit milestone was never reached. A handful of landlords got paid out and left. The Way Home partnership collapsed. The guarantee fund ran dry. What went wrong?

---

## Risk Summary

| Category | Count |
|----------|-------|
| 🐯 Launch-blocking Tigers | 3 |
| 🐯 Fast-follow Tigers | 3 |
| 🐯 Track Tigers | 2 |
| 📄 Paper Tigers | 4 |
| 🐘 Elephants | 5 |

---

## 🐯 Launch-Blocking Tigers

These must be mitigated before the pilot goes live. If any one of these is unresolved, the PRD as written will fail.

---

### T1 — The guarantee fund depletes before scale

**Likelihood**: High | **Impact**: Existential

The PRD assumes a 12% claims rate and $3,500 average payout, sizing the fund at $2M for 500 units. But these are estimates with no historical basis for this specific product design in this specific population. There is no Phase 1 data yet. The fund could be wiped out in months.

Quick math on a bad scenario: 500 units × 20% claims rate × $8,000 avg payout = $800K in year one. At that rate the $2M fund has ~2.5 years of runway — but only if placements don't accelerate. If Phase 2 scales to 200 active units before the claims rate is validated, a single bad cohort could wipe the reserve.

Worse: there is no insurance backstop in Phase 1 or Phase 2. The fund is the only buffer. If it runs out mid-pilot, every landlord who has a pending claim goes unpaid, every enrolled landlord churns, and the product's reputation in Houston is destroyed permanently.

**Mitigation required before launch:**
- Set a fund depletion trigger: if claims exceed 15% in any 60-day window, pause new enrollments and convene a risk review
- Cap Phase 1 at 50 units and do not scale to Phase 2 until claims rate is validated over ≥90 days
- Secure a secondary capital commitment (not drawn, but committed) of $1M from a foundation or impact investor for drawdown if the primary fund depletes
- Get a non-binding term sheet from one insurance or reinsurance partner before Phase 2 launch — even if the product isn't insurable yet, knowing the path to insurability prevents the fund from becoming a black box

**Owner**: CEO / CFO | **Deadline**: Before first landlord enrollment

---

### T2 — Housing Authority procurement never converts to paying revenue

**Likelihood**: High | **Impact**: Existential (to the business model)

The PRD lists the Housing Authority as the primary buyer at $75–100/unit/month. But Houston Housing Authority froze its waitlist in December 2023 citing budget pressure. It is in an austerity posture. Asking a financially constrained government agency to pay $75/unit/month for a new platform, through a procurement process that typically takes 6–18 months, is a significant revenue assumption to build a business on.

If the HA doesn't convert, the entire revenue model is philanthropic — and philanthropy will not sustain a $37.5K–$50K/month operating cost at scale. The product runs out of money.

**Mitigation required before launch:**
- Do not write the HA as the primary revenue source in the model until at least one discovery call with HHA procurement confirms budget availability and willingness-to-pay
- Model a "philanthropy-only" scenario explicitly: what does the product look like if HHA never pays? Can it survive on $500K/year in grants at 200 units?
- Identify an alternative payer: The Way Home's community partners, CFTH's federal CoC grant (over $3.5B nationally announced), HUD's CoCBuilds NOFO, or city HOME funds — one of these should be the actual revenue source in Phase 1, not HHA
- Treat HHA revenue as a Phase 3 milestone, not a Phase 2 assumption

**Owner**: CEO / BD Lead | **Deadline**: Before Phase 2 planning (Month 6)

---

### T3 — HMIS data sharing is blocked, making the matching platform unbuildable

**Likelihood**: Medium-High | **Impact**: High (forces full rebuild of Phase 2)

The matching platform's core value — pre-qualified tenant profiles fed from coordinated entry — depends on HMIS access. HMIS data is governed by HUD's HMIS Data Standards, which prohibit sharing personally identifiable information without explicit client consent. Additionally, 42 CFR Part 2 governs substance use treatment records, which cover a significant portion of The Way Home's population (46% have substance use disorders).

Even with client consent, getting a data sharing agreement executed between a startup (HomeGuarantee) and a government-adjacent lead agency (CFTH) involves legal review on both sides, HMIS system admin configuration, and API development from CFTH's side. This has realistically a 6–12 month timeline from first conversation to working data flow.

If blocked entirely, the Phase 2 matching platform reverts to manual: case managers copy-paste tenant profiles into a HomeGuarantee form. This doubles their workload, undercuts the product's efficiency promise, and makes it very hard to scale past 100 units without hiring operations staff.

**Mitigation required before launch:**
- Begin HMIS data sharing legal negotiation in Month 1 — not Month 6 when Phase 2 is being built
- Design Phase 1 to work entirely on manually submitted, anonymized tenant profiles (case manager fills out a web form) — remove any dependency on HMIS API for the first 6 months
- Get a written, signed commitment from CFTH leadership on data sharing intent before building any API integration
- Explore a "federated" approach: case managers log into HMIS, and HomeGuarantee provides a browser extension that extracts the relevant fields — reduces the formal data sharing agreement to a usage policy question

**Owner**: CTO / Partnership Lead | **Deadline**: Data sharing MOU signed before Phase 2 build begins

---

## 🐯 Fast-Follow Tigers

Real risks that won't kill the pilot but will limit scale if not addressed in the first 3–6 months post-launch.

---

### T4 — Landlord recruitment is slower than modeled (200 in 12 months)

**Likelihood**: High | **Impact**: High

The PRD targets 200 participating landlords by month 12, averaging ~17 new landlords per month. The Way Home's existing landlord team — a full-time team working this problem for years — currently struggles to recruit landlords at this pace. HomeGuarantee is a better offer (financial guarantee vs. a handshake), but 17 new landlords per month still requires a dedicated outbound sales motion that is absent from the staffing plan.

The PRD's Phase 1 staffing includes "1 Landlord Liaison." One person cannot recruit, onboard, and retain 200 landlords in 12 months while also handling ongoing tenant placements and landlord support.

**Planned response:**
- Add landlord recruitment KPIs to the Month 1 plan: pipeline, conversion rate, and time-to-enroll
- Build a referral program in Month 3 (not Phase 3 as the PRD has it): enrolled landlords who refer others are the highest-conversion channel
- Partner with Houston Apartment Association and Texas Landlord Association for batch outreach — one presentation to 200 members beats 200 cold calls
- Hire a second Landlord Liaison by Month 4 if the pipeline is behind target

**Owner**: Landlord Liaison | **Deadline**: Month 4 hiring decision

---

### T5 — Case manager adoption stalls because the platform adds work rather than removing it

**Likelihood**: Medium | **Impact**: High

Case managers at The Way Home partner orgs are managing dozens of active clients. The PRD asks them to learn a new platform, submit tenant profiles, track placement status, and log tenancy health events — all while continuing to use HMIS. If the platform feels like additional administrative work (rather than a replacement for their existing workflow), they will not use it.

This is a classic B2B2C trap: the operator (case manager) is not the buyer (housing authority) and is not the beneficiary (homeless individual). Nobody is directly incentivizing the case manager to adopt. Without their active use, the matching platform is empty.

**Planned response:**
- Conduct workflow shadowing with 5 case managers in Month 1 before building anything
- Phase 2 product spec must reduce case manager time per placement vs. their current process — if it doesn't, delay the platform build
- Consider making the landlord-facing and case manager-facing interfaces the same simple form, not separate portals — reduce complexity
- Offer a meaningful time-saving: HomeGuarantee handles all HUD inspection scheduling (currently a case manager burden) — make this explicit and prominent in the pitch

**Owner**: Product Lead | **Deadline**: Month 2 (before Phase 2 scoping)

---

### T6 — The affordability gap widens and the FMR top-up model breaks

**Likelihood**: Medium | **Impact**: Medium

The PRD's affordability model assumes Houston's FMR gap stays at 17% (~$209/month for a 1BR). Houston's rental market has been volatile. The FMR is set annually by HUD in October; if Houston rents rise 10–15% in 2026–2027 while FMR lags (as it typically does), the gap could reach 25–30%, requiring a $350–400/month top-up per unit. At 500 units, that's $175K–$200K/month in subsidy that no one has budgeted.

**Planned response:**
- Model the product economics at 25% and 35% affordability gap scenarios — include this in the pitch to funders
- Negotiate with landlords to list units at or near FMR rather than market rate — the guarantee product is the tradeoff
- Monitor HUD FMR announcements annually and flag to board if gap exceeds 25%
- Explore pairing HomeGuarantee with a rental subsidy fund (separate from the guarantee fund) for gap coverage

**Owner**: Finance / Policy Lead | **Deadline**: Included in pitch deck before fundraise

---

## 🐯 Track Tigers

Monitor post-launch. Don't delay the pilot, but define the trigger that would escalate each to launch-blocking.

---

### T7 — Federal voucher cuts reduce the addressable pipeline

Houston has 18,900 active HCVs. Federal funding cuts (already underway per Rice/Kinder 2024 research) could reduce this number. If HCVs fall to 14,000 or below, the pipeline of pre-funded placements shrinks and the product must pivot to direct subsidy or other funding models.

**Trigger**: Any federal announcement of >10% HCV funding reduction → convene board emergency session and model direct subsidy alternative within 30 days.

---

### T8 — Tenant retention rate falls below 75% in early cohorts

The PRD assumes 85% retention at 90 days, matching CFTH's existing benchmark. But CFTH's benchmark applies to its current (more stable) placement pipeline. HomeGuarantee's Phase 1 cohort will include chronically homeless individuals with more complex needs — the "hardest to house" population The Way Home has saved for last. Retention may be lower.

If retention falls below 75%, claims rise, landlords churn, and the guarantee fund is at risk simultaneously.

**Trigger**: If 90-day retention falls below 75% in any monthly cohort → pause new enrollments, conduct case review on failed tenancies, adjust tenant pre-qualification criteria.

---

## 📄 Paper Tigers

Risks that sound alarming but are manageable. Don't spend cycles on these.

---

### P1 — HUD or a government agency launches a competing national program

Government programs take 3–5 years from announcement to operational. HomeGuarantee's advantage is speed and private-market execution. Even if HUD announces a landlord guarantee program tomorrow, it won't be live in Houston in time to matter. If anything, a federal program validates the model and creates a procurement pathway for HomeGuarantee to become the implementation partner.

---

### P2 — Landlord refusal is ideological (racism), not financial — money won't fix it

Research consistently shows landlord behavior is primarily financially driven, not ideologically. Oregon's program, Seattle's Landlord Liaison program, and Minneapolis's results all demonstrate meaningful landlord participation when financial risk is removed. Some landlords will never participate regardless — that's fine. The goal is to move the marginal landlord, not every landlord.

---

### P3 — The $20K guarantee ceiling isn't enough to attract landlords

Oregon's program runs at $20K and attracts landlords. HUD research shows landlord concerns center on small-to-medium losses ($2K–$8K), not catastrophic property damage. $20K is more than enough to cover realistic scenarios. This can be raised in Phase 3 if claims data shows the ceiling being hit frequently.

---

### P4 — Insurance underwriting is impossible for this population

Oregon's program has been operational since 2021. Seattle, Minneapolis, and other cities have comparable programs. There is actuarial precedent. The challenge is not that insurance is impossible — it's that HomeGuarantee doesn't have its own claims history yet. Phase 1 and 2 exist precisely to generate that data. This becomes a real Tiger only if 24 months of data shows claims rates above 20%, which would require fundamental rethinking of the tenant pre-qualification model.

---

## 🐘 Elephants in the Room

The uncomfortable truths the team is probably avoiding. These are the highest-value outputs of this pre-mortem.

---

### E1 — The Way Home may view HomeGuarantee as a threat, not a partner

CFTH already has a landlord team. The Way Home already has a matching function. HomeGuarantee is proposing to do the same things — but as a private company, potentially capturing revenue that currently flows to CFTH's budget, and taking credit for placements that CFTH's infrastructure makes possible.

If CFTH leadership perceives HomeGuarantee as a startup trying to extract value from their decade of relationship-building, the partnership won't just stall — it will actively block access to HMIS, landlord lists, and case manager participation. The entire product fails without CFTH cooperation.

**Conversation to have in Month 1 (not Month 3):** "What does CFTH get out of this partnership? Would a revenue share, a seat on the board, or co-branding make this feel like a joint venture rather than competition?" The answer to this question determines whether the company exists.

---

### E2 — HomeGuarantee controls the product but not the thing that makes or breaks tenancies

The PRD's 85% retention assumption depends on case managers providing timely, high-quality wraparound support. HomeGuarantee has no contractual leverage over the quality of case management delivered by The Way Home's 100+ partner organizations. If a partner nonprofit is understaffed or poorly trained, their clients' tenancies fail, claims spike, and landlords leave — but HomeGuarantee has no mechanism to fix the upstream problem.

This is not acknowledged anywhere in the PRD. The team needs to decide: does HomeGuarantee offer its own case management support (costly), contractually require minimum service standards from partner orgs (complex), or accept this as an uncontrollable risk (dangerous)?

**Conversation to have:** "If a partner nonprofit's clients have a 65% retention rate vs. CFTH's 90%, what do we do? Can we de-list partner orgs from the platform? Do we want to?"

---

### E3 — Placing formerly homeless Black Houstonians into affordable (low-opportunity) neighborhoods replicates the segregation the system created

56% of Houston's homeless population is Black, in a city built on redlining and spatial segregation. The PRD's matching platform will naturally surface affordable vacant units in historically disinvested neighborhoods — because that's where the affordable supply is. Houston HHA data shows fewer than 1% of voucher holders live in high-opportunity areas.

HomeGuarantee as currently designed will place formerly homeless people into the same low-opportunity neighborhoods they came from. This is legal, but it is a predictable outcome that the product team has not discussed. At some point — probably when a journalist writes about it — this will become a story.

**Conversation to have:** "Are we comfortable being a product that efficiently places people into affordable housing without regard to opportunity quality? If not, what levers do we have — neighborhood scoring, incentive multipliers for high-opportunity units, advocacy for inclusionary zoning?" This is not a launch-blocker, but the team should have an explicit position, not stumble into one.

---

### E4 — The founding team probably doesn't have the competencies this product requires

HomeGuarantee requires three competencies that rarely coexist in a single founding team: insurance/fintech expertise (to structure and manage the guarantee fund), government relations (to navigate HHA, HUD, and CFTH procurement), and housing services knowledge (to understand coordinated entry, HMIS, and case management workflows). If the founding team is primarily tech/product-oriented, they will underestimate the complexity of each domain and make avoidable mistakes.

This is worth naming because the instinct for a startup is to hire fast and learn on the job. In this case, the cost of learning on the job includes landlords losing trust, the guarantee fund being mismanaged, and a partnership with CFTH going sideways for avoidable procedural reasons.

**Conversation to have:** "Who on the founding team has closed a government contract? Who has worked in insurance or structured a guarantee fund? Who has worked inside a homeless services organization? If the honest answer is 'nobody,' what's our plan to bring that expertise in — advisor, hire, or founding team addition — before Phase 1 launches?"

---

### E5 — The $2M philanthropic fund raise is harder than it looks and may take 12–18 months

Houston's philanthropic landscape for homelessness is relationship-driven and mostly directed at direct services. Asking a Houston foundation to write a $2M check to a startup that holds it in reserve as a guarantee fund — rather than spending it on shelter beds or meals — is a genuinely unusual ask. Most program officers won't know how to categorize it. It may require catalytic capital from national impact investors (Ford Foundation, MacArthur, Ballmer Group) rather than local Houston funders.

The PRD treats this as a Month 1–2 deliverable with no plan for what happens if it takes until Month 9. If the fund isn't closed before the first landlord is enrolled, the guarantee has no backing — which means it's not actually a guarantee.

**Conversation to have:** "What is our fundraising plan B if the $2M isn't closed in 6 months? Can we launch with $500K and a smaller portfolio? Can we get the initial guarantee funded by a corporate partner (a bank or insurance company looking for CRA credit) rather than a foundation?"

---

## Go/No-Go Checklist

### Before Phase 1 launch (first landlord enrollment):

- [ ] **T1**: Fund depletion trigger defined; $1M secondary commitment secured or in writing
- [ ] **T2**: At least one confirmed non-HA revenue source covers Phase 1 operating costs
- [ ] **T3**: HMIS data sharing approach confirmed (API or manual fallback); legal review started
- [ ] **E1**: CFTH partnership structure negotiated; CFTH has explicit upside (revenue share, board seat, or co-branding)
- [ ] **E4**: At minimum one advisor with insurance/fintech expertise and one with government procurement experience engaged
- [ ] **E5**: $2M guarantee fund closed, or pilot scoped to match available capital ($500K = ~60-unit pilot)
- [ ] Guarantee agreement reviewed by insurance counsel, not just general counsel
- [ ] Rollback plan defined: what happens to active tenancies if HomeGuarantee ceases operations?
- [ ] Support coverage: who answers the landlord's 11pm call about a tenant issue?

### Before Phase 2 launch (platform build):

- [ ] Phase 1 claims rate confirmed ≤15% over ≥90 days
- [ ] Case manager workflow validated: platform reduces time-per-placement vs. current process
- [ ] HHA or alternative revenue source confirmed with signed agreement
- [ ] HMIS data sharing agreement executed
- [ ] Landlord retention rate ≥80% at 6 months (landlords are still enrolled, not churned)

---

## Recommended Actions

Based on this pre-mortem, three changes to the PRD are recommended before it is presented to partners or funders:

**1. Restructure the revenue model.** Remove HHA as the Phase 1 revenue assumption. Identify a grant or philanthropic source that covers Phase 1 operations ($300–400K for 6 months). HHA is a Phase 3 revenue target.

**2. Formalize the CFTH partnership before anything else.** Before writing code, building forms, or recruiting landlords, close a written partnership agreement with CFTH that gives them explicit upside — and in return gives HomeGuarantee HMIS access rights, landlord relationship introductions, and case manager participation. This is not a nice-to-have; it is the foundation the entire product rests on.

**3. Add a "fund stewardship" section to the PRD.** Define the guarantee fund governance, depletion triggers, claims authority limits, and audit process. Right now the PRD mentions the fund as a number ($2M) without any operational structure. Funders will ask, and landlords who file claims will care.
