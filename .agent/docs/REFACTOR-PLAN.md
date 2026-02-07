# Refactor Plan: Design System Architecture

> **Created**: 2026-02-01
> **Status**: 🔄 In Progress
> **Goal**: Create two-layer architecture (Tokens + Components) for maintainability

---

## 🎯 Objectives

1. **Centralized Tokens**: Edit once → affects all slides
2. **Standalone Sections**: Edit one slide without affecting others
3. **Merged Components**: Reduce duplicate code (VisualDna)
4. **Preserved Layouts**: Visual appearance stays exactly the same

---

## 📋 Task Checklist

### Phase 1: Documentation ✅
- [x] Create ARCHITECTURE.md
- [x] Create REFACTOR-PLAN.md (this file)
- [x] Create STYLE-GUIDE.md

### Phase 2: Design Tokens ✅
- [x] Create `styles/design-tokens.ts`
- [x] Extract typography tokens (heading sizes, body, labels)
- [x] Extract spacing tokens (padding, gaps, margins)
- [x] Extract card tokens (radius, shadow, border)
- [x] Extract animation tokens (durations, easings)

### Phase 3: Primitives ✅
- [x] Create `components/primitives/Card.tsx`
- [x] Create `components/primitives/SectionHeader.tsx`
- [x] Create `components/primitives/Tag.tsx`
- [x] Create `components/primitives/index.ts` (barrel export)

### Phase 4: Merge VisualDna ✅
- [x] Create unified `VisualDnaSlide.tsx` with variant prop
- [x] Migrate Narrative content
- [x] Migrate Geometric content
- [x] Update imports in VariantPageClient.tsx
- [x] Update imports in SlidePageClient.tsx
- [ ] Delete old VisualDnaNarrativeSlide.tsx (pending verification)
- [ ] Delete old VisualDnaGeometricSlide.tsx (pending verification)

### Phase 5: Update Existing Slides ⬜
- [ ] Update LogoUsageSlide.tsx to use tokens
- [ ] Update LogoImplementationSlide.tsx to use tokens
- [ ] Update PhilosophySlide.tsx to use tokens
- [ ] Update BrandKitSpecsSlide.tsx to use tokens
- [ ] Update IntroSlide.tsx to use tokens
- [ ] Update ArchitectureSlide.tsx to use tokens
- [ ] Update ClosingSlide.tsx to use tokens

### Phase 6: Cleanup ⬜
- [ ] Remove unused CSS classes
- [ ] Verify all slides render correctly
- [ ] Test both navigation modes
- [ ] Update documentation

---

## 📊 Progress Log

| Date | Phase | Actions | Notes |
|------|-------|---------|-------|
| 2026-02-01 | Pre-refactor | Updated VisualDnaNarrativeSlide sizes | Reduced fonts, padding, cards |
| 2026-02-01 | Pre-refactor | Updated VisualDnaGeometricSlide sizes | Matched narrative sizing |
| 2026-02-01 | Pre-refactor | Updated LogoUsageSlide sizes | Synced with Visual DNA |
| 2026-02-01 | Phase 1 | Created documentation files | ARCHITECTURE.md, this file, STYLE-GUIDE.md |
| 2026-02-01 | Phase 2 | Created design-tokens.ts | Typography, spacing, cards, icons, animation tokens |
| 2026-02-01 | Phase 3 | Created primitives | Card, SectionHeader, Tag components |
| 2026-02-01 | Phase 4 | Created unified VisualDnaSlide | Merged Narrative + Geometric into single component |
| 2026-02-01 | Phase 4 | Updated imports | VariantPageClient + SlidePageClient now use VisualDnaSlide |

---

## 🔄 Rollback Instructions

If something goes wrong:

1. **Git reset**: `git checkout -- .` (discard all changes)
2. **Individual file**: `git checkout -- path/to/file.tsx`
3. **Stash current changes**: `git stash` before major changes

---

## 📝 Notes for Future Agents

- **Visual layout should NOT change** - only code organization
- **Test after each phase** - verify slides render correctly
- **Read STYLE-GUIDE.md** for current token values
- **Do not skip phases** - tokens must exist before primitives
