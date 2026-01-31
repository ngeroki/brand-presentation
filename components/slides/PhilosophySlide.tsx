"use client";

import Image from "next/image";
import { BrandData, brands } from "@/data/brands";
import { motion } from "framer-motion";
import { ArrowRight, Minus, Compass, Cpu, Target } from "lucide-react";
import { useSlideNavigation } from "@/contexts/SlideContext";
import { sqc, SQCBackground, SQCTag } from "@/styles/sqc-theme";

export default function PhilosophySlide({ brand }: { brand: BrandData }) {
    const { goToSlide } = useSlideNavigation();

    // Calculate indices dynamically based on the current slide sequence
    const brandIndex = brands.findIndex(b => b.id === brand.id);
    const brandStartIdx = 2 + (brandIndex * 5);
    const narrativeIndex = brandStartIdx + 1;
    const geometricIndex = brandStartIdx + 2;

    const navigateToNarrative = () => goToSlide(narrativeIndex);
    const navigateToGeometric = () => goToSlide(geometricIndex);

    const accentColor = brand.colors.accent || "#C5A572";

    return (
        <div className="relative min-h-screen bg-[#0B1221] text-white selection:bg-[#C5A572] selection:text-[#0B1221] overflow-hidden flex flex-col">
            <SQCBackground />

            {/* AMBIENT BACKGROUND */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(to right, ${accentColor} 1px, transparent 1px), linear-gradient(to bottom, ${accentColor} 1px, transparent 1px)`,
                        backgroundSize: '100px 100px',
                        maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 90%)'
                    }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full blur-[150px]"
                    style={{ backgroundColor: accentColor }}
                />
            </div>

            {/* HEADER - BRAND ESSENCE */}
            <header className="relative z-10 w-full pt-16 flex flex-col items-center text-center px-8 flex-shrink-0">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <SQCTag className="px-6 py-2 bg-white/5 border-white/10 backdrop-blur-2xl">
                        <span className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                            {brand.brandEssence?.title || "Brand Profile"}
                        </span>
                    </SQCTag>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="mt-8 space-y-6"
                >
                    <h1 className="text-5xl lg:text-[7rem] font-black tracking-[calc(-0.06em)] leading-[0.8] uppercase max-w-5xl mx-auto">
                        {brand.brandEssence?.tagline || "MANIFESTASI NILAI"}
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg lg:text-2xl font-light leading-relaxed text-white/30 italic">
                        {brand.brandEssence?.description}
                    </p>
                </motion.div>

                {/* Vertical Axis Line */}
                <div className="mt-12 h-20 w-px bg-gradient-to-b from-[var(--brand-accent)] to-transparent opacity-50" style={{ ["--brand-accent" as any]: accentColor }} />
            </header>

            {/* SELECTION CHAMBERS */}
            <div className="flex-1 w-full max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 relative z-10 px-8 pb-16">

                {/* OPTION A: NARRATIVE */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="group/narrative relative flex flex-col items-center justify-between py-12 px-8 lg:px-16"
                >
                    <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover/narrative:opacity-100 transition-opacity duration-1000 rounded-[3rem] -z-10" />

                    {/* Chamber Title */}
                    <div className="text-center space-y-4">
                        <div className="flex items-center justify-center gap-4 text-[#C5A572] font-mono text-[10px] font-black tracking-[0.5em] uppercase">
                            <Compass className="w-4 h-4" />
                            <span>System Variant A</span>
                        </div>
                        <h2 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter group-hover/narrative:tracking-widest transition-all duration-700">
                            Narrative
                        </h2>
                    </div>

                    {/* Logo Showcase Card */}
                    <div className="relative w-full max-w-md aspect-square my-12 group/card perspective-2000">
                        <motion.button
                            onClick={navigateToNarrative}
                            whileHover={{ rotateY: -10, rotateX: 5, scale: 1.02 }}
                            className="relative w-full h-full bg-[#0F1629]/60 backdrop-blur-3xl border border-white/5 rounded-[4rem] p-12 shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all duration-700 overflow-hidden flex items-center justify-center"
                        >
                            <div className="absolute inset-0 opacity-10 group-hover/card:opacity-20 transition-opacity duration-1000" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                            <Image
                                src={brand.logos.nobgFull}
                                alt={`${brand.name} Narrative`}
                                width={800}
                                height={800}
                                className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] group-hover/card:scale-110 transition-transform duration-1000"
                                unoptimized
                            />

                            {/* HUD Tag */}
                            <div className="absolute top-10 left-10 p-3 bg-white/5 border border-white/10 rounded-2xl text-[9px] font-mono tracking-widest text-[#C5A572] uppercase">DNA_CORE: 01</div>
                        </motion.button>

                        {/* Glow and Reflection */}
                        <div className="absolute -bottom-4 inset-x-8 h-8 bg-black/40 blur-2xl rounded-full opacity-0 group-hover/narrative:opacity-100 transition-opacity duration-700" />
                    </div>

                    {/* Chamber Footer */}
                    <div className="flex flex-col items-center gap-10 max-w-sm text-center">
                        <p className="text-lg text-white/40 font-light italic leading-relaxed">
                            {brand.philosophyBreakdown[0].description}
                        </p>
                        <button
                            onClick={navigateToNarrative}
                            className="group/btn relative px-12 py-5 bg-[var(--brand-accent)] text-[#0B1221] rounded-2xl overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95"
                            style={{ ["--brand-accent" as any]: accentColor }}
                        >
                            <div className="relative z-10 flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em]">
                                Explore DNA <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                            </div>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity" />
                        </button>
                    </div>
                </motion.div>

                {/* VERTICAL DIVIDER BAR */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2/3 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

                {/* OPTION B: GEOMETRIC */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="group/geometric relative flex flex-col items-center justify-between py-12 px-8 lg:px-16"
                >
                    <div className="absolute inset-0 bg-blue-500/[0.01] opacity-0 group-hover/geometric:opacity-100 transition-opacity duration-1000 rounded-[3rem] -z-10" />

                    {/* Chamber Title */}
                    <div className="text-center space-y-4">
                        <div className="flex items-center justify-center gap-4 text-blue-400 font-mono text-[10px] font-black tracking-[0.5em] uppercase">
                            <Cpu className="w-4 h-4" />
                            <span>System Variant B</span>
                        </div>
                        <h2 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter group-hover/geometric:tracking-widest transition-all duration-700">
                            Geometric
                        </h2>
                    </div>

                    {/* Logo Showcase Card */}
                    <div className="relative w-full max-w-md aspect-square my-12 group/card perspective-2000">
                        <motion.button
                            onClick={navigateToGeometric}
                            whileHover={{ rotateY: 10, rotateX: 5, scale: 1.02 }}
                            className="relative w-full h-full bg-slate-900/60 backdrop-blur-3xl border border-blue-500/10 rounded-[4rem] p-12 shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all duration-700 overflow-hidden flex items-center justify-center"
                        >
                            {/* Technical Grid Overlay */}
                            <div className="absolute inset-0 opacity-[0.05]"
                                style={{
                                    backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
                                    backgroundSize: '40px 40px'
                                }}
                            />

                            <Image
                                src={brand.logos.nobgGeo}
                                alt={`${brand.name} Geometric`}
                                width={800}
                                height={800}
                                className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] group-hover/card:scale-110 transition-transform duration-1000"
                                unoptimized
                            />

                            {/* HUD Tag */}
                            <div className="absolute top-10 right-10 p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-[9px] font-mono tracking-widest text-blue-400 uppercase">SYS_REF: 02</div>
                        </motion.button>

                        {/* Glow and Reflection */}
                        <div className="absolute -bottom-4 inset-x-8 h-8 bg-black/40 blur-2xl rounded-full opacity-0 group-hover/geometric:opacity-100 transition-opacity duration-700" />
                    </div>

                    {/* Chamber Footer */}
                    <div className="flex flex-col items-center gap-10 max-w-sm text-center">
                        <p className="text-lg text-white/40 font-light italic leading-relaxed">
                            {brand.philosophyBreakdown[brand.philosophyBreakdown.length - 1].description}
                        </p>
                        <button
                            onClick={navigateToGeometric}
                            className="group/btn relative px-12 py-5 bg-blue-600 text-white rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(37,99,235,0.3)] transition-all hover:scale-105 active:scale-95"
                        >
                            <div className="relative z-10 flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em]">
                                Analyze Logic <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                            </div>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity" />
                        </button>
                    </div>
                </motion.div>

            </div>

            {/* FOOTER BAR */}
            <footer className="relative z-10 w-full py-12 px-12 border-t border-white/5 flex justify-between items-center bg-black/40 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                    <Target className="w-5 h-5 text-white/20" />
                    <span className="text-[10px] font-mono font-black text-white/20 tracking-widest uppercase">System Select Protocol: Active</span>
                </div>
                <div className="text-[10px] font-mono text-white/10 uppercase tracking-[0.5em]">SQC_IDENTITY_VAULT_2026</div>
            </footer>

            <style jsx global>{`
                .perspective-2000 {
                    perspective: 2000px;
                }
            `}</style>
        </div>
    );
}
