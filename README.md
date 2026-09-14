# Cohesys Health Solutions website

Marketing site for **Cohesys Health Solutions** (oncology EMR consulting). Legal name on the site is Cohesys Health Solutions. This is not Cohesys Inc. (BoneTape / cohesys.com).

Stack: Next.js App Router, TypeScript, Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
npm run lint
npm run check:copy
```

## Contact form

Required fields: first name, last name, work email, organization, role, EHR, module/focus, timeline. Comments are optional.

- Default: submit opens a `mailto:accounts@cohesyshealth.com` draft with an encoded body.
- Optional inbox: set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in `.env.local` (see `.env.example`) to POST JSON to Formspree or a compatible endpoint. If that POST fails, the form falls back to mailto.
- Success copy: “Thanks. We will reply from accounts@cohesyshealth.com.”

There is no phone number and no booking widget.

## Cutover from Wix

Point DNS to this app only after Johnny and counsel review privacy and terms. The legal pages are clean public stubs (marketing site, form data, no PHI, no sale of personal information, Massachusetts terms, liability). They are not a substitute for counsel.

Use these redirects (already in `next.config.ts`):

| Old Wix path | New path |
| --- | --- |
| `/book-online` | `/contact` (301/308) |
| `/portfolio` | `/` (301/308) |
| `/terms-conditions` | `/terms` |
| `/privacy-policy` | `/privacy` |

Do not keep the Wix booking calendar or the old “Cohesys Health Sol 1” titles.

## Routes

`/`, `/meditech-expanse-oncology`, `/epic-beacon`, `/oncology-pharmacy-ehr`, `/infusion-nursing-documentation`, `/about`, `/contact`, `/privacy`, `/terms`, plus a 404 page.

## Locked facts (do not invent)

- Tenure line: “Oncology-only EMR consulting since day one.”
- NAP: 201 Burlington Road, Bedford, MA 01730
- Email: accounts@cohesyshealth.com
- Hospital logos with written permission only: Frederick Health, Anderson Hospital, Golden Valley Memorial Healthcare, Signature Healthcare, South County Health, Med Center Health, Bristol Health, Samaritan Health
- Quotes only from Arthur P (IT Director, Anderson Hospital) and Gary C (CIO, South County Health)
- Team credentials as a group only: PMP, BCOP, CPhT, OCN — no named bios
- Platforms: Meditech Expanse and Epic only. Epic Beacon is a live staffed offer; public proof is heavier on Expanse
- No MEDITECH Alliance language, no St Claire, no NCCN / GenomOncology / Varian, no invented Beacon go-live, no Anderson dual-EHR story
