import { motion } from "framer-motion";
import { Circle, Triangle, Layers, Type, Share2, Download, Printer } from "lucide-react";

export default function ConsistencySlide() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    };

    return (
        <div className="flex flex-col w-full h-full bg-white overflow-y-auto no-scrollbar scroll-smooth p-0 select-none pt-10">
            {/* Content Body */}
            <main className="flex-1 px-12 py-16">
                <div className="max-w-4xl mb-20">
                    <h1 className="text-5xl font-bold text-zinc-900 mb-2">Sirkulasi Nilai</h1>
                    <h2 className="text-5xl font-bold text-blue-600 mb-8">Satu Jiwa, Beragam Wajah.</h2>
                    <p className="text-lg text-zinc-500 font-light leading-relaxed">
                        Membangun ekosistem yang kohesif melalui standarisasi visual. Setiap entitas berdiri mandiri secara operasional, namun terikat oleh DNA visual yang menjamin satu kesatuan citra korporasi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                    {/* Visual Weight */}
                    <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="p-10 bg-white border border-zinc-100 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                            <Layers className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 mb-4">Kesamaan Grid</h3>
                        <p className="text-zinc-500 font-light leading-relaxed text-sm">
                            Seluruh logo lahir dari <span className="text-zinc-900 font-bold">mathematically-aligned grid</span> yang identik. Ini memastikan "visual weight" yang setara antara Holding dan Anak Usaha.
                        </p>
                    </motion.div>

                    {/* Geometric DNA */}
                    <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="p-10 bg-white border border-zinc-100 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                            <Triangle className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 mb-4">DNA Geometri</h3>
                        <p className="text-zinc-500 font-light leading-relaxed text-sm">
                            Segitiga (simbol pertumbuhan) dan Lingkaran (simbol kesatuan) disematkan secara subtil di setiap logo sebagai <span className="text-zinc-900 font-bold">dialog bentuk</span> yang menyatukan visi grup.
                        </p>
                    </motion.div>

                    {/* Typography */}
                    <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="p-10 bg-white border border-zinc-100 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                            <Type className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 mb-4">Suara Tipografi</h3>
                        <p className="text-zinc-500 font-light leading-relaxed text-sm">
                            Penggunaan tipografi yang seragam menciptakan kesan <span className="text-zinc-900 font-bold italic">"Silent Strength"</span>—tenang, modern, dan profesional di setiap titik sentuh komunikasi.
                        </p>
                    </motion.div>
                </div>

                <div className="bg-zinc-900 text-white p-12 rounded-3xl relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <h4 className="text-3xl font-bold mb-4">Membangun Masa Depan Bersama.</h4>
                            <p className="text-zinc-400 font-light">Sistem identitas ini dirancang for scalability, memungkinkan penambahan unit bisnis baru tanpa kehilangan integritas brand utama.</p>
                        </div>
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all whitespace-nowrap">
                            Pelajari Panduan Teknis
                        </button>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                </div>
            </main>

            {/* Footer */}
            <footer className="px-12 py-8 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-6 mt-auto">
                <div className="flex items-center gap-3 text-zinc-400">
                    <div className="w-4 h-4 bg-zinc-400 rotate-45 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white -rotate-45" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest">Brand Identity System V1.0 — Safar Qawiyy Corp</span>
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
