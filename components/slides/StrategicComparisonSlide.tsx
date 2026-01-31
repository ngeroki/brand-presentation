"use client";

import { sqc, SQCBackground, SQCTag } from "@/styles/sqc-theme";
import { Zap, Compass, ShieldAlert, CheckCircle2, XCircle, Target, Workflow } from "lucide-react";
import { motion } from "framer-motion";

export default function StrategicComparisonSlide() {
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

                {/* HEADER - Strategic Dilemma */}
                <header className="w-full flex flex-col items-center text-center space-y-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <SQCTag className="px-8 py-2 bg-white/5 border-white/10 backdrop-blur-2xl">
                            <span className="flex items-center gap-3">
                                <Target className="w-4 h-4 text-[#C5A572]" />
                                Strategic Philosophy Comparison
                            </span>
                        </SQCTag>
                    </motion.div>

                    <div className="space-y-6">
                        <h1 className="text-6xl lg:text-[9rem] font-black uppercase tracking-[calc(-0.06em)] leading-[0.8] text-white">
                            Arah <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#EBB218] filter drop-shadow-[0_0_30px_rgba(197,165,114,0.3)]">Filosofis</span>
                        </h1>
                        <p className="max-w-4xl mx-auto text-xl lg:text-3xl font-light leading-relaxed text-white/30 italic">
                            Untuk memastikan brand dapat berkembang dengan tepat, kami mengeksplorasi dua <span className="font-black text-white italic px-2">Strategic Paths</span> yang berbeda untuk ekosistem Safar Qawiyy.
                        </p>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl">

                    {/* Path A: Full Shape */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative p-12 bg-white/[0.02] border border-white/5 rounded-[4rem] backdrop-blur-3xl hover:border-[#C5A572]/40 hover:bg-white/[0.04] transition-all duration-700 shadow-2xl overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                            <Zap className="w-32 h-32 text-[#C5A572]" />
                        </div>

                        <div className="flex items-center gap-6 mb-12">
                            <div className="w-16 h-16 bg-[#C5A572] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(197,165,114,0.3)]">
                                <Zap className="w-8 h-8 text-[#0B1221]" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Path Alpha: Full Shape</h3>
                                <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-[#C5A572]/60">Narrative & Organic Logic</span>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A572]" />
                                    <h4 className="text-[11px] font-mono font-black text-white/40 uppercase tracking-[0.3em]">Core Philosophy</h4>
                                </div>
                                <p className="text-xl text-white/40 font-light leading-relaxed italic pr-6">
                                    Berfokus pada penceritaan dan simbolisme literal. Menciptakan bentuk yang "terisi" dengan makna—menggabungkan elemen gunung, matahari, dan pilar menjadi satu tanda yang kohesif.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[2rem] space-y-4">
                                    <div className="flex items-center gap-3 text-emerald-400">
                                        <CheckCircle2 className="w-4 h-4" />
                                        <span className="text-[10px] font-mono font-black uppercase tracking-widest">Advantage</span>
                                    </div>
                                    <p className="text-xs text-white/40 leading-relaxed italic">Koneksi emosional tinggi. Penceritaan yang jelas, terasa lebih "manusiawi".</p>
                                </div>
                                <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[2rem] space-y-4">
                                    <div className="flex items-center gap-3 text-rose-400">
                                        <ShieldAlert className="w-4 h-4" />
                                        <span className="text-[10px] font-mono font-black uppercase tracking-widest">Constraint</span>
                                    </div>
                                    <p className="text-xs text-white/40 leading-relaxed italic">Secara visual kompleks. Lebih sulit diproduksi pada skala mikro.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Path B: Geometric */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative p-12 bg-white/[0.02] border border-white/5 rounded-[4rem] backdrop-blur-3xl hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-700 shadow-2xl overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                            <Compass className="w-32 h-32 text-blue-400" />
                        </div>

                        <div className="flex items-center gap-6 mb-12">
                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                                <Compass className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Path Beta: Geometric</h3>
                                <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-blue-400/60">Abstract & Timeless System</span>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    <h4 className="text-[11px] font-mono font-black text-white/40 uppercase tracking-[0.3em]">Core Philosophy</h4>
                                </div>
                                <p className="text-xl text-white/40 font-light leading-relaxed italic pr-6">
                                    Berfokus pada keseimbangan matematis dan abstraksi. Menyederhanakan brand ke bentuk struktural murninya—grid segitiga, lingkaran sempurna, dan bobot monoline.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="p-8 bg-blue-500/[0.03] border border-white/5 rounded-[2rem] space-y-4">
                                    <div className="flex items-center gap-3 text-emerald-400">
                                        <CheckCircle2 className="w-4 h-4" />
                                        <span className="text-[10px] font-mono font-black uppercase tracking-widest">Advantage</span>
                                    </div>
                                    <p className="text-xs text-white/40 leading-relaxed italic">Abadi, skalabilitas ekstrem, terasa "institusional" dan otoriter.</p>
                                </div>
                                <div className="p-8 bg-blue-500/[0.03] border border-white/5 rounded-[2rem] space-y-4">
                                    <div className="flex items-center gap-3 text-rose-400">
                                        <ShieldAlert className="w-4 h-4" />
                                        <span className="text-[10px] font-mono font-black uppercase tracking-widest">Constraint</span>
                                    </div>
                                    <p className="text-xs text-white/40 leading-relaxed italic">Dapat terasa "dingin" jika tidak dipadukan dengan tipografi yang tepat.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* PRESTIGIOUS FOOTER */}
            <footer className="w-full mt-auto py-10 px-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 bg-black/40 backdrop-blur-2xl">
                <div className="flex items-center gap-6 text-white/20">
                    <Workflow className="w-6 h-6" />
                    <span className="text-[10px] font-mono font-black tracking-widest uppercase">Strategic Decision Matrix // V2.0.1</span>
                </div>

                <div className="flex items-center gap-12 text-white/30">
                    <span className="text-[9px] font-mono text-white/10 uppercase tracking-[0.5em]">SQC_STRATEGY_VAULT</span>
                </div>
            </footer>
        </div>
    );
}
