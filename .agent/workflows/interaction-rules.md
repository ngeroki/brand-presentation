---
description: Custom interaction rules for the project
---

// turbo-all

# BrandKit Project Interaction Rules

## 🎯 PROJECT CONTEXT (CRITICAL - READ FIRST)

### Who is the USER?
**A Logo Designer** presenting logo options to a client.

### Who is the CLIENT?
The owner of **Safar Qawiyy Corp (SQC)** and its subsidiaries.

### What companies need logos?
1. **SQC** (Safar Qawiyy Corp) - The parent holding company
2. **MTB** (Matahari Timur Bumi) - Subsidiary
3. **MRE** (Mataram Royal Energi) - Subsidiary

### What are we presenting?
For EACH company, the designer has created **TWO logo options**:

| Option | Style | Characteristics |
|--------|-------|-----------------|
| **Full Shape** | Organic, illustrative | Human, narrative, artistic |
| **Geometric** | Structured, minimal | Technical, systematic, precise |

### What is the GOAL of this site?
**To help the client PICK ONE logo style for each company.**

This is a **client pitch/presentation** - NOT a brand guideline document.

### The Narrative Should:
- Present both options fairly
- Highlight the strengths of each style
- Help the client understand the "feel" of each option
- Guide them toward making a confident choice

---

## ⚠️ IMPORTANT WORKFLOW RULES

### 1. Major Changes Require Approval
**DO NOT proceed with major changes without USER confirmation.**

Major changes include:
- Deleting files or folders
- Restructuring component architecture
- Changing design tokens or color systems
- Modifying navigation or routing
- Any change that affects multiple files

**Always ask first:** "I plan to do X, Y, Z. Should I proceed?"

### 2. Browser Subagent Usage
**DO NOT use browser subagent to verify every change.**

- The USER will verify changes manually
- Using browser subagent for every small change wastes time and tokens
- Only use browser subagent when **explicitly requested** by the USER
- Trust the code changes and TypeScript compilation

---

## 1. Mobile-First / Responsive Design

**CRITICAL RULE**: Every change MUST be applied to both mobile and desktop views.

- When changing colors, backgrounds, or styles - use **base classes** (no responsive prefix) so they apply to ALL screen sizes
- If a responsive prefix is needed (e.g., `sm:`, `md:`, `lg:`), ensure the corresponding mobile style is also defined
- Always test and consider mobile view - mobile is NOT secondary to desktop

### Examples:

✅ **CORRECT** - Applies to all sizes:
```tsx
className="bg-[#0B1221] text-white"
```

⚠️ **BE CAREFUL** - Only applies to large screens:
```tsx
className="lg:bg-[#0B1221] lg:text-white"  // Missing mobile styles!
```

✅ **CORRECT** - Responsive with mobile fallback:
```tsx
className="bg-[#0B1221] text-white sm:text-lg lg:text-xl"  // Base + responsive
```

## 2. Design Tokens

### Primary Colors
| Name | Hex Code | Usage |
|------|----------|-------|
| Dark Royal Blue | `#0B1221` | Cards, Navbar, Dark elements |
| White | `#FFFFFF` | Main background |
| Gold Accent | `#C5A572` | Highlights, accents |

### Text Colors on WHITE Background (outside cards)
- Primary: `text-[#0B1221]`
- Secondary: `text-zinc-500`
- Muted: `text-zinc-400`
- Subtle: `text-zinc-300`

### Text Colors INSIDE Dark Cards (#0B1221 background)
- Primary: `text-white`
- Secondary: `text-white/60`
- Muted: `text-white/40`

### Borders
- On white bg: `border-zinc-200` or `border-[#0B1221]/20`
- On dark cards: `border-white/10`

## 3. Component Structure

All slides and pages should follow this pattern:
- Main background: White (`bg-white`)
- Cards: Dark Royal Blue (`bg-[#0B1221]`)
- Navbar: Dark Royal Blue (`bg-[#0B1221]`)
- Text on white background: Dark (`text-[#0B1221]`, `text-zinc-*`)
- Text inside dark cards: White (`text-white`)

## 4. Testing Checklist

Before completing any UI change:
- [ ] Verify on mobile viewport (375px width)
- [ ] Verify on tablet viewport (768px width)
- [ ] Verify on desktop viewport (1280px+ width)
- [ ] Ensure text is readable on all backgrounds
- [ ] Ensure logos are visible in their containers

---

## 📋 SESSION SUMMARY (2026-02-07)

### What Was Done This Session:

#### 1. Asset Cleanup
- **Deleted orphaned folders:**
  - `/images/mockups/` (duplicate of `/mockups/`)
  - `/logos/full/`, `/logos/fully-shape/`, `/logos/geo/`, `/logos/geometric/` (old structure)
- **Current clean structure:**
  ```
  public/
  ├── logos/
  │   ├── source-full/    (Original full-shape logos)
  │   ├── source-geo/     (Original geometric logos)
  │   ├── nobg/           (No background versions)
  │   └── transparent/    (Transparent versions, 6 variants)
  ├── images/
  │   ├── architecture/   (Architecture page images)
  │   └── backgrounds/    (Background image)
  └── mockups/            (Real-world mockup images)
      ├── sqc/, mtb/, mre/
  ```

#### 2. Codebase Simplification
- **Merged LogoUsageSlide into VisualDnaSlide:**
  - Old: Separate `LogoUsageSlide.tsx` with technical diagrams
  - New: `LogoUsageSection` inside `VisualDnaSlide.tsx` showing logo on different backgrounds
- **Deleted orphaned slide components (previous session):**
  - IntroSlide, BrandKitMainSlide, ClosingSlide, PhilosophySlide, etc.
- **Current slide structure:**
  ```
  components/slides/
  ├── ArchitectureSlide.tsx    (Architecture overview)
  └── VisualDnaSlide.tsx       (Unified: Philosophy + Colors + Logo Usage + Gallery + Compare)
  ```

#### 3. Narrative Updates (Client Pitch Focus)
| Page | Element | Change |
|------|---------|--------|
| Architecture | Tag | "Proposal Identitas Visual" |
| Architecture | Description | "dua arah visual yang bisa Anda pilih" |
| Architecture | Status | "3 Perusahaan × 2 Opsi Logo" |
| Architecture | CTA | "Lihat Opsi Logo" (all 3 companies) |
| Comparison | Tag | "Pilih Gaya Logo Anda" |
| Comparison | Options | "Opsi A: Full Shape (Organik)" / "Opsi B: Geometric (Sistematis)" |
| Comparison | Traits | Indonesian: "Mengalir, Dinamis, Manusiawi" / "Terstruktur, Presisi, Kokoh" |
| Visual DNA | Tags | "Opsi A: Full Shape // SQC" / "Opsi B: Geometric // SQC" |

#### 4. UI Improvements
- **Architecture page:** Added "Lihat Opsi Logo" CTA to MTB and MRE cards
- **Comparison page:** Larger square logo containers (`aspect-square`), premium hover effects
- **Visual DNA cards:** Fixed backgrounds from grey (`bg-black/40`) to dark royal blue (`#0B1221`)
- **Design tokens:** Updated `cards.bg.glass` to use solid `#0B1221`

#### 5. Navigation System
- **Back button in navbar:**
  - From `/showcase/sqc/full-shape` → "Pilih Opsi" → `/showcase/sqc`
  - From `/showcase/sqc` → "Overview" → `/showcase`
  - Not shown on `/showcase` (top level)
- **Compare section at bottom of Visual DNA:**
  - "Bandingkan Opsi" with button to switch between Full Shape ↔ Geometric

---

## 🚧 NEXT STEPS (For UI Polish)

1. Review mockup images for all 3 brands × 2 variants
2. Mobile responsiveness testing
3. Animation and micro-interaction polish
4. Verify all logo paths are correct
5. Final narrative review with client
