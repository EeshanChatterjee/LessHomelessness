# Pre-Mortem v2: HomeGuarantee — PRD v1.1
**Date**: June 6, 2026
**Status**: Draft
**Scope**: Second pass — focused on risks introduced by v1.1 mitigations, and what the first pre-mortem didn't fully resolve.

> v1.0 fixed three real structural problems: the HHA revenue assumption, the absence of fund governance, and the underweighting of the CFTH dependency. This pre-mortem stress-tests whether the fixes worked — or whether they introduced new failure modes.

---

## What v1.1 Fixed (Credit Where Due)

Before cataloguing new risks: three things that were genuinely dangerous in v1.0 are now handled.

- **HHA as Phase 1 payer** — removed. Revenue model now correctly sequences philanthropic → grants → CRA → HHA. ✓
- **Fund without governance** — the depletion triggers, claims authority table, and audit requirement are a real improvement. ✓
- **CFTH as a Month 1 milestone** — elevated correctly to a pre-launch prerequisite. The product now can't launch without the agreement. ✓

What follows are the risks that v1.1 either created or left open.

---

## Risk Summary

| Category | Count |
|----------|-------|
| 🐯 Launch-blocking Tigers (new) | 2 |
| 🐯 Fast-follow Tigers (new or remaining) | 3 |
| 📄 Paper Tigers | 2 |
| 🐘 Elephants (new) | 4 |

*Tigers from v1.0 that are now fully resolved: T2 (HHA revenue), partial resolution of T1 (fund governance). T3 (HMIS) and T4–T5 remain in the risk table with mitigations.*

---

## 🐯 Launch-Blocking Tigers (New)

### T-NEW-1 — The pre-launch prerequisite list is a deadlock waiting to happen

**Likelihood**: High | **Impact**: High

V1.1 added a "pre-launch" section listing five things that must be done before the first landlord enrolls: CFTH agreement signed, $2M guarantee fund closed, $300K operating grant closed, insurance counsel review, and HMIS data sharing negotiation started. Each item depends on a different counterparty. CFTH's legal team, a foundation board, a government grant cycle, an insurance lawyer, and CFTH's HMIS administrator are all on different decision timelines — none of which HomeGuarantee controls.

In practice, these items will not all complete simultaneously. One will stall. The product sits in pre-launch limbo for months. Momentum is lost. Landlords who showed early interest move on.

**The fix that's missing:** The prerequisites need a sequencing hierarchy and a minimum viable subset. Not all five are equally load-bearing. The CFTH agreement and minimum viable guarantee fund are truly blocking. HMIS legal negotiation can start in parallel but doesn't block launch. Insurance counsel review can happen after the agreement, not before it. Collapsing five parallel blockers into two sequential ones dramatically reduces deadlock risk.

**Revised pre-launch minimum viable gate:**
1. CFTH partnership agreement signed *(blocking)*
2. $500K operating + guarantee capital secured *(blocking — can scale up while piloting)*
3. Everything else: in progress but not blocking

**Owner**: CEO | **Deadline**: Resolve sequencing before sharing PRD externally

---

### T-NEW-2 — The CFTH CoC sub-recipient model creates a financial conflict of interest

**Likelihood**: Medium | **Impact**: High

The revenue model lists "CFTH's existing CoC grant amended to include HomeGuarantee as a sub-recipient" as the top Phase 1 funding option. But the partnership proposal simultaneously gives CFTH a 15% revenue share, a board seat, and co-branding rights. If CFTH is both the pass-through funder AND an equity-like partner with financial upside, it creates a conflict of interest that will flag immediately in a CoC grant audit.

HUD's sub-recipient oversight requirements (2 CFR Part 200) require the primary recipient (CFTH) to monitor sub-recipients for compliance, conduct risk assessments, and ensure grant funds are used for eligible activities. If CFTH is receiving a percentage of HomeGuarantee's revenue while also directing federal funds to it, any grant auditor will ask pointed questions about arm's-length dealing. CFTH's own board may block the arrangement on fiduciary grounds.

**The fix:** Separate the financial relationship cleanly. Either HomeGuarantee is a CFTH sub-recipient *or* CFTH receives a revenue share — not both. The cleanest structure: HomeGuarantee applies directly for CoC grants as an independent applicant with CFTH as a formal program partner (not a fiscal sponsor). CFTH's compensation comes from the revenue share and joint grants where they are a co-applicant with equal standing, not a pass-through.

**Owner**: CFO + Legal Counsel | **Deadline**: Resolve before approaching CFTH on grant co-application

---

## 🐯 Fast-Follow Tigers (New or Remaining)

### T-NEW-3 — The 15% CFTH revenue share locks in a unit economics problem before the model is proven

**Likelihood**: Medium | **Impact**: Medium

At 500 Houston units and $87.50/unit average fee: 15% = $78,750/year to CFTH — affordable. But the partnership proposal makes no mention of what happens in Chicago, Denver, or future markets. If analogous coalitions in those cities expect the same 15% (which is a reasonable expectation once the model is known), the platform economics look like this at scale:

| Units | Gross fee revenue | 15% to city partners | Net to HomeGuarantee |
|-------|------------------|---------------------|---------------------|
| 500 | $525K/yr | $78.75K | $446K |
| 2,000 | $2.1M/yr | $315K | $1.785M |
| 5,000 | $5.25M/yr | $787.5K | $4.46M |

Fine at scale, but the 15% should be explicitly scoped to Houston in the proposal, with a stated intention to negotiate city-specific arrangements in future markets. Locking in a 15% standard globally before the model is proven is a mistake.

**Planned response:** Add explicit geographic scope language to the partnership proposal: "This revenue share applies to HomeGuarantee's Houston operations. Future market arrangements will be negotiated separately with local partners."

**Owner**: CEO | **Deadline**: Before CFTH meeting

---

### T-NEW-4 — "Pause new enrollments" is operationally undefined and could cause more damage than the claims event it's responding to

**Likelihood**: Medium | **Impact**: Medium

The fund governance depletion trigger says: if claims rate exceeds 15% in any 60-day window, pause new enrollments. This is the right instinct, but "pause new enrollments" is undefined. There are at least four stages at which a placement could be paused:

1. Landlord recruitment (stop signing up new landlords)
2. Unit listing (stop accepting new unit listings)
3. Matching (stop proposing new tenant-unit matches)
4. Lease signing (stop finalizing leases already in progress)

If a tenant has been matched to a unit, their belongings are in a storage unit, and their case manager has already told them they're moving in — and then a "pause" stops the lease from being signed — that is a serious harm to a vulnerable person. It also destroys landlord trust, because the landlord was told the placement was happening.

**Planned response:** Define "pause new enrollments" operationally: it means stopping at stage 1 (no new landlord recruitment) and stage 3 (no new matches proposed). Placements already past the matching stage proceed to lease signing regardless of the pause. Add this definition to Section 8a.

**Owner**: Operations Lead | **Deadline**: Before Phase 1 launch

---

### T-NEW-5 — Manual Phase 1 data is incompatible with the insurance underwriting case in Phase 3

**Likelihood**: High | **Impact**: Medium

The PRD correctly treats manual tenant profiles as a Phase 1 fallback if HMIS integration is blocked. But the insurance underwriting path in Phase 3 depends on HomeGuarantee having clean, structured claims data and tenancy outcome data to present to actuaries. Manually submitted tenant profiles collected via web forms will be inconsistent: different case managers will fill in different fields, use different terminology, and skip optional sections. The resulting dataset will be analytically noisy.

When HomeGuarantee goes to an insurance partner in Month 18 and says "here's our claims data," a messy manual dataset undermines the actuarial case even if the underlying outcomes are good. A 10% claims rate buried in inconsistent data looks less credible than a 12% claims rate from a structured system.

**Planned response:** Design the Phase 1 manual form with strict field validation and required fields that mirror what the Phase 2 HMIS integration will capture. Treat the form as a structured data entry point, not a flexible intake tool. Budget for data cleaning before any insurance conversation.

**Owner**: Product Lead | **Deadline**: Before first tenant profile is submitted

---

## 📄 Paper Tigers (New)

### P-NEW-1 — The 30-day design sprint before signing gives HomeGuarantee too much information without protection

*From the partnership proposal, not the PRD.*

Some might worry the design sprint gives CFTH information they could use to replicate HomeGuarantee's model. The actual risk is the reverse: HomeGuarantee learns CFTH's workflows, landlord relationships, and system architecture before any NDA or partnership agreement is in place. If the deal falls through, CFTH has no protection against HomeGuarantee using that knowledge.

However: this is a manageable paper tiger. A lightweight mutual NDA (covering both parties) can be signed before the sprint starts — this is standard practice for any partnership diligence and won't be controversial. The sprint itself is not a term negotiation; it's an operational validation. The real partnership terms (revenue share, board seat) are separate from the sprint and can be negotiated afterward with full information on both sides.

**Fix:** Sign a mutual NDA covering the design sprint period before day one of the sprint. This protects both parties and is a low-friction ask.

---

### P-NEW-2 — The joint steering committee will deadlock

Two CFTH + two HomeGuarantee representatives with a 60-day exit clause sounds like a governance nightmare. In practice: most steering committees of this type don't actually deadlock, because both parties know that escalating to the exit clause destroys the thing both parties want. The real governance risk is not deadlock but slow drift — the committee becomes a status update meeting rather than a decision-making body.

**Fix:** Define decision categories clearly in the partnership agreement: operational decisions (which landlords to recruit, which tenants to prioritize) are HomeGuarantee's to make; program decisions (adding new housing authority partners, changing guarantee limits) require joint approval; strategic decisions (expanding to new cities, changing the revenue share) require unanimous consent. This prevents the committee from becoming a bottleneck on day-to-day operations while preserving CFTH's voice on things that actually affect them.

---

## 🐘 Elephants in the Room (New)

### E-NEW-1 — HomeGuarantee is teaching CFTH how to replace it

The partnership proposal gives CFTH a board seat, outcome data ownership, co-branding, and operational visibility into everything HomeGuarantee does. After 18–24 months, CFTH will have watched the guarantee model work, seen the claims rates, learned which landlords respond to which pitches, and accumulated the credibility to apply for the same grants independently. At that point, CFTH can build its own guarantee fund — and already has the landlord relationships, the HMIS system, the case manager network, and the political relationships.

The partnership has no exclusivity clause, no non-compete, and no minimum commitment term beyond the 60-day exit notice. HomeGuarantee's moat, once the model is proven and visible, is thin.

**Conversation to have:** "What is HomeGuarantee's durable competitive advantage that CFTH cannot replicate in Year 3? Is it the insurance product? The technology platform? The multi-city playbook? If the answer is 'none of the above in Houston,' the business case depends on getting out of Houston and into Chicago and Denver before CFTH can replicate the model locally." This should inform the expansion timing in the release plan.

---

### E-NEW-2 — E3 from the first pre-mortem was not addressed and is now more visible

The first pre-mortem surfaced the racial equity issue: 56% of Houston's homeless population is Black, the affordable vacancies are in low-opportunity neighborhoods, and HomeGuarantee as designed will efficiently place people back into segregated areas. The PRD v1.1 made zero changes to address this.

This is now more visible, not less, because the partnership proposal explicitly co-brands with CFTH — meaning CFTH's name is on whatever the matching algorithm produces. If a journalist maps HomeGuarantee placements by neighborhood and overlays race data, the story writes itself. And CFTH, having spent a decade on Housing First advocacy, would have legitimate grounds to be furious that they were co-branded on a product that reinforced the pattern they've been fighting.

**Conversation to have:** "Should the matching platform include a neighborhood opportunity score? Should HomeGuarantee offer higher guarantee limits (e.g., up to $25K) for units in higher-opportunity zip codes as an incentive for landlords there? Does CFTH have a position on this that should inform product design before we build anything?" This needs to be on the agenda at the initial meeting with CFTH, not surfaced post-launch.

---

### E-NEW-3 — The founding team competency gap (E4 from v1.0) is now more urgent, not less

The updated PRD requires the founding team to: close a philanthropic fund ($2M), negotiate a federal grant sub-recipient arrangement, execute a partnership agreement with a major nonprofit, engage insurance counsel, manage a government relations relationship with HHA, and design a fintech-grade claims adjudication workflow — all before the first landlord is enrolled.

None of this has changed. What's changed is that the pre-launch prerequisite list has made the gap more explicit. The PRD v1.1 mentions "insurance counsel" as a pre-launch requirement but doesn't say who it is. It mentions "legal counsel" for the partnership agreement but doesn't specify whether that's a nonprofit attorney, a financial services attorney, or both (it's both). The founding team needs to name these people before showing this PRD to any external party.

**Conversation to have:** Before the next external meeting, every named item in the pre-launch list should have a named person attached to it: who is the insurance counsel? Who is negotiating with CFTH? Who is writing the CoC grant amendment? If the answer to any of these is "we haven't found that person yet," that's the actual pre-launch prerequisite.

---

### E-NEW-4 — The rollback plan is still undefined

The pre-mortem checklist asks: "What happens to active tenancies if HomeGuarantee ceases operations?" This appeared in the first pre-mortem checklist and has not been answered in v1.1.

This matters for two specific failure modes: (1) the guarantee fund depletes and HomeGuarantee cannot pay pending claims; (2) the CFTH partnership terminates with 60 days' notice while tenants are in active guaranteed tenancies. In both cases, landlords have been promised coverage they may no longer receive. Tenants may face eviction because the landlord's financial protection has evaporated.

This is not a hypothetical edge case — it is the scenario that happens if any of the launch-blocking Tigers come to pass. The product should have a documented contingency: who takes over the active guarantee obligations? Does CFTH step in? Does HHA? Is there a successor guarantee arrangement with a government agency? The answer shapes what the guarantee agreement with landlords actually says.

**Conversation to have:** "If HomeGuarantee is gone in 18 months, what happens to the 100 landlords and 150 tenants with active agreements?" If the honest answer is "we don't know," that answer needs to be disclosed in the guarantee agreement before the first landlord signs.

---

## Revised Go/No-Go Checklist (v1.1 version)

### Pre-launch minimum viable gate (revised from v1.1)

- [ ] CFTH partnership agreement signed — with revenue share scoped explicitly to Houston
- [ ] Mutual NDA covering design sprint period signed before sprint begins
- [ ] Minimum viable capital secured: $500K guarantee fund + $300K operating (scale up during pilot)
- [ ] Claims adjudication process operationally defined: who approves what, in what timeframe, using what criteria
- [ ] "Pause" trigger operationally defined: which stage of the pipeline it stops, what happens to in-progress placements
- [ ] Rollback plan documented: what happens to active tenancies if HomeGuarantee ceases operations
- [ ] Named persons attached to each pre-launch legal/advisory requirement (insurance counsel, CFTH negotiator, grant writer)
- [ ] Financial conflict of interest resolved: CoC sub-recipient vs. revenue share — pick one structure per funding source
- [ ] Phase 1 data schema defined: structured intake form with required fields that mirror future HMIS integration

### Before Phase 2 launch (unchanged from v1.1)
- [ ] Phase 1 claims rate ≤15% over ≥90 days
- [ ] Case manager workflow validated (platform reduces time vs. current)
- [ ] Revenue source confirmed with signed agreement
- [ ] HMIS data sharing agreement executed
- [ ] Landlord retention ≥80% at 6 months

---

## Net Assessment

V1.1 is materially better than v1.0. The three structural fixes were the right ones and they're real improvements. What this second pass reveals is that the mitigations themselves introduced a cluster of mid-weight risks — mostly around operational precision (what does "pause" mean?), financial structure (sub-recipient vs. revenue share), and the long-term moat question (what prevents CFTH from building this themselves?).

None of the new risks are existential on their own. Two are launch-blocking only in the sense that they require a decision before external sharing — not months of work. The most important new finding is the unresolved rollback question: the product is making financial promises to landlords without a documented plan for what happens if the product fails to deliver on them. That is the one item that could create legal liability, not just business risk, if left unresolved.

**Recommended sequencing for the week ahead:**
1. Resolve the pre-launch sequencing (T-NEW-1) — collapse five parallel blockers to two
2. Fix the CoC sub-recipient conflict (T-NEW-2) — clean separation before any grant conversation
3. Add geographic scope to the revenue share in the CFTH proposal
4. Define "pause" operationally in Section 8a
5. Write one paragraph on the rollback plan — even a provisional one — before showing the PRD to CFTH
