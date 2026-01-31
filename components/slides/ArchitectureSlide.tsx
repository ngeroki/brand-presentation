"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Zap, Globe, Shield, Layers, Workflow, Network, Activity } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { sqc, SQCBackground, SQCTag } from "@/styles/sqc-theme";

export default function ArchitectureSlide() {
    const accentColor = "#C5A572"; // Standard SQC Gold

    return (
        <div className="relative min-h-screen bg-[#0B1221] text-white selection:bg-[#C5A572] selection:text-[#0B1221] overflow-hidden flex flex-col">
            <SQCBackground />

            {/* AMBIENT ATMOSPHERE */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 50% 50%, ${accentColor} 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
                <motion.div
                    animate={{ opacity: [0.1, 0.15, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-0 inset-x-0 h-[60vh] bg-gradient-to-b from-[#C5A572]/10 to-transparent"
                />
            </div>

            <main className="relative z-10 w-full max-w-[1500px] mx-auto px-12 pt-16 pb-32 flex flex-col items-center">

                {/* HEADER: CORPORATE MONOLITH */}
                <header className="w-full flex flex-col items-center text-center space-y-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <SQCTag className="px-8 py-2 bg-white/5 border-white/10 backdrop-blur-2xl">
                            <span className="flex items-center gap-3">
                                <Network className="w-4 h-4 text-[#C5A572]" />
                                Corporate Ecosystem Architecture
                            </span>
                        </SQCTag>
                    </motion.div>

                    <div className="space-y-6">
                        <h1 className="text-7xl lg:text-[9rem] font-black uppercase tracking-[calc(-0.06em)] leading-[0.8] text-white">
                            Arsitektur <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#EBB218] filter drop-shadow-[0_0_30px_rgba(197,165,114,0.3)]">Brand</span>
                        </h1>
                        <p className="max-w-4xl mx-auto text-xl lg:text-3xl font-light leading-relaxed text-white/30 italic">
                            Sistem <span className="font-black text-white italic px-2 underline decoration-[#C5A572]/40">Branded House</span> yang menempatkan Safar Qawiyy sebagai kiblat nilai di balik setiap inovasi strategis.
                        </p>
                    </div>

                    <div className="flex gap-6 mt-8">
                        <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
                            <Activity className="w-4 h-4 text-[#C5A572]" />
                            <span className="text-[10px] font-mono font-black tracking-widest text-white/40 uppercase">Unified Strength Protocol: ONLINE</span>
                        </div>
                    </div>
                </header>

                {/* HIERARCHY STAGE */}
                <div className="w-full flex flex-col items-center relative">

                    {/* LEVEL 1: THE PRIMARY MASTER (SQC) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-20 w-full max-w-5xl"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-b from-[#C5A572]/20 to-transparent blur-3xl opacity-50" />

                        <Link
                            href="/showcase/sqc"
                            className="group relative block bg-[#0F1629]/60 backdrop-blur-3xl border border-[#C5A572]/20 rounded-[4rem] p-10 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.6)] hover:border-[#C5A572]/50 transition-all duration-700"
                        >
                            <div className="flex flex-col lg:flex-row items-center gap-16">
                                {/* Visual Monolith */}
                                <div className="w-full lg:w-[45%] relative aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                                    <Image
                                        src="/images/architecture/sqc-hq-new.png"
                                        alt="SQC Master Node"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-transparent to-transparent opacity-60" />
                                    <div className="absolute bottom-8 left-8 flex items-center gap-4 text-[10px] font-mono tracking-widest text-[#C5A572] font-black uppercase bg-black/40 backdrop-blur-lg px-4 py-2 rounded-full border border-[#C5A572]/20">
                                        Primary_Node // Level_00
                                    </div>
                                </div>

                                {/* Content Logic */}
                                <div className="flex-1 space-y-8 text-center lg:text-left">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-center lg:justify-start gap-4">
                                            <div className="w-14 h-14 bg-[#C5A572] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(197,165,114,0.3)] group-hover:rotate-12 transition-transform">
                                                <Shield className="w-7 h-7 text-[#0B1221]" />
                                            </div>
                                            <span className="text-[11px] font-mono font-black text-white/40 uppercase tracking-[0.4em]">Guardian Holding Unit</span>
                                        </div>
                                        <h2 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                                            Safar Qawiyy <br />
                                            <span className="text-white/20 italic font-light">Corp.</span>
                                        </h2>
                                    </div>
                                    <p className="text-xl text-white/40 font-light leading-relaxed italic max-w-xl">
                                        Strategic holding yang berperan sebagai penjaga nilai, arah teknis, dan integritas seluruh entitas dalam perjalanan kedaulatan jangka panjang.
                                    </p>
                                    <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
                                        <div className="flex items-center gap-3 text-[#C5A572] font-mono text-[11px] font-black uppercase tracking-widest group-hover:gap-6 transition-all">
                                            Expand Vision <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative HUD Elements */}
                            <div className="absolute top-10 right-10 text-[9px] font-mono text-white/10 tracking-[0.5em] uppercase pointer-events-none">SYS_RESERVED // 2026</div>
                        </Link>
                    </motion.div>

                    {/* HOLOGRAPHIC CONNECTORS */}
                    <div className="relative py-32 flex flex-col items-center">
                        {/* Main Pillar */}
                        <div className="w-px h-32 bg-gradient-to-b from-[#C5A572] via-[#C5A572]/40 to-white/10 relative">
                            <div className="absolute inset-0 bg-[#C5A572] blur-md opacity-20" />
                        </div>

                        {/* Horizontal Beam */}
                        <div className="w-[80vw] max-w-5xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent relative shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            {/* Animated Pulse along the beam */}
                            <motion.div
                                animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute top-1/2 -translate-y-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-[#C5A572] to-transparent"
                            />
                        </div>
                    </div>

                    {/* LEVEL 2: SUBSIDIARY GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-7xl">

                        {/* Subsidiary 01: MTB */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group relative flex flex-col items-center"
                        >
                            <div className="absolute top-[-32px] w-px h-8 bg-white/20" />
                            <Link href="/showcase/mtb" className="w-full">
                                <div className="absolute -inset-1 bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[3rem] p-6 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-700 shadow-2xl">
                                    <div className="relative h-56 rounded-[2.5rem] overflow-hidden border border-white/5 mb-8">
                                        <Image
                                            src="/images/architecture/mtb-building.jpg"
                                            alt="MTB Node"
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                            unoptimized
                                        />
                                        <div className="absolute top-6 left-6 flex items-center gap-3 bg-blue-600/90 text-white backdrop-blur-xl px-4 py-2 rounded-2xl shadow-xl">
                                            <Zap className="w-4 h-4" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Upstream Unit</span>
                                        </div>
                                    </div>
                                    <div className="px-6 pb-8 space-y-4 text-center">
                                        <h4 className="text-3xl font-black text-white uppercase tracking-tighter">Matahari Timur Bumi</h4>
                                        <p className="text-lg text-white/30 font-light italic leading-relaxed">
                                            "Energi awal melalui mineral dan energi terbarukan."
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Subsidiary 02: MRE */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="group relative flex flex-col items-center"
                        >
                            <div className="absolute top-[-32px] w-px h-8 bg-[#C5A572]/40" />
                            <Link href="/showcase/mre" className="w-full">
                                <div className="absolute -inset-1 bg-[#C5A572]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative bg-[#0F1629]/60 backdrop-blur-3xl border border-[#C5A572]/10 rounded-[3rem] p-6 hover:border-[#C5A572]/40 hover:bg-[#0F1629]/80 transition-all duration-700 shadow-2xl">
                                    <div className="relative h-56 rounded-[2.5rem] overflow-hidden border border-[#C5A572]/10 mb-8">
                                        <Image
                                            src="/images/architecture/mre-plant.jpg"
                                            alt="MRE Node"
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                            unoptimized
                                        />
                                        <div className="absolute top-6 left-6 flex items-center gap-3 bg-[#C5A572] text-[#0B1221] px-4 py-2 rounded-2xl shadow-xl">
                                            <Building2 className="w-4 h-4" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Strategic Asset</span>
                                        </div>
                                    </div>
                                    <div className="px-6 pb-8 space-y-4 text-center">
                                        <h4 className="text-3xl font-black text-white uppercase tracking-tighter">Mataram Royal Energi</h4>
                                        <p className="text-lg text-white/30 font-light italic leading-relaxed">
                                            "Otoritas pengelola aset energi strategis dan kedaulatan."
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Subsidiary 03: FUTURE */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="group relative flex flex-col items-center"
                        >
                            <div className="absolute top-[-32px] w-px h-8 bg-white/20" />
                            <div className="relative w-full h-full bg-white/[0.02] border-2 border-dashed border-white/10 rounded-[3rem] p-12 flex flex-col items-center justify-center text-center group hover:bg-white/[0.04] transition-all duration-700">
                                <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-[2rem] flex items-center justify-center shadow-inner mb-10 group-hover:rotate-12 group-hover:scale-110 transition-all">
                                    <Globe className="w-10 h-10 text-white/10" />
                                </div>
                                <div className="space-y-4">
                                    <span className="text-[10px] font-mono font-black uppercase text-[#C5A572]/40 tracking-[0.5em]">System_Expansion</span>
                                    <h4 className="text-2xl font-black text-white/30 uppercase tracking-tighter">Future Opportunity</h4>
                                    <p className="text-base text-white/20 font-light leading-relaxed italic px-4">
                                        Strategic expansion into digital ecosystem & green technology.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* FOOTER BAR */}
                <footer className="w-full mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 bg-black/20 backdrop-blur-xl p-12 rounded-[4rem]">
                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-4 text-[11px] font-mono font-black text-white/20 tracking-[0.4em] uppercase">
                            <span>Holding ID: SQC-2026-ARCH</span>
                            <div className="h-px w-12 bg-white/10" />
                            <span>System Sovereign</span>
                        </div>
                        <p className="text-[10px] text-white/10 font-mono hidden md:block">SECURED BY HOLISTIC INTEGRITY PROTOCOL // VERSION 4.0.01</p>
                    </div>

                    <div className="flex items-center gap-12">
                        <div className="flex flex-col items-end gap-2 text-right">
                            <span className="text-[11px] font-black text-white uppercase tracking-widest">Unified Strength Foundation</span>
                            <span className="text-[9px] font-mono text-white/20 italic uppercase tracking-widest">"Guardian of Value, Pillar of Growth"</span>
                        </div>
                        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center p-4">
                            <Workflow className="w-full h-full text-white/10" />
                        </div>
                    </div>
                </footer>

            </main>
        </div>
    );
}
