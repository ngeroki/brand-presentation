/**
 * =============================================================================
 * SQC BRAND THEME
 * =============================================================================
 * 
 * This is the SINGLE SOURCE OF TRUTH for all SQC brand styling.
 * 
 * HIERARCHY (from largest to smallest):
 * 1. LAYOUT     - The full page wrapper (background, overlays)
 * 2. SECTION    - Major content blocks (header + content)
 * 3. CARD       - Content containers
 * 4. LABEL      - Small text labels
 * 
 * USAGE:
 * import { sqc } from "@/styles/sqc-theme";
 * 
 * <div className={sqc.layout.root}>
 *   <div className={sqc.layout.background} />
 *   <main className={sqc.layout.content}>
 *     <header className={sqc.section.header}>
 *       <span className={sqc.label.tag}>Standardized Blueprint</span>
 *       <h1 className={sqc.section.title}>Technical <span className={sqc.color.accent}>& Specs</span></h1>
 *       <p className={sqc.section.description}>Description here</p>
 *     </header>
 *     <div className={sqc.card.bright}>Content</div>
 *   </main>
 * </div>
 */

// =============================================================================
// COLORS
// =============================================================================
export const sqcColors = {
    // Primary backgrounds
    background: "#FFFFFF",  // Main white background
    navy: "#1E293B",        // For dark sections/navbar
    navyDeep: "#0F172A",    // Deep navy for accents
    navyDark: "#0B1221",    // Original dark
    gold: "#C5A572",
    goldBright: "#EBB218",

    // Cards (all dark navy)
    cardPrimary: "#0F172A",     // Dark navy cards
    cardSecondary: "#1E293B",   // Slightly lighter
    cardBorder: "#334155",      // Card borders

    // Text on white background (outside cards)
    textOnLight: "text-zinc-900",
    textOnLightMuted: "text-zinc-500",

    // Text on dark cards (inside cards)
    textOnDark: "text-white",
    textOnDarkMuted: "text-white/60",
    textOnDarkSubtle: "text-white/40",
    textAccent: "text-[#C5A572]",
};

// =============================================================================
// CLASS UTILITIES (for use in className)
// =============================================================================
export const sqc = {
    // -------------------------------------------------------------------------
    // LAYOUT - Full page wrapper
    // -------------------------------------------------------------------------
    layout: {
        /** Root container for SQC pages */
        root: "flex flex-col w-full min-h-full bg-white text-zinc-900 overflow-y-auto no-scrollbar scroll-smooth p-0 select-none relative",

        /** Main content area with proper z-index */
        content: "relative z-10 flex-1 flex flex-col",

        /** Standard main container with max-width and padding and correct z-index */
        main: "flex-1 w-full max-w-[1800px] mx-auto py-20 px-8 lg:px-20 flex flex-col relative z-20",
    },

    // -------------------------------------------------------------------------
    // SECTION - Header area for each slide
    // -------------------------------------------------------------------------
    section: {
        /** Header container (centered) */
        header: "flex flex-col items-center text-center gap-6 max-w-4xl mx-auto mb-20",

        /** Chapter title (large - for DNA pages) */
        titleChapter: "text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-white uppercase",

        /** Section title (medium - for Specs/Usage pages) */
        titleSection: "text-4xl lg:text-5xl font-black tracking-tight text-white uppercase",

        /** Description paragraph */
        description: "font-light text-base lg:text-lg leading-relaxed max-w-2xl text-white/50",

        /** Spacing between major sections on a single slide */
        spacer: "h-24 lg:h-32",

        /** Margin below headers */
        headerBottom: "mb-20 lg:mb-24",

        /** Uniform Section Anchor (for sections within a slide like Otoritas, Narasi, etc.) */
        anchor: "flex flex-col items-center text-center gap-2 mb-12 lg:mb-16",
        anchorTitle: "text-lg lg:text-xl font-black uppercase tracking-[0.2em] text-white",
        anchorTag: "text-[10px] font-black uppercase tracking-[0.4em] text-[#C5A572]",
    },

    // -------------------------------------------------------------------------
    // LABEL - Small text elements
    // -------------------------------------------------------------------------
    label: {
        /** Tag above section title */
        tag: "inline-flex items-center gap-3 px-3 py-1 bg-[#0B1221] border-white/10 rounded-full border text-[10px] font-mono tracking-widest uppercase text-[#C5A572] font-bold",

        /** Sub-section label (e.g., "— GRID SYSTEM —") */
        sub: "text-[10px] tracking-[0.4em] text-white/30 uppercase font-bold",
    },

    // -------------------------------------------------------------------------
    // CARD - Content containers
    // -------------------------------------------------------------------------
    card: {
        /** Primary dark royal blue card */
        primary: "rounded-2xl border bg-[#0B1221] border-white/10",

        /** Secondary card (slightly lighter) */
        secondary: "rounded-2xl border bg-[#0F1729] border-white/10",

        /** Logo container (dark royal blue) */
        logo: "rounded-2xl border bg-[#0B1221] border-white/10",

        /** Glass effect card */
        glass: "rounded-2xl border bg-[#0B1221]/95 border-white/10 backdrop-blur-xl",
    },

    // -------------------------------------------------------------------------
    // COLOR - Accent colors for inline use
    // -------------------------------------------------------------------------
    color: {
        accent: "text-[#C5A572]",
        accentBg: "bg-[#C5A572]",
    },
};

// =============================================================================
// BACKGROUND COMPONENT (JSX - for the luxury background)
// =============================================================================
import Image from "next/image";

/**
 * SQCBackground - The luxury background with mesh texture and glow effects.
 * Place this at the beginning of your SQC layout, before the content.
 */
export function SQCBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-100/50" />

            {/* Subtle glow accents */}
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#C5A572]/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-zinc-200/30 rounded-full blur-[120px]" />
        </div>
    );
}

// =============================================================================
// TAG COMPONENT (JSX - for the animated tag)
// =============================================================================
interface SQCTagProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

/**
 * SQCTag - The pill-shaped tag with animated dot.
 */
export function SQCTag({ children, className = "", style }: SQCTagProps) {
    return (
        <div className={`${sqc.label.tag} ${className}`} style={style}>
            <div className="w-1.5 h-1.5 bg-current rounded-full animate-pulse" />
            {children}
        </div>
    );
}
