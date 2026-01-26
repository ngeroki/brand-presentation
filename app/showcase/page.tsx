"use client";

import ArchitectureSlide from "@/components/slides/ArchitectureSlide";
import Image from "next/image";

export default function ShowcaseOverviewPage() {
    return (
        <div className="min-h-full bg-white flex flex-col">
            {/* Architecture Section */}
            <section className="w-full bg-zinc-50">
                <ArchitectureSlide />
            </section>

            {/* Strategic Direction Section */}
            <section className="w-full bg-white py-20 px-8 lg:px-20">
                <div className="max-w-7xl mx-auto space-y-16">
                    <header className="max-w-3xl">
                        <h2 className="text-4xl lg:text-6xl font-bold text-zinc-900 mb-6">Strategic Direction</h2>
                        <p className="text-xl text-zinc-500 font-light leading-relaxed">
                            Untuk memastikan brand dapat berkembang dengan tepat, kami mengeksplorasi dua arah filosofis yang berbeda untuk setiap entitas.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Full Shape Direction */}
                        <div className="bg-white border-2 border-zinc-200 p-8 lg:p-12 flex flex-col relative overflow-hidden group hover:shadow-2xl hover:border-zinc-300 transition-all duration-300 rounded-xl">
                            <div className="absolute top-0 left-0 w-2 h-full bg-zinc-800" />
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-2xl">A</div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-zinc-900">Full Shape Direction</h3>
                                        <span className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Naratif & Organik</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-zinc-900 mb-2 text-sm uppercase tracking-wider">Filosofi</h4>
                                        <p className="text-zinc-600 text-sm leading-relaxed">
                                            Berfokus pada penceritaan dan simbolisme literal. Menciptakan bentuk yang "terisi" dengan makna—menggabungkan elemen visual menjadi satu tanda yang kohesif dan bermakna mendalam.
                                        </p>
                                    </div>

                                    <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-lg">
                                        <span className="block text-xs font-bold text-emerald-700 mb-2 uppercase tracking-wider">Kekuatan Utama</span>
                                        <ul className="text-sm text-emerald-900 space-y-2">
                                            <li className="flex items-start gap-2">
                                                <span className="text-emerald-600 mt-0.5">•</span>
                                                <span>Koneksi emosional tinggi dengan audiens</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-emerald-600 mt-0.5">•</span>
                                                <span>Penceritaan yang jelas dan terasa "manusiawi"</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-emerald-600 mt-0.5">•</span>
                                                <span>Memorable dan distinctive dalam pasar</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Geometric Direction */}
                        <div className="bg-zinc-900 border-2 border-zinc-900 p-8 lg:p-12 flex flex-col relative overflow-hidden group hover:shadow-2xl hover:border-zinc-700 transition-all duration-300 rounded-xl">
                            <div className="absolute top-0 left-0 w-2 h-full bg-white" />
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl text-white">B</div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Geometric Direction</h3>
                                        <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Abstrak & Abadi</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-white mb-2 text-sm uppercase tracking-wider">Filosofi</h4>
                                        <p className="text-zinc-400 text-sm leading-relaxed">
                                            Berfokus pada keseimbangan matematis dan abstraksi. Menyederhanakan brand ke bentuk struktural murninya—grid, lingkaran sempurna, dan bobot garis yang presisi.
                                        </p>
                                    </div>

                                    <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-lg">
                                        <span className="block text-xs font-bold text-blue-400 mb-2 uppercase tracking-wider">Kekuatan Utama</span>
                                        <ul className="text-sm text-blue-100 space-y-2">
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-400 mt-0.5">•</span>
                                                <span>Abadi dan timeless dalam jangka panjang</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-400 mt-0.5">•</span>
                                                <span>Skalabilitas ekstrem di semua media</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-blue-400 mt-0.5">•</span>
                                                <span>Terasa institusional dan otoriter</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Hint */}
                    <div className="mt-20 p-8 border border-blue-100 bg-blue-50/50 rounded-2xl flex flex-col md:flex-row items-start gap-6">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600 font-bold text-xl">i</div>
                        <div className="space-y-2 flex-1">
                            <h4 className="font-bold text-blue-900 text-lg">Petunjuk Navigasi</h4>
                            <p className="text-sm text-blue-800/70 leading-relaxed">
                                Gunakan sidebar di sebelah kiri untuk melihat perbandingan detail dari setiap entitas (SQC, MTB, MRE).
                                Klik pada nama entitas untuk melihat perbandingan side-by-side, atau pilih varian spesifik untuk deep dive lengkap.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
