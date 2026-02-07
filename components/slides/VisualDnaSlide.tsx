/**
 * VisualDnaSlide - Unified Visual DNA Component
 * 
 * A single component that handles both "full-shape" (narrative) and "geometric" variants.
 * Uses design tokens for consistent styling.
 * 
 * @see .agent/docs/ARCHITECTURE.md for context
 */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight, Compass, Shield, Users, Layers, Activity, Eye,
    Globe, Zap, Landmark, Ruler, Anchor, Scale, Layout
} from "lucide-react";
import { BrandData } from "@/data/brands";
import { SQCBackground, SQCTag } from "@/styles/sqc-theme";
import { mockupImages } from "@/data/mockups";
import { typography, spacing, cards, animation, cx } from "@/styles/design-tokens";

// =============================================================================
// TYPES
// =============================================================================

type Variant = 'full-shape' | 'geometric';

interface VisualDnaSlideProps {
    brand: BrandData;
    variant?: Variant;
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export default function VisualDnaSlide({ brand, variant = 'full-shape' }: VisualDnaSlideProps) {
    const accentColor = brand.colors.accent;
    const isGeometric = variant === 'geometric';

    return (
        <div className="relative min-h-screen bg-white text-[#0B1221] selection:bg-[#C5A572] selection:text-[#0B1221] overflow-hidden pb-20">
            <SQCBackground />

            {/* Dynamic Background */}
            <BackgroundLayer accentColor={accentColor} variant={variant} />

            {/* Main Content */}
            <div className={cx(spacing.container.default, "pt-12 pb-24 relative z-10")}>

                {/* Header Section */}
                {isGeometric
                    ? <GeometricHeader brand={brand} accentColor={accentColor} />
                    : <NarrativeHeader brand={brand} accentColor={accentColor} />
                }

                {/* Philosophy/Logic Section */}
                {isGeometric
                    ? <BlueprintAnatomySection brand={brand} accentColor={accentColor} />
                    : <ImmersiveEssenceSection brand={brand} accentColor={accentColor} />
                }

                {/* Color System Section */}
                <ColorSystemSection brand={brand} accentColor={accentColor} variant={variant} />

                {/* Logo Usage Section - Logo on different backgrounds */}
                <LogoUsageSection brand={brand} accentColor={accentColor} variant={variant} />

                {/* Gallery Section */}
                <GallerySection brand={brand} accentColor={accentColor} variant={variant} />

                {/* Compare Other Option Section */}
                <CompareOptionSection brand={brand} accentColor={accentColor} variant={variant} />

            </div>

            {/* Footer */}
            <Footer accentColor={accentColor} variant={variant} />

            {/* Global Styles */}
            <style jsx global>{`
        .perspective-2000 { perspective: 2000px; }
      `}</style>
        </div>
    );
}

// =============================================================================
// SHARED: BACKGROUND LAYER
// =============================================================================

function BackgroundLayer({ accentColor, variant }: { accentColor: string; variant: Variant }) {
    const isGeometric = variant === 'geometric';

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {/* Grid Pattern */}
            <div
                className="absolute inset-0"
                style={{
                    opacity: isGeometric ? 0.05 : 0.03,
                    backgroundImage: `linear-gradient(to right, ${accentColor} 1px, transparent 1px), linear-gradient(to bottom, ${accentColor} 1px, transparent 1px)`,
                    backgroundSize: isGeometric ? '100px 100px' : '40px 40px',
                    maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
                }}
            />

            {/* Animated Element */}
            {isGeometric ? (
                // Scanline for geometric
                <motion.div
                    animate={{ top: ['-10%', '110%'] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-px blur-[2px]"
                    style={{ background: `linear-gradient(to right, transparent, ${accentColor}80, transparent)` }}
                />
            ) : (
                // Floating blob for narrative
                <motion.div
                    animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full blur-[120px]"
                    style={{ backgroundColor: accentColor, filter: 'blur(120px) saturate(1.5)' }}
                />
            )}
        </div>
    );
}

// =============================================================================
// NARRATIVE: HEADER
// =============================================================================

function NarrativeHeader({ brand, accentColor }: { brand: BrandData; accentColor: string }) {
    const getNarrative = () => {
        if (brand.id === 'mtb') return { title: "Energi", subtitle: "Awal & Potensi", accent: "from-[#FFBE18] to-[#B17814]" };
        if (brand.id === 'mre') return { title: "Otoritas", subtitle: "Mandat & Kendali", accent: "from-[#E6AF4B] to-[#D6A34A]" };
        return { title: "Kiblat", subtitle: "Arah & Nilai", accent: "from-[#C5A572] to-[#EBB218]" };
    };
    const narrative = getNarrative();

    return (
        <header className="relative flex flex-col items-center text-center space-y-6 mb-16">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                <SQCTag className="px-4 py-1.5 bg-white/5 backdrop-blur-xl border-white/10">
                    Opsi A: Full Shape // {brand.id.toUpperCase()}
                </SQCTag>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="space-y-2"
            >
                <h1 className={cx(typography.heading.hero, "text-[#0B1221] uppercase text-5xl lg:text-7xl tracking-tighter")}>
                    {narrative.title} sebagai <br />
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${narrative.accent} filter drop-shadow-[0_0_30px_rgba(197,165,114,0.3)]`}>
                        {narrative.subtitle}
                    </span>
                </h1>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ delay: 0.5, duration: 1 }}
                className={cx(typography.body.md, "max-w-2xl text-slate-600 italic")}
            >
                "{brand.narrativePhilosophy?.summary || brand.philosophySummary}"
            </motion.p>
        </header>
    );
}

// =============================================================================
// GEOMETRIC: HEADER
// =============================================================================

function GeometricHeader({ brand, accentColor }: { brand: BrandData; accentColor: string }) {
    return (
        <header className="relative w-full flex flex-col items-center px-4 pt-8 mb-12 z-10">
            {/* Rotating Ring */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] border border-blue-500/[0.03] rounded-full animate-[spin_100s_linear_infinite] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center text-center space-y-4 w-full max-w-[1000px]"
            >
                <div className="space-y-3">
                    <SQCTag className="px-4 py-1.5 bg-white/5 border-white/10" style={{ color: accentColor }}>
                        Opsi B: Geometric // {brand.id.toUpperCase()}
                    </SQCTag>
                    <h1 className={cx(typography.heading.hero, "text-[#0B1221] text-5xl lg:text-7xl tracking-tighter uppercase")}>
                        {brand.id === 'sqc' ? 'KIBLAT SEBAGAI' : brand.id === 'mtb' ? 'BUMI SEBAGAI' : 'MANDAT SEBAGAI'} <br />
                        <span className="relative inline-block">
                            <span className="absolute inset-0 text-transparent bg-clip-text" style={{
                                backgroundImage: brand.id === 'sqc'
                                    ? `linear-gradient(180deg, ${accentColor} 0%, #0B1221 100%)` // SQC: Gold to Navy
                                    : brand.id === 'mtb'
                                        ? `linear-gradient(180deg, ${accentColor} 0%, #854D0E 100%)` // MTB: Gold to Bronze
                                        : `linear-gradient(180deg, ${accentColor} 0%, #1e3a8a 100%)`, // MRE: Gold to Royal Blue
                                WebkitBackgroundClip: 'text',
                                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))'
                            }}>
                                {brand.id === 'sqc' ? 'SISTEM' : brand.id === 'mtb' ? 'FONDASI' : 'OTORITAS'}
                            </span>
                            <span className="text-transparent opacity-0">
                                {brand.id === 'sqc' ? 'SISTEM' : brand.id === 'mtb' ? 'FONDASI' : 'OTORITAS'}
                            </span>
                        </span>
                    </h1>
                </div>

                <p className={cx(typography.body.sm, "max-w-2xl text-slate-600 italic px-4")}>
                    "{brand.geometricPhilosophy?.summary || brand.philosophySummary}"
                </p>

                {/* Blueprint Stage */}
                <BlueprintStage brand={brand} accentColor={accentColor} />
            </motion.div>
        </header>
    );
}

// =============================================================================
// GEOMETRIC: BLUEPRINT STAGE
// =============================================================================

function BlueprintStage({ brand, accentColor }: { brand: BrandData; accentColor: string }) {
    const isDarkTheme = brand.id === 'mtb';

    return (
        <motion.div whileHover={{ scale: 1.02 }} className="relative w-full max-w-4xl aspect-[4/3] perspective-2000 mt-8">
            <div className={cx(cards.radius.hero, "relative w-full h-full overflow-hidden transform-gpu transition-all duration-700")}
                style={{
                    backgroundColor: isDarkTheme ? '#111827' : '#F1F5F9',
                    boxShadow: isDarkTheme ? '0 0 80px rgba(0,0,0,0.6)' : '0 0 60px rgba(0,0,0,0.1)',
                    borderColor: isDarkTheme ? 'rgba(255,255,255,0.1)' : '#CBD5E1',
                    borderWidth: '1px',
                    borderStyle: 'solid'
                }}>

                {/* Checkerboard Pattern - Dark for MTB, Light for others */}
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: isDarkTheme
                            ? `
                                linear-gradient(45deg, #1F2937 25%, transparent 25%, transparent 75%, #1F2937 75%, #1F2937),
                                linear-gradient(45deg, #1F2937 25%, transparent 25%, transparent 75%, #1F2937 75%, #1F2937)
                            `
                            : `
                                linear-gradient(45deg, #E2E8F0 25%, transparent 25%, transparent 75%, #E2E8F0 75%, #E2E8F0),
                                linear-gradient(45deg, #E2E8F0 25%, transparent 25%, transparent 75%, #E2E8F0 75%, #E2E8F0)
                            `,
                        backgroundPosition: '0 0, 6px 6px',
                        backgroundSize: '12px 12px',
                        opacity: isDarkTheme ? 0.4 : 1
                    }}
                />

                {/* Subtle Radial Glow */}
                <div className="absolute inset-0" style={{
                    background: `radial-gradient(circle at 50% 50%, ${accentColor}${isDarkTheme ? '15' : '10'} 0%, transparent 60%)`
                }} />

                {/* Corner Brackets - White for dark theme, Dark for light theme */}
                <div className={cx("absolute inset-8 border-2 border-dashed rounded-[1rem] pointer-events-none")}
                    style={{ borderColor: isDarkTheme ? 'rgba(255,255,255,0.1)' : '#CBD5E1' }}>
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-[3px] border-l-[3px] rounded-tl-[0.75rem]"
                        style={{ borderColor: isDarkTheme ? 'rgba(255,255,255,0.6)' : '#64748B' }} />
                    <div className="absolute top-0 right-0 w-12 h-12 border-t-[3px] border-r-[3px] rounded-tr-[0.75rem]"
                        style={{ borderColor: isDarkTheme ? 'rgba(255,255,255,0.6)' : '#64748B' }} />
                    <div className="absolute bottom-0 left-0 w-12 h-12 border-b-[3px] border-l-[3px] rounded-bl-[0.75rem]"
                        style={{ borderColor: isDarkTheme ? 'rgba(255,255,255,0.6)' : '#64748B' }} />
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-[3px] border-r-[3px] rounded-br-[0.75rem]"
                        style={{ borderColor: isDarkTheme ? 'rgba(255,255,255,0.6)' : '#64748B' }} />
                </div>

                {/* Logo - MAXIMIZED HERO SIZE (Absolute Max) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[85%] h-[85%] group">
                        <Image
                            src={brand.logos.nobgGeo}
                            alt={`${brand.name} Geometric Logo`}
                            fill
                            className="object-contain filter drop-shadow-[0_20px_50px_rgba(15,23,42,0.4)] transition-transform duration-1000 group-hover:scale-105"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// =============================================================================
// NARRATIVE: IMMERSIVE ESSENCE SECTION
// =============================================================================

function ImmersiveEssenceSection({ brand, accentColor }: { brand: BrandData; accentColor: string }) {
    const logicBreakdown = brand.narrativePhilosophy?.breakdown || brand.philosophyBreakdown;
    const iconSet = [
        <Compass key="0" className="w-5 h-5" />,
        <Shield key="1" className="w-5 h-5" />,
        <Users key="2" className="w-5 h-5" />,
        <Layers key="3" className="w-5 h-5" />,
        <Activity key="4" className="w-5 h-5" />,
        <Eye key="5" className="w-5 h-5" />
    ];

    return (
        <section className={cx(spacing.section.stackSm)}>
            {/* The Essence Card */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className={cx(cards.radius.hero, cards.bg.glassDark, "p-8 lg:p-16 relative overflow-hidden")}
            >
                {/* Background gradient */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20 pointer-events-none overflow-hidden rounded-[inherit]"
                    style={{ background: `radial-gradient(circle at bottom center, ${accentColor}40, transparent 70%)` }}
                />

                <div className="flex flex-col items-center text-center space-y-12 relative z-10">
                    {/* HERO LOGO CONTAINER - Maximized */}
                    <div className="relative group perspective-1000">
                        <div className={cx(
                            "rounded-full",
                            "relative bg-white shadow-[0_0_120px_-20px_rgba(255,255,255,0.3)] border-[12px] border-white/10",
                            "p-0", // Zero Padding for Maximum Size
                            "w-[95vw] h-[95vw] max-w-none lg:w-[1400px] lg:h-[1400px]", // Massive 3x Size
                            "flex items-center justify-center overflow-visible",
                            "transform transition-transform duration-1000 group-hover:scale-105"
                        )} style={{ backgroundColor: '#ffffff' }}>

                            {/* Spotlight Inner Glow */}
                            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,1)_0%,rgba(226,232,240,1)_100%)]" />

                            {/* Ring Decor */}
                            <div className="absolute inset-4 rounded-full border border-slate-200/50" />
                            <div className="absolute -inset-8 rounded-full border border-white/5 opacity-40 animate-pulse" style={{ animationDuration: '4s' }} />
                            <div className="absolute -inset-20 rounded-full border-2 border-white/5 opacity-20 scale-90" />

                            <Image
                                src={brand.logos.nobgFull}
                                alt={brand.name}
                                width={1400}
                                height={1400}
                                className="object-contain filter drop-shadow-[0_40px_80px_rgba(15,23,42,0.3)] relative z-10 transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-4"
                                unoptimized
                            />
                        </div>
                    </div>


                </div>
            </motion.div>

            {/* Philosophy Grid */}
            <PhilosophyGrid items={logicBreakdown} icons={iconSet} accentColor={accentColor} />
        </section>
    );
}

// =============================================================================
// SHARED: PHILOSOPHY GRID
// =============================================================================

function PhilosophyGrid({ items, icons, accentColor }: { items: Array<{ label: string; description: string }>; icons: React.ReactNode[]; accentColor: string }) {
    return (
        <div className={cx("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3", spacing.gap.lg)}>
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className={cx(cards.bg.glass, cards.radius.lg, spacing.padding.card, "group relative overflow-hidden")}
                >
                    {/* Background hover effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `radial-gradient(circle at center, ${accentColor}1a, transparent 70%)` }}
                    />

                    <div className="relative z-10 space-y-4">
                        {/* Icon + Number */}
                        <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                                style={{ backgroundColor: `${accentColor}1a`, color: accentColor }}>
                                {icons[i % icons.length]}
                            </div>
                            <span className={cx(typography.label.tag, "text-zinc-400")}>
                                SYS_LOGIC: {(i + 1).toString().padStart(2, '0')}
                            </span>
                        </div>

                        {/* Content */}
                        <h4 className={cx(typography.heading.card, "text-white group-hover:text-white transition-colors")}>
                            {item.label}
                        </h4>
                        <p className={cx(typography.body.xs, "text-white/60 line-clamp-3")}>
                            {item.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

// =============================================================================
// GEOMETRIC: BLUEPRINT ANATOMY SECTION
// =============================================================================

function BlueprintAnatomySection({ brand, accentColor }: { brand: BrandData; accentColor: string }) {
    const logicBreakdown = brand.geometricPhilosophy?.breakdown || brand.philosophyBreakdown;
    const iconSet = [
        <Shield key="0" className="w-5 h-5" style={{ color: accentColor }} />,
        <Ruler key="1" className="w-5 h-5" style={{ color: accentColor }} />,
        <Compass key="2" className="w-5 h-5" style={{ color: accentColor }} />,
        <Anchor key="3" className="w-5 h-5" style={{ color: accentColor }} />,
        <Scale key="4" className="w-5 h-5" style={{ color: accentColor }} />,
        <Layout key="5" className="w-5 h-5" style={{ color: accentColor }} />
    ];

    return (
        <section className={cx(spacing.section.stackSm)}>
            {/* Section Header */}
            <div className="flex flex-col items-center text-center space-y-3">
                <SQCTag style={{ borderColor: `${accentColor}33`, color: accentColor }}>
                    Anatomi Blueprint
                </SQCTag>
                <h2 className={cx(typography.heading.section, "text-[#0B1221] text-3xl lg:text-4xl")}>
                    Sistem <span style={{ color: accentColor }}>Logika</span>
                </h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    className="h-px"
                    style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }}
                />
            </div>

            {/* Logic Grid */}
            <PhilosophyGrid items={logicBreakdown} icons={iconSet} accentColor={accentColor} />
        </section>
    );
}

// =============================================================================
// SHARED: COLOR SYSTEM SECTION
// =============================================================================

function ColorSystemSection({ brand, accentColor, variant }: { brand: BrandData; accentColor: string; variant: Variant }) {
    const isGeometric = variant === 'geometric';
    const colorPalette = isGeometric
        ? (brand.colors.geometricPalette || [])
        : (brand.colors.narrativePalette || brand.colors.geometricPalette || []);

    const colorData = colorPalette.map((color, i) => ({
        hex: color,
        label: i === 0 ? "SYSTEM_BASE" : i === 1 ? "SYSTEM_ACCENT" : "SYSTEM_AUX",
        name: i === 0
            ? (brand.id === 'sqc' ? 'Deep Navy Matrix' : brand.id === 'mtb' ? 'Terrestrial Gold' : 'Mandate Gold')
            : i === 1
                ? (brand.id === 'sqc' ? 'Standard Gold' : brand.id === 'mtb' ? 'Solar Pulse' : 'Sovereign Void')
                : 'Auxiliary Channel',
        meaning: i === 0
            ? (brand.id === 'sqc' ? 'Fondasi keteraturan dan kedalaman tata kelola.' : brand.id === 'mtb' ? 'Realitas material bumi yang menjadi pijakan.' : 'Wujud mandat dan otoritas dalam pengelolaan aset.')
            : i === 1
                ? (brand.id === 'sqc' ? 'Legitimacy, orientasi, dan standar penjagaan.' : brand.id === 'mtb' ? 'Awal kemunculan energi yang terarah.' : 'Kedalaman strategis dan kontrol tata kelola.')
                : 'Sirkulasi nilai tambahan dalam ekosistem korporasi.'
    })).filter(color => {
        // Remove SYSTEM_AUX only for SQC Full Shape (Narrative) variant
        if (brand.id === 'sqc' && !isGeometric && color.label === 'SYSTEM_AUX') return false;
        return true;
    });

    return (
        <section className={cx(spacing.section.stackSm, "mt-12")}>
            {/* Divider Strip */}
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                className="relative py-4 px-6 border-y border-white/10 text-center overflow-hidden"
            >
                <div className="absolute inset-0 opacity-10" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }} />
                <span className={cx(typography.label.system)} style={{ color: accentColor }}>
                    {isGeometric ? 'KODIFIKASI SISTEM' : 'KODIFIKASI WARNA'}
                </span>
            </motion.div>

            {/* Section Header */}
            <div className="flex flex-col items-center text-center space-y-2">
                <h2 className={cx(typography.heading.section, "text-[#0B1221] text-3xl lg:text-4xl")}>
                    Spektrum <span style={{ color: accentColor }}>Teknis</span>
                </h2>
                <span className={cx(typography.label.tagSm, "text-zinc-400")}>
                    HEXA_CODE_MAPPING_SYSTEM_V.04
                </span>
            </div>

            {/* Color Cards */}
            <div className={cx("grid grid-cols-1 lg:grid-cols-2", spacing.gap.lg)}>
                {colorData.map((color, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.8 }}
                        className={cx(
                            "relative overflow-hidden",
                            cards.bg.glassDark,
                            cards.radius.lg,
                            spacing.padding.card,
                            "flex items-center gap-6",
                            "shadow-[0_8px_30px_rgba(0,0,0,0.3)]",
                            "hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]",
                            "transition-all duration-500",
                            "group/card"
                        )}
                    >
                        {/* Ambient Glow Effect */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"
                            style={{
                                background: `radial-gradient(circle at 0% 0%, ${accentColor}20, transparent 70%)`
                            }}
                        />

                        {/* Color Swatch with White Background Container */}
                        <div className="relative shrink-0">
                            <div className={cx(
                                cards.radius.lg,
                                "w-32 h-32 bg-white p-2",
                                "shadow-[0_4px_20px_rgba(0,0,0,0.2)]",
                                "ring-2 ring-white/20",
                                "group-hover/card:scale-105 transition-transform duration-500"
                            )}>
                                <div
                                    className={cx(
                                        cards.radius.md,
                                        "w-full h-full relative overflow-hidden"
                                    )}
                                    style={{ backgroundColor: color.hex }}
                                >
                                    {/* Inner Border Highlight */}
                                    <div className="absolute inset-2 border-2 border-white/30 rounded" />

                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                                </div>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="flex-1 space-y-2 relative z-10">
                            <span
                                className={cx(typography.label.hex, "font-bold tracking-wider")}
                                style={{ color: accentColor }}
                            >
                                {color.label} // {color.hex.toUpperCase()}
                            </span>
                            <h4 className={cx(typography.heading.card, "text-white group-hover/card:translate-x-1 transition-transform duration-300")}>
                                {color.name}
                            </h4>
                            <p className={cx(typography.body.xs, "text-zinc-400 leading-relaxed")}>
                                {color.meaning}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

// =============================================================================
// SHARED: GALLERY SECTION
// =============================================================================

function GallerySection({ brand, accentColor, variant }: { brand: BrandData; accentColor: string; variant: Variant }) {
    const variantKey = variant === 'geometric' ? 'geometric' : 'full-shape';
    const mockups = mockupImages[brand.id]?.[variantKey] || [];

    return (
        <section className={cx(spacing.section.stackSm, "mt-12")}>
            {/* Divider */}
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                className="relative py-4 px-6 border-y border-white/10 text-center overflow-hidden"
            >
                <div className="absolute inset-0 opacity-10" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }} />
                <span className={cx(typography.label.system)} style={{ color: accentColor }}>
                    {variant === 'geometric' ? 'Konteks & Integrasi Sistem' : 'Dampak & Estetika Visual'}
                </span>
            </motion.div>

            {/* Header */}
            <div className="flex flex-col items-center text-center space-y-2">
                <h2 className={cx(typography.heading.section, "text-[#0B1221] text-3xl lg:text-4xl")}>
                    Simulasi <span style={{ color: accentColor }}>Visual</span>
                </h2>
                <p className={cx(typography.body.xs, "max-w-xl text-slate-600")}>
                    Visualisasi penggunaan identitas {variant === 'geometric' ? 'geometris' : 'utuh'} dalam berbagai media nyata (mockup).
                </p>
            </div>

            {/* Mockup Grid */}
            <div className={cx("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3", spacing.gap.lg)}>
                {mockups.map((mockup: string, i: number) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 1, ease: animation.ease.smooth }}
                        className={cx(cards.radius.hero, cards.shadow.lg, "group relative aspect-square bg-[#0B1221] border border-white/10 overflow-hidden")}
                    >
                        <Image
                            src={`/mockups/${brand.id}/${variantKey}/${mockup}`}
                            alt={`Manifestation ${i + 1}`}
                            fill
                            className="object-cover transition-all duration-[1500ms] group-hover:scale-110 group-hover:brightness-110"
                            unoptimized
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ backgroundColor: `${accentColor}1a` }} />

                        {/* Top Tag */}
                        <div className={cx(cards.radius.md, "absolute top-6 left-6 p-3 bg-[#0B1221] backdrop-blur-3xl border border-white/10 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700")}>
                            <span className={cx(typography.label.tagSm)} style={{ color: accentColor }}>
                                {variant === 'geometric' ? 'GEO_FIELD_TEST: PASS' : 'DNA_FIELD_TEST: PASS'}
                            </span>
                        </div>

                        {/* Bottom Info */}
                        <div className={cx(cards.radius.md, "absolute bottom-6 right-6 p-3 bg-[#0B1221] backdrop-blur-3xl border border-white/10 translate-y-[20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 flex items-center gap-3")}>
                            <div className="text-right">
                                <span className={cx(typography.label.tagSm, "block text-zinc-400")}>UNIT_REF</span>
                                <span className={cx(typography.heading.cardSm, "block text-white uppercase tracking-tighter")}>
                                    {variant === 'geometric' ? `IMPLEMENT_0${i + 1}` : `PRESENCE_0${i + 1}`}
                                </span>
                            </div>
                            <div className="w-8 h-8 rounded-full border flex items-center justify-center"
                                style={{ backgroundColor: `${accentColor}33`, borderColor: `${accentColor}66` }}>
                                <ArrowRight className="w-4 h-4" style={{ color: accentColor }} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

// =============================================================================
// LOGO USAGE SECTION - Logo on Different Backgrounds
// =============================================================================

function LogoUsageSection({ brand, accentColor, variant }: { brand: BrandData; accentColor: string; variant: Variant }) {
    const isGeometric = variant === 'geometric';
    // Use the same logos as Brand Comparison page
    const fullColorLogo = isGeometric ? brand.logos.geometric : brand.logos.fullyShape;
    const whiteLogo = isGeometric ? brand.logos.transparentGeoWhite : brand.logos.transparentFullWhite;
    // Use black logos (now available for all brands)
    const darkLogo = isGeometric ? brand.logos.transparentGeoBlack : brand.logos.transparentFullBlack;

    const usageTypes = [
        {
            label: 'Full Color',
            description: 'Logo utama dengan warna penuh.',
            bg: '#FFFFFF',
            logoUrl: fullColorLogo,
            darkText: true
        },
        {
            label: 'White / Monochrome',
            description: 'Logo putih pada latar gelap.',
            bg: brand.colors.primary, // Deep Navy or Brand Primary
            logoUrl: whiteLogo,
            darkText: false
        },
        {
            label: 'Black / Dark',
            description: 'Logo hitam pada latar netral.',
            bg: '#F8FAFC', // Slate-50
            logoUrl: darkLogo,
            darkText: true
        }
    ];

    return (
        <section className={cx(spacing.section.stackSm, "mt-12")}>
            {/* Divider */}
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                className="relative py-4 px-6 border-y border-white/10 text-center overflow-hidden"
            >
                <div className="absolute inset-0 opacity-10" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }} />
                <span className={cx(typography.label.system)} style={{ color: accentColor }}>
                    Fleksibilitas Logo
                </span>
            </motion.div>

            {/* Header */}
            <div className="flex flex-col items-center text-center space-y-2">
                <h2 className={cx(typography.heading.section, "text-[#0B1221] text-3xl lg:text-4xl")}>
                    Penggunaan <span style={{ color: accentColor }}>Logo</span>
                </h2>
                <p className={cx(typography.body.xs, "max-w-xl text-slate-600")}>
                    Panduan penggunaan logo dalam tiga variasi utama untuk kontras maksimal.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {usageTypes.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group flex flex-col space-y-4"
                    >
                        {/* Card */}
                        <div
                            className={cx(
                                cards.radius.lg,
                                "relative w-full aspect-square flex items-center justify-center overflow-hidden",
                                // Full Color uses no padding since the logo has built-in frame
                                i === 0 ? "p-0" : "p-16 lg:p-24",
                                "shadow-sm border transition-shadow duration-300 hover:shadow-xl"
                            )}
                            style={{
                                backgroundColor: item.bg,
                                borderColor: item.darkText ? '#E2E8F0' : 'transparent'
                            }}
                        >
                            <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                                <Image
                                    src={item.logoUrl}
                                    alt={`${brand.name} - ${item.label}`}
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                        </div>

                        {/* Label */}
                        <div className="text-center">
                            <h4 className={cx(typography.heading.card, "text-slate-900")}>{item.label}</h4>
                            <p className={cx(typography.body.xs, "text-slate-500")}>{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Simple usage notes */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
                {['Jangan diregangkan', 'Jangan tambahkan bayangan', 'Jangan ubah warna'].map((note, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <div className="w-4 h-4 rounded-full bg-zinc-100 flex items-center justify-center">
                            <span className="text-[10px]" style={{ color: accentColor }}>✓</span>
                        </div>
                        {note}
                    </div>
                ))}
            </div>
        </section>
    );
}

// =============================================================================
// COMPARE OTHER OPTION SECTION
// =============================================================================

function CompareOptionSection({ brand, accentColor, variant }: { brand: BrandData; accentColor: string; variant: Variant }) {
    const isGeometric = variant === 'geometric';
    const otherVariant = isGeometric ? 'full-shape' : 'geometric';
    const otherLabel = isGeometric ? 'Full Shape (Organik)' : 'Geometric (Sistematis)';
    const otherColor = isGeometric ? '#10B981' : '#3B82F6'; // emerald for full-shape, blue for geometric

    return (
        <section className={cx(spacing.section.stackSm, "mt-16")}>
            {/* Divider */}
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                className="relative py-4 px-6 border-y border-white/10 text-center overflow-hidden"
            >
                <div className="absolute inset-0 opacity-10" style={{ background: `linear-gradient(90deg, transparent, ${otherColor}, transparent)` }} />
                <span className={cx(typography.label.system)} style={{ color: otherColor }}>
                    Bandingkan Opsi
                </span>
            </motion.div>

            {/* CTA Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-6"
            >
                <div className="space-y-2">
                    <h3 className={cx(typography.heading.section, "text-[#0B1221] text-3xl lg:text-4xl")}>
                        Ingin melihat opsi <span style={{ color: otherColor }}>{otherLabel.split(' ')[0]}</span>?
                    </h3>
                    <p className={cx(typography.body.xs, "max-w-md text-slate-600")}>
                        Bandingkan kedua arah visual untuk membuat keputusan yang tepat.
                    </p>
                </div>

                <Link
                    href={`/showcase/${brand.id}/${otherVariant}`}
                    className="group flex items-center gap-4 px-8 py-4 rounded-2xl border-2 transition-all duration-500 hover:scale-105"
                    style={{
                        borderColor: `${otherColor}40`,
                        backgroundColor: `${otherColor}10`,
                    }}
                >
                    <span className="text-sm font-black uppercase tracking-widest" style={{ color: otherColor }}>
                        Lihat {otherLabel}
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" style={{ color: otherColor }} />
                </Link>
            </motion.div>
        </section>
    );
}

// =============================================================================
// SHARED: FOOTER
// =============================================================================

function Footer({ accentColor, variant }: { accentColor: string; variant: Variant }) {
    return (
        <footer className="text-center pb-12 pt-16 border-t border-white/10 relative z-10 flex flex-col items-center gap-4">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 120 }}
                viewport={{ once: true }}
                className="h-px"
                style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }}
            />
            <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                <span className={cx(typography.label.tagSm, "text-zinc-400")}>
                    {variant === 'geometric' ? 'GEOMETRIC_SYSTEM_DOCUMENTATION_V2.0' : 'NARRATIVE_DNA_DOCUMENTATION_V2.0'}
                </span>
            </div>
        </footer>
    );
}

