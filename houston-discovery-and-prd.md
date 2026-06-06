# Houston Pilot: Discovery & PRD
*Landlord Guarantee Platform — LessHomelessness*
*Date: June 7, 2026*

---

## Part 1: Houston Discovery

### Root Cause Analysis

Houston's homelessness is almost solved by national standards — down 63% from its 2011 peak of ~8,500 to 3,280 in 2024. The people who remain are the hardest to house. Understanding why reveals exactly what the product must solve.

#### Primary causes of homelessness entry in Houston (2024 PIT survey)

| Cause | % of population |
|-------|----------------|
| Economic crisis (job loss, bills > income) | 50% |
| Housing-related (eviction, unaffordable rent) | 28% |
| Family conflict / relationship breakdown | 20% |
| Mental health condition (co-occurring) | 56% |
| Substance use disorder (co-occurring) | 46% |
| Veterans (proportion of total) | 11% (~420 people) |

Economic hardship is the entry point. Mental health and substance use are co-occurring conditions that make re-housing harder but are rarely the sole cause of becoming homeless.

#### Why people stay homeless in Houston (the exit bottleneck)

The Way Home coalition has 100+ partners, a functional coordinated entry system, and Housing First infrastructure. The 3,280 people remaining aren't stuck because of a broken system — they're stuck because of one specific failure: **landlords won't accept them.**

The six specific barriers:

1. **Legal source-of-income discrimination.** Texas SB 267 (2015) explicitly prohibits cities from passing ordinances that protect voucher holders. Landlords in Houston can legally turn away anyone with a Housing Choice Voucher. This is not a bug — it is codified law.

2. **Administrative friction with HUD.** Landlords must schedule and pass HUD inspections, navigate paperwork, and wait for government payment processing. Many small landlords find the process more trouble than it's worth when market tenants are available.

3. **Fear of property damage and non-payment.** Perceived (not always actual) risk that formerly homeless tenants will cause damage or miss rent. Research shows voucher holders are not worse tenants than other low-income renters — but perception drives behavior.

4. **Stigma and screening barriers.** Criminal histories, prior evictions, and poor credit are common among formerly homeless individuals. Standard tenant screening rejects them automatically.

5. **Affordability gap.** Houston's FMR for a 1BR is $1,241. Median asking rent is ~$1,450 — a 17% gap. Even with a voucher covering FMR, landlords expect tenants to cover the remaining $200, which many cannot.

6. **Supply gap: substandard and abandoned units locked out by renovation cost.** Houston's 105,840 actionable vacant units include a large segment of distressed, substandard, or abandoned properties whose owners cannot afford to bring them to HUD UPCS standards. These units sit vacant — costing owners $325–540/month in taxes, insurance, fines, and vandalism — while homeless individuals go unhoused. Without a renovation pathway, this supply is permanently unavailable to the housing market. The Works Renovation Exchange (Phase 2.5b) is designed to unlock it.

#### Why Houston is the right pilot

- **32× vacancy surplus**: 105,840 actionable vacant units vs. 3,280 homeless people
- **Smallest affordability gap of any major metro**: only 17% above FMR — closeable with a modest subsidy
- **Infrastructure already exists**: The Way Home's coordinated entry system, landlord team, and case management network are operational
- **Political alignment**: City of Houston has committed to Housing First; CFTH has buy-in from 100+ partners
- **Near-zero target**: Housing 3,280 people is a concrete, winnable outcome — not an aspirational goal
- **Large distressed property inventory**: HCAD data shows thousands of vacant, tax-delinquent, or code-noncompliant units available as a latent supply pool

#### Discovery assumptions being tested

| # | Assumption | Risk Level | Experiment |
|---|-----------|------------|-----------|
| A1 | Landlords will accept formerly homeless tenants if property damage risk is guaranteed up to $20K | High | Survey 20 landlords; present guarantee offer |
| A2 | The Way Home's coordinated entry data can be used to pre-qualify tenants and feed unit matching | Medium | Technical interview with CFTH data team |
| A3 | Housing Authority will pay $75–100/unit/month for a platform that accelerates voucher placement | High | Discovery calls with HHA procurement |
| A4 | Claims rates for formerly homeless tenants with wraparound support are insurable at <15% | High | Data request from OHCS (Oregon) + CFTH exit data |
| A5 | The 17% FMR gap can be closed via an emergency fund or landlord incentive rather than voucher increase | Medium | Model unit economics with $150/mo top-up per unit |
| A6 | Distressed property owners with negative carry ($325–540/month) will accept $200–350/month rent rather than continue paying to hold a vacant property | High | HCAD property scan + 20 owner outreach calls |
| A7 | Works renovation labor at $16.83/hr can bring a distressed unit to habitability standards within the value ceiling created by owner rental commitment | High | Review 5 distressed property HCAD records; scope renovation labor requirement |
| A8 | SSI-income tenants (~$967/month) can reliably pay $200–290/month rent without HA backing over 24–36 months | High | HUD PD&R literature review; CFTH non-voucher default rate data |

---

## Part 2: Product Requirements Document

### HomeGuarantee — Landlord Risk Guarantee Platform
**Version 1.6 | Houston Pilot**
*Updated June 7, 2026*

> **v1.1:** Revenue model restructured; CFTH partnership elevated; fund governance added.
> **v1.2:** Pre-launch gate collapsed; CoC conflict resolved; "pause" defined; rollback plan added; Phase 1 data schema specified.
> **v1.3:** Stakeholder personas (Section 3); market sizing (Section 8b); Managed tier Phase 2.5 (Section 6); Works referenced.
> **v1.4:** Kill switches added (Section 12); Opportunity Solution Tree added (Section 13).
> **v1.5:** Go-to-market appendix added (Section 14) — competitor analysis, value propositions, positioning, battlecards, and GTM plan.
> **v1.6:** Below-FMR Stabilization tier added as Phase 2.5b; Persona 6 (Ray, distressed property owner) added; OST expanded to O12; kill switches expanded to K10; non-goals updated to reflect Works Renovation Exchange scope; revenue model updated with Stabilization tier and Works renovation contracts; risks updated from `red-team-below-fmr.md`. Supply-side expansion documented in `discovery-works-expansion.md`; red-team in `red-team-below-fmr.md`.

---

### 1. Problem Statement

Houston has 18,900 active Housing Choice Vouchers but only 3,280 homeless people. The gap isn't funding — it's landlord refusal. One in four voucher holders cannot use their voucher because no landlord will accept them. Texas law explicitly allows this discrimination. The result: vouchers expire unused, people stay homeless, and the city spends ~$35,000–$50,000 per person per year in emergency services — 2–3× what stable housing would cost.

The Way Home coalition has world-class infrastructure for finding and supporting homeless individuals. What it lacks is a scalable mechanism to unlock private-market landlords. HomeGuarantee is that mechanism.

A second and underexplored supply constraint compounds the first: thousands of Houston's vacant units are not currently rentable at any price. Their owners — many carrying negative monthly cash flow from taxes, insurance, and code enforcement fines on vacant properties — cannot afford the renovation cost to bring them to HUD habitability standards. These units sit permanently off-market while demand goes unmet. The Works Renovation Exchange converts this hidden inventory into viable housing by making the renovation a shared benefit rather than a solo owner cost.

---

### 2. Background

**The Way Home** is a coalition of 100+ Houston-area organizations operating on a Housing First model. Since 2012 it has reduced Houston's homeless population by 63%, from ~8,500 to 3,280. It runs a coordinated entry system (HMIS) that prioritizes individuals for housing based on need and matches them with available units.

The coalition operates a dedicated landlord engagement team, but finding willing landlords is becoming harder as Houston's rental market tightens. The coalition's own research identifies landlord refusal as the primary remaining bottleneck.

**Comparable programs:** Oregon's Housing Choice Landlord Guarantee Program covers up to $20,000 per tenancy for damages, unpaid rent (3 months), vacancy loss, and utilities. HUD's national guidance for landlord incentives includes signing bonuses ($750/unit), security deposit assistance, and damage reimbursement up to $1,500. HomeGuarantee would combine and privatize these mechanisms into a self-sustaining product.

**Foundational dependency — CFTH partnership:** HomeGuarantee cannot operate without a formal partnership agreement with CFTH before Phase 1 launches. CFTH controls the three things HomeGuarantee requires: (1) the HMIS tenant pipeline, (2) existing landlord relationships built over a decade, and (3) case manager participation from 100+ partner organizations. The CFTH partnership agreement must be signed — with explicit upside for CFTH — before the first landlord is enrolled. A separate partnership proposal has been prepared for this purpose. See `cfth-partnership-proposal.md`.

**Supply-side expansion context:** The Works Renovation Exchange and below-FMR Stabilization tier are documented in detail in `discovery-works-expansion.md` (discovery plan) and `red-team-below-fmr.md` (critical assumption analysis). These documents are the primary references for Phase 2.5b design and should be reviewed before any Stabilization-tier enrollment begins.

---

### 3. User Segments & Stakeholder Personas

*Full personas, journey maps, and north star metrics for all six stakeholders are documented in `stakeholder-personas.md`. Summaries below.*

---

#### Persona 1 — Maria, The Small Landlord *(primary user, decision-maker)*

**Profile:** 52, owns 4 rental units (retirement investment), manages them alongside a day job. One bad tenancy experience shaped her permanently. Tried Section 8 once — inspection failures and 7-week payment delays — vowed never again.

**Job-to-be-done:** Predictable monthly income with minimum surprises, so properties stay an asset into retirement.

**Core fears:** Financial loss from damage or non-payment; administrative burden of HCV program; being the only landlord in her circle "taking that kind of risk" (social acceptance risk).

**Key insight:** Her refusal is actuarial, not ideological. The guarantee reprices her calculation. When financial risk is covered AND operational friction disappears, her answer changes. The first 3 claims paid quickly are a marketing event, not just an ops event.

**What HomeGuarantee must deliver for Maria:**
- Rent deposited the 1st of the month — not "pending HHA processing"
- All HUD paperwork handled by a named liaison
- Claims paid within 30 days, no hoops
- *(Phase 2.5)* Full management option so she never has to field a maintenance call

**North star:** *"My unit is occupied, rent arrives the 1st, I've had zero HUD paperwork cross my desk, and my damage claim paid in 18 days."*

---

#### Persona 2 — DeShawn, The Case Manager *(operator, platform adopter)*

**Profile:** 31, BSW at a nonprofit in The Way Home network, managing 28 active clients (should be 20). Closes ~3 placements/month; spends ~6 hours per placement. Genuinely cares; growing frustrated that systemic barriers prevent him doing the work he signed up for.

**Job-to-be-done:** Place clients into stable housing as fast as possible so each person stops being in crisis — and DeShawn can move to the next person.

**Core friction:** Cold calling landlords (10 calls to get 1 appointment); HUD inspection delays kill negotiated deals; criminal records auto-reject his most vulnerable clients.

**Key insight:** DeShawn doesn't just want tools that work — he wants to feel like he's winning. The placement is a moment of victory. The platform must celebrate his role, not obscure it. Send him a notification when his client gets their keys — with his name on it.

**What HomeGuarantee must deliver for DeShawn:**
- A searchable list of landlords who have already said yes, filterable by bedroom/zip
- Inspections handled entirely without his involvement
- Time-to-keys: 21 days (currently 47)
- Mobile-friendly intake form under 5 minutes

**North star:** *"7 placements this month. Didn't cold-call a single landlord. Two clients moved in within 14 days of being matched."*

---

#### Persona 3 — Patricia, The Housing Authority Director *(Phase 3 buyer)*

**Profile:** 57, Deputy Director of Leasing at HHA. Manages a team of 40; answers to the board and HUD. HHA's voucher utilization rate is declining; waitlist frozen since December 2023.

**Job-to-be-done:** Keep voucher utilization above HUD's performance threshold — without new budget, without political controversy.

**Key insight:** Patricia isn't buying a product — she's buying political cover. If HomeGuarantee improves her utilization rate by 15pp, what she's actually buying is the ability to walk into a HUD review with a data exhibit. Design the reporting dashboard around HUD's annual performance metrics, not HomeGuarantee's own definitions.

**What HomeGuarantee must deliver for Patricia:**
- Demonstrably improved voucher utilization rate (measurable, reportable)
- A dashboard she can show the HHA board and HUD reviewers
- Proof the product works before she opens procurement (pilot data at Month 6)

**Relationship to revenue:** Patricia's team is the Phase 3 paying customer at $75–100/unit/month. She is not in the Phase 1 or 2 revenue model. Build the product for DeShawn and Maria first; Patricia follows the data.

**North star:** *"FY2026 HUD report: 93% voucher utilization, up from 78%. 500 placements. 87% 12-month retention. The board asked me to present it."*

---

#### Persona 4 — James, The CFTH Executive Director *(partnership gatekeeper)*

**Profile:** 61, 14 years at CFTH, stewards 100+ partner organizations. Federal funding cuts threaten $12M of CFTH's $47M budget. Deeply invested in Houston's national reputation for Housing First.

**Job-to-be-done:** Sustain Houston's progress on homelessness — and CFTH's central role in that progress — while diversifying revenue away from annual federal grant cycles.

**Key insight:** James is motivated by legacy, not metrics. He is thinking about what Houston looks like when he steps down. The partnership proposal's most important line is: *"The credit for what gets built belongs to both organizations."* Address his legacy motivation, not just the 15% revenue share.

**What HomeGuarantee must deliver for James:**
- Landlord enrollment growth that measurably expands The Way Home's reach
- A revenue stream not tied to annual grant renewal (the 15% platform fee share)
- National recognition with CFTH's name in the headline, not the footnote
- CFTH as primary rollback successor if HomeGuarantee ceases operations

**North star:** *"The New York Times: 'How Houston Became the First Major American City to End Chronic Homelessness.' The Way Home is in the headline. HomeGuarantee is in the third paragraph."*

---

#### Persona 5 — Marcus, The Formerly Homeless Individual *(beneficiary)*

**Profile:** 47, chronically homeless 3.5 years, in emergency shelter. Prior eviction and misdemeanor conviction. 4 prior placement attempts failed — two from landlord screening rejection. Active on mental health medication for 8 months, longest stable period in years.

**Job-to-be-done:** A place with a door that locks — where he can sleep safely and stop spending every day managing the crisis of homelessness.

**Key insight:** Marcus's critical moment is not move-in day — it's days 60–120. Every prior tenancy failure happened in that window when the excitement of new housing wore off and real stressors emerged. The tenancy health alert system is not a product feature; it is the mechanism that keeps Marcus housed through that window. The guarantee gets him in; the monitoring keeps him in.

**What HomeGuarantee must deliver for Marcus:**
- A landlord who gives him a chance — the guarantee removes their risk, removing his rejection
- Proactive support before crisis (tenancy health alerts trigger case manager contact before eviction proceedings, not after)
- Dignity: treated as a prospective tenant, not a risk to manage
- *(Phase 2.5 / Works)* Potentially, a pathway from housed to employed within the HomeGuarantee system

**North star:** *"13 months in my apartment. Rent paid. Know my neighbor's name. Not thinking about where I'm sleeping tomorrow."*

---

#### Persona 6 — Ray, The Distressed Property Owner *(Phase 2.5b supply-side partner)*

**Profile:** 64, owns a 3-bedroom house in Houston's Fifth Ward inherited from his mother. Has lived in Dallas for 11 years. The house has been vacant for 4 years — he initially planned to rent it but couldn't afford the $25,000 estimated to bring it to HCV inspection standards. He's now paying ~$430/month in property taxes and insurance on a property generating zero income. He hasn't visited in 2 years.

**Job-to-be-done:** Convert a property he can no longer manage into something that generates income — or at minimum stops costing him money every month — before the city condemns it or a tax lien forces a sale at auction.

**Core fears:** Losing the property entirely (to tax auction, condemnation, or vandalism-related liability); taking on renovation costs he can't afford; renting to someone who damages the property and he has no recourse. He has mentally given up on the property but hasn't formally written it off.

**Key insight:** Ray does not experience his vacant property as an asset — he experiences it as a slow-motion loss. The "liability-to-asset" pitch only works if he is still actively paying carrying costs (and therefore feels the monthly pain). For owners who have already stopped paying taxes and insurance, the correct framing is "salvage before auction": the property will be gone in 6–12 months via tax sale; renting it now recovers something from a situation he's already mentally lost. Segment Ray carefully: the pitch differs depending on whether he is paying carrying costs or already delinquent. See `red-team-below-fmr.md` Kill-Assumption #1.

**What HomeGuarantee must deliver for Ray:**
- A renovation he doesn't have to pay for — Works does the habitability work in exchange for a rental commitment
- No management burden — Managed tier handles all tenant interaction
- Guaranteed income ($200–350/month) that more than covers his carrying costs and is on time
- A clear, simple exit: after the rental commitment period, he gets the property back improved

**Critical design constraint:** Works participants employed in renovation work may reside in Stabilization-tier units. If they do, the SSI earned-income offset creates income instability at the exact moment when Works employment begins. Design these two programs as non-overlapping: a tenant does not take a Works job in the same unit they occupy, and Works compensation is structured to stay within SSI income exclusion thresholds for non-Works tenants. See `red-team-below-fmr.md` Kill-Assumption #2.

**North star:** *"I'm getting $280 deposited every month. I haven't had to fly to Houston once. The house is in better shape than when I left it. I stopped dreading that HCAD letter."*

*Full persona, journey map, and north star metric in `stakeholder-personas.md` (Persona 6).*

---

#### Stakeholder Tension Map (summary)

The product sits at the intersection of six stakeholders with different definitions of success. Key tensions to manage:

| Tension | Between | Resolution |
|---------|---------|-----------|
| Credit attribution | James (CFTH) vs. HomeGuarantee | Co-branding; CFTH in headline |
| Data vs. privacy | Patricia (needs utilization data) vs. Marcus (deserves anonymity) | Anonymized aggregate reporting only |
| Risk vs. access | Maria (screens out risk) vs. Marcus (needs a chance) | Guarantee rebalances the calculus |
| Speed vs. process | DeShawn (21-day target) vs. HUD inspection timelines | HomeGuarantee absorbs inspection coordination |
| Income vs. stability | Ray (wants rental income) vs. Works tenant (SSI offset risk) | Works participants not co-located with Stabilization units |
| Renovation cost vs. Works scope | Ray (wants full renovation) vs. Works labor ceiling | Ceiling set by owner value (income + avoided carrying costs + appreciation); delinquent owners have lower ceiling |

HomeGuarantee's north star — **placements per month** — is the single metric that advances all five tenant-side stakeholders simultaneously.

---

### 4. Goals

#### What success looks like in the Houston pilot (12 months)

- House 500 individuals from The Way Home's coordinated entry list
- Recruit and retain 200 participating landlords
- Achieve voucher utilization rate improvement of ≥15 percentage points for participating housing authorities
- Claims rate ≤12% of tenancies (validates insurability thesis)
- 90-day tenancy retention rate ≥85% (matching The Way Home's existing performance)
- Unit economics: platform fee revenue covers operating costs at 300+ active units

#### Supply-side goal (Month 18–24)

- Identify and convert 50 distressed/abandoned units into active housing placements via the Works Renovation Exchange (Stabilization and Below-FMR Voucher tracks combined)
- Validate that distressed property owners accept the renovation-for-commitment exchange at a rate sufficient to build a pipeline
- Confirm Works labor ceiling calculations against real renovation scopes for 5 pilot properties

#### Non-goals (out of scope for v1)

- Acquiring properties outright (HomeGuarantee's Works Renovation Exchange creates access to existing substandard units via renovation-for-commitment exchange, not property acquisition; this distinction is intentional and structural)
- Serving unsheltered individuals who have not yet entered coordinated entry (must have HMIS record)
- Expanding to other cities before Houston pilot reaches 500 placements
- Tenant financial products (credit building, savings accounts) — potential v2
- Source-of-income discrimination advocacy / legal challenge to SB 267 — separate track
- New construction or land development of any kind

---

### 5. Solution Overview

HomeGuarantee is a B2B2C platform with four integrated components:

**1. The Guarantee Product** — A financial guarantee of up to $20,000 per tenancy, covering:
- Property damage exceeding the security deposit
- Unpaid rent (up to 3 months)
- Vacancy loss during post-tenancy repair (up to 30 days)
- Court and legal filing fees if eviction proceeds

Landlords apply for coverage per unit. Approved tenants are drawn from The Way Home's HMIS system (pre-qualified, case-managed). Claims are filed through the platform and paid within 30 days.

**2. The Matching Platform** — A web-based tool for case managers to:
- Search available participating landlord units by size, location, and FMR compatibility
- Submit tenant profiles (anonymized, from HMIS) to interested landlords
- Track placement progress and tenancy status
- Trigger guarantee enrollment upon lease signing

Landlords get a dedicated portal to list units, review anonymized tenant profiles, accept/decline placements, and file claims.

**3. The Landlord Experience Layer** — Features that remove the administrative friction of the HCV program:
- Direct deposit rent payments on the 1st of every month (guaranteed, before housing authority transfer settles)
- Single point of contact: a HomeGuarantee landlord liaison handles all HHA/HCHA paperwork
- HUD inspection scheduling and coordination on the landlord's behalf
- 24/7 case manager contact for any tenancy issue (proactive intervention before problems escalate)

**4. The Supply Expansion Layer (Phase 2.5b)** — A Works-powered pathway to convert distressed, substandard, and abandoned properties into viable housing units:
- Works Renovation Exchange: Works crews renovate distressed units to habitability standards; owners commit to a rental agreement in exchange; no cash changes hands for the renovation
- Two sub-tracks based on final contract rent:
  - **Stabilization Tier** ($200–350/month): Below HCV HA-contribution threshold; no HCV required; no HUD UPCS inspection required (no voucher used); Works does basic habitability scope; tenant pays directly via SSI or other income
  - **Below-FMR Voucher Tier** ($350–FMR): HCV applies (HA pays gap above tenant's 30% share); HUD UPCS inspection required; Works does more substantial renovation
- HCAD-sourced outbound channel: identify distressed property owners via public records, tax delinquency status, vacancy duration, and absentee owner mailing addresses
- Solar PPA integration: third-party solar installation on qualifying properties at no cost to owner or tenant; tenant pays discounted electricity rate; reduces utilities burden and increases property value for owner

The Supply Expansion Layer does not replace the demand-side guarantee product. It expands the housing pool available to the platform by unlocking units that are currently off-market.

---

### 6. Feature Specification

#### Phase 1 — Pilot (Months 1–6): Manual-first, 50 units

The goal of Phase 1 is to validate the guarantee product and claims model, not to build software. Most matching and guarantee administration happens manually via a case manager workflow.

| Feature | Description | Owner |
|---------|-------------|-------|
| Landlord enrollment form | Simple web form: unit details, bank info, guarantee agreement | Product |
| Tenant pre-qualification | Pull from HMIS via The Way Home API or manual export. If manual: structured web form with required fields — name, DOB, HMIS ID, case manager name/org, housing history (months homeless, prior evictions, prior tenancies), income source, voucher status, support services enrolled. All fields required; no free-text-only fields. Schema must mirror Phase 2 HMIS integration fields so data is usable for actuarial analysis without cleaning. | Partnership |
| Manual matching workflow | Case manager reviews unit list, proposes match, landlord approves via email | Ops |
| Guarantee agreement (PDF) | Legal contract covering terms, coverage limits, exclusions | Legal |
| Claims intake form | Web form for landlord to submit claim with photos, receipts | Product |
| Claims review process | Staff reviews, pays within 30 days via ACH | Ops |
| Rent payment processing | Manual ACH setup per landlord; HomeGuarantee pays day 1, recoups from HHA | Finance |
| Landlord dashboard (v0) | Simple Airtable or Notion tracker visible to landlord | Product |

**Phase 1 success criteria:**
- 50 active units enrolled
- 5 claims processed end-to-end (validates the guarantee workflow)
- ≤12% claims rate on pilot cohort
- Landlord NPS ≥40 at 90 days

#### Phase 2 — Platform (Months 7–12): 200 units, SaaS core

Build the minimum software platform to support scale and reduce ops overhead.

| Feature | Description | Priority |
|---------|-------------|----------|
| Landlord portal | List units, track placements, file claims, view payment history | P0 |
| Case manager dashboard | Search units, submit placements, track tenancy health | P0 |
| HMIS integration | Read tenant records from The Way Home's HMIS via API | P0 |
| Automated rent payment | ACH on 1st of month, auto-reconcile with HHA payment | P0 |
| Claims management system | Digital intake, document upload, review workflow, payment | P0 |
| Guarantee enrollment automation | Trigger on lease signing event; generate agreement | P1 |
| Tenancy health alerts | Flag tenancies at risk (missed payments, complaints) for case manager intervention | P1 |
| Landlord onboarding flow | Self-serve enrollment, bank verification, unit listing | P1 |
| HHA/HCHA API integration | Pull voucher status, FMR limits, inspection scheduling | P2 |
| Mobile-friendly interface | Case managers often work in the field | P2 |

#### Phase 2.5 — HomeGuarantee Managed (Month 9–18): Premium landlord tier

A full-service managed property offering that abstracts all post-placement landlord responsibility. Targets two segments the basic guarantee cannot reach: absentee landlords (own Houston property, live elsewhere) and HOA-community landlords (fear HOA complaints, need a legal and social buffer).

**Pricing:** $175–225/unit/month (vs. $87.50 basic). Requires licensing check: verify whether HomeGuarantee requires a Texas Real Estate Broker license under TX Occupations Code §1101 to coordinate maintenance for a fee. If required, structure Managed as a partnership with a licensed PM company.

| Feature | Description | Priority |
|---------|-------------|----------|
| Maintenance request intake | Tenant files request in app → routed to trades network → landlord sees summary only | P0 |
| HomeGuarantee Trades Network | Vetted contractors (plumbers, HVAC, electricians, handymen); 24-hr response; pre-negotiated rates; partially staffed by HomeGuarantee Works employees | P0 |
| Quarterly property condition reports | HomeGuarantee Works employee conducts walk-through with photo checklist; landlord receives health score report | P0 |
| HOA pre-clearance + complaint handling | Review HOA CC&Rs before enrollment; if complaint filed, HomeGuarantee legal/compliance team responds to HOA on landlord's behalf under TX Property Code §202.004 and federal fair housing law | P0 |
| Neighborhood Ambassador visit | Pre-move-in introduction to adjacent neighbors by a named HomeGuarantee liaison (staffed by HomeGuarantee Works); 90-day follow-up visit | P1 |
| "Certified HomeGuarantee Property" badge | Physical certification badge for enrolled properties; reframes social narrative from "renting to homeless" to "participating in a certified housing program" | P1 |
| Monthly landlord summary email | Plain-English summary: unit status, any maintenance completed, tenancy health score; no action required from landlord | P1 |
| Landlord peer community ("The Circle") | Private community of enrolled landlords for peer support, shared experience, normalization | P2 |

**HomeGuarantee Works staffing for Managed tier:** See `homeguarantee-works-brief.md`. At 500 managed units: 5 Property Condition Reporters, 3 Maintenance Coordinators, 4 Neighborhood Ambassadors (~12 direct employees). Works employees are formerly homeless individuals hired into these roles — a circular economy model in which housing placements create employment, and employment enables more placements.

**Phase 2.5 prerequisites:**
- Texas property management licensing determination (Week 1 of discovery phase)
- Landlord WTP validated at ≥$175/month (10-landlord interview, Week 2)
- HomeGuarantee Works pilot employer agreements with 2 workforce development orgs
- Trades network: minimum 5 contractors per trade (plumbing, electrical, HVAC, handyman) pre-negotiated

#### Phase 2.5b — Works Renovation Exchange & Stabilization Tier (Month 18–22)

The Stabilization tier expands housing supply by converting distressed, substandard, and abandoned properties into viable placements. This phase requires Phase 2.5 (Works crew operational) as a prerequisite — Works renovation capacity is the enabling mechanism.

**Two regulatory environments within the Stabilization tier:**

| Sub-tier | Contract rent | HCV involvement | HUD UPCS inspection | Works renovation scope | Tenant income source |
|----------|--------------|-----------------|---------------------|----------------------|---------------------|
| **Stabilization** | $200–350/month | None (below HA contribution threshold for SSI tenants) | Not required (no voucher used) | Basic habitability: HVAC, plumbing, structural security, weatherproofing | SSI ($967/month; 30% = $290 tenant share) or other non-voucher income |
| **Below-FMR Voucher** | $350–$1,241/month | Yes (HA pays gap above tenant's 30% income share) | Required (HCV participation trigger) | More substantial: full UPCS compliance scope | HCV-backed; HA pays contract rent minus tenant share |

**Note:** Houston Chapter 10 habitability standards apply to all occupied dwellings regardless of voucher use. The "no inspection required" benefit of the Stabilization sub-tier depends on Chapter 10 not being functionally equivalent to UPCS. This is Kill-Assumption #3 in `red-team-below-fmr.md` and must be resolved before Stabilization-tier renovation scope is designed. See K9 (Kill Switch section).

**Owner outreach channels:**
1. HCAD public records scan — identify vacant properties, tax delinquency status, absentee owner mailing address, improvement value
2. "Liability-to-asset" pitch for owners who are still paying carrying costs (negative cash flow is their felt pain)
3. "Salvage before auction" pitch for tax-delinquent owners who have mentally written off the property (different framing — see Kill-Assumption #1 in `red-team-below-fmr.md`)
4. City code enforcement intercept — properties cited for code violations; owners already under pressure to act

**Works renovation economics:**

The labor ceiling for Works renovation is set by the total value the owner receives from the rental commitment:

| Owner value component | Active carrier | Delinquent owner |
|----------------------|----------------|-----------------|
| Rental income (36 months × $400/month) | $14,400 | $14,400 |
| Avoided carrying costs ($400/month × 36 months) | $14,400 | $0 (already not paying) |
| Property appreciation (renovated, occupied) | $10,000 | $0–$3,000 (blighted block lag) |
| **Total owner value** | **$38,800** | **$14,400–$17,400** |
| Works labor ceiling (÷ $16.83/hr base) | **2,305 hours** | **856–1,034 hours** |

The ceiling collapses significantly for delinquent owners. Scope renovation depth accordingly: full renovation is only viable for non-delinquent owners with meaningful appreciation upside. Delinquent owners receive cosmetic-plus scope only.

**Works-SSI structural constraint:**
Works employees earn wages that trigger the SSI earned-income offset ($1 reduction per $2 earned above $85/month). A Works participant earning $900/month sees SSI drop by ~$408/month. To prevent Works employment from destabilizing Stabilization-tier rent payment:
- Stabilization-tier tenants who take Works jobs are reclassified as non-SSI payers and must have stable enough combined income to continue paying rent
- Alternatively, Works compensation is structured to stay within SSI income exclusion thresholds for tenants who are borderline
- These two programs are not co-located: Works employees do not perform renovation on the unit they currently occupy

**Phase 2.5b platform features:**

| Feature | Description | Priority |
|---------|-------------|----------|
| Distressed property pipeline | HCAD data integration or structured manual scan; identifies target owners | P0 |
| Owner outreach workflow | Certified mail outreach, owner call script, intake form for renovation-for-commitment agreement | P0 |
| Renovation scope calculator | Inputs: owner type (active/delinquent), appreciation estimate, carrying cost estimate → outputs Works labor ceiling and recommended scope | P0 |
| Renovation-for-commitment agreement | Legal contract: Works renovates unit; owner commits to rental agreement at agreed price; HomeGuarantee guarantee covers tenancy risk | P0 |
| Non-voucher rent payment | Direct ACH from tenant to HomeGuarantee to owner; not routed through HHA | P1 |
| Chapter 10 compliance tracker | Track habitability standard compliance for all Stabilization units (parallel to UPCS for voucher units) | P1 |
| Solar PPA referral workflow | Refer qualifying properties to Solar PPA partner; track installation and tenant utility savings | P2 |

**Phase 2.5b success criteria:**
- 50 owner outreach contacts → 20 owner conversations → 10 renovation-for-commitment agreements → 10 completed renovations → 10 active Stabilization placements
- Works labor ceiling calculation validated against real renovation scopes (5 pilot properties)
- Chapter 10 habitability confirmed for all Stabilization units at move-in
- SSI tenant payment default rate ≤12% at 6 months (consistent with HCV-backed tier)
- Kill switches K6–K10 resolved before first renovation begins

#### Phase 3 — Scale (Month 13+): 500+ units, insurance partnership

| Feature | Description |
|---------|-------------|
| Insurance underwriting integration | Partner with an insurtech to reinsure claims above $5K; use Phase 1–2 claims data as actuarial input |
| Multi-housing-authority support | Extend to HCHA (5,000 vouchers) and any other TX HA |
| Landlord referral program | Enrolled landlords refer other landlords; track and reward |
| Outcome reporting | Automated reports for housing authority funders and HUD |
| Tenant portal (optional) | Rent payment history, case manager contact, community resources |
| HomeGuarantee Works scale | 48+ Works employees by Year 3; first employees promoted to supervisor roles; program self-funded by Managed tier revenue |
| Stabilization tier scale | Expand Works Renovation Exchange to 200+ distressed units; REIT exploration for bulk acquisition of distressed portfolios (separate discovery track) |

---

### 7. Success Metrics

#### North Star
**Placements per month** — number of formerly homeless individuals placed into stable housing via HomeGuarantee

#### Input metrics

| Metric | Target (12 months) | Notes |
|--------|--------------------|-------|
| Active participating landlords | 200 | Recruitment pipeline needed from month 1 |
| Active enrolled units | 500 | ~2.5 units per landlord on average |
| Voucher utilization rate (HHA) | +15 pp improvement | HHA measures and reports to HUD |
| Monthly placements | 50/month by month 12 | Ramp from 10 in month 3 |
| Tenancy retention at 90 days | ≥85% | Proxy for stability; matches CFTH benchmark |
| Claims rate (HCV tier) | ≤12% of tenancies | Key insurability threshold |
| Claims rate (Stabilization tier) | ≤15% at 6 months | Higher allowance pending data; re-evaluate at Month 24 |
| Average claim payout | <$3,500 | Keeps fund solvent at seed stage |
| Time-to-placement | ≤21 days from match to lease | Reduces voucher expiration risk |
| Stabilization tier active units | 10 by Month 22 | Phase 2.5b pilot target |
| Works renovation projects completed | 10 by Month 22 | Phase 2.5b pilot target |

#### Health metrics

- Landlord NPS ≥40
- Case manager task completion rate ≥90% (placement submitted → lease signed)
- Platform uptime ≥99.5% (Phase 2+)
- Claims paid within 30 days: 100%
- Stabilization tenant SSI default rate ≤2× HCV-backed default rate (Kill-Assumption #2 threshold)

---

### 8. Business Model

#### Revenue by phase

| Phase | Primary revenue source | Amount | Status |
|-------|----------------------|--------|--------|
| Phase 1 (0–50 units) | Philanthropic grants (CoC, foundation) | $300–400K operating | Must close before launch |
| Phase 1 (0–50 units) | Guarantee fund capitalization | $2M reserve | Must close before first enrollment |
| Phase 2 (50–200 units) | HUD CoCBuilds NOFO + HOME funds | $500K–$1M | Apply Month 3 |
| Phase 2 (50–200 units) | Corporate CRA partners (banks) | $200–500K | Identify Month 2 |
| Phase 3 (200–500 units) | Platform fee — HHA/HCHA | $75–100/unit/month | Begin procurement Month 6 |
| Phase 3 (200–500 units) | Insurance reinsurance premium savings | Reduces reserve requirement | Insurance partner by Month 18 |
| Phase 2.5b (Month 18+) | Stabilization tier platform fee | ~$50/unit/month | Pilot 10 units; scale on validation |
| Phase 2.5b (Month 18+) | Works renovation contract revenue | ~$150–200/unit (owner pays portion above Works labor ceiling) | Applicable only to non-delinquent owners |

**Revenue model note — Stabilization tier:** Platform fee of ~$50/unit/month reflects the lower administrative cost of this tier (no HUD inspection, no HHA reconciliation) but also the higher risk profile (no HA backstop, SSI-income tenants). A higher claims reserve is required for Stabilization units; the $50/month fee alone does not self-fund the reserve. Stabilization tier is viable as a mission-critical supply expansion at scale, not as a near-term profit center.

**HHA is a Phase 3 revenue target, not a Phase 1 assumption.** The model does not depend on HHA payment to operate in the first 12 months. Phase 1 and 2 are grant-funded. This is a constraint, not a preference — HHA's austerity posture and 6–18 month procurement timeline make it unreliable as an early revenue source.

**Alternative Phase 1 payers to pursue (in priority order):**
1. HUD CoC Program grants — HomeGuarantee applies **as an independent applicant** with CFTH as a named program partner. Do not structure HomeGuarantee as a CFTH sub-recipient: combining a federal pass-through relationship with a revenue share arrangement on the same dollar creates a 2 CFR Part 200 conflict of interest that will flag in any CoC audit and may be rejected by CFTH's board on fiduciary grounds.
2. HOME Investment Partnerships — City of Houston administers ~$20M/year; landlord incentive programs are an eligible use
3. JPMorgan Chase / Wells Fargo / Regions CRA funds — banks in Houston have Community Reinvestment Act obligations; a landlord guarantee fund is a qualifying activity. Note: CRA funds may carry geographic restrictions (bank's assessment area) and income tier requirements — confirm compatibility with The Way Home's client population before accepting
4. Arnold Ventures / Ballmer Group / Houston Endowment — national and local funders already investing in Housing First infrastructure

#### Cost structure

| Item | Phase 1 (monthly) | Phase 2 (monthly) |
|------|--------------------|-------------------|
| Guarantee fund reserves | N/A (fund held separately) | N/A |
| Staff: Landlord Liaisons (2 FTE by Month 4) | $8K | $16K |
| Staff: Operations Lead (1 FTE) | $8K | $8K |
| Staff: Claims Adjudicator (0.5 FTE) | $4K | $6K |
| Technology (Airtable / tooling) | $2K | $15K (build) |
| Legal / compliance | $5K | $3K |
| **Total monthly burn** | **~$27K** | **~$48K** |

Phase 1 operating costs (~$160K for 6 months) must be covered by grant funding before launch.

#### Path to sustainability

Phase 3 platform fee revenue at 500 units ($37.5K–$50K/month) covers core operations. HomeGuarantee Managed tier at 300 managed units ($200/unit average) = $720K/month — HomeGuarantee Works labor cost (~$55K/month for 12 FTEs) is covered by earned Managed revenue by Month 18, making Works self-sustaining without philanthropy. The guarantee fund transitions from philanthropic reserve to insurance-backed product once 18–24 months of claims data is available for actuarial underwriting. Stabilization tier at 200 units generates $10K/month in platform fees — insufficient to self-fund but meaningful as mission contribution at the margin.

---

### 8b. Market Opportunity

*Full market sizing analysis is in `market-sizing-homeguarantee.md`. Key figures for this PRD.*

**Revenue unit:** One active enrolled placement = $1,050/year at $87.50/month basic tier; $2,400/year at $200/month Managed tier; $600/year at $50/month Stabilization tier.

| Geography | TAM | SAM | SOM Year 3 |
|-----------|-----|-----|-----------|
| Houston | $1.6–2.5M/year | $1.3–2.0M | $1.575M (1,500 units) |
| Texas | $5.5–10M/year | $3.9–7M | $2.625M (2,500 units) |
| United States | $105–120M/year | $63–70M | $6.3M (6,000 units) |
| Canada *(3–5 yr)* | ~$7.5M/year | ~$4.5M | $0 (not near-term) |

**TAM methodology:** US homeless population (771,500) minus non-viable markets (LA, NYC; vacancy ratio 1.4×) = 560,000 viable-market homeless × 60% in coordinated entry × 30% needing a guarantee = 100,800 addressable units × $1,050/year = **$105.8M basic tier TAM.** Managed tier additive at roughly 40% of enrolled units choosing premium: total US TAM expands to ~$145M at full penetration.

**Stabilization tier incremental TAM:** The distressed property supply segment is not captured in the existing TAM (which assumes market-rate units). Estimated 15,000+ distressed vacant units in Harris County from HCAD data. Even at 10% conversion rate and $600/year revenue, this adds $900K to Houston TAM — not material to the model but strategically significant as a supply source.

**Key assumptions:**
- 30% of coordinated entry placements require a landlord guarantee — the central revenue estimate. If 20%, US TAM = $70M; if 40%, US TAM = $140M. Phase 1 pilot data will sharpen this.
- LA and NYC remain non-viable through Year 3 due to vacancy constraints (1.4× ratio per Experiment D).
- HCV voucher supply stable or growing (3,000 new in FY2024; at risk from federal cuts — tracked as Track Tiger T7).
- Stabilization tier validated at pilot scale before inclusion in formal TAM estimates.

**HomeGuarantee Works market impact:** The Managed tier creates a separate revenue line — 40% of enrolled units × $200/month average = meaningful ARR expansion without expanding the addressable homeless population. At 500 managed units, Managed tier adds $1.2M/year ARR on top of basic platform fees.

---

### 8a. Fund Governance

The guarantee fund is a restricted reserve — not operating capital. It requires its own governance structure separate from day-to-day operations.

#### Fund structure

- **Initial capitalization target**: $2M (secondary committed but undrawn: $1M)
- **Minimum operating balance**: $500K — if fund falls below this, new enrollments pause automatically
- **Claims authority**: Individual claims under $5K approved by Operations Lead within 10 business days. Claims $5K–$20K require CEO sign-off. Claims above $20K (exceptional circumstances) require board approval.
- **Fund custodian**: Held in an FDIC-insured money market account, separate from operating accounts, with dual-signature withdrawal authorization

**Stabilization tier reserve note:** Stabilization-tier tenancies carry higher default risk (no HA backstop, SSI-income payers, unvalidated default rate). An additional reserve of $100K should be earmarked for Stabilization claims at Phase 2.5b launch (10 pilot units × $10K max coverage). This is separate from the main $2M HCV-tier fund.

#### Depletion triggers

| Trigger condition | Automatic action |
|-------------------|-----------------|
| Claims rate exceeds 15% in any rolling 60-day window | Pause new enrollments (defined below); convene risk review within 5 days |
| Fund balance falls below $750K | Draw secondary committed capital; notify board |
| Fund balance falls below $500K | Pause all new enrollments; emergency board meeting |
| Average payout exceeds $6,000 in any quarter | Audit claims cohort for systematic issue; tighten pre-qualification criteria |
| Stabilization-tier default rate exceeds 20% at 6 months | Pause Stabilization enrollment; investigate SSI income stability; do not expand beyond pilot 10 units |

**Operational definition of "pause new enrollments":** A pause stops at two specific stages in the placement pipeline — (1) no new landlord recruitment outreach, and (3) no new tenant-unit matches proposed to landlords. It does not stop placements already past the matching stage. Any tenant who has already been matched to a unit and approved by the landlord proceeds to lease signing regardless of the pause. Stopping a placement at that stage causes direct harm to a vulnerable person who has been told they have housing, and destroys the landlord relationship. Pauses are never applied retroactively to in-progress placements.

#### Annual fund audit

An independent financial audit of the guarantee fund will be conducted annually and shared with all philanthropic funders, the CFTH board, and any housing authority partners. Audit scope includes: claims paid, reserve balance, investment returns, and fund governance compliance.

#### Rollback plan

The guarantee agreement makes financial promises to landlords. If HomeGuarantee ceases operations — through fund depletion, partnership breakdown, or any other cause — active guarantee obligations do not simply disappear. The following succession protocol must be established before the first landlord signs a guarantee agreement, and disclosed to all landlords at enrollment:

1. **Primary successor**: CFTH has right of first refusal to assume active guarantee obligations using the remaining guarantee fund balance. This is a condition of the partnership agreement, not a post-failure negotiation.
2. **Secondary successor**: If CFTH declines or is unable, HomeGuarantee will work with HHA or HCHA to transfer active guarantee coverage to the housing authority's existing landlord incentive programs.
3. **Minimum notice**: Sixty days written notice to all landlords with active guarantees before HomeGuarantee wind-down, regardless of cause.
4. **Residual fund treatment**: Any guarantee fund balance remaining at wind-down is directed to CFTH's existing landlord incentive programs, not returned to general HomeGuarantee assets.

#### Insurance transition

The fund is designed to be replaced (not supplemented) by insurance in Phase 3. Once claims data supports an actuarial model, HomeGuarantee will seek reinsurance for claims above $5K per tenancy, reducing the required reserve from $2M to approximately $400K (covering the retained first-loss layer). The philanthropy that seeded the fund will be returned or redirected to other housing programs as insurance replaces it.

---

### 9. Risks & Mitigations

| Risk | Likelihood | Impact | Severity | Mitigation |
|------|-----------|--------|----------|-----------|
| CFTH partnership fails or stalls | Medium | Existential | 🔴 Launch-blocking | Partnership proposal submitted and signed before any other activity; CFTH given explicit upside (revenue share, board seat, co-branding) |
| Claims rate exceeds 15%, fund depletes | Medium | Existential | 🔴 Launch-blocking | Fund depletion triggers (Section 8a); secondary $1M committed capital; insurance term sheet sought before Phase 2 |
| Phase 1 grant funding not secured | High | Existential | 🔴 Launch-blocking | Do not enroll first landlord until $300K operating + $2M guarantee fund are closed; pipeline of 4+ funders being worked simultaneously |
| HMIS data sharing blocked | Medium | High | 🔴 Launch-blocking | Legal negotiation starts Month 1; Phase 1 designed to run entirely on manual tenant profiles as fallback |
| HHA procurement stalls beyond 18 months | High | Medium | 🟡 Fast-follow | HHA not in Phase 1 revenue model; alternative payers identified (Section 8); begin procurement conversation Month 6 with pilot data in hand |
| Landlord recruitment below target (17/month) | High | High | 🟡 Fast-follow | Hire second Landlord Liaison by Month 4; landlord referral program launched Month 3; Houston Apartment Association batch outreach |
| Case manager adoption stalls | Medium | High | 🟡 Fast-follow | Workflow shadowing Month 1 before Phase 2 scoping; platform must demonstrably reduce time-per-placement vs. current process |
| Affordability gap widens past 25% | Medium | Medium | 🟡 Fast-follow | Model economics at 25% and 35% gap scenarios; monitor HUD FMR announcements; negotiate unit pricing with landlords at enrollment |
| Federal voucher cuts shrink pipeline | Medium | Medium | 🟡 Track | Design product to work with direct subsidy, not only HCV; trigger review if federal HCV funding cut >10% |
| Tenancy retention falls below 75% | Low | High | 🟡 Track | Monthly cohort retention monitoring; trigger pause + case review if any monthly cohort falls below 75% at 90 days |
| Texas SB 267 chilling effect | Medium | Medium | 🟢 Managed | Guarantee agreement includes clear opt-out clauses; landlord can decline any individual tenant |
| **[NEW] Distressed owners already delinquent on taxes/insurance; "liability-to-asset" pitch misfires** | High | Medium | 🟡 Fast-follow | HCAD public records check: verify tax payment status on all target properties before outreach; use "salvage before auction" framing for delinquent owners. Kill-Assumption #1 in `red-team-below-fmr.md`. Test: free, 30 minutes. |
| **[NEW] SSI-income tenants destabilized by Works earned-income offset** | Medium | High | 🟡 Fast-follow | Do not co-locate Works participants and Stabilization tenants; design Works compensation within SSI exclusion thresholds. Kill-Assumption #2 in `red-team-below-fmr.md`. |
| **[NEW] Houston Chapter 10 habitability standard is functionally equivalent to HUD UPCS** | Medium | Medium | 🟡 Fast-follow | Legal desk research before designing Stabilization renovation scope. Kill-Assumption #3 in `red-team-below-fmr.md`. If Chapter 10 = UPCS: "no inspection" benefit disappears; Stabilization and Below-FMR Voucher tiers merge operationally. |
| **[NEW] Works labor ceiling collapses for delinquent/no-appreciation properties** | High | Low | 🟢 Managed | Ceiling already modeled at two levels (2,305 hrs active vs. 856 hrs delinquent). Scope renovation depth accordingly; do not promise full renovation to delinquent owners. Kill-Assumption #4 in `red-team-below-fmr.md`. |
| **[NEW] Tax-delinquent owners unreachable; 30-day auction window operationally impossible at pre-revenue stage** | High | Low | 🟢 Managed | Do not pursue tax-delinquent channel in Phase 2.5b; focus on active-carrier distressed owners first. Delinquency channel deferred to Phase 3. Kill-Assumption #5 in `red-team-below-fmr.md`. |

---

### 10. Release Plan

#### Pre-launch (Before Month 1): Prerequisites

**Two truly blocking items — nothing launches without both:**
- **CFTH partnership agreement signed** — with revenue share scoped to Houston, board seat, and co-branding provision. See `cfth-partnership-proposal.md`. No landlord, tenant profile, or grant application touches the HomeGuarantee name until this is signed.
- **Minimum viable capital secured** — $500K guarantee fund + $300K operating grant. This is the floor; pilot is scoped to match available capital. At $500K guarantee fund, the pilot runs 60 units with a $10K guarantee ceiling. Raise the ceiling as the fund scales.

**In parallel (not blocking — start Month 0, complete by Month 2):**
- Guarantee agreement reviewed by insurance counsel
- HMIS data sharing approach confirmed with CFTH's HMIS administrator (API or structured manual fallback — not blocking because Phase 1 is designed to run on manual intake regardless)
- Phase 1 data schema finalized with required fields that mirror future HMIS integration (see Section 6)
- Named persons confirmed for: insurance counsel, CFTH negotiation lead, grant writer
- Rollback plan documented (see Section 8a)

#### Month 1–2: Foundation
- CFTH data sharing agreement executed (or manual fallback design finalized)
- Hire: 1 Landlord Liaison, 1 Operations Lead
- Legal: finalize guarantee agreement, begin insurance consultation
- Workflow shadowing with 5 case managers (informs Phase 2 design)
- Landlord recruitment soft-launch: target 30 enrolled landlords
- Begin Houston Apartment Association outreach for batch landlord recruitment

#### Month 3–4: First Placements
- First 20 placements via manual workflow
- Process any early claims end-to-end
- Conduct landlord and case manager feedback interviews
- Begin Phase 2 product design (based on ops learnings)

#### Month 5–6: Pilot Validation
- 50 active units, 12% claims rate confirmed or adjusted
- Housing Authority discovery calls: present pilot data, begin procurement conversation
- Insurance actuarial analysis: share claims data with 2–3 potential partners

#### Month 7–9: Platform Build
- Build Phase 2 SaaS (landlord portal, case manager dashboard, HMIS integration)
- Expand to 150 active units
- HHA formal pilot agreement signed

#### Month 10–12: Scale to 500
- 500 active units, 50 placements/month
- Insurance term sheet signed for Phase 3 reinsurance
- Begin Houston-to-Chicago expansion scoping

#### Month 13–17: Works Operational + Phase 2.5b Prerequisites
- Works crew operational (12 FTEs minimum, self-funded by Managed tier revenue)
- Texas property management licensing confirmed or PM partnership structured
- Phase 2.5b kill switches K6–K10 resolved (see Section 12)
- HCAD property scan completed; 50 target owners identified
- Legal: renovation-for-commitment agreement drafted and reviewed
- Outreach to 50 distressed owners begins (certified mail); reachability rate measured

#### Month 18–22: Stabilization Tier Pilot (Phase 2.5b)
- 10 renovation-for-commitment agreements signed
- Works completes renovation on 10 properties
- 10 Stabilization-tier placements active
- Chapter 10 compliance confirmed for all 10 units
- SSI payment default rate tracked monthly; Stabilization expansion decision at Month 22

#### Month 23+: Evaluate and Scale
- If Stabilization pilot ≥8/10 properties cash-flow positive and default rate ≤12%: expand to 50 units
- If Below-FMR Voucher sub-tier viable (K6/K9 resolved): open HCV channel for $350–FMR properties
- REIT feasibility study begins (separate discovery track)

---

### 11. Open Questions

1. **Data sharing**: Will CFTH share HMIS records via API, or must case managers submit tenant profiles manually? The answer changes Phase 2 build complexity significantly.
2. **Voucher dependence**: What % of The Way Home's pipeline has an active HCV voucher vs. needing direct subsidy? If large numbers lack vouchers, the FMR gap becomes a direct cash cost.
3. **Guarantee limit**: Is $20,000 the right ceiling, or should Phase 1 start lower ($10K) to conserve fund capital while claims data is gathered?
4. **Landlord geography**: Are vacant units concentrated in specific Houston neighborhoods? If so, the matching algorithm must account for distance from services, employment, and transit.
5. **Tenant Readiness Education**: Should HomeGuarantee run its own program (like Oregon) or rely on CFTH's existing pre-tenancy support?
6. **Legal entity**: Should HomeGuarantee be a nonprofit (better for grant eligibility), a PBC, or a for-profit (faster scaling)? Tax treatment of guarantee fund reserves differs significantly.
7. **[NEW] Houston Chapter 10 vs. HUD UPCS**: Are the minimum habitability standards functionally equivalent? This determines whether the Stabilization sub-tier has a meaningfully lighter renovation scope or is operationally identical to the Below-FMR Voucher sub-tier.
8. **[NEW] SSI representative payees**: What % of SSI recipients in The Way Home's pipeline have court-appointed or family representative payees who control disbursements? If high, Stabilization-tier direct rent payment may require payee authorization workflow.
9. **[NEW] Works fully-loaded cost per hour**: Does $16.83/hour include overhead (training, supervision, insurance, materials), or is it base wage only? If fully-loaded cost is $22–28/hour, the Works labor ceiling tightens by 25–40% — significantly changing viable renovation scope.

---

### 12. Kill Switches

Kill switches are load-bearing assumptions whose falsification stops or fundamentally restructures the business. Each has a specific test, a deadline, and a binary outcome. K1–K5 must be resolved before Phase 2 engineering begins. K6–K10 must be resolved before Phase 2.5b renovation work begins.

*Full analysis: `red-team-final-business-case.md` (K1–K5) and `red-team-below-fmr.md` (K6–K10)*

---

#### Kill-1 — Texas insurance licensing (highest priority)

**The assumption:** HomeGuarantee can issue a financial guarantee to landlords for a monthly fee without holding a Texas Department of Insurance certificate of authority.

**Why it's load-bearing:** If the TDI classifies the guarantee product as insurance or surety — which Texas Insurance Code §101.001 may support — HomeGuarantee cannot legally operate in Texas.

**Test:** One call with a Texas insurance regulatory attorney. Single question: "Is a monthly-fee financial guarantee covering landlord losses from a tenant placement, operated by a private company, insurance under Texas law?"

**Deadline:** Week 1. **Cost:** ~$500. **Status:** ☐ Not yet resolved

---

#### Kill-2 — Guarantee fund tail-risk sizing

**The assumption:** A $2M guarantee fund is sufficient for the Houston pilot at a 12% claims rate and $3,500 average payout.

**Test:** Email Oregon OHCS requesting the claims distribution histogram — average payout, 90th percentile payout, maximum single claim, % of tenancies with zero claims.

**Kill criterion:** If Oregon's 90th percentile claim exceeds $12,000, the fund should be sized at $4M minimum for 500 units.

**Deadline:** Week 1. **Cost:** Free. **Status:** ☐ Not yet resolved

---

#### Kill-3 — HOA pre-clearance legal enforceability

**The assumption:** HomeGuarantee can defend landlords against HOA complaints using Texas Property Code §202.004 and federal fair housing protections.

**Test:** Same attorney call as Kill-1. Second question: "In Texas post-SB 267, can an HOA legally prohibit a landlord from renting to Section 8 voucher holders?"

**Kill criterion:** If legal theory has no basis → redesign HOA pre-clearance as mediation service rather than legal protection.

**Deadline:** Week 1 (bundle with Kill-1). **Cost:** ~$500. **Status:** ☐ Not yet resolved

---

#### Kill-4 — Enrollment duration underpins every financial model

**The assumption:** The average HomeGuarantee enrollment duration is 18 months.

**Test:** Request from CFTH: tenancy length distribution for HCV-placed individuals over the past 3 years.

**Kill criterion:** Median tenancy under 12 months → reprice revenue model to $700–$875/unit/year; remodel sustainability timeline.

**Deadline:** Week 1. **Cost:** Free. **Status:** ☐ Not yet resolved

---

#### Kill-5 — Founding team qualifications

**The assumption:** The founding team can simultaneously close a $2.75M raise, negotiate an institutional CFTH partnership, and navigate Texas real estate and insurance regulatory questions.

**Test:** Write two sentences: who leads HomeGuarantee, and what specifically qualifies them for each of these three tasks.

**Kill criterion:** No named person with government relations OR insurance/fintech OR nonprofit fundraising experience → extend launch by 6 months minimum.

**Deadline:** Before this PRD is shared externally. **Cost:** 30 minutes of writing. **Status:** ☐ Not yet resolved

---

#### Kill-6 — Works renovation quality passes Houston Chapter 10 (and/or HUD UPCS where applicable)

**The assumption:** Works renovation to "basic habitability" standards produces units that satisfy Houston Chapter 10 minimum habitation requirements for occupied dwellings — and, where the Below-FMR Voucher sub-tier applies, HUD UPCS Form 52580.

**Why it's load-bearing:** If Chapter 10 standards are functionally equivalent to UPCS, the "no inspection required" advantage of the Stabilization sub-tier is illusory. The renovation scope (and thus Works labor requirement) is no lighter than the voucher tier. The competitive distinction between the two sub-tiers collapses.

**Test:** Legal desk research: read Houston Code of Ordinances Chapter 10 minimum habitation standards and compare to HUD UPCS Form 52580. Two hours, free.

**Kill criterion:** Chapter 10 ≡ UPCS for all categories Works addresses (HVAC, plumbing, structural security) → Stabilization and Below-FMR Voucher sub-tiers merge operationally; no cost advantage to below-$350/month rent.

**Deadline:** Before Phase 2.5b renovation scope is designed. **Cost:** Free. **Status:** ☐ Not yet resolved

---

#### Kill-7 — SSI-income tenants can reliably pay Stabilization rent without HA backstop

**The assumption:** SSI tenants ($967/month; 30% = $290/month rent share) have a non-voucher default rate ≤2× the HCV-backed default rate over 24 months.

**Why it's load-bearing:** If SSI tenants without HA backstop default at ≥2× the rate of HCV-backed tenants, the Stabilization tier becomes a loss leader — claims deplete the reserve faster than modeled, and the tier is not viable without additional subsidy.

**Test:** (a) HUD PD&R literature search for SSI tenant non-voucher default rates. (b) Request CFTH non-voucher tenant default rate data. Two hours, free.

**Kill criterion:** Non-voucher SSI default rate ≥2× HCV-backed default rate → Stabilization tier requires supplemental subsidy (e.g., city emergency fund top-up) to remain solvent. If no subsidy available, tier is not viable.

**Deadline:** Before Phase 2.5b placements begin. **Cost:** Free. **Status:** ☐ Not yet resolved

---

#### Kill-8 — Distressed owner reachability and execution within commitment window

**The assumption:** Tax-delinquent and distressed property owners are reachable via certified mail and can execute a renovation-for-commitment agreement within the operational window HomeGuarantee can deliver.

**Why it's load-bearing:** HCAD absentee-owner addresses correlate with hard-to-reach ownership by definition — deceased owners, unsettled estates, multiple heirs in disagreement, and permanently relocated owners all reduce reachability. If <30% of targeted owners are reachable and legally authorized to commit, the channel cost does not justify yield.

**Test:** Send certified mail to 10 tax-delinquent HCAD properties. Track: reached vs. bounced vs. deceased vs. estate complication. Estimate reachability rate.

**Kill criterion:** <30% of delinquent owners reachable AND legally authorized → defer delinquency channel to Phase 3; focus Phase 2.5b on non-delinquent distressed owners only.

**Deadline:** Month 13 (before Phase 2.5b outreach campaign begins). **Cost:** ~$80 (10 certified letters). **Status:** ☐ Not yet resolved

---

#### Kill-9 — Works-SSI interaction does not destabilize Stabilization rent payment

**The assumption:** HomeGuarantee Works employment does not systematically reduce SSI income for Stabilization-tier tenants in ways that cause rent default.

**Why it's load-bearing:** Works earned income above $85/month triggers the SSI offset ($1 reduction per $2 earned). A Works participant earning $900/month sees SSI drop by ~$408/month. If Stabilization tenants take Works jobs, their SSI decreases precisely when Works hours fluctuate — creating rent coverage gaps that trigger claims on HomeGuarantee's own guarantee fund.

**Test:** (a) Ask Works program designers: does Works compensation trigger SSI offset for participants? (b) Model: at what Works income level does SSI drop below the point where $290/month rent is unaffordable?

**Kill criterion:** Works employment reliably drops SSI by ≥$150/month for participants earning above minimum threshold → redesign Works compensation or enforce non-overlap policy (Works participants may not reside in Stabilization units during Works employment period).

**Deadline:** Before Phase 2.5b design finalized. **Cost:** Free (internal analysis). **Status:** ☐ Not yet resolved

---

#### Kill-10 — Solar PPA is available and transferable for HCV tenants

**The assumption:** Solar PPA (Power Purchase Agreement) financing is available for 1–4 unit residential properties in Texas and can be transferred between tenants without triggering financing complications.

**Why it's load-bearing:** PACE financing is explicitly excluded for residential 1–4 unit properties under the Texas PACE Act — this assumption is already pre-falsified. Solar PPA is the only viable solar mechanism for this property type. If Solar PPA is not transferable on a tenant change, HomeGuarantee cannot offer solar as a value-add in the Stabilization tier without locking owners into the contract post-tenancy.

**Test:** Call 2 solar PPA providers operating in Texas; ask: (a) available for 1–4 unit residential?, (b) transferable to new tenant on same contract?

**Kill criterion:** PPA not available for sub-5-unit residential OR not transferable → remove solar PPA from Phase 2.5b feature set; defer to Phase 3 scale.

**Deadline:** Before Phase 2.5b feature design. **Cost:** Free (2 calls). **Status:** ☐ Not yet resolved

---

#### Kill switch summary table

| # | Kill switch | Test cost | Deadline | Status |
|---|------------|-----------|----------|--------|
| K1 | TX insurance licensing | ~$500 legal call | Week 1 | ☐ |
| K2 | Fund tail-risk sizing | Free (Oregon OHCS data) | Week 1 | ☐ |
| K3 | HOA legal enforceability | ~$500 (bundle with K1) | Week 1 | ☐ |
| K4 | Enrollment duration | Free (CFTH data request) | Week 1 | ☐ |
| K5 | Founding team fit | 30 minutes of writing | Before external sharing | ☐ |
| K6 | Works renovation passes Chapter 10 / UPCS | Free (desk research) | Before Phase 2.5b scope design | ☐ |
| K7 | SSI non-voucher default rate ≤2× HCV | Free (HUD PD&R) | Before Phase 2.5b placements | ☐ |
| K8 | Distressed owner reachability ≥30% | $80 (10 certified letters) | Month 13 | ☐ |
| K9 | Works-SSI interaction does not destabilize rent | Free (internal analysis) | Before Phase 2.5b design | ☐ |
| K10 | Solar PPA available and transferable | Free (2 calls) | Before Phase 2.5b feature design | ☐ |

**Total cost to resolve K1–K5: ~$1,000 and one week.** **Total cost to resolve K6–K10: ~$80 and one week.** None of these require building anything.

---

### 13. Opportunity Solution Tree

The OST maps each stakeholder pain point (opportunity) to the solutions in this PRD and the experiments that validate them. The desired outcome is the north star: **placements per month increases.** All twelve opportunities feed it.

*Interactive version: rendered in conversation. Markdown reference below.*

---

**Desired outcome → Placements per month ↑**

---

#### O1 — Landlords refuse: financial risk *(Maria)*

| Solutions | Phase |
|-----------|-------|
| Financial guarantee up to $20K/tenancy | 1 |
| Claims paid in 30 days (ACH) | 1 |
| Guarantee agreement (insurance-counsel reviewed) | 1 |
| Claims management system (digital intake, photo upload) | 2 |

| Experiments | Success criterion |
|-------------|-----------------|
| Publicize first 3 claims paid → landlord NPS survey | NPS ≥40 after first claim |
| Oregon OHCS loss distribution data request | Informs correct fund sizing |
| TX insurance regulatory legal check (Kill-1) | Binary: licensed or not |

---

#### O2 — Landlords refuse: administrative burden *(Maria)*

| Solutions | Phase |
|-----------|-------|
| Dedicated landlord liaison handles all HUD paperwork | 1 |
| Direct deposit rent on 1st (HomeGuarantee floats, recoups HHA) | 1 |
| HUD inspection scheduling and coordination offloaded | 1 |
| Landlord portal (enrollment, bank verification, status) | 2 |
| HHA/HCHA API integration (voucher status, FMR, inspections) | 3 |

| Experiments | Success criterion |
|-------------|-----------------|
| 10-landlord WTP interview at 3 price points | ≥4/10 choose option 2 or 3 |
| HAA batch outreach — measure response rate vs. cold calls | HAA batch > cold call response |

---

#### O3 — Landlords fear social consequences *(Maria — acceptance risk)*

| Solutions | Phase |
|-----------|-------|
| Neighborhood Ambassador (pre-move-in neighbor introduction) | 2.5 |
| "Certified HomeGuarantee Property" badge | 2.5 |
| HOA pre-clearance + complaint handling (legal layer) | 2.5 |
| Tenant introduction kit (opt-in, handwritten card) | 2.5 |
| Landlord peer community ("The Circle") | 3 |

| Experiments | Success criterion |
|-------------|-----------------|
| Ambassador A/B: complaint rate at 90 days (Month 3–5) | Ambassador group ≥40% fewer complaints |
| TX HOA legal theory check (Kill-3) | Confirms legal basis or pivots to mediation framing |
| Ask 5 landlords: does badge affect their decision? | ≥3/5 cite badge as meaningful |

---

#### O4 — Absentee landlords can't participate *(Maria — variant segment)*

| Solutions | Phase |
|-----------|-------|
| HomeGuarantee Managed ($175–225/unit/month) | 2.5 |
| HomeGuarantee Trades Network (24-hr vetted contractors) | 2.5 |
| Quarterly property condition report (Works employee) | 2.5 |
| Monthly landlord summary email (no action required) | 2.5 |

| Experiments | Success criterion |
|-------------|-----------------|
| 10-landlord WTP at 3 tiers | ≥4/10 choose Managed tier |
| TX property management licensing check (legal) | Confirms in-house vs. partnership model |
| Size absentee landlord segment in Houston | ≥15% of small landlords = viable segment |

---

#### O5 — Case managers can't find willing landlords *(DeShawn)*

| Solutions | Phase |
|-----------|-------|
| Curated enrolled landlord list (searchable by bed/zip) | 1 |
| Case manager dashboard — unit search, match proposal, status tracking | 2 |
| Landlord portal — unit listing, tenant profile review, accept/decline | 2 |
| Landlord referral program (enrolled landlords recruit peers) | 3 |

| Experiments | Success criterion |
|-------------|-----------------|
| Track placements/case manager/month baseline vs. post-launch | Placements/month ≥5 by Month 3 |
| Hire 2nd Landlord Liaison if pipeline <17/month at Month 4 | Decision gate at Month 4 |

---

#### O6 — Placements take too long *(DeShawn — 47-day avg vs. 21-day target)*

| Solutions | Phase |
|-----------|-------|
| Structured tenant intake form (5 min, mobile, required fields) | 1 |
| Inspection coordination offloaded to HomeGuarantee liaison | 1 |
| HMIS integration (pre-populated tenant profiles) | 2 |
| Guarantee enrollment automation (triggered on lease signing) | 2 |

| Experiments | Success criterion |
|-------------|-----------------|
| 30-day case manager workflow shadowing (prerequisite to Phase 2 spec) | Identifies correct interface model |
| Track time-to-placement per case manager from Day 1 | ≤21-day average by Month 6 |
| HMIS data sharing negotiation starts Month 1 | Signed MOU or written intent by Month 2 |

---

#### O7 — Tenancies fail in days 60–120 *(Marcus — critical vulnerability window)*

| Solutions | Phase |
|-----------|-------|
| Tenancy health alerts (flag at-risk tenancies proactively) | 2 |
| Case manager intervention protocol (before crisis, not after) | 2 |
| Quarterly property condition reports (Works employee visits) | 2.5 |
| Monthly landlord summary with tenancy health score | 2.5 |

| Experiments | Success criterion |
|-------------|-----------------|
| Track 30/60/90-day retention cohort from first placement | ≥85% at 90 days (matching CFTH benchmark) |
| CFTH exit data request: tenancy length distribution (Kill-4) | Sets correct enrollment duration assumption |
| Define alert trigger: what signal fires before crisis? | Alert fires before landlord contact, not after |

---

#### O8 — Housing authority vouchers expire unused *(Patricia — utilization at risk)*

| Solutions | Phase |
|-----------|-------|
| HA dashboard (HUD-formatted voucher utilization metrics) | 2 |
| Time-to-placement tracking (21-day target vs. 47-day baseline) | 2 |
| HHA/HCHA platform fee agreement ($75–100/unit/month) | 3 |
| Automated outcome reporting for HUD annual review | 3 |

| Experiments | Success criterion |
|-------------|-----------------|
| HHA discovery call at Month 6 with pilot utilization data | HHA identifies a budget source for platform fee |
| Design HA dashboard around HUD performance metrics, not HomeGuarantee's | Patricia can screenshot it for her HUD report |

---

#### O9 — Formerly homeless individuals face employment gap *(Marcus — housing ≠ stability)*

| Solutions | Phase |
|-----------|-------|
| HomeGuarantee Works circular workforce pipeline | 2.5 |
| 4 employment tracks: Condition Reporter, Coordinator, Ambassador, Trades | 2.5 |
| $18–22/hr direct employment with benefits and case management support | 2.5 |
| Works self-funding via Managed tier earned revenue at 300+ units | 3 |

| Experiments | Success criterion |
|-------------|-----------------|
| 3 calls with Houston workforce dev orgs — training timeline ≤8 weeks? | ≥2 orgs confirm ≤8-week pipeline |
| Skills survey of coordinated entry population (via CFTH) | ≥15% have construction/admin/maintenance skills |
| Works employee 90-day retention tracking from first hire | ≥85% retained at 90 days |

---

#### O10 — Substandard properties can't participate: owner present but unit fails inspection *(Ray — Below-FMR Voucher sub-tier)*

These are properties where the owner is actively paying carrying costs but cannot afford renovation to HCV UPCS standards. The "liability-to-asset" pitch applies. Works renovation makes the unit HCV-eligible; the owner accepts below-FMR rent in exchange.

| Solutions | Phase |
|-----------|-------|
| Works Renovation Exchange (Below-FMR Voucher sub-tier) | 2.5b |
| HCAD scan: identify non-delinquent owners of code-cited or substandard units | 2.5b |
| Renovation-for-commitment legal agreement | 2.5b |
| "Liability-to-asset" pitch deck for owner outreach (A/B vs. standard pitch) | 2.5b |
| HCV inspection coordination (Works scope sized to UPCS pass) | 2.5b |

| Experiments | Success criterion |
|-------------|-----------------|
| 20-owner outreach call: confirm negative carry is felt pain | ≥12/20 confirm monthly carrying cost >$300 as active burden |
| Works renovation scope vs. UPCS checklist: does labor ceiling allow UPCS-compliant scope? | Ceiling ≥800 hours for 3BR unit renovation |
| A/B pitch test: "liability-to-asset" vs. "renovation partnership" | "Liability-to-asset" converts ≥2× more owners |

---

#### O11 — Abandoned properties earn negative carry; owner has written off asset *(Ray — Stabilization sub-tier)*

These are the most distressed segment: owners who have effectively abandoned the property mentally and may be nearing tax auction. The "salvage before auction" framing applies. Works does basic habitability; tenant pays $200–350/month directly (no HCV); no UPCS inspection required (unless Chapter 10 triggers — Kill-6).

| Solutions | Phase |
|-----------|-------|
| Works Renovation Exchange (Stabilization sub-tier) | 2.5b |
| HCAD delinquency intercept channel (certified mail to tax-delinquent owners) | 2.5b |
| "Salvage before auction" pitch framing | 2.5b |
| Non-voucher direct rent ACH payment pipeline | 2.5b |
| Chapter 10 compliance tracker for all Stabilization units | 2.5b |

| Experiments | Success criterion |
|-------------|-----------------|
| 10 certified letters to tax-delinquent owners; track reachability (Kill-8) | ≥30% reachable and legally authorized |
| HCAD tax status check: are target owners still actively paying? | Segment owners by delinquency status before outreach |
| Works habitability scope vs. Chapter 10: does scope satisfy city code? | Works scope results in Chapter 10 compliance for 5 pilot units |

---

#### O12 — Formerly homeless tenants lack vouchers; no HCV available *(Marcus — non-voucher track)*

Some coordinated entry participants do not have an active HCV — either because the waitlist is frozen (HHA waitlist closed since December 2023), their voucher has expired, or their income level is below the HCV utility threshold. These individuals are currently unhoused with no clear path to placement. The Stabilization tier creates a non-voucher track: SSI income as direct rent, no government involvement required.

| Solutions | Phase |
|-----------|-------|
| Stabilization tier: non-voucher rent payment for SSI-income tenants | 2.5b |
| SSI income verification and rent affordability pre-check (30% of $967 = $290) | 2.5b |
| Representative payee identification and authorization workflow | 2.5b |
| Tenancy health monitoring (same as O7, with higher frequency for non-voucher tier) | 2.5b |

| Experiments | Success criterion |
|-------------|-----------------|
| CFTH query: % of coordinated entry population without active HCV | Quantifies non-voucher addressable population |
| HUD PD&R: SSI non-voucher default rate (Kill-7) | Default rate ≤2× HCV-backed rate validates viability |
| Pilot 10 non-voucher Stabilization placements; track 6-month payment default rate | ≤12% default rate at 6 months |

---

#### OST summary: opportunity → solution phase mapping

| Opportunity | Phase 1 | Phase 2 | Phase 2.5 | Phase 2.5b | Phase 3 |
|------------|---------|---------|-----------|-----------|---------|
| O1: Financial risk | Guarantee + claims | Claims system | — | — | — |
| O2: Admin burden | Liaison + direct deposit | Landlord portal | — | — | HA API |
| O3: Social acceptance | — | — | Ambassador, badge, HOA | — | Peer community |
| O4: Absentee landlords | — | — | Managed tier + Trades | — | — |
| O5: Find landlords | Landlord list | Matching dashboard | — | — | Referral program |
| O6: Placement speed | Intake form + inspection | HMIS integration | — | — | — |
| O7: Tenancy failure | — | Health alerts | Condition reports | — | — |
| O8: HA utilization | — | HA dashboard | — | — | HA fee + reporting |
| O9: Employment gap | — | — | Works pipeline | — | Works scale |
| O10: Substandard units (Below-FMR Voucher) | — | — | — | Works Renovation Exchange (voucher sub-tier) | Scale |
| O11: Abandoned units (Stabilization) | — | — | — | Works Renovation Exchange (stabilization sub-tier) | Scale |
| O12: Non-voucher tenants | — | — | — | SSI direct-pay track | Scale |

---

### 14. Go-to-Market Appendix

*Full documents are maintained as standalone files in the workspace. This section summarizes each and cross-references the file.*

---

#### 14a. Competitor Analysis

**File:** `competitor-analysis-homeguarantee.md`

Five competitors analyzed: Oregon HCLGP, Washington State LMP, HUD MTW Landlord Incentive Programs, TheGuarantors, and city/nonprofit Risk Mitigation Funds (Fargo, Tallahassee, Montgomery County, Portland).

**Key finding:** No competitor combines high coverage ($20K), an operational support layer, a matching platform, and a sustainable private revenue model. HomeGuarantee's $20K guarantee is 4× the market maximum. Every government program is grant-dependent and has no platform. TheGuarantors serves market-rate renters, not formerly homeless individuals, and has no HCV/HMIS integration.

**Primary competitive threat (12–18 months):** HUD's MTW landlord incentive evaluation report (due 2026) could trigger a federal mandate for standardized landlord guarantee programs — which could commoditize the baseline guarantee tier. Mitigation: reach 500 units and publish claims data before the report drops; position HomeGuarantee as the implementation vehicle for any federal program, not a competitor to be displaced.

**Differentiation summary:**

| Differentiator | HomeGuarantee | Best competitor |
|---------------|--------------|-----------------|
| Coverage ceiling | **$20,000** | $5,000 (Oregon/WA) |
| Platform | Yes | None |
| Ops layer (inspection, rent timing) | Yes | None |
| Managed property tier | Yes (Phase 2.5) | None |
| Works Renovation Exchange | Yes (Phase 2.5b) | None |
| Private revenue model | Yes | All grant-dependent |
| Employment for tenants | Yes (Works) | None |
| Non-voucher supply track | Yes (Stabilization tier) | None |
| Texas-specific | Yes | None |

---

#### 14b. Value Propositions

**File:** `value-proposition-homeguarantee.md`

One-sentence value propositions per stakeholder:

| Stakeholder | One-sentence value proposition |
|------------|-------------------------------|
| **Maria** (landlord) | "HomeGuarantee covers up to $20,000 per tenancy and handles every piece of HUD paperwork — so you get reliable rent on the 1st and zero administrative surprises, guaranteed." |
| **DeShawn** (case manager) | "HomeGuarantee gives case managers a pre-screened list of willing landlords, handles inspections automatically, and cuts time-to-placement from 47 days to 21 — so you spend your time on clients, not paperwork." |
| **Patricia** (HHA director) | "HomeGuarantee turns your voucher utilization rate into a HUD data exhibit — without new budget, by removing the one barrier you've never had a tool to solve: landlord refusal." |
| **James** (CFTH) | "HomeGuarantee expands what The Way Home can accomplish — with CFTH's name on the work, a revenue stream that survives any federal budget, and contractual protections for every tenant CFTH places." |
| **Marcus** (beneficiary) | "HomeGuarantee gives you a landlord who says yes — and a system that watches over your tenancy so a bad week at day 75 doesn't undo the housing you've worked for." |
| **Ray** (distressed owner) | "HomeGuarantee renovates your vacant property at no cost to you, pays guaranteed monthly rent on time, and handles all tenant management — so a property that's been costing you money becomes income again without a single trip back to Houston." |

---

#### 14c. Positioning Statements

**File:** `positioning-homeguarantee.md`

Three audience-specific positioning statements. Master statement:

> **For** private landlords with 1–20 rental units in Houston who are willing to earn reliable income but not willing to take unreimbursed financial risk — **HomeGuarantee** is the only landlord guarantee platform that combines a $20,000-per-tenancy financial guarantee with full administrative support and a managed property option, **unlike** government landlord incentive programs that cap coverage at $5,000, provide no operational support, and can run out of funding mid-year.

**Taglines by audience:**

| Audience | Tagline |
|---------|---------|
| Landlords | "Guaranteed rent. No paperwork. No surprises." |
| Landlords (Managed) | "Own the property. We'll handle the rest." |
| Distressed owners | "Your vacant property. Our renovation crew. Guaranteed monthly rent." |
| Housing authorities | "Turn your voucher utilization rate into a data exhibit." |
| Funders | "The landlord guarantee that pays for itself — and employs the people it houses." |
| General / press | "Private-market housing for Houston's hardest to house." |

---

#### 14d. Competitive Battlecards

**File:** `battlecards-homeguarantee.md`

Six sales-ready battlecards covering: prior bad HCV experience, Oregon HCLGP, Washington State LMP, "I'll just use a property manager," status quo / inaction, and housing authority procurement.

**Universal closer:** "HomeGuarantee is the first private landlord guarantee that gives landlords a real reason to say yes — and the support to make it work after they do."

---

#### 14e. Go-to-Market Plan

**File:** `gtm-plan-homeguarantee.md`

**Beachhead:** Small landlords (1–10 units) in Houston via HAA and CFTH warm introductions.

**Phase 1 primary channels (Months 1–12):** HAA speaking program, CFTH warm intros, landlord peer referral, HCAD absentee outbound, claims publicity.

**Phase 2 (Months 13–24):** Dallas-Fort Worth expansion; HHA platform fee procurement; Managed tier segment.

**Phase 3 (Months 25–48):** Phoenix, Chicago, Denver, Atlanta; insurance partner announcement; USICH case study; SOM Year 3: $6.3M ARR.

**GTM dependencies (must be true before Month 1 outreach):** CFTH partnership signed; guarantee fund capitalized ($2M); Kill-1 resolved; Landlord Liaison hired.

**Phase 1 GTM budget:** ~$121,500 (included in $27K/month operating burn).

---

#### 14f. Supply-Side Expansion Discovery

**File:** `discovery-works-expansion.md`

Full discovery plan for the Works Renovation Exchange and below-FMR supply expansion. Covers two major tracks:

1. **REIT + Renovation Exchange** — 10 brainstormed ideas, 12 assumptions (A1–A12), 5 experiments (E1–E5), 3 pre-falsified assumptions (PACE residential excluded, repair loan math broken, solar PPA confirmed viable).

2. **Below-FMR Expansion** — Distressed/abandoned properties accepting $200–350/month. Includes owner segment map (4 segments: market-rate capable, cash-poor substandard, truly distressed, tax-delinquent), 4 additional assumptions (B1–B4), 4 experiments (E6–E9), and kill switches K6–K10.

**Key structural insight:** The below-FMR framing targets a segment with negative carry — owners for whom any positive rent flips the P&L. This is not a "below-market discount" proposition; it is a "liability-to-asset conversion." This distinction is the basis of the owner outreach strategy and must be preserved in all sales materials.

---

#### 14g. Below-FMR Red-Team Analysis

**File:** `red-team-below-fmr.md`

Strategy red-team of the below-FMR framing. Five kill-assumptions identified:

1. Most delinquent owners have stopped paying carrying costs — the "you're paying $400/month" pitch may be inaccurate for them; reframe as "salvage before auction."
2. Works employment reduces SSI income via earned-income offset — Works participants should not reside in Stabilization units.
3. Houston Chapter 10 may require UPCS-equivalent habitability for all occupied dwellings — the "no inspection" advantage may be illusory.
4. Labor ceiling collapses for delinquent/no-appreciation properties from 2,305 hours to ~856 hours — scope renovation depth accordingly.
5. Tax-delinquent owners may be unreachable; 30-day auction window may be operationally impossible pre-revenue.

**Total cost to resolve all five kill-assumptions: $80 + one week.** The Stabilization tier can be validated or killed before a dollar of Works labor is committed.

---

*Sources:*
- [Coalition for the Homeless Houston — 2024 PIT Results](https://www.cfthhouston.org/2024-pit-count-results)
- [Kinder Institute — State of Housing in Harris County 2024](https://kinder.rice.edu/research/2024-state-housing-harris-county-and-houston)
- [Kinder Institute — Vouchers in Houston](https://kinder.rice.edu/urbanedge/underfunded-and-imperfect-vouchers-are-important-piece-houstons-housing-affordability)
- [Smart Cities Dive — Houston Housing First Model](https://www.smartcitiesdive.com/news/houston-housing-first-model-reduced-homelessness-how-it-works-obstacles/637728/)
- [Oregon Housing Choice Landlord Guarantee Program](https://www.oregon.gov/ohcs/housing-assistance/pages/program-housing-choice-landlord-rent-guarantee.aspx)
- [HUD — Landlords: Critical Participants in the HCV Program](https://www.huduser.gov/portal/periodicals/em/winter19/highlight1.html)
- [Empower CDC — Section 8 Voucher Discrimination in Houston](https://empowercdc.org/news-events/newsroom.html/article/2023/04/07/section-8-voucher-holders-in-houston-facing-discrimination-in-access-to-housing)
- [Kinder Institute — Houston Progress on Homelessness in Jeopardy](https://kinder.rice.edu/urbanedge/houston-progress-homelessness-jeopardy)
- [discovery-works-expansion.md](./discovery-works-expansion.md) — Supply-side expansion discovery plan (Works Renovation Exchange + below-FMR)
- [red-team-below-fmr.md](./red-team-below-fmr.md) — Strategy red-team of below-FMR Stabilization tier
