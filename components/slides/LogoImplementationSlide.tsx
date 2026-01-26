"use client";

import Image from "next/image";
import { BrandData } from "@/data/brands";
import { Share2, Download, Printer, Smartphone, Globe, Instagram, Layout } from "lucide-react";

export default function LogoImplementationSlide({ brand }: { brand: BrandData }) {
    const activeLogo = brand.logos.fullyShape;

    return (
        <div className="flex flex-col w-full min-h-full bg-white overflow-y-auto no-scrollbar scroll-smooth p-0 select-none pt-10">
            {/* Content Body */}
            <main className="flex-1 px-12 py-16 flex flex-col">
                <div className="max-w-4xl mb-12">
                    <h1 className="text-sm font-black tracking-[0.4em] text-blue-600 uppercase mb-4">Visual Experience</h1>
                    <h2 className="text-6xl font-bold text-zinc-900 mb-6">Mockups & Implementation</h2>
                    <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-2xl">
                        Aplikasi identitas visual {brand.name} pada berbagai titik sentuh (touchpoints) digital dan fisik untuk memvisualisasikan kehadiran brand di pasar.
                    </p>
                </div>

                <div className="grid grid-cols-12 grid-rows-2 gap-6 h-[600px] mb-16">
                    {/* 1. Website Mockup (Large) */}
                    <div className="col-span-8 row-span-1 bg-zinc-900 rounded-[2.5rem] p-8 relative overflow-hidden group shadow-2xl border border-zinc-800">
                        <div className="absolute top-8 left-8 z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <Globe className="w-4 h-4 text-zinc-500" />
                                <span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">Web Ecosystem</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Digital Presence</h3>
                            <p className="text-xs text-zinc-400 font-light">Clean, minimalist web interface for {brand.id.toUpperCase()}</p>
                        </div>

                        {/* Browser Frame Simulation */}
                        <div className="absolute bottom-0 right-0 left-1/4 top-24 bg-white rounded-tl-[2rem] shadow-[-20px_0_40px_rgba(0,0,0,0.5)] overflow-hidden transition-transform duration-700 group-hover:translate-x-4">
                            <div className="h-8 bg-zinc-100 flex items-center px-6 gap-1.5 focus-within:bg-white transition-colors">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/50" />
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-center mb-12">
                                    <div className="w-24 h-8 relative">
                                        <Image src={activeLogo} alt="Logo" fill className="object-contain object-left" unoptimized />
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-1 bg-zinc-100 rounded-full" />
                                        <div className="w-12 h-1 bg-zinc-100 rounded-full" />
                                        <div className="w-12 h-1 bg-zinc-100 rounded-full" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-3/4 h-8 bg-zinc-50 rounded-lg" />
                                    <div className="w-full h-4 bg-zinc-50 rounded-lg" />
                                    <div className="w-2/3 h-4 bg-zinc-50 rounded-lg" />
                                    <div className="pt-8 grid grid-cols-3 gap-4">
                                        <div className="aspect-[4/3] bg-zinc-50 rounded-xl" />
                                        <div className="aspect-[4/3] bg-zinc-50 rounded-xl" />
                                        <div className="aspect-[4/3] bg-zinc-100 rounded-xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Social Media (Vertical) */}
                    <div className="col-span-4 row-span-2 bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-[2.5rem] p-8 relative overflow-hidden group shadow-sm border border-zinc-100">
                        <div className="flex items-center gap-2 mb-6">
                            <Instagram className="w-4 h-4 text-blue-600" />
                            <span className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase">Social Content</span>
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 mb-8">Brand Awareness</h3>

                        {/* Smartphone Mockup */}
                        <div className="mx-auto w-[220px] h-[450px] bg-zinc-900 rounded-[3rem] p-3 shadow-2xl relative border-[6px] border-white group-hover:-translate-y-4 transition-transform duration-700">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-900 rounded-b-2xl z-20" />
                            <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col">
                                <div className="h-12 flex items-center px-4 border-b border-zinc-50">
                                    <div className="w-6 h-6 rounded-full bg-zinc-100 border border-zinc-200 p-1 flex items-center justify-center">
                                        <div className="w-full h-full relative">
                                            <Image src={activeLogo} alt="Avatar" fill className="object-contain" unoptimized />
                                        </div>
                                    </div>
                                    <span className="ml-2 text-[8px] font-bold text-zinc-900">{brand.id.toUpperCase()}</span>
                                </div>
                                <div className="flex-1 bg-zinc-50 flex items-center justify-center p-8">
                                    <div
                                        className="w-full aspect-square rounded-2xl shadow-xl flex items-center justify-center p-6"
                                        style={{ backgroundColor: brand.colors.primary }}
                                    >
                                        <Image src={activeLogo} alt="Post" fill className="object-contain p-8 invert opacity-90" unoptimized />
                                    </div>
                                </div>
                                <div className="h-24 p-4 space-y-2">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-zinc-200" />
                                        <div className="w-3 h-3 rounded-full bg-zinc-200" />
                                        <div className="w-3 h-3 rounded-full bg-zinc-200" />
                                    </div>
                                    <div className="w-full h-2 bg-zinc-100 rounded-full" />
                                    <div className="w-2/3 h-2 bg-zinc-100 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Stationery / Merchandise */}
                    <div className="col-span-8 row-span-1 bg-blue-50 rounded-[2.5rem] p-8 relative overflow-hidden group border border-blue-100 shadow-inner">
                        <div className="flex items-center gap-2 mb-4">
                            <Layout className="w-4 h-4 text-blue-600" />
                            <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase">Physical Assets</span>
                        </div>

                        <div className="flex items-center justify-center h-full -mt-4">
                            {/* Business Card Stack */}
                            <div className="relative w-72 h-44 group-hover:rotate-12 transition-transform duration-500">
                                {/* Bottom Card */}
                                <div className="absolute top-4 -right-4 w-full h-full bg-white rounded-xl shadow-xl border border-zinc-100 p-8" />
                                {/* Top Card */}
                                <div
                                    className="absolute top-0 right-0 w-full h-full rounded-xl shadow-2xl border border-white/20 p-8 flex flex-col justify-between"
                                    style={{ backgroundColor: brand.colors.primary }}
                                >
                                    <div className="w-20 h-8 relative">
                                        <Image src={activeLogo} alt="Card Logo" fill className="object-contain object-left invert" unoptimized />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-white text-[8px] font-bold tracking-widest uppercase">Directorate General</p>
                                        <div className="w-8 h-px bg-white/20" />
                                    </div>
                                </div>
                            </div>

                            {/* ID Card Simulation */}
                            <div className="ml-12 w-32 h-44 bg-white rounded-xl shadow-2xl border border-zinc-100 p-4 flex flex-col items-center group-hover:-rotate-12 transition-transform duration-500">
                                <div className="w-full h-2 bg-blue-600 rounded-full mb-4" />
                                <div className="w-16 h-16 rounded-full bg-zinc-100 mb-4 overflow-hidden" />
                                <div className="w-12 h-1 bg-zinc-200 rounded-full mb-1" />
                                <div className="w-8 h-1 bg-zinc-100 rounded-full mb-6" />
                                <div className="w-16 h-4 relative">
                                    <Image src={activeLogo} alt="ID Logo" fill className="object-contain" unoptimized />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="px-12 py-8 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-6 mt-auto">
                <div className="flex items-center gap-3 text-zinc-400">
                    <div className="w-4 h-4 bg-zinc-900 rotate-45 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white -rotate-45" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest">Brand Implementation Guide — {brand.name}</span>
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
