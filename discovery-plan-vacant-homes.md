# Discovery Plan: Vacant Homes × Homelessness Opportunity

**Date**: June 6, 2026  
**Product Stage**: New product / new organization  
**Discovery Question**: What scalable solution can bridge the structural gap between ~15 million vacant homes and ~771,500 homeless people in America?

---

## Step 1: Claim Verification

### "America has more vacant homes than homeless people."

**TRUE — and by a staggering margin.**

| Metric | Number | Source |
|--------|--------|--------|
| Vacant homes in the US (2024) | **15.1 million** | Census Bureau / USAFacts |
| Homeless people on a single night (Jan 2024) | **771,500** | HUD Annual PIT Count |
| **Ratio** | **~20 vacant homes per homeless person** | |

The homeless population hit a record high in 2024 — up 18% from 2023. Yet vacant homes still outnumber homeless people by a factor of 20.

### Breakdown of the 15.1M Vacant Homes

| Category | # of Units | % of Total | Available for Housing? |
|----------|-----------|------------|------------------------|
| Seasonal / vacation homes | ~4.95M | 32.8% | No — willingly held |
| For rent (on market) | ~4.0M | 26.6% | Partially — market rate |
| Under renovation | ~1.2M | 8% | Not yet |
| Investor-held, off-market | ~882K | ~6% | ⚠️ Key target |
| Abandoned / other vacant | ~6M | ~40% | ⚠️ Key target |

**The actionable gap**: Even excluding seasonal homes and market rentals, there are an estimated **6–7 million** homes that are vacant, investor-held, or abandoned — roughly **8–9 homes per homeless person**.

### Why the Market Hasn't Solved This

Five structural barriers explain the gap:

1. **Geographic mismatch** — Vacant homes cluster in low-demand Rust Belt cities (Detroit, Memphis, Cleveland). Homeless people concentrate in high-cost metros: California (187K, 24% of US total) and New York (158K, 20%).
2. **Private property rights** — Governments cannot simply requisition privately owned homes.
3. **Condition** — Many vacant homes need $20K–$100K+ in rehab before they're habitable.
4. **Financing** — Acquiring and rehabbing requires upfront capital that nonprofits rarely have.
5. **Bureaucratic friction** — Federal programs to repurpose government properties require applicants to have funding in hand before approval — a Catch-22.

---

## Step 2: Brainstormed Ideas (10 Ideas)

Generated from PM, Designer, and Engineer perspectives across the problem space.

### PM Perspective (Business / Market)
1. **Vacancy-to-Voucher Marketplace** — A two-sided platform matching motivated vacant property owners (seeking tax relief, liability reduction) with housing authorities/nonprofits who place homeless individuals via vouchers.
2. **Landlord Risk Guarantee Product** — Insurance/guarantee program that removes the primary fear stopping landlords from accepting housing voucher holders: property damage, eviction costs, income loss. B2B SaaS for housing authorities + insurance partners.
3. **Investor Vacant Home Incentive Engine** — A govtech SaaS that helps cities automatically identify investor-held vacant properties and trigger targeted tax incentive / penalty programs to unlock those units.

### Designer Perspective (User / Experience)
4. **"From Address to Address" Navigator** — A white-label mobile tool for case workers that generates a personalized housing pathway for each homeless client: matching their profile to available units, required services, and support timelines.
5. **Vacant Property Rehab Fast-Track Kit** — A turnkey kit (pre-approved modular designs + templated permits + licensed contractors) that cuts the time and cost to convert an abandoned home to transitional housing by 60%+.
6. **Dignity Dashboard for Property Owners** — A simple portal where vacant property owners can see the impact (tax savings + human stories) of converting their home — reducing psychological resistance to participation.

### Engineer Perspective (Data / Infrastructure)
7. **National Vacancy Intelligence Platform** — A data layer that aggregates tax records, USPS vacancy data, utility shutoff records, and court filings to create a real-time map of every vacant property in the US — scored by conversion feasibility.
8. **Community Land Trust Automation Stack** — Technology that automates the legal, financial, and compliance workflows for turning vacant properties into permanently affordable CLT housing — reducing lawyer/admin costs by 80%.
9. **Office-to-Housing Conversion OS** — Post-COVID, ~1B sq ft of office space sits largely empty. A platform for commercial real estate owners to navigate the permitting, design, and financing of converting office buildings into mixed-income housing.
10. **Decentralized Housing Bond Protocol** — A fintech tool that lets communities raise micro-bonds to collectively acquire and rehabilitate abandoned homes — crowdfunding permanent affordable housing, block by block.

---

## Step 3: Ideas Selected for Validation (Top 5)

The following five ideas were selected based on feasibility, scale of impact, and speed to market:

| # | Idea | Why Selected |
|---|------|-------------|
| 1 | **Vacancy-to-Voucher Marketplace** | Requires no property acquisition; works within existing market; scales via network effects |
| 2 | **Landlord Risk Guarantee Product** | Addresses the #1 stated reason landlords refuse vouchers; proven insurance model |
| 3 | **National Vacancy Intelligence Platform** | Foundational layer that enables every other intervention; high B2G revenue potential |
| 4 | **Vacant Property Rehab Fast-Track Kit** | Directly lowers the cost and time barrier to conversion; nonprofit + developer customer |
| 5 | **Investor Vacant Home Incentive Engine** | GovTech opportunity; aligns city incentives with housing goals |

---

## Step 4: Critical Assumptions

### Idea 1 — Vacancy-to-Voucher Marketplace

| # | Assumption | Category | Impact | Uncertainty | Priority |
|---|-----------|----------|--------|-------------|----------|
| 1A | Vacant property owners are motivated enough by tax/liability relief to participate voluntarily | Value | High | High | 🔴 Critical |
| 1B | Geographic mismatch can be partially solved within metro areas (not just cross-state) | Feasibility | High | Medium | 🟡 Important |
| 1C | Housing authorities will pay for a platform that accelerates voucher placement | Viability | High | High | 🔴 Critical |
| 1D | Homeless individuals placed through the platform will pass typical landlord screening with support | Usability | High | Medium | 🟡 Important |

### Idea 2 — Landlord Risk Guarantee Product

| # | Assumption | Category | Impact | Uncertainty | Priority |
|---|-----------|----------|--------|-------------|----------|
| 2A | Landlord fear of property damage and non-payment is the primary barrier (not stigma) | Value | High | Medium | 🟡 Important |
| 2B | Claims rates for formerly homeless tenants are insurable at commercially viable premiums | Viability | High | High | 🔴 Critical |
| 2C | Housing authorities will co-fund or subsidize the guarantee to expand voucher acceptance | Viability | High | Medium | 🟡 Important |

### Idea 3 — National Vacancy Intelligence Platform

| # | Assumption | Category | Impact | Uncertainty | Priority |
|---|-----------|----------|--------|-------------|----------|
| 3A | Tax records + USPS + utility data can be legally combined to reliably identify vacant properties | Feasibility | High | Medium | 🟡 Important |
| 3B | Cities/counties will pay for a SaaS tool to identify and act on vacant properties | Viability | High | Low | 🟢 Testable quickly |
| 3C | The data layer provides 10x better targeting than cities' existing manual approaches | Value | High | Medium | 🟡 Important |

### Idea 4 — Rehab Fast-Track Kit

| # | Assumption | Category | Impact | Uncertainty | Priority |
|---|-----------|----------|--------|-------------|----------|
| 4A | Permitting timeline is the primary bottleneck (not construction cost or contractor availability) | Value | High | High | 🔴 Critical |
| 4B | Pre-approved modular designs can be accepted by a majority of municipalities | Feasibility | High | High | 🔴 Critical |
| 4C | Nonprofits have capital to rehab once process friction is removed | Viability | Medium | High | 🔴 Critical |

### Idea 5 — Investor Vacant Home Incentive Engine

| # | Assumption | Category | Impact | Uncertainty | Priority |
|---|-----------|----------|--------|-------------|----------|
| 5A | Cities have political will to penalize investors holding vacant homes | Viability | High | High | 🔴 Critical |
| 5B | Automated identification + notification will create enough pressure to move properties | Value | Medium | High | 🔴 Critical |

---

## Step 5: Prioritized Assumptions (Leap-of-Faith Matrix)

**High Impact + High Uncertainty = Validate First**

| Priority | Assumption | Test Method | Timeline |
|----------|-----------|-------------|----------|
| 🔴 1 | Landlord risk guarantees are insurable at viable premiums (2B) | Interview 5 insurance actuaries + analyze existing landlord guarantee program data (e.g., NY's FHEPS) | Week 1 |
| 🔴 2 | Vacant owners will trade liability relief for housing commitments (1A) | 30-minute interviews with 10 vacant property owners in 3 cities | Week 1-2 |
| 🔴 3 | Housing authorities will pay for a vacancy marketplace (1C) | Concept test + budget interviews with 5 housing authority procurement contacts | Week 2 |
| 🟡 4 | Cities will pay for vacancy data intelligence (3B) | Show a demo scraper + mock dashboard to 3 city housing directors; ask if there's a budget line | Week 2 |
| 🟡 5 | Geographic mismatch is solvable within metro areas (1B) | Map HUD PIT data vs. Census vacancy data by zip code; look for intra-metro overlap | Week 1 (data) |
| 🟡 6 | Pre-approved designs can be accepted by municipalities (4B) | Research 5 cities with fast-track ADU or modular housing programs; identify permitting precedents | Week 2 |

---

## Step 6: Validation Experiments

### Experiment A — Insurance Viability Test (tests assumption 2B)
**Hypothesis**: If formerly homeless individuals who received wraparound support have comparable or lower claims rates to general low-income renters, then the risk guarantee product is commercially insurable.

**Method**:
- Request outcome data from 3 existing landlord guarantee programs (e.g., NY, LA, Seattle)
- Interview 3 insurance actuaries or insurtech founders
- Model a basic loss ratio at $50/unit/month premium

**Success criteria**: Claims rate < 15% and modeled loss ratio < 60% at scale  
**Effort**: Low (desk research + 3 calls)  
**Timeline**: Week 1, 3 days

---

### Experiment B — Vacant Owner Motivation Interviews (tests assumption 1A)
**Hypothesis**: At least 40% of vacant property owners would consider a 12-month housing commitment in exchange for guaranteed rent, property liability protection, and accelerated depreciation benefits.

**Method**:
- Identify vacant property owners via county tax records in 2 target metros (Detroit + Phoenix)
- Cold outreach to 50 owners; target 10 interviews
- Present 3 program concepts (tax credit, guaranteed income, impact branding); measure interest

**Success criteria**: ≥4 of 10 express "definitely interested" or "probably interested"  
**Effort**: Medium (outreach + 10 calls)  
**Timeline**: Week 1-2

---

### Experiment C — Housing Authority Willingness-to-Pay (tests assumption 1C)
**Hypothesis**: At least 2 of 5 housing authority contacts will identify a specific budget line or grant source they could use to pay for a vacancy-matching platform.

**Method**:
- Map the 10 largest housing authorities by voucher utilization rate
- Request 30-minute discovery calls framed as "research on voucher acceptance challenges"
- Present a concept and ask "If this existed, who would pay for it and from what budget?"

**Success criteria**: ≥2 contacts identify a real budget source  
**Effort**: Medium (5-7 calls)  
**Timeline**: Week 2

---

### Experiment D — Intra-Metro Vacancy Overlap Analysis (tests assumption 1B)
**Hypothesis**: In at least 3 major metros, there are sufficient vacant properties within 10 miles of high-homeless-density zip codes to house at least 25% of the local homeless population.

**Method**:
- Cross-reference HUD PIT count by zip code with Census vacancy data
- Layer with rental price data to identify units at or below voucher FMR
- Build a simple overlap map for LA, NYC, Chicago, Phoenix, Houston

**Success criteria**: ≥3 metros show meaningful intra-metro overlap  
**Effort**: Low (public data + Python/maps)  
**Timeline**: Week 1, 2 days

---

## Step 7: Discovery Timeline

| Week | Focus | Outputs |
|------|-------|---------|
| **Week 1** | Data + desk research (Experiments A + D) | Insurance viability memo; intra-metro overlap map |
| **Week 2** | Owner + authority interviews (Experiments B + C) | Interview summaries; go/no-go on top 2 ideas |
| **Week 3** | Synthesis + decision | Prioritized concept; build/pivot/kill recommendation |

### Decision Framework

| Experiment Result | Decision |
|------------------|----------|
| Exp A succeeds (insurable risk) + Exp C succeeds (HA pays) | → Build **Landlord Risk Guarantee** as core product; layer marketplace on top |
| Exp A fails (uninsurable) + Exp B succeeds (owners motivated) | → Pivot to **tax incentive / regulatory** approach with cities |
| Exp B fails (owners won't participate) | → Shift focus to **abandoned/government** properties only; different acquisition strategy |
| Exp D fails (geographic mismatch unsolvable) | → De-prioritize marketplace; focus on **data intelligence platform** for cities (Idea 3) |

---

## Recommended First Bet: The "Landlord Guarantee + Matching" Stack

Based on the research, the highest-leverage entry point is:

> **A risk-guarantee product for landlords, layered with a vacancy-matching platform for housing authorities.**

**Why**: The #1 reason vouchers go unused is landlord refusal — not funding, not homeless motivation. NYC's Family Homelessness and Eviction Prevention Supplement (FHEPS) has demonstrated that financial guarantees meaningfully expand acceptance. A private, scalable version of this — backed by data on formerly-homeless tenant outcomes — could unlock tens of thousands of existing vacant units without acquiring or building a single new home.

**GTM**: Start with 1 city housing authority as a design partner. Offer a free pilot for 50 units. Measure voucher utilization rate improvement. Use outcome data to raise a first fund.

**Customers**: Housing authorities (B2G) + philanthropy + HUD-funded programs  
**Revenue model**: Per-unit monthly fee to housing authority or HMIS system; claim underwriting via insurance partner  
**Moat**: Outcome data on formerly-homeless tenant performance — proprietary dataset that lowers insurance premiums over time

---

## Next Steps

- [ ] Run Experiment D (data analysis — 2 days, no cost)
- [ ] Run Experiment A (insurance viability — 3 calls)
- [ ] Design a PRD for the Landlord Guarantee Product
- [ ] Draft a customer interview script for housing authority contacts
- [ ] Identify 3 cities with highest voucher utilization gap as pilot targets

---

*Sources*:
- [USAFacts — How many vacant homes are there in the US?](https://usafacts.org/articles/how-many-vacant-homes-are-there-in-the-us/)
- [HUD 2024 Point-in-Time Count Report](https://www.hudexchange.info/news/hud-releases-2024-ahar-report/)
- [Eye On Housing — Homelessness Increased to a Record-High in 2024](https://eyeonhousing.org/2025/12/homelessness-increased-to-a-record-high-in-2024/)
- [Bipartisan Policy Center — Homelessness at a Record High](https://bipartisanpolicy.org/article/homelessness-at-a-record-high-key-takeaways-from-the-2024-pit-count/)
- [National Mortgage Professional — Investors Hold Most Empty Houses](https://nationalmortgageprofessional.com/news/investors-hold-most-empty-houses)
- [UCSF — Vacancies Are a Red Herring](https://homelessness.ucsf.edu/blog/vacancies-are-red-herring)
- [GGWash — Why Vacant Homes Won't Solve Our Housing Shortage](https://ggwash.org/view/73234/vacant-houses-wont-solve-our-housing-crisis)
- [Government Executive — Federal Vacant Properties and Homelessness](https://www.govexec.com/management/2023/07/federal-government-has-more-8000-vacant-properties-why-arent-they-being-used-house-homeless/388360/)
