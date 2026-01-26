"use client";

import { useParams, redirect } from "next/navigation";
import { brands } from "@/data/brands";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function BrandComparisonPage() {
    const params = useParams();
    const brandId = params?.brandId as string;
    const brand = brands.find((b) => b.id === brandId);

    if (!brand) {
        redirect('/showcase');
    }

    return (
        <div className="min-h-full bg-gradient-to-br from-zinc-50 to-white py-12 px-6 lg:py-20 lg:px-20">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Header */}
                <header className="text-center space-y-6 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-blue-600 uppercase tracking-wider">
                        <Sparkles className="w-3 h-3" />
                        Brand Comparison
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black text-zinc-900 tracking-tight">{brand.name}</h1>
                    <p className="text-xl text-zinc-500 font-light leading-relaxed">
                        Pilih arah visual yang paling sesuai dengan visi dan strategi brand Anda.
                    </p>
                </header>

                {/* Side-by-Side Comparison */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Option A: Full Shape */}
                    <Link
                        href={`/showcase/${brandId}/full-shape`}
                        className="group bg-white border-2 border-zinc-200 hover:border-zinc-400 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="p-8 lg:p-12 space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-zinc-100 flex items-center justify-center text-2xl font-bold text-zinc-800">A</div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-zinc-900">Full Shape</h2>
                                        <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Naratif & Organik</p>
                                    </div>
                                </div>
                                <ArrowRight className="w-6 h-6 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-2 transition-all" />
                            </div>

                            {/* Logo Preview */}
                            <div className="aspect-square bg-zinc-50 border border-zinc-100 rounded-xl flex items-center justify-center p-8 group-hover:bg-white transition-colors">
                                <Image
                                    src={brand.logos.fullyShape}
                                    alt={`${brand.name} Full Shape`}
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-contain"
                                    unoptimized
                                />
                            </div>

                            {/* Description */}
                            <div className="space-y-3">
                                <h3 className="font-bold text-zinc-900 text-sm uppercase tracking-wider">Karakteristik</h3>
                                <ul className="text-sm text-zinc-600 space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-500 mt-0.5">✓</span>
                                        <span>Penceritaan visual yang kaya makna</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-500 mt-0.5">✓</span>
                                        <span>Koneksi emosional dengan audiens</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-500 mt-0.5">✓</span>
                                        <span>Distinctive dan memorable</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Link>

                    {/* Option B: Geometric */}
                    <Link
                        href={`/showcase/${brandId}/geometric`}
                        className="group bg-zinc-900 border-2 border-zinc-900 hover:border-zinc-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="p-8 lg:p-12 space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold text-white">B</div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white">Geometric</h2>
                                        <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Abstrak & Abadi</p>
                                    </div>
                                </div>
                                <ArrowRight className="w-6 h-6 text-zinc-600 group-hover:text-white group-hover:translate-x-2 transition-all" />
                            </div>

                            {/* Logo Preview */}
                            <div className="aspect-square bg-black/20 border border-white/10 rounded-xl flex items-center justify-center p-8 group-hover:bg-black/30 transition-colors">
                                <Image
                                    src={brand.logos.geometric}
                                    alt={`${brand.name} Geometric`}
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-contain brightness-110"
                                    unoptimized
                                />
                            </div>

                            {/* Description */}
                            <div className="space-y-3">
                                <h3 className="font-bold text-white text-sm uppercase tracking-wider">Karakteristik</h3>
                                <ul className="text-sm text-zinc-300 space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-0.5">✓</span>
                                        <span>Timeless dan abadi</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-0.5">✓</span>
                                        <span>Skalabilitas ekstrem</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-0.5">✓</span>
                                        <span>Institusional dan otoriter</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* CTA */}
                <div className="text-center pt-8">
                    <p className="text-sm text-zinc-500">
                        Klik pada salah satu opsi untuk melihat detail lengkap: Visual DNA, Usage Guidelines, dan Implementation Mockups.
                    </p>
                </div>
            </div>
        </div>
    );
}
