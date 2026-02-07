/**
 * Design Tokens for Brand Presentation
 * 
 * This file contains all centralized design tokens.
 * Edit values here to affect all slides that use these tokens.
 * 
 * @see .agent/docs/STYLE-GUIDE.md for documentation
 */

// =============================================================================
// TYPOGRAPHY
// =============================================================================

export const typography = {
    /** Main slide titles (e.g., "SQC SYSTEM", "Logo Architecture") */
    heading: {
        hero: "text-3xl lg:text-5xl font-black tracking-widest uppercase leading-none",
        section: "text-2xl lg:text-4xl font-black uppercase tracking-tighter leading-[0.9]",
        sectionSm: "text-xl lg:text-2xl font-black uppercase tracking-tighter leading-[0.9]",
        card: "text-base font-black",
        cardSm: "text-sm font-black",
        tagline: "text-2xl lg:text-5xl font-black uppercase tracking-[calc(-0.06em)] leading-[0.8]",
    },

    /** Body/description text */
    body: {
        lg: "text-base lg:text-xl font-light leading-relaxed italic",
        md: "text-sm font-light leading-relaxed",
        sm: "text-xs font-light leading-relaxed",
        xs: "text-[11px] font-light leading-relaxed",
    },

    /** Labels, tags, and monospace text */
    label: {
        tag: "text-[9px] font-mono font-black tracking-[0.3em] uppercase",
        tagSm: "text-[8px] font-mono font-black tracking-[0.2em] uppercase",
        status: "text-[9px] font-mono font-black tracking-widest uppercase",
        hex: "text-xs font-mono font-black tracking-[0.2em]",
        hexSm: "text-[10px] font-mono font-black tracking-[0.15em]",
        system: "text-[10px] font-mono font-black tracking-[0.3em] uppercase",
    },
} as const;

// =============================================================================
// SPACING
// =============================================================================

export const spacing = {
    /** Main content container */
    container: {
        default: "max-w-[1200px] mx-auto px-6",
        wide: "max-w-[1400px] mx-auto px-8",
        narrow: "max-w-[1000px] mx-auto px-6",
    },

    /** Vertical section spacing */
    section: {
        stack: "space-y-16",
        stackSm: "space-y-12",
        stackXs: "space-y-8",
        padding: "pt-12 pb-20",
        paddingSm: "pt-8 pb-12",
    },

    /** Header margins */
    header: {
        bottom: "mb-12",
        bottomSm: "mb-8",
        bottomXs: "mb-4",
    },

    /** Grid gaps */
    gap: {
        xl: "gap-8",
        lg: "gap-6",
        md: "gap-4",
        sm: "gap-3",
        xs: "gap-2",
    },

    /** Padding */
    padding: {
        card: "p-6",
        cardLg: "p-8",
        cardSm: "p-4",
        cardXs: "p-3",
    },
} as const;

// =============================================================================
// CARD STYLES
// =============================================================================

export const cards = {
    /** Border radius */
    radius: {
        hero: "rounded-[2rem]",
        lg: "rounded-[1.5rem]",
        md: "rounded-xl",
        sm: "rounded-lg",
        full: "rounded-full",
    },

    /** Shadows */
    shadow: {
        hero: "shadow-[0_0_60px_rgba(0,0,0,0.5)]",
        lg: "shadow-xl",
        md: "shadow-lg",
        sm: "shadow-md",
    },

    /** Background styles (combine with classes) */
    bg: {
        glass: "bg-[#0B1221] backdrop-blur-2xl border border-white/10",
        glassDark: "bg-[#0B1221] backdrop-blur-3xl border border-white/10",
        glassLight: "bg-white/90 backdrop-blur-2xl border border-white/10",
        subtle: "bg-white/[0.02] border border-white/5",
        danger: "bg-white/[0.02] border border-red-500/10",
        success: "bg-[#0B1221] border border-green-500/10",
        stage: "bg-[#0F1629]",
        stageLight: "bg-[#E2E8F0]",
    },
} as const;

// =============================================================================
// ICONS & INDICATORS
// =============================================================================

export const icons = {
    /** Icon sizes */
    size: {
        xl: "w-12 h-12",
        lg: "w-10 h-10",
        md: "w-8 h-8",
        sm: "w-5 h-5",
        xs: "w-4 h-4",
    },

    /** Icon containers (button-like wrappers) */
    container: {
        lg: "w-12 h-12 rounded-xl",
        md: "w-10 h-10 rounded-xl",
        sm: "w-8 h-8 rounded-full",
        xs: "w-6 h-6 rounded-full",
    },

    /** Status indicator dots */
    indicator: {
        pulse: "w-1.5 h-1.5 rounded-full animate-pulse",
        pulseLg: "w-2 h-2 rounded-full animate-pulse",
    },
} as const;

// =============================================================================
// ANIMATIONS
// =============================================================================

export const animation = {
    /** Duration values */
    duration: {
        fast: "duration-300",
        normal: "duration-700",
        slow: "duration-1000",
        hero: "duration-[1500ms]",
    },

    /** Framer Motion easings */
    ease: {
        smooth: [0.16, 1, 0.3, 1],
        spring: { type: "spring", stiffness: 100, damping: 30 },
        springBounce: { type: "spring", damping: 15 },
    },

    /** Common transitions */
    transition: {
        base: "transition-all",
        colors: "transition-colors",
        transform: "transition-transform",
    },
} as const;

// =============================================================================
// COMPOSITE STYLES (Frequently used combinations)
// =============================================================================

export const composites = {
    /** Standard glass card */
    glassCard: `${cards.bg.glass} ${cards.radius.lg} ${cards.shadow.lg} ${spacing.padding.card}`,

    /** Hero/immersive stage card */
    heroCard: `${cards.bg.glassDark} ${cards.radius.hero} ${cards.shadow.hero} ${spacing.padding.cardLg}`,

    /** Light card (for contrast sections) */
    lightCard: `${cards.bg.glassLight} ${cards.radius.lg} ${cards.shadow.lg} ${spacing.padding.card}`,

    /** Subtle container */
    subtleCard: `${cards.bg.subtle} ${cards.radius.lg} ${cards.shadow.md} ${spacing.padding.card}`,

    /** Section header (tag + title combo) */
    sectionHeader: `flex flex-col items-center text-center ${spacing.gap.sm}`,
} as const;

// =============================================================================
// HELPER: Generate class string
// =============================================================================

/**
 * Helper to combine token classes with additional classes
 * @example cx(typography.heading.hero, "text-white", customClass)
 */
export function cx(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(" ");
}

// =============================================================================
// DEFAULT EXPORT
// =============================================================================

export const tokens = {
    typography,
    spacing,
    cards,
    icons,
    animation,
    composites,
    cx,
} as const;

export default tokens;
