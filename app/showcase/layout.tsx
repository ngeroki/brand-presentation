"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, ChevronRight, Hexagon, Circle, Shield, Home, Menu, X, ArrowRight, ArrowLeft, Download } from "lucide-react";
import clsx from "clsx";

// Helper function to get parent navigation path
function getParentPath(pathname: string | null): string | null {
    if (!pathname) return null;

    // /showcase/sqc/full-shape -> /showcase/sqc
    // /showcase/sqc -> /showcase
    // /showcase -> null (no back button on overview)

    const segments = pathname.split('/').filter(Boolean);
    if (segments.length <= 1) return null; // At /showcase, no back

    segments.pop(); // Remove last segment
    return '/' + segments.join('/');
}

// Helper function to get back button label
function getBackLabel(pathname: string | null): string {
    if (!pathname) return "Kembali";

    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 3) return "Pilih Opsi"; // From variant page to comparison
    if (segments.length === 2) return "Overview"; // From comparison to overview
    return "Kembali";
}

// Helper function to get mobile title
function getMobileTitle(pathname: string | null): string {
    if (!pathname || pathname === '/showcase') return 'SYSTEM OVERVIEW';

    const segments = pathname.split('/').filter(Boolean);
    const brandId = segments[1];
    const variantId = segments[2];

    const brand = navItems.find(i => i.id === brandId);
    if (!brand) return 'BRAND PORTAL';

    if (variantId) {
        const variantShort = variantId === 'full-shape' ? 'FULL_SHAPE' : 'GEOMETRIC_SYS';
        return `${brand.id.toUpperCase()} // ${variantShort}`;
    }

    return brand.title.toUpperCase();
}

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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedMobileBrand, setExpandedMobileBrand] = useState<string | null>(null);

    return (
        <div className="flex flex-col w-full h-screen bg-[#0B1221] overflow-hidden text-white">
            {/* Redesigned TOP NAVBAR */}
            <header className="fixed top-0 left-0 right-0 h-16 sm:h-20 bg-[#0B1221] border-b border-white/10 z-[100] px-4 sm:px-8 lg:px-12 flex items-center justify-between">
                {/* Logo & Portal ID */}
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2 sm:gap-4 group">
                        <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#C5A572] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                            <span className="font-black text-[#0B1221] text-xs sm:text-sm tracking-tighter">SQ</span>
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-white font-bold text-sm sm:text-base tracking-tight leading-none">BRAND <span className="font-light text-white/40">PORTAL</span></h1>
                            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#C5A572] font-black">Internal Access</span>
                        </div>
                    </Link>

                    {/* Contextual Back Button */}
                    {getParentPath(pathname) && (
                        <Link
                            href={getParentPath(pathname)!}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all text-[10px] sm:text-[11px] font-black uppercase tracking-widest group"
                        >
                            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="hidden sm:inline">{getBackLabel(pathname)}</span>
                        </Link>
                    )}
                </div>

                {/* Mobile Center Title */}
                <div className="lg:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/90 whitespace-nowrap">
                        {getMobileTitle(pathname)}
                    </span>
                    <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#C5A572] to-transparent mt-1 opacity-50" />
                </div>

                {/* Central Navigation (Desktop) */}
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
                                    {item.title.split(' ')[0]}
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
                                            <div className="bg-[#1E293B] border border-white/10 rounded-2xl shadow-2xl p-2 backdrop-blur-2xl">
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

                    <div className="w-px h-4 bg-white/10 mx-2" />

                    <Link
                        href="/showcase/download"
                        className={clsx(
                            "px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all flex items-center gap-2",
                            pathname === "/showcase/download" ? "text-[#C5A572] bg-[#C5A572]/10" : "text-white/40 hover:text-white hover:bg-white/5"
                        )}
                    >
                        <Download className="w-3 h-3" />
                        Download
                    </Link>
                </nav>

                {/* Right Side Status */}
                <div className="flex items-center gap-4 sm:gap-6">
                    <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-emerald-500/5 border border-emerald-500/10 rounded-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] font-black text-emerald-500/80 uppercase tracking-widest">System Active</span>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-3 -mr-2 text-white/80 hover:text-white transition-colors active:scale-95 touch-manipulation relative z-[110]"
                        type="button"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[105]"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.nav
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="lg:hidden fixed right-0 top-0 bottom-0 w-[300px] bg-[#1E293B] border-l border-white/10 shadow-2xl flex flex-col z-[106]"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-white/10">
                                <span className="font-black text-lg text-white">Navigation</span>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 text-white/40 hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <div className="flex-1 overflow-y-auto py-4">
                                <Link
                                    href="/showcase"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={clsx(
                                        "flex items-center gap-3 px-6 py-4 text-sm font-black uppercase tracking-wider transition-colors",
                                        pathname === "/showcase" ? "text-[#C5A572] bg-[#C5A572]/10" : "text-white/60 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    <LayoutGrid className="w-4 h-4" />
                                    Overview
                                </Link>

                                <div className="h-px bg-white/10 my-2 mx-6" />

                                {navItems.map((item) => {
                                    const isActive = pathname?.includes(`/showcase/${item.id}`);
                                    const isExpanded = expandedMobileBrand === item.id;

                                    return (
                                        <div key={item.id}>
                                            <button
                                                onClick={() => setExpandedMobileBrand(isExpanded ? null : item.id)}
                                                className={clsx(
                                                    "w-full flex items-center justify-between px-6 py-4 text-sm font-black uppercase tracking-wider transition-colors",
                                                    isActive ? "text-[#C5A572]" : "text-white/60 hover:text-white"
                                                )}
                                            >
                                                <div className="flex items-center gap-3">
                                                    {item.icon}
                                                    {item.title.split(' ')[0]}
                                                </div>
                                                <ChevronRight className={clsx("w-4 h-4 transition-transform", isExpanded ? "rotate-90" : "")} />
                                            </button>

                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden bg-white/5"
                                                    >
                                                        <Link
                                                            href={`/showcase/${item.id}`}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            className={clsx(
                                                                "flex items-center gap-3 pl-14 pr-6 py-3 text-xs font-bold transition-colors",
                                                                pathname === `/showcase/${item.id}` ? "text-[#C5A572]" : "text-white/40 hover:text-white"
                                                            )}
                                                        >
                                                            All {item.title.split(' ')[0]}
                                                        </Link>
                                                        {item.variants.map((v) => (
                                                            <Link
                                                                key={v.id}
                                                                href={`/showcase/${item.id}/${v.id}`}
                                                                onClick={() => setMobileMenuOpen(false)}
                                                                className={clsx(
                                                                    "flex items-center gap-3 pl-14 pr-6 py-3 text-xs font-bold transition-colors",
                                                                    pathname === `/showcase/${item.id}/${v.id}` ? "text-[#C5A572]" : "text-white/40 hover:text-white"
                                                                )}
                                                            >
                                                                {v.title}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}

                                <div className="h-px bg-white/10 my-2 mx-6" />

                                <Link
                                    href="/showcase/download"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={clsx(
                                        "flex items-center gap-3 px-6 py-4 text-sm font-black uppercase tracking-wider transition-colors",
                                        pathname === "/showcase/download" ? "text-[#C5A572] bg-[#C5A572]/10" : "text-white/60 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    <Download className="w-4 h-4" />
                                    Download
                                </Link>

                                <div className="h-px bg-white/10 my-2 mx-6" />

                                <Link
                                    href="/"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-3 px-6 py-4 text-sm font-black uppercase tracking-wider text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                                >
                                    <Home className="w-4 h-4" />
                                    Back to Home
                                </Link>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content Area */}
            <main className="flex-1 w-full relative bg-white overflow-hidden flex flex-col pt-16 sm:pt-20">
                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto scroll-smooth w-full no-scrollbar">
                    {children}
                </div>
            </main>
        </div>
    );
}
