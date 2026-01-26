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
    const [expanded, setExpanded] = useState<string | null>("sqc");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Sync expanded state with current pathname
    React.useEffect(() => {
        const activeBrand = navItems.find(item => pathname?.includes(`/showcase/${item.id}`));
        if (activeBrand) {
            setExpanded(activeBrand.id);
        }
    }, [pathname]);

    const handleBrandClick = (id: string) => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <div className="flex w-full h-screen bg-zinc-900 overflow-hidden">

            {/* Sidebar (Desktop) */}
            <aside className="hidden lg:flex flex-col w-72 bg-[#0B1221] border-r border-white/5 h-full shrink-0 relative z-50">
                {/* Header */}
                <div className="p-6 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#C5A572] rounded-md flex items-center justify-center">
                            <span className="font-black text-[#0B1221] text-xs">SQ</span>
                        </div>
                        <div>
                            <h1 className="text-white font-bold text-sm tracking-wide">Brand Portal</h1>
                            <p className="text-zinc-500 text-[10px] uppercase tracking-widest">Internal Access</p>
                        </div>
                    </div>
                </div>

                {/* Nav */}
                <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2 no-scrollbar">

                    {/* Overview Link */}
                    <Link href="/showcase" className={clsx(
                        "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all group",
                        pathname === "/showcase"
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                            : "text-zinc-400 hover:text-white hover:bg-white/5"
                    )}>
                        <LayoutGrid className="w-4 h-4" />
                        <span>Strategic Overview</span>
                    </Link>

                    <div className="h-4" />
                    <div className="px-4 text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-2">Entities</div>

                    {/* Entities */}
                    {navItems.map((item) => {
                        const isExpanded = expanded === item.id;
                        const isActive = pathname?.includes(`/showcase/${item.id}`);

                        return (
                            <div key={item.id} className="space-y-1">
                                <Link
                                    href={`/showcase/${item.id}`}
                                    onClick={() => handleBrandClick(item.id)}
                                    className={clsx(
                                        "w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all",
                                        isActive ? "text-white bg-white/5" : "text-zinc-400 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={clsx("transition-colors", isActive ? "text-[#C5A572]" : "text-zinc-500")}>
                                            {item.icon}
                                        </span>
                                        <span>{item.title}</span>
                                    </div>
                                    <ChevronRight className={clsx("w-3 h-3 transition-transform", isExpanded ? "rotate-90" : "")} />
                                </Link>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-11 pr-2 pb-2 space-y-1">
                                                {item.variants.map((v) => {
                                                    const linkHref = `/showcase/${item.id}/${v.id}`;
                                                    const isLinkActive = pathname === linkHref;

                                                    return (
                                                        <Link
                                                            key={v.id}
                                                            href={linkHref}
                                                            className={clsx(
                                                                "block px-3 py-2 rounded text-xs font-medium transition-colors border-l-2",
                                                                isLinkActive
                                                                    ? "border-blue-500 text-white bg-blue-500/10"
                                                                    : "border-transparent text-zinc-500 hover:text-zinc-300"
                                                            )}
                                                        >
                                                            {v.title}
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-white/5">
                    <div className="bg-zinc-900/50 rounded-lg p-3 border border-white/5">
                        <div className="flex gap-2 items-center mb-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] text-zinc-400 uppercase tracking-wider">System Online</span>
                        </div>
                        <p className="text-[10px] text-zinc-600">Last updated: Jan 26, 2026</p>
                    </div>
                </div>
            </aside>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lg:hidden fixed inset-0 bg-black/50 z-50"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ x: -300 }}
                            animate={{ x: 0 }}
                            exit={{ x: -300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-80 h-full bg-[#0B1221] overflow-y-auto"
                        >
                            <div className="p-6 border-b border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-[#C5A572] rounded-md flex items-center justify-center">
                                        <span className="font-black text-[#0B1221] text-xs">SQ</span>
                                    </div>
                                    <div>
                                        <h1 className="text-white font-bold text-sm tracking-wide">Brand Portal</h1>
                                        <p className="text-zinc-500 text-[10px] uppercase tracking-widest">Internal Access</p>
                                    </div>
                                </div>
                            </div>

                            <nav className="py-6 px-4 space-y-2">
                                <Link
                                    href="/showcase"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={clsx(
                                        "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all",
                                        pathname === "/showcase"
                                            ? "bg-blue-600 text-white"
                                            : "text-zinc-400 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    <LayoutGrid className="w-4 h-4" />
                                    <span>Strategic Overview</span>
                                </Link>

                                <div className="h-4" />
                                <div className="px-4 text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-2">Entities</div>

                                {navItems.map((item) => (
                                    <div key={item.id} className="space-y-1">
                                        <Link
                                            href={`/showcase/${item.id}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5"
                                        >
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                        <div className="pl-11 space-y-1">
                                            {item.variants.map((v) => (
                                                <Link
                                                    key={v.id}
                                                    href={`/showcase/${item.id}/${v.id}`}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className="block px-3 py-2 rounded text-xs font-medium text-zinc-500 hover:text-zinc-300"
                                                >
                                                    {v.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content Area */}
            <main className="flex-1 w-full relative bg-white overflow-hidden flex flex-col">
                {/* Mobile Header */}
                <div className="lg:hidden h-14 bg-[#0B1221] flex items-center justify-between px-4 shrink-0">
                    <span className="font-bold text-white text-sm">Safar Qawiyy Portal</span>
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
                        <Menu className="w-5 h-5" />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto scroll-smooth w-full">
                    {children}
                </div>
            </main>

        </div>
    );
}
