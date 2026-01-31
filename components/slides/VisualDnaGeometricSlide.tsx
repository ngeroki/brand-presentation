"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, Zap, Landmark, Ruler, Compass, Anchor, Scale, Layout } from "lucide-react";
import Image from "next/image";
import { BrandData } from "@/data/brands";
import { SQCBackground, SQCTag } from "@/styles/sqc-theme";
import { mockupImages } from "@/data/mockups";

export default function VisualDnaGeometricSlide({ brand }: { brand: BrandData }) {
    const accentColor = brand.colors.accent;
    const variantMockups = mockupImages[brand.id]?.['geometric'] || [];

    // Logic Points Mapping (Geometric flavored icons)
    const icons = [
        <Shield key="0" className="w-5 h-5" style={{ color: accentColor }} />,
        <Ruler key="1" className="w-5 h-5" style={{ color: accentColor }} />,
        <Compass key="2" className="w-5 h-5" style={{ color: accentColor }} />,
        <Anchor key="3" className="w-5 h-5" style={{ color: accentColor }} />,
        <Scale key="4" className="w-5 h-5" style={{ color: accentColor }} />,
        <Layout key="5" className="w-5 h-5" style={{ color: accentColor }} />
    ];

    const logicPoints = (brand.geometricPhilosophy?.breakdown || brand.philosophyBreakdown).map((item, index) => ({
        id: (index + 1).toString().padStart(2, '0'),
        title: item.label,
        desc: item.description,
        icon: icons[index % icons.length]
    }));

    const colorMatrix = (brand.colors.geometricPalette || []).map((color, i) => ({
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
    }));

    return (
        <div className="relative min-h-screen bg-[#0B1221] text-white overflow-hidden pb-40 selection:bg-blue-500/30">
            <SQCBackground />

            {/* HIGH-TECH BACKGROUND LAYER */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Brand-Specific Coordinate Grid */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `linear-gradient(to right, ${accentColor} 1px, transparent 1px), linear-gradient(to bottom, ${accentColor} 1px, transparent 1px)`,
                        backgroundSize: '100px 100px',
                        maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 90%)'
                    }}
                />
                {/* Horizontal Scanline */}
                <motion.div
                    animate={{ top: ['-10%', '110%'] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-px blur-[2px]"
                    style={{ background: `linear-gradient(to right, transparent, ${accentColor}80, transparent)` }}
                />
            </div>

            {/* 1. HERO SECTION: GEOMETRIC SPEC */}
            <header className="relative w-full flex flex-col items-center px-8 pt-16 mb-32 z-10">
                {/* Rotating Title Element */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] border border-blue-500/[0.03] rounded-full animate-[spin_100s_linear_infinite] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center text-center space-y-10 w-full max-w-[1280px]"
                >
                    <div className="space-y-6">
                        <SQCTag className="px-6 py-2 bg-white/5 border-white/10" style={{ color: accentColor }}>
                            Precision System Architecture // REV_04.{brand.id.toUpperCase()}
                        </SQCTag>
                        <h1 className="text-6xl lg:text-[8rem] font-black tracking-widest uppercase leading-[0.8] text-white">
                            {brand.id.toUpperCase()} <span className="text-transparent bg-clip-text filter" style={{ backgroundImage: `linear-gradient(to bottom, ${accentColor}, white)`, filter: `drop-shadow(0 0 40px ${accentColor}40)` }}>SYSTEM</span>
                        </h1>
                    </div>

                    <p className="max-w-3xl text-lg lg:text-2xl font-light italic text-white/30 leading-relaxed px-8">
                        "{brand.geometricPhilosophy?.summary || brand.philosophySummary}"
                    </p>

                    {/* BLUEPRINT STAGE - 3D HUD VIEWPORT */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative w-full max-w-4xl aspect-[16/9] perspective-2000"
                    >
                        <div className="relative w-full h-full bg-[#E2E8F0] rounded-[4rem] overflow-hidden shadow-[0_0_120px_rgba(0,0,0,0.6)] border border-white/10 transform-gpu transition-all duration-700">
                            {/* Layered Textures */}
                            <div className="absolute inset-0 opacity-[0.8] mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.9)_0%,rgba(203,213,225,1)_100%)]" />

                            {/* Targetting HUD Layer */}
                            <div className="absolute inset-16 border-2 rounded-[3rem] pointer-events-none opacity-20" style={{ borderColor: accentColor }}>
                                {/* Corners */}
                                <div className="absolute top-0 left-0 w-24 h-24 border-t-[4px] border-l-[4px] border-slate-900/80 rounded-tl-[2rem]" />
                                <div className="absolute top-0 right-0 w-24 h-24 border-t-[4px] border-r-[4px] border-slate-900/80 rounded-tr-[2rem]" />
                                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-[4px] border-l-[4px] border-slate-900/80 rounded-bl-[2rem]" />
                                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-[4px] border-r-[4px] border-slate-900/80 rounded-br-[2rem]" />

                                {/* Coordinates Overlay (Mockup) */}
                                <div className="absolute top-8 left-8 flex flex-col gap-2 font-mono text-[10px] text-slate-900 font-black tracking-widest opacity-60">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                                        <span>COORD_P: 1.618_{brand.id.toUpperCase()}</span>
                                    </div>
                                    <span>RADIAL_DIST: OPTIMAL</span>
                                </div>
                                <div className="absolute bottom-10 right-10 font-mono text-[11px] text-slate-900 font-black uppercase tracking-[0.4em] opacity-80 border-b border-slate-900/20 pb-1">
                                    Master_Spec // {brand.id.toUpperCase()}
                                </div>
                            </div>

                            {/* Rotating HUD Rings */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square rounded-full animate-[spin_60s_linear_infinite] opacity-10" style={{ border: `1px solid ${accentColor}` }} />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square border-dashed rounded-full animate-[spin_40s_linear_infinite_reverse] opacity-20" style={{ border: `1px solid ${accentColor}` }} />

                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                className="relative z-10 w-full h-full flex items-center justify-center p-20"
                            >
                                <Image
                                    src={brand.logos.nobgGeo}
                                    alt={`${brand.name} Geometric Master`}
                                    width={2400}
                                    height={2400}
                                    className="w-[85%] h-[85%] object-contain filter drop-shadow-[0_40px_60px_rgba(15,23,42,0.2)]"
                                    unoptimized
                                />
                                {/* Floating Label Tag */}
                                <div className="absolute top-[20%] right-[10%] p-6 bg-white/60 backdrop-blur-2xl border border-white/40 rounded-[2rem] shadow-2xl space-y-2 group-hover:scale-110 transition-transform duration-700">
                                    <div className="text-[10px] font-mono font-black uppercase tracking-widest" style={{ color: accentColor }}>Topology: Static</div>
                                    <div className="text-xl font-black text-slate-800 uppercase tracking-tighter">Geometric-Node</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </header>

            <main className="relative z-10 max-w-[1400px] mx-auto px-8 space-y-40">

                {/* 2. BLUEPRINT ANATOMY - Laser Cut Cards */}
                <section className="space-y-24">
                    <div className="flex flex-col items-center text-center space-y-6">
                        <SQCTag className="border-white/10" style={{ color: accentColor }}>Engineering Logic Units</SQCTag>
                        <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-none">
                            Blueprint <br /><span className="text-white/20 italic font-light">Anatomy</span>
                        </h2>
                        <div className="h-1 w-32" style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {logicPoints.map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-1 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" style={{ background: `linear-gradient(to right, ${accentColor}33, transparent)` }} />

                                <div className="relative h-full bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[3rem] p-12 flex flex-col gap-10 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden shadow-2xl group-hover:border-white/20">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:rotate-[15deg] transition-all duration-700 shadow-lg" style={{ borderColor: `${accentColor}40` }}>
                                        <div className="scale-150 transition-transform duration-500 group-hover:scale-125">{point.icon}</div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <span className="text-[10px] font-mono font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full tracking-widest uppercase" style={{ color: accentColor }}>SYS_LOGIC: {point.id}</span>
                                        </div>
                                        <h4 className="text-3xl font-black uppercase tracking-tight text-white group-hover:tracking-widest transition-all duration-700">{point.title}</h4>
                                        <p className="text-lg text-white/40 font-light leading-relaxed italic group-hover:text-white/70 transition-colors">
                                            "{point.desc}"
                                        </p>
                                    </div>

                                    {/* Mouse Tracker Ring */}
                                    <div className="absolute -bottom-10 -right-10 w-40 h-40 border rounded-full group-hover:scale-150 transition-transform duration-1000 opacity-10" style={{ borderColor: accentColor }} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 3. THE COLOR MATRIX (TECHNICAL) - Spectral chambers */}
                <section className="space-y-24">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-white/10 pb-20">
                        <div className="space-y-4">
                            <SQCTag className="border-white/10" style={{ color: accentColor }}>System Codification</SQCTag>
                            <h2 className="text-4xl lg:text-[6rem] font-black uppercase tracking-tighter leading-none">Technical <span className="text-white/20 italic font-light">Spectrum</span></h2>
                        </div>
                        <div className="text-right space-y-4">
                            <div className="font-mono text-sm uppercase tracking-[0.5em] font-black opacity-50" style={{ color: accentColor }}>HEXA_CODE_MAPPING_SYSTEM_V.04</div>
                            <div className="h-1 w-24 ml-auto opacity-40" style={{ backgroundColor: accentColor }} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {colorMatrix.map((color, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col md:flex-row gap-16 p-14 bg-white/[0.01] backdrop-blur-[60px] border border-white/5 rounded-[5rem] hover:border-blue-500/20 transition-all duration-1000 group"
                            >
                                <div className="w-full md:w-[300px] aspect-square rounded-[4rem] overflow-hidden relative shadow-[0_60px_100px_rgba(0,0,0,0.5)] border border-white/10 shrink-0">
                                    <div className="absolute inset-0 bg-slate-900 z-0" />
                                    <div className="absolute inset-6 rounded-[3.2rem] overflow-hidden isolate z-10 shadow-inner">
                                        <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110" style={{ backgroundColor: color.hex }} />

                                        {/* Spectral Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/20 mix-blend-overlay" />
                                        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent skew-y-12 translate-y-[-50%] group-hover:translate-y-[0%] transition-transform duration-1000" />
                                        <div className="absolute inset-0 flex items-center justify-center z-20">
                                            <span className="font-mono text-xs text-white/90 font-black tracking-[0.6em] rotate-90 mix-blend-difference drop-shadow-2xl">{color.hex}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center space-y-10 text-center md:text-left flex-1">
                                    <div className="space-y-4">
                                        <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono font-black tracking-widest uppercase mb-2" style={{ color: accentColor }}>
                                            {color.label} // REF_SPEC
                                        </div>
                                        <h4 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-500" style={{ color: color.hex }}>{color.name}</h4>
                                    </div>
                                    <div className="space-y-8">
                                        <div className="relative pl-8 border-l-2" style={{ borderColor: `${accentColor}40` }}>
                                            <p className="text-xl text-white/40 font-light leading-relaxed italic group-hover:text-white/80 transition-colors">
                                                "{color.meaning}"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 5. SYSTEM APPLICATION: REAL-WORLD TESTING - High-Tech Gallery */}
                <section className="space-y-24 pb-40">
                    <div className="flex flex-col items-center text-center space-y-6">
                        <SQCTag className="border-white/10" style={{ color: accentColor }}>System Context & Integration</SQCTag>
                        <h2 className="text-4xl lg:text-[10vw] font-black uppercase tracking-[calc(-0.06em)] leading-[0.8] mb-4">
                            Geometric <br /><span className="text-white/[0.05] italic font-light">Presence</span>
                        </h2>
                        <p className="max-w-2xl text-xl text-white/30 font-light leading-relaxed">
                            Validation of geometric integrity in professional and industrial environments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {variantMockups.map((mockup, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative aspect-square bg-slate-900 border border-white/5 rounded-[4rem] overflow-hidden shadow-2xl"
                            >
                                <Image
                                    src={`/mockups/${brand.id}/geometric/${mockup}`}
                                    alt={`Geo Manifestation ${i + 1}`}
                                    fill
                                    className="object-cover transition-all duration-[1500ms] group-hover:scale-110 group-hover:rotate-1 group-hover:brightness-110"
                                    unoptimized
                                />
                                {/* HUD Overlay UI */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ backgroundColor: `${accentColor}1a` }} />
                                <div className="absolute top-10 left-10 p-4 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-2xl translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                                    <span className="text-[10px] font-mono font-black tracking-widest" style={{ color: accentColor }}>GEO_FIELD_TEST: PASS</span>
                                </div>
                                <div className="absolute bottom-10 right-10 p-5 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-2xl translate-y-[20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 flex items-center gap-4">
                                    <div className="text-right">
                                        <span className="block text-[9px] font-mono text-white/40 uppercase tracking-widest">UNIT_REF</span>
                                        <span className="block text-sm font-black text-white uppercase tracking-tighter">IMPLEMENT_0{i + 1}</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border flex items-center justify-center" style={{ backgroundColor: `${accentColor}33`, borderColor: `${accentColor}66` }}>
                                        <ArrowRight className="w-5 h-5" style={{ color: accentColor }} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <style jsx global>{`
                .perspective-2000 {
                    perspective: 2000px;
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
