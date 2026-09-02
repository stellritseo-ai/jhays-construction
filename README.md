# Jhay's Construction — Website

**Live Site:** [https://www.jhaysconstruction.com](https://www.jhaysconstruction.com)

A residential and commercial general contracting website built with **TanStack Start (React SSR)** and deployed on **Vercel**.

---

## Business Info

| Field | Value |
|---|---|
| Business Name | Jhay's Construction |
| Address | 735 Hulses Corner Rd, Howell Township, NJ 07731 |
| Phone | (732) 673-1569 |
| Email | jhaycconstruction@gmail.com |
| Website | https://www.jhaysconstruction.com |

---

## Tech Stack

- **Framework:** TanStack Start (React SSR / file-based routing)
- **Styling:** Tailwind CSS + custom CSS variables
- **Icons:** Lucide React
- **Deployment:** Vercel (via `nitro` preset)
- **Build Tool:** Vite (`@lovable.dev/vite-tanstack-config`)

---

## SEO Keyword Map

### Primary Keywords (by page)

| Page | URL | Primary Keyword | Title Tag |
|---|---|---|---|
| Homepage | `/` | General Contractor Howell NJ | General Contractor in Howell, NJ \| Jhay's Construction |
| Kitchen | `/services/kitchen-fitting` | Kitchen Remodeling Howell NJ | Kitchen Remodeling in Howell, NJ \| Jhay's Construction |
| Bathroom | `/services/bathroom-fitting` | Bathroom Remodeling Howell NJ | Bathroom Remodeling in Howell, NJ \| Jhay's Construction |
| Basement | `/services/basement-finishing` | Basement Finishing Howell NJ | Basement Finishing in Howell, NJ \| Jhay's Construction |
| Driveways | `/services/driveways` | Driveway Paving Howell NJ | Driveway Paving in Howell, NJ \| Jhay's Construction |
| Patios | `/services/patios` | Patio Installation Howell NJ | Patio Installation in Howell, NJ \| Jhay's Construction |
| Room Additions | `/services/room-additions` | Home Addition Contractor Howell NJ | Home Addition Contractor in Howell, NJ \| Jhay's Construction |
| About | `/about` | General Contractor Howell NJ (brand) | About Jhay's Construction \| General Contractor in Howell, NJ |
| Reviews | `/reviews` | Jhay's Construction Reviews Howell NJ | Customer Reviews \| Jhay's Construction — Howell, NJ |
| Contact | `/contact` | Contact General Contractor Howell NJ | Contact Jhay's Construction \| Howell Township, NJ |
| Estimate | `/estimate` | Free Estimate General Contractor Howell NJ | Free Estimate \| Jhay's Construction — Howell, NJ Contractor |
| Work/Portfolio | `/work` | Construction Projects Howell NJ | Project Gallery \| Jhay's Construction — Howell, NJ |

---

### Service Keywords (Long-tail)

#### Kitchen Remodeling
- kitchen remodeling Howell NJ
- kitchen renovation Howell Township NJ
- kitchen remodeling contractor near me
- custom kitchen cabinets Howell NJ
- kitchen countertop installation Howell NJ
- kitchen remodeling Freehold NJ
- kitchen remodeling Jackson Township NJ
- kitchen remodeling Monmouth County NJ

#### Bathroom Remodeling
- bathroom remodeling Howell NJ
- bathroom renovation Howell Township NJ
- walk-in shower installation Howell NJ
- bathroom tile installation Howell NJ
- custom vanity installation NJ
- bathroom gut renovation Howell NJ
- bathroom remodeling Freehold NJ
- bathroom remodeling Old Bridge NJ

#### Basement Finishing
- basement finishing Howell NJ
- basement finishing contractor Howell Township NJ
- unfinished basement renovation NJ
- basement remodeling Monmouth County NJ
- home theater basement NJ
- basement office finishing Howell NJ
- basement finishing Freehold NJ
- basement finishing Toms River NJ

#### Driveway Paving
- driveway paving Howell NJ
- asphalt driveway Howell Township NJ
- concrete driveway Howell NJ
- paver driveway installation NJ
- driveway sealcoating Howell NJ
- driveway repair Monmouth County NJ
- driveway paving contractor near me Howell NJ
- new driveway installation Howell NJ

#### Patio Installation
- patio installation Howell NJ
- paver patio Howell Township NJ
- outdoor patio contractor NJ
- hardscaping Howell NJ
- pergola installation Howell NJ
- outdoor kitchen Howell NJ
- natural stone patio NJ
- patio installation Monmouth County NJ

#### Home Additions
- home addition contractor Howell NJ
- room addition Howell Township NJ
- home addition Monmouth County NJ
- master suite addition NJ
- second story addition Howell NJ
- sunroom addition Howell NJ
- family room addition NJ
- home extension contractor Howell NJ

#### General Contractor
- general contractor Howell NJ
- general contractor Howell Township NJ
- residential contractor Howell NJ
- commercial contractor Howell NJ
- licensed contractor Howell Township NJ
- home improvement contractor Howell NJ
- general contractor Monmouth County NJ
- contractor near me Howell NJ

---

### Local Service Area Keywords

| City | State | Keywords Targeted |
|---|---|---|
| Howell Township | NJ | All primary keywords (main market) |
| Freehold | NJ | Kitchen, bathroom, basement |
| Jackson Township | NJ | General contractor, kitchen, bathroom |
| Lakewood | NJ | General contractor, patios |
| Brick Township | NJ | General contractor, driveways, patios |
| Toms River | NJ | Basement, patios |
| Old Bridge | NJ | Bathroom, driveways |
| Perth Amboy | NJ | General contractor |
| Woodbridge | NJ | General contractor |

---

### Structured Data (JSON-LD Schemas)

Implemented schemas:

| Schema Type | Location | Pages |
|---|---|---|
| `GeneralContractor` | `__root.tsx` | All pages (global) |
| `Organization` | `__root.tsx` | All pages (global) |
| `WebSite` | `__root.tsx` | All pages (global) |
| `Service` | Each service page | 6 service pages |
| `BreadcrumbList` | Each service page | 6 service pages |

---

## Project Structure

```
jhays/
├── public/
│   ├── robots.txt          # Crawler rules + sitemap reference
│   └── sitemap.xml         # 12 canonical URLs
├── src/
│   ├── routes/
│   │   ├── __root.tsx      # Global layout, JSON-LD schemas, default meta
│   │   ├── index.tsx       # Homepage
│   │   ├── about.tsx
│   │   ├── reviews.tsx
│   │   ├── contact.tsx
│   │   ├── estimate.tsx
│   │   ├── work.tsx
│   │   └── services/
│   │       ├── kitchen-fitting.tsx
│   │       ├── bathroom-fitting.tsx
│   │       ├── basement-finishing.tsx
│   │       ├── driveways.tsx
│   │       ├── patios.tsx
│   │       └── room-additions.tsx
│   ├── components/
│   │   └── sections/
│   │       ├── Header.tsx  # Navigation with SEO service labels
│   │       ├── Footer.tsx  # NAP block, service area links
│   │       ├── Hero.tsx    # Homepage hero with H1 + image alt text
│   │       └── Services.tsx # Service cards with SEO titles + alt text
│   └── assets/
└── vite.config.ts
```

---

## SEO Checklist

- [x] Unique `<title>` tag on every page (keyword-targeted)
- [x] Unique meta `description` on every page (155–160 chars)
- [x] `<link rel="canonical">` on every page
- [x] Open Graph tags (`og:title`, `og:description`, `og:url`, `og:type`)
- [x] Twitter Card tags
- [x] `<html lang="en">` (set in root)
- [x] Single `<h1>` per page (keyword-targeted, geo-specific)
- [x] Descriptive image alt text (hero slider + service cards)
- [x] `robots.txt` — allows all, references sitemap
- [x] `sitemap.xml` — 12 URLs with priorities
- [x] `GeneralContractor` JSON-LD with NAP, areaServed (9 cities), hours
- [x] `Service` JSON-LD on all 6 service pages
- [x] `BreadcrumbList` JSON-LD on all 6 service pages
- [x] NAP consistent in footer `<address>` element
- [x] NAP consistent in TopBar (phone + email)
- [x] Keyword spam removed from footer
- [x] No fabricated statistics
- [x] Service area (9 NJ cities) listed in footer and structured data
- [x] `loading="eager"` on LCP hero image, `lazy` on others

---

## Post-Deploy Actions Required

1. **Google Search Console** → Submit `https://www.jhaysconstruction.com/sitemap.xml`
2. **Google Business Profile** → Claim listing with matching NAP (735 Hulses Corner Rd, Howell Township, NJ 07731)
3. **Schema Validation** → Test at https://search.google.com/test/rich-results
4. **Social Links** → Update TopBar Facebook/Instagram `href="#"` to real URLs
5. **Deck Content Gap** → No deck service currently exists; create `/services/decks` if decking is offered to capture "Deck Contractor Howell NJ" traffic
