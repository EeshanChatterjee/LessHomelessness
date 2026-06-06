# Red-Team: "Prioritize the SaaS prototype — real-world tasks take time"
**Date**: June 6, 2026
**Claim being stress-tested**: The SaaS matching/guarantee platform should be built as a prototype now, ahead of operational setup (CFTH partnership, guarantee fund, workforce pipeline), because software is faster to build than physical/relational infrastructure.

---

## The Steelman First

The user's argument is genuinely reasonable in its bones:

- Software build cycles are measured in weeks; CFTH negotiation, fund capitalization, and hiring are measured in months. Idle engineering capacity while waiting for paperwork is waste.
- A working prototype accelerates the CFTH meeting, funder pitches, and HHA procurement conversations — showing beats telling.
- The PRD's Phase 1 is deliberately manual (Airtable + forms). A prototype could run in parallel without blocking operations.
- Every pre-mortem Tiger left on the table is an operational risk, not a software risk. A careful PM could argue: "Let's derisk what we *can* derisk while the hard stuff grinds through."

That framing is legitimate. The red-team below attacks the specific failure modes within it.

---

## Top Kill-Assumptions (ranked by impact × likelihood × cheapness to test)

---

### Kill-1 — The platform has no users without the operational layer

**Claim:** The SaaS platform can be built and validated independently before the guarantee fund and CFTH partnership are in place.

**Steelman:** You can wire up the matching logic, onboarding flows, and dashboard with synthetic data or mock users. Many B2B SaaS companies beta-test with a small closed cohort before going live. The platform can be demonstrated at the CFTH meeting and to HHA without real data.

**Fails if:** The platform's value cannot be assessed from a demo — only from real landlords using it to accept real placements, backed by a real guarantee. A mockup of the matching platform tells CFTH nothing they don't already know from a Figma prototype. It tells a skeptical landlord (Maria) nothing she needs to know. The only thing that converts Maria is *seeing the first claim paid in 30 days.* The SaaS doesn't move that needle — the fund does.

Put directly: the software matches landlords to tenants. Without landlords enrolled (requires guarantee fund + operational trust-building) and tenants in the pipeline (requires CFTH partnership + HMIS access), the platform matches nobody to nobody. A marketplace with no buyers and no sellers is not a prototype — it is a wireframe with a database.

**Evidence to get this week:** Ask 5 prospective landlords whether seeing a polished web app demo would increase their willingness to enroll, versus seeing the guarantee terms and a reference call with an enrolled Oregon landlord. Predict the answer before asking.

**Kill criterion:** If ≥4 of 5 landlords say the demo does not meaningfully move their decision, the standalone prototype has zero conversion value with the most critical audience.

**Cheapest test:** Figma prototype (2 days to build) shown to 5 landlords. Measures the same thing as an engineering prototype at 5% of the cost.

---

### Kill-2 — Building before workflow discovery commits you to the wrong product

**Claim:** Engineering can start now because the product requirements are clear from the PRD.

**Steelman:** The PRD has a detailed Phase 2 feature spec. The case manager flow, landlord portal, and HMIS integration are described at a level of specificity that seems buildable. A senior engineer could start on the landlord portal today.

**Fails if:** The pre-mortem v2 explicitly flagged this: *"Workflow shadowing Month 1 — before Phase 2 scoping"* is a prerequisite before building. DeShawn's most important product requirement is that the platform reduces time-per-placement. We don't know his current workflow well enough to know what that means in the interface. If he currently lives in HMIS and the HomeGuarantee platform is a separate app, adoption fails — he won't context-switch. If he uses his phone in the field and the platform is desktop-only, adoption fails. These are interface decisions that cannot be made from a PRD — they require 30 days of shadowing.

Building before shadowing = building the wrong thing at engineering speed.

**Evidence to get this week:** Spend 3 hours with one case manager watching them do a placement end-to-end. Before writing a line of code, answer: where do they currently track their pipeline? What apps are already on their phone? When during the day do they interact with landlords? The answers will materially change what gets built.

**Kill criterion:** If workflow shadowing reveals case managers need HMIS-embedded functionality (e.g., a browser extension, not a standalone app), any standalone web app built before shadowing is scrap.

**Cheapest test:** One 3-hour shadowing session costs nothing but the PM's time. It de-risks 3 months of engineering.

---

### Kill-3 — A Figma prototype does 90% of the communication job at 10% of the engineering cost

**Claim:** Building a real prototype is better than a mockup for CFTH meetings and funder pitches.

**Steelman:** A working prototype is more persuasive than static screens. Engineers can demo live interactions, show real data flows, and respond to "what happens if…" questions in real time. This is more compelling to sophisticated audiences.

**Fails if:** The primary audiences in the next 60 days — CFTH's Executive Director (James), philanthropic funders, and potentially Patricia at HHA — are not evaluating technical execution. They are evaluating: *Does this solve the right problem? Does the team understand our world? Can they be trusted?* A polished Figma prototype answers all three questions at the same cost as a conversation and a mockup. A working full-stack app answers the same questions and costs 20× more to build. The marginal persuasion value of engineering vs. Figma at this stage rounds to zero with sophisticated non-technical audiences.

There is one exception: if the goal is to recruit an engineering co-founder or a CTO, a working prototype is valuable signal about execution ability. That's a talent acquisition use case, not a product validation use case.

**Evidence to get this week:** Ask CFTH's program team what they want to see at the initial meeting. Predict they will say "tell us how the guarantee works and what CFTH's role is" — not "show us the software."

**Kill criterion:** If every CFTH and funder meeting in the next 60 days ends with "we need to see a working platform before we proceed" rather than "let's sign the partnership agreement and run the sprint," the prototype-first argument is validated. Not before.

**Cheapest test:** Schedule the CFTH initial meeting. Walk in with a Figma prototype and the partnership proposal. If they ask for a working app before proceeding, build the app. If they sign, you saved 3 months.

---

### Kill-4 — The real sequencing risk is trust, not technology

**Claim:** Technology is the constraint — build it faster and the deal moves faster.

**Steelman:** In many B2B SaaS businesses, a working demo is the difference between "interesting idea" and "let's talk contract." Moving the product forward creates momentum.

**Fails if:** Every launch-blocking Tiger in both pre-mortems was relational or financial, not technical:
- T1: Guarantee fund depletes — *financial*
- T2: HHA procurement stalls — *bureaucratic*  
- T3: HMIS data sharing blocked — *legal/relational*
- T-NEW-1: Pre-launch prerequisites deadlock — *organizational*
- T-NEW-2: CoC conflict of interest — *financial/legal*
- E1: CFTH sees HomeGuarantee as competition — *relational*
- E2: Case management quality outside HomeGuarantee's control — *organizational*

Zero of the identified kill-assumptions are "the platform didn't work" or "the matching algorithm was wrong" or "the UI was too confusing." Technology is the one risk in this product that is both the cheapest to fix and the least likely to be fatal.

Investing engineering time ahead of relationship-building, fund capitalization, and legal clarity is solving the wrong problem fast.

**Kill criterion:** If by Month 3, HomeGuarantee has a working app but no signed CFTH partnership, no capitalized guarantee fund, and no enrolled landlords — the app is worthless. If it has a signed partnership, a capitalized fund, and 10 enrolled landlords running on Airtable — it can close deals today.

**Cheapest test:** This one requires no experiment. Review the pre-launch gate: CFTH agreement + minimum capital. Neither is unblocked by software. The constraint is not engineering.

---

## What's Well-Reasoned

The user's instinct is right about one specific thing: **a lightweight prototype is a legitimate parallel workstream, not an alternative to operations.**

The PRD's Phase 1 being Airtable-first was deliberate — to run 50 real placements before building software. But there is no rule that says nobody can be building a Figma prototype or a no-code proof-of-concept during that same period, as long as:
1. It's explicitly scoped as a communication tool, not a product build
2. It is not treated as a substitute for workflow shadowing before engineering starts
3. Engineering spec does not get locked until after the first 30 days of operations

The claim "real-world tasks take time and physical effort" is exactly right. That's not a reason to do them later — it's a reason to start them immediately and use the parallel time for lightweight prototyping, not full-stack engineering.

---

## What I Couldn't Assess

- **Team composition**: If there's a developer on the founding team with idle time, a no-code prototype on Bubble or Retool in 2 weeks is genuinely low-cost and high-value. The calculus changes based on available capacity.
- **CFTH meeting timing**: If the CFTH meeting is 6 weeks out, there may genuinely be engineering capacity to use in the interim. The red-team above assumes the CFTH meeting is imminent and operational setup is the bottleneck — verify the actual calendar.
- **Investor audience**: If HomeGuarantee is preparing for a funding round where technical investors will be in the room, a working prototype carries more weight than with program officers. Audience matters.

---

## Recommended Sequencing

```
NOW (Week 1–2):
  ├── START: CFTH partnership negotiation
  ├── START: Guarantee fund funder outreach
  ├── START: Legal check (TX PM licensing + HOA law)
  └── PARALLEL: Figma prototype (2 days) for CFTH meeting

MONTH 1:
  ├── Case manager workflow shadowing (30 days, prerequisite to engineering)
  ├── First landlord recruitment calls (10 conversations)
  └── PARALLEL: No-code ops tool (Airtable) designed for Phase 1 manual workflow

MONTH 2–3 (after shadowing, after CFTH signed):
  └── Engineering spec written → Phase 2 platform build begins

BUILD ORDER WITHIN PLATFORM:
  1. Case manager intake form (structured, HMIS-mirroring fields) — enables Phase 1 manual ops
  2. Landlord portal (enrollment, unit listing, claim filing)
  3. Matching dashboard
  4. HMIS integration (when data sharing agreement is executed)
```

The prototype is not the wrong idea. The priority order is.
