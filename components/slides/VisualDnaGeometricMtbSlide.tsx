"use client";

import { motion } from "framer-motion";
import { Lock, Compass, Ruler, Maximize2, Layers, Activity } from "lucide-react";
import Image from "next/image";
import { BrandData } from "@/data/brands";

export default function VisualDnaGeometricMtbSlide({ brand }: { brand: BrandData }) {

    const technicalMetrics = [
        { label: "Ref", value: "MTB-GEO-V1" },
        { label: "Grid", value: "8PT System" },
        { label: "Ratio", value: "1:1.618" },
        { label: "Scale", value: "100%" },
    ];

    return (
        <div className="flex flex-col w-full min-h-full bg-[#1A1816] text-[#FDFCFB] font-sans selection:bg-[#FFBE18] selection:text-[#1A1816] relative overflow-y-auto no-scrollbar scroll-smooth">

            {/* Background Grid Pattern - MTB Specific */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }} />

            <header className="w-full pt-16 pb-12 px-12 lg:px-20 border-b border-white/5 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <div className="space-y-6 max-w-2xl">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-white/5 rounded border border-white/10 text-[10px] font-mono tracking-widest uppercase text-[#FFBE18] font-bold">
                            <div className="w-1.5 h-1.5 bg-[#FFBE18] rounded-full animate-pulse" />
                            Technical Specification V1.0
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                            MTB<br />
                            <span className="text-[#FFBE18]">SYSTEM</span>
                        </h1>
                        <p className="text-slate-400 font-light text-lg leading-relaxed max-w-xl">
                            Matahari Timur Bumi adalah entitas yang merepresentasikan fase awal perjalanan nilai dalam grup: titik lahir energi, potensi, dan daya dasar yang akan menopang seluruh struktur berikutnya.
                        </p>
                    </div>

                    <div className="flex flex-col items-end gap-2 text-right">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Project Identity</span>
                        <div className="text-xl font-bold text-white uppercase">{brand.name}</div>
                        <div className="h-px w-32 bg-white/20 my-2" />
                        <div className="flex gap-4">
                            {technicalMetrics.map((m, i) => (
                                <div key={i} className="flex flex-col items-end">
                                    <span className="text-[8px] uppercase text-slate-500 tracking-wider">{m.label}</span>
                                    <span className="text-xs font-mono text-[#FFBE18]">{m.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 w-full max-w-[1800px] mx-auto py-20 px-8 lg:px-20 relative z-10">

                <div className="flex flex-col xl:flex-row gap-20 items-stretch">

                    {/* LEFT: THE BLUEPRINT VISUAL */}
                    <div className="xl:w-[55%] relative">
                        <div className="sticky top-12 border border-white/10 bg-black/20 aspect-square rounded-sm p-12 flex items-center justify-center relative group overflow-hidden">
                            <div className="absolute top-8 left-8 p-3 border border-white/10 bg-black/20 text-[10px] font-mono text-slate-500">
                                COORDINATE SYSTEM<br />
                                X: 112.45 // Y: 382.90
                            </div>
                            <div className="absolute inset-x-0 top-1/2 h-px bg-[#FFBE18]/20 border-t border-dashed border-[#FFBE18]/30" />
                            <div className="absolute inset-y-0 left-1/2 w-px bg-[#FFBE18]/20 border-l border-dashed border-[#FFBE18]/30" />

                            <div className="absolute inset-0 m-auto w-[75%] h-[75%] rounded-full border border-white/5 border-dashed" />
                            <div className="absolute inset-0 m-auto w-[55%] h-[55%] rounded-full border border-white/5" />

                            <Image
                                src={brand.logos.geometric}
                                alt="Geometric Blueprint"
                                width={600}
                                height={600}
                                className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(255,190,24,0.1)] relative z-10 p-12 brightness-110"
                                unoptimized
                            />

                            <div className="absolute bottom-8 right-8 text-[10px] font-mono text-[#FFBE18] tracking-widest">
                                ∅ PRECISION GRID
                            </div>
                        </div>
                        <div className="flex justify-between mt-4 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                            <span>Ref: BLUEPRINT-MTB-GEO</span>
                            <span>Scale: 1:1.0</span>
                        </div>
                    </div>

                    {/* RIGHT: THE ANALYSIS */}
                    <div className="xl:w-[45%] space-y-16 py-8">

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-[#FFBE18]">
                                <Compass className="w-5 h-5" />
                                <h3 className="text-xl font-bold uppercase tracking-widest">Logika Geometri</h3>
                            </div>
                            <p className="text-slate-400 leading-relaxed italic border-l-2 border-[#FFBE18] pl-6 py-1">
                                "Struktur yang menampung cahaya, memberikan ruang bagi energi untuk tumbuh secara terukur dan berpijak pada realitas bumi."
                            </p>
                        </div>

                        <div className="space-y-12">
                            {[
                                {
                                    id: "01",
                                    title: "Struktur Terbuka",
                                    desc: "Bentuk logo menyerupai bangunan terbuka dengan atap segitiga mengarah ke atas melambangkan tempat terbitnya cahaya—ruang awal di mana energi pertama kali hadir.",
                                    icon: <Layers className="w-4 h-4" />
                                },
                                {
                                    id: "02",
                                    title: "Tiga Pilar Fondasi",
                                    desc: "Merepresentasikan fondasi energi yang nyata: alam, bumi, dan sumber daya manusia. Berdiri sejajar menandakan keseimbangan antara potensi dan ketahanan.",
                                    icon: <Ruler className="w-4 h-4" />
                                },
                                {
                                    id: "03",
                                    title: "Momentum Terbit",
                                    desc: "Atap segitiga yang mengarah ke atas melambangkan arah timur dan momentum terbit: proses awal yang tenang dan terarah menuju puncak kemakmuran.",
                                    icon: <Maximize2 className="w-4 h-4" />
                                },
                                {
                                    id: "04",
                                    title: "Konektivitas Bumi",
                                    desc: "Bentuk terbuka di bagian bawah menandakan keterhubungan dengan bumi—bahwa energi di sini bersifat real, membumi, dan berbasis aset nyata.",
                                    icon: <Activity className="w-4 h-4" />
                                },
                                {
                                    id: "05",
                                    title: "Disiplin Eksplorasi",
                                    desc: "Garis geometris yang sederhana menegaskan disiplin dan kehati-hatian dalam fase eksplorasi, di mana nilai potensi dijaga dengan penuh tanggung jawab.",
                                    icon: <Compass className="w-4 h-4" />
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-8 group"
                                >
                                    <div className="shrink-0 w-12 h-12 border border-white/10 bg-white/5 flex items-center justify-center font-mono text-[#FFBE18] text-sm group-hover:bg-[#FFBE18] group-hover:text-[#1A1816] transition-colors duration-300">
                                        {item.id}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-lg font-bold text-white group-hover:text-[#FFBE18] transition-colors uppercase tracking-tight">{item.title}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="my-24 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* COLOR DNA SECTION */}
                <div className="space-y-12">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FFBE18]">Color Logic</span>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-black uppercase italic tracking-tighter text-center mb-12 text-white">Genesis Palette</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#1A1816] border border-white/10 p-12 flex flex-col items-center justify-center text-center space-y-6 shadow-xl group hover:border-[#FFBE18]/30 transition-colors">
                            <h4 className="text-3xl font-black uppercase italic">Deep Charcoal</h4>
                            <p className="text-slate-400 text-sm font-light max-w-xs leading-relaxed">Melambangkan kedalaman bumi dan stabilitas pilar fondasi.</p>
                            <span className="text-[10px] font-mono opacity-30 tracking-[0.3em] uppercase">HEX: #1A1816</span>
                        </div>
                        <div className="bg-[#FFBE18] p-12 flex flex-col items-center justify-center text-center space-y-6 shadow-xl group hover:brightness-110 transition-all">
                            <h4 className="text-3xl font-black uppercase italic text-[#1A1816]">Sun Gold</h4>
                            <p className="text-[#1A1816]/80 text-sm font-medium max-w-xs leading-relaxed">Melambangkan cahaya awal, nilai potensi, dan energi yang terbit dengan murni.</p>
                            <span className="text-[10px] font-mono opacity-40 tracking-[0.3em] uppercase text-[#1A1816]">HEX: #FFBE18</span>
                        </div>
                    </div>
                </div>

                {/* INTERNAL NARRATIVE BLOCK */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    className="relative p-12 lg:p-20 bg-[#FDFCFB] text-[#1A1816] mt-24 shadow-2xl overflow-hidden rounded-sm"
                >
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none overflow-hidden text-[8px] font-mono leading-none rotate-12 bg-slate-100">
                        {Array(50).fill("INTERNAL ONLY • CONFIDENTIAL • ").map((s, i) => <div key={i} className="whitespace-nowrap mb-2 text-slate-900">{s}</div>)}
                    </div>

                    <div className="relative z-10 space-y-16 flex flex-col items-center text-center">
                        <div className="flex flex-col items-center gap-8 max-w-4xl">
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 border border-red-100 rounded-full text-[10px] font-black uppercase tracking-widest">
                                <Lock className="w-3 h-3" /> Internal Statement
                            </div>

                            <h3 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-[#1A1816] leading-[0.9]">
                                Titik Awal <span className="text-[#FFBE18]">Wujud</span>
                            </h3>

                            <p className="text-slate-600 text-lg lg:text-xl font-light leading-relaxed">
                                Matahari Timur Bumi memosisikan diri sebagai titik awal wujud: tempat energi dikenali, dihormati, dan dipersiapkan sebelum diarahkan ke fase pengelolaan dan penjagaan.
                            </p>
                        </div>

                        <div className="h-px w-full bg-slate-200" />

                        <p className="font-bold text-2xl md:text-3xl text-[#1A1816] italic max-w-4xl leading-relaxed">
                            "Essence: energi lahir dari awal yang sederhana, terarah, dan berpijak pada bumi."
                        </p>
                    </div>
                </motion.div>

                <div className="h-24" />
            </main>
        </div>
    );
}
