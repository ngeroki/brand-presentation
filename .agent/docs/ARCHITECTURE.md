# Brand Presentation Architecture

> **Last Updated**: 2026-02-01
> **Purpose**: Document project structure for agent continuity

---

## 📁 Project Structure Overview

```
brand-presentation/
├── app/                          # Next.js App Router
│   ├── slide/[id]/               # Slide deck presentation mode (all slides)
│   │   ├── page.tsx
│   │   └── SlidePageClient.tsx   # Renders SlideDeck with all slides
│   │
│   └── showcase/[brandId]/       # Brand showcase mode (per-brand view)
│       ├── [variant]/            # full-shape or geometric
│       │   ├── page.tsx
│       │   └── VariantPageClient.tsx  # Renders VisualDna + LogoUsage only
│       ├── layout.tsx            # Sidebar navigation for showcase
│       └── page.tsx
│
├── components/
│   ├── slides/                   # Individual slide components
│   │   ├── VisualDnaNarrativeSlide.tsx   # Full-shape variant DNA
│   │   ├── VisualDnaGeometricSlide.tsx   # Geometric variant DNA
│   │   ├── LogoUsageSlide.tsx            # Logo architecture + usage rules
│   │   ├── LogoImplementationSlide.tsx   # Implementation examples
│   │   ├── PhilosophySlide.tsx           # Brand philosophy/manifesto
│   │   ├── BrandKitSpecsSlide.tsx        # Typography & color specs
│   │   ├── IntroSlide.tsx                # Welcome slide
│   │   ├── ArchitectureSlide.tsx         # Corporate structure
│   │   ├── ClosingSlide.tsx              # Closing slide
│   │   └── ... others
│   │
│   ├── primitives/               # [TO BE CREATED] Shared UI primitives
│   └── SlideDeck.tsx             # Slide navigation container
│
├── styles/
│   ├── sqc-theme.tsx             # SQC brand theme (SQCTag, SQCBackground)
│   ├── design-tokens.ts          # [TO BE CREATED] Centralized design tokens
│   └── globals.css               # Global styles
│
└── data/
    ├── brands.ts                 # Brand definitions (colors, logos, etc.)
    └── mockups.ts                # Mockup image mappings
```

---

## 🔀 Two Navigation Modes

### 1. Slide Deck Mode (`/slide/[id]`)
- **URL Pattern**: `/slide/0`, `/slide/1`, etc.
- **Purpose**: Full presentation with keyboard/swipe navigation
- **Contains**: ALL slides in sequence (Intro → Architecture → Per-brand slides → Closing)
- **File**: `app/slide/[id]/SlidePageClient.tsx`

### 2. Showcase Mode (`/showcase/[brandId]/[variant]`)
- **URL Pattern**: `/showcase/sqc/full-shape`, `/showcase/mtb/geometric`
- **Purpose**: Deep-dive into individual brand with variant toggle
- **Contains**: Only VisualDna + LogoUsage slides
- **File**: `app/showcase/[brandId]/[variant]/VariantPageClient.tsx`
- **Sidebar**: `app/showcase/layout.tsx` provides navigation between brands/slides

---

## 🏢 Brand Data Structure

Brands are defined in `data/brands.ts`:

```typescript
interface BrandData {
  id: string;              // 'sqc', 'mtb', 'mre'
  name: string;
  tagline: string;
  colors: {
    primary: string;
    accent: string;        // Used for highlights, tags, icons
    identity: {
      'full-shape': string;
      'geometric': string;
    }
  };
  logos: {
    transparentFull: string;
    transparentGeo: string;
    transparentFullWhite: string;
    transparentGeoWhite: string;
    nobgFull: string;
    nobgGeo: string;
  };
  brandEssence?: { tagline, description };
  philosophy?: { ... };
}
```

---

## 🎨 Current Styling Approach

### Before Refactor (Current State - 2026-02-01):
- Each slide has **inline Tailwind classes** hardcoded
- No centralized design tokens
- Font sizes, padding, card radii duplicated across files
- Two separate VisualDna files with ~90% duplicate code

### After Refactor (Target State):
- Design tokens in `styles/design-tokens.ts`
- Shared primitives in `components/primitives/`
- Single VisualDnaSlide with variant prop
- Consistent sizing controlled from one place

---

## 📝 Slide Components Overview

| Component | Props | Used In |
|-----------|-------|---------|
| `VisualDnaNarrativeSlide` | `brand` | Showcase (full-shape), Slide deck |
| `VisualDnaGeometricSlide` | `brand` | Showcase (geometric), Slide deck |
| `LogoUsageSlide` | `brand`, `variant` | Both modes |
| `LogoImplementationSlide` | `brand`, `variant` | Slide deck only |
| `PhilosophySlide` | `brand` | Slide deck only |
| `BrandKitSpecsSlide` | `brand` | Slide deck only |
| `IntroSlide` | none | Slide deck only |
| `ArchitectureSlide` | none | Slide deck only |
| `ClosingSlide` | none | Slide deck only |

---

## ⚠️ Known Issues (Pre-Refactor)

1. **Duplicate VisualDna components**: Narrative and Geometric are separate files with 90% same code
2. **Inconsistent sizing**: Same visual elements have different sizes across slides
3. **Hard to update globally**: Changing font sizes requires editing 12+ files
4. **No design tokens**: Tailwind classes are copy-pasted everywhere
