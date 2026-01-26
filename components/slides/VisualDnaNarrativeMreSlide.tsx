"use client";

import { motion } from "framer-motion";
import { BrandData } from "@/data/brands";
import Image from "next/image";

export default function VisualDnaNarrativeMreSlide({ brand }: { brand: BrandData }) {

    // Data definition for the grid (MRE Specific)
    const dnas = [
        {
            number: "01",
            title: "Nama Mataram & Royal",
            desc: "Mataram merepresentasikan kedaulatan Nusantara yang luhur. Royal dimaknai sebagai legitimasi dan tanggung jawab publik—bukan sekadar kemewahan."
        },
        {
            number: "02",
            title: "Struktur Simetris",
            desc: "Merepresentasikan otoritas yang sah, arah yang jelas, dan hierarki kendali yang stabil atas pengelolaan energi nasional."
        },
        {
            number: "03",
            title: "Bentuk Mahkota",
            desc: "Melambangkan mandat penjagaan: kekuasaan yang hadir untuk mengatur, mengelola, dan melindungi nilai luhur, bukan untuk mendominasi."
        },
        {
            number: "04",
            title: "Lapisan Horizontal",
            desc: "Menandakan sistem tata kelola, regulasi, dan pengawasan berlapis yang memastikan setiap energi bergerak dengan tertib dan akuntabel."
        },
        {
            number: "05",
            title: "Siklus Energi",
            desc: "Elemen di pusat dasar melambangkan kesinambungan, efisiensi, dan regenerasi daya yang terus berputar untuk kemaslahatan."
        },
        {
            number: "06",
            title: "Kedaulatan Nilai",
            desc: "Setiap sudut geometri mencerminkan ketegasan dalam menjaga kedaulatan energi dan integritas institusional MRE."
        }
    ];

    return (
        <div className="w-full min-h-full bg-[#F7F3F0] text-[#0B1221] font-sans selection:bg-[#0B1221] selection:text-[#F7F3F0] overflow-y-auto no-scrollbar scroll-smooth">

            {/* Background Grid Pattern - From SQC Theme */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.05]" style={{
                backgroundImage: 'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }} />

            <div className="max-w-[1400px] mx-auto px-8 py-20 lg:py-24 space-y-20 relative z-10">

                {/* CENTRAL AXIS LINE */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#0B1221]/10 -translate-x-1/2 z-0 hidden lg:block pointer-events-none" />

                {/* HEADER SECTION */}
                <header className="relative z-10 flex flex-col items-center text-center space-y-8 pb-12 border-b-2 border-[#0B1221]/10">
                    <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#0B1221]/5 rounded border border-[#0B1221]/10 text-[10px] font-mono tracking-widest uppercase text-[#0B1221]">
                        <div className="w-1.5 h-1.5 bg-[#1A1F2B] rounded-full animate-pulse" />
                        Philosophy Analysis MRE V1.0
                    </div>

                    <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none text-[#0B1221] uppercase">
                        Otoritas <br /><span className="italic block mt-2 text-[#1A1F2B]">Energi Mataram</span>
                    </h1>

                    <p className="max-w-2xl text-lg font-light leading-relaxed text-[#0B1221]/70 italic">
                        "Energi yang diarahkan dengan otoritas, dijaga dengan tata kelola, dan diwariskan dengan tanggung jawab kedaulatan."
                    </p>
                </header>

                {/* SECTION 1: THE CORE SHAPE - Navy Style */}
                <section className="relative z-10 w-full bg-[#0B1221] border border-white/10 p-12 lg:p-24 shadow-2xl rounded-sm text-white">
                    {/* Architectural corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#B8BCC4] m-2" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#B8BCC4] m-2" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#B8BCC4] m-2" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#B8BCC4] m-2" />

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                        {/* Left: The Logo */}
                        <div className="flex-1 w-full flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-md aspect-square flex items-center justify-center p-8 bg-white/5 border border-white/10 shadow-inner rounded-sm overflow-hidden">
                                <div className="absolute inset-0 border border-dashed border-white/10 m-4 pointer-events-none" />
                                <Image
                                    src={brand.logos.fullyShape}
                                    alt="MRE Fully Shape Logo"
                                    width={800}
                                    height={800}
                                    className="w-full h-auto object-contain brightness-110 drop-shadow-2xl"
                                    unoptimized
                                />
                            </div>
                        </div>

                        {/* Right: The Explanation */}
                        <div className="flex-1 w-full space-y-8 text-center lg:text-left">
                            <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white flex items-center justify-center lg:justify-start gap-4">
                                <span className="text-sm font-mono text-[#B8BCC4] border border-[#B8BCC4]/40 rounded px-2">REF: MRE-01</span>
                                The Sovereignty
                            </h2>
                            <p className="text-slate-400 leading-relaxed text-lg font-light">
                                Simbol ini merepresentasikan <strong>legitimasi energi</strong>. Struktur mahkota yang simetris melambangkan otoritas Mataram dalam mengelola sumber daya, memastikan setiap gerak energi patuh pada tatanan nilai dan etika kedaulatan.
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-4 font-mono">
                                <div className="p-4 border border-white/10 bg-white/5 text-center">
                                    <span className="block text-2xl font-bold text-[#B8BCC4]">MRE</span>
                                    <span className="text-[10px] uppercase tracking-widest text-slate-500">Royal Auth</span>
                                </div>
                                <div className="p-4 border border-white/10 bg-white/5 text-center">
                                    <span className="block text-2xl font-bold text-[#B8BCC4]">90°</span>
                                    <span className="text-[10px] uppercase tracking-widest text-slate-500">Verticality</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DIVIDER STRIP */}
                <div className="relative z-10 w-full h-12 flex items-center justify-center">
                    <div className="w-full h-px bg-[#0B1221]/20" />
                    <div className="absolute bg-[#F7F3F0] px-8 text-[10px] font-bold font-mono tracking-[0.5em] uppercase border border-[#0B1221]/20 py-2 text-[#0B1221]">
                        Part II: The 6 Pillars
                    </div>
                </div>

                {/* SECTION 2: THE PHILOSOPHY GRID - Navy Theme */}
                <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 shadow-2xl">
                    {dnas.map((item, idx) => (
                        <div key={idx} className="bg-[#0B1221] p-10 lg:p-12 hover:bg-white/5 transition-all duration-300 group flex flex-col justify-between min-h-[300px]">
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-mono tracking-widest text-slate-500 group-hover:text-[#B8BCC4] transition-colors">
                                        [{item.number}]
                                    </span>
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-[#B8BCC4] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed text-justify font-light">
                                    {item.desc}
                                </p>
                            </div>
                            <div className="pt-6 border-t border-white/5 flex justify-end">
                                <span className="text-[8px] font-mono text-slate-600 uppercase">Analysis: OK</span>
                            </div>
                        </div>
                    ))}
                </section>

                {/* DIVIDER STRIP */}
                <div className="relative z-10 w-full h-12 flex items-center justify-center">
                    <div className="w-full h-px bg-[#0B1221]/20" />
                    <div className="absolute bg-[#F7F3F0] px-8 text-[10px] font-bold font-mono tracking-[0.5em] uppercase border border-[#0B1221]/20 py-2 text-[#0B1221]">
                        Part III: Color Authority
                    </div>
                </div>

                {/* SECTION 3: COLOR SYSTEM - MONOCHROMATIC AUTHORITY */}
                <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* DEEP NAVY - PRIMARY */}
                    <div className="bg-white border border-[#0B1221]/10 p-6 flex flex-col group rounded-sm shadow-sm hover:shadow-md transition-all">
                        <div className="flex-1 bg-[#1A1F2B] min-h-[250px] flex items-center justify-center relative overflow-hidden p-8">
                            <div className="absolute inset-4 border border-white/5 pointer-events-none" />
                            <span className="text-white/5 font-black uppercase tracking-tighter text-5xl lg:text-6xl italic select-none">
                                AUTHORITY.
                            </span>
                        </div>
                        <div className="pt-8 pb-4 space-y-3 text-center">
                            <h4 className="text-xl font-black uppercase tracking-tight text-[#0B1221]">DEEP NAVY</h4>
                            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0B1221]/40 font-bold">KEDAULATAN • OTORITAS • #1A1F2B</p>
                        </div>
                    </div>

                    {/* LIGHT GRAY - ACCENT */}
                    <div className="bg-white border border-[#0B1221]/10 p-6 flex flex-col group rounded-sm shadow-sm hover:shadow-md transition-all">
                        <div className="flex-1 bg-[#B8BCC4] min-h-[250px] flex items-center justify-center relative overflow-hidden p-8">
                            <div className="absolute inset-4 border border-black/5 pointer-events-none" />
                            <span className="text-black/5 font-black uppercase tracking-tighter text-5xl lg:text-6xl italic select-none">
                                STRUCTURE.
                            </span>
                        </div>
                        <div className="pt-8 pb-4 space-y-3 text-center">
                            <h4 className="text-xl font-black uppercase tracking-tight text-[#0B1221]">LIGHT GRAY</h4>
                            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0B1221]/40 font-bold">TATA KELOLA • KERANGKA • #B8BCC4</p>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="text-center pb-12 pt-12 border-t border-[#0B1221]/10 relative z-10 flex flex-col items-center gap-4">
                    <div className="h-px w-24 bg-[#0B1221]/10" />
                    <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-[#0B1221]/30">
                        MRE Documentation • Internal Use • Confidential
                    </span>
                </footer>

            </div>
        </div>
    );
}
