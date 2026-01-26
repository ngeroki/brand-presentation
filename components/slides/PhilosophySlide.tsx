import Image from "next/image";
import { BrandData, brands } from "@/data/brands";
import { motion } from "framer-motion";
import { ArrowRight, Minus } from "lucide-react";
import { useSlideNavigation } from "@/contexts/SlideContext";

export default function PhilosophySlide({ brand }: { brand: BrandData }) {
    const { goToSlide } = useSlideNavigation();

    // Calculate indices dynamically based on the current slide sequence
    // Slide order: Intro(0), Architecture(1), then for each brand: Philosophy, DNANarrative, DNAGeometric, Specs, App
    const brandIndex = brands.findIndex(b => b.id === brand.id);

    // Each brand has 5 slides: Philosophy, DNANarrative, DNAGeometric, Specs, App
    // Starting at index 2 (after Intro and Architecture)
    const brandStartIdx = 2 + (brandIndex * 5);
    const narrativeIndex = brandStartIdx + 1;  // Philosophy + 1
    const geometricIndex = brandStartIdx + 2;  // Philosophy + 2

    // Conditionally set theme based on brand (requested for SQC and MRE)
    const isReverted = brand.id === "sqc" || brand.id === "mre";

    // Helper functions for clean navigation
    const navigateToNarrative = () => goToSlide(narrativeIndex);
    const navigateToGeometric = () => goToSlide(geometricIndex);

    return (
        <div className="flex flex-col w-full min-h-full bg-white text-zinc-900 font-sans selection:bg-[#C5A572] selection:text-white relative">

            {/* BRAND ESSENCE: Centered Symmetrical Header */}
            {brand.brandEssence && (
                <div className="w-full bg-white pt-12 pb-8 px-12 lg:px-16 z-20 relative shrink-0">
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3"
                        >
                            <div className="h-px w-8 bg-blue-600/30" />
                            <span className="text-[10px] uppercase font-black tracking-[0.4em] text-blue-600">{brand.brandEssence.title}</span>
                            <div className="h-px w-8 bg-blue-600/30" />
                        </motion.div>

                        <h1 className="text-4xl lg:text-6xl font-black tracking-tighter text-zinc-900 uppercase italic leading-tight">
                            {brand.brandEssence.tagline}
                        </h1>

                        <div className="max-w-2xl mx-auto">
                            <p className="text-sm lg:text-base text-zinc-500 font-light leading-relaxed">
                                {brand.brandEssence.description}
                            </p>
                        </div>

                        {/* Visual Connector to the split below */}
                        <div className="pt-4 flex flex-col items-center">
                            <div className="w-px h-8 bg-gradient-to-b from-blue-600/50 to-transparent" />
                        </div>
                    </div>
                </div>
            )}

            <div className="flex-1 flex flex-col md:flex-row w-full">
                {/* LEFT PANEL: OPTION A (FULLY SHAPE) */}
                <div className={`relative w-full md:w-1/2 min-h-[700px] flex flex-col justify-between p-12 lg:p-16 group/a overflow-hidden transition-colors duration-500 items-center text-center ${isReverted ? "bg-[#F7F3F0] text-zinc-900" : "bg-[#1A1F2B] text-white"
                    }`}>
                    {/* Decorative Pattern */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C5A572] to-transparent" />

                    {/* Header */}
                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-3"
                        >
                            <div className="h-px w-4 bg-[#C5A572]/30" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#C5A572]">Option A // Narrative</span>
                            <div className="h-px w-4 bg-[#C5A572]/30" />
                        </motion.div>
                        <h2 className={`text-4xl lg:text-5xl font-black uppercase tracking-tighter ${isReverted ? "text-[#0B1221]" : "text-white"}`}>
                            Fully Shape
                        </h2>
                    </div>

                    {/* Logo Centerpiece - Now Clickable */}
                    <div className="flex-1 w-full flex items-center justify-center py-12">
                        <motion.button
                            onClick={navigateToNarrative}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className={`relative w-full max-w-[440px] aspect-square rounded-[2.5rem] overflow-hidden border p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-500 group/card ${isReverted
                                ? "bg-white border-white shadow-zinc-200/50"
                                : "bg-[#0B1221] border-white/5 shadow-black/80"
                                } cursor-pointer active:scale-95`}
                        >
                            <Image
                                src={brand.logos.fullyShape}
                                alt={`${brand.name} Fully Shape`}
                                fill
                                className="object-cover rounded-[2rem] group-hover/card:scale-110 transition-transform duration-1000 ease-out"
                                unoptimized
                            />
                            <div className="absolute inset-0 rounded-[2rem] border border-white/5 pointer-events-none" />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/5 transition-colors duration-300" />
                        </motion.button>
                    </div>

                    {/* Footer Content */}
                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <div className="space-y-4 max-w-sm mx-auto">
                            <p className="text-xs font-black text-[#C5A572] uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                                <Minus className="w-4 h-4 text-[#C5A572]/40" /> Filosofi Ikonik <Minus className="w-4 h-4 text-[#C5A572]/40" />
                            </p>
                            <p className={`text-base leading-relaxed font-medium mx-auto ${isReverted ? "text-zinc-500" : "text-zinc-400"}`}>
                                {brand.philosophyBreakdown[0].description}
                            </p>
                        </div>

                        <button
                            onClick={navigateToNarrative}
                            className={`flex items-center gap-4 px-10 py-5 rounded-2xl mx-auto group/btn transition-all shadow-xl ${isReverted
                                ? "bg-[#0B1221] text-white hover:bg-[#1a2538] shadow-zinc-200"
                                : "bg-[#C5A572] text-[#0B1221] hover:bg-[#d4b98c] shadow-black/20"
                                } active:scale-95`}
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Cek DNA Visual</span>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* RIGHT PANEL: OPTION B (GEOMETRIC) */}
                <div className={`relative w-full md:w-1/2 min-h-[700px] flex flex-col justify-between p-12 lg:p-16 group/b overflow-hidden transition-colors duration-500 items-center text-center ${isReverted ? "bg-[#1A1F2B] text-white" : "bg-[#F7F3F0] text-zinc-900"
                    }`}>
                    {/* Decorative Accent */}
                    <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-[#C5A572] to-transparent" />

                    {/* Header */}
                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex items-center gap-3"
                        >
                            <div className="h-px w-4 bg-[#C5A572]/30" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#C5A572]">Option B // System</span>
                            <div className="h-px w-4 bg-[#C5A572]/30" />
                        </motion.div>
                        <h2 className={`text-4xl lg:text-5xl font-black uppercase tracking-tighter ${isReverted ? "text-white" : "text-[#0B1221]"}`}>
                            Geometric
                        </h2>
                    </div>

                    {/* Logo Centerpiece - Now Clickable */}
                    <div className="flex-1 w-full flex items-center justify-center py-12">
                        <motion.button
                            onClick={navigateToGeometric}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className={`relative w-full max-w-[440px] aspect-square rounded-[2.5rem] overflow-hidden border p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-500 group/card ${isReverted
                                ? "bg-[#1A1F2B] border-white/5 shadow-black/80"
                                : "bg-white border-white shadow-zinc-200/50"
                                } cursor-pointer active:scale-95`}
                        >
                            <Image
                                src={brand.logos.geometric}
                                alt={`${brand.name} Geometric`}
                                fill
                                className="object-cover rounded-[1.8rem] group-hover/card:scale-110 transition-transform duration-700 ease-out"
                                unoptimized
                            />
                            <div className="absolute inset-0 rounded-[2rem] border border-white/5 pointer-events-none" />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-white/0 group-hover/card:bg-white/5 transition-colors duration-300" />
                        </motion.button>
                    </div>

                    {/* Footer Content */}
                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <div className="space-y-4 max-w-sm mx-auto">
                            <p className="text-xs font-black text-[#C5A572] uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                                <Minus className="w-4 h-4 text-[#C5A572]/40" /> Presisi Sistem <Minus className="w-4 h-4 text-[#C5A572]/40" />
                            </p>
                            <p className={`text-base leading-relaxed font-medium mx-auto ${isReverted ? "text-zinc-400" : "text-zinc-500"}`}>
                                {brand.philosophyBreakdown[brand.philosophyBreakdown.length - 1].description}
                            </p>
                        </div>

                        <button
                            onClick={navigateToGeometric}
                            className={`flex items-center gap-4 px-10 py-5 rounded-2xl mx-auto group/btn transition-all shadow-xl ${isReverted
                                ? "bg-[#C5A572] text-[#0B1221] hover:bg-[#d4b98c] shadow-black/20"
                                : "bg-[#0B1221] text-white hover:bg-[#1a2538] shadow-zinc-200"
                                } active:scale-95`}
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Cek DNA Visual</span>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}
