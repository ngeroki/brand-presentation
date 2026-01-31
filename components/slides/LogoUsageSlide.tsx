"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BrandData } from "@/data/brands";
import { Share2, Download, Printer, Check, X, Ruler, ShieldAlert, ArrowRight } from "lucide-react";
import { sqc, SQCBackground, SQCTag } from "@/styles/sqc-theme";

export default function LogoUsageSlide({ brand, variant }: { brand: BrandData; variant: 'full-shape' | 'geometric' }) {
    // Logo variations
    const activeLogo = variant === 'full-shape' ? brand.logos.transparentFull : brand.logos.transparentGeo;
    const whiteLogoForDark = variant === 'full-shape' ? brand.logos.transparentFullWhite : brand.logos.transparentGeoWhite;

    // Theme
    const accentColor = brand.colors.accent || "#C5A572";

    return (
        <div className="relative min-h-screen bg-[#0B1221] text-white selection:bg-[#C5A572] selection:text-[#0B1221] overflow-hidden">
            <SQCBackground />

            {/* HIGH-END AMBIENCE */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(to right, ${accentColor} 1px, transparent 1px), linear-gradient(to bottom, ${accentColor} 1px, transparent 1px)`,
                        backgroundSize: '80px 80px',
                        maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 90%)'
                    }}
                />
            </div>

            <main className="relative z-10 w-full max-w-[1400px] mx-auto px-8 pt-16 pb-32 space-y-24">

                {/* HEADER - Cinematic Title */}
                <header className="flex flex-col items-center text-center space-y-8 mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <SQCTag className="px-6 py-2 bg-white/5 border-white/10 backdrop-blur-xl">
                            Corporate Standard // IDENTITY_GUIDELINES
                        </SQCTag>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl lg:text-[6rem] font-black tracking-widest uppercase leading-none text-white">
                            Logo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#EBB218] filter drop-shadow-[0_0_30px_rgba(197,165,114,0.3)]">Architecture</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-white/30 font-light leading-relaxed italic">
                            Preserving the structural sanctity of {brand.name} through mathematical exclusion and high-fidelity clearance.
                        </p>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* LEFT: Clear Space Technical Diagram - 3D PERSPECTIVE STAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="lg:col-span-7 group perspective-2000"
                    >
                        <motion.div
                            whileHover={{ rotateX: 2, rotateY: -2, scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 100, damping: 30 }}
                            className="relative w-full aspect-[4/3] bg-[#E2E8F0] rounded-[4rem] overflow-hidden shadow-[0_0_120px_rgba(0,0,0,0.6)] border border-white/10 transform-gpu"
                        >
                            {/* Layered Textures */}
                            <div className="absolute inset-0 opacity-[0.8] mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.9)_0%,rgba(203,213,225,1)_100%)]" />

                            {/* Technical Grid Overlay */}
                            <div className="absolute inset-0 opacity-[0.2]"
                                style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '32px 32px' }}
                            />

                            {/* Viewport Corners */}
                            <div className="absolute inset-16 border-2 border-slate-900/10 rounded-[3rem] pointer-events-none">
                                <div className="absolute top-0 left-0 w-20 h-20 border-t-[4px] border-l-[4px] border-slate-900/80 rounded-tl-[2rem]" />
                                <div className="absolute top-0 right-0 w-20 h-20 border-t-[4px] border-r-[4px] border-slate-900/80 rounded-tr-[2rem]" />
                                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-[4px] border-l-[4px] border-slate-900/80 rounded-bl-[2rem]" />
                                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-[4px] border-r-[4px] border-slate-900/80 rounded-br-[2rem]" />
                            </div>

                            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-20">
                                {/* Clear Space Box - Active measurement HUD */}
                                <div className="relative p-20 border border-dashed border-slate-900/30 rounded-2xl group-hover:border-slate-900/60 transition-colors duration-1000">
                                    {/* Dimension Lines */}
                                    <div className="absolute -top-10 left-0 w-full flex justify-between items-center text-[10px] font-mono text-slate-800 font-black tracking-widest px-4">
                                        <div className="w-px h-6 bg-slate-900/40" />
                                        <span>[ EXCLUSION_X1 ]</span>
                                        <div className="w-px h-6 bg-slate-900/40" />
                                    </div>
                                    <div className="absolute top-0 -left-10 h-full flex flex-col justify-between items-center text-[10px] font-mono text-slate-800 font-black tracking-widest py-4">
                                        <div className="h-px w-6 bg-slate-900/40" />
                                        <span className="rotate-90">SCALE_VERT</span>
                                        <div className="h-px w-6 bg-slate-900/40" />
                                    </div>

                                    {/* Logo Case */}
                                    <div className="relative w-56 h-56 md:w-80 md:h-80 filter drop-shadow-[0_45px_70px_rgba(15,23,42,0.2)] group-hover:scale-110 transition-transform duration-1000">
                                        <Image
                                            src={brand.logos.nobgFull}
                                            alt="Clear Space Diagram"
                                            fill
                                            className="object-contain"
                                            unoptimized
                                        />
                                    </div>
                                </div>

                                {/* HUD Legend */}
                                <div className="mt-12 flex flex-col items-center gap-4">
                                    <div className="flex items-center gap-4 px-6 py-2 bg-slate-900/90 text-white rounded-full shadow-2xl backdrop-blur-xl">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                                        <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em]">Protected_Zone: Active</span>
                                    </div>
                                    <p className="text-slate-600 font-medium text-sm leading-relaxed max-w-sm text-center">
                                        "A non-negotiable perimeter ensuring absolute visual sovereignty."
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT: Rules Grid - HIGH-GLASS CARDS */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div className="grid grid-cols-2 gap-6 flex-1">
                            {/* DO: High Contrast */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-black/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden group hover:border-green-500/30 transition-all shadow-2xl"
                            >
                                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500">
                                    <Check className="w-5 h-5" />
                                </div>
                                <div className="h-40 w-full relative mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 mt-6 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]">
                                    <Image src={whiteLogoForDark} alt="Correct Usage" fill className="object-contain" unoptimized />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-mono font-black text-green-500 uppercase tracking-widest">PASSED</p>
                                    <h4 className="text-xl font-black text-white/90">Use High Contrast</h4>
                                </div>
                            </motion.div>

                            {/* DO: Clean Background */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-white/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden group hover:shadow-[0_30px_60px_rgba(255,255,255,0.1)] transition-all"
                            >
                                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500">
                                    <Check className="w-5 h-5" />
                                </div>
                                <div className="h-40 w-full relative mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 mt-6 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)]">
                                    <Image src={activeLogo} alt="Correct Usage" fill className="object-contain" unoptimized />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-mono font-black text-green-600 uppercase tracking-widest">OPTIMAL</p>
                                    <h4 className="text-xl font-black text-slate-900">Clean Backgrounds</h4>
                                </div>
                            </motion.div>

                            {/* DONT: Low Contrast */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-white/[0.02] border border-red-500/10 rounded-[2.5rem] p-8 relative overflow-hidden group hover:bg-red-500/[0.03] transition-all"
                            >
                                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500">
                                    <X className="w-5 h-5" />
                                </div>
                                <div className="h-40 w-full relative mb-6 opacity-5 blur-[2px] mt-6">
                                    <Image src={activeLogo} alt="Incorrect Usage" fill className="object-contain" unoptimized />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-mono font-black text-red-500 opacity-60 uppercase tracking-widest">FAILED</p>
                                    <h4 className="text-xl font-black text-white/40">Avoid Low Contrast</h4>
                                </div>
                            </motion.div>

                            {/* DONT: Distort */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="bg-white/[0.02] border border-red-500/10 rounded-[2.5rem] p-8 relative overflow-hidden group hover:bg-red-500/[0.03] transition-all"
                            >
                                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500">
                                    <X className="w-5 h-5" />
                                </div>
                                <div className="h-40 w-full relative mb-6 mt-6">
                                    <div className="absolute inset-0 scale-x-[1.5] scale-y-[0.6] opacity-20 filter blur-[1px]">
                                        <Image src={whiteLogoForDark} alt="Incorrect Usage" fill className="object-contain" unoptimized />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-mono font-black text-red-500 opacity-60 uppercase tracking-widest">VIOLATION</p>
                                    <h4 className="text-xl font-black text-white/40">Do Not Distort</h4>
                                </div>
                            </motion.div>
                        </div>

                        {/* Minimum Size Bar - Technical spec strip */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 flex items-center justify-between shadow-2xl"
                        >
                            <div className="flex gap-8 items-center">
                                <div className="w-14 h-14 rounded-2xl bg-[#C5A572]/10 flex items-center justify-center text-[#C5A572]">
                                    <Ruler className="w-7 h-7" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[11px] font-mono font-black text-[#C5A572] uppercase tracking-[0.4em]">Minimum_Scale_Threshold</span>
                                    <div className="flex gap-4">
                                        <p className="text-white font-mono text-xl font-black italic">P: 20mm</p>
                                        <p className="text-white/40 font-mono text-xl font-black italic">// D: 60px</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-end gap-10 opacity-30 group">
                                <div className="relative w-8 h-8 group-hover:scale-110 transition-transform"><Image src={whiteLogoForDark} alt="Small" fill className="object-contain" unoptimized /></div>
                                <div className="relative w-16 h-16 group-hover:scale-110 transition-transform"><Image src={whiteLogoForDark} alt="Medium" fill className="object-contain" unoptimized /></div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* FINAL DIRECTIVE - BRAND MANIFESTO STAGE */}
                <motion.section
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative p-20 lg:p-32 rounded-[5rem] overflow-hidden mt-16"
                >
                    {/* Deep Cinematic Background */}
                    <div className="absolute inset-0 bg-[#0F1629] z-0" />
                    <div className="absolute inset-0 opacity-40 mix-blend-overlay z-10"
                        style={{ background: `radial-gradient(circle at 50% 100%, ${accentColor} 0%, transparent 70%)` }}
                    />
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-10"
                        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '64px 64px' }}
                    />

                    <div className="relative z-20 space-y-16 max-w-5xl mx-auto text-center flex flex-col items-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", damping: 15 }}
                        >
                            <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center p-4 backdrop-blur-3xl bg-white/5">
                                <ShieldAlert className="w-full h-full text-[#C5A572]" />
                            </div>
                        </motion.div>

                        <div className="space-y-12">
                            <SQCTag className="mx-auto block w-fit">The Core Mandate</SQCTag>
                            <h3 className="text-4xl lg:text-8xl font-black uppercase tracking-[calc(-0.06em)] leading-[0.8] text-white">
                                "{brand.brandEssence?.tagline || '"BERGERAK DENGAN ARAH, BERDIRI DENGAN STRUKTUR, MENJAGA NILAI."'}"
                            </h3>
                            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mx-auto" />
                            <p className="text-xl lg:text-3xl text-white/40 font-light leading-relaxed max-w-4xl mx-auto italic">
                                {brand.brandEssence?.description || `Safar Qawwiy Corp adalah holding company yang berfokus pada penjagaan nilai, tata kelola yang kuat, dan pertumbuhan jangka panjang. Bergerak dengan arah, berdiri dengan struktur, dan menjaga nilai dalam jangka panjang.`}
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <div className="px-6 py-2 border border-white/10 rounded-full text-[10px] font-mono font-black tracking-widest uppercase text-white/20">AUTHORITY_CERTIFIED</div>
                            <div className="px-6 py-2 border border-white/10 rounded-full text-[10px] font-mono font-black tracking-widest uppercase text-white/20">SYSTEM_STABLE</div>
                        </div>
                    </div>
                </motion.section>

            </main >

            <footer className="px-12 py-10 border-t border-white/5 flex justify-between items-center text-white/20 text-[10px] uppercase relative z-10 font-mono tracking-widest bg-black/40 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span>Identity Sovereign Documentation_V2.0</span>
                </div>
                <div className="flex items-center gap-8">
                    <span>Confidential_Protocol // SQC_IDENTITY</span>
                    <span className="px-3 py-1 bg-white/5 rounded border border-white/10">S_LEVEL_01</span>
                </div>
            </footer>

            <style jsx global>{`
                .perspective-2000 {
                    perspective: 2000px;
                }
            `}</style>
        </div >
    );
}
