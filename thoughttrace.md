# Thoughttrace
*A running log of every prompt and response in this workspace.*

---

## Entry 13 — June 7, 2026
**Session:** Notion Project Setup (Session 4, post-compaction continuation)

### Prompt
Use the Notion MCP to create this project in Notion & make it public, set up the trackers, split the real-world and tech tasks, and track them separately. Include all documentation in the notion project. Update the site to add link to the notion project.

### What was done

**Notion Project Structure:**

Hub page: https://app.notion.com/p/378f80653ecc81439060cfffd0d3e48d
Documentation index: https://app.notion.com/p/378f80653ecc810098facf941931b60a

**Real-World Tasks Database** (ID: 11914e63-bed4-4c6b-900a-5c6bf6e35ca3):
- 24 tasks populated across Foundation, Pilot, Scale, and Stabilization phases
- Categories: Partnerships, Operations, Fundraising, Legal, Hiring, Marketing, Community
- Properties: Status, Category, Phase, Priority, Owner, Notes
- Views: By Phase (board), By Priority (board), By Status (board)

**Tech Tasks Database** (ID: 6549211f-b6f6-42d9-889e-d2935b71f7ce):
- 22 tasks populated across MVP, Phase 2, and Phase 2.5b
- Categories: Landlord Portal, Case Manager Portal, Claims System, Payments, Admin & Ops, Infrastructure, Mobile, HA SaaS, Data Pipeline
- Properties: Status, Category, Phase, Priority, Effort, Notes
- Views: By Phase (board), By Priority (board), By Status (board)

**Documentation pages created (10 sub-pages):**
1. PRD v1.6 — HomeGuarantee Product Requirements
2. Stakeholder Personas — All 6 (v1.6)
3. Market Sizing — TAM/SAM/SOM
4. Competitor Analysis — Competitive Landscape
5. GTM Plan — Houston to National Expansion
6. CFTH Partnership Proposal
7. Works Program Brief — Employment + Renovation Exchange
8. Pre-Mortem Reports — v1 + v2
9. Red Team Reports — Business Case + Below-FMR + Prototype-First
10. Positioning, Value Props & Battlecards

**Site updates:**
- docs/assets/js/main.js: Added "Notion Project Hub" link in sidebar Downloads section
- docs/index.html: Added "View Project in Notion" CTA button in hero section

**Key debugging learned:**
- notion-create-view requires BOTH data_source_id AND database_id (not just one)
- Valid view types: table, board, list, calendar, timeline, gallery, form, chart, map, dashboard
- notion-create-pages for non-database pages uses `properties: {title: "..."}` + `content: "..."`
- VIEW configure string must be single-line: GROUP BY "PropertyName" (no \n separators)

---

## Entry 1 — June 6, 2026

### Prompt
```
/pm-product-discovery:discover

America has more vacant homes than homeless people. Verify this statement and then build upon it to identify the opportunity.
```

### Response

**Claim Verified ✓ — and it's worse than the headline suggests**

15.1 million vacant homes vs. 771,500 homeless people — roughly 20 vacant homes per homeless person. The statement is true, and the ratio is staggering.

But the headline number is misleading in both directions:
- **Inflated**: ~5M are seasonal vacation homes their owners willingly hold. They're not "available."
- **Still massive**: Even after excluding those, there are ~6–7M abandoned/investor-held/off-market units — still 8–9 per homeless person.

The reason this gap persists isn't a shortage of housing supply. It's five structural failures: geographic mismatch (vacants in Detroit, homeless in LA), private property rights, rehab costs, capital gaps, and bureaucratic Catch-22s in federal programs.

**The Highest-Leverage Opportunity**

After running the full discovery cycle, the clearest entry point is:

> A landlord risk guarantee product + vacancy-matching platform for housing authorities.

The #1 reason housing vouchers go unused isn't funding — it's landlord refusal. A private, data-driven risk guarantee (backed by outcome data on formerly-homeless tenant performance) could unlock tens of thousands of existing vacant units without acquiring or building a single new home.

GTM: one city housing authority as a design partner → 50-unit free pilot → outcome data → raise a fund.

The discovery plan covers 10 brainstormed ideas, 5 prioritized for validation, 14 critical assumptions ranked by impact × uncertainty, and 4 concrete experiments runnable in 3 weeks — starting with two that cost nothing (data analysis + 3 phone calls).

Full discovery plan saved to: `discovery-plan-vacant-homes.md`

---

## Entry 15 — June 6, 2026

### Prompt
```
/pm-execution:strategy-red-team — make a pass through the entire business case and identify any corner cases or critical assumptions that have not been addressed. Then create the opportunity solution tree for all ideas accepted in the PRD
```

### Response

Final comprehensive red-team across the entire business case surfaced 5 kill-assumptions not previously addressed, plus 9 corner cases.

Top 5 kill-assumptions:
Kill-1 (highest): The guarantee product may legally be insurance under Texas Insurance Code — offering a financial guarantee for a monthly fee may require a TDI certificate of authority. Oregon programs operate as state-administered or licensed intermediaries. This was flagged for "insurance counsel review" but never resolved. $500 legal consult, binary answer this week.

Kill-2: Guarantee fund sized for expected value, not 95th percentile. Fat-tail claims (a cluster of $15K+ payouts) could deplete the fund before the depletion trigger fires. Oregon loss distribution histogram (free, 1-week) sets the correct fund size.

Kill-3: HOA pre-clearance service may have no legal teeth in Texas. Source-of-income is NOT a protected class under the FHA. SB 267 makes voucher discrimination legal. The legal threat to HOAs may be bluster. Same $500 legal consult as Kill-1.

Kill-4: 18-month enrollment duration is unvalidated and every financial model depends on it. If median tenancy is 10-12 months, the $1,050/unit/year revenue assumption is wrong. CFTH exit data request (free, 1-2 weeks) resolves this.

Kill-5: No founding team has been named. Every pre-mortem flagged this as an elephant. The plan requires simultaneous government relations, insurance/fintech expertise, and nonprofit fundraising — competencies that rarely coexist in one team. Writing two sentences about who is running this and what qualifies them is the first action.

Corner cases not previously addressed: claims clustering risk; interest income from guarantee fund; HHA payment float risk; Works employee conflict-of-interest protocol; eviction coordination gap; "graduation" metric for successful tenancies; HUD nationalization risk; CFTH board succession clause.

What's well-reasoned: problem size, CFTH partnership structure, Phase 1 manual-first sequencing, Works differentiation, fund governance.

OST built as interactive visualization — 9 opportunities mapped to solutions by phase (1/2/2.5/3) and experiments. All 9 opportunities tap to reveal their solution and experiment sets.

File saved: red-team-final-business-case.md

---

## Entry 14 — June 6, 2026

### Prompt
```
/pm-execution:red-team-prd — The SaaS platform can be prototyped right away, real world tasks take time and physical effort. We should prioritize the prototype
```

### Response

Red-teamed the claim that building the SaaS platform prototype should be prioritized ahead of operational setup.

Four kill-assumptions identified:

Kill-1 (highest): The platform has no users without the operational layer. The matching platform matches nobody to nobody without landlords enrolled (requires guarantee fund + trust) and tenants in pipeline (requires CFTH + HMIS). A marketplace with no buyers and no sellers is a wireframe with a database. Cheapest test: Figma prototype shown to 5 landlords — does it move their decision? Predict no.

Kill-2: Building before workflow discovery commits you to the wrong product. Pre-mortem v2 explicitly flagged case manager workflow shadowing (Month 1) as a prerequisite before Phase 2 scoping. If DeShawn lives in HMIS and needs a browser extension (not a standalone app), anything built before shadowing is scrap. Cheapest test: 3 hours shadowing one case manager before writing an engineering spec.

Kill-3: A Figma prototype does 90% of the communication job at 10% of the cost. CFTH's James and philanthropic funders are evaluating trust and problem-fit, not technical execution. They won't ask for a working app before signing. Cheapest test: schedule the CFTH meeting with Figma + partnership proposal and see if they ask for software.

Kill-4: Every launch-blocking Tiger in both pre-mortems was relational/financial/legal — zero were technical. Investing engineering time ahead of relationship-building solves the wrong problem fast.

What's well-reasoned: the user is right that parallel workstreams make sense — lightweight Figma prototype or no-code tool while CFTH negotiation grinds. The claim "real-world tasks take time" is exactly right — that's a reason to start them immediately, not later. The recommended sequencing: CFTH + fund + legal NOW; Figma prototype in parallel (2 days); workflow shadowing Month 1; engineering spec written AFTER shadowing and CFTH signed.

File saved: red-team-prototype-first.md

---

## Entry 13 — June 6, 2026

### Prompt
```
do both. Also add personas and market sizing to the PRD
```

### Response

Updated PRD to v1.3 and wrote HomeGuarantee Works concept brief.

PRD v1.3 changes: Section 3 (User Segments) expanded into full persona summaries for all 5 stakeholders — Maria, DeShawn, Patricia, James, Marcus — with JTBDs, core fears, key insights, what HomeGuarantee must deliver, and north star metrics. Section 8b (Market Opportunity) added with TAM/SAM/SOM table across Houston/Texas/US/Canada and methodology notes. Phase 2.5 (HomeGuarantee Managed) added to Section 6 feature spec with full feature table, Works staffing model at 500 units (~12 direct employees), prerequisites, and HOA pre-clearance/trades network/badge details. Path to sustainability updated to include Works self-funding milestone (covered by Managed revenue at ~300 units, Month 18).

HomeGuarantee Works brief: 2-page funder document covering the circular economy model, 4 workforce tracks (Condition Reporter, Maintenance Coordinator, Neighborhood Ambassador, Trades Contractor), employment terms ($18-22/hr, benefits, case management support), funding sources (WIOA, TWC, CRA, HUD HAG, philanthropy), self-funding path at 300+ managed units, and ask ($750K bridge to earned revenue). Written for a program officer or impact investor, not a tech audience.

Files: houston-discovery-and-prd.md (v1.3), homeguarantee-works-brief.md

---

## Entry 12 — June 6, 2026

### Prompt
```
/pm-product-discovery:discover — there's punitive risk for the landlord... Brainstorm creative ways to mitigate these, and make it actually worthwhile the landlords' time... a property management layer could help them and this layer could work @ scale. It could employ folks from the homeless pool itself based on skills as well
```

### Response

Ran full discovery on extending HomeGuarantee to cover non-financial landlord risks. Two unaddressed risk categories: (1) punitive/operational risk — stress of managing problems even when financially covered; (2) social acceptance risk — neighbor and HOA complaints, reputational exposure.

Brainstormed 10 ideas across PM/Designer/Engineer perspectives. Top 5 selected:
- HomeGuarantee Managed: full-service tier ($175-225/unit/month), landlord only touches the rent deposit
- HomeGuarantee Works: circular workforce pipeline employing formerly homeless individuals with construction/admin skills as community liaisons, trades workers, condition reporters
- Neighborhood Ambassador Program: proactive pre-move-in neighbor introduction by a named HomeGuarantee liaison — converts acceptance risk from passive rumor to managed relationship
- HomeGuarantee Trades Network: vetted 24-hour contractor network, integrated into the platform, staffed partly from the workforce pipeline
- HOA Pre-Clearance + Complaint Handling: legal layer that handles HOA complaints on the landlord's behalf (TX Property Code §202.004 may override HOA rules via federal fair housing law)

Key insight: the five ideas form a circular flywheel. Housing placements → formerly homeless individuals with skills → hired into HomeGuarantee Works → staff the managed layer → attracts absentee/HOA landlords → enables more placements.

Critical experiments: legal check on TX property management licensing (week 1); landlord WTP interview at 3 price points (week 2); workforce development org calls on training timeline (week 2); ambassador effectiveness A/B during pilot (month 3-5).

File saved: discovery-landlord-managed-layer.md

---

## Entry 11 — June 6, 2026

### Prompt
```
/pm-market-research:user-personas — Identify all stakeholders, create their personas, their journey maps and north star metrics for what success would look like from their viewpoint.
```

### Response

Built five full stakeholder personas with JTBDs, pain points, desired gains, unexpected insights, journey maps, and north star metrics.

Maria (landlord): Not ideologically opposed — actuarially risk-averse. The guarantee reprices her calculation. North star: claim paid in 30 days → she recruits 3 more landlords.

DeShawn (case manager): Wants to feel like he's winning, not just to be efficient. The UI must celebrate his placement victories or he won't adopt. North star: 7 placements/month (was 3), 18-day avg time-to-keys.

Patricia (housing authority director): Not buying a product — buying political cover. Her north star is the HUD annual performance report showing 93% utilization. Design the dashboard around HUD's metrics, not ours.

James (CFTH Executive Director): Motivated by legacy, not revenue share. "The credit for what gets built belongs to both organizations" is the most important line in the proposal. North star: NYT headline with The Way Home in it.

Marcus (formerly homeless): The critical moment is days 60–120, not move-in day. Every prior failure happened in that window. Tenancy health alerts are the difference between 12-month retention and a return to shelter. North star: "Month 13. Paid rent. Know my neighbor. Not thinking about tomorrow."

Key tension identified: Marcus needs dignity (no background check gauntlet); Patricia needs data (aggregate, anonymized); Maria needs financial certainty; DeShawn needs speed; James needs credit. HomeGuarantee's north star — placements per month — is the single metric that moves all five forward simultaneously.

File saved: stakeholder-personas.md

---

## Entry 10 — June 6, 2026

### Prompt
```
/pm-market-research:market-sizing — Scope out the market size across Houston, Texas, The US and Canada
```

### Response

Built TAM/SAM/SOM for HomeGuarantee across four geographies using both top-down (homeless population × coordinated entry rate × guarantee-need rate) and bottom-up (service system placements × HomeGuarantee's role × tenure) methods. Both converge within 10-20% of each other.

Key numbers:
- Houston TAM: $1.6-2.5M/year | SOM Year 3: $1.575M (1,500 units)
- Texas TAM: $5.5-10M/year | SOM Year 3: $2.625M (2,500 units)
- US TAM: $105-120M/year | SAM: $63-70M | SOM Year 3: $6.3M (6,000 units across 5 cities)
- Canada TAM: ~$7.5M USD/year (speculative, 3-5 year play) — no HCV equivalent; provincial fragmentation requires product adaptation
- US + Canada total TAM: ~$115-130M/year

Most uncertain assumption: the "30% of coordinated entry placements need a guarantee" — if it's 20%, US TAM drops to ~$70M; if 40%, rises to ~$140M.

Key finding: At 20,000 active units (Year 5), HomeGuarantee would be the largest private-market landlord guarantee program in North American history and still have captured less than 30% of the US SAM.

File saved: market-sizing-homeguarantee.md

---

## Entry 9 — June 6, 2026

### Prompt
```
make the updates to the PRD / proposal
```

### Response

Applied all pre-mortem v2 fixes. PRD is now v1.2, proposal updated in place.

PRD changes: pre-launch gate collapsed to 2 truly blocking items (CFTH agreement + minimum capital), rest moved to "in parallel by Month 2"; CoC sub-recipient conflict resolved — HomeGuarantee applies as independent grant applicant, not CFTH sub-recipient, with note on CRA compliance strings; "pause new enrollments" defined operationally (stops at stage 1 and 3, never retroactive to in-progress placements); rollback plan added as a contractual commitment with succession protocol (CFTH first, HHA/HCHA second, 60-day notice, residual fund to CFTH); Phase 1 manual intake form specified with required structured fields mirroring future HMIS integration; version bumped to 1.2.

Proposal changes: revenue share scoped explicitly to Houston with language that it's not diluted by national expansion; mutual NDA added before the 30-day design sprint (protects both parties); steering committee upgraded with three decision categories (operational = HomeGuarantee unilateral; program = joint approval; strategic = unanimous consent); exit notice extended from 60 to 90 days to protect active tenancies; PRD reference updated to v1.2.

---

## Entry 8 — June 6, 2026

### Prompt
```
/pm-execution:pre-mortem the updated prd
```

### Response

Ran second pre-mortem on PRD v1.1. Focused on risks introduced by the mitigations themselves and what remained unresolved.

Two new launch-blockers: (1) the pre-launch prerequisite list has five parallel dependencies on different counterparties — likely to deadlock; fix is collapsing to a minimum viable gate of two truly blocking items; (2) the CoC sub-recipient model conflicts with the revenue share arrangement — can't be both a HUD pass-through and an equity-like partner simultaneously.

Three new fast-follows: 15% CFTH revenue share needs geographic scope limitation before it becomes a global precedent; "pause new enrollments" trigger is operationally undefined and could harm vulnerable tenants mid-placement; manual Phase 1 data schema is incompatible with the actuarial dataset needed in Phase 3.

Four new elephants: HomeGuarantee is teaching CFTH how to replace it (no exclusivity, no moat in Houston after Year 2); E3 racial equity issue from v1.0 remains completely unaddressed and is now more visible because of CFTH co-branding; founding team competency gaps now have named items attached (insurance counsel, CFTH negotiator, grant writer) with no named people; rollback plan is still undefined — the product makes financial promises to landlords with no documented plan if HomeGuarantee ceases operations.

Net assessment: v1.1 is materially better. No new existential risks. Five concrete actions recommended for the week ahead.

File saved: pre-mortem-v2-homeguarantee.md

---

## Entry 7 — June 6, 2026

### Prompt
```
Do both - the CFTH partnersheet needs to be a proposal and not a term sheet
```

### Response

Updated the PRD to v1.1 with three pre-mortem mitigations: (1) revenue model restructured — HHA removed as Phase 1 revenue source, replaced with phased funding table (CoC grants → HOME funds → CRA partners → HHA in Phase 3); (2) CFTH partnership elevated to non-negotiable pre-launch prerequisite with a reference to the proposal; (3) Fund governance section (8a) added with depletion triggers, claims authority levels, audit requirements, and insurance transition plan. Risk table expanded with severity ratings (launch-blocking / fast-follow / track / managed).

Drafted CFTH partnership proposal — written as a proposal to CFTH leadership framing HomeGuarantee as a joint venture. Covers: what each party brings, five explicit upside items for CFTH (15% revenue share, Advisory Board seat, co-branding, data ownership, joint grant applications), what CFTH needs to contribute, proposed next steps (60-min meeting → 30-day design sprint → partnership agreement → joint funder approach). Tone is deliberately humble — acknowledges the product doesn't work without them.

Files: houston-discovery-and-prd.md (v1.1), cfth-partnership-proposal.md

---

## Entry 6 — June 6, 2026

### Prompt
```
/pm-execution:pre-mortem the PRD and identify key failure points.
```

### Response

Ran pre-mortem on the HomeGuarantee PRD using the Tigers/Paper Tigers/Elephants framework. Found 3 launch-blocking Tigers, 3 fast-follow Tigers, 2 track Tigers, 4 Paper Tigers, and 5 Elephants.

The three launch-blocking Tigers: (1) guarantee fund depletes before scale — no insurance backstop and no validated claims rate; (2) housing authority procurement never converts — HHA is in austerity, treating them as Phase 1 revenue is a fatal assumption; (3) HMIS data sharing is blocked — 6–12 month legal process that needs to start on Day 1.

The five Elephants: (1) CFTH may see HomeGuarantee as competition, not a partner — the whole product fails without them; (2) HomeGuarantee controls the product but not case management quality, which actually drives retention; (3) placing Black Houstonians into affordable (low-opportunity) neighborhoods replicates segregation; (4) founding team likely lacks insurance, government relations, and housing services expertise simultaneously; (5) the $2M philanthropic fund raise is harder and slower than the PRD assumes.

Three recommended PRD changes: restructure revenue model away from HHA in Phase 1; formalize CFTH partnership before anything else; add fund stewardship/governance section.

File saved: pre-mortem-homeguarantee.md

---

## Entry 5 — June 6, 2026

### Prompt
```
Houston as a pilot works. /discover the houston homelessness root causes and draft a PRD for a landlord guarantee platform
```

### Response

Ran Houston-focused discovery and drafted the full PRD for HomeGuarantee.

**Discovery — Houston root causes:**
- 50% economic crisis (job loss / income collapse)
- 28% housing-related (eviction, unaffordable rent)
- 56% co-occurring mental health, 46% substance use
- Black residents 56% of homeless vs. 20% of general population
- 3,280 remaining — the hardest-to-house chronic population

**The actual bottleneck:** Houston has 18,900 active HCV vouchers but 1 in 4 expire unused because landlords refuse them. Texas SB 267 (2015) explicitly legalizes this. Administrative HUD burden + damage fear + screening barriers compound it.

**PRD — HomeGuarantee:**
- Financial guarantee up to $20K/tenancy (damage, unpaid rent, vacancy loss)
- Matching platform: case managers ↔ landlords ↔ HMIS integration
- Landlord experience layer: direct deposit rent on day 1, single liaison handles all HUD paperwork
- Revenue: $75–100/unit/month from housing authority; philanthropic $2M seed guarantee fund
- Phase 1 (50 units, manual), Phase 2 (200 units, SaaS), Phase 3 (500+ units, insurance partnership)
- North Star: placements per month; key threshold: ≤12% claims rate for insurability

File saved: houston-discovery-and-prd.md

---

## Entry 4 — June 6, 2026

### Prompt
```
What is the impact of solving this for NY / LA vs Houston or Chicago?
```

### Response

NY+LA is the bigger prize by 10× — 211K people, $5.6B/yr in savings if solved, 27% of all US homelessness. But at 1.4× vacancy ratio it's not a product problem yet — it's a supply and policy problem. A landlord guarantee platform can't move the needle in cities where there aren't enough units to absorb demand.

Houston+Chicago is where a product can win. 32× vacancy surplus in Houston, 17% affordability gap closeable with $150–200/unit/month subsidy, existing coalition infrastructure. These are product-solvable problems.

Strategic logic: Houston is the proof of concept, NY/LA is the exit. Outcome data from Houston generates the claims history needed to make the insurance model viable. A product that finishes Houston's job (3,280 remaining) has a story that unlocks federal grants, philanthropic capital, and every other city's interest. NYC spending $81,700/unsheltered person/year creates massive pull for a proven solution.

Key risk flagged: Houston's progress is in jeopardy due to federal funding cuts (Rice/Kinder Institute, 2024) — which is actually an opening for a private-market mechanism that doesn't depend on federal grants.

---

## Entry 3 — June 6, 2026

### Prompt
```
Let's start with Exp D
```

### Response

Ran Experiment D: Intra-Metro Vacancy × Homelessness Overlap Analysis across 8 major metros using 2024 HUD PIT count data and Census ACS vacancy estimates.

**Hypothesis**: In at least 3 major metros, there are sufficient vacant properties within the metro to house at least 25% of the local homeless population.

**Result: HYPOTHESIS SUPPORTED** — 5 metros PASS, 1 PARTIAL, 2 FAIL.

| Metro | Ratio (Vacant/Homeless) | Verdict |
|---|---|---|
| Houston | 32.3× | PASS ✓ |
| Phoenix | 10.5× | PASS ✓ |
| San Francisco | 10.4× | PASS ✓ |
| Chicago | 7.6× | PASS ✓ |
| Denver | 4.8× | PASS ✓ |
| Seattle | 2.2× | PARTIAL ⚠ |
| Los Angeles | 1.4× | FAIL ✗ |
| New York City | 1.4× | FAIL ✗ |

**Critical finding**: The numerical gap is solvable in 5 of 8 metros — but affordability is a universal barrier. In every single metro, market asking rents exceed what HUD Fair Market Rents (vouchers) can cover, by 17% (Houston) to 41% (New York). Vacancy without affordability intervention = no housing.

Files saved: exp-d-vacancy-homeless-analysis.png, exp-d-results.csv

---

## Entry 2 — June 6, 2026

### Prompt
```
Write the prompt and the response to a doc called thoughttrace and do so for all future interactions. commit it to memory.
```

### Response

Created this file (`thoughttrace.md`) with the full conversation log. Saved a memory to persist this behavior across all future sessions in this workspace.

---

## Entry 5 — June 7, 2026

### Prompt
```
Create a financial projection for this platform from day 0 to 5 years into the future.
```

### Response

Created `HomeGuarantee_Financial_Projection.xlsx` — a 4-sheet professional financial model, zero formula errors.

**Sheet 1 — Assumptions:** All model inputs in blue with sources. Key inputs: $87.50/unit/mo basic fee, $200/unit/mo managed fee, $87.50/unit/mo HA platform fee, 12% annual claims rate, $6K avg claim, 15% annual churn, $2M guarantee fund, $750K operating bridge. Unit count targets by year, headcount ramp, and all 5 kill switches listed with status.

**Sheet 2 — Annual P&L (Pre-Launch → Year 5):**

| Period | Revenue | Gross Profit | EBITDA | EBITDA Margin |
|---|---|---|---|---|
| Pre-Launch (H2 2026) | $0 | $0 | — | n/m |
| Year 1 (2027) | $260K | $98K | ($226K) | n/m |
| Year 2 (2028) | $1.54M | $1.36M | $510K | 33% |
| Year 3 (2029) | $5.66M | $4.81M | $3.19M | 56% |
| Year 4 (2030) | $12.29M | $10.11M | $7.26M | 59% |
| Year 5 (2031) | $21.90M | $17.47M | $12.72M | 58% |

Revenue streams: Basic platform fees, Managed tier fees (Works-enabled), Housing Authority platform fees. COGS: claims paid + managed direct labor costs.

**Sheet 3 — Monthly Detail (M1–M24):** Unit-level ramp, monthly revenue, COGS, EBITDA, operating cash balance (from $750K bridge), guarantee fund balance, and key event annotations (CFTH signed M1, fee waiver ends M4, HAA speaking M2, HHA data meeting M12, HHA fee begins M15, cash-flow positive M17–19, Managed launch M18, DFW M20).

**Sheet 4 — Unit Economics:** CAC $500 (Phase 1) → $350 (Phase 2), LTV $2,100, LTV:CAC 4.2× → 6.0×, CAC payback 6 months, break-even at 982 basic units (reached M17–19). Revenue stack analysis: basic $87.50 → basic+HA $175 → managed+HA $287.50 per unit per month.

**Key model finding:** Cash-flow positive M17–19 (consistent with PRD "Month 18 self-funding" claim). Guarantee fund: $2M → $315K by Y5 (insurance reinsurance takes over in Y4). 5-year cumulative EBITDA: ~$23.5M.

---

## Entry 4 — June 7, 2026

### Prompt
```
Add the kill switches and the OST to the PRD if not already there. Then Create the GTM plan, the positioning statements, competitor analysis, value proposition and competitive battlecards for the PRD.
```

### Response

Confirmed kill switches (§12) and OST (§13) already in PRD v1.4. Created five new deliverable files and updated PRD to v1.5 with Section 14 (Go-to-Market Appendix):

**Files created:**

1. `competitor-analysis-homeguarantee.md` — Full competitive analysis of 5 competitors: Oregon HCLGP, Washington State LMP, HUD MTW programs, TheGuarantors, and city/nonprofit RMFs. Key finding: HomeGuarantee's $20K guarantee is 4× the market maximum; no competitor has a platform or operations layer. Primary threat: HUD evaluation report (2026) could trigger a federal program that commoditizes the baseline guarantee. Mitigation: hit 500 units before the report.

2. `value-proposition-homeguarantee.md` — JTBD-based value propositions for all 5 stakeholders (Maria, DeShawn, Patricia, James, Marcus). One-sentence value prop per persona. Core insight: one north star metric (placements/month) advances all five simultaneously.

3. `positioning-homeguarantee.md` — Three-audience positioning (landlords, housing authorities, funders) with master positioning statement, audience-specific messaging, objection/response tables, taglines, and brand voice guidelines per audience.

4. `battlecards-homeguarantee.md` — 6 sales-ready battlecards: vs. prior HCV experience, vs. Oregon HCLGP (4× coverage gap), vs. Washington LMP (legal waiver clause), vs. property managers (different product), vs. status quo/inaction, and housing authority procurement card.

5. `gtm-plan-homeguarantee.md` — Full GTM plan: Houston beachhead (HAA + CFTH + peer referral + HCAD targeted outbound + claims publicity), Phase 2 DFW expansion + HHA fee, Phase 3 national (Phoenix, Chicago, Denver, Atlanta). Budget: ~$121,500 Phase 1. GTM dependencies: CFTH signed, fund capitalized, Kill-1 resolved, Liaison hired.

**PRD updated to v1.5** with Section 14 (Go-to-Market Appendix) summarizing all five documents and cross-referencing files.

---

## Entry 3 — June 7, 2026 (Session 2 continuation — context compacted)

### Context note
This session resumed from a compacted context summary covering the full prior session. The PRD was at v1.4 with Sections 12 (Kill Switches) and 13 (Opportunity Solution Tree) having been added at the end of Session 1. No new work was done in this session before the compaction request below.

### Prompt
```
compact this conversation
```

### Response

Produced a compact context summary for continuation in the next session. Current state:

**PRD status: v1.4** — all prior work complete including kill switches (Section 12) and OST (Section 13).

**Files in workspace:**
- `houston-discovery-and-prd.md` — PRD v1.4 (13 sections)
- `cfth-partnership-proposal.md` — CFTH partnership proposal
- `market-sizing-homeguarantee.md` — TAM/SAM/SOM across Houston/TX/US/Canada
- `stakeholder-personas.md` — 5 full personas with journey maps
- `homeguarantee-works-brief.md` — Works funder brief ($750K ask)
- `red-team-final-business-case.md` — 5 kill-assumptions + 9 corner cases
- `red-team-prototype-first.md` — Prototype sequencing red-team
- `discovery-landlord-managed-layer.md` — Non-financial risk mitigation ideas
- `thoughttrace.md` — This file

**Pending deliverables (next session):**
1. GTM plan (Houston pilot → Texas → US)
2. Positioning statements (for landlords, housing authorities, funders)
3. Competitor analysis (Oregon, Seattle, HUD programs, adjacent)
4. Value proposition (JTBD-based, per stakeholder)
5. Competitive battlecards (sales-ready, for landlord and HA conversations)

---

## Entry 6 — June 7, 2026 (Session 3)

### Prompt
```
/pm-execution:red-team-prd

Prioritize homeless targets with pre-existing skills relevant to the HomeGuarantee Works workstream.
```

### Response

Red-teamed the assumption that Works intake should be gated on pre-existing skills relevant to HomeGuarantee's property management operations.

**Four kill-assumptions identified:**

**Kill-1 (highest): Skills-based intake directly conflicts with HUD coordinated entry.** CFTH administers coordinated entry using VI-SPDAT scoring — highest vulnerability gets housed first. HomeGuarantee cannot cherry-pick the most employable clients without violating the coordinated entry agreement that gives it access to CFTH's pipeline. HUD's 2017 notice CPD-17-01 explicitly prohibits "cream-skimming" (selecting easier-to-serve clients over higher-need ones). If HomeGuarantee violates this, CFTH terminates the partnership — and with it, access to 18,900 active HCV holders and 100+ partner organizations. Cheapest test: 1-hour call with CFTH's James to confirm the constraints.

**Kill-2: The skill set required for Works is learnable in weeks, not years.** Property management tasks (inspections, basic maintenance, tenant check-ins, unit turnovers) don't require specialized trade experience. Assuming "pre-existing skills" are necessary sets the bar artificially high and excludes most of the target population. Test: ask 3 current Works-adjacent programs (e.g., Shelbourne, Quadel) what their actual onboarding timeline is.

**Kill-3: Selecting for skills selects against the most vulnerable — the opposite of the mission.** Homeless individuals who have maintained employment and skills are typically less homeless (shorter duration, less trauma). The ones who need housing most — chronically homeless, severe mental illness, addiction history — are least likely to have maintained formal employment skills. Intake by skill = inverse care law applied to housing. No test needed; this is definitional.

**Kill-4: Skills inventory doesn't exist at intake.** HMIS records track housing history, service utilization, and vulnerability — not vocational skills. HomeGuarantee would need to build a skills assessment tool from scratch and integrate it into coordinated entry. This is months of engineering and negotiation. Cheapest test: ask CFTH whether HMIS has any vocational fields; predict the answer is no.

**Recommended resolution:** Screen for readiness (housing stability, case manager clearance), not skills. Offer training to all Works enrollees. Let skills inform task *assignment within* the Works cohort — not gate *entry into* it. This preserves CFTH access, serves the highest-need population, and is legally defensible.

File referenced: red-team saved to session; not written as standalone file (was an in-session red-team, not a PRD artifact).

---

## Entry 7 — June 7, 2026 (Session 3)

### Prompt
```
/pm-product-discovery:discover

Two tangents:
1. Create a REIT to raise funds and buy properties to contribute to the housing pool
2. Create a renovation-refurbishment program where owners who can't afford to bring an abandoned home up to spec can get the home re-done via the Works program in exchange for reduced rental obligation for the next few years and contribute the property to the housing pool. This can extend to value-adds like free solar on the roof in exchange for the same — this can also reduce utilities burden for the tenant.
```

### Response

Full discovery cycle completed for two supply-side expansion ideas: HomeGuarantee Impact REIT and Works Renovation Exchange (with solar PPA extension).

**Core discovery question:** Can HomeGuarantee expand the housing pool supply — not just unlock willing landlords, but create new units where none were accessible before?

**10 ideas brainstormed** across PM/Designer/Engineer perspectives. 5 carried forward for stress-testing: Works Renovation Exchange, Solar-for-Rent (PPA), Landlord Repair Loan, Impact REIT, HCAD Property Scoring Engine.

**3 assumptions pre-falsified by analysis (no experiments needed):**
- Texas PACE financing **excludes residential 1–4 units** (commercial/5+ only). Solar must use PPA, not PACE.
- Repair loan repayable via $87.50/month platform fee: **non-viable**. $10K loan = 114 months to repay. Loan must be sized ≤$3,150 (cosmetic-only), making it a grant not a loan.
- Tenant utility savings from solar: **confirmed meaningful** — $105–140/month savings on $1,241/month FMR budget (8–11%).

**Key economic constraint identified for Renovation Exchange:** Owner forgoes $209/month premium for 36 months = $7,524. At Works wages ($16.83/hr), that = 447 labor hours ≈ 11 weeks of one worker's time. Limits scope to cosmetic renovation (paint, flooring, fixtures). Structural/mechanical work breaks the economics.

**5 validation experiments designed:**
1. Owner Offer Test (A1) — $2,000 letter campaign to 50 HCAD-targeted absentee owners; 3 weeks
2. Renovation Cost Feasibility Audit (A3) — $500 inspector walkthroughs of 5 properties; 2 weeks
3. Works Renovation Training Feasibility (A2) — Free calls to HCC + SER-Jobs; 1 week
4. Solar PPA Feasibility (B1 alternative) — Free calls to 4 PPA providers; 1 week
5. Impact REIT Structural Feasibility (D2+D3) — 30 min added to K1 legal call; ~$250

**Total discovery cost:** ~$2,750 | **Timeline:** 5 weeks parallel tracks

**Strategic sequencing:** Solar PPA first (Month 14, standalone, no Works training required), Renovation Exchange second (Month 18+, pending Experiments 1–3), Impact REIT third (Year 3+, post-revenue).

**3 new kill switches added:** K6 (Works renovation quality passes HUD inspection), K7 (Solar PPA transferable between HCV tenants), K8 (REIT doesn't conflict with K1 TX insurance licensing).

File saved: `discovery-works-expansion.md`

---

## Entry 8 — June 7, 2026 (Session 3)

### Prompt
```
expand this discovery to include owners of substandard / distressed / abandoned properties agreeing to take lower rent than FMR - even $200/month is better than 0
```

### Response

Expanded `discovery-works-expansion.md` with a new major section: **"Below-FMR Rent Tier — Any Dollar Is Better Than Zero."**

**Core reframe:** The original renovation exchange model assumed the value exchange was FMR vs. market-rate rent — a $209/month discount over 36 months = $7,524 Works labor ceiling. That math only applies to owners who *could* rent at market. For truly distressed/abandoned properties, the comparison is not "FMR vs. $1,450" — it's **any income vs. negative carry**.

**Vacancy cost math for Harris County distressed properties:**
- Property tax + insurance + code enforcement + vandalism = $325–540/month in carrying costs
- Current net income from vacant property: negative $325–540/month
- Any rent commitment doesn't just add income — it flips the monthly P&L by $525–740/month

**HCV mechanics at sub-FMR rents (SSI tenant at $967/month → $290/month tenant share):**
- Below $350/month: HA pays $0, HCV is useless — but tenant can pay directly
- $400/month: HA pays $110, tenant pays $290 — HCV works
- $600/month: HA pays $310, tenant pays $290 — strong HCV contribution

**Revised Works labor ceiling (below-FMR):**
At $400/month contract rent, owner's 36-month value = rental income ($14,400) + avoided carrying costs ($14,400) + property appreciation ($10,000) = $38,800 → **2,305 Works labor hours**. This breaks through the original 447-hour cosmetic-only ceiling — enough for genuine renovation including kitchens, baths, HVAC, weatherization.

**Two new sub-segments identified:**
- Stabilization tier ($200–350/month): no HCV, no UPCS inspection, basic habitability only, fully private-market
- Below-FMR Voucher tier ($350–FMR): HCV applies, UPCS required, scales with Works scope

**5 new ideas added:** Below-FMR Tiered Exchange, Liability-to-Asset Pitch, Rent Escalation Ladder, Tax Delinquency Intercept, Non-Voucher Stabilization Track

**4 new experiments designed:**
- E6: Vacancy cost survey (bundled with E1 calls, free)
- E7: A/B pitch framing test (renovation lead vs. liability lead, free)
- E8: Non-voucher tenant affordability — CFTH income data request (free)
- E9: Tax delinquency intercept — certified mail to 30-day pre-auction owners ($400, 3 weeks)

**2 new kill switches:** K9 (Stabilization-tier tenants can pay without HA backstop) and K10 (non-UPCS tenancy doesn't trigger regulatory requirements)

**Revised total discovery cost:** ~$3,150 | 5 weeks parallel + 3-week delinquency track

---

## Entry 9 — June 7, 2026 (Session 3)

### Prompt
```
/pm-execution:strategy-red-team

evaluate the below fmr framing to identify edge cases, critical unresolved assumptions & dependencies
```

### Response

Red-teamed the below-FMR expansion from `discovery-works-expansion.md`. Five kill-assumptions identified; three have real teeth.

**Kill-Assumption #1 (highest priority — run today):** The "liability-to-asset" pitch assumes owners are actively paying $325–540/month in carrying costs. But truly distressed/delinquent owners have typically already *stopped* paying taxes and insurance — the debt is accruing, not being actively borne. The pitch is factually wrong for the most distressed segment. HCAD public records confirm tax payment status in 30 minutes for free. Kill criterion: >50% of target owners are already delinquent and uninsured → retarget pitch to "salvage before auction" framing for that group.

**Kill-Assumption #2 (structural):** SSI tenants paying $200–290/month without HA backing may be destabilized by HomeGuarantee's own Works program. SSI decreases $1 for every $2 earned above $85/month — a Works job earning $900/month cuts SSI by $408. Combined income is higher, but the SSI drop is immediate while Works income can fluctuate. A bad Works week = rent default. The program that employs the tenant may cause the claim. Additionally, SSI rep payees may block rent payments not routed through a housing authority. HUD PD&R has published default rates for SSI tenants in private-market housing — 2-hour search resolves this. Kill criterion: non-voucher SSI default rate ≥2× HCV-backed rate.

**Kill-Assumption #3 (strands tenants mid-tenancy):** The "no HUD UPCS inspection required" claim is federally true but may be locally false. Houston Chapter 10 requires occupied dwellings to meet minimum habitability standards — including working HVAC (mandatory in Texas heat). If Works brings a property to "basic habitability" below UPCS but a city inspector red-tags it, the tenant is forced out mid-tenancy. The Stabilization tier's "lighter renovation = lower cost" assumption collapses. Desk research comparing Chapter 10 to UPCS Form 52580: 2 hours, free.

**Kill-Assumption #4 (hidden variable):** The 2,305-hour Works labor ceiling assumes appreciation ($10,000) and avoided carrying costs ($14,400) compound with rental income. But if the owner is already delinquent (no carrying costs) AND the neighborhood doesn't appreciate (blighted block), total value collapses from $38,800 to $14,400 → labor ceiling = 856 hours → back to light renovation only. Additionally, $16.83/hour may be base wage only — fully-loaded Works cost could be $22–28/hr, tightening the ceiling another 25–40%.

**Kill-Assumption #5 (operational):** Tax-delinquent owners may be unreachable (abandoned address, deceased, estate in probate) and the 30-day pre-auction window is operationally impossible at HomeGuarantee's current stage. 10 certified letters at $80 tests reachability.

**What's well-reasoned:** HCV mechanics table is precise; two-tier segmentation is sound; "liability-to-asset" framing is behaviorally superior for actively-paying owners; SSI stability advantage over minimum-wage employment is real (the Works-offset risk is scoped to Works participants only and may be engineerable).

**Total cost to resolve all 5 kill-assumptions: $80 and one week.**

File saved: `red-team-below-fmr.md`

---

---

## Entry 10 — June 7, 2026

### Prompt
[Sessions 3–4 continuation] "Rewrite the PRD to prioritize the below-FMR Stabilization tier as a viable strategy. Update the personas, financial projections and the opportunity solution trees as well." — then "continue" and "Continue from where you left off."

### Response Summary

**Three deliverables completed across Sessions 3–4:**

#### 1. PRD v1.5 → v1.6 (`houston-discovery-and-prd.md`)
Full rewrite to center Phase 2.5b (below-FMR Stabilization Tier). Key additions:
- Section 1: 6th barrier added — "Supply gap: substandard and abandoned units locked out by renovation cost"
- Section 3: Persona 6 (Ray) added to stakeholder table; Tension Map gained 2 rows (income vs. stability; renovation depth vs. labor ceiling)
- Section 4: Non-goal clarified (no acquisition; renovation-for-commitment exchange); supply-side goal added (50 units by M18–24)
- Section 5: 4th component added — "Supply Expansion Layer" (Works Renovation Exchange, Stabilization sub-tier $200–350/mo, Below-FMR Voucher sub-tier $350–FMR, HCAD outreach, Solar PPA)
- Section 6: Full Phase 2.5b feature spec — two-tier regulatory table, owner outreach channels, Works renovation economics table (active carrier: $38,800 / 2,305 hrs vs. delinquent: $14,400 / 856 hrs), Works-SSI structural constraint design rule (no co-location)
- Section 7: Stabilization claims rate target ≤15%; Works renovation and unit targets
- Section 8: Two new revenue rows (Stabilization fee $50/unit/month; Works renovation contract ~$175/unit)
- Section 8a: Separate $100K Stabilization reserve; depletion trigger at >20% default rate
- Section 9: 5 new [NEW] risk rows (delinquent pitch mismatch, SSI-Works offset, Chapter 10 vs. UPCS, labor ceiling, owner reachability)
- Section 10: Month 13–17 and Month 18–22 phases added
- Section 11: Q7–Q9 added (Chapter 10/UPCS equivalence, SSI representative payees, Works fully-loaded cost)
- Section 12: K6–K10 kill switches added (Chapter 10 desk research / free; SSI default rate benchmark / free; owner reachability $80 test; Works-SSI interaction analysis / free; Solar PPA calls / free)
- Section 13: O10–O12 opportunities added (substandard below-FMR voucher, abandoned stabilization, no-voucher SSI track); OST table updated with Phase 2.5b column
- Section 14: 14f and 14g appendices added; differentiation and value prop tables updated with Ray row and renovation exchange

#### 2. Persona 6 — Ray, Distressed Property Owner (`stakeholder-personas.md`)
- 64-year-old Dallas resident; inherited 3BR Fifth Ward house; 4-year vacancy; $430/month carry; $25K renovation quote he can't afford
- JTBD: Convert bleeding liability to income without physical presence
- Core insight: Emotional pain (mother's house) > financial pain; correct pitch is "protect what your mother built" not "stop losing money"; sales process must accommodate deliberate decision-making (30-day rush won't work)
- Journey map: AWARENESS → EVALUATION → DECISION → RENOVATION → ACTIVE TENANCY; friction peaks at trust/evaluation stage
- Product fit: Phase 2.5b exact fit; segmentation trigger: verify HCAD delinquency before pitch (delinquent → salvage; current → liability-to-asset)
- Works-SSI structural constraint noted in persona card
- North Star: "Monthly deposit arrives, no calls needed, property looks better than I left it"
- Stakeholder Tension Map updated with 2 rows for Ray's tensions

#### 3. `HomeGuarantee_Financial_Projection.xlsx` rebuilt (4 sheets, zero formula errors)
- **Assumptions sheet**: 30+ rows covering all tiers; Stabilization-specific assumptions (18% claims rate, $2,800 avg payout, $100K pilot reserve, $50/unit/month fee, Works renovation contract revenue $175/unit)
- **Annual P&L** (Years 0–5): Added REV_STABILIZATION and REV_WORKS_RENOVATION rows; total revenue, gross profit, EBITDA, and net income; Stabilization adds $0.6M ARR by Year 5; Works renovation adds $262.5K
- **Monthly Detail** (M1–M36): Unit ramp for all 4 tiers with churn applied; founding waiver (M1–M3); Stabilization starts M22, Works renovation contracts from M20; per-tier revenue, claims (HCV and Stabilization separate), COGS, opex, EBITDA with conditional formatting
- **Unit Economics**: Side-by-side per-unit economics for Basic, Managed, Stabilization; Works renovation labor ceiling table (active vs. delinquent); Kill switches K6–K10 embedded at bottom of sheet

**Key numbers:**
- Stabilization claims rate: 18% (vs. 12% HCV); avg claim $2,800 (vs. $3,500 HCV)
- Works renovation contract revenue: $175/unit (non-delinquent owners only)
- Stabilization reserve: $100K earmarked separately from main $2M fund
- Break-even: ~Month 28 (no grants); grants bridge early deficit
- Zero formula errors confirmed by reload verification


---

## Entry 11 — June 7, 2026

**Prompt:** "I want this entire plan to be presented as a multi-page website to be hosted on a public URL on github.io - create the pages, summaries, navigation structure, provide downloadable assets. Showcase the entire business & investment case on the website." (Continued from compacted session — building the remaining 5 pages after index.html, problem.html, solution.html were completed in the prior session.)

**Clarifications already captured (prior session):**
- GitHub setup: "Create files only" — user will push themselves
- Site focus: "Both equally" — dual audience (investors and policy/CoC partners)

**Response — Session completion:**

Built all remaining pages of the HomeGuarantee GitHub Pages static site at `/Users/eeshanchatterjee/claude/Projects/LessHomelessness/site/`:

**Pages completed this session:**

`financials.html` — 5-year financial projections with 4 Chart.js charts: (1) stacked revenue bar by tier Y1–Y5, (2) active units line chart M1–M36 by tier, (3) EBITDA trajectory bar, (4) TAM/SAM/SOM doughnut. Annual P&L table with all 6 revenue lines including Stabilization ($3.6K→$720K) and Works renovation ($3.5K→$263K). Unit economics by tier table (Basic 60% margin, Managed 33%, Stabilization 16%). Assumptions table with claims, pricing, Works economics, fund governance.

`model.html` — Business model. 4 tier cards (Basic, Managed, HA SaaS, Stabilization) with pricing, feature lists, and target unit counts. Works renovation 5th revenue stream card with owner-type comparison table. Works Renovation Exchange 4-step flow. Dual reserve fund structure (HCV $2M / Stabilization $100K). Grant bridge plan (Year 0: $300K, Year 1: $500K, Year 2+: $0). 6-phase release plan grid (P1 through P5 including Phase 2.5b).

`personas.html` — All 6 stakeholder personas: Marcus (risk-averse landlord), Patricia (housing authority director), Jerome (Works employee), Maria (CoC case manager), Devon (HCV holder), Ray (distressed property owner — Phase 2.5b unlock). Each card includes: background narrative, direct quote, JTBD list, pain→gain grid, journey stage bar, north star metric. Ray persona includes two sub-type callouts (Type A active carrier vs Type B delinquent/salvage) and HCAD targeting logic explanation.

`risk.html` — Risk analysis. 10 kill switch table (K1–K10 with trigger, automatic action, rationale). 5 structural tension cards (mission vs financial discipline; Works-SSI offset; CoC dependency; renovation speed vs quality; SB 267 regulatory window). 7 red-team attacks with claim, response, and verdict. Full risk register heat map table with likelihood × impact ratings.

`invest.html` — Dual-audience investment/partnership page with JavaScript tab switcher. Investor tab: $22.9M Year 5 ARR, $4M raise structure (PRI + SAFE + grant), use-of-funds bar chart, 6-milestone timeline to profitability, arbitrage table ($35–50K emergency cost vs $12K housing), competitive moat analysis, comparable transactions table (Rhino, Till, Doorstead, Open Doors, Oregon OHCS). Partners tab: CoC/HHA value propositions, impact metrics table with baselines and targets, nonprofit-vs-company framing. Email CTA at bottom.

`_config.yml` — GitHub Pages config with nav structure, excludes.

`README.md` — Deployment instructions (GitHub repo → Pages → deploy from branch root).

`assets/HomeGuarantee_Financial_Projection.xlsx` — Copied from workspace root to `site/assets/` for download link.

**Full site structure (complete):**
```
site/
  index.html          Landing (prior session)
  problem.html        Problem analysis (prior session)
  solution.html       Platform solution (prior session)
  model.html          Business model (this session)
  financials.html     Financial projections with Chart.js (this session)
  personas.html       6 stakeholder personas (this session)
  risk.html           Risk + kill switches + red team (this session)
  invest.html         Investor/partner CTA — dual audience (this session)
  _config.yml         GitHub Pages config (this session)
  README.md           Deployment instructions (this session)
  assets/
    css/style.css
    js/main.js
    HomeGuarantee_Financial_Projection.xlsx
```

**Design decisions:**
- invest.html uses JS tab switcher (investors vs partners) to serve dual audience on one URL
- financials.html loads Chart.js from CDN; all charts render from inline JS constants derived from the financial model
- All pages share identical navbar and footer markup; active link detection via main.js
- Stabilization tier (Phase 2.5b) visually distinguished with gold border/badge throughout


---

## Entry 12 — Session: Sidebar, PDF, README cleanup

**Date:** 2026-06-07

**Prompts:**
- "remove the Site section from the actual Site. Also add a sidenavbar to allow navigation to other pages like problem, solution etc. Also create a download full PRD option on the landing page - that downloads the entire PRD as a PDF. This PDF can be hosted within the repo itself"

**Changes made:**

1. **Sidebar injection (all 8 pages)** — `docs/assets/js/main.js` rewritten to inject sidebar HTML via `insertAdjacentHTML('afterbegin', ...)` on DOMContentLoaded. Sidebar includes: brand logo, nav links to all 8 pages with emoji icons, grouped labels (Overview / The Case / People & Risk / Take Action), Downloads section with PDF + XLSX links. Active page highlighted via `data-page` matching. Mobile: sidebar hidden off-screen via CSS transform, floating ☰ button toggles it. `body.has-sidebar` class shifts layout by 224px on desktop.

2. **Sidebar CSS** — Full block added to `docs/assets/css/style.css` before `.navbar` section. Key rules: fixed positioning, `z-index: 200`, `overflow-y: auto`, responsive collapse at 960px breakpoint.

3. **PDF generation** — `houston-discovery-and-prd.md` converted to PDF via pandoc + xelatex: `pandoc houston-discovery-and-prd.md -o HomeGuarantee_PRD_v1.6.pdf --pdf-engine=xelatex -V geometry:margin=1.2in -V fontsize=11pt -V mainfont="DejaVu Serif" --toc --toc-depth=2`. Output: 196K file. Copied to `docs/assets/HomeGuarantee_PRD_v1.6.pdf`.

4. **Download button on landing page** — Added third CTA button to `docs/index.html` hero `__actions` div: `<a href="assets/HomeGuarantee_PRD_v1.6.pdf" class="btn btn-outline" download>Download Full PRD (PDF) ↓</a>`

5. **README cleanup** — Removed `## Site (GitHub Pages)` section (page table + publish instructions) from `README.md`. Section was internal scaffolding, not useful in the public repo context.

6. **GitHub Pages 404 fix** — User renamed `site/` → `docs/` and configured Pages to deploy from `/docs`. All subsequent file paths use `docs/`.

**Key technical decisions:**
- Sidebar injected via JS (not duplicated HTML) so edits stay in one file
- PDF hosted in repo at `docs/assets/` so it downloads without any external dependency
- `site/` reference in README `## Repository contents` code block kept (reflects actual non-docs files); only the GitHub Pages how-to section removed

