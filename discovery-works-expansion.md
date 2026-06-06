# Discovery Plan: HomeGuarantee Supply-Side Expansion
**Date:** June 7, 2026
**Product Stage:** Existing platform (pre-launch); discovery informing Phase 2–3 roadmap
**Author:** HomeGuarantee / LessHomelessness
**Status:** Active discovery — experiments not yet run

---

## Discovery Question

Can HomeGuarantee expand the *supply* of housing pool units — not just unlock willing landlords, but create new units where none were previously accessible — by using Works labor and aligned financial structures as the exchange currency?

### Background

The core guarantee platform solves the **risk-averse but willing** landlord. These two expansion ideas address a different segment:

- **Unable landlords**: own substandard properties they can't afford to bring to HUD inspection standard
- **Absent/capital landlords**: own properties too distressed to rehabilitate independently, or have no owner at all (tax-delinquent, abandoned)

Houston has 105,840 vacant units vs. 3,280 homeless people. Many of those vacants are substandard, abandoned, or in tax delinquency. These ideas directly target that subset.

---

## Ideas Explored

### Idea 1: Works Renovation Exchange
Works employees renovate a substandard property at no cost to the owner. Owner commits to 3–5 years at Houston Fair Market Rent ($1,241 for 1BR) accepting HCV tenants, enrolled in the HomeGuarantee Managed tier. Labor cost is offset by grant funding for materials + earned Works revenue.

**Key mechanism:** Owner foregoes rent premium ($1,450 market − $1,241 FMR = $209/month) for 36 months = $7,524 total value given. HomeGuarantee provides $7,524 equivalent in Works labor (447 hours at $16.83/hour Works wage). Works scope limited to cosmetic renovation (paint, flooring, fixtures, landscaping, minor repairs).

### Idea 2: Solar-for-Rent (via Power Purchase Agreement)
Free solar installation in exchange for FMR rent commitment. Solar financed via a Solar Power Purchase Agreement (PPA): solar company installs at no upfront cost; tenant pays discounted electricity rate directly to solar provider. Owner gets: increased property value, zero-cost energy infrastructure. Tenant gets: $80–140/month utility savings on a FMR-constrained budget.

**Note:** Texas PACE financing explicitly excludes residential 1–4 unit properties. Solar PPA is the correct mechanism for single-family and small multifamily.

### Idea 3: Landlord Repair Loan
Zero-interest loan from the HomeGuarantee guarantee fund to bring a property to HUD inspection standard, repaid through the monthly platform fee.

**Pre-analysis finding:** This is economically non-viable as designed. At $87.50/month, a $10,000 repair loan takes 114 months to repay — far exceeding any reasonable commitment period. To work, the loan must be sized at ≤$3,150 (36-month repayment), limiting scope to cosmetic-only work. Reformulated: this becomes a cosmetic renovation grant, not a loan.

### Idea 4: Impact REIT
HomeGuarantee sponsors a registered REIT (Real Estate Investment Trust) to acquire distressed/vacant properties, renovate via Works, and permanently dedicate them to HCV-accessible housing. Below-market returns (3–5% vs. 7–9% market) to impact investors, with housing impact metrics as part of the return story.

**Structural note:** Requires SEC registration, 100+ investors, 75% real estate asset test, 90% income distribution. Minimum viable AUM ~$20–50M. Realistic timeline: 18–24 months from decision to first acquisition.

### Idea 5: HCAD Property Scoring Engine
Automated tool ingesting Harris County Appraisal District public data to score every residential property in Houston on renovation-exchange viability: vacancy duration, assessed value delta, tax delinquency status, owner mailing address (absentee indicator), transit proximity.

**Status:** Enabler for Ideas 1, 2, 3, and 4. Builds on the HCAD absentee landlord targeting already in the GTM plan.

### Other ideas brainstormed (not carried forward)
- City tax-delinquent property pipeline (requires city partnership; deferred to Phase 3)
- Tenant homeownership pathway / land contract (high complexity; deferred)
- Neighborhood cluster model (powerful but requires 3+ consecutive properties; coincidence-dependent)
- Renovate-to-contribute portal (depends on Idea 1 proving out first)

---

## Critical Assumptions

### Idea 1: Works Renovation Exchange

| # | Assumption | Category | Impact | Uncertainty |
|---|-----------|----------|--------|-------------|
| A1 | Substandard property owners will commit to 3–5 years at FMR in exchange for free renovation | Value | Critical | High |
| A2 | Works employees can be trained for renovation work in 8 weeks | Feasibility | Critical | Medium |
| A3 | Renovation cost falls within the FMR-discount labor ceiling ($7,524 / 447 hours) | Viability | Critical | Medium |
| A4 | Works renovation quality meets HUD UPCS inspection standards | Feasibility | High | Medium |
| A5 | Grant funding (CDBG/HOME) available for materials cost | Viability | High | Medium |
| A6 | Renovation exchange doesn't create unlicensed contractor liability | Feasibility | High | Low |

### Idea 2: Solar-for-Rent

| # | Assumption | Category | Impact | Uncertainty |
|---|-----------|----------|--------|-------------|
| B1 | Solar PPA providers will install on HCV-rented residential properties | Feasibility | Critical | Medium |
| B2 | Tenant utility savings are $80+ per month (meaningful on $1,241 FMR budget) | Value | High | Low (math supports) |
| B3 | Works employees can complete NABCEP solar certification in 3 months | Feasibility | High | Low (training exists) |
| B4 | Solar PPA contract doesn't conflict with HCV lease terms | Feasibility | High | Medium |

### Idea 3: Landlord Repair Loan (reformulated as small grant)

| # | Assumption | Category | Impact | Uncertainty |
|---|-----------|----------|--------|-------------|
| C1 | Owners of properties needing only cosmetic work (<$3,150) will commit to 36-month FMR | Value | Medium | Medium |
| C2 | Guarantee fund can serve dual purpose (claims + grants) without impairment | Viability | High | Low (governance issue) |

### Idea 4: Impact REIT

| # | Assumption | Category | Impact | Uncertainty |
|---|-----------|----------|--------|-------------|
| D1 | Impact investors accept 3–5% returns for housing impact metrics | Value | Critical | Low (precedent exists) |
| D2 | HomeGuarantee can sponsor a REIT while pre-revenue | Feasibility | High | Medium |
| D3 | REIT structure doesn't conflict with TX insurance licensing (K1) | Feasibility | High | Medium |
| D4 | Distressed Houston properties available at prices viable for renovation + affordable rent | Viability | High | Medium |

---

## Pre-Falsified Assumptions (No Experiment Needed)

These were resolved by analysis before any experiments ran:

| Assumption | Verdict | Finding |
|-----------|---------|---------|
| Texas PACE available for residential 1–4 units | ❌ **False** | Texas PACE statute (Prop. Code Ch. 399) explicitly covers commercial and multifamily 5+ units only. Solar-for-rent must use PPA, not PACE. |
| Repair loan repayable via $87.50/month platform fee | ❌ **False** | $10K loan = 114-month repayment at $87.50/month. Economically non-viable. Maximum viable loan = $3,150 (cosmetic-only scope). |
| Tenant utility savings from solar are meaningful | ✅ **True** | Houston avg electric bill ~$175/month. Solar offset 60–80% = $105–140/month savings. Represents 8–11% of FMR income — material. |

---

## Prioritized Validation Experiments

### Experiment 1: Renovation Exchange Owner Offer Test
**Tests:** A1 (owner willingness)
**Priority:** P0 — must run before any renovation program is built

**Hypothesis:** At least 30% of targeted substandard property owners will express interest in a renovation-for-FMR-commitment exchange.

**Setup:**
1. Pull HCAD data: residential properties, improvement value <$30K, vacant 60+ days, owner mailing address out of state.
2. Target 50 properties. Send physical letter from HomeGuarantee: *"Your property at [address] has been vacant for over 60 days. HomeGuarantee will renovate it at no cost in exchange for a 3-year lease agreement at Houston's Fair Market Rent. No upfront cost. We handle everything."*
3. Follow up by phone. Track: response rate, interest level, objections.

**Success criteria:** ≥30% expressed interest; ≥3 owners willing to discuss terms.
**Kill criterion:** <10% response rate across 50 contacts, or primary objection is the FMR rate (not the renovation quality or commitment length).
**Effort:** $2,000 (design + print + postage) + 20 hours. **3 weeks.**

---

### Experiment 2: Renovation Cost Feasibility Audit
**Tests:** A3 (renovation within labor ceiling)
**Priority:** P0 — must run before Experiment 1 results are acted on

**Hypothesis:** At least 3 of 5 HCAD-targeted properties have renovation scope achievable within the 447-hour Works labor ceiling (cosmetic renovation only).

**Setup:**
1. Identify 5 properties from Experiment 1 respondents (or independently).
2. Schedule licensed inspector walkthrough of each.
3. Get renovation cost estimates from 2 local contractors; categorize scope as cosmetic / light structural / major structural.

**Success criteria:** ≥3 of 5 properties = cosmetic-only scope (paint, flooring, fixtures, cleaning, minor repairs).
**Kill criterion:** All 5 require structural/mechanical work; cosmetic renovation alone won't pass HUD inspection.
**Effort:** $500 (inspector fees) + contractor time. **2 weeks.**

---

### Experiment 3: Works Renovation Training Feasibility
**Tests:** A2 (trainability for renovation)
**Priority:** P0 — determines if Works can execute the renovation

**Hypothesis:** Works employees can complete renovation-qualified training (scoped to Experiment 2 findings) in 8 weeks at <$2,000 per trainee, without requiring a licensed trades master on every site.

**Setup:**
1. Contact Houston Community College, SER-Jobs for Progress, and 1 other vocational training org.
2. Ask: training program exists for cosmetic renovation scope? Cost? Timeline? What Texas licensing requirements apply to the specific tasks in Experiment 2?
3. Determine if any tasks require a licensed master plumber/electrician to supervise (adds ongoing overhead).

**Success criteria:** Training track exists, ≤$2,000/trainee, ≤8 weeks, cosmetic scope is unlicensed or can be done under Works' master license arrangement.
**Kill criterion:** All tasks in Experiment 2 scope require licensed trade supervision at a cost that exceeds the Works labor margin.
**Effort:** 4 hours of calls. **1 week. Free.**

---

### Experiment 4: Solar PPA Feasibility
**Tests:** B1 (PPA availability for HCV-rented residential properties)
**Priority:** P1 — can run in parallel with Experiments 1–3

**Hypothesis:** At least 1 Texas solar PPA provider will install on HCV-rented residential properties with landlord consent, providing ≥$80/month tenant savings.

**Setup:**
1. Contact SunPower, Tesla Energy (Powerwall + solar), and 2 local Texas solar installers.
2. Ask: *"We have a residential rental property. The landlord consents to installation. The tenant will sign the PPA and pay discounted rates. The tenant receives Section 8 housing assistance. Will you install? What are your requirements?"*
3. Specifically probe: Do you run credit checks on tenants? Is there a minimum lease term requirement? Is the PPA transferable if the tenant moves?

**Success criteria:** ≥1 PPA provider will install on HCV-rented properties with landlord consent; PPA is transferable between tenants.
**Kill criterion:** All providers require tenant credit scores above what the formerly-homeless population can achieve.
**Effort:** 3 hours of calls. **1 week. Free.**

---

### Experiment 5: Impact REIT Structural Feasibility
**Tests:** D2 (REIT viable pre-revenue) and D3 (no K1 conflict)
**Priority:** P1 — bundle with existing K1 legal call

**Hypothesis:** An Impact REIT can be structured as a sister entity to the guarantee platform without conflicting with TX insurance licensing, with a realistic path to first close within 18 months.

**Setup:** Add 30 minutes to the K1 legal call already planned (see kill-switch resolution checklist).
**Questions:** (1) Can a REIT be sponsored by the same corporate parent as the guarantee platform? (2) Does REIT property ownership interact with TX Insurance Code Chapter 225 (guarantee/surety companies)? (3) What's the minimum path to SEC registration — Reg A+ (mini-IPO) vs. Reg D 506(b) private placement?

**Success criteria:** Legal counsel confirms REIT structurally viable in 18 months; no K1 conflict; Reg D 506(b) appears viable as first step (accredited investors only, no SEC registration required).
**Kill criterion:** REIT requires separate corporate entity with $500K+ legal setup before first dollar raised; K1 conflict creates risk.
**Effort:** 30 minutes + ~$250 additional legal time.

---

## Decision Framework

```
Experiment 3 (training feasibility) passes
  AND Experiment 2 (renovation cost) passes
  AND Experiment 1 (owner willingness) passes
    → Build Works Renovation Exchange as Phase 2.5 feature
    → Hire 1 Works Renovation Coordinator (Month 16)
    → Apply for CDBG/HOME materials grant through CFTH (Month 14)
    → Target: first renovated property in housing pool by Month 20

Experiment 3 fails (licensing overhead breaks economics)
    → Scope Works renovation down to cosmetic only
    → Price the exchange accordingly (shorter FMR commitment, smaller scope)
    → OR partner with a licensed contractor for structural work; Works does cosmetic

Experiment 1 fails (owners won't commit to 3–5 years at FMR)
    → Test shorter commitment (18 months) or partial renovation (cosmetic + solar)
    → OR pivot to Repair Grant (Idea 3 reformulated) for cosmetic-only properties

Experiment 4 passes (Solar PPA works)
    → Add Solar-for-Rent as standalone offer to all Managed-tier landlords
    → No Works training required if solar company installs; Works earns referral/project management fee
    → Target: 50 solar installations by Month 24

Experiment 4 fails (PPA providers won't serve HCV tenants)
    → Explore utility-owned community solar programs (CenterPoint Energy in Houston)
    → OR defer solar to Phase 3 when Works has NABCEP-certified installers

Experiment 5 passes (REIT viable)
    → Begin REIT fundraise in Year 3 (post-revenue, post-data)
    → Target: Reg D 506(b) offering, $5M initial close, accredited impact investors
    → REIT acquires tax-delinquent Houston properties for Works to renovate and HomeGuarantee to manage

Experiment 5 fails (K1 conflict or regulatory overhead)
    → Defer REIT to Year 4 post-insurance-reinsurance partner announcement
    → OR structure as a separate entity with clear corporate separation from the guarantee platform
```

---

## Discovery Timeline

| Week | Activity |
|------|---------|
| Week 1 | Experiment 3 (training feasibility call) + Experiment 4 (solar PPA calls) + pull HCAD property list |
| Week 2 | Experiment 2 (inspector walkthroughs); begin Experiment 1 letter campaign |
| Week 3 | Experiment 1 phone follow-ups begin; bundle Experiment 5 into K1 legal call |
| Week 4 | Analyze Experiment 1 + 2 results; make go/no-go on Works Renovation Exchange |
| Week 5 | If go: draft renovation exchange agreement template; identify CDBG grant eligibility |

**Total cost of full discovery:** ~$2,750 (letter campaign $2,000 + inspectors $500 + legal add-on $250)
**Calendar time:** 5 weeks, running parallel tracks

---

## Strategic Note: These Ideas Are More Complementary Than Independent

The renovation exchange, solar PPA, and REIT each solve a different part of the same problem:

| Vehicle | Solves for | Owner type |
|---------|-----------|------------|
| Works Renovation Exchange | Property substandard, owner present but cash-poor | Absentee landlords, distressed small owners |
| Solar PPA | Property rentable, owner wants better tenant economics | Any enrolled Managed-tier landlord |
| Impact REIT | Property abandoned, no viable owner | Tax-delinquent, fully distressed properties |

The right sequencing: **Solar PPA first** (lowest friction, standalone, can launch within the existing Managed tier in Month 14), **Renovation Exchange second** (Phase 2.5, Month 18+, pending Experiments 1–3), **REIT third** (Year 3+, requires revenue and data to attract impact capital).

---

## Expansion: Below-FMR Rent Tier — "Any Dollar Is Better Than Zero"
**Added:** June 7, 2026

### The Framing Shift

The original Renovation Exchange model assumed the value exchange is:
> Owner accepts FMR ($1,241) instead of market rent ($1,450) → Works provides renovation labor equivalent to the $209/month × 36-month gap ($7,524 / 447 hours).

This only works for owners who could otherwise rent at market rate. It excludes the most distressed segment: owners whose properties are so far gone that they're earning **$0 currently** — and in fact paying to own them.

For these owners, the comparison isn't FMR vs. market rent. It's **any income vs. negative carry.**

---

### The Vacancy Cost Math (Harris County)

A distressed vacant residential property in Houston is not free to own:

| Cost | Monthly | Annual |
|------|---------|--------|
| Property tax (~2.1% of $80K assessed) | $140 | $1,680 |
| Vacant property insurance (higher premium) | $95–130 | $1,140–1,560 |
| City code enforcement / blight fines | $40–120 | $500–1,500 |
| Vandalism / squatting (copper theft, boarding) | $50–150 avg. | $600–1,800 |
| **Total carrying cost** | **$325–540/month** | **$3,920–6,540/year** |

**Current net income: −$325 to −$540/month.**

A $200/month rent commitment doesn't just add $200. It **flips the P&L by $525–740/month** — from paying to own nothing to being paid to own something. This is a fundamentally different and more powerful value proposition.

**The new pitch:**
> "Your property at [address] costs you roughly $400/month to sit empty. We'll turn it into a $300/month income stream — guaranteed, managed, zero effort on your part — while we renovate it."

---

### HCV Mechanics at Below-FMR Rents

HCV pays: Contract Rent − Tenant's Share (30% of income). The HA pays nothing if the tenant's share exceeds the contract rent.

For a formerly homeless tenant on SSI (~$967/month in 2026):
- Tenant share: $290/month (30% × $967)

| Contract Rent | Tenant Pays | HA (HCV) Pays | HCV Useful? |
|--------------|-------------|---------------|-------------|
| $200/month | $200 (capped) | $0 | No |
| $300/month | $290 | $10 | Barely |
| $400/month | $290 | $110 | Yes |
| $600/month | $290 | $310 | Yes |
| $800/month | $290 | $510 | Yes |
| $1,241 (FMR) | $290 | $951 | Yes |

**Critical finding:** HCV becomes meaningful above ~$350/month for an SSI-income tenant. Below that, the tenant pays the full rent directly — and the HA is not involved. This creates two distinct sub-segments.

---

### Two Sub-Segments

**Sub-segment A: "Stabilization" tier ($200–$350/month)**
- HCV not involved — tenant pays rent directly (SSI income covers $200–290/month)
- **No HUD UPCS inspection required** — inspection is triggered by voucher use, not by the tenancy itself
- Lower renovation bar: basic habitability (working utilities, weathertight shell, no safety hazards) rather than the full UPCS checklist
- Target tenant: SSI-income tenant without an available voucher, or a tenant who has used their voucher at a different unit
- HomeGuarantee guarantee applies (guarantee fund backstops; HA is not a party)
- This is a **fully private-market transaction** — no government program involvement required

**Sub-segment B: "Below-FMR Voucher" tier ($350–$1,241/month)**
- HCV applies — HA pays the gap between tenant share and contract rent
- HUD UPCS inspection required (binary: pass or fail)
- Works renovation must bring property to UPCS standard
- At $600 contract rent: HA pays $310, tenant pays $290
- Remains within the existing HomeGuarantee + CFTH + HA operating model

---

### Revised Renovation Economics

The original model capped Works labor at the **FMR discount gap** (what the owner gives up vs. market rate). That ceiling was $7,524 / 447 hours.

For a distressed owner with negative carry, the value of a 36-month commitment is much larger:

**Owner's 36-month value = Rental income + Avoided carrying costs + Property appreciation**

| Contract Rent | Rental Income (36mo) | Avoided Carrying Costs (36mo @ $400/mo avg) | Property Appreciation (est.) | Total Owner Value | Works Labor Ceiling (@ $16.83/hr) |
|---|---|---|---|---|---|
| $200/month | $7,200 | $14,400 | $8,000 | **$29,600** | **1,759 hrs** |
| $400/month | $14,400 | $14,400 | $10,000 | **$38,800** | **2,305 hrs** |
| $600/month | $21,600 | $14,400 | $12,000 | **$48,000** | **2,852 hrs** |

At $400/month contract rent: Works labor ceiling = **2,305 hours** (~57 weeks of one worker's time). This is enough for a genuine renovation — full kitchen and bath cosmetic update, flooring, roofing patches, HVAC servicing, weatherization — far beyond the "cosmetic-only" constraint of the FMR model.

**The below-FMR framing breaks through the 447-hour ceiling entirely.** The renovation can be substantially more ambitious.

---

### New Ideas from the Below-FMR Insight

**Idea 6: Below-FMR Tiered Renovation Exchange**
Three tiers matched to property condition and owner motivation:

| Tier | Contract Rent | Renovation Scope | HCV? | Duration |
|------|-------------|-----------------|------|----------|
| Stabilize | $200–350/month | Basic habitability (utilities, weathertight, no hazards) | No | 24 months |
| Renovate | $350–600/month | UPCS-compliant renovation (kitchens, baths, flooring) | Yes | 36 months |
| Transform | $600–FMR | Full renovation + solar PPA | Yes | 48 months |

Owner self-selects tier based on property condition and income tolerance. Works scope scales accordingly.

**Idea 7: Vacancy Cost Reframe — "Liability-to-Asset" Pitch**
Restructure all owner outreach around the negative-carry insight. Instead of leading with rent or renovation, lead with carrying costs:

> *"Owning a vacant home in Houston costs you $400+ every month in taxes, insurance, and upkeep — and the city may be watching. HomeGuarantee can turn that liability into a guaranteed income stream, starting in 30 days."*

Frame the commitment period not as a sacrifice ("3 years at below-market rent") but as relief ("3 years without property management, without vacancy costs, without eviction risk").

**Idea 8: Rent Escalation Ladder**
Start below FMR; escalate annually as Works does incremental improvements:
- Year 1: $400/month (basic UPCS pass)
- Year 2: $600/month (cosmetic renovation complete)
- Year 3+: $800/month → FMR (full renovation + solar PPA installed)

Owner gets income now, path to market rate later, and a progressively improved asset. Works gets ongoing scope across the commitment period, not a one-time project.

**Idea 9: Tax Delinquency Intercept**
Harris County property tax delinquency records are publicly available (HCAD). A property in delinquency after 2+ years will go to sheriff's auction. At that point the owner loses the asset entirely.

At $140/month in taxes, a $200/month rent commitment covers most of the tax burden and may be the only thing preventing the county from seizing the property. This creates extreme motivation to engage — far higher than an owner who is merely cash-poor.

Target: HCAD records with 2+ years delinquency + residential + owner-occupied mailing address (owner hasn't abandoned hope). 30-day window before auction is the offer deadline.

**Idea 10: Non-Voucher Stabilization Track**
For Stabilization-tier properties ($200–350/month), HomeGuarantee can operate completely outside the HCV system:
- No CFTH pipeline required (CFTH controls access to voucher holders)
- No HUD UPCS inspection
- Tenant is a formerly homeless individual who has "graduated" from the HCV program (or never received a voucher)
- Revenue model: flat platform fee ($50/month) + guarantee reserve
- This creates a **parallel supply pipeline** not dependent on CFTH partnership — reducing concentration risk on the K1 kill-switch dependency chain

---

### New Critical Assumptions

| # | Assumption | Category | Impact | Uncertainty |
|---|-----------|----------|--------|-------------|
| A7 | Distressed property owners feel and understand their negative carry costs, making "eliminate the liability" a compelling pitch | Value | Critical | High — many owners are emotionally disconnected from carrying cost math |
| A8 | The total owner value (income + avoided costs + appreciation) at $400/month makes a 2,305-hour Works renovation economically rational for HomeGuarantee | Viability | High | Medium — appreciation estimate is uncertain |
| A9 | Properties at $200–350/month can reach basic habitability without full UPCS compliance (no HUD inspection trigger) | Feasibility | High | Medium — needs Texas property law confirmation |
| A10 | Formerly homeless SSI-income tenants can reliably pay $200–290/month in rent without a housing voucher | Feasibility | Critical | Medium — depends on income stability post-placement |
| A11 | HomeGuarantee's guarantee fund adequately backstops below-FMR non-voucher tenancies (no HA as additional backstop) | Viability | High | Medium — risk profile differs from voucher tenants |
| A12 | Tax-delinquent property owners are reachable and motivated within the 30-day pre-auction window | Value | High | Medium — depends on HCAD data quality and owner contact |

---

### New Validation Experiments

#### Experiment 6: Vacancy Cost Survey
**Tests:** A7 (owner awareness of negative carry)
**Priority:** P0 — determines whether the "liability-to-asset" pitch lands

**Setup:**
1. In follow-up calls from Experiment 1, ask owners directly: *"What do you estimate you spend annually on taxes, insurance, and upkeep for this property?"*
2. Track whether owners know this number, whether they've calculated it, and how they react when shown a $400/month estimate.

**Success criteria:** ≥50% of owners can articulate some version of carrying costs; ≥30% express visible relief or interest when the "eliminate the liability" framing is introduced.
**Kill criterion:** Owners dismiss carrying costs as irrelevant or too small to matter. (Suggests the pitch leads with renovation value instead.)
**Effort:** 0 additional cost — add 3 questions to Experiment 1 follow-up calls. **No additional time.**

---

#### Experiment 7: A/B Pitch Framing Test
**Tests:** A7 — which framing converts better: renovation value or liability elimination?
**Priority:** P1 — informs all future owner outreach messaging

**Setup:**
Split the Experiment 1 letter campaign (50 properties) into two variants:
- **Variant A (25 letters):** Lead with renovation — *"HomeGuarantee will renovate your property at no cost in exchange for a 3-year rental agreement at Fair Market Rent."*
- **Variant B (25 letters):** Lead with liability — *"Your property at [address] is costing you approximately $400/month in taxes and insurance while sitting vacant. HomeGuarantee can convert it into a guaranteed $300/month income stream — we manage everything."*

Track: response rate by variant, interest level, objection type.

**Success criteria:** One variant achieves ≥2× the response rate of the other.
**Kill criterion:** Neither variant achieves >10% response rate — suggests owner motivation is elsewhere (attachment, legal complications, estate issues).
**Effort:** Zero incremental cost; design two letter templates instead of one.

---

#### Experiment 8: Non-Voucher Tenant Affordability
**Tests:** A10 (SSI tenants can pay $200–290/month without voucher)
**Priority:** P1 — determines viability of Stabilization tier

**Setup:**
1. Ask CFTH: of clients who have "graduated" from coordinated entry and are now stably housed, what is their average monthly income? How many are on SSI only vs. working?
2. Request anonymized income data for 50 recently housed clients.
3. Calculate: at 30% income, what is the median tenant share? What % can afford $200? $290?

**Success criteria:** ≥60% of formerly homeless tenants have sufficient income to pay $200–290/month directly.
**Kill criterion:** Median income so low (<$667/month) that even $200 = >30% of income. Stabilization tier serves too thin a market.
**Effort:** 1 email to CFTH. Free. 1 week (depends on CFTH response time).

---

#### Experiment 9: Tax Delinquency Owner Intercept
**Tests:** A12 (delinquent owners reachable and motivated)
**Priority:** P2 — run after Experiments 1–3 validate the base renovation exchange

**Setup:**
1. Pull HCAD delinquency data: residential properties, 2+ years delinquent, owner mailing address available.
2. Filter to 20 properties 30–90 days from auction.
3. Send certified letter with a specific offer: *"We can help you keep your property and get income from it before the auction deadline. HomeGuarantee will pay you [amount] per month, beginning in 30 days."*
4. Track response rate vs. Experiment 1 baseline.

**Success criteria:** Response rate ≥2× Experiment 1 (urgency of delinquency drives higher engagement).
**Kill criterion:** No responses. (Suggests owners have abandoned the property emotionally even before the legal process completes.)
**Effort:** $400 (certified mail × 20 properties) + 5 hours. 3 weeks.

---

### Updated Decision Framework (Below-FMR Addition)

```
Experiment 8 passes (SSI tenants can pay $200-290/month)
  AND Experiment 6 confirms owners feel negative carry
    → Launch Stabilization tier (non-voucher) as a parallel track to Renovation Exchange
    → No CFTH dependency required for Stabilization tier
    → Expand total housing pool without waiting for UPCS inspection pipeline
    → Target: 20 Stabilization-tier units by Month 22

Experiment 8 fails (tenants can't reliably pay without HA backing)
    → Stabilization tier requires co-signer, employer garnishment, or other income assurance
    → OR: Stabilization tier only for tenants with earned income (not SSI-only)
    → Floor contract rent at $350 (HCV threshold) to ensure HA backstop

Experiment 7: Variant B (liability framing) wins
    → Rewrite all owner outreach, GTM messaging, and HCAD campaign around carrying cost elimination
    → Update battlecards to lead with "convert liability to asset"

Experiment 7: Variant A (renovation framing) wins
    → FMR-model outreach works as originally designed
    → Liability framing reserved for tax-delinquency intercept only (highest urgency owners)

Experiment 9 passes (delinquent owners respond at higher rate)
    → Add tax-delinquency intercept as a dedicated acquisition channel
    → Partner with Harris County tax office or a tax lien attorney for referrals
    → Create a 30-day "rescue offer" SLA for pre-auction properties
```

---

### Updated Owner Segment Map

| Owner Segment | Current State | Our Pitch | Rent Tier | HCV? | Works Scope |
|---|---|---|---|---|---|
| Market-rate capable but risk-averse | Vacant by choice; could rent | Guarantee removes risk | FMR ($1,241) | Yes | Cosmetic (447 hrs) |
| Cash-poor, property substandard | Wants to rent; can't pass inspection | Free renovation + FMR commitment | Below-FMR ($600–1,241) | Yes | UPCS renovation (1,200–2,800 hrs) |
| Truly distressed; property unrentable | Negative carry; zero income | "Convert liability to asset" | Stabilization ($200–350) | No | Basic habitability |
| Tax-delinquent; facing auction | About to lose property | "Keep property + income in 30 days" | Any above $200 | Situational | Emergency triage |

---

### Revised Total Discovery Cost and Timeline

| Experiment | Priority | Cost | Timeline |
|---|---|---|---|
| 1: Owner offer test | P0 | $2,000 | 3 weeks |
| 2: Renovation cost audit | P0 | $500 | 2 weeks |
| 3: Works training feasibility | P0 | Free | 1 week |
| 4: Solar PPA feasibility | P1 | Free | 1 week |
| 5: REIT structural feasibility | P1 | $250 | 1 week (bundled) |
| 6: Vacancy cost survey | P0 | Free | Bundled with E1 |
| 7: A/B pitch framing | P1 | Free | Bundled with E1 |
| 8: Non-voucher tenant affordability | P1 | Free | 1 week |
| 9: Tax delinquency intercept | P2 | $400 | 3 weeks (after E1-E3) |

**Revised total cost:** ~$3,150 | **Calendar time:** 5 weeks parallel + 3-week delinquency intercept

---

## Kill Switches Added by This Discovery

| K# | Switch | Resolution path |
|----|--------|----------------|
| K6 | Works renovation quality passes HUD UPCS inspection | Test: first renovated property submitted to inspection before scaling |
| K7 | Solar PPA transferable between HCV tenants | Resolution: Experiment 4 — PPA provider contractual terms |
| K8 | REIT structure doesn't conflict with K1 (TX insurance licensing) | Resolution: Experiment 5 — legal call |
| K9 | Stabilization-tier tenants ($200–350/month, no voucher) can pay reliably without HA backstop | Resolution: Experiment 8 — CFTH income data |
| K10 | Basic habitability (non-UPCS) tenancy doesn't trigger any HUD/HA compliance requirements for HomeGuarantee | Resolution: 30-min call with housing attorney — confirm no regulatory tripwire for non-voucher tenants |

---

## Files Referenced

- `houston-discovery-and-prd.md` (PRD v1.5) — core platform PRD
- `homeguarantee-works-brief.md` — Works program concept
- `gtm-plan-homeguarantee.md` — Phase 1 GTM including HCAD absentee landlord outreach
- `HomeGuarantee_Financial_Projection.xlsx` — financial model (renovation exchange not yet modeled)
