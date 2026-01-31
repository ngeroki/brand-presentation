"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BrandData } from "@/data/brands";
import { sqc, SQCBackground, SQCTag } from "@/styles/sqc-theme";
import { mockupImages } from "@/data/mockups";
import { Layout, Maximize2, ShieldCheck, Eye } from "lucide-react";

export default function LogoImplementationSlide({ brand, variant }: { brand: BrandData; variant: 'full-shape' | 'geometric' }) {
    // Logo variations for metadata
    const activeLogo = variant === 'full-shape' ? brand.logos.transparentFull : brand.logos.transparentGeo;

    // Path prefix for images
    const customPathPrefix = `/mockups/${brand.id}/${variant}`;
    const accentColor = brand.colors.accent || "#C5A572";

    // Get mockup images for this brand/variant
    const availableMockups = mockupImages[brand.id]?.[variant] || [];

    return (
        <div className="relative min-h-screen bg-[#0B1221] text-white selection:bg-[#C5A572] selection:text-[#0B1221] overflow-hidden flex flex-col">
            <SQCBackground />

            {/* AMBIENCE */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(to right, ${accentColor} 1px, transparent 1px), linear-gradient(to bottom, ${accentColor} 1px, transparent 1px)`,
                        backgroundSize: '120px 120px',
                        maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 90%)'
                    }}
                />
            </div>

            <main className="relative z-10 w-full max-w-[1600px] mx-auto px-8 pt-16 pb-32 flex flex-col items-center">

                {/* HEADER - Cinematic Gallery Introduction */}
                <header className="w-full flex flex-col items-center text-center space-y-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <SQCTag className="px-8 py-2 bg-white/5 border-white/10 backdrop-blur-2xl">
                            <span className="flex items-center gap-3">
                                <Eye className="w-4 h-4 text-[#C5A572]" />
                                Real-World Manifestation Gallery
                            </span>
                        </SQCTag>
                    </motion.div>

                    <div className="space-y-6">
                        <h1 className="text-6xl lg:text-[9rem] font-black uppercase tracking-[calc(-0.06em)] leading-[0.8] text-white">
                            Logo <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A572] to-[#EBB218] filter drop-shadow-[0_0_30px_rgba(197,165,114,0.3)]">Implementation</span>
                        </h1>
                        <p className="max-w-4xl mx-auto text-xl lg:text-3xl font-light leading-relaxed text-white/30 italic">
                            Validasi visual {brand.name} pada ekosistem operasional melalui pendekatan <span className="font-black text-white italic px-2">{variant === 'full-shape' ? 'Narrative (Full Shape)' : 'Technical (Geometric)'}</span>.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <div className="px-6 py-2 border border-white/10 rounded-xl text-[10px] font-mono font-black tracking-widest uppercase text-white/20">VARIANT: {variant.toUpperCase()}</div>
                        <div className="px-6 py-2 border border-white/10 rounded-xl text-[10px] font-mono font-black tracking-widest uppercase text-white/20">REDR: HIGH_FIDELITY</div>
                    </div>
                </header>

                {/* MASONRY GALLERY - Premium Cards */}
                <div className="w-full max-w-7xl mx-auto">
                    {availableMockups.length > 0 ? (
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
                            {availableMockups.map((mockup, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="break-inside-avoid relative group"
                                >
                                    {/* Card Master */}
                                    <div className="relative rounded-[3rem] overflow-hidden bg-[#0F1629]/60 border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] transition-all duration-1000 group-hover:border-[#C5A572]/40 group-hover:shadow-[0_0_50px_rgba(197,165,114,0.1)]">

                                        {/* Image Container */}
                                        <div className="relative w-full overflow-hidden aspect-[3/4]">
                                            <Image
                                                src={`${customPathPrefix}/${mockup}`}
                                                alt={`${brand.name} Implementation ${index + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                                unoptimized
                                            />
                                            {/* Hover HUD Overlay */}
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-between p-10">
                                                <div className="flex justify-between items-start">
                                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-3xl rounded-2xl flex items-center justify-center border border-white/20 text-white/60">
                                                        <Maximize2 className="w-6 h-6" />
                                                    </div>
                                                    <div className="px-4 py-2 bg-[#C5A572] text-[#0B1221] rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl">
                                                        Live View
                                                    </div>
                                                </div>

                                                <div className="space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                                                    <div className="flex items-center gap-3">
                                                        <ShieldCheck className="w-5 h-5 text-[#C5A572]" />
                                                        <span className="text-[11px] font-mono font-black text-[#C5A572] tracking-[0.3em] uppercase">Auth_Verified</span>
                                                    </div>
                                                    <h4 className="text-3xl font-black text-white uppercase tracking-tighter">Manifestation Node {index + 1 < 10 ? `0${index + 1}` : index + 1}</h4>
                                                    <div className="h-px w-full bg-gradient-to-r from-white/40 to-transparent" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Meta Strip - Technical Footer */}
                                        <div className="px-10 py-8 bg-[#0B1221] flex justify-between items-center group-hover:bg-[#0F1629] transition-colors">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest font-black">Environment</span>
                                                <span className="text-xs font-black text-white/80 uppercase tracking-wider">Operational Context</span>
                                            </div>
                                            <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center">
                                                <span className="text-[10px] font-mono text-white/30">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="w-full text-center py-40 border-2 border-dashed border-white/5 rounded-[4rem]">
                            <p className="text-xl text-white/20 font-light italic">
                                [ System Error: Manifestation assets for this node currently offline ]
                            </p>
                        </div>
                    )}
                </div>

                {/* FOOTER BAR */}
                <footer className="w-full mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 bg-black/20 backdrop-blur-xl p-12 rounded-[4rem]">
                    <div className="flex items-center gap-6 text-white/20">
                        <Layout className="w-6 h-6" />
                        <span className="text-[10px] font-mono font-black tracking-widest uppercase">Visual Proof Logic // Version 2.0.1</span>
                    </div>

                    <div className="flex items-center gap-12">
                        <div className="flex flex-col items-end gap-2 text-right">
                            <span className="text-[11px] font-black text-white uppercase tracking-widest">SQC Asset Stewardship</span>
                            <span className="text-[9px] font-mono text-white/20 italic uppercase tracking-widest">"Validated through physical existence"</span>
                        </div>
                    </div>
                </footer>

            </main>
        </div>
    );
}
