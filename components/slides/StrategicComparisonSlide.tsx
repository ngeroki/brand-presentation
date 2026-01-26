import clsx from "clsx";

export default function StrategicComparisonSlide() {
    return (
        <div className="flex flex-col h-full justify-center">
            <h2 className="text-3xl font-light tracking-wide text-zinc-400 mb-8">Arah Strategis</h2>
            <p className="text-xl text-zinc-800 max-w-2xl mb-12">
                Untuk memastikan brand dapat berkembang dengan tepat, kami mengeksplorasi dua arah filosofis yang berbeda.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full max-h-[60vh]">
                {/* Full Shape Direction */}
                <div className="bg-white border border-zinc-200 p-8 flex flex-col relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                    <div className="absolute top-0 left-0 w-1 h-full bg-zinc-800" />
                    <h3 className="text-2xl font-bold text-zinc-900 mb-2">Arah A: Full Shape</h3>
                    <span className="text-xs uppercase tracking-widest text-zinc-400 mb-8">Naratif & Organik</span>

                    <div className="flex-1 space-y-6">
                        <div>
                            <h4 className="font-semibold text-zinc-900 mb-2 text-sm">Filosofi</h4>
                            <p className="text-zinc-500 text-sm leading-relaxed">
                                Berfokus pada penceritaan dan simbolisme literal. Menciptakan bentuk yang "terisi" dengan makna—menggabungkan elemen gunung, matahari, dan pilar menjadi satu tanda yang kohesif.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-zinc-50 p-4">
                                <span className="block text-xs font-bold text-green-700 mb-1">KELEBIHAN</span>
                                <p className="text-xs text-zinc-600">Koneksi emosional tinggi. Penceritaan yang jelas, terasa lebih "manusiawi".</p>
                            </div>
                            <div className="bg-zinc-50 p-4">
                                <span className="block text-xs font-bold text-red-700 mb-1">KEKURANGAN</span>
                                <p className="text-xs text-zinc-600">Secara visual kompleks. Lebih sulit diproduksi pada skala mikro (favicon).</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Geometric Shape Direction */}
                <div className="bg-zinc-900 border border-zinc-900 p-8 flex flex-col relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                    <div className="absolute top-0 left-0 w-1 h-full bg-white" />
                    <h3 className="text-2xl font-bold text-white mb-2">Arah B: Geometric</h3>
                    <span className="text-xs uppercase tracking-widest text-zinc-500 mb-8">Abstrak & Abadi</span>

                    <div className="flex-1 space-y-6">
                        <div>
                            <h4 className="font-semibold text-white mb-2 text-sm">Filosofi</h4>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Berfokus pada keseimbangan matematis dan abstraksi. Menyederhanakan brand ke bentuk struktural murninya—grid segitiga, lingkaran sempurna, dan bobot garis monoline.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-zinc-800 p-4">
                                <span className="block text-xs font-bold text-green-400 mb-1">KELEBIHAN</span>
                                <p className="text-xs text-zinc-300">Abadi, skalabilitas ekstrem, terasa "institusional" dan otoriter.</p>
                            </div>
                            <div className="bg-zinc-800 p-4">
                                <span className="block text-xs font-bold text-red-400 mb-1">KEKURANGAN</span>
                                <p className="text-xs text-zinc-300">Dapat terasa "dingin" atau jauh jika tidak dipadukan dengan tipografi yang tepat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
