# Final Red-Team: HomeGuarantee — Complete Business Case
**Date**: June 6, 2026
**Scope**: Comprehensive pass across the PRD v1.3, two pre-mortems, market sizing, CFTH proposal, Works brief, and all discovery plans. Identifies assumptions not previously addressed.

> This is the third red-team pass. The first two fixed structural problems (HHA revenue, fund governance, pre-launch gate). This pass goes after the corner cases that survived.

---

## Top Kill-Assumptions (ranked)

---

### Kill-1 — The guarantee product may legally be insurance, which HomeGuarantee cannot offer without a Texas license

**Claim:** HomeGuarantee can issue financial guarantees to landlords for a monthly fee as a private company.

**Steelman:** Landlord guarantee programs operate in Oregon, Seattle, Minneapolis, and other cities. HUD explicitly encourages risk mitigation funds. The model is not novel. HomeGuarantee is not calling it insurance — it's a guarantee fund, similar to a security deposit, not a recurring premium product.

**Fails if:** The Texas Insurance Code defines HomeGuarantee's product as an insurance contract — specifically, a surety bond or a financial guaranty. Texas Insurance Code §101.001 defines insurance broadly, and several Texas Department of Insurance opinions have classified landlord protection products as insurance. If the TDI classifies HomeGuarantee's guarantee as insurance, HomeGuarantee cannot legally operate without a certificate of authority. Getting one takes 6–18 months and requires minimum capital reserves that dwarf the $2M guarantee fund. Comparable programs in Oregon operate as state-administered programs or through licensed intermediaries — not as standalone private companies. The PRD says "review by insurance counsel" but does not resolve the classification question.

**Evidence to get this week:** One call with a Texas insurance regulatory attorney (not general counsel; specifically insurance regulatory). Ask: "Is a monthly fee for a financial guarantee covering landlord losses from a tenant placement, operated by a private company, insurance activity under Texas law?" This question has a binary answer.

**Kill criterion:** TDI classification as insurance → the current product structure is illegal in Texas. Full stop. Pivot required: either obtain TDI licensure (timeline: 12–18 months), operate as a program administered through a licensed insurer from Day 1 (restructure), or pivot to a state-administered model (partner with Texas government).

**Cheapest test:** $500–$1,000 legal consult. This is the highest-priority legal question in the entire business case and has never been explicitly resolved.

---

### Kill-2 — The guarantee fund is sized for expected value; it should be sized for the 95th percentile

**Claim:** $2M guarantee fund is sufficient for the Houston pilot at a 12% claims rate and $3,500 average payout.

**Steelman:** Expected annual claims cost at 500 units: 500 × 12% × $3,500 = $210K/year. The $2M fund covers roughly 9.5 years of expected claims — a large buffer. This seems very conservative.

**Fails if:** Claims have a fat tail. Suppose 88% of tenancies have zero claims and 12% have claims averaging $3,500. That average masks the distribution: some claims may be $500 (minor damage), some $15,000+ (major damage requiring full unit refurbishment). A cluster of three $18,000 claims in a single quarter — entirely possible if one cohort of placements goes badly — depletes $54,000 in 90 days. If the fund is simultaneously exposed to 200 active units in Phase 2, the 95th percentile outcome could be 25%+ claims with a $8,000+ average. That's 200 × 25% × $8,000 = $400,000 in a single bad quarter — 20% of the fund gone in 90 days. The depletion trigger (pause at 15% claims rate in 60 days) doesn't prevent this — it responds to it. The fund needs actuarial sizing, not expected-value sizing.

**Evidence to get this week:** Request Oregon OHCS's loss distribution data (not just average payout — the histogram of individual claim amounts). This is public program data. Three data points needed: average payout, 90th percentile payout, and maximum single claim. These three numbers set the correct fund size.

**Kill criterion:** If Oregon's 90th percentile claim is above $12,000, the fund should be sized at $4M minimum for 500 units, not $2M. The fundraising ask and the "path to sustainability" timeline both change.

**Cheapest test:** Email to Oregon OHCS requesting summary claims statistics from the Housing Choice Landlord Guarantee Program. Free. Resolves within 1–2 weeks.

---

### Kill-3 — The HOA pre-clearance service has no legal teeth in Texas

**Claim:** HomeGuarantee can handle HOA complaints on the landlord's behalf, using Texas Property Code §202.004 (HOAs cannot enforce rules conflicting with federal law) as legal backing.

**Steelman:** The Fair Housing Act is federal law. Texas Property Code §202.004 explicitly prohibits HOAs from enforcing rules that conflict with federal law. If an HOA's rule amounts to discrimination against a Section 8 voucher holder, it may conflict with FHA. HomeGuarantee's legal team can send a strongly worded letter citing these protections and many HOAs will back down rather than face a fair housing complaint.

**Fails if:** Source-of-income (voucher) status is NOT a protected class under the federal Fair Housing Act. It isn't. The FHA protects race, color, national origin, religion, sex, familial status, and disability — not source of income. HUD guidance has suggested that source-of-income discrimination can sometimes be race discrimination (disparate impact), but this theory is legally contested and has not been resolved in Texas courts. Texas SB 267 was specifically designed to ensure that source-of-income discrimination is legal in Texas by pre-empting local ordinances. An HOA's rule against Section 8 tenants is likely legal in Texas — which means HomeGuarantee's legal threat has no enforceability. If HomeGuarantee sends a letter implying legal exposure the HOA doesn't actually face, it is making a legally false claim, which exposes HomeGuarantee to its own liability.

**Evidence to get this week:** Ask the same housing attorney reviewing the insurance question to assess the HOA legal theory. Specifically: "In Texas, post-SB 267, can an HOA legally prohibit a landlord from renting to Section 8 voucher holders, and does federal fair housing law provide any protection?"

**Kill criterion:** If the legal theory has no basis, the HOA pre-clearance service must be redesigned as a "we'll try our best" mediation service rather than a "legal protection" service. All marketing of this feature must change to remove any implication of legal enforceability.

**Cheapest test:** Same legal consult as Kill-1. Bundle both questions into one call.

---

### Kill-4 — Enrollment duration of 18 months is unvalidated and critical to every financial model

**Claim:** The average HomeGuarantee enrollment duration is 18 months — the period for which a landlord unit is actively enrolled with a formerly homeless tenant.

**Steelman:** The Way Home reports 90%+ of placed individuals remain housed after 2 years, suggesting long tenancy durations. If tenants stay 24+ months, enrollment duration may be longer than 18 months, making the revenue model conservative.

**Fails if:** The 18-month assumption is wrong in either direction. If tenants move out after 8–10 months (voluntarily, eviction, lease non-renewal, or graduation to unsubsidized housing), the unit turns over — the landlord may re-enroll with a new tenant, but there is a gap in revenue and enrollment volume. The market sizing calculates addressable units at $1,050/year. If the average unit generates $700/year (8-month tenancy + 1-month gap + new enrollment cycle), the US TAM drops from $105M to $70M. The path-to-sustainability timeline at 500 units changes by months. More critically: **the guarantee fund exposure resets at each tenant turnover** — if a unit turns over 3 times in 18 months (unusually bad cohort), the $20K guarantee limit applies three times.

**Evidence to get this week:** Ask CFTH for the distribution of tenancy lengths among The Way Home's HCV-placed population over the past 3 years: specifically, what % of tenancies end before 12 months, before 18 months, and before 24 months, and what % end due to (a) tenant choice, (b) landlord non-renewal, (c) eviction. This single data request changes the financial model.

**Kill criterion:** If median tenancy duration is under 12 months, the $1,050/unit/year revenue assumption is wrong; reprice to $700–$850 and remodel the path to sustainability.

**Cheapest test:** CFTH exit data request — free, 1–2 week turnaround.

---

### Kill-5 — No one on the founding team has been named, and this is the most likely reason the plan fails

**Claim:** HomeGuarantee can execute the pre-launch requirements (CFTH negotiation, guarantee fund raise, legal consults, Works employer agreements, Figma prototype, landlord recruitment) on the timeline described.

**Steelman:** The PRD is detailed enough that an experienced operator could execute it. The operational steps are specific, the priorities are sequenced correctly, and the risks are documented. This is a more complete early-stage plan than most funded companies have when they start.

**Fails if:** The founding team has one or two people with product or technology backgrounds and no one with: (a) Texas government relations experience (for HHA/CFTH navigation), (b) insurance or financial guarantee expertise (for fund structure), (c) nonprofit fundraising experience (for the $2.75M initial raise: $2M fund + $750K Works bridge). These are not learnable on the job in 6 months. Every prior pre-mortem flagged this as an elephant; it remains unresolved because the PRD has no team section.

The single most common reason well-designed social enterprise plans fail is not strategy — it's that the people implementing them don't have the relationships or domain expertise to navigate the specific institutional complexity of the sector. Institutional actors (CFTH, HHA, HUD) have dealt with many passionate founders without relevant expertise, and they have learned to wait them out.

**Evidence to get this week:** Write two sentences answering: "Who is leading HomeGuarantee, and what specifically qualifies them to close a $2M philanthropic guarantee fund raise, negotiate an institutional partnership with a 14-year-old $47M nonprofit coalition, and navigate Texas real estate and insurance regulatory questions — all simultaneously in Month 0?" If you cannot write those two sentences, the founding team gap is the primary risk, not any of the product assumptions.

**Kill criterion:** No named person with government relations OR insurance/fintech OR nonprofit fundraising experience on the founding team or formal advisory board → launch timeline must extend by 6 months minimum to recruit.

**Cheapest test:** Write the two sentences. If they're hard to write, that's the answer.

---

## Corner Cases Not Previously Addressed

Beyond the top 5 kill-assumptions, the following corner cases haven't been addressed in any prior document:

### Financial corner cases
- **Claims clustering risk**: What if 3–5 placements in the same building or block fail simultaneously (e.g., a building with shared infrastructure issues, or a case manager makes several poor placements in a row)? The fund governance handles individual claim volume but not spatially or temporally clustered claim events.
- **Interest income and fund management**: The $2M guarantee fund sits in a money market account. At current rates (~5%), that's $100K/year in interest — meaningful operating income. Is that income restricted to the fund, or is it available for operations? This needs to be in the fund governance document.
- **Currency and timing risk on HHA payment**: HomeGuarantee pays landlords on the 1st and recoups from HHA. HHA payments can be delayed by administrative issues, inspection failures, or budget freeze. HomeGuarantee is effectively floating the landlord payment and carrying the credit risk of HHA. At 500 units and $87.50/unit rent advance, that's $43,750 of monthly float. Who backstops that if HHA is late?

### Operational corner cases
- **Works employee conflict of interest**: A Works employee conducts a quarterly condition check on a property where someone they know — possibly a friend or former shelter mate — is a tenant. What's the protocol? Who reviews conflict-of-interest situations? The Works brief doesn't address this.
- **Eviction coordination**: When a tenancy fails and eviction is required, who coordinates the legal process? The PRD covers financial claims but not eviction coordination. In Texas, a self-represented eviction takes 3–7 weeks. Who files the paperwork? Does HomeGuarantee provide a legal template? Does the Works team assist? This is a material gap for the landlord experience.
- **What happens at the end of a successful tenancy?** When a tenant becomes stable enough to sign a market-rate lease independently, the HomeGuarantee enrollment presumably ends. How is offboarding handled? Does the landlord get notice? Does HomeGuarantee help the tenant transition? Is there a "graduation" metric? The PRD tracks placement but not graduation.

### Competitive/strategic corner cases
- **HUD mandating landlord guarantee programs nationally**: If USICH or HUD makes landlord risk mitigation funds a required component of CoC funding, every housing authority in the US will need a program. That creates a procurement opportunity — but also means government could build a national version that makes HomeGuarantee's proprietary version redundant. No contingency is planned.
- **Texas rent control legislation**: If Texas ever passes tenant protection legislation (unlikely but not impossible under pressure from housing advocacy), it could change the FMR gap dynamics and the landlord market significantly.
- **James's succession at CFTH**: James is 61. The CFTH partnership agreement gives CFTH structural upside (revenue share, board seat) designed to survive leadership transition — but this was implicit, not explicit. The partnership agreement should include a succession clause: what happens to the revenue share and board seat if CFTH's Executive Director changes?

---

## What's Well-Reasoned

Across the full business case, these claims hold up without needing further attack:

**The problem is real and large.** The claim-verification data is solid (15.1M vacant homes, 771,500 homeless, 20 vacants per homeless person). The market sizing methodology is defensible (two independent methods converge within 20%). The Houston focus is correct — 32× vacancy surplus with the smallest affordability gap and existing coalition infrastructure. No weakness there.

**The CFTH partnership structure is sound.** Revenue share scoped to Houston, board seat, data ownership, co-branding, and joint grants — with explicit upside that survives leadership transition — is the right structure. The rollback plan is documented. The steering committee decision tiers prevent deadlock without preventing governance. This is genuinely well-designed.

**The Phase 1 manual-first sequencing is correct.** Running 50 units on Airtable before building software is the right call. It generates the claims data, the workflow requirements, and the actuarial inputs that Phase 2 requires. The prototype-first red-team confirmed this.

**The Works circular economy concept is differentiated.** No comparable US organization employs formerly homeless individuals to staff the property management layer of a housing placement program. This is a genuine moat — it creates an employment pathway that other programs don't offer, generates press-worthy narrative, and unlocks workforce-specific funding channels that a pure tech company can't access.

**The claims management governance is solid.** Claims authority tiers (Operations Lead < $5K; CEO < $20K; board above), depletion triggers with operational definitions, rollback plan with successor designation — this is institutional-grade fund governance for an early-stage company. It will hold up to funder scrutiny.

---

## What I Couldn't Assess

- **Actual landlord willingness-to-pay at $175–225/month for Managed tier**: Experiment 2 (10-landlord WTP interview) hasn't run. The Managed tier revenue model, Works self-funding milestone, and Phase 2.5 feature roadmap all depend on this number. It's the highest near-term financial uncertainty in the business case.
- **CFTH's actual internal decision-making process**: We know James's motivation and the partnership structure. We don't know whether CFTH's board needs to vote on the partnership, what their timeline for that vote would be, or whether any board member would oppose the relationship. The partnership proposal is designed for James; it may need a version designed for the board.
- **Regulatory environment in Year 2–3**: Federal housing policy under any administration is volatile. The TAM, the voucher pipeline, and the competitive landscape all depend on HUD priorities that can shift in 90 days with a policy memo. No scenario planning has been done for a 25% HCV funding cut, which is on the table in current congressional discussions.
