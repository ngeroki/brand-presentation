"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Circle, MousePointer2 } from "lucide-react";
import { useSlideNavigation } from "@/contexts/SlideContext";

export default function IntroSlide() {
    const { goToSlide } = useSlideNavigation();
    return (
        <div className="flex flex-col w-full min-h-full overflow-y-auto no-scrollbar scroll-smooth pt-10">
            {/* Hero Section */}
            <section className="relative flex-1 flex flex-col items-center justify-center text-center py-20 pb-32">
                {/* Background Decorations */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] border border-blue-50 rounded-full opacity-50" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] border border-blue-50 rounded-full opacity-50" />
                    <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-100 to-transparent" />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white text-blue-600 text-[11px] font-black uppercase tracking-[0.3em] mb-10 border border-zinc-100 shadow-sm"
                >
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                    Global Brand Identity System
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-7xl md:text-9xl font-black text-zinc-900 leading-[0.85] tracking-tighter mb-10 uppercase italic"
                >
                    Unified<br />Strength<br /><span className="text-blue-600 underline decoration-blue-100 decoration-[10px] underline-offset-[10px]">Excellence</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-2xl text-zinc-500 text-lg md:text-xl font-light leading-relaxed mb-14 px-4"
                >
                    Safar Qawiyy Corp mengadopsi struktur <span className="font-bold text-zinc-900">Branded House</span>. Sebuah ekosistem visual yang menyatukan visi holding dengan energi setiap anak perusahaan.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6"
                >
                    <button onClick={() => goToSlide(1)} className="flex items-center gap-4 bg-blue-600 text-white px-12 py-5 rounded-[20px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 group active:scale-95">
                        Eksplorasi <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button onClick={() => goToSlide(17)} className="flex items-center gap-4 bg-white border-2 border-zinc-100 text-zinc-900 px-12 py-5 rounded-[20px] font-black uppercase tracking-widest hover:border-zinc-900 transition-all active:scale-95 shadow-sm">
                        Brand Assets <Download className="w-5 h-5" />
                    </button>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="py-12 flex flex-col md:flex-row justify-between items-center border-t border-zinc-100 gap-8">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center rotate-45">
                            <div className="w-3 h-3 bg-white rounded-sm -rotate-45" />
                        </div>
                        <span className="font-bold text-sm tracking-tight text-zinc-900">Safar Qawiyy<span className="text-zinc-400 font-normal"> Corp</span></span>
                    </div>
                    <p className="text-[10px] text-zinc-400">© 2023 Safar Qawiyy Corp. Seluruh Hak Cipta Dilindungi.</p>
                </div>
                <div className="flex items-center gap-8 text-[10px] font-medium text-zinc-500">
                    <a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</a>
                </div>
                <div className="flex gap-4">
                    <button className="w-8 h-8 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-400 hover:border-zinc-900 hover:text-zinc-900 transition-all">
                        <MousePointer2 className="w-3 h-3" />
                    </button>
                    <button className="w-8 h-8 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-400 hover:border-zinc-900 hover:text-zinc-900 transition-all">
                        <Circle className="w-3 h-3" />
                    </button>
                </div>
            </footer>
        </div>
    );
}
