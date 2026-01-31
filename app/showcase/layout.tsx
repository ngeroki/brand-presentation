"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, ChevronRight, Hexagon, Circle, Shield, Home, Menu } from "lucide-react";
import clsx from "clsx";

const navItems = [
    {
        id: "sqc",
        title: "Safar Qawwiy Corp",
        icon: <Shield className="w-4 h-4" />,
        variants: [
            { id: "full-shape", title: "Full Shape Direction" },
            { id: "geometric", title: "Geometric System" }
        ]
    },
    {
        id: "mtb",
        title: "Matahari Timur Bumi",
        icon: <Circle className="w-4 h-4" />,
        variants: [
            { id: "full-shape", title: "Full Shape Direction" },
            { id: "geometric", title: "Geometric System" }
        ]
    },
    {
        id: "mre",
        title: "Mataram Royal Energi",
        icon: <Hexagon className="w-4 h-4" />,
        variants: [
            { id: "full-shape", title: "Full Shape Direction" },
            { id: "geometric", title: "Geometric System" }
        ]
    }
];

export default function ShowcaseLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);

    return (
        <div className="flex flex-col w-full h-screen bg-[#0B1221] overflow-hidden text-white">
            {/* Redesigned TOP NAVBAR */}
            <header className="fixed top-0 left-0 right-0 h-20 bg-[#0B1221]/80 backdrop-blur-xl border-b border-white/5 z-[100] px-8 lg:px-12 flex items-center justify-between">
                {/* Logo & Portal ID */}
                <Link href="/" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-[#C5A572] rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                        <span className="font-black text-[#0B1221] text-sm tracking-tighter">SQ</span>
                    </div>
                    <div>
                        <h1 className="text-white font-bold text-base tracking-tight leading-none">BRAND <span className="font-light text-white/40">PORTAL</span></h1>
                        <span className="text-[9px] uppercase tracking-[0.4em] text-[#C5A572] font-black">Internal Access</span>
                    </div>
                </Link>

                {/* Central Navigation */}
                <nav className="hidden lg:flex items-center gap-2">
                    <Link
                        href="/showcase"
                        className={clsx(
                            "px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all",
                            pathname === "/showcase" ? "text-white bg-white/10" : "text-white/40 hover:text-white hover:bg-white/5"
                        )}
                    >
                        Overview
                    </Link>

                    <div className="w-px h-4 bg-white/10 mx-2" />

                    {navItems.map((item) => {
                        const isActive = pathname?.includes(`/showcase/${item.id}`);
                        return (
                            <div
                                key={item.id}
                                className="relative group"
                                onMouseEnter={() => setHoveredBrand(item.id)}
                                onMouseLeave={() => setHoveredBrand(null)}
                            >
                                <Link
                                    href={`/showcase/${item.id}`}
                                    className={clsx(
                                        "px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all flex items-center gap-2",
                                        isActive ? "text-[#C5A572] bg-[#C5A572]/10" : "text-white/40 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    {item.title.split(' ')[0]} {/* Show SQC, MTB, MRE */}
                                    <ChevronRight className={clsx("w-3 h-3 transition-transform", hoveredBrand === item.id ? "rotate-90" : "")} />
                                </Link>

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {hoveredBrand === item.id && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64"
                                        >
                                            <div className="bg-[#0B1221] border border-white/10 rounded-2xl shadow-2xl p-2 backdrop-blur-2xl">
                                                {item.variants.map((v) => (
                                                    <Link
                                                        key={v.id}
                                                        href={`/showcase/${item.id}/${v.id}`}
                                                        className={clsx(
                                                            "flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all group/item",
                                                            pathname === `/showcase/${item.id}/${v.id}`
                                                                ? "bg-white/10 text-white"
                                                                : "text-white/40 hover:text-white hover:bg-white/5"
                                                        )}
                                                    >
                                                        {v.title}
                                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all text-[#C5A572]" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </nav>

                {/* Right Side Status */}
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-emerald-500/5 border border-emerald-500/10 rounded-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] font-black text-emerald-500/80 uppercase tracking-widest">System Active</span>
                    </div>

                    {/* Simplified Mobile Trigger */}
                    <button className="lg:hidden p-2 text-white/60">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 w-full relative bg-white overflow-hidden flex flex-col pt-20">
                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto scroll-smooth w-full no-scrollbar">
                    {children}
                </div>
            </main>
        </div>
    );
}

// Re-using ArrowRight which wasn't in original imports
import { ArrowRight } from "lucide-react";
