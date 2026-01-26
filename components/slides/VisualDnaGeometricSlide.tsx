"use client";

import { motion } from "framer-motion";
import { Shield, Users, Crown, Circle, LayoutGrid, Ruler, Compass, Lock, MousePointer2 } from "lucide-react";
import Image from "next/image";
import { BrandData } from "@/data/brands";

export default function VisualDnaGeometricSlide({ brand }: { brand: BrandData }) {

    // Aesthetic Data for the "Technical Blueprint" Look
    const technicalMetrics = [
        { label: "Ref", value: "SQC-GEO-V1" },
        { label: "Grid", value: "8PT System" },
        { label: "Ratio", value: "1:1.618" },
        { label: "Scale", value: "100%" },
    ];

    return (
        <div className="flex flex-col w-full min-h-full bg-[#0B1221] text-white font-sans selection:bg-[#C5A572] selection:text-[#0B1221] relative overflow-y-auto no-scrollbar scroll-smooth">

            {/* Background Grid Pattern */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }} />

            {/* HEADER SECTION - Wide & Industrial */}
            <header className="w-full pt-16 pb-12 px-12 lg:px-20 border-b border-white/5 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <div className="space-y-6 max-w-2xl">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-white/5 rounded border border-white/10 text-[10px] font-mono tracking-widest uppercase text-[#C5A572]">
                            <div className="w-1.5 h-1.5 bg-[#C5A572] rounded-full animate-pulse" />
                            Technical Specification V1.0
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                            Geometric<br />
                            <span className="text-[#C5A572]">System</span>
                        </h1>
                        <p className="text-slate-400 font-light text-lg leading-relaxed max-w-xl">
                            Analisis mendalam konstruksi geometris dan logika sistem Safar Qawwiy Corp. Menyadur presisi militer dengan keanggunan institusional.
                        </p>
                    </div>

                    <div className="flex flex-col items-end gap-2 text-right">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Project Identity</span>
                        <div className="text-xl font-bold text-white">{brand.name}</div>
                        <div className="h-px w-32 bg-white/20 my-2" />
                        <div className="flex gap-4">
                            {technicalMetrics.map((m, i) => (
                                <div key={i} className="flex flex-col items-end">
                                    <span className="text-[8px] uppercase text-slate-500 tracking-wider">{m.label}</span>
                                    <span className="text-xs font-mono text-[#C5A572]">{m.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 w-full max-w-[1800px] mx-auto py-20 px-8 lg:px-20 relative z-10">

                {/* BLUEPRINT SECTION - Split Layout */}
                <div className="flex flex-col xl:flex-row gap-20 items-stretch">

                    {/* LEFT: THE BLUEPRINT VISUAL (Sticky) */}
                    <div className="xl:w-[55%] relative">
                        <div className="sticky top-12 border border-white/10 bg-[#0F1629] aspect-square rounded-sm p-12 flex items-center justify-center relative group overflow-hidden">
                            {/* Decorative Technical Guides */}
                            <div className="absolute top-8 left-8 p-3 border border-white/10 bg-black/20 text-[10px] font-mono text-slate-500">
                                COORDINATE SYSTEM<br />
                                X: 104.22 // Y: 390.11
                            </div>
                            <div className="absolute inset-x-0 top-1/2 h-px bg-blue-500/20 border-t border-dashed border-blue-500/30" />
                            <div className="absolute inset-y-0 left-1/2 w-px bg-blue-500/20 border-l border-dashed border-blue-500/30" />

                            {/* Circular Guides */}
                            <div className="absolute inset-0 m-auto w-[70%] h-[70%] rounded-full border border-white/5 border-dashed animate-[spin_60s_linear_infinite]" />
                            <div className="absolute inset-0 m-auto w-[50%] h-[50%] rounded-full border border-white/5" />

                            <Image
                                src={brand.logos.geometric}
                                alt="Geometric Blueprint"
                                width={600}
                                height={600}
                                className="w-full h-full object-contain drop-shadow-2xl relative z-10 p-12 brightness-110"
                                unoptimized
                            />

                            <div className="absolute bottom-8 right-8 text-[10px] font-mono text-[#C5A572] tracking-widest">
                                ∅ PRECISION GRID
                            </div>
                        </div>
                        <div className="flex justify-between mt-4 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                            <span>Ref: Blueprint-SQC-01</span>
                            <span>Scale: 1:1.2</span>
                        </div>
                    </div>

                    {/* RIGHT: THE ANALYSIS (Scrollable) */}
                    <div className="xl:w-[45%] space-y-16 py-8">

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-[#C5A572]">
                                <Compass className="w-5 h-5" />
                                <h3 className="text-xl font-bold uppercase tracking-widest">Logika Geometri</h3>
                            </div>
                            <p className="text-slate-400 leading-relaxed italic border-l-2 border-[#C5A572] pl-6 py-1">
                                "Setiap tarikan garis adalah batasan adab, dan setiap sudut adalah pilar kekuatan yang tak tergoyahkan."
                            </p>
                        </div>

                        {/* List Items - Styled as Technical Specs */}
                        <div className="space-y-12">
                            {[
                                {
                                    id: "01",
                                    title: "Otoritas Terstruktur",
                                    desc: "Logo ini tidak menonjolkan ekspresi personal, melainkan ketenangan institusional. Bentuk geometris yang kaku melambangkan disiplin.",
                                    icon: <Shield className="w-4 h-4" />
                                },
                                {
                                    id: "02",
                                    title: "Empat Pilar Vertikal",
                                    desc: "Merepresentasikan empat saudara pendiri, berdiri sejajar dan setara. Integritas, Tanggung Jawab, dan Arah yang konsisten.",
                                    icon: <Users className="w-4 h-4" />
                                },
                                {
                                    id: "03",
                                    title: "Geometri Mahkota",
                                    desc: "Keselarasan lebih penting daripada kompleksitas. Struktur atas melambangkan tata kelola terpadu dan visi yang terpusat.",
                                    icon: <Crown className="w-4 h-4" />
                                },
                                {
                                    id: "04",
                                    title: "Lingkaran Pelindung",
                                    desc: "Kekuatan yang menjaga, bukan mendominasi. Lingkaran adalah simbol perlindungan aset dan keberlanjutan lintas generasi.",
                                    icon: <Circle className="w-4 h-4" />
                                },
                                {
                                    id: "05",
                                    title: "Disiplin Garis",
                                    desc: "Satu sistem, satu aturan. Konsistensi ketebalan garis melambangkan keadilan struktural dan transparansi proses.",
                                    icon: <Ruler className="w-4 h-4" />
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-8 group"
                                >
                                    <div className="shrink-0 w-12 h-12 border border-white/10 bg-white/5 flex items-center justify-center font-mono text-[#C5A572] text-sm group-hover:bg-[#C5A572] group-hover:text-[#0B1221] transition-colors duration-300">
                                        {item.id}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-lg font-bold text-white group-hover:text-[#C5A572] transition-colors">{item.title}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="my-24 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* --- SECTIONS PRESERVED (Bottom) --- */}

                {/* 07. DNA Warna */}
                <div className="space-y-12">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#C5A572]">Color Logic</span>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-black uppercase italic tracking-tighter text-center mb-12 text-white">Otoritas & Kepercayaan</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#151b2e] border border-white/5 p-10 flex flex-col items-center justify-between text-center h-64 text-white shadow-xl group hover:border-[#C5A572]/50 transition-colors">
                            <div>
                                <h4 className="text-3xl font-black uppercase italic">Deep Navy</h4>
                                <p className="text-slate-400 text-sm mt-4 font-light">Stabilitas & Kewibawaan Institusional.</p>
                            </div>
                            <span className="text-[10px] font-mono opacity-30 tracking-[0.3em] uppercase">HEX: #1A1F2B</span>
                        </div>
                        <div className="bg-[#C5A572] p-10 flex flex-col items-center justify-between text-center h-64 text-[#0B1221] shadow-xl group hover:brightness-110 transition-all">
                            <div>
                                <h4 className="text-3xl font-black uppercase italic">Muted Gold</h4>
                                <p className="text-[#0B1221]/70 text-sm mt-4 font-medium">Nilai, Amanah & Tanggung Jawab.</p>
                            </div>
                            <span className="text-[10px] font-mono opacity-40 tracking-[0.3em] uppercase">HEX: #C5A572</span>
                        </div>
                    </div>
                </div>

                {/* 08. NARASI NILAI INTERNAL - Confidential Segment */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    className="relative p-12 lg:p-20 bg-white text-[#0B1221] mt-24 shadow-2xl overflow-hidden"
                >
                    {/* Background Security Pattern Effect */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none overflow-hidden text-[8px] font-mono leading-none rotate-12 bg-slate-100">
                        {Array(50).fill("INTERNAL ONLY • CONFIDENTIAL • ").map((s, i) => <div key={i} className="whitespace-nowrap mb-2 text-slate-900">{s}</div>)}
                    </div>

                    <div className="relative z-10 space-y-16 flex flex-col items-center text-center">
                        <div className="flex flex-col items-center gap-8 max-w-4xl">
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 border border-red-100 rounded-full text-[10px] font-black uppercase tracking-widest">
                                <Lock className="w-3 h-3" /> Internal Statement
                            </div>

                            <h3 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-[#0B1221] leading-[0.9]">
                                Narasi Nilai <span className="text-blue-600">Internal</span>
                            </h3>

                            <p className="text-slate-600 text-lg lg:text-xl font-light leading-relaxed">
                                <span className="font-bold text-[#0B1221] italic">Safar Qawiyy</span> berarti Perjalanan yang Kuat dan Terjaga. Ini adalah kompas bagi keluarga pendiri dan dewan—berbisnis bukan dengan ekspansi kasar, melainkan melalui keterhubungan dan presisi struktural.
                            </p>
                        </div>

                        <div className="h-px w-full bg-slate-200" />

                        {/* Letter Meanings */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                            {[
                                { char: "Qof", mean: "Misi & Amanah", desc: "Setiap pergerakan membawa misi yang lebih besar dari sekadar keuntungan." },
                                { char: "Wau", mean: "Governance", desc: "Transparansi dan tata kelola yang jelas menjadi fondasi kepercayaan." },
                                { char: "Ya", mean: "Ekosistem", desc: "Kekuatan tumbuh melalui jaringan kemitraan yang sabar dan presisi." }
                            ].map((item, i) => (
                                <div key={i} className="space-y-4 flex flex-col items-center">
                                    <h4 className="text-3xl font-black text-blue-600 italic flex items-center gap-3 w-full justify-center">
                                        <div className="h-px flex-1 bg-blue-100 hidden md:block" />
                                        {item.char}
                                        <div className="h-px flex-1 bg-blue-100 hidden md:block" />
                                    </h4>
                                    <p className="font-black uppercase tracking-widest text-[10px] text-[#0B1221]">{item.mean}</p>
                                    <p className="text-sm text-slate-500 font-light leading-relaxed max-w-[280px]">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Spacer */}
                <div className="h-24" />
            </main>
        </div>
    );
}
