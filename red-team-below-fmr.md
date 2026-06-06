# Red-Team: Below-FMR Rent Tier — "Any Dollar Is Better Than Zero"
**Date:** June 7, 2026
**Target:** The below-FMR framing expansion in `discovery-works-expansion.md`

---

## Top Kill-Assumptions (ranked)

---

### #1 — The hardest hit. Run this test first.

**Claim:** Distressed property owners feel negative carry ($325–540/month) and will be motivated by "convert liability to asset."

**Steelman:** Harris County tax and insurance obligations are real, documented, and continuous. Loss aversion is a stronger motivator than equivalent gains. An owner paying $400/month to hold nothing is primed to act.

**Fails if:** The majority of truly distressed/delinquent property owners have already stopped paying taxes and insurance — meaning the $400/month carrying cost is not being borne; it's accruing as a debt they've mentally written off. In that case, the "you're paying $400/month" pitch is inaccurate and lands not as relief but as a vague threat about a debt they've already accepted losing. The correct mental model for these owners isn't "eliminate a current cost" — it's "salvage something before you lose everything," which is a different and harder pitch.

**Evidence to get this week:** In Experiment 1 follow-up calls, directly ask 20 owners: *"Are you currently paying property taxes on this property? Is it insured?"* HCAD confirms tax payment status publicly without even calling.

**Kill criterion:** >50% of targeted distressed owners are already delinquent on taxes AND uninsured. If so, retarget the "liability-to-asset" pitch only to owners who are still actively paying. Use "salvage before auction" framing for delinquent owners.

**Cheapest test:** 30 minutes on HCAD public records for 20 target properties. Free. This week.

---

### #2 — The structural problem hiding inside the Works flywheel.

**Claim:** SSI-income tenants ($967/month) can reliably pay $200–290/month in rent without HA backing for 24–36 months.

**Steelman:** SSI is a federally guaranteed income stream — more reliable than minimum-wage employment. 30% of $967 = $290/month. Mathematically feasible.

**Fails if:**
- Works employment reduces SSI via earned-income offset rules: SSI decreases by $1 for every $2 earned above $85/month. A Works participant earning $900/month sees SSI drop by ~$408/month. Combined income is higher, but the SSI drop is immediate and Works income can fluctuate — a month of reduced Works hours collapses rent coverage. HomeGuarantee's own Works program may cause the income instability that triggers Stabilization-tier claims.
- SSI recipients with representative payees (court-appointed or family) may be unable to authorize rent payments not routed through a housing authority. The tenant wants to pay; the payee controls the money.

**Evidence to get this week:** (a) Ask CFTH for payment default rates for formerly homeless individuals in private-market (non-voucher) housing vs. HCV-backed housing. (b) Search HUD PD&R database for SSI tenant default rates. (c) Ask Works program designers: does Works compensation trigger SSI offset?

**Kill criterion:** Non-voucher SSI tenant default rate is ≥2× the HCV-backed default rate. At that level, the guarantee fund depletes faster than modeled and the Stabilization tier becomes a loss leader.

**Cheapest test:** 2-hour HUD PD&R literature search. Free.

---

### #3 — The one that could strand tenants mid-tenancy.

**Claim:** Non-voucher tenancies at $200–350/month don't trigger regulatory/compliance requirements — no HUD UPCS inspection required because no voucher is used.

**Steelman:** HUD UPCS inspection is specifically a condition of HCV participation. Private-market tenancies at any rent level are not subject to federal inspection requirements. This is legally correct as a federal matter.

**Fails if:** Houston city code enforcement standards for *occupied* residential units are functionally equivalent to UPCS minimums. Chapter 10 of the Houston Code of Ordinances requires all occupied dwellings to meet minimum habitability standards. A Works renovation scoped to "basic habitability" that doesn't pass city code could be red-tagged — tenant forced to vacate, guarantee fund claim triggered, and the "lighter renovation = lower cost" assumption collapses. Texas heat makes this acute: Chapter 10 explicitly requires functioning HVAC for occupied units.

**Evidence to get this week:** Read Houston Code of Ordinances Chapter 10 minimum habitation standards. Compare to HUD UPCS Form 52580. Desk research only.

**Kill criterion:** Houston Chapter 10 requirements are functionally identical to UPCS minimums for the categories Works would address (HVAC, plumbing, structural security). If so, the "no inspection" benefit of the Stabilization tier evaporates — renovation scope is not meaningfully lighter than the Below-FMR Voucher tier.

**Cheapest test:** Legal desk research, 2 hours. Free. Do this before designing any Stabilization-tier renovation scope.

---

### #4 — The labor math has a hidden variable.

**Claim:** At $400/month contract rent, the owner's 36-month value ($38,800) supports a Works labor ceiling of 2,305 hours — enough for genuine renovation.

**Steelman:** The accounting is internally consistent: income ($14,400) + avoided carrying costs ($14,400) + appreciation ($10,000) = $38,800.

**Fails if:** Both of these are true simultaneously:
- Appreciation is ~$0 in a blighted neighborhood (a renovated house on a distressed block doesn't appreciate $10,000 — HCAD values track neighborhood with a long lag)
- Owner isn't paying carrying costs (delinquent owners have $0 in actual monthly outflow; the carrying cost benefit doesn't accrue to them)
- Result: $38,800 collapses to $14,400 (income only) → 856 Works hours → back to light-renovation ceiling, not full renovation

Additionally: the ceiling uses Works wages ($16.83/hr base). If fully-loaded Works cost (supervision, training, overhead) is $22–28/hr, the ceiling tightens by 25–40%.

**Evidence to get this week:** (a) Pull 5 HCAD records for distressed Houston properties renovated 2–3 years ago; compare pre/post assessed values. (b) Confirm from the financial model: does the $16.83/hour Works figure include overhead or is it base wage only?

**Kill criterion:** Property appreciation ≤$3,000 AND most target owners are tax-delinquent → true labor ceiling is ~500–900 hours → scope is cosmetic, not full renovation. Doesn't kill the idea but resets claims about renovation depth.

**Cheapest test:** 30 minutes on HCAD + 15 minutes reviewing `build_model.py` for Works cost basis. Free.

---

### #5 — The delinquency intercept channel has an ownership problem.

**Claim:** Tax-delinquent owners are reachable and can execute a rental commitment within a 30-day pre-auction window.

**Steelman:** The urgency is real and unique. An owner about to lose a property at auction has maximal motivation to act.

**Fails if:** Absentee owners of delinquent properties have abandoned their mailing address, died and left an unsettled estate, or the property has multiple heirs who disagree. HCAD absentee-owner records correlate with hard-to-reach ownership by definition. The 30-day window is also operationally impossible at HomeGuarantee's current (pre-revenue, no Works crew) stage.

**Evidence to get this week:** Pull 10 tax-delinquent HCAD properties; send certified mail to listed addresses. Track: reached vs. bounced vs. deceased vs. estate complication. Estimate reachability rate.

**Kill criterion:** <30% of delinquent owners are reachable AND legally authorized to make a rental decision. At that rate, channel cost doesn't justify yield. Defer to Phase 2 when HomeGuarantee has 30-day execution capacity.

**Cheapest test:** 10 certified letters. $80. 2 weeks.

---

## What's Well-Reasoned

**The HCV mechanics table is precise and consequential.** The $350/month HA-contribution threshold is a real structural insight, not an approximation. It correctly splits the product into two operationally distinct regulatory environments.

**The two-tier segmentation (Stabilization vs. Below-FMR Voucher) is sound.** Different inspection obligations, different Works scope, different risk profiles. Keeping them separate in the operating model is right.

**The "liability-to-asset" pitch is behaviorally superior to a renovation pitch** — for owners who are still actively paying carrying costs. Loss aversion is empirically stronger than equivalent-gain framing. The A/B pitch test in Experiment 7 is the right move. Note: this pitch lands differently on delinquent owners (see Kill-Assumption #1) — segment accordingly.

**SSI as a rent-payment mechanism is more stable than minimum-wage employment** in the ways that matter: it doesn't disappear when an employer cuts hours. The Works-income-SSI-offset risk applies only to tenants who also take Works jobs — and may be manageable by designing Works compensation to work within SSI income exclusion rules ($65/month unearned income exclusion + $1-for-$2 earned income offset after $85/month threshold).

---

## What I Couldn't Assess

**Works fully-loaded cost per hour.** Whether supervision, training, insurance, and materials overhead are included in the labor ceiling calculation is unclear from the financial model. This changes the labor ceiling by 25–40% if overhead is additive.

**SSI payment default rate in private-market (non-voucher) housing.** HUD has published this in Moving to Work studies and the Family Options Study. It would directly validate or kill Kill-Assumption #2 without running any new experiments.

**Houston Chapter 10 vs. HUD UPCS comparison.** Determines whether the "no inspection" benefit of the Stabilization tier is real or illusory. Desk research only.

---

## What to Do This Week (Ranked by Cheapness × Impact)

| Priority | Action | Cost | Time |
|---|---|---|---|
| 1 | HCAD: check tax payment status on 20 target properties | Free | 30 min |
| 2 | Read Houston Code of Ordinances Chapter 10 vs. HUD UPCS Form 52580 | Free | 2 hrs |
| 3 | HUD PD&R: search SSI tenant default rates in private-market housing | Free | 2 hrs |
| 4 | Financial model: confirm Works cost basis — wages only vs. fully-loaded | Free | 15 min |
| 5 | 10 certified letters to delinquent owners (reachability test) | $80 | 2 weeks |

**Total cost to resolve all five kill-assumptions: $80 and one week.**
The below-FMR expansion can be validated or killed before a dollar of Works labor is committed.

---

## Files Referenced

- `discovery-works-expansion.md` — the plan being red-teamed
- `houston-discovery-and-prd.md` (PRD v1.5) — kill switches K1–K10 context
- `HomeGuarantee_Financial_Projection.xlsx` — Works cost basis
