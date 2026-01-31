"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { sqc, SQCBackground, SQCTag } from "@/styles/sqc-theme";
import { Download, MessageSquare, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function ClosingSlide() {
    return (
        <div className="relative min-h-screen bg-[#0B1221] text-white selection:bg-[#C5A572] selection:text-[#0B1221] overflow-hidden flex flex-col items-center justify-center">
            <SQCBackground />

            {/* AMBIENT GRAND FINALE BACKGROUND */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Massive Radial Glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.4, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] rounded-full blur-[200px]"
                    style={{ background: 'radial-gradient(circle, rgba(197,165,114,0.15) 0%, transparent 70%)' }}
                />

                {/* Technical Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #C5A572 1px, transparent 1px), linear-gradient(to bottom, #C5A572 1px, transparent 1px)`,
                        backgroundSize: '120px 120px'
                    }}
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center text-center space-y-20">

                {/* EMBLEM MONOLITH */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-[#C5A572] blur-3xl opacity-20" />
                    <div className="w-24 h-24 bg-[#C5A572] rounded-[1.5rem] flex items-center justify-center rotate-45 shadow-[0_30px_60px_rgba(197,165,114,0.3)] transition-transform hover:scale-110 duration-700">
                        <ShieldCheck className="w-12 h-12 text-[#0B1221] -rotate-45" />
                    </div>
                </motion.div>

                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <SQCTag className="mx-auto block w-fit border-white/10 px-8 py-2">System Closure // Est. 2026</SQCTag>
                    </motion.div>

                    {/* SCULPTURAL TYPOGRAPHY */}
                    <div className="space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                            className="text-7xl md:text-[10rem] lg:text-[12rem] font-black tracking-[calc(-0.06em)] leading-[0.8] uppercase text-white"
                        >
                            TERIMA <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] via-[#EBB218] to-[#C5A572] drop-shadow-2xl">KASIH</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1, duration: 1.5 }}
                        className="text-xl md:text-3xl text-white/30 max-w-3xl mx-auto leading-relaxed font-light italic"
                    >
                        "Membangun identitas adalah awal dari perjalanan panjang. Kami siap mengawal setiap langkah visual <span className="text-white font-black opacity-100 italic">Safar Qawiyy Corp.</span>"
                    </motion.p>
                </div>

                {/* CALL TO ACTIONS */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="pt-12 flex flex-col md:flex-row gap-10"
                >
                    <Link
                        href="/download"
                        className="group relative px-16 py-7 bg-[#C5A572] text-[#0B1221] font-black uppercase tracking-[0.3em] rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(197,165,114,0.4)] hover:scale-105 active:scale-95 transition-all overflow-hidden text-center"
                    >
                        <div className="relative z-10 flex items-center justify-center gap-4">
                            Unduh Brand Assets <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </div>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                    </Link>

                    <button className="px-16 py-7 border border-white/10 text-white font-black uppercase tracking-[0.3em] rounded-[2rem] hover:bg-white/5 transition-all active:scale-95 flex items-center justify-center gap-4 group">
                        Contact Creative Team <MessageSquare className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                    </button>
                </motion.div>
            </div>

            {/* PRESTIGIOUS FINAL FOOTER */}
            <footer className="absolute bottom-0 w-full py-16 px-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 bg-black/40 backdrop-blur-3xl">
                <div className="flex items-center gap-6">
                    <div className="flex flex-col gap-1 items-center md:items-start">
                        <span className="text-[12px] font-black uppercase tracking-[0.5em] text-[#C5A572] italic">Safar Qawiyy Corp</span>
                        <span className="text-[9px] font-mono font-black tracking-widest text-white/10 uppercase">Identity System // Standard_V2.0.1</span>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-20">
                    <div className="flex flex-col items-center gap-2 opacity-20">
                        <ArrowUpRight className="w-4 h-4" />
                        <span className="text-[8px] font-mono uppercase tracking-widest">Growth</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 opacity-20">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="text-[8px] font-mono uppercase tracking-widest">Integrity</span>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-white/10 font-mono text-[9px] uppercase tracking-[0.5em]">
                    © 2026 SQC_INTELLECTUAL_PROPERTY
                </div>
            </footer>
        </div>
    );
}
