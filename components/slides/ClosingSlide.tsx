"use client";

import Link from "next/link";

export default function ClosingSlide() {
    return (
        <div className="flex flex-col items-center justify-center min-h-full text-center p-12 bg-zinc-900 text-white relative overflow-y-auto no-scrollbar select-none">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 space-y-12">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center rotate-45 mb-4 shadow-2xl shadow-blue-500/20">
                        <div className="w-8 h-8 bg-white rounded-lg -rotate-45" />
                    </div>
                    <span className="text-sm tracking-[0.4em] text-white/40 uppercase font-black">Est. 2026 Presentation</span>
                </div>

                <div className="space-y-6">
                    <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85]">
                        TERIMA<br />KASIH
                    </h2>
                    <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
                        Membangun identitas adalah awal dari perjalanan panjang. Kami siap mengawal setiap langkah visual Safar Qawiyy Corp.
                    </p>
                </div>

                <div className="pt-12 flex flex-col items-center space-y-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <Link
                            href="/download"
                            className="px-10 py-5 bg-blue-600 text-white font-bold uppercase tracking-widest hover:bg-blue-700 transition-all rounded-xl shadow-xl shadow-blue-600/20 text-center"
                        >
                            Unduh Brand Assets
                        </Link>
                        <button className="px-10 py-5 border border-white/10 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all rounded-xl">
                            Hubungi Tim Kreatif
                        </button>
                    </div>

                    <div className="flex items-center gap-3 text-white/30 pt-8">
                        <div className="w-3 h-3 bg-white/30 rotate-45" />
                        <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Safar Qawiyy Corp — Brand identity system v1.0</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
