"use client";

import Image from "next/image";
import { BrandData } from "@/data/brands";

export default function LogoImplementationSlide({ brand, variant }: { brand: BrandData; variant: 'full-shape' | 'geometric' }) {
    // Use transparent logos for implementation mockups
    const activeLogo = variant === 'full-shape' ? brand.logos.transparentFull : brand.logos.transparentGeo;
    const whiteLogoForDark = variant === 'full-shape' ? brand.logos.transparentFullWhite : brand.logos.transparentGeoWhite;

    return (
        <div className="flex flex-col w-full h-full bg-[#EBEBEB] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-[#EBEBEB] overflow-hidden select-none">

            {/* CLEAN CENTERED HEADER */}
            <header className="w-full pt-20 pb-16 text-center">
                <h2 className="text-2xl font-medium tracking-[0.3em] text-[#333333] uppercase">Implementation</h2>
            </header>

            {/* THREE COLUMN SHOWCASE */}
            <main className="flex-1 w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-12 lg:px-20 mb-20">

                {/* 1. STATIONERY (Left) */}
                <div className="flex-1 h-full flex items-center justify-center relative">
                    <div className="relative w-full aspect-square max-w-[450px]">
                        {/* Letterhead Base */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[400px] bg-white shadow-lg border border-zinc-200/50 p-8 flex flex-col items-center">
                            <div className="w-20 h-20 relative mt-4">
                                <Image src={activeLogo} alt="Letterhead" fill className="object-contain" unoptimized />
                            </div>
                            <div className="mt-auto w-full border-t border-zinc-100 pt-4 flex justify-between items-center opacity-30">
                                <div className="w-16 h-1 bg-zinc-200 rounded" />
                                <div className="w-3 h-3 bg-zinc-100 rounded-full" />
                            </div>
                        </div>

                        {/* Envelope */}
                        <div className="absolute bottom-12 left-1/2 translate-x-4 w-[240px] h-[140px] bg-white shadow-xl flex flex-col overflow-hidden">
                            <div
                                className="w-full h-1/3"
                                style={{
                                    backgroundColor: brand.colors.primary,
                                    clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
                                }}
                            />
                            <div className="flex-1 flex items-center justify-center p-4">
                                <div className="w-24 h-12 relative opacity-40">
                                    <Image src={activeLogo} alt="Logo" fill className="object-contain" unoptimized />
                                </div>
                            </div>
                        </div>

                        {/* Business Cards */}
                        <div
                            className="absolute bottom-24 left-4 w-48 h-28 rounded shadow-2xl p-6 flex flex-col justify-between"
                            style={{ backgroundColor: brand.colors.primary }}
                        >
                            <div className="w-20 h-10 relative">
                                <Image src={whiteLogoForDark} alt="Card Logo" fill className="object-contain object-left" unoptimized />
                            </div>
                            <div className="w-12 h-1 bg-white/20 rounded" />
                        </div>
                        <div className="absolute bottom-8 left-4 w-48 h-28 bg-white border border-zinc-200 rounded shadow-lg p-6 flex flex-col justify-between transform -rotate-1">
                            <div className="w-20 h-10 relative">
                                <Image src={activeLogo} alt="Card Logo" fill className="object-contain object-left" unoptimized />
                            </div>
                            <div className="w-12 h-1 bg-zinc-100 rounded" />
                        </div>
                    </div>
                </div>

                {/* 2. LAPTOP (Center) */}
                <div className="flex-1 h-full flex items-center justify-center">
                    <div className="relative w-full max-w-[600px] flex flex-col items-center">
                        {/* MacBook Pro Styled Laptop */}
                        <div className="relative w-full aspect-[1.6/1] bg-[#1a1a1a] p-2 rounded-t-[1.5rem] shadow-2xl border border-white/5">
                            <div className="w-full h-full bg-[#fdfdfd] rounded-lg overflow-hidden flex flex-col">
                                {/* Web Header */}
                                <div className="h-10 bg-[#f5f5f5] border-b border-zinc-200 flex items-center px-4 justify-between">
                                    <div className="w-20 h-7 relative">
                                        <Image src={activeLogo} alt="Logo" fill className="object-contain object-left" unoptimized />
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-8 h-1 bg-zinc-300 rounded" />
                                        <div className="w-8 h-1 bg-zinc-300 rounded" />
                                        <div className="w-8 h-1 bg-zinc-300 rounded" />
                                    </div>
                                </div>
                                {/* Web Hero */}
                                <div className="flex-1 flex flex-col items-center justify-center bg-white p-12 text-center relative overflow-hidden">
                                    <div
                                        className="absolute inset-0 opacity-[0.03]"
                                        style={{
                                            backgroundImage: `linear-gradient(to right, ${brand.colors.primary} 1px, transparent 1px), linear-gradient(to bottom, ${brand.colors.primary} 1px, transparent 1px)`,
                                            backgroundSize: '20px 20px'
                                        }}
                                    />
                                    <div
                                        className="w-28 h-28 rounded shadow-xl flex items-center justify-center mb-6"
                                        style={{ backgroundColor: brand.colors.primary }}
                                    >
                                        <Image src={whiteLogoForDark} alt="Logo" width={64} height={64} unoptimized />
                                    </div>
                                    <h3 className="text-xl font-bold tracking-tight text-[#333333] mb-4 uppercase">{brand.name}</h3>
                                    <div className="flex gap-2">
                                        <div className="w-32 h-2 bg-zinc-100 rounded-full" />
                                    </div>
                                </div>
                                {/* Web Body Cards */}
                                <div className="h-32 bg-[#f9f9f9] border-t border-zinc-100 grid grid-cols-4 gap-4 p-4">
                                    <div className="bg-white rounded border border-zinc-200 shadow-sm" />
                                    <div className="bg-white rounded border border-zinc-200 shadow-sm" />
                                    <div className="bg-white rounded border border-zinc-200 shadow-sm" />
                                    <div className="bg-white rounded border border-zinc-200 shadow-sm" />
                                </div>
                            </div>
                        </div>
                        {/* Laptop Base */}
                        <div className="w-[104%] h-3 bg-[#a5a5a5] rounded-b-xl relative shadow-2xl">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-[#8e8e8e] rounded-b-lg opacity-50" />
                        </div>
                    </div>
                </div>

                {/* 3. MOBILE (Right) */}
                <div className="flex-1 h-full flex items-center justify-center gap-12">
                    {/* Device Dark */}
                    <div
                        className="w-[160px] h-[340px] rounded-[2.5rem] shadow-2xl p-2.5 relative flex flex-col items-center justify-center border-[6px] border-[#1a1a1a]"
                        style={{ backgroundColor: brand.colors.primary }}
                    >
                        <div className="absolute top-2 w-14 h-4 bg-[#1a1a1a] rounded-full z-10" />
                        <div className="w-24 h-24 relative z-10">
                            <Image src={whiteLogoForDark} alt="Logo" fill className="object-contain" unoptimized />
                        </div>
                    </div>

                    {/* Device Light */}
                    <div className="w-[180px] h-[380px] bg-[#1a1a1a] rounded-[2.5rem] shadow-[40px_40px_100px_rgba(0,0,0,0.1)] p-2.5 relative flex flex-col border-[6px] border-[#1a1a1a]">
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1a1a1a] rounded-full z-10" />
                        <div className="flex-1 bg-white rounded-[2rem] overflow-hidden flex flex-col">
                            <div className="h-12 border-b border-zinc-50 px-4 flex items-center justify-between">
                                <div className="w-16 h-10 relative opacity-80">
                                    <Image src={activeLogo} alt="Logo" fill className="object-contain object-left" unoptimized />
                                </div>
                                <div className="w-6 h-6 rounded-full bg-zinc-100" />
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="h-24 rounded-xl bg-zinc-50 flex items-center justify-center">
                                    <div className="w-20 h-20 relative opacity-10">
                                        <Image src={activeLogo} alt="Logo" fill className="object-contain" unoptimized />
                                    </div>
                                </div>
                                <div className="w-full h-8 bg-zinc-100 rounded" />
                                <div className="w-3/4 h-3 bg-zinc-50 rounded" />
                                <div className="grid grid-cols-2 gap-3 pt-4">
                                    <div className="h-16 bg-zinc-50 rounded-lg shadow-sm" />
                                    <div className="h-16 bg-zinc-50 rounded-lg shadow-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            {/* SPACER SECTION */}
            <div className="h-20" />
        </div>
    );
}
