"use client";

import Image from "next/image";
import { BrandData } from "@/data/brands";
import { Share2, Download, Printer, Maximize2, Monitor } from "lucide-react";

export default function LogoUsageSlide({ brand, variant }: { brand: BrandData; variant: 'full-shape' | 'geometric' }) {
    // Use transparent logos for usage showcase
    const activeLogo = variant === 'full-shape' ? brand.logos.transparentFull : brand.logos.transparentGeo;
    // Use white logo for dark backgrounds
    const whiteLogoForDark = variant === 'full-shape' ? brand.logos.transparentFullWhite : brand.logos.transparentGeoWhite;
    // Use real black logo for monochrome if available (Geometric), otherwise fallback to active logo with CSS filter
    const monochromeLogo = variant === 'geometric' ? brand.logos.transparentGeoBlack : activeLogo;
    const isMonochromeUsingFile = variant === 'geometric';

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-1 mb-16">
                    {/* 1. Light Background */}
                    <div className="flex flex-col group">
                        <div className="aspect-square bg-white border border-zinc-200 flex items-center justify-center p-12 relative overflow-hidden transition-all duration-500">
                            <Image
                                src={activeLogo}
                                alt="Light Background"
                                fill
                                className="object-contain p-12 group-hover:scale-110 transition-transform duration-700"
                                unoptimized
                            />
                        </div>
                        <div className="pt-4 text-center">
                            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">Light Background</h4>
                        </div>
                    </div>

                    {/* 2. Dark Background */}
                    <div className="flex flex-col group">
                        <div className="aspect-square bg-black border border-black flex items-center justify-center p-12 relative overflow-hidden transition-all duration-500">
                            <Image
                                src={whiteLogoForDark}
                                alt="Dark Background"
                                fill
                                className="object-contain p-12 group-hover:scale-110 transition-transform duration-700"
                                unoptimized
                            />
                        </div>
                        <div className="pt-4 text-center">
                            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">Dark Background</h4>
                        </div>
                    </div>

                    {/* 3. Color on Color */}
                    <div className="flex flex-col group">
                        <div
                            className="aspect-square flex items-center justify-center p-12 relative overflow-hidden transition-all duration-500 border border-black/5"
                            style={{
                                backgroundColor: '#D0E2D3' // Light Sage (User request)
                            }}
                        >
                            {/* Material Softness Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-white/20 pointer-events-none" />

                            <Image
                                src={activeLogo}
                                alt="Color on Color"
                                fill
                                className="object-contain p-12 group-hover:scale-110 transition-transform duration-700"
                                style={{
                                    // Soft shadow for grounding on a light surface
                                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                                }}
                                unoptimized
                            />
                        </div>
                        <div className="pt-4 text-center">
                            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">Color on Color</h4>
                        </div>
                    </div>

                    {/* 4. Monochrome */}
                    <div className="flex flex-col group">
                        <div className="aspect-square bg-white border border-zinc-200 flex items-center justify-center p-12 relative overflow-hidden transition-all duration-500">
                            <Image
                                src={monochromeLogo}
                                alt="Monochrome"
                                fill
                                className="object-contain p-12 group-hover:scale-110 transition-transform duration-700"
                                style={!isMonochromeUsingFile ? {
                                    // High-contrast monochrome: Preserves details like the gold stripe as white space
                                    filter: 'grayscale(100%) contrast(1000%)'
                                } : undefined}
                                unoptimized
                            />
                        </div>
                        <div className="pt-4 text-center">
                            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">Monochrome</h4>
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
