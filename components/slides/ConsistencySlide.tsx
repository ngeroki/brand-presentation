"use client";

import { motion } from "framer-motion";
import { Circle, Triangle, Layers, Type, Share2, Download, Printer, Fingerprint, Network, Ruler } from "lucide-react";
import { sqc, SQCBackground, SQCTag } from "@/styles/sqc-theme";

export default function ConsistencySlide() {
    const accentColor = "#C5A572";

    return (
        <div className="relative min-h-screen bg-[#0B1221] text-white selection:bg-[#C5A572] selection:text-[#0B1221] overflow-hidden flex flex-col">
            <SQCBackground />

            {/* AMBIENT BACKGROUND */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(to right, ${accentColor} 1px, transparent 1px), linear-gradient(to bottom, ${accentColor} 1px, transparent 1px)`,
                        backgroundSize: '100px 100px',
                        maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 90%)'
                    }}
                />
            </div>

            <main className="relative z-10 w-full max-w-[1500px] mx-auto px-12 pt-16 pb-32 flex flex-col items-center">

                {/* HEADER - Systematic Evolution */}
                <header className="w-full flex flex-col items-center text-center space-y-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <SQCTag className="px-8 py-2 bg-white/5 border-white/10 backdrop-blur-2xl">
                            <span className="flex items-center gap-3">
                                <Network className="w-4 h-4 text-[#C5A572]" />
                                Systematic Brand Consistency
                            </span>
                        </SQCTag>
                    </motion.div>

                    <div className="space-y-6">
                        <h1 className="text-6xl lg:text-[9rem] font-black uppercase tracking-[calc(-0.06em)] leading-[0.8] text-white">
                            Satu Jiwa, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#EBB218] filter drop-shadow-[0_0_30px_rgba(197,165,114,0.3)]">Beragam Wajah</span>
                        </h1>
                        <p className="max-w-4xl mx-auto text-xl lg:text-3xl font-light leading-relaxed text-white/30 italic">
                            Membangun ekosistem yang kohesif melalui <span className="font-black text-white italic px-2">Visual Standardization</span>. Setiap entitas berdiri mandiri secara operasional, terikat oleh DNA visual yang utuh.
                        </p>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-7xl">
                    {/* Visual Weight - Grid Unit */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group relative p-12 bg-white/[0.02] border border-white/5 rounded-[3rem] backdrop-blur-3xl hover:border-[#C5A572]/40 hover:bg-white/[0.04] transition-all duration-700 shadow-2xl overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                            <Ruler className="w-24 h-24 text-[#C5A572]" />
                        </div>
                        <div className="w-16 h-16 bg-[#C5A572] rounded-2xl flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(197,165,114,0.3)] group-hover:rotate-12 transition-transform">
                            <Layers className="w-8 h-8 text-[#0B1221]" />
                        </div>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-6 group-hover:text-[#C5A572] transition-colors">Kesamaan Grid</h3>
                        <p className="text-lg text-white/40 font-light leading-relaxed italic">
                            Seluruh logo lahir dari <span className="text-white font-black italic">mathematically-aligned grid</span> yang identik. Ini memastikan "visual weight" yang setara di seluruh ekosistem.
                        </p>
                    </motion.div>

                    {/* Geometric DNA - Symbol Unit */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group relative p-12 bg-white/[0.02] border border-white/5 rounded-[3rem] backdrop-blur-3xl hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-700 shadow-2xl overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                            <Triangle className="w-24 h-24 text-blue-500" />
                        </div>
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(37,99,235,0.3)] group-hover:rotate-12 transition-transform">
                            <Circle className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-6 group-hover:text-blue-400 transition-colors">DNA Geometri</h3>
                        <p className="text-lg text-white/40 font-light leading-relaxed italic">
                            Segitiga (simbol pertumbuhan) dan Lingkaran (simbol kesatuan) disematkan secara subtil sebagai <span className="text-white font-black italic">dialog bentuk</span> yang menyatukan visi grup.
                        </p>
                    </motion.div>

                    {/* Typography - Voice Unit */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group relative p-12 bg-white/[0.02] border border-white/5 rounded-[3rem] backdrop-blur-3xl hover:border-emerald-500/40 hover:bg-white/[0.04] transition-all duration-700 shadow-2xl overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                            <Type className="w-24 h-24 text-emerald-500" />
                        </div>
                        <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(16,185,129,0.3)] group-hover:rotate-12 transition-transform">
                            <Type className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-6 group-hover:text-emerald-400 transition-colors">Suara Tipografi</h3>
                        <p className="text-lg text-white/40 font-light leading-relaxed italic">
                            Penggunaan tipografi yang seragam menciptakan kesan <span className="text-white font-black italic">"Silent Strength"</span>—tenang, modern, dan otoritatif di setiap titik sentuh.
                        </p>
                    </motion.div>
                </div>

                {/* FUTURE PROOFING - Holographic Dossier */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full max-w-7xl mt-24 group"
                >
                    <div className="relative p-12 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-[4rem] backdrop-blur-3xl overflow-hidden">
                        <div className="absolute top-0 right-0 p-12">
                            <Fingerprint className="w-32 h-32 text-white/[0.02] group-hover:text-[#C5A572]/10 transition-colors duration-1000" />
                        </div>

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                            <div className="max-w-2xl text-center lg:text-left space-y-6">
                                <h4 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white">
                                    Membangun Masa Depan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#EBB218]">Bersama</span>.
                                </h4>
                                <p className="text-xl text-white/30 font-light leading-relaxed italic">
                                    Sistem identitas ini dirancang untuk skalabilitas, memungkinkan penambahan unit bisnis baru tanpa kehilangan integritas brand utama.
                                </p>
                            </div>

                            <button className="group relative px-12 py-6 bg-[#C5A572] text-[#0B1221] font-black uppercase tracking-[0.3em] rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(197,165,114,0.3)] hover:scale-105 active:scale-95 transition-all overflow-hidden whitespace-nowrap">
                                <span className="relative z-10">Unduh Panduan Teknis</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* PRESTIGIOUS FOOTER */}
            <footer className="w-full mt-auto py-10 px-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 bg-black/40 backdrop-blur-2xl">
                <div className="flex items-center gap-6 text-white/20">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#C5A572] to-[#8A7145] rounded-md flex items-center justify-center rotate-45 shadow-lg">
                        <Network className="w-3.5 h-3.5 text-[#0B1221] -rotate-45" />
                    </div>
                    <span className="text-[10px] font-mono font-black tracking-widest uppercase">System Integrity // Global Standard 1.0</span>
                </div>

                <div className="flex items-center gap-12 text-white/30">
                    <button className="flex items-center gap-3 hover:text-white transition-colors"><Share2 className="w-4 h-4" /></button>
                    <button className="flex items-center gap-3 hover:text-white transition-colors"><Download className="w-4 h-4" /></button>
                    <button className="flex items-center gap-3 hover:text-white transition-colors"><Printer className="w-4 h-4" /></button>
                </div>
            </footer>
        </div>
    );
}
