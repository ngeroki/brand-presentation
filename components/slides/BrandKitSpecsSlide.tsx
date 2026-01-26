"use client";

import { BrandData } from "@/data/brands";
import Image from "next/image";
import { Share2, Download, Printer } from "lucide-react";

export default function BrandKitSpecsSlide({ brand }: { brand: BrandData }) {
    return (
        <div className="flex flex-col w-full min-h-full bg-white overflow-y-auto no-scrollbar scroll-smooth p-0 select-none pt-10">

            {/* Content Body */}
            <main className="flex-1 px-12 py-16 flex flex-col">
                <div className="max-w-4xl mb-20">
                    <h1 className="text-5xl font-bold text-zinc-900 mb-2">{brand.name}</h1>
                    <h2 className="text-5xl font-bold text-blue-600 mb-8">Technical & Specs</h2>
                    <p className="text-lg text-zinc-500 font-light leading-relaxed">
                        Standarisasi teknis untuk memastikan konsistensi visual di seluruh media. Setiap elemen telah diperhitungkan secara matematis untuk memberikan keseimbangan yang sempurna.
                    </p>
                </div>

                <div className="grid grid-cols-12 gap-16 items-start flex-1 mb-20">
                    {/* Construction Grid (Left) */}
                    <div className="col-span-5 space-y-8">
                        <h3 className="text-xs tracking-[0.3em] text-zinc-400 uppercase font-black">— GRID SYSTEM —</h3>
                        <div className="aspect-square bg-zinc-50 border border-zinc-100 flex items-center justify-center p-12 relative overflow-hidden rounded-2xl group shadow-sm">
                            <div className="absolute inset-0 border border-zinc-100 grid grid-cols-8 grid-rows-8 opacity-40"></div>
                            <div className="relative w-full h-full">
                                <Image
                                    src={brand.logos.geometric}
                                    alt="Construction"
                                    fill
                                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                                    unoptimized
                                />
                            </div>
                            <div className="absolute top-1/2 left-0 w-full h-px bg-blue-600/20 border-dashed"></div>
                            <div className="absolute left-1/2 top-0 h-full w-px bg-blue-600/20 border-dashed"></div>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-zinc-900 mb-2">Konstruksi Geometris</h4>
                            <p className="text-sm text-zinc-500 leading-relaxed font-light">
                                Seluruh lambang dibangun di atas sistem grid 8pt untuk memastikan keseimbangan visual dan skalabilitas sempurna dari layar hingga cetak.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1 flex justify-center h-full self-stretch">
                        <div className="w-px h-full bg-zinc-100" />
                    </div>

                    {/* Colors & Typography (Right) */}
                    <div className="col-span-6 space-y-16">
                        {/* Colors */}
                        <div className="space-y-8">
                            <h3 className="text-xs tracking-[0.3em] text-zinc-400 uppercase font-black">— PRIMARY PALETTE —</h3>
                            <div className="grid grid-cols-3 gap-8">
                                <div className="space-y-4 group">
                                    <div className="w-full aspect-square rounded-2xl shadow-lg transition-transform group-hover:scale-105" style={{ backgroundColor: brand.colors.primary }}></div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-bold text-zinc-900">Primary Color</p>
                                        <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">{brand.colors.primary}</p>
                                    </div>
                                </div>
                                <div className="space-y-4 group">
                                    <div className="w-full aspect-square rounded-2xl shadow-lg transition-transform group-hover:scale-105" style={{ backgroundColor: brand.colors.secondary }}></div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-bold text-zinc-900">Secondary Color</p>
                                        <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">{brand.colors.secondary}</p>
                                    </div>
                                </div>
                                {brand.colors.accent && (
                                    <div className="space-y-4 group">
                                        <div className="w-full aspect-square rounded-2xl shadow-lg transition-transform group-hover:scale-105" style={{ backgroundColor: brand.colors.accent }}></div>
                                        <div className="space-y-1">
                                            <p className="text-sm font-bold text-zinc-900">Accent Color</p>
                                            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">{brand.colors.accent}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Typography */}
                        <div className="space-y-8">
                            <h3 className="text-xs tracking-[0.3em] text-zinc-400 uppercase font-black">— TYPOGRAPHY —</h3>
                            <div className="space-y-6 bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
                                <h4 className="text-4xl font-extrabold text-zinc-900 uppercase tracking-tighter leading-none mb-2">
                                    {brand.typography.sample}
                                </h4>
                                <div className="h-px w-12 bg-blue-600" />
                                <p className="text-sm text-zinc-400 tracking-widest uppercase font-bold">
                                    {brand.typography.fontName} — {brand.name} Brand Family
                                </p>
                                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                                    ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                                    abcdefghijklmnopqrstuvwxyz<br />
                                    1234567890 !@#$%^&*()
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

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
