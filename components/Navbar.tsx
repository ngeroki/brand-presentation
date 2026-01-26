"use client";

import { useContext } from "react";
import SlideContext from "@/contexts/SlideContext";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
    const context = useContext(SlideContext);
    const router = useRouter();
    const pathname = usePathname();

    const isDownloadPage = pathname === "/download";

    const handleGoToSlide = (index: number) => {
        if (context) {
            context.goToSlide(index);
        } else {
            router.push(`/slide/${index}`);
        }
    };

    const currentSlide = context?.currentSlide ?? -1;

    return (
        <header className="flex items-center justify-between py-8 px-12 bg-white/80 backdrop-blur-md sticky top-0 z-[60] border-b border-zinc-50">
            <button
                onClick={() => handleGoToSlide(0)}
                className="flex items-center gap-3 group"
            >
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center rotate-45 shadow-lg shadow-blue-200 transition-transform group-hover:scale-110">
                    <div className="w-5 h-5 bg-white rounded-sm -rotate-45" />
                </div>
                <div className="flex flex-col text-left">
                    <span className="font-black text-xl tracking-tighter text-zinc-900 leading-none">SAFAR QAWIYY</span>
                    <span className="text-[10px] uppercase font-bold text-blue-600 tracking-[0.3em]">Corporation</span>
                </div>
            </button>
            <nav className="hidden lg:flex items-center gap-10 text-[11px] font-black tracking-[0.2em] text-zinc-400">
                <button
                    onClick={() => handleGoToSlide(1)}
                    className={`hover:text-blue-600 transition-all flex items-center gap-2 uppercase ${currentSlide === 1 ? 'text-blue-600' : ''}`}
                >
                    Arsitektur
                </button>
                <div className="h-4 w-px bg-zinc-100" />
                <button
                    onClick={() => handleGoToSlide(2)}
                    className={`hover:text-blue-600 transition-all uppercase ${currentSlide >= 2 && currentSlide <= 6 ? 'text-blue-600' : ''}`}
                >
                    SQC (Holding)
                </button>
                <button
                    onClick={() => handleGoToSlide(7)}
                    className={`hover:text-blue-600 transition-all uppercase ${currentSlide >= 7 && currentSlide <= 11 ? 'text-blue-600' : ''}`}
                >
                    MTB
                </button>
                <button
                    onClick={() => handleGoToSlide(12)}
                    className={`hover:text-blue-600 transition-all uppercase ${currentSlide >= 12 && currentSlide <= 16 ? 'text-blue-600' : ''}`}
                >
                    MRE
                </button>
                <div className="h-4 w-px bg-zinc-100" />
                <Link
                    href="/download"
                    className={`transition-all border-b-2 pb-1 ${isDownloadPage ? 'text-blue-600 border-blue-600' : 'text-zinc-900 hover:text-blue-600 border-transparent hover:border-blue-600'}`}
                >
                    Download
                </Link>
            </nav>
            <div className="w-[124px] hidden lg:block" /> {/* Spacer to balance logo width */}
        </header>
    );
}
