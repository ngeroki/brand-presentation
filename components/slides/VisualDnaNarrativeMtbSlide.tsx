"use client";

import { motion } from "framer-motion";
import { BrandData } from "@/data/brands";
import Image from "next/image";

export default function VisualDnaNarrativeMtbSlide({ brand }: { brand: BrandData }) {

    // Data definition for the grid (MTB Specific)
    const dnas = [
        {
            number: "01",
            title: "Matahari Terbit",
            desc: "Melambangkan kemunculan energi awal: cahaya yang muncul perlahan, belum eksplosif, namun menentukan arah seluruh perjalanan berikutnya."
        },
        {
            number: "02",
            title: "Gunung & Bentang Bumi",
            desc: "Merepresentasikan real asset—sumber daya mineral dan energi yang kokoh, berumur panjang, dan memiliki nilai intrinsik yang nyata."
        },
        {
            number: "03",
            title: "Lengkungan Emas",
            desc: "Menandakan tajalli awal: energi mentah yang mulai menampakkan diri dan siap dikembangkan secara terukur di bawah naungan manajemen."
        },
        {
            number: "04",
            title: "Garis Horizon",
            desc: "Melambangkan batas kesadaran dan pijakan realitas, menegaskan bahwa eksplorasi dilakukan dengan kendali dan visi jangka panjang."
        },
        {
            number: "05",
            title: "Ketenangan Awal",
            desc: "Aura yang tenang mencerminkan kesiapan mental dan spiritual sebelum melakukan ekspansi besar. Kekuatan dalam keheningan."
        },
        {
            number: "06",
            title: "Potensi Terukur",
            desc: "Setiap elemen geometris dihitung dengan presisi, melambangkan bahwa setiap langkah bisnis MTB didasarkan pada data dan kehati-hatian."
        }
    ];

    // THEME COLORS EXTRACTED FROM IMAGE:
    // Yellow/Gold: #FFBE18 (Vibrant Sun)
    // Dark: #1A1816 (Warm Charcoal/Brown-Black)
    // Background: #FDFCFB (Pure Warm White)

    return (
        <div className="w-full min-h-full bg-[#FDFCFB] text-[#1A1816] font-sans selection:bg-[#FFBE18] selection:text-[#1A1816] overflow-y-auto no-scrollbar scroll-smooth">

            {/* Background Grid Pattern - Styled like the attachment's geometric vibe */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(to right, #1A1816 1px, transparent 1px), linear-gradient(to bottom, #1A1816 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }} />

            <div className="max-w-[1400px] mx-auto px-8 py-20 lg:py-24 space-y-20 relative z-10">

                {/* CENTRAL AXIS LINE */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1A1816]/5 -translate-x-1/2 z-0 hidden lg:block pointer-events-none" />

                {/* HEADER SECTION */}
                <header className="relative z-10 flex flex-col items-center text-center space-y-8 pb-12 border-b-2 border-[#1A1816]/10">
                    <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#FFBE18]/10 rounded border border-[#FFBE18]/20 text-[10px] font-mono tracking-widest uppercase text-[#FFBE18] font-bold">
                        <div className="w-1.5 h-1.5 bg-[#FFBE18] rounded-full animate-pulse" />
                        MTB GENESIS CORE V1.0
                    </div>

                    <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none text-[#1A1816] uppercase">
                        Matahari Terbit <br /><span className="italic block mt-2 text-[#FFBE18]">The Genesis</span>
                    </h1>

                    <p className="max-w-2xl text-lg font-light leading-relaxed text-[#1A1816]/70 italic">
                        "Energi lahir dari awal yang tenang, nyata, dan penuh potensi. Cahaya yang menentukan arah menuju kemakmuran energi."
                    </p>
                </header>

                {/* SECTION 1: THE CORE SHAPE - Dark Charcoal Style from Attachment */}
                <section className="relative z-10 w-full bg-[#1A1816] border border-white/5 p-12 lg:p-24 shadow-2xl rounded-sm text-white">
                    {/* Architectural corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#FFBE18] m-2" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#FFBE18] m-2" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#FFBE18] m-2" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#FFBE18] m-2" />

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                        {/* Left: The Logo */}
                        <div className="flex-1 w-full flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-md aspect-square flex items-center justify-center p-12 bg-white/5 border border-white/10 shadow-inner rounded-sm overflow-hidden">
                                <div className="absolute inset-0 border border-dashed border-white/10 m-4 pointer-events-none" />
                                <Image
                                    src={brand.logos.fullyShape}
                                    alt="MTB Fully Shape Logo"
                                    width={800}
                                    height={800}
                                    className="w-full h-auto object-contain brightness-110 drop-shadow-[0_0_30px_rgba(255,190,24,0.15)]"
                                    unoptimized
                                />
                            </div>
                        </div>

                        {/* Right: The Explanation */}
                        <div className="flex-1 w-full space-y-8 text-center lg:text-left">
                            <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white flex items-center justify-center lg:justify-start gap-4">
                                <span className="text-sm font-mono text-[#FFBE18] border border-[#FFBE18]/40 rounded px-2">GEN: 01</span>
                                Core Philosophy
                            </h2>
                            <p className="text-slate-400 leading-relaxed text-lg font-light">
                                Simbol ini menangkap esensi <strong>The Genesis of Energy</strong>. Gunung yang kokoh melambangkan real asset bumi, sementara lingkaran matahari yang muncul menandakan sumber energi tak terbatas yang menjadi motor penggerak ekosistem bisnis.
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-4 font-mono">
                                <div className="p-4 border border-white/10 bg-white/5 text-center group transition-colors hover:border-[#FFBE18]/30">
                                    <span className="block text-2xl font-bold text-[#FFBE18]">MTB</span>
                                    <span className="text-[10px] uppercase tracking-widest text-slate-500">Asset Ref</span>
                                </div>
                                <div className="p-4 border border-white/10 bg-white/5 text-center group transition-colors hover:border-[#FFBE18]/30">
                                    <span className="block text-2xl font-bold text-[#FFBE18]">100%</span>
                                    <span className="text-[10px] uppercase tracking-widest text-slate-500">Energy Source</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DIVIDER STRIP */}
                <div className="relative z-10 w-full h-12 flex items-center justify-center">
                    <div className="w-full h-px bg-[#1A1816]/10" />
                    <div className="absolute bg-[#FDFCFB] px-8 text-[10px] font-bold font-mono tracking-[0.5em] uppercase border border-[#1A1816]/10 py-2 text-[#1A1816]">
                        Segment II: Visual Elements
                    </div>
                </div>

                {/* SECTION 2: THE PHILOSOPHY GRID - Dark Theme from Attachment */}
                <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1816]/10 border border-[#1A1816]/10 shadow-2xl">
                    {dnas.map((item, idx) => (
                        <div key={idx} className="bg-[#1A1816] p-10 lg:p-12 hover:bg-[#252220] transition-all duration-300 group flex flex-col justify-between min-h-[300px]">
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-mono tracking-widest text-slate-600 group-hover:text-[#FFBE18] transition-colors">
                                        [{item.number}]
                                    </span>
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-[#FFBE18] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed text-justify font-light">
                                    {item.desc}
                                </p>
                            </div>
                            <div className="pt-6 border-t border-white/5 flex justify-end">
                                <span className="text-[8px] font-mono text-slate-700 uppercase">Verification: Pass</span>
                            </div>
                        </div>
                    ))}
                </section>

                {/* DIVIDER STRIP */}
                <div className="relative z-10 w-full h-12 flex items-center justify-center">
                    <div className="w-full h-px bg-[#1A1816]/10" />
                    <div className="absolute bg-[#FDFCFB] px-8 text-[10px] font-bold font-mono tracking-[0.5em] uppercase border border-[#1A1816]/10 py-2 text-[#1A1816]">
                        Segment III: Color DNA
                    </div>
                </div>

                {/* SECTION 3: COLOR SYSTEM - Based on Attachment Colors */}
                <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="bg-white border border-[#1A1816]/10 p-2 flex flex-col group rounded-sm shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex-1 bg-[#1A1816] min-h-[250px] flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 border-[1px] border-white/5 m-4" />
                            <span className="text-white/5 font-black uppercase tracking-tighter text-6xl italic">
                                Charcoal.
                            </span>
                        </div>
                        <div className="p-8 space-y-2 text-center">
                            <h4 className="text-xl font-black uppercase italic tracking-tighter text-[#1A1816]">Deep Charcoal</h4>
                            <p className="text-[10px] font-mono uppercase tracking-widest text-[#1A1816]/40">Bumi • Kekuatan • #1A1816</p>
                        </div>
                    </div>

                    <div className="bg-white border border-[#1A1816]/10 p-2 flex flex-col group rounded-sm shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex-1 bg-[#FFBE18] min-h-[250px] flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 border-[1px] border-[#1A1816]/10 m-4 opacity-20" />
                            <span className="text-[#1A1816]/5 font-black uppercase tracking-tighter text-6xl italic">
                                Genesis.
                            </span>
                        </div>
                        <div className="p-8 space-y-2 text-center">
                            <h4 className="text-xl font-black uppercase italic tracking-tighter text-[#1A1816]">Sun Gold</h4>
                            <p className="text-[10px] font-mono uppercase tracking-widest text-[#1A1816]/40">Cahaya • Energi • #FFBE18</p>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="text-center pb-12 pt-12 border-t border-[#1A1816]/10 relative z-10 flex flex-col items-center gap-4">
                    <div className="h-px w-24 bg-[#FFBE18]/30" />
                    <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-[#1A1816]/30">
                        MTB Branded House Strategy • 2024
                    </span>
                </footer>

            </div>
        </div>
    );
}
