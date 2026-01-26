"use client";

import Image from "next/image";
import { BrandData } from "@/data/brands";
import { Share2, Download, Printer, Maximize2, Monitor, Contact } from "lucide-react";

export default function BrandKitAppSlide({ brand }: { brand: BrandData }) {
    const activeLogo = brand.logos.fullyShape;

    return (
        <div className="flex flex-col w-full min-h-full bg-white overflow-y-auto no-scrollbar scroll-smooth p-0 select-none pt-10">

            {/* Content Body */}
            <main className="flex-1 px-12 py-16 flex flex-col">
                <div className="max-w-4xl mb-20">
                    <h1 className="text-5xl font-bold text-zinc-900 mb-2">{brand.name}</h1>
                    <h2 className="text-5xl font-bold text-blue-600 mb-8">Visual Context</h2>
                    <p className="text-lg text-zinc-500 font-light leading-relaxed">
                        Simulasi penggunaan identitas visual {brand.name} pada berbagai latar belakang dan media aplikasi. Konsistensi dalam kontras dan keterbacaan adalah fokus utama.
                    </p>
                </div>

                <div className="grid grid-cols-12 gap-8 flex-1 mb-20">
                    {/* Background Terang */}
                    <div className="col-span-4 flex flex-col space-y-6 group">
                        <h3 className="text-xs tracking-[0.3em] text-zinc-400 uppercase font-black">— LIGHT BACKGROUND —</h3>
                        <div className="flex-1 border border-zinc-100 bg-white flex items-center justify-center p-12 relative rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden">
                            <Image
                                src={activeLogo}
                                alt="Light Background App"
                                fill
                                className="object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                                unoptimized
                            />
                            <div className="absolute top-4 right-4 text-zinc-200">
                                <Maximize2 className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-zinc-400">
                            <Monitor className="w-4 h-4" />
                            <span className="text-[10px] uppercase font-bold tracking-widest">Digital Display</span>
                        </div>
                    </div>

                    {/* Background Gelap */}
                    <div className="col-span-4 flex flex-col space-y-6 group">
                        <h3 className="text-xs tracking-[0.3em] text-zinc-400 uppercase font-black">— DARK BACKGROUND —</h3>
                        <div className="flex-1 bg-zinc-900 flex items-center justify-center p-12 relative rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-zinc-800">
                            <Image
                                src={activeLogo}
                                alt="Dark Background App"
                                fill
                                className="object-contain p-8 invert group-hover:scale-110 transition-transform duration-700"
                                unoptimized
                            />
                            <div className="absolute top-4 right-4 text-zinc-700">
                                <Maximize2 className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-zinc-400">
                            <Monitor className="w-4 h-4" />
                            <span className="text-[10px] uppercase font-bold tracking-widest">Dark Mode Interface</span>
                        </div>
                    </div>

                    {/* Versi Icon / Mark Only */}
                    <div className="col-span-4 flex flex-col space-y-6 group">
                        <h3 className="text-xs tracking-[0.3em] text-zinc-400 uppercase font-black">— BUSINESS STATIONERY —</h3>
                        <div className="flex-1 bg-blue-50 border border-blue-100 flex items-center justify-center p-12 relative rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden">
                            <div className="w-32 h-32 relative bg-white rounded-full shadow-2xl flex items-center justify-center p-8 group-hover:rotate-12 transition-transform duration-500">
                                <Image
                                    src={activeLogo}
                                    alt="Icon Mark"
                                    fill
                                    className="object-contain p-6"
                                    unoptimized
                                />
                            </div>
                            <div className="absolute top-4 right-4 text-blue-200">
                                <Contact className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-zinc-400">
                            <Contact className="w-4 h-4" />
                            <span className="text-[10px] uppercase font-bold tracking-widest">Stationery / Avatar</span>
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
