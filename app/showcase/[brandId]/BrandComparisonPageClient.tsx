"use client";

import { useParams, redirect } from "next/navigation";
import { brands } from "@/data/brands";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield, Building2, Globe, Microscope, Palette, LayoutGrid, Dna } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sqc, SQCBackground, SQCTag } from "@/styles/sqc-theme";
import clsx from "clsx";

export default function BrandComparisonPageClient() {
    const params = useParams();
    const brandId = params?.brandId as string;
    const brand = brands.find((b) => b.id === brandId);

    if (!brand) {
        redirect('/showcase');
    }

    const accentColor = brand.colors.accent || "#C5A572";

    return (
        <div className="relative min-h-full bg-white text-zinc-900 overflow-hidden flex flex-col pt-8 pb-20">
            <SQCBackground />

            <div className="relative z-10 max-w-[1700px] mx-auto w-full px-8 lg:px-12 space-y-12">

                {/* Compact Focused Header */}
                <header className="flex flex-col md:flex-row items-center md:items-end justify-between border-b border-white/10 pb-8 gap-6">
                    <div className="space-y-4 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <SQCTag>Pilih Gaya Logo Anda</SQCTag>
                            <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">ID: {brandId.toUpperCase()}-COMP-02</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black text-[#0B1221] tracking-tighter uppercase">
                            {brand.name}
                        </h1>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-2 text-right">
                        <p className="text-zinc-500 text-sm italic font-light max-w-md leading-relaxed">
                            "{brand.philosophySummary}"
                        </p>
                    </div>
                </header>

                {/* Main Comparison Arena - Large Logos Focus */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                    {/* OPTION A: THE NARRATIVE DIRECTION */}
                    <div className="relative group flex flex-col space-y-6">
                        {/* Label */}
                        <div className="flex items-center justify-between px-2">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[10px] font-black text-emerald-500">A</span>
                                <h2 className="text-sm font-black text-[#0B1221] uppercase tracking-[0.2em]">Opsi A: Full Shape <span className="text-zinc-400 ml-2 font-normal">(Organik)</span></h2>
                            </div>
                        </div>

                        {/* Large Logo Container */}
                        <Link
                            href={`/showcase/${brandId}/full-shape`}
                            className="relative aspect-square bg-[#0B1221] border-2 border-white/10 rounded-[3rem] flex items-center justify-center p-12 lg:p-20 transition-all duration-700 hover:border-emerald-500/40 hover:shadow-[0_0_80px_rgba(16,185,129,0.15)] group/box overflow-hidden">
                            {/* Organic Glow Bkg */}
                            <div className="absolute inset-0 opacity-0 group-hover/box:opacity-100 transition-opacity duration-1000">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/10 blur-[120px]" />
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.08 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="relative z-10 w-full h-full">
                                <Image
                                    src={brand.logos.fullyShape || brand.logos.transparentFull || brand.logos.nobgFull}
                                    alt="Full Shape Version"
                                    fill
                                    className="object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.4)]"
                                    unoptimized
                                />
                            </motion.div>

                            {/* View Button Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/box:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                                <div className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest translate-y-4 group-hover/box:translate-y-0 transition-transform">
                                    Lihat Detail <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>

                        {/* Brief Charasteristics */}
                        <div className="grid grid-cols-3 gap-3 px-2">
                            {['Mengalir', 'Dinamis', 'Manusiawi'].map(trait => (
                                <div key={trait} className="py-2 text-center rounded-lg border border-white/10 bg-[#0B1221] text-[9px] font-black uppercase tracking-widest text-white/40">
                                    {trait}
                                </div>
                            ))}
                        </div>

                        {/* Visual DNA Breakdown Button */}
                        <Link
                            href={`/showcase/${brandId}/full-shape`}
                            className="mt-2 group/btn relative w-full overflow-hidden rounded-2xl p-px"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-white/5 to-emerald-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                            <div className="relative bg-[#0B1221] border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-center gap-3 transition-all group-hover/btn:border-emerald-500/50 group-hover/btn:translate-y-[-2px]">
                                <Dna className="w-4 h-4 text-emerald-500" />
                                <span className="text-[10px] font-black uppercase text-white tracking-[0.2em]">Eksplorasi Lengkap</span>
                            </div>
                        </Link>
                    </div>

                    {/* OPTION B: THE SYSTEMATIC DIRECTION */}
                    <div className="relative group flex flex-col space-y-6">
                        {/* Label */}
                        <div className="flex items-center justify-between px-2">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[10px] font-black text-blue-500">B</span>
                                <h2 className="text-sm font-black text-[#0B1221] uppercase tracking-[0.2em]">Opsi B: Geometric <span className="text-zinc-400 ml-2 font-normal">(Sistematis)</span></h2>
                            </div>
                        </div>

                        {/* Large Logo Container */}
                        <Link
                            href={`/showcase/${brandId}/geometric`}
                            className="relative aspect-square bg-[#0B1221] border-2 border-white/10 rounded-[3rem] flex items-center justify-center p-12 lg:p-20 transition-all duration-700 hover:border-blue-500/40 hover:shadow-[0_0_80px_rgba(59,130,246,0.15)] group/box overflow-hidden">
                            {/* Grid Line Bkg */}
                            <div className="absolute inset-0 opacity-10 group-hover/box:opacity-20 transition-opacity">
                                <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:30px_30px]" />
                            </div>
                            <div className="absolute inset-0 opacity-0 group-hover/box:opacity-100 transition-opacity duration-1000">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[120px]" />
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.08 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="relative z-10 w-full h-full"
                            >
                                <Image
                                    src={brand.logos.geometric || brand.logos.transparentGeo || brand.logos.nobgGeo}
                                    alt="Geometric Version"
                                    fill
                                    className="object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.4)]"
                                    unoptimized
                                />
                            </motion.div>

                            {/* View Button Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/box:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                                <div className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest translate-y-4 group-hover/box:translate-y-0 transition-transform">
                                    Lihat Detail <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>

                        {/* Brief Charasteristics */}
                        <div className="grid grid-cols-3 gap-3 px-2">
                            {['Terstruktur', 'Presisi', 'Kokoh'].map(trait => (
                                <div key={trait} className="py-2 text-center rounded-lg border border-white/5 bg-white/[0.02] text-[9px] font-black uppercase tracking-widest text-white/30">
                                    {trait}
                                </div>
                            ))}
                        </div>

                        {/* Visual DNA Breakdown Button */}
                        <Link
                            href={`/showcase/${brandId}/geometric`}
                            className="mt-2 group/btn relative w-full overflow-hidden rounded-2xl p-px"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-white/5 to-blue-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                            <div className="relative bg-[#0B1221] border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-center gap-3 transition-all group-hover/btn:border-blue-500/50 group-hover/btn:translate-y-[-2px]">
                                <Dna className="w-4 h-4 text-blue-500" />
                                <span className="text-[10px] font-black uppercase text-white tracking-[0.2em]">Eksplorasi Lengkap</span>
                            </div>
                        </Link>
                    </div>

                </div>

                {/* Analysis Footer */}
                <footer className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-12 border-t border-white/10 items-start">
                    <div className="md:col-span-4 space-y-2">
                        <span className="text-[10px] font-black text-[#C5A572] uppercase tracking-[0.3em]">Core Purpose</span>
                        <p className="text-zinc-500 text-xs leading-relaxed italic">
                            {brand.meaning}
                        </p>
                    </div>
                    <div className="md:col-span-8 flex flex-wrap justify-end gap-12">
                        <div className="space-y-4">
                            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">Identity Matrix</span>
                            <div className="flex gap-4">
                                <Shield className="w-4 h-4 text-zinc-400" />
                                <Globe className="w-4 h-4 text-zinc-400" />
                                <Zap className="w-4 h-4 text-zinc-400" />
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
