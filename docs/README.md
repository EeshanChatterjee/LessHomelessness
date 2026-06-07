# HomeGuarantee — GitHub Pages Site

This is the public-facing website for the HomeGuarantee Houston pilot. It presents the full business and investment case for both investors and policy/CoC partners.

## How to publish to GitHub Pages

1. Create a new GitHub repository (e.g. `homeguarantee-site` or your preferred name)
2. Copy the entire `site/` folder contents into the repo root
3. Push to `main` branch
4. Go to **Settings → Pages → Source: Deploy from branch → main / (root)**
5. Your site will be live at `https://<your-username>.github.io/<repo-name>/`

## Site structure

```
index.html          Landing page + hero + market overview
problem.html        Problem analysis — barriers, costs, Houston context
solution.html       Platform solution — 4 components, phases, Stabilization tier
model.html          Business model — 5 revenue tiers, fund governance, Works program
financials.html     Financial projections — Year 0–5 P&L + Chart.js charts
personas.html       6 stakeholder personas — Marcus, Patricia, Jerome, Maria, Devon, Ray
risk.html           Risk analysis — 10 kill switches, structural tensions, red team
invest.html         Investment + partnership CTA — dual audience (investors / CoC)

assets/
  css/style.css                          Shared stylesheet (navy/teal/gold palette)
  js/main.js                             Navigation + scroll animations
  HomeGuarantee_Financial_Projection.xlsx  Downloadable Excel model
```

## Tech stack

- Static HTML/CSS/JS — no build step required
- Chart.js (CDN) — financial visualizations on financials.html
- Google Fonts Inter (CDN) — typography
- No framework dependency — works on any static host

## Downloadable asset

`assets/HomeGuarantee_Financial_Projection.xlsx` — 4-sheet financial model with:
- Assumptions sheet
- Annual P&L (Years 0–5) 
- Monthly detail (M1–M36)
- Unit economics by tier

Contact: eeshanchatterjee@gmail.com
