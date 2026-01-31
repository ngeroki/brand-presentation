"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Circle, MousePointer2, Shield, Globe, Lock } from "lucide-react";
import { useSlideNavigation } from "@/contexts/SlideContext";
import { sqc, SQCBackground, SQCTag } from "@/styles/sqc-theme";

export default function IntroSlide() {
    const { goToSlide } = useSlideNavigation();

    return (
        <div className="relative min-h-screen bg-[#0B1221] text-white selection:bg-[#C5A572] selection:text-[#0B1221] overflow-hidden flex flex-col">
            <SQCBackground />

            {/* ULTRA-PREMIUM AMBIENT BACKGROUND */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Moving Grid */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #C5A572 1px, transparent 1px), linear-gradient(to bottom, #C5A572 1px, transparent 1px)`,
                        backgroundSize: '100px 100px',
                        maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
                    }}
                />

                {/* Dynamic Light Blobs */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(197,165,114,0.1)_0%,transparent_70%)] rounded-full blur-[100px]"
                />

                {/* Floating HUD Elements */}
                <div className="absolute top-20 left-20 opacity-20 hidden lg:block">
                    <div className="flex items-center gap-4 text-[10px] font-mono tracking-[0.5em] font-black">
                        <Shield className="w-5 h-5" />
                        <span>SQR_IDENTITY_VAULT_V2</span>
                    </div>
                </div>
                <div className="absolute bottom-40 right-20 opacity-20 hidden lg:block">
                    <div className="flex items-center gap-4 text-[10px] font-mono tracking-[0.5em] font-black">
                        <Globe className="w-5 h-5" />
                        <span>GLOBAL_BRAND_SCALE</span>
                    </div>
                </div>
            </div>

            {/* HERO CONTENT */}
            <section className="relative flex-1 flex flex-col items-center justify-center text-center px-8 z-10 pt-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="mb-12"
                >
                    <div className="px-8 py-3 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full flex items-center gap-4 shadow-2xl">
                        <div className="w-2 h-2 rounded-full bg-[#C5A572] animate-pulse shadow-[0_0_10px_#C5A572]" />
                        <span className="text-[12px] font-black uppercase tracking-[0.4em] text-white/60">Global Brand Identity System</span>
                    </div>
                </motion.div>

                <div className="relative mb-16">
                    {/* Shadow Text for Depth */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.03 }}
                        className="absolute inset-0 -translate-y-4 scale-110 pointer-events-none select-none blur-sm"
                    >
                        <h1 className="text-7xl md:text-[14rem] font-black leading-[0.8] tracking-tight uppercase italic text-[#C5A572]">
                            Unified<br />Strength<br />Excellence
                        </h1>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-7xl md:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase italic text-white drop-shadow-2xl"
                    >
                        Unified<br />Strength<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#EBB218]">Excellence</span>
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="max-w-3xl text-white/40 text-xl md:text-2xl font-light leading-relaxed mb-20 italic"
                >
                    Safar Qawiyy Corp mengadopsi struktur <span className="font-black text-white px-2">Branded House</span>. Sebuah ekosistem visual yang menyatukan visi holding dengan energi setiap anak perusahaan.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="flex flex-col sm:flex-row gap-10"
                >
                    <button
                        onClick={() => goToSlide(1)}
                        className="group relative px-16 py-6 bg-[#C5A572] text-[#0B1221] rounded-[2rem] font-black uppercase tracking-[0.3em] shadow-[0_25px_50px_-12px_rgba(197,165,114,0.4)] hover:scale-105 active:scale-95 transition-all overflow-hidden"
                    >
                        <div className="relative z-10 flex items-center gap-4">
                            Mulai Eksplorasi <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                    </button>

                    <button
                        onClick={() => goToSlide(17)}
                        className="px-16 py-6 border-2 border-white/10 text-white rounded-[2rem] font-black uppercase tracking-[0.3em] hover:bg-white/5 active:scale-95 transition-all flex items-center gap-4 group"
                    >
                        Brand Assets <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </button>
                </motion.div>
            </section>

            {/* PREMIUM FOOTER */}
            <footer className="relative z-10 px-12 py-16 flex flex-col md:flex-row justify-between items-center bg-black/40 backdrop-blur-3xl border-t border-white/5 gap-12 w-full mt-auto">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#C5A572] to-[#8A7145] rounded-xl flex items-center justify-center rotate-45 shadow-lg">
                            <Lock className="w-5 h-5 text-[#0B1221] -rotate-45" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-black text-2xl tracking-tighter text-white uppercase italic">Safar Qawiyy<span className="text-white/30 font-light"> Corp</span></span>
                            <span className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-black">Holdings & Strategic System</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-12 text-[11px] font-black uppercase tracking-[0.4em] text-white/30">
                    <a href="#" className="hover:text-[#C5A572] transition-colors">Integrity</a>
                    <a href="#" className="hover:text-[#C5A572] transition-colors">Excellence</a>
                    <a href="#" className="hover:text-[#C5A572] transition-colors">Unity</a>
                </div>

                <div className="flex gap-6">
                    <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20 hover:border-[#C5A572] hover:text-[#C5A572] transition-all group">
                        <MousePointer2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                    <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20 hover:border-[#C5A572] hover:text-[#C5A572] transition-all group">
                        <Circle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </footer>

            {/* Bottom System Bar */}
            <div className="h-2 w-full bg-gradient-to-r from-transparent via-[#C5A572]/40 to-transparent" />
        </div>
    );
}
