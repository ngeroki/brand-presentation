"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SlideContext from "@/contexts/SlideContext";
import Navbar from "@/components/Navbar";

interface SlideDeckProps {
    slides: React.ReactNode[];
    initialSlide?: number;
}

export default function SlideDeck({ slides, initialSlide = 0 }: SlideDeckProps) {
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(initialSlide);

    // Sync with initialSlide prop changes (from URL)
    useEffect(() => {
        if (initialSlide !== currentSlide) {
            setCurrentSlide(initialSlide);
        }
    }, [initialSlide]);

    const navigateToSlide = useCallback((index: number) => {
        if (index >= 0 && index < slides.length) {
            router.push(`/slide/${index}`);
        }
    }, [slides.length, router]);

    const nextSlide = useCallback(() => {
        if (currentSlide < slides.length - 1) {
            navigateToSlide(currentSlide + 1);
        }
    }, [currentSlide, slides.length, navigateToSlide]);

    const prevSlide = useCallback(() => {
        if (currentSlide > 0) {
            navigateToSlide(currentSlide - 1);
        }
    }, [currentSlide, navigateToSlide]);

    const goToSlide = useCallback((index: number) => {
        navigateToSlide(index);
    }, [navigateToSlide]);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
                nextSlide();
            } else if (e.key === "ArrowLeft") {
                prevSlide();
            } else if (e.key === "Home" || e.key === "h" || e.key === "H") {
                goToSlide(0);
            }
        },
        [nextSlide, prevSlide, goToSlide]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    return (
        <SlideContext.Provider value={{ currentSlide, totalSlides: slides.length, nextSlide, prevSlide, goToSlide }}>
            <div className="relative w-full h-screen bg-white text-zinc-900 overflow-hidden font-sans selection:bg-zinc-900 selection:text-white flex flex-col">
                {/* --- Global Frame: Navbar --- */}
                <Navbar />

                {/* --- Main Content Area --- */}
                <div className={`w-full flex-1 flex items-center justify-center relative z-10 ${currentSlide === 0 ? 'p-0' : 'px-12 pb-12 pt-0'} overflow-hidden`}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className={`w-full h-full ${currentSlide === 0 ? '' : 'max-w-[1400px]'} mx-auto flex flex-col overflow-y-auto no-scrollbar`}
                        >
                            {slides[currentSlide]}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* --- Global Frame: Bottom Bar --- */}
                <div className="absolute bottom-0 left-0 w-full px-12 py-8 flex justify-between items-end z-50 pointer-events-none">
                    {/* Copyright / Context */}
                    {currentSlide > 0 && (
                        <div className="text-[10px] text-zinc-400 tracking-wider">
                            © 2026 Internal Presentation
                        </div>
                    )}

                    <div className="flex-1" />

                    {/* Navigation & Progress */}
                    <div className="flex items-center gap-8 pointer-events-auto">
                        {/* Minimal Page Indicator */}
                        <span className="text-xs font-medium tracking-widest text-zinc-900 tabular-nums">
                            {String(currentSlide + 1).padStart(2, "0")} <span className="text-zinc-300 mx-1">/</span> {String(slides.length).padStart(2, "0")}
                        </span>

                        {/* Nav Buttons */}
                        <div className="flex gap-2">
                            <button
                                onClick={prevSlide}
                                disabled={currentSlide === 0}
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-100 bg-white/80 backdrop-blur hover:border-zinc-900 text-zinc-400 hover:text-zinc-900 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                            >
                                <ArrowLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={nextSlide}
                                disabled={currentSlide === slides.length - 1}
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-100 bg-white/80 backdrop-blur hover:border-zinc-900 text-zinc-400 hover:text-zinc-900 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </SlideContext.Provider>
    );
}
