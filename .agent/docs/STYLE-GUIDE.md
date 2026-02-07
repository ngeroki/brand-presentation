# Style Guide: Current Design Token Values

> **Last Updated**: 2026-02-01
> **Purpose**: Document current Tailwind classes used across slides
> **Note**: These values will become the basis for `design-tokens.ts`

---

## 🔤 Typography

### Headings
| Token Name | Tailwind Classes | Usage |
|------------|------------------|-------|
| `heading.hero` | `text-3xl lg:text-5xl font-black tracking-widest uppercase leading-none` | Main slide titles (e.g., "SQC SYSTEM") |
| `heading.section` | `text-2xl lg:text-4xl font-black uppercase tracking-tighter leading-[0.9]` | Section headers (e.g., "TECHNICAL SPECTRUM") |
| `heading.card` | `text-base font-black` | Card titles |
| `heading.tagline` | `text-2xl lg:text-5xl font-black uppercase tracking-[calc(-0.06em)] leading-[0.8]` | Brand taglines/manifesto |

### Body Text
| Token Name | Tailwind Classes | Usage |
|------------|------------------|-------|
| `body.lg` | `text-base lg:text-xl font-light leading-relaxed italic` | Large descriptions |
| `body.md` | `text-sm font-light leading-relaxed` | Regular descriptions |
| `body.sm` | `text-xs font-light leading-relaxed` | Small descriptions |

### Labels & Mono
| Token Name | Tailwind Classes | Usage |
|------------|------------------|-------|
| `label.tag` | `text-[9px] font-mono font-black tracking-[0.3em] uppercase` | System tags (SQCTag) |
| `label.status` | `text-[9px] font-mono font-black tracking-widest uppercase` | Status labels (PASSED, FAILED) |
| `label.hex` | `text-xs font-mono font-black tracking-[0.2em]` | Hex codes |

---

## 📐 Spacing

### Section Spacing
| Token Name | Tailwind Classes | Usage |
|------------|------------------|-------|
| `section.container` | `max-w-[1200px] mx-auto px-6` | Main content container |
| `section.stack` | `space-y-16` | Vertical section spacing |
| `section.headerMargin` | `mb-12` | Header bottom margin |

### Grid Gaps
| Token Name | Tailwind Classes | Usage |
|------------|------------------|-------|
| `gap.xl` | `gap-8` | Large grid gap |
| `gap.lg` | `gap-6` | Standard grid gap |
| `gap.md` | `gap-4` | Medium gap |
| `gap.sm` | `gap-3` | Small gap |

### Padding
| Token Name | Tailwind Classes | Usage |
|------------|------------------|-------|
| `padding.card` | `p-6` | Standard card padding |
| `padding.cardLg` | `p-8` | Large card padding |
| `padding.section` | `pt-12 pb-20` | Section vertical padding |

---

## 🃏 Card Styles

### Border Radius
| Token Name | Tailwind Classes | Usage |
|------------|------------------|-------|
| `radius.hero` | `rounded-[2rem]` | Hero/immersive stage cards |
| `radius.card` | `rounded-[1.5rem]` | Standard cards |
| `radius.cardSm` | `rounded-xl` | Small cards |
| `radius.button` | `rounded-full` | Buttons and tags |

### Shadows
| Token Name | Tailwind Classes | Usage |
|------------|------------------|-------|
| `shadow.hero` | `shadow-[0_0_60px_rgba(0,0,0,0.5)]` | Hero stage |
| `shadow.card` | `shadow-xl` | Standard cards |
| `shadow.subtle` | `shadow-lg` | Subtle elevation |

### Backgrounds
| Token Name | Tailwind Classes | Usage |
|------------|------------------|-------|
| `bg.card` | `bg-black/40 backdrop-blur-2xl border border-white/5` | Glass card |
| `bg.cardLight` | `bg-white/90 backdrop-blur-2xl border border-white/10` | Light card |
| `bg.cardDanger` | `bg-white/[0.02] border border-red-500/10` | Error/don't card |
| `bg.stage` | `bg-[#0F1629]` | Dark stage background |

---

## 🎭 Icons & Indicators

| Token Name | Tailwind Classes | Usage |
|------------|------------------|-------|
| `icon.lg` | `w-10 h-10` | Large icons |
| `icon.md` | `w-8 h-8` | Standard icons |
| `icon.sm` | `w-5 h-5` | Small icons |
| `icon.xs` | `w-4 h-4` | Extra small icons |
| `indicator.pulse` | `w-1.5 h-1.5 rounded-full animate-pulse` | Status indicator dot |

---

## ⏱️ Animations

| Token Name | Value | Usage |
|------------|-------|-------|
| `duration.fast` | `duration-300` | Quick transitions |
| `duration.normal` | `duration-700` | Standard transitions |
| `duration.slow` | `duration-1000` | Slower, dramatic transitions |
| `duration.hero` | `duration-[1500ms]` | Hero animations |
| `ease.smooth` | `ease: [0.16, 1, 0.3, 1]` | Smooth spring-like easing |

---

## 🎨 Brand Colors (from brands.ts)

| Brand | Accent Color | Usage |
|-------|--------------|-------|
| SQC | `#C5A572` (Gold) | Tags, highlights, icons |
| MTB | `#D4AF37` (Gold) | Tags, highlights, icons |
| MRE | `#DAA520` (Goldenrod) | Tags, highlights, icons |

---

## 📝 Usage Instructions for Agents

When creating or modifying slides:

1. **Use these values** for consistency
2. **If adding new patterns**, document them here first
3. **After design-tokens.ts is created**, import tokens instead of hardcoding
4. **Test rendering** after any style changes
