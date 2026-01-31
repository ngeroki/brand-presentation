"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BrandData } from "@/data/brands";
import { ArrowRight, Leaf, Box, Shield, Target, Layers, Workflow, CheckCircle2, MoveLeft, Share2, Download, Printer, Compass, Cpu, Fingerprint } from "lucide-react";
import { sqc, SQCBackground, SQCTag } from "@/styles/sqc-theme";

export default function BrandKitMainSlide({ brand }: { brand: BrandData }) {
    const [viewMode, setViewMode] = useState<"wall" | "shape" | "geometric">("wall");
    const accentColor = brand.colors.accent || "#C5A572";

    const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 } };

    // Grouping icons
    const iconsMap = useMemo(() => [Target, Shield, Layers, Workflow, CheckCircle2, Leaf], []);

    return (
        <div className="relative min-h-screen bg-[#0B1221] text-white selection:bg-[#C5A572] selection:text-[#0B1221] overflow-hidden flex flex-col">
            <SQCBackground />

            {/* AMBIENT ATMOSPHERE */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-x-0 bottom-0 h-[50vh] opacity-20"
                    style={{ background: `radial-gradient(circle at 50% 100%, ${accentColor} 0%, transparent 70%)` }} />
            </div>

            {/* TOP NAVIGATION BAR - High Tech Switcher */}
            <div className="relative z-30 w-full px-12 py-6 flex justify-between items-center bg-black/40 backdrop-blur-2xl border-b border-white/5">
                <div className="flex items-center gap-6">
                    <Fingerprint className="w-5 h-5 text-white/40" />
                    <div className="h-4 w-px bg-white/10" />
                    <span className="text-[10px] font-mono font-black text-white/40 tracking-[0.5em] uppercase">Identity_Vault // {brand.id.toUpperCase()}</span>
                </div>

                <nav className="flex items-center gap-12 text-[10px] font-mono font-black uppercase tracking-[0.3em]">
                    <button
                        onClick={() => setViewMode("wall")}
                        className={`transition-all px-4 py-2 rounded-lg ${viewMode === 'wall' ? 'text-[#0B1221]' : 'text-white/40 hover:text-white'}`}
                        style={{ backgroundColor: viewMode === 'wall' ? accentColor : 'transparent' }}
                    >
                        Collection
                    </button>
                    {viewMode !== 'wall' && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 border-l border-white/10 pl-12"
                            style={{ color: accentColor }}
                        >
                            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                            <span>{viewMode === 'shape' ? 'Organic' : 'Geometric'} Analysis</span>
                        </motion.div>
                    )}
                </nav>
            </div>

            <main className="flex-1 w-full max-w-[1600px] mx-auto px-12 py-20 relative z-20 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    {viewMode === "wall" ? (
                        <motion.div {...fadeIn} key="wall" className="w-full space-y-24">
                            {/* KINETIC HEADER */}
                            <header className="flex flex-col items-center text-center space-y-10">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <SQCTag className="px-6 py-2 bg-white/5 border-white/10 backdrop-blur-xl" style={{ color: accentColor }}>
                                        Architectural Selection // {brand.id.toUpperCase()}
                                    </SQCTag>
                                </motion.div>

                                <div className="space-y-4">
                                    <h1 className="text-6xl lg:text-[10rem] font-black uppercase tracking-[calc(-0.06em)] leading-[0.8] text-white">
                                        {brand.name} <br />
                                        <span className="text-transparent bg-clip-text filter" style={{ backgroundImage: `linear-gradient(to r, ${accentColor}, white)`, filter: `drop-shadow(0 0 30px ${accentColor}40)` }}>Collection</span>
                                    </h1>
                                    <p className="max-w-2xl mx-auto text-lg lg:text-2xl font-light leading-relaxed text-white/30 italic mt-8">
                                        Exploration criteria: {brand.meaning}
                                    </p>
                                </div>
                            </header>

                            {/* SELECTION CARDS - Holographic Feel */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                                {/* Narrative Approach */}
                                <motion.div
                                    whileHover={{ y: -20, scale: 1.02 }}
                                    className="group/narrative relative flex flex-col space-y-10 cursor-pointer"
                                    onClick={() => setViewMode("shape")}
                                >
                                    <div className="relative aspect-[4/3] bg-white/[0.02] border border-white/5 overflow-hidden rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] transition-all duration-700 flex items-center justify-center p-16 group-hover/narrative:border-white/20">
                                        <div className="absolute inset-0 opacity-0 group-hover/narrative:opacity-100 transition-opacity" style={{ background: `radial-gradient(circle at center, ${accentColor}1a, transparent)` }} />
                                        <div className="absolute top-10 left-10 flex items-center gap-3 font-mono text-[9px] font-black tracking-widest uppercase opacity-40 group-hover/narrative:opacity-100 transition-all" style={{ color: accentColor }}>
                                            <Compass className="w-4 h-4" />
                                            <span>Narrative_Ref: 01</span>
                                        </div>

                                        <Image
                                            src={brand.logos.fullyShape}
                                            alt="Organic"
                                            width={1000}
                                            height={1000}
                                            className="w-full h-auto object-contain filter drop-shadow-[0_45px_70px_rgba(0,0,0,0.6)] group-hover/narrative:scale-110 transition-transform duration-1000 ease-out"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="space-y-6 px-10">
                                        <h3 className="text-4xl font-black text-white uppercase tracking-tighter">Pendekatan Organik</h3>
                                        <p className="text-white/40 font-light text-lg leading-relaxed italic">Menekankan pada aspek pertumbuhan, adaptasi, dan perjalanan yang dinamis (Full Shape).</p>
                                        <button className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] group-hover/narrative:translate-x-2 transition-transform" style={{ color: accentColor }}>
                                            Analyze DNA <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </motion.div>

                                {/* Geometric Approach */}
                                <motion.div
                                    whileHover={{ y: -20, scale: 1.02 }}
                                    className="group/geometric relative flex flex-col space-y-10 cursor-pointer"
                                    onClick={() => setViewMode("geometric")}
                                >
                                    <div className="relative aspect-[4/3] bg-black/40 border border-white/5 overflow-hidden rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] transition-all duration-700 flex items-center justify-center p-16 group-hover/geometric:border-white/20">
                                        <div className="absolute inset-0 opacity-0 group-hover/geometric:opacity-100 transition-opacity" style={{ background: `radial-gradient(circle at center, ${brand.colors.geometricPalette?.[0] || accentColor}1a, transparent)` }} />
                                        <div className="absolute top-10 right-10 flex items-center gap-3 font-mono text-[9px] font-black tracking-widest uppercase opacity-40 group-hover/geometric:opacity-100 transition-all" style={{ color: brand.colors.geometricPalette?.[0] || accentColor }}>
                                            <span>Geometric_Ref: 02</span>
                                            <Cpu className="w-4 h-4" />
                                        </div>

                                        <Image
                                            src={brand.logos.geometric}
                                            alt="Geometric"
                                            width={1000}
                                            height={1000}
                                            className="w-full h-auto object-contain filter drop-shadow-[0_45px_70px_rgba(0,0,0,0.6)] group-hover/geometric:scale-110 transition-transform duration-1000 ease-out"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="space-y-6 px-10">
                                        <h3 className="text-4xl font-black text-white uppercase tracking-tighter">Pendekatan Geometris</h3>
                                        <p className="text-white/40 font-light text-lg leading-relaxed italic">Menekankan pada aspek kekuatan, struktur, dan keteraturan sistem global.</p>
                                        <button className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] group-hover/geometric:translate-x-2 transition-transform" style={{ color: brand.colors.geometricPalette?.[0] || accentColor }}>
                                            Inspect System <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div {...fadeIn} key="deep-dive" className="w-full flex flex-col items-center">
                            <header className="flex flex-col items-center text-center space-y-6 mb-24">
                                <SQCTag className="border-white/10" style={{ color: accentColor }}>Philosophy Deep-Dive // {brand.id.toUpperCase()}</SQCTag>
                                <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white">
                                    {brand.name} <span style={{ color: viewMode === 'shape' ? accentColor : (brand.colors.geometricPalette?.[0] || accentColor) }}>{viewMode === 'shape' ? 'Organic' : 'Geometric'} DNA</span>
                                </h1>
                            </header>

                            <div className="grid grid-cols-12 gap-20 w-full max-w-7xl items-center">
                                {/* Visual Card - Perspective Stage */}
                                <div className="col-span-12 lg:col-span-5 space-y-12">
                                    <div className="relative aspect-square bg-white/[0.02] border border-white/5 shadow-2xl rounded-[4rem] flex items-center justify-center p-12 overflow-hidden group/stage">
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
                                        <Image
                                            src={viewMode === 'shape' ? brand.logos.nobgFull : brand.logos.nobgGeo}
                                            alt="Logo detail"
                                            width={1200}
                                            height={1200}
                                            className="w-full h-auto object-contain p-12 drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] group-hover/stage:scale-110 transition-transform duration-1000"
                                            unoptimized
                                        />
                                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 text-[9px] font-mono tracking-widest text-white/20 whitespace-nowrap">
                                            <span>RENDER_MODE: HIGH_SPEC</span>
                                            <div className="w-px h-3 bg-white/10" />
                                            <span>PHIL_TYPE: {viewMode.toUpperCase()}</span>
                                        </div>
                                    </div>

                                    <div className="p-12 rounded-[3rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1.5 h-full" style={{ backgroundColor: viewMode === 'shape' ? accentColor : (brand.colors.geometricPalette?.[0] || accentColor) }} />
                                        <div className="text-[10px] uppercase tracking-[0.4em] font-black text-white/20 mb-6 font-mono">Core Manifesto // 00_MFS</div>
                                        <p className="text-3xl leading-snug text-white font-light italic">
                                            "{brand.philosophySummary}"
                                        </p>
                                    </div>
                                </div>

                                {/* Content List - Technical Specs */}
                                <div className="col-span-12 lg:col-span-7 flex flex-col gap-16 py-10">
                                    <div className="flex flex-col gap-12">
                                        {brand.philosophyBreakdown.map((item, idx) => {
                                            const Icon = iconsMap[idx % iconsMap.length];
                                            return (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className="flex gap-10 group items-start"
                                                >
                                                    <div className="shrink-0 w-16 h-16 bg-white/[0.03] border border-white/10 flex items-center justify-center rounded-[1.5rem] group-hover:scale-110 group-hover:bg-white/[0.05] transition-all duration-500 shadow-xl">
                                                        <Icon className="w-7 h-7 text-white/60 group-hover:text-white transition-colors" />
                                                    </div>
                                                    <div className="space-y-4">
                                                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter group-hover:text-[var(--brand-accent)] transition-colors" style={{ ["--brand-accent" as any]: viewMode === 'shape' ? accentColor : (brand.colors.geometricPalette?.[0] || accentColor) }}>{item.label}</h3>
                                                        <p className="text-white/40 font-light leading-relaxed text-xl italic group-hover:text-white/70 transition-colors">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>

                                    <button
                                        onClick={() => setViewMode("wall")}
                                        className="flex items-center justify-center gap-6 px-10 py-6 border border-white/5 bg-white/[0.02] text-white/30 hover:text-white transition-all rounded-3xl mt-12 group overflow-hidden relative"
                                    >
                                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity" />
                                        <MoveLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
                                        <span className="text-[11px] uppercase font-black tracking-[0.4em]">Return to Main Collection</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            {/* HIGH-END FOOTER */}
            <footer className="px-12 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 mt-auto relative z-30 bg-black/40 backdrop-blur-2xl">
                <div className="flex items-center gap-6 text-white/20">
                    <div className="w-6 h-6 rounded-md flex items-center justify-center shadow-lg" style={{ background: `linear-gradient(to bottom right, ${accentColor}, #222)` }}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B1221]" />
                    </div>
                    <span className="text-[10px] uppercase font-black tracking-[0.5em] font-mono whitespace-nowrap">
                        Brand Integrity System V2.0 — {brand.name.toUpperCase()}
                    </span>
                </div>

                <div className="flex items-center gap-12 text-white/30">
                    <button className="flex items-center gap-3 hover:text-white transition-colors group">
                        <Share2 className="w-4 h-4" />
                        <span className="text-[9px] font-mono uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">Share</span>
                    </button>
                    <button className="flex items-center gap-3 hover:text-white transition-colors group">
                        <Download className="w-4 h-4" />
                        <span className="text-[9px] font-mono uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">Export</span>
                    </button>
                    <button className="flex items-center gap-3 hover:text-white transition-colors group">
                        <Printer className="w-4 h-4" />
                        <span className="text-[9px] font-mono uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">Print</span>
                    </button>
                </div>
            </footer>
        </div>
    );
}
