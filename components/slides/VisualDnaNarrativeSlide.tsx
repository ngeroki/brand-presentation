"use client";

import { motion } from "framer-motion";
import { BrandData } from "@/data/brands";
import Image from "next/image";

interface NarrativePoint {
    number: string;
    title: string;
    desc: string;
}

export default function VisualDnaNarrativeSlide({ brand }: { brand: BrandData }) {

    // Brand Logic
    const isSQC = brand.id === "sqc";
    const isMTB = brand.id === "mtb";
    const isMRE = brand.id === "mre";

    // Theme Configuration
    const theme = {
        bg: isSQC ? "bg-[#F7F3F0]" : (isMTB ? "bg-[#FDFCFB]" : "bg-[#F7F3F0]"),
        text: isSQC ? "text-[#0B1221]" : (isMTB ? "text-[#1A1816]" : "text-[#0B1221]"),
        accent: isSQC ? "text-blue-600" : (isMTB ? "text-[#FFBE18]" : "text-[#1A1F2B]"),
        accentBg: isSQC ? "bg-blue-600" : (isMTB ? "bg-[#FFBE18]" : "bg-[#1A1F2B]"),
        secondaryText: isSQC ? "text-[#0B1221]/70" : (isMTB ? "text-[#1A1816]/70" : "text-[#0B1221]/70"),
        cardBg: isSQC ? "bg-[#0B1221]" : (isMTB ? "bg-[#1A1816]" : "bg-[#0B1221]"),
        selection: isSQC ? "selection:bg-[#0B1221] selection:text-[#F7F3F0]" :
            (isMTB ? "selection:bg-[#FFBE18] selection:text-[#1A1816]" :
                "selection:bg-[#0B1221] selection:text-[#F7F3F0]"),
    };

    // Data Points
    const getDnas = (): NarrativePoint[] => {
        if (isSQC) return [
            { number: "01", title: "Inisial S & Q", desc: "Safar (Perjalanan) & Qawwiy (Kuat). Huruf S dan Q dijalin tanpa putus, melambangkan perjalanan yang terus terjaga oleh kekuatan nilai." },
            { number: "02", title: "Struktur Monogram", desc: "Gaya monogram klasik memberikan kesan otoritas tinggi, warisan (heritage), dan stabilitas jangka panjang." },
            { number: "03", title: "Bentuk Perisai", desc: "Melambangkan proteksi dan penjagaan. Safar Qawwiy Corp hadir sebagai pelindung bagi seluruh unit bisnis di bawahnya." },
            { number: "04", title: "Empat Garis Vertikal", desc: "Menandakan empat pilar keluarga (saudara) yang berdiri setara, saling menopang dalam satu struktur komando." },
            { number: "05", title: "Simetri Sempurna", desc: "Mencerminkan keadilan (al-'adl) dan keseimbangan dalam pengambilan keputusan di tingkat direksi." },
            { number: "06", title: "Ketajaman Sudut", desc: "Ujung-ujung garis yang tajam melambangkan presisi, ketegasan dalam prinsip, dan arah visi yang jelas." }
        ];
        if (isMTB) return [
            { number: "01", title: "Matahari Terbit", desc: "Melambangkan kemunculan energi awal: cahaya yang muncul perlahan, belum eksplosif, namun menentukan arah seluruh perjalanan berikutnya." },
            { number: "02", title: "Gunung & Bentang Bumi", desc: "Merepresentasikan real asset—sumber daya mineral dan energi yang kokoh, berumur panjang, dan memiliki nilai intrinsik yang nyata." },
            { number: "03", title: "Lengkungan Emas", desc: "Menandakan tajalli awal: energi mentah yang mulai menampakkan diri dan siap dikembangkan secara terukur di bawah naungan manajemen." },
            { number: "04", title: "Garis Horizon", desc: "Melambangkan batas kesadaran dan pijakan realitas, menegaskan bahwa eksplorasi dilakukan dengan kendali dan visi jangka panjang." },
            { number: "05", title: "Ketenangan Awal", desc: "Aura yang tenang mencerminkan kesiapan mental dan spiritual sebelum melakukan ekspansi besar. Kekuatan dalam keheningan." },
            { number: "06", title: "Potensi Terukur", desc: "Setiap elemen geometris dihitung dengan presisi, melambangkan bahwa setiap langkah bisnis MTB didasarkan pada data dan kehati-hatian." }
        ];
        if (isMRE) return [
            { number: "01", title: "Nama Mataram & Royal", desc: "Mataram merepresentasikan kedaulatan Nusantara yang luhur. Royal dimaknai sebagai legitimasi dan tanggung jawab publik—bukan sekadar kemewahan." },
            { number: "02", title: "Struktur Simetris", desc: "Merepresentasikan otoritas yang sah, arah yang jelas, dan hierarki kendali yang stabil atas pengelolaan energi nasional." },
            { number: "03", title: "Bentuk Mahkota", desc: "Melambangkan mandat penjagaan: kekuasaan yang hadir untuk mengatur, mengelola, dan melindungi nilai luhur, bukan untuk mendominasi." },
            { number: "04", title: "Lapisan Horizontal", desc: "Menandakan sistem tata kelola, regulasi, dan pengawasan berlapis yang memastikan setiap energi bergerak dengan tertib dan akuntabel." },
            { number: "05", title: "Siklus Energi", desc: "Elemen di pusat dasar melambangkan kesinambungan, efisiensi, dan regenerasi daya yang terus berputar untuk kemaslahatan." },
            { number: "06", title: "Kedaulatan Nilai", desc: "Setiap sudut geometri mencerminkan ketegasan dalam menjaga kedaulatan energi dan integritas institusional MRE." }
        ];
        return [];
    };

    return (
        <div className={`w-full min-h-full ${theme.bg} ${theme.text} font-sans ${theme.selection} overflow-y-auto no-scrollbar scroll-smooth`}>

            {/* Background Grid Pattern */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.05]" style={{
                backgroundImage: `linear-gradient(to right, ${isMTB ? '#1A1816' : '#000000'} 1px, transparent 1px), linear-gradient(to bottom, ${isMTB ? '#1A1816' : '#000000'} 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
            }} />

            <div className="max-w-[1400px] mx-auto px-8 py-20 lg:py-24 space-y-20 relative z-10">

                {/* CENTRAL AXIS LINE */}
                <div className={`absolute left-1/2 top-0 bottom-0 w-px ${isMTB ? 'bg-[#1A1816]/5' : 'bg-[#0B1221]/10'} -translate-x-1/2 z-0 hidden lg:block pointer-events-none`} />

                {/* HEADER SECTION */}
                <header className={`relative z-10 flex flex-col items-center text-center space-y-8 pb-12 border-b-2 ${isMTB ? 'border-[#1A1816]/10' : 'border-[#0B1221]/10'}`}>
                    <div className={`inline-flex items-center gap-3 px-3 py-1 ${isMTB ? 'bg-[#FFBE18]/10' : 'bg-[#0B1221]/5'} rounded border ${isMTB ? 'border-[#FFBE18]/20' : 'border-[#0B1221]/10'} text-[10px] font-mono tracking-widest uppercase ${theme.accent} font-bold`}>
                        <div className={`w-1.5 h-1.5 ${theme.accent.replace('text-', 'bg-')} rounded-full animate-pulse`} />
                        {isSQC && "Brand DNA Analysis SQC V1.0"}
                        {isMTB && "MTB GENESIS CORE V1.0"}
                        {isMRE && "Philosophy Analysis MRE V1.0"}
                    </div>

                    <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none uppercase">
                        {isSQC && <>Filosofi <br /><span className={`italic block mt-2 ${theme.accent}`}>Bentuk Visual</span></>}
                        {isMTB && <>Matahari Terbit <br /><span className={`italic block mt-2 ${theme.accent}`}>The Genesis</span></>}
                        {isMRE && <>Otoritas <br /><span className={`italic block mt-2 ${theme.accent}`}>Energi Mataram</span></>}
                    </h1>

                    <p className={`max-w-2xl text-lg font-light leading-relaxed ${theme.secondaryText} italic`}>
                        {isSQC && '"Identitas bukan sekadar gambar, melainkan pernyataan otoritas dan penjagaan yang kokoh atas amanah nilai."'}
                        {isMTB && '"Energi lahir dari awal yang tenang, nyata, dan penuh potensi. Cahaya yang menentukan arah menuju kemakmuran energi."'}
                        {isMRE && '"Energi yang diarahkan dengan otoritas, dijaga dengan tata kelola, dan diwariskan dengan tanggung jawab kedaulatan."'}
                    </p>
                </header>

                {/* SECTION 1: THE CORE SHAPE */}
                <section className={`relative z-10 w-full ${theme.cardBg} border border-white/10 p-12 lg:p-24 shadow-2xl rounded-sm text-white`}>
                    {/* Architectural corner accents */}
                    <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${isMTB ? 'border-[#FFBE18]' : 'border-blue-400'} m-2`} />
                    <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${isMTB ? 'border-[#FFBE18]' : 'border-blue-400'} m-2`} />
                    <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${isMTB ? 'border-[#FFBE18]' : 'border-blue-400'} m-2`} />
                    <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${isMTB ? 'border-[#FFBE18]' : 'border-blue-400'} m-2`} />

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                        {/* Left: The Logo */}
                        <div className="flex-1 w-full flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-md aspect-square flex items-center justify-center p-12 bg-white/5 border border-white/10 shadow-inner rounded-sm overflow-hidden">
                                <div className="absolute inset-0 border border-dashed border-white/10 m-4 pointer-events-none" />
                                <Image
                                    src={brand.logos.fullyShape}
                                    alt={`${brand.name} Fully Shape Logo`}
                                    width={800}
                                    height={800}
                                    className={`w-full h-auto object-contain brightness-110 drop-shadow-2xl ${isMTB ? 'drop-shadow-[0_0_30px_rgba(255,190,24,0.15)]' : ''}`}
                                    unoptimized
                                />
                            </div>
                        </div>

                        {/* Right: The Explanation */}
                        <div className="flex-1 w-full space-y-8 text-center lg:text-left">
                            <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white flex items-center justify-center lg:justify-start gap-4">
                                <span className={`text-sm font-mono ${isMTB ? 'text-[#FFBE18] border-[#FFBE18]/40' : 'text-blue-400 border-blue-400/40'} border rounded px-2 uppercase`}>
                                    {isSQC ? 'ID: SQC' : (isMTB ? 'GEN: 01' : 'REF: MRE-01')}
                                </span>
                                {isSQC ? 'Identity Presence' : (isMTB ? 'Core Philosophy' : 'The Sovereignty')}
                            </h2>
                            <p className="text-slate-400 leading-relaxed text-lg font-light">
                                {isSQC && "Logo Safar Qawwiy Corp bukan sekadar inisial; ia adalah sebuah perisai (shield) yang membawa misi penjagaan. Jalinan garis tipografi yang kokoh menunjukkan keterikatan antar pilar yang mustahil untuk dipisahkan."}
                                {isMTB && "Simbol ini menangkap esensi The Genesis of Energy. Gunung yang kokoh melambangkan real asset bumi, sementara lingkaran matahari yang muncul menandakan sumber energi tak terbatas."}
                                {isMRE && "Simbol ini merepresentasikan legitimasi energi. Struktur mahkota yang simetris melambangkan otoritas Mataram dalam mengelola sumber daya, memastikan setiap gerak energi patuh pada tatanan nilai."}
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-4 font-mono">
                                <div className="p-4 border border-white/10 bg-white/5 text-center">
                                    <span className={`block text-2xl font-bold ${isMTB ? 'text-[#FFBE18]' : 'text-blue-400'}`}>{brand.id.toUpperCase()}</span>
                                    <span className="text-[10px] uppercase tracking-widest text-slate-500">Corporate Ref</span>
                                </div>
                                <div className="p-4 border border-white/10 bg-white/5 text-center">
                                    <span className={`block text-2xl font-bold ${isMTB ? 'text-[#FFBE18]' : 'text-blue-400'}`}>{isSQC ? 'V1.0' : (isMTB ? '100%' : '90°')}</span>
                                    <span className="text-[10px] uppercase tracking-widest text-slate-500">{isSQC ? 'Build' : (isMTB ? 'Source' : 'Verticality')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PHILOSOPHY GRID */}
                <div className="relative z-10 w-full h-12 flex items-center justify-center">
                    <div className={`w-full h-px ${isMTB ? 'bg-[#1A1816]/10' : 'bg-[#0B1221]/20'}`} />
                    <div className={`absolute ${theme.bg} px-8 text-[10px] font-bold font-mono tracking-[0.5em] uppercase border ${isMTB ? 'border-[#1A1816]/10' : 'border-[#0B1221]/20'} py-2`}>
                        {isSQC ? 'Narrative Breakdown' : (isMTB ? 'Segment II: Visual Elements' : 'Part II: The 6 Pillars')}
                    </div>
                </div>

                <section className={`relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px ${isMTB ? 'bg-[#1A1816]/10' : 'bg-white/10'} border ${isMTB ? 'border-[#1A1816]/10' : 'border-white/10'} shadow-2xl`}>
                    {getDnas().map((item, idx) => (
                        <div key={idx} className={`${theme.cardBg} p-10 lg:p-12 hover:opacity-90 transition-all duration-300 group flex flex-col justify-between min-h-[300px]`}>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <span className={`text-[10px] font-mono tracking-widest text-slate-500 group-hover:${theme.accent} transition-colors uppercase`}>
                                        [{item.number}]
                                    </span>
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed text-justify font-light">
                                    {item.desc}
                                </p>
                            </div>
                            <div className="pt-6 border-t border-white/5 flex justify-end">
                                <span className="text-[8px] font-mono text-slate-600 uppercase">Analysis: OK</span>
                            </div>
                        </div>
                    ))}
                </section>

            </div>
        </div>
    );
}
