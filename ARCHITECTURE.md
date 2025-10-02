# PMG Guide Architecture Documentation

This document outlines the planned architecture for the PMG Guide stone/granite business website, designed to be scalable, maintainable, and user-friendly.

## 1. Information Architecture

The site is organized around a simple, focused route structure:

- `/` — Hero + 3 fast paths (Projects, Stone Series, Contact). One CTA.
- `/projects` — Filterable gallery (industry, finish, color, location). Server-side pagination.
- `/projects/[slug]` — Case study page (hero image, specs, stones used).
- `/series` — Filterable stone series catalog (color family, finish, availability).
- `/series/[slug]` — Product detail (specs, downloadable sheet, related projects).
- `/about` — Short credibility page.
- `/contact` — Simple form (name/email/message) + mailto fallback.
- `/api/*` — Integrations + webhooks.

### Hard Constraints

- Max 5 top-level nav items.
- Search appears in Projects & Series only (not site-wide—keeps header clean).
- Every detail page has a "Next/Previous" to avoid dead ends.

## 2. Content Model

### Core Collections

#### StoneSeries
- `title` (string, unique)
- `slug` (string)
- `summary` (short text, ≤160 chars)
- `color_family` (enum: white/gray/beige/black/other)
- `finish` (enum: honed/polished/brushed/leathered)
- `dimensions` (string)
- `origin` (string)
- `availability_status` (enum: in_stock/backorder/discontinued)
- `datasheet_url` (url, optional)
- `gallery` ([image])
- `tags` ([string])
- `seo` (title, description)
- `featured` (boolean)

#### Project
- `title`, `slug`, `summary`
- `location` (city, state)
- `industry` (enum: residential/commercial/hospitality/public)
- `year` (int, yyyy)
- `stones_used` ([ref -> StoneSeries])
- `specs` (key/value list)
- `hero_image` (image), `gallery` ([image])
- `body_md` (markdown)
- `seo`

#### Asset
- `file` (image/pdf), `alt`, `credit`
- Used by both Series and Projects

#### Tag
- `name`, `slug`

### Why These Fields?

- Keeps cards predictable (we only surface summary + 2–3 spec chips).
- Allows deterministic filters (enums) vs. fragile free text.
- Relational `stones_used` enables robust "related" blocks and future cross-sell.

## 3. Tech Stack + Structure

- **Next.js (App Router)** for file-based routes, Route Handlers under `/app/api`.
- **TypeScript** for stable models and IDE autocomplete.
- **Tailwind + shadcn/ui** for clean, consistent UI.
- **Headless CMS** options:
  - Git-only + PR workflow: **Contentlayer + Markdown/JSON in `/content`**
  - Non-dev uploads + webhooks: **Payload** (self-host) or **Sanity** (SaaS)
- **Image pipeline**: `next/image` + Cloudinary/S3; enforce max dimensions at upload.
- **Search/filters**: server-side queries; for scale later, add **Algolia/Meilisearch** via adapter.

## 4. Component Inventory (Reusable, Small)

- `PageHeader` (title, breadcrumb)
- `Card` (image, title, meta chips, href)
- `Filters` (checkbox group, single-select enum, clear-all)
- `SearchInput` (debounced, controlled)
- `SpecTable` (key/value)
- `Gallery` (lightbox on click; no carousels by default)
- `Markdown` (sanitized)
- `Pagination` (page/limit, SSR)
- `EmptyState` (icon, message, primary link)

> Rule: Every component has **one** responsibility and zero business logic. Business logic lives in server actions or API handlers.

## 5. API Surface

- `GET /api/series` — list with filters: `?q=&color_family=&finish=&availability=&page=&limit=`
- `GET /api/series/[slug]`
- `GET /api/projects` — list with filters: `?q=&industry=&year=&stone=slug&page=&limit=`
- `GET /api/projects/[slug]`
- `POST /api/webhooks/<provider>` — CMS or DAM webhooks (upsert; revalidate routes)
- `POST /api/contact` — send via provider (Resend, Postmark). Rate-limit by IP.

### Server Patterns

- Use **Zod** to validate all query params and payloads.
- **Revalidation** using Next's `revalidatePath('/series')` on webhook.
- Cache list endpoints (60–300s) with tag invalidation.

## 6. Hard Facts (Data-Driven Design Decisions)

- **Users scan, don't read:** keep card titles ≤55 chars; summary ≤120; more than ~12 filters reduces engagement. (So: 4–6 filters max.)
- **Predictable pagination beats infinite scroll** for B2B catalogs (stable URLs, better SEO, easier analytics funnels).
- **One primary CTA per view** increases click clarity and avoids split attention.
- **Enum filters** outperform free-text for accuracy and speed when your dataset is curated.
- **Non-modal image zoom** (lightbox) reduces back-and-forth navigation and cuts bounce from detail pages.
- **Server-side filtering** avoids hydration jank and is friendlier to future integrations.

## 7. Copy & UI Constraints

- Headlines ≤9 words; subheads ≤18; bullets ≤12 words.
- Max 6 cards "above the fold" on desktop; 4 on mobile.
- One accent color (tokens: `--accent`, `--text`, `--muted`, `--radius`).
- Never show more than 3 "meta chips" on a card (e.g., Finish, Color, Availability).

## 8. Backend Integration Hooks

### Webhook Contract Example

```json
{
  "event": "series.updated",
  "slug": "calacatta-oro",
  "data": {
    "title": "Calacatta Oro",
    "finish": "polished",
    "color_family": "white",
    "availability_status": "in_stock"
  }
}
```

### Upsert Service
Server-only: `upsertSeries(payload)` → writes to DB/JSON and triggers `revalidatePath('/series/[slug]')`.

### Provider Adapters
- `/lib/integrations/{sanity|payload|airtable}.ts` — swapping CMS is a file change, not a rewrite.
- `/lib/search/{none|meili|algolia}.ts` — identical function signature for different providers.

## 9. SEO + Performance

- `generateMetadata` per route; write canonical URLs; JSON-LD for product & project.
- Preload first 6 card images only; lazy-load rest.
- Serve WebP/AVIF; hard cap hero to 200–300KB.
- No third-party fonts unless truly needed (system stack is fine).

## 10. Admin/Upload Flow

- Drag-drop images → auto-resize to multiple breakpoints at upload.
- Required fields highlighted; enums via dropdowns.
- "Preview draft" link renders the actual Next.js page with `draft=true`.
- Publish triggers webhook → site revalidates within seconds.

## Implementation Status

Current repository contains:
- ✅ TypeScript types and interfaces (`src/types/content.ts`)
- ✅ Filter utility functions (`src/lib/filters.ts`)
- 🔄 React Router-based application (to be migrated to Next.js)
- ⏳ Planned: Full Next.js App Router implementation
- ⏳ Planned: Headless CMS integration
- ⏳ Planned: API routes and webhooks
- ⏳ Planned: Component library based on shadcn/ui
