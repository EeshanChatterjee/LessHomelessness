# HomeGuarantee — Houston Pilot

A private-market landlord guarantee platform that converts HCV (Section 8) voucher refusals into housing placements, and activates distressed/vacant properties as below-FMR supply. Built for Houston. Designed to scale.

**Status:** Pre-seed · Houston pilot targeting Q3 2026 · $4M raise (guarantee fund + equity + grant)

---

## The problem in one number

Houston has **105,840 actionable vacant units** and **3,280 homeless people** — a 32× surplus. The bottleneck is not supply. It is landlord trust. 25% of all HCV vouchers go unused every year because landlords legally refuse them (Texas SB 267).

HomeGuarantee fixes the trust gap with a financial guarantee product — and the below-FMR Stabilization tier (Phase 2.5b) activates properties that the market has entirely abandoned.

---

## Site (GitHub Pages)

The full investment and partnership case is presented as a public website in the `site/` directory.

**Pages:**

| Page | Content |
|------|---------|
| `index.html` | Landing — market overview, how it works, CTA |
| `problem.html` | 6 barriers, the broken voucher math, true system costs |
| `solution.html` | 4 platform components, Stabilization tier, 6-phase rollout |
| `model.html` | 5 revenue tiers, Works program, fund governance |
| `financials.html` | Year 0–5 P&L, Chart.js projections, unit economics |
| `personas.html` | 6 stakeholder personas with JTBD and north star metrics |
| `risk.html` | 10 kill switches, structural tensions, red-team findings |
| `invest.html` | Dual-audience: investors + CoC/policy partners |

**To publish:** push `site/` contents to a GitHub repo root → Settings → Pages → Deploy from branch → main.

---

## Repository contents

```
HomeGuarantee_Financial_Projection.xlsx   5-year financial model (4 sheets)
houston-discovery-and-prd.md             PRD v1.6 — full product requirements
stakeholder-personas.md                  All 6 personas + journey maps
market-sizing-homeguarantee.md           TAM/SAM/SOM analysis
competitor-analysis-homeguarantee.md     Competitive landscape (5 competitors)
battlecards-homeguarantee.md             Sales battlecards
positioning-homeguarantee.md             Positioning statements
value-proposition-homeguarantee.md       Value prop by stakeholder
gtm-plan-homeguarantee.md               Go-to-market strategy
cfth-partnership-proposal.md             The Way Home CoC partnership proposal
homeguarantee-works-brief.md             Works employment program brief
discovery-plan-vacant-homes.md           Initial discovery plan
discovery-landlord-managed-layer.md      Managed tier discovery
discovery-works-expansion.md             Stabilization + REIT expansion discovery
pre-mortem-homeguarantee.md             Pre-mortem v1
pre-mortem-v2-homeguarantee.md          Pre-mortem v2 (post-mitigations)
red-team-final-business-case.md          Final red-team: entire business case
red-team-below-fmr.md                   Red-team: Stabilization tier framing
red-team-prototype-first.md             Red-team: SaaS-first vs ops-first
thoughttrace.md                          Full session log (prompt + response history)
site/                                    GitHub Pages website (8 pages)
```

---

## Key numbers

| Metric | Value |
|--------|-------|
| Houston homeless population | 3,280 (2024 PIT count) |
| Houston vacant units (actionable) | 105,840 |
| Vacant unit surplus ratio | 32× |
| Unused HCV vouchers | 4,725 (25% of 18,900 active) |
| FMR (1BR Houston) | $1,241/mo |
| Emergency system cost / person / year | $35,000–$50,000 |
| HomeGuarantee cost / person / year | ~$12,000 |
| Stabilization tier rent | $200–350/mo (below-FMR) |
| Year 5 ARR (projected) | $22.9M |
| EBITDA margin Year 5 | 51% |
| Break-even (EBITDA) | ~Month 28 |

---

## Revenue model

| Tier | Fee | Payer | Launch |
|------|-----|-------|--------|
| Basic (HCV guarantee) | $87.50/unit/mo | Housing authority | Month 0 |
| Managed service | $200/unit/mo | Landlord | Month 6 |
| HA SaaS platform | $87.50/unit/mo | Housing authority enterprise | Month 12 |
| Stabilization (Phase 2.5b) | $50/unit/mo | HomeGuarantee (employer) | Month 22 |
| Works renovation contracts | $175/unit avg | Non-delinquent owners | Month 20 |

---

## The Stabilization tier (Phase 2.5b)

The newest and most mission-critical innovation. Targets distressed, abandoned, and tax-delinquent properties via HCAD data. Works crew (formerly homeless employees) renovate units in exchange for an 18-month below-FMR lease commitment from the owner.

Two owner types:
- **Type A (active carrier):** Owner pays $175 renovation contract. Net: ~$280/mo positive cash flow from a $0 asset.
- **Type B (delinquent):** Renovation is free to owner. Owner commits to lease. Works earns labor income ($14,400) but no renovation fee. Prevents foreclosure.

Tenants are SSI-eligible (~$290/mo at 30% income share). Works employees must NOT co-reside in Stabilization units (SSI offset structural constraint — see K9).

---

## Kill switches

10 automatic pause triggers are built into the operating model. Critical ones:

- **K1:** HCV claim rate > 18% → pause enrollment
- **K2:** Guarantee fund < $500K → halt all new units
- **K9:** Works-SSI offset creates net financial harm → suspend Works intake
- **K10:** Stabilization claim rate > 25% → halt Stabilization enrollment

Full list in `houston-discovery-and-prd.md` §12 and on `risk.html`.

---

## AI tools used to build this project

This project was built entirely in [Claude Cowork](https://claude.ai) using the Claude Agent SDK with a suite of PM plugins and skills. Every deliverable — from the initial discovery plan to the GitHub Pages site — was produced through iterative Claude sessions tracked in `thoughttrace.md`.

### Plugins

| Plugin | Purpose |
|--------|---------|
| `pm-product-discovery` | Discovery cycles, OST, personas, interview scripts, assumption mapping |
| `pm-execution` | PRD writing, pre-mortems, red-teams, kill switches, OKRs |
| `pm-market-research` | Market sizing, user personas, competitor analysis |
| `pm-go-to-market` | GTM strategy, battlecards, beachhead segmentation |
| `pm-marketing-growth` | Positioning statements, value prop statements |
| `pm-product-strategy` | Value proposition design |
| `anthropic-skills` | Excel model (xlsx), website (HTML/CSS/JS), thoughttrace logging |

### Skills invoked (slash commands)

| Command | Output | Task # |
|---------|--------|--------|
| `/pm-product-discovery:discover` | Initial discovery plan — vacant homes vs. homelessness | 1–3 |
| `/pm-product-discovery:discover` | Houston homelessness root causes + landlord guarantee PRD | 5–7 |
| `/pm-execution:pre-mortem` | Pre-mortem v1 — identified 3 launch-blocking Tigers | 8 |
| `/pm-execution:pre-mortem` | Pre-mortem v2 — stress-tested mitigations | 11 |
| `/pm-product-discovery:discover` | Landlord non-financial risk + managed property layer | 15 |
| `/pm-market-research:market-sizing` | TAM/SAM/SOM across Houston, Texas, US, Canada | 13 |
| `/pm-market-research:user-personas` | 5 stakeholder personas, journey maps, north star metrics | 14 |
| `/pm-execution:red-team-prd` | Red-team: SaaS prototype vs. operational setup | 18 |
| `/pm-execution:strategy-red-team` | Final red-team: entire business case (5 kill-assumptions) | 19 |
| `/pm-execution:strategy-red-team` | OST for all PRD-accepted ideas + kill switches added | 20–21 |
| `/pm-market-research:competitor-analysis` | 5-competitor landscape analysis | 24 |
| `/pm-product-strategy:value-proposition` | JTBD value propositions for all 5 stakeholders | 25 |
| `/pm-marketing-growth:positioning-ideas` | 3-audience positioning + objection/response tables | 26 |
| `/pm-go-to-market:competitive-battlecard` | 6 sales-ready battlecards | 27 |
| `/pm-go-to-market:gtm-strategy` | Full GTM plan across 3 phases (Houston → DFW → National) | 28 |
| `/pm-product-discovery:discover` | REIT + renovation-for-rent expansion brainstorm | 31 |
| `/pm-product-discovery:discover` | Below-FMR Stabilization tier deep-dive | 32 |
| `/pm-execution:red-team-prd` | Red-team: below-FMR framing and structural risks | 33 |
| `/pm-execution:strategy-red-team` | Red-team: Stabilization tier before PRD rewrite | Session 3 |

### Custom capabilities used

| Tool | What it produced |
|------|-----------------|
| Python + `openpyxl` (Bash shell) | `HomeGuarantee_Financial_Projection.xlsx` — 4-sheet financial model, zero formula errors |
| Static HTML/CSS/JS (file tools) | 8-page GitHub Pages site with Chart.js financial charts |
| Thoughttrace logging (memory system) | Full prompt + response log across all sessions (`thoughttrace.md`) |
| HCAD data research | Vacancy and tax-delinquency targeting strategy for Stabilization tier |

---

## Contact

Eeshan Chatterjee · [eeshanchatterjee@gmail.com](mailto:eeshanchatterjee@gmail.com)

---

*Projections are forward-looking estimates. This is not a public securities offering.*
