"use client";

import { motion } from "framer-motion";
import { BrandData } from "@/data/brands";
import Image from "next/image";
import { ArrowRight, Compass, Shield, Users, Layers, Activity, Eye } from "lucide-react";
import { SQCBackground, SQCTag } from "@/styles/sqc-theme";
import { mockupImages } from "@/data/mockups";

export default function VisualDnaNarrativeSlide({ brand }: { brand: BrandData }) {
    const accentColor = brand.colors.accent;

    // Dynamic DNS mapping from brand data
    const logicBreakdown = brand.narrativePhilosophy?.breakdown || brand.philosophyBreakdown;
    const dnas = logicBreakdown.map((item, idx) => ({
        number: (idx + 1).toString().padStart(2, '0'),
        title: item.label,
        icon: [
            <Compass className="w-6 h-6" />,
            <Shield className="w-6 h-6" />,
            <Users className="w-6 h-6" />,
            <Layers className="w-6 h-6" />,
            <Activity className="w-6 h-6" />,
            <Eye className="w-6 h-6" />
        ][idx % 6],
        desc: item.description
    }));

    const getBrandNarrative = () => {
        if (brand.id === 'mtb') return { title: "Energi", subtitle: "Awal & Potensi", accent: "from-[#FFBE18] to-[#B17814]" };
        if (brand.id === 'mre') return { title: "Otoritas", subtitle: "Mandat & Kendali", accent: "from-[#E6AF4B] to-[#D6A34A]" };
        return { title: "Kiblat", subtitle: "Arah & Nilai", accent: "from-[#C5A572] to-[#EBB218]" };
    };

    const narrative = getBrandNarrative();

    return (
        <div className="relative min-h-screen bg-[#0B1221] text-white selection:bg-[#C5A572] selection:text-[#0B1221] overflow-hidden pb-20">
            <SQCBackground />

            {/* DYNAMIC BACKGROUND OVERLAY */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Moving Grid */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(to right, ${accentColor} 1px, transparent 1px), linear-gradient(to bottom, ${accentColor} 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
                    }}
                />
                {/* Floating Light Blobs */}
                <motion.div
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, -30, 30, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full blur-[120px]"
                    style={{ backgroundColor: accentColor, filter: 'blur(120px) saturate(1.5)' }}
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-8 pt-16 pb-24 relative z-10">

                {/* HEADER SECTION - Premium Typography */}
                <header className="relative flex flex-col items-center text-center space-y-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <SQCTag className="px-6 py-2 bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
                            Philosophy Analysis // {brand.id.toUpperCase()}_CORE
                        </SQCTag>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="space-y-4"
                    >
                        <h1 className="text-4xl lg:text-[3.5rem] font-black tracking-tighter leading-[0.85] text-white uppercase">
                            {narrative.title} sebagai <br />
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${narrative.accent} filter drop-shadow-[0_0_30px_rgba(197,165,114,0.3)]`}>
                                {narrative.subtitle}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="max-w-2xl text-base lg:text-lg font-light leading-relaxed text-slate-400 italic"
                    >
                        "{brand.narrativePhilosophy?.summary || brand.philosophySummary}"
                    </motion.p>
                </header>

                {/* SECTION 1: THE CORE SHAPE - Immersive Stage */}
                <section className="relative w-full mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="group perspective-2000"
                    >
                        <motion.div
                            whileHover={{ rotateX: 2, rotateY: -2, scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 100, damping: 30 }}
                            className="relative bg-[#0F1629]/60 backdrop-blur-3xl border border-white/10 p-12 lg:p-24 shadow-[0_0_100px_rgba(0,0,0,0.5)] rounded-[4rem] overflow-hidden"
                        >
                            {/* Decorative technical elements */}
                            <div className="absolute top-8 left-8 flex flex-col gap-2">
                                <div className="text-[10px] font-mono font-black tracking-widest uppercase" style={{ color: accentColor }}>SYSTM_REF: DNA_ESSENCE</div>
                                <div className="w-12 h-px bg-white/10" />
                            </div>

                            {/* Animated Background Grid in Stage */}
                            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 to-transparent pointer-events-none opacity-20" />

                            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
                                {/* Left: The Logo Box */}
                                <div className="flex-1 w-full flex justify-center lg:justify-end">
                                    <div className="relative w-full max-w-md aspect-square flex items-center justify-center p-12 bg-black/40 border border-white/5 shadow-inner rounded-[3rem] group-hover:border-white/20 transition-all duration-700">
                                        <div className="absolute inset-0 border border-dashed border-white/10 m-6 rounded-[2.5rem] pointer-events-none" />

                                        {/* Corner Brackets */}
                                        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 rounded-tl-2xl opacity-40" style={{ borderColor: accentColor }} />
                                        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 rounded-tr-2xl opacity-40" style={{ borderColor: accentColor }} />
                                        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 rounded-bl-2xl opacity-40" style={{ borderColor: accentColor }} />
                                        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 rounded-br-2xl opacity-40" style={{ borderColor: accentColor }} />

                                        <Image
                                            src={brand.logos.fullyShape}
                                            alt="Fully Shape Logo"
                                            width={800}
                                            height={800}
                                            className="w-full h-auto object-contain brightness-110 drop-shadow-[0_0_40px_rgba(197,165,114,0.2)] group-hover:scale-110 transition-transform duration-1000"
                                            unoptimized
                                        />
                                    </div>
                                </div>

                                {/* Right: The Explanation */}
                                <div className="flex-1 w-full space-y-10 text-center lg:text-left">
                                    <div className="space-y-4">
                                        <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter text-white">
                                            The <span style={{ color: accentColor }}>Essence</span>
                                        </h2>
                                        <div className="h-px w-24 mx-auto lg:mx-0" style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }} />
                                    </div>
                                    <p className="text-slate-400 leading-relaxed text-base lg:text-lg font-light italic">
                                        {brand.narrativePhilosophy?.meaning || brand.meaning}
                                    </p>
                                    <div className="grid grid-cols-2 gap-6 pt-6 font-mono">
                                        <div className="p-6 bg-white/[0.03] border border-white/5 rounded-3xl hover:bg-white/[0.06] transition-all group-hover:scale-105 duration-500">
                                            <span className="block text-4xl font-black mb-1" style={{ color: accentColor }}>{dnas.length}</span>
                                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">DNA Elements</span>
                                        </div>
                                        <div className="p-6 bg-white/[0.03] border border-white/5 rounded-3xl hover:bg-white/[0.06] transition-all group-hover:scale-105 duration-500 delay-75">
                                            <span className="block text-4xl font-black mb-1" style={{ color: accentColor }}>01</span>
                                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">Master Narrative</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* DIVIDER STRIP - Creative Label */}
                <div className="relative w-full flex items-center justify-center mb-32">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="absolute px-10 py-3 bg-[#0B1221] border border-white/10 rounded-full text-[11px] font-black font-mono tracking-[0.5em] uppercase backdrop-blur-3xl" style={{ color: accentColor }}>
                        Part II // The Philosophy Breakdown
                    </div>
                </div>

                {/* SECTION 2: THE PHILOSOPHY GRID - High-End Glass Cards */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {dnas.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-2 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `linear-gradient(to bottom right, ${accentColor}1a, transparent)` }} />

                            <div className="relative h-full bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-12 flex flex-col justify-between min-h-[360px] hover:bg-white/[0.04] transition-all duration-500 group-hover:border-white/20">
                                <div className="space-y-8">
                                    <div className="flex justify-between items-center">
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ color: accentColor }}>
                                            {item.icon}
                                        </div>
                                        <span className="text-[12px] font-mono font-black tracking-widest opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: accentColor }}>
                                            POINT_{item.number}
                                        </span>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:tracking-widest transition-all duration-500">
                                            {item.title}
                                        </h3>
                                        <p className="text-base text-slate-400 leading-relaxed font-light italic group-hover:text-white/70 transition-colors">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-8 mt-8 border-t border-white/5 flex justify-end">
                                    <ArrowRight className="w-4 h-4 text-white/20 group-hover:translate-x-1 transition-all" style={{ color: accentColor }} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* DIVIDER STRIP */}
                <div className="relative w-full flex items-center justify-center my-32">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="absolute px-10 py-3 bg-[#0B1221] border border-white/10 rounded-full text-[11px] font-black font-mono tracking-[0.5em] uppercase text-[#C5A572] backdrop-blur-3xl">
                        Part III // Color Authority Codification
                    </div>
                </div>

                {/* SECTION 3: COLOR SYSTEM - Cinematic chambers */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
                    {brand.colors.narrativePalette?.map((color, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-[#0F1629]/40 backdrop-blur-2xl border border-white/10 p-4 flex flex-col group rounded-[3rem] shadow-2xl"
                        >
                            <div className="flex-1 min-h-[300px] rounded-[2rem] flex items-center justify-center relative overflow-hidden border border-white/10 shadow-inner" style={{ backgroundColor: color }}>
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 opacity-40" />
                                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent skew-y-12 translate-y-[-50%] group-hover:translate-y-[0%] transition-transform duration-1000" />
                                {/* Dark overlay on hover for text visibility */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />
                                <span className="relative z-10 text-white font-black uppercase tracking-tight text-2xl lg:text-3xl italic opacity-0 group-hover:opacity-100 transition-all duration-500 px-4 text-center drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
                                    {i === 0 ? 'Foundation.' : i === 1 ? 'Authority.' : 'Excellence.'}
                                </span>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
                                    <span className="font-mono text-sm font-black px-3 py-1 bg-black/60 rounded-lg text-white backdrop-blur-sm">{color}</span>
                                </div>
                            </div>
                            <div className="p-10 space-y-3 text-center">
                                <h4 className="text-base font-black uppercase italic tracking-tighter text-white">
                                    {i === 0 ? 'Primary' : i === 1 ? 'Secondary' : 'Accent'} Tone
                                </h4>
                                <div className="inline-block px-4 py-1.5 bg-black/40 border border-white/10 rounded-full text-[10px] font-mono font-black uppercase tracking-widest" style={{ color: accentColor }}>
                                    CODE • {color}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* SECTION 4: SYSTEM APPLICATION - Narrative Presence Gallery */}
                <section className="space-y-24 pb-40">
                    {/* DIVIDER STRIP - Creative Label */}
                    <div className="relative w-full flex items-center justify-center mb-32">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <div className="absolute px-10 py-3 bg-[#0B1221] border border-white/10 rounded-full text-[11px] font-black font-mono tracking-[0.5em] uppercase backdrop-blur-3xl" style={{ color: accentColor }}>
                            Part IV // Narrative Presence
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center space-y-6">
                        <SQCTag className="border-white/10" style={{ color: accentColor }}>Real-World Manifestation</SQCTag>
                        <h2 className="text-4xl lg:text-[8vw] font-black uppercase tracking-[calc(-0.06em)] leading-[0.8] mb-4">
                            Organic <br /><span className="text-white/[0.05] italic font-light">Presence</span>
                        </h2>
                        <p className="max-w-2xl text-xl text-white/30 font-light leading-relaxed">
                            Application of symbolic narratives in professional environments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {mockupImages[brand.id]?.['full-shape']?.map((mockup: string, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative aspect-square bg-[#0F1629] border border-white/5 rounded-[4rem] overflow-hidden shadow-2xl"
                            >
                                <Image
                                    src={`/mockups/${brand.id}/full-shape/${mockup}`}
                                    alt={`Narrative Manifestation ${i + 1}`}
                                    fill
                                    className="object-cover transition-all duration-[1500ms] group-hover:scale-110 group-hover:brightness-110"
                                    unoptimized
                                />
                                {/* Overlay UI */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ backgroundColor: `${accentColor}1a` }} />
                                <div className="absolute top-10 left-10 p-4 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-2xl translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                                    <span className="text-[10px] font-mono font-black tracking-widest" style={{ color: accentColor }}>DNA_FIELD_TEST: PASS</span>
                                </div>
                                <div className="absolute bottom-10 right-10 p-5 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-2xl translate-y-[20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 flex items-center gap-4">
                                    <div className="text-right">
                                        <span className="block text-[9px] font-mono text-white/40 uppercase tracking-widest">UNIT_REF</span>
                                        <span className="block text-sm font-black text-white uppercase tracking-tighter">PRESENCE_0{i + 1}</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border flex items-center justify-center" style={{ backgroundColor: `${accentColor}33`, borderColor: `${accentColor}66` }}>
                                        <ArrowRight className="w-5 h-5" style={{ color: accentColor }} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="text-center pb-20 pt-32 border-t border-white/5 relative z-10 flex flex-col items-center gap-6">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 120 }}
                        className="h-1 rounded-full"
                        style={{ backgroundColor: `${accentColor}4d` }}
                    />
                    <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-slate-600 font-black">
                        {brand.name.toUpperCase()} // Internal Analysis // Confidential_V1
                    </span>
                </footer>

            </div>

            <style jsx global>{`
                .perspective-2000 {
                    perspective: 2000px;
                }
            `}</style>
        </div>
    );
}
