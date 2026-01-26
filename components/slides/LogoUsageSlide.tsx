"use client";

import Image from "next/image";
import { BrandData } from "@/data/brands";
import { Share2, Download, Printer, Maximize2, Monitor } from "lucide-react";

export default function LogoUsageSlide({ brand }: { brand: BrandData }) {
    const activeLogo = brand.logos.fullyShape;

    return (
        <div className="flex flex-col w-full min-h-full bg-[#f8f9fa] overflow-y-auto no-scrollbar scroll-smooth p-0 select-none pt-10">
            {/* Content Body */}
            <main className="flex-1 px-12 py-16 flex flex-col">
                <div className="max-w-4xl mb-16">
                    <h1 className="text-sm font-black tracking-[0.4em] text-blue-600 uppercase mb-4">Identity System</h1>
                    <h2 className="text-6xl font-bold text-zinc-900 mb-6">Logo Usage</h2>
                    <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-2xl">
                        Standar penggunaan logo {brand.name} pada berbagai lingkungan visual untuk memastikan konsistensi dan integritas brand tetap terjaga.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 flex-1 mb-16">
                    {/* 1. Light Background */}
                    <div className="flex flex-col space-y-4 group">
                        <div className="aspect-square bg-white border border-zinc-200 flex items-center justify-center p-12 relative rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                            <div className="absolute top-6 left-6 flex flex-col items-start">
                                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-300">On Light</span>
                                <div className="h-px w-6 bg-zinc-100 mt-1" />
                            </div>
                            <Image
                                src={activeLogo}
                                alt="Logo on Light"
                                fill
                                className="object-contain p-12 group-hover:scale-110 transition-transform duration-700"
                                unoptimized
                            />
                        </div>
                        <div className="px-2">
                            <h4 className="text-xs font-bold text-zinc-400 tracking-widest uppercase">Safe Zone: White</h4>
                        </div>
                    </div>

                    {/* 2. Dark Background */}
                    <div className="flex flex-col space-y-4 group">
                        <div className="aspect-square bg-[#111111] border border-zinc-800 flex items-center justify-center p-12 relative rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            <div className="absolute top-6 left-6 flex flex-col items-start">
                                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-600">On Dark</span>
                                <div className="h-px w-6 bg-zinc-800 mt-1" />
                            </div>
                            <Image
                                src={activeLogo}
                                alt="Logo on Dark"
                                fill
                                className="object-contain p-12 invert group-hover:scale-110 transition-transform duration-700"
                                unoptimized
                            />
                        </div>
                        <div className="px-2">
                            <h4 className="text-xs font-bold text-zinc-400 tracking-widest uppercase">Safe Zone: Black</h4>
                        </div>
                    </div>

                    {/* 3. Primary Color Background */}
                    <div className="flex flex-col space-y-4 group">
                        <div
                            className="aspect-square flex items-center justify-center p-12 relative rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
                            style={{ backgroundColor: brand.colors.primary }}
                        >
                            <div className="absolute top-6 left-6 flex flex-col items-start">
                                <span className="text-[10px] uppercase font-bold tracking-widest text-white/30">Brand Color</span>
                                <div className="h-px w-6 bg-white/10 mt-1" />
                            </div>
                            <Image
                                src={activeLogo}
                                alt="Logo on Brand"
                                fill
                                className="object-contain p-12 invert group-hover:scale-110 transition-transform duration-700"
                                unoptimized
                            />
                        </div>
                        <div className="px-2">
                            <h4 className="text-xs font-bold text-zinc-400 tracking-widest uppercase">Brand Signature</h4>
                        </div>
                    </div>

                    {/* 4. Secondary Color Background */}
                    <div className="flex flex-col space-y-4 group">
                        <div
                            className="aspect-square flex items-center justify-center p-12 relative rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
                            style={{ backgroundColor: brand.colors.secondary }}
                        >
                            <div className="absolute top-6 left-6 flex flex-col items-start">
                                <span className="text-[10px] uppercase font-bold tracking-widest text-white/30">Secondary</span>
                                <div className="h-px w-6 bg-white/10 mt-1" />
                            </div>
                            <Image
                                src={activeLogo}
                                alt="Logo on Secondary"
                                fill
                                className="object-contain p-12 invert group-hover:scale-110 transition-transform duration-700"
                                unoptimized
                            />
                        </div>
                        <div className="px-2">
                            <h4 className="text-xs font-bold text-zinc-400 tracking-widest uppercase">Alt Environment</h4>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="px-12 py-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6 mt-auto">
                <div className="flex items-center gap-3 text-zinc-400">
                    <div className="w-4 h-4 bg-blue-600 rotate-45 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white -rotate-45" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest">Visual DNA System — {brand.id.toUpperCase()} — Usage Guide</span>
                </div>
                <div className="flex items-center gap-6 text-zinc-400">
                    <Share2 className="w-4 h-4 hover:text-blue-600 cursor-pointer transition-colors" />
                    <Download className="w-4 h-4 hover:text-blue-600 cursor-pointer transition-colors" />
                    <Printer className="w-4 h-4 hover:text-blue-600 cursor-pointer transition-colors" />
                </div>
            </footer>
        </div>
    );
}
