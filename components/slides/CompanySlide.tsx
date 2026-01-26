import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CompanySlideProps {
    companyName: string;
    tagline: string;
    meaning: string[];
    primaryLogoSrc: string;
    altLogoSrc: string;
    primaryRationale: string;
    altRationale: string;
    selectionNote?: string;
}

export default function CompanySlide({
    companyName,
    tagline,
    meaning,
    primaryLogoSrc,
    altLogoSrc,
    primaryRationale,
    altRationale,
    selectionNote = "Hanya satu arah yang akan dipilih sebagai identitas final.",
}: CompanySlideProps) {
    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="mb-8 md:mb-12 border-b border-zinc-100 pb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-2">{companyName}</h2>
                <p className="text-zinc-500 tracking-wide uppercase text-sm">{tagline}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full">
                {/* Left: Philosophy */}
                <div className="lg:col-span-3 flex flex-col justify-between">
                    <div>
                        <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-6">Makna Inti</h3>
                        <ul className="space-y-4">
                            {meaning.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2 shrink-0" />
                                    <span className="text-sm text-zinc-600 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-8 p-4 bg-zinc-50 border border-zinc-100">
                        <p className="text-xs text-zinc-400 italic">
                            "{selectionNote}"
                        </p>
                    </div>
                </div>

                {/* Right: Logos */}
                <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8 h-full">

                    {/* Direction 1: Recommended */}
                    <div className="flex flex-col h-full bg-white border border-zinc-200 shadow-sm relative group hover:ring-2 hover:ring-zinc-900 transition-all duration-300">
                        <div className="absolute top-0 left-0 bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 z-10">
                            Rekomendasi Utama
                        </div>
                        <div className="flex-1 flex items-center justify-center bg-zinc-50 p-8 relative overflow-hidden">
                            <div className="relative w-full h-full min-h-[250px]">
                                <Image
                                    src={primaryLogoSrc}
                                    alt={`${companyName} Primary`}
                                    fill
                                    className="object-contain p-4"
                                    unoptimized // Since they are local files and we want to ensure clear presentation
                                />
                            </div>
                        </div>
                        <div className="p-6 border-t border-zinc-100 bg-white">
                            <h4 className="font-bold text-zinc-900 mb-1">Arah Utama (Recommended)</h4>
                            <p className="text-xs text-zinc-500">
                                {primaryRationale}
                            </p>
                        </div>
                    </div>

                    {/* Direction 2: Alternative */}
                    <div className="flex flex-col h-full bg-white border border-zinc-100 relative group hover:ring-2 hover:ring-zinc-200 transition-all duration-300 opacity-80 hover:opacity-100">
                        <div className="absolute top-0 left-0 bg-transparent border border-zinc-200 text-zinc-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1 z-10">
                            Alternatif
                        </div>
                        <div className="flex-1 flex items-center justify-center bg-zinc-50/50 p-8 relative overflow-hidden">
                            <div className="relative w-full h-full min-h-[250px]">
                                <Image
                                    src={altLogoSrc}
                                    alt={`${companyName} Alternative`}
                                    fill
                                    className="object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-500"
                                    unoptimized
                                />
                            </div>
                        </div>
                        <div className="p-6 border-t border-zinc-100 bg-white">
                            <h4 className="font-bold text-zinc-700 mb-1">Arah Alternatif</h4>
                            <p className="text-xs text-zinc-400">
                                {altRationale}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
