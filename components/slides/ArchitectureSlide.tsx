"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Zap, Globe, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ArchitectureSlide() {

    return (
        <div className="flex flex-col w-full h-full bg-slate-50 overflow-hidden select-none relative">
            {/* Minimalist Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <main className="flex-1 flex flex-col p-8 lg:p-12 relative z-10">
                {/* Header & Intro - Compact Side-by-Side */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6 border-b border-slate-200 pb-6">
                    <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Structure / Ecosystem</span>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">
                            Arsitektur <span className="text-blue-600">Brand</span>
                        </h1>
                    </div>
                    <p className="text-sm text-slate-500 font-light max-w-xl text-right leading-relaxed">
                        Sistem <span className="font-bold text-slate-900 italic">Branded House</span> yang menempatkan Safar Qawiyy sebagai kiblat nilai di balik setiap inovasi dan layanan premium dalam ekosistem korporasi.
                    </p>
                </div>

                <div className="flex-1 flex flex-col justify-center gap-6">
                    {/* LEVEL 1: THE HOLDING - "Gallery Frame" Design */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative w-full max-w-5xl mx-auto"
                    >
                        <Link
                            href="/showcase/sqc"
                            className="group cursor-pointer bg-white border border-slate-200 rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl hover:border-blue-500/50 transition-all duration-500 flex flex-col md:flex-row gap-8 items-center"
                        >
                            {/* Image with dedicated frame */}
                            <div className="w-full md:w-[40%] relative aspect-square md:aspect-auto md:h-56 overflow-hidden rounded-[1.8rem] bg-slate-100 border border-slate-100 shadow-inner">
                                <Image
                                    src="/images/architecture/sqc-hq.png"
                                    alt="SQC HQ"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-blue-900/0 transition-colors" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 pr-6 flex flex-col justify-center gap-6">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                                            <Shield className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-[10px] uppercase font-black text-blue-600 tracking-widest bg-blue-50 px-3 py-1 rounded-full">Primary Master Brand</span>
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 tracking-tight">SAFAR QAWIYY <span className="font-normal text-slate-400 italic">CORP</span></h3>
                                    <p className="text-sm text-slate-500 font-light leading-relaxed max-w-md">
                                        Strategic holding yang berperan sebagai penjaga nilai, arah teknis, dan integritas seluruh entitas dalam perjalanan jangka panjang.
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 flex items-center gap-2 transition-transform group-hover:translate-x-1">
                                        Explore Foundation <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </Link>

                        {/* Visual Connector Line */}
                        <div className="absolute -bottom-10 left-1/2 w-px h-10 bg-gradient-to-b from-blue-600 to-slate-300" />
                    </motion.div>

                    {/* Horizontal Branching Line */}
                    <div className="w-full max-w-5xl mx-auto relative h-10">
                        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-slate-200" />
                        <div className="absolute top-0 left-1/4 w-px h-full bg-slate-200" />
                        <div className="absolute top-0 left-1/2 w-px h-full bg-slate-300" />
                        <div className="absolute top-0 right-1/4 w-px h-full bg-slate-200" />
                    </div>

                    {/* LEVEL 2: SUBSIDIARIES - Gallery Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">

                        {/* MTB CARD */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group cursor-pointer bg-white border border-slate-200 rounded-[2rem] p-3 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-500"
                        >
                            <Link href="/showcase/mtb" className="block">
                                <div className="relative h-36 overflow-hidden rounded-[1.4rem] bg-slate-100 mb-5">
                                    <Image
                                        src="/images/architecture/mtb-building.jpg"
                                        alt="MTB"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                        unoptimized
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="text-[8px] font-black uppercase text-white tracking-widest bg-blue-600/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-lg">Upstream</span>
                                    </div>
                                </div>
                                <div className="px-4 pb-4 space-y-2 text-center">
                                    <h4 className="font-bold text-slate-800 tracking-tight flex items-center justify-center gap-2">
                                        <Zap className="w-4 h-4 text-blue-600" />
                                        Matahari Timur Bumi
                                    </h4>
                                    <p className="text-[11px] text-slate-500 font-light leading-relaxed px-2">
                                        Penceritaan energi awal melalui mineral dan energi terbarukan.
                                    </p>
                                </div>
                            </Link>
                        </motion.div>

                        {/* MRE CARD */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group cursor-pointer bg-white border border-slate-200 rounded-[2rem] p-3 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-500"
                        >
                            <Link href="/showcase/mre" className="block">
                                <div className="relative h-36 overflow-hidden rounded-[1.4rem] bg-slate-100 mb-5">
                                    <Image
                                        src="/images/architecture/mre-plant.jpg"
                                        alt="MRE"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                        unoptimized
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="text-[8px] font-black uppercase text-white tracking-widest bg-blue-600/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-lg">Authority</span>
                                    </div>
                                </div>
                                <div className="px-4 pb-4 space-y-2 text-center">
                                    <h4 className="font-bold text-slate-800 tracking-tight flex items-center justify-center gap-2">
                                        <Building2 className="w-4 h-4 text-blue-600" />
                                        Mataram Royal Energi
                                    </h4>
                                    <p className="text-[11px] text-slate-500 font-light leading-relaxed px-2">
                                        Otoritas pengelola aset energi strategis dan tata kelola kedaulatan.
                                    </p>
                                </div>
                            </Link>
                        </motion.div>

                        {/* FUTURE / EXPANSION */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-slate-100/50 border-2 border-dashed border-slate-200 rounded-[2rem] p-6 flex flex-col items-center justify-center text-center group"
                        >
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:rotate-12 transition-transform">
                                <Globe className="w-6 h-6 text-slate-300" />
                            </div>
                            <span className="text-[9px] font-black uppercase text-blue-400 tracking-widest mb-1">Coming Soon</span>
                            <h4 className="text-sm font-bold text-slate-400">Future Opportunity</h4>
                            <p className="text-[10px] text-slate-400 font-light mt-2 px-4 italic leading-relaxed">
                                Strategic expansion into digital ecosystem & green technology.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Footer Insight */}
                <div className="flex justify-end pt-4">
                    <div className="flex items-center gap-4 text-[10px] uppercase font-bold text-slate-300 tracking-[0.2em]">
                        <span>Brand Connection: Branded House Model</span>
                        <div className="w-8 h-px bg-slate-200" />
                        <span>Est. 2026 Presentation</span>
                    </div>
                </div>
            </main>
        </div>
    );
}
