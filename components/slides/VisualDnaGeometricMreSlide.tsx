"use client";

import { motion } from "framer-motion";
import { Lock, Compass, Shield, Anchor, Target, Scale, Layout, Crown, ScrollText } from "lucide-react";
import Image from "next/image";
import { BrandData } from "@/data/brands";

export default function VisualDnaGeometricMreSlide({ brand }: { brand: BrandData }) {

    // Technical metrics styled as a "State Ledger"
    const technicalMetrics = [
        { label: "Protocol", value: "ROYAL-AUTH-V1" },
        { label: "Coordinate", value: "Sovereign Grid 8pt" },
        { label: "Dimension", value: "Golden Ratio" },
        { label: "Status", value: "Verified Legal" },
    ];

    return (
        <div className="flex flex-col w-full min-h-full bg-[#020617] text-[#F8FAFC] font-sans selection:bg-[#E6AF4B] selection:text-[#020617] relative overflow-y-auto no-scrollbar scroll-smooth">

            {/* MASTER GRID: The underlying 'Constitution' */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.05]" style={{
                backgroundImage: 'linear-gradient(to right, #F8FAFC 1px, transparent 1px), linear-gradient(to bottom, #F8FAFC 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }} />

            {/* THE SOVEREIGN LINE */}
            <div className="absolute left-8 lg:left-20 top-0 bottom-0 w-px bg-white/10 z-0" />
            <div className="absolute right-8 lg:right-20 top-0 bottom-0 w-px bg-white/10 z-0" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 z-0" />

            {/* HEADER: The Decree */}
            <header className="w-full pt-16 pb-12 px-8 lg:px-20 border-b border-white/10 relative z-10 bg-[#020617]/95 backdrop-blur-sm">
                <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pl-4 lg:pl-0">
                    <div className="space-y-6 max-w-2xl relative">
                        <div className="absolute -left-6 top-2 bottom-2 w-1 bg-[#E6AF4B]" />

                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#0B1221] text-[#F4F6F8] text-[10px] font-mono tracking-widest uppercase shadow-md">
                            <Crown className="w-3 h-3 text-[#E6AF4B]" />
                            <span>Mataram Institutional Standard</span>
                        </div>

                        <h1 className="text-6xl lg:text-7xl font-serif italic font-black tracking-tighter leading-[0.9] text-white">
                            The Geometry of <br />
                            <span className="text-[#E6AF4B] not-italic font-sans uppercase">Authority</span>
                        </h1>

                        <p className="text-white/60 font-sans font-light text-lg leading-relaxed max-w-xl">
                            "Keadilan membutuhkan struktur. Setiap garis dalam identitas Mataram Royal Energi ditarik untuk memastikan satu hal: <strong>Kepatuhan Nilai.</strong>"
                        </p>
                    </div>

                    {/* Right: Technical Ledger */}
                    <div className="flex flex-col items-end gap-4 text-right">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 bg-[#E6AF4B] rounded-full animate-pulse" />
                            <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">System Status: Active</span>
                        </div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 bg-[#0B1221] p-6 border border-white/10 shadow-xl">
                            {technicalMetrics.map((m, i) => (
                                <div key={i} className="flex flex-col items-start border-l border-white/10 pl-3">
                                    <span className="text-[8px] uppercase text-white/40 tracking-wider font-bold">{m.label}</span>
                                    <span className="text-[10px] font-mono text-[#E6AF4B]">{m.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 w-full max-w-[1600px] mx-auto py-20 px-8 lg:px-20 relative z-10">

                <div className="flex flex-col xl:flex-row gap-0 items-stretch border border-white/10 bg-[#0B1221] shadow-2xl">

                    {/* LEFT: THE BLUEPRINT VISUAL */}
                    <div className="xl:w-[55%] relative border-r border-white/10 p-12 lg:p-16 flex items-center justify-center bg-[#020617]">

                        <div className="relative w-full aspect-square bg-[#0B1221] p-1 shadow-[20px_20px_0px_0px_rgba(11,18,33,0.1)] group">
                            {/* Inner Frame */}
                            <div className="w-full h-full border border-white/10 bg-[#151b2e] relative overflow-hidden flex items-center justify-center">
                                <div className="absolute top-0 left-12 bottom-0 w-px bg-white/5 border-l border-dashed border-white/10" />
                                <div className="absolute top-0 right-12 bottom-0 w-px bg-white/5 border-r border-dashed border-white/10" />
                                <div className="absolute left-0 right-0 top-1/2 h-px bg-[#C5A572]/30" />

                                <div className="absolute top-6 left-6 font-mono text-[9px] text-[#C5A572]/60">
                                    SECURE_LAYER_01 <br />
                                    AUTH_KEY_992
                                </div>

                                <div className="relative z-10 w-[65%] h-[65%]">
                                    <div className="absolute inset-0 bg-[#C5A572] opacity-[0.03] blur-3xl rounded-full" />
                                    <Image
                                        src={brand.logos.geometric}
                                        alt="MRE Geometric Shield"
                                        width={800}
                                        height={800}
                                        className="w-full h-full object-contain drop-shadow-2xl contrast-110 group-hover:scale-[1.02] transition-all duration-700"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 border border-[#C5A572]/20 rounded-full scale-110 opacity-30" />
                                </div>
                            </div>

                            <div className="absolute -top-3 left-8 bg-[#E6AF4B] text-[#020617] px-4 py-1 text-[9px] font-bold tracking-widest uppercase shadow-lg">
                                Exhibit A: The Shield
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: THE LOGIC */}
                    <div className="xl:w-[45%] p-12 lg:p-16 bg-[#0B1221] flex flex-col justify-center space-y-12">
                        <div className="space-y-6 border-l-4 border-[#E6AF4B] pl-8">
                            <div className="flex items-center gap-3 text-white">
                                <ScrollText className="w-5 h-5 text-[#E6AF4B]" />
                                <h3 className="text-xl font-bold uppercase tracking-widest font-serif text-white">The Logic of State</h3>
                            </div>
                            <p className="text-white/70 leading-relaxed font-sans text-lg">
                                "Otoritas bukan tentang kekuatan, tapi tentang <strong>legitimasi</strong>. Struktur ini dibangun untuk membedakan antara yang berhak dan yang tidak."
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { id: "I", title: "The Shield (Perisai)", desc: "Simbol perlindungan dan tanggung jawab mutlak.", icon: <Shield className="w-3 h-3" /> },
                                { id: "II", title: "Vertical Authority", desc: "Satu garis tegas. Kebijakan mengalir dari atas ke bawah.", icon: <Anchor className="w-3 h-3" /> },
                                { id: "III", title: "Balanced Power", desc: "Keseimbangan antara Hak (Eksploitasi) dan Kewajiban (Konservasi).", icon: <Scale className="w-3 h-3" /> },
                                { id: "IV", title: "The Crown Jewel", desc: "Berlian di puncak sebagai simbol Legitimasi sah.", icon: <Crown className="w-3 h-3" /> },
                                { id: "V", title: "Layered Defense", desc: "Energi tidak boleh telanjang; ia harus dibalut hukum.", icon: <Layout className="w-3 h-3" /> }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group">
                                    <span className="font-mono text-white/20 font-bold text-sm w-6">0{item.id}</span>
                                    <div className="space-y-1">
                                        <h4 className="text-sm font-bold text-white uppercase tracking-wide group-hover:text-[#E6AF4B] transition-colors">{item.title}</h4>
                                        <p className="text-sm text-white/50 leading-relaxed font-sans">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CONNECTOR */}
                <div className="w-px h-24 bg-white/20 mx-auto" />


                {/* COLOR AUTHORITY SECTION - 4 Sovereign Colors */}
                <div className="w-full border-y border-white/10 relative bg-white/[0.03]">
                    <div className="absolute inset-0 bg-white opacity-[0.01] pointer-events-none" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 divide-y sm:divide-y-0 relative z-10">
                        {/* 01: Sovereign Gold */}
                        <div className="p-12 flex flex-col items-center justify-center text-center space-y-6 relative group hover:bg-[#E6AF4B] hover:text-[#020617] transition-all duration-500 bg-[#0B1221]/40 border border-white/5">
                            <div className="absolute top-4 left-4 text-[9px] font-mono font-bold opacity-30 tracking-widest">Pillar I</div>
                            <div className="w-12 h-12 bg-[#E6AF4B] rounded-sm group-hover:scale-110 transition-transform shadow-lg border border-black/10" />
                            <div className="space-y-4 relative z-10">
                                <h4 className="text-2xl font-black uppercase tracking-widest">Gold</h4>
                                <p className="opacity-70 text-xs font-sans font-medium max-w-[180px] mx-auto leading-relaxed">
                                    "Mewakili awal energi dan nilai murni yang harus dijaga keberlangsungan."
                                </p>
                            </div>
                            <span className="text-[9px] font-mono opacity-40 uppercase tracking-widest">#E6AF4B</span>
                        </div>

                        {/* 02: Active Teal */}
                        <div className="p-12 flex flex-col items-center justify-center text-center space-y-6 relative group hover:bg-[#006786] hover:text-white transition-all duration-500 bg-[#0B1221]/60 border border-white/5">
                            <div className="absolute top-4 left-4 text-[9px] font-mono font-bold opacity-30 tracking-widest">Pillar II</div>
                            <div className="w-12 h-12 bg-[#006786] rounded-sm group-hover:scale-110 transition-transform shadow-lg border border-black/10" />
                            <div className="space-y-4 relative z-10">
                                <h4 className="text-2xl font-black uppercase tracking-widest">Teal</h4>
                                <p className="opacity-70 text-xs font-sans font-medium max-w-[180px] mx-auto leading-relaxed">
                                    "Elemen transisi yang melambangkan fleksibilitas dan pergerakan energi yang terukur."
                                </p>
                            </div>
                            <span className="text-[9px] font-mono opacity-40 uppercase tracking-widest">#006786</span>
                        </div>

                        {/* 03: Deep Navy */}
                        <div className="p-12 flex flex-col items-center justify-center text-center space-y-6 relative group hover:bg-[#1A1F2B] hover:text-white transition-all duration-500 bg-[#0B1221]/40 border border-white/10 shadow-inner">
                            <div className="absolute top-4 left-4 text-[9px] font-mono font-bold opacity-30 tracking-widest">Pillar III</div>
                            <div className="w-12 h-12 bg-[#1A1F2B] rounded-sm group-hover:scale-110 transition-transform shadow-lg border border-white/30" />
                            <div className="space-y-4 relative z-10">
                                <h4 className="text-2xl font-black uppercase tracking-widest">Navy</h4>
                                <p className="opacity-70 text-xs font-sans font-medium max-w-[180px] mx-auto leading-relaxed">
                                    "Sumbu utama otoritas dan stabilitas sistem yang menopang seluruh legitimasi."
                                </p>
                            </div>
                            <span className="text-[9px] font-mono opacity-40 uppercase tracking-widest">#1A1F2B</span>
                        </div>

                        {/* 04: Royal Maroon */}
                        <div className="p-12 flex flex-col items-center justify-center text-center space-y-6 relative group hover:bg-[#8B2323] hover:text-white transition-all duration-500 bg-[#0B1221]/60 border border-white/5">
                            <div className="absolute top-4 left-4 text-[9px] font-mono font-bold opacity-30 tracking-widest">Pillar IV</div>
                            <div className="w-12 h-12 bg-[#8B2323] rounded-sm group-hover:scale-110 transition-transform shadow-lg border border-black/10" />
                            <div className="space-y-4 relative z-10">
                                <h4 className="text-2xl font-black uppercase tracking-widest">Maroon</h4>
                                <p className="opacity-70 text-xs font-sans font-medium max-w-[180px] mx-auto leading-relaxed">
                                    "Marwah dan martabat perlindungan. Simbol keberanian dalam menjaga amanah."
                                </p>
                            </div>
                            <span className="text-[9px] font-mono opacity-40 uppercase tracking-widest">#8B2323</span>
                        </div>
                    </div>
                </div>

                {/* CONNECTOR */}
                <div className="w-px h-24 bg-white/20 mx-auto" />

                {/* FINAL STAMP */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative max-w-4xl mx-auto p-16 bg-[#0B1221] border border-white/10 shadow-[20px_20px_0px_0px_rgba(255,255,255,0.03)] text-center"
                >
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#E6AF4B]" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#E6AF4B]" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#E6AF4B]" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#E6AF4B]" />

                    <div className="relative z-10 space-y-8">
                        <div className="inline-block border-b-2 border-[#E6AF4B] pb-2 px-8">
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-white">Internal Directive</span>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-serif italic text-white leading-tight max-w-2xl mx-auto">
                            "Menjaga Martabat <br /> <span className="text-[#E6AF4B] not-italic font-sans font-black uppercase text-3xl tracking-widest">Energi</span>"
                        </h3>

                        <p className="text-white/60 font-sans text-lg max-w-xl mx-auto">
                            Kami adalah otoritas yang hadir untuk melindungi nilai, bukan sekadar menguasai aset. Kehormatan energi adalah prioritas tertinggi.
                        </p>

                        <div className="pt-8 flex items-center justify-center gap-4 text-[10px] uppercase tracking-widest text-[#E6AF4B]/40 font-bold">
                            <span>Approved</span>
                            <div className="w-1 h-1 bg-[#E6AF4B]/40 rounded-full" />
                            <span>Verified</span>
                            <div className="w-1 h-1 bg-[#E6AF4B]/40 rounded-full" />
                            <span>Executed</span>
                        </div>
                    </div>
                </motion.div>

                <div className="h-24" />
            </main>
        </div>
    );
}
