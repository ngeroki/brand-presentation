import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BrandData } from "@/data/brands";
import { ArrowRight, Leaf, Box, Shield, Target, Layers, Workflow, CheckCircle2, MoveLeft, Share2, Download, Printer } from "lucide-react";

export default function BrandKitMainSlide({ brand }: { brand: BrandData }) {
    const [viewMode, setViewMode] = useState<"wall" | "shape" | "geometric">("wall");

    const fadeIn = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };

    // Grouping constants to avoid hydration issues
    const iconsMap = useMemo(() => [Target, Shield, Layers, Workflow, CheckCircle2, Leaf], []);

    return (
        <div className="flex flex-col w-full h-full bg-white overflow-y-auto no-scrollbar scroll-smooth p-0 select-none pt-10">
            {/* View Mode Switcher */}
            <div className="flex items-center justify-center py-4 px-12 border-b border-zinc-50 bg-white/50 backdrop-blur-sm sticky top-0 z-20">
                <nav className="flex items-center gap-8 text-sm font-medium text-zinc-500">
                    <button onClick={() => setViewMode("wall")} className={viewMode === 'wall' ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'hover:text-zinc-900 transition-colors'}>Collection</button>
                    {viewMode !== 'wall' && (
                        <span className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1 uppercase tracking-widest text-[10px]">
                            {viewMode === 'shape' ? 'Organic' : 'Geometric'} Philosophy
                        </span>
                    )}
                </nav>
            </div>

            <AnimatePresence mode="wait">
                {viewMode === "wall" ? (
                    <motion.div {...fadeIn} key="wall" className="flex-1 px-12 py-16">
                        <div className="max-w-4xl mb-20">
                            <h1 className="text-5xl font-bold text-zinc-900 mb-2">{brand.name}</h1>
                            <h2 className="text-5xl font-bold text-blue-600 mb-8">Brand Collection</h2>
                            <p className="text-lg text-zinc-500 font-light leading-relaxed">
                                {brand.meaning}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                            {/* Organic Card */}
                            <div className="flex flex-col space-y-6 group cursor-pointer" onClick={() => setViewMode("shape")}>
                                <div className="relative aspect-video bg-zinc-50 border border-zinc-100 overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-700">
                                    <Image src={brand.logos.fullyShape} alt="Organic" fill className="object-contain p-12 group-hover:scale-105 transition-transform duration-700" unoptimized />
                                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-zinc-900 group-hover:translate-x-1 transition-transform">Pendekatan Organik</h3>
                                    <p className="text-zinc-500 font-light text-sm leading-relaxed">Menekankan pada aspek pertumbuhan, adaptasi, dan perjalanan yang dinamis (Full Shape).</p>
                                    <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-600 mt-2">
                                        Eksplorasi Filosofi <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </div>

                            {/* Geometric Card */}
                            <div className="flex flex-col space-y-6 group cursor-pointer" onClick={() => setViewMode("geometric")}>
                                <div className="relative aspect-video bg-zinc-50 border border-zinc-100 overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-700">
                                    <Image src={brand.logos.geometric} alt="Geometric" fill className="object-contain p-12 group-hover:scale-105 transition-transform duration-700" unoptimized />
                                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-zinc-900 group-hover:translate-x-1 transition-transform">Pendekatan Geometris</h3>
                                    <p className="text-zinc-500 font-light text-sm leading-relaxed">Menekankan pada aspek kekuatan, struktur, dan keteraturan sistem global.</p>
                                    <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-600 mt-2">
                                        Eksplorasi Filosofi <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 p-8 bg-zinc-50 rounded-2xl border border-zinc-100 mb-20">
                            <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center border border-zinc-200">
                                <Box className="w-5 h-5 text-zinc-900" />
                            </div>
                            <div>
                                <p className="text-zinc-900 font-bold mb-1">Brand Industry</p>
                                <p className="text-sm text-zinc-500 font-light">{brand.industry}</p>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div {...fadeIn} key="deep-dive" className="flex-1 px-12 py-16 flex flex-col">
                        <div className="text-center mb-16">
                            <h4 className="text-[10px] tracking-[0.5em] text-zinc-400 uppercase font-black mb-2">— LOGO PHILOSOPHY —</h4>
                            <h2 className="text-4xl font-bold text-zinc-900 uppercase tracking-tight">{brand.name}</h2>
                            <div className="h-[2px] w-12 bg-blue-600 mx-auto mt-6" />
                        </div>

                        <div className="grid grid-cols-12 gap-16 flex-1 items-start mb-20">
                            <div className="col-span-5 space-y-8">
                                <div className="relative aspect-square bg-white border border-zinc-100 shadow-2xl shadow-zinc-100/50 rounded-2xl flex items-center justify-center p-12">
                                    <Image
                                        src={viewMode === 'shape' ? brand.logos.fullyShape : brand.logos.geometric}
                                        alt="Logo detail"
                                        fill
                                        className="object-contain p-8"
                                        unoptimized
                                    />
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl shadow-blue-100">
                                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mb-4">Essence</p>
                                        <p className="text-lg leading-relaxed font-light italic">
                                            "{brand.philosophySummary}"
                                        </p>
                                    </div>
                                    <p className="text-zinc-500 text-sm leading-relaxed font-light border-l-2 border-zinc-100 pl-6 italic">
                                        {brand.meaning}
                                    </p>
                                </div>
                            </div>

                            <div className="col-span-7 space-y-12">
                                <div className="space-y-10">
                                    {brand.philosophyBreakdown.map((item, idx) => {
                                        const Icon = iconsMap[idx % iconsMap.length];
                                        return (
                                            <div key={idx} className="flex gap-8 group">
                                                <div className="shrink-0 w-12 h-12 bg-blue-50 border border-blue-100 flex items-center justify-center rounded-xl group-hover:bg-blue-600 transition-colors duration-500">
                                                    <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-500" />
                                                </div>
                                                <div className="space-y-2">
                                                    <h3 className="text-xl font-bold text-zinc-900 uppercase tracking-tight">{item.label}</h3>
                                                    <p className="text-zinc-500 font-light leading-relaxed text-base">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <button
                                    onClick={() => setViewMode("wall")}
                                    className="flex items-center gap-3 text-zinc-400 hover:text-zinc-900 transition-colors pt-12 border-t border-zinc-100 w-full group"
                                >
                                    <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                    <span className="text-xs uppercase font-black tracking-widest">Kembali ke Koleksi Utama</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Footer */}
            <footer className="px-12 py-8 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-6 mt-auto">
                <div className="flex items-center gap-3 text-zinc-400">
                    <div className="w-4 h-4 bg-zinc-400 rotate-45 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white -rotate-45" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest">Brand Identity System V1.0 — {brand.name}</span>
                </div>
                <div className="flex items-center gap-6 text-zinc-400">
                    <Share2 className="w-4 h-4 hover:text-zinc-900 cursor-pointer transition-colors" />
                    <Download className="w-4 h-4 hover:text-zinc-900 cursor-pointer transition-colors" />
                    <Printer className="w-4 h-4 hover:text-zinc-900 cursor-pointer transition-colors" />
                </div>
            </footer>
        </div>
    );
}
