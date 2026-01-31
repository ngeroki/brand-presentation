"use client";

import { BrandData } from "@/data/brands";
import Image from "next/image";
import { motion } from "framer-motion";
import { Share2, Download, Printer, Ruler, Pipette, Type, Layers, Box, Maximize2, Compass } from "lucide-react";
import { sqc, SQCBackground, SQCTag } from "@/styles/sqc-theme";

export default function BrandKitSpecsSlide({ brand }: { brand: BrandData }) {
    const accentColor = brand.colors.accent || "#C5A572";

    return (
        <div className="relative min-h-screen bg-[#0B1221] text-white selection:bg-[#C5A572] selection:text-[#0B1221] overflow-hidden flex flex-col">
            <SQCBackground />

            {/* TECHNICAL AMBIENCE */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `linear-gradient(to right, ${accentColor} 1px, transparent 1px), linear-gradient(to bottom, ${accentColor} 1px, transparent 1px)`,
                        backgroundSize: '80px 80px',
                        maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 90%)'
                    }}
                />
                {/* Floating Coordinates */}
                <div className="absolute top-20 right-20 text-[8px] font-mono text-white/10 tracking-[0.5em] uppercase vertical-text hidden lg:block">REF_GRID_X_8_PT</div>
            </div>

            <main className="relative z-10 w-full max-w-[1600px] mx-auto px-12 pt-16 pb-32 flex flex-col items-center">

                {/* HEADER - Systematic Blueprint */}
                <header className="w-full flex flex-col items-center text-center space-y-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <SQCTag className="px-8 py-2 bg-white/5 border-white/10 backdrop-blur-2xl">
                            <span className="flex items-center gap-3">
                                <Maximize2 className="w-4 h-4 text-[#C5A572]" />
                                Technical Documentation // Specs V1.0
                            </span>
                        </SQCTag>
                    </motion.div>

                    <div className="space-y-6">
                        <h1 className="text-6xl lg:text-[9rem] font-black uppercase tracking-[calc(-0.06em)] leading-[0.8] text-white">
                            Technical <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#EBB218] filter drop-shadow-[0_0_30px_rgba(197,165,114,0.3)]">&amp; Specs</span>
                        </h1>
                        <p className="max-w-4xl mx-auto text-xl lg:text-3xl font-light leading-relaxed text-white/30 italic">
                            Standarisasi teknis untuk memastikan <span className="font-black text-white italic px-2">Visual Consistency</span> di seluruh media ekosistem {brand.name}.
                        </p>
                    </div>
                </header>

                <div className="grid grid-cols-12 gap-12 w-full max-w-7xl">

                    {/* SECTION 1: GRID & CONSTRUCTION */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="col-span-12 lg:col-span-5 flex flex-col"
                    >
                        <div className="group relative bg-[#0F1629]/60 backdrop-blur-3xl border border-white/5 rounded-[4rem] p-12 overflow-hidden shadow-2xl hover:border-[#C5A572]/30 transition-all duration-700">
                            <div className="flex items-center justify-between mb-12">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#C5A572] rounded-xl flex items-center justify-center">
                                        <Ruler className="w-6 h-6 text-[#0B1221]" />
                                    </div>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Grid Construction</h3>
                                </div>
                                <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">Node: STR_01</span>
                            </div>

                            {/* Blueprint Viewport */}
                            <div className="relative aspect-square bg-slate-900/40 rounded-[2.5rem] border border-white/5 flex items-center justify-center p-16 overflow-hidden group/blueprint shadow-inner">
                                {/* Grid Lines Overlay */}
                                <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
                                    style={{
                                        backgroundImage: `linear-gradient(to right, #C5A572 1px, transparent 1px), linear-gradient(to bottom, #C5A572 1px, transparent 1px)`,
                                        backgroundSize: '20px 20px'
                                    }}
                                />
                                <div className="absolute inset-0 border-[40px] border-[#0B1221]/80 rounded-[2.5rem] pointer-events-none z-10" />

                                <div className="relative w-full h-full z-0">
                                    <Image
                                        src={brand.logos.geometric}
                                        alt="Construction Grid"
                                        fill
                                        className="object-contain p-8 group-hover/blueprint:scale-110 transition-transform duration-[2s]"
                                        unoptimized
                                    />
                                </div>

                                {/* HUD Elements */}
                                <div className="absolute top-8 right-8 flex flex-col items-end gap-1 opacity-20">
                                    <div className="h-px w-10 bg-white" />
                                    <span className="text-[8px] font-mono">X_COORD: 40.2</span>
                                </div>
                                <div className="absolute bottom-1/2 left-0 w-full h-px bg-[#C5A572]/30 border-dashed border-t pointer-events-none" />
                                <div className="absolute left-1/2 top-0 h-full w-px bg-[#C5A572]/30 border-dashed border-l pointer-events-none" />
                            </div>

                            <div className="mt-12 space-y-6">
                                <h4 className="text-xl font-black text-white uppercase tracking-tight">Konstruksi Geometris</h4>
                                <p className="text-lg text-white/40 font-light leading-relaxed italic pr-4">
                                    Seluruh lambang dibangun di atas sistem <span className="text-white font-black italic">8pt Grid</span> untuk memastikan keseimbangan visual dan skalabilitas sempurna dari digital hingga fisik.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* SECTION 2: PALETTE & TYPOGRAPHY */}
                    <div className="col-span-12 lg:col-span-7 flex flex-col gap-12">

                        {/* Color Modules */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0F1629]/60 backdrop-blur-3xl border border-white/5 rounded-[4rem] p-12 overflow-hidden shadow-2xl"
                        >
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                                    <Pipette className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter text-left">Primary Palette</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    { name: 'Primary', hex: brand.colors.primary, label: 'CORE_VAL' },
                                    { name: 'Secondary', hex: brand.colors.secondary, label: 'SUB_S' },
                                    { name: 'Accent', hex: accentColor, label: 'ACT_Z' }
                                ].map((color, i) => (
                                    <div key={i} className="group flex flex-col gap-6">
                                        <div
                                            className="w-full aspect-[4/3] rounded-[2rem] shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:rotate-2 relative overflow-hidden"
                                            style={{ backgroundColor: color.hex }}
                                        >
                                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="absolute bottom-4 left-4 text-[9px] font-mono text-black/20 font-black tracking-widest uppercase">{color.label}</div>
                                        </div>
                                        <div className="px-2">
                                            <p className="text-base font-black text-white uppercase tracking-tighter mb-1">{color.name}</p>
                                            <p className="text-xs font-mono text-white/30 uppercase tracking-[0.3em]">{color.hex}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Typography Unit */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#0F1629]/60 backdrop-blur-3xl border border-white/5 rounded-[4rem] p-12 overflow-hidden shadow-2xl relative"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-[0.02]">
                                <Type className="w-64 h-64 text-white" />
                            </div>

                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                                    <Type className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Identity Typography</h3>
                            </div>

                            <div className="space-y-10 relative z-10">
                                <div className="space-y-4">
                                    <h4 className="text-5xl md:text-7xl font-black text-white uppercase tracking-[calc(-0.06em)] leading-none">
                                        {brand.typography.sample}
                                    </h4>
                                    <div className="flex items-center gap-6">
                                        <div className="h-px w-20 bg-[#C5A572]" />
                                        <p className="text-xl font-light text-white/40 tracking-widest uppercase">
                                            {brand.typography.fontName} — {brand.name} Style
                                        </p>
                                    </div>
                                </div>

                                <div className="p-8 bg-black/40 rounded-[2rem] border border-white/5">
                                    <p className="text-lg text-white/20 leading-relaxed font-mono tracking-widest break-all">
                                        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                                        abcdefghijklmnopqrstuvwxyz<br />
                                        1234567890 !@#$%^&*()
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            {/* HIGH-END FOOTER */}
            <footer className="w-full mt-auto py-10 px-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 bg-black/40 backdrop-blur-2xl">
                <div className="flex items-center gap-6 text-white/20">
                    <Box className="w-6 h-6" />
                    <span className="text-[10px] font-mono font-black tracking-widest uppercase">System Specs // Verified Build 4.0.0</span>
                </div>

                <div className="flex items-center gap-12 text-white/30 text-[10px] font-mono uppercase tracking-[0.4em]">
                    <span>REF: SQC_TECH_2026</span>
                    <div className="flex gap-4">
                        <Share2 className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                        <Download className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                        <Printer className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                    </div>
                </div>
            </footer>
        </div>
    );
}
