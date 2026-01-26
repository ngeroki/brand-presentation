"use client";

import { motion } from "framer-motion";
import { BrandData } from "@/data/brands";
import Image from "next/image";

export default function VisualDnaNarrativeSlide({ brand }: { brand: BrandData }) {

    // Data definition for the grid
    const dnas = [
        {
            number: "01",
            title: "Simbol Orientasi",
            desc: "Bentuk utama logo berangkat dari prinsip Ka’bah: satu pusat, satu arah, satu tujuan aklhir. Pertumbuhan tunduk pada nilai, dan perjalanan bisnis selalu kembali ke pusat moral."
        },
        {
            number: "02",
            title: "Empat Pilar Tegak",
            desc: "Empat pilar vertikal merepresentasikan empat saudara pendiri. Berdiri sejajar, tidak saling menonjolkan, menghadap tujuan yang sama. Keluarga adalah fondasi."
        },
        {
            number: "03",
            title: "Vertikalitas",
            desc: "Arah vertikal yang dominan melambangkan keteguhan prinsip. Keputusan yang tidak condong dan struktur yang tahan tekanan. Bukan ekspansi agresif, tapi ketegakan nilai."
        },
        {
            number: "04",
            title: "Limitasi Emas",
            desc: "Emas digunakan secara terbatas dan struktural. Melambangkan nilai, amanah, dan keberkahan yang dijaga di tengah sistem, bukan dipamerkan di permukaan."
        },
        {
            number: "05",
            title: "Lingkaran Penjaga",
            desc: "Lingkaran merepresentasikan batas yang jelas, perlindungan, dan kekuatan kolektif. Menyatukan, bukan membatasi secara sempit. Kebebasan tanpa batas adalah risiko."
        },
        {
            number: "06",
            title: "Ruang Negatif",
            desc: "Ruang antar pilar dibiarkan bersih dan simetris, bermakna transparansi, tata kelola, dan akuntabilitas. Keputusan bisa dilihat dan ditelusuri."
        }
    ];

    return (
        <div className="w-full min-h-full bg-[#F7F3F0] text-[#0B1221] font-sans selection:bg-[#0B1221] selection:text-[#F7F3F0] overflow-y-auto no-scrollbar scroll-smooth">

            {/* Background Grid Pattern - Styled like Slide 4 but for light theme */}
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
                        <div className="w-1.5 h-1.5 bg-[#0B1221] rounded-full animate-pulse" />
                        Philosophy Analysis V1.0
                    </div>

                    <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none text-[#0B1221] uppercase">
                        Ka’bah sebagai <br /><span className="italic block mt-2 text-[#C5A572]">Kiblat Nilai</span>
                    </h1>

                    <p className="max-w-2xl text-lg font-light leading-relaxed text-[#0B1221]/70 italic">
                        "Safar Qawwiy Corp adalah institusi yang berangkat dari keluarga, berdiri di atas pilar yang setara, dan selalu mengarah pada satu tujuan nilai."
                    </p>
                </header>

                {/* SECTION 1: THE CORE SHAPE - Now Navy */}
                <section className="relative z-10 w-full bg-[#0B1221] border border-white/10 p-12 lg:p-24 shadow-2xl rounded-sm text-white">
                    {/* Architectural corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C5A572] m-2" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C5A572] m-2" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C5A572] m-2" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C5A572] m-2" />

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                        {/* Left: The Logo */}
                        <div className="flex-1 w-full flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-md aspect-square flex items-center justify-center p-8 bg-white/5 border border-white/10 shadow-inner rounded-sm overflow-hidden">
                                <div className="absolute inset-0 border border-dashed border-white/10 m-4 pointer-events-none" />
                                <Image
                                    src={brand.logos.fullyShape}
                                    alt="Fully Shape Logo"
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
                                <span className="text-sm font-mono text-[#C5A572] border border-[#C5A572]/40 rounded px-2">REF: A-01</span>
                                The Essence
                            </h2>
                            <p className="text-slate-400 leading-relaxed text-lg font-light">
                                Logo ini bukan sekadar bentuk estetis, melainkan sebuah manifestasi filosofis.
                                Di tengah ketidakpastian pasar, Safar Qawwiy hadir sebagai kubus yang diam, stabil, dan menjadi
                                referensi arah bagi seluruh entitas di bawahnya.
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-4 font-mono">
                                <div className="p-4 border border-white/10 bg-white/5 text-center">
                                    <span className="block text-2xl font-bold text-[#C5A572]">04</span>
                                    <span className="text-[10px] uppercase tracking-widest text-slate-500">Pillar Units</span>
                                </div>
                                <div className="p-4 border border-white/10 bg-white/5 text-center">
                                    <span className="block text-2xl font-bold text-[#C5A572]">01</span>
                                    <span className="text-[10px] uppercase tracking-widest text-slate-500">Axis Point</span>
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

                {/* SECTION 2: THE PHILOSOPHY GRID - Now Navy */}
                <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 shadow-2xl">
                    {dnas.map((item, idx) => (
                        <div key={idx} className="bg-[#0B1221] p-10 lg:p-12 hover:bg-white/5 transition-all duration-300 group flex flex-col justify-between min-h-[300px]">
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-mono tracking-widest text-slate-500 group-hover:text-[#C5A572] transition-colors">
                                        [{item.number}]
                                    </span>
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-[#C5A572] transition-colors">
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

                {/* SECTION 3: COLOR SYSTEM */}
                <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Dark Navy Card */}
                    <div className="bg-[#FFFFFF]/80 backdrop-blur-sm border border-[#0B1221]/10 p-2 flex flex-col group rounded-sm">
                        <div className="flex-1 bg-[#0B1221] min-h-[250px] flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 border-[1px] border-white/5 m-4" />
                            <span className="text-white/10 font-black uppercase tracking-tighter text-5xl italic">
                                Trust.
                            </span>
                        </div>
                        <div className="p-8 space-y-2 text-center">
                            <h4 className="text-xl font-black uppercase italic tracking-tighter text-[#0B1221]">Deep Navy</h4>
                            <p className="text-[10px] font-mono uppercase tracking-widest text-[#0B1221]/40">Stability • Institution • #1A1F2B</p>
                        </div>
                    </div>

                    {/* Gold Card */}
                    <div className="bg-[#FFFFFF]/80 backdrop-blur-sm border border-[#0B1221]/10 p-2 flex flex-col group rounded-sm">
                        <div className="flex-1 bg-[#C5A572] min-h-[250px] flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 border-[1px] border-[#0B1221]/10 m-4" />
                            <span className="text-[#0B1221]/10 font-black uppercase tracking-tighter text-5xl italic">
                                Value.
                            </span>
                        </div>
                        <div className="p-8 space-y-2 text-center">
                            <h4 className="text-xl font-black uppercase italic tracking-tighter text-[#0B1221]">Muted Gold</h4>
                            <p className="text-[10px] font-mono uppercase tracking-widest text-[#0B1221]/40">Trust • Honor • #C5A572</p>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="text-center pb-12 pt-12 border-t border-[#0B1221]/10 relative z-10 flex flex-col items-center gap-4">
                    <div className="h-px w-24 bg-[#0B1221]/10" />
                    <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-[#0B1221]/30">
                        Safar Qawiyy Documentation • Internal Use • Confidential
                    </span>
                </footer>

            </div>
        </div>
    );
}
