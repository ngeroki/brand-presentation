"use client";

import { motion } from "framer-motion";
import {
    Shield, Users, Crown, Circle, Ruler, Compass, Lock,
    Layers, Maximize2, Activity, Anchor, Scale, Layout, ScrollText
} from "lucide-react";
import Image from "next/image";
import { BrandData } from "@/data/brands";

interface GeometricPoint {
    id: string;
    title: string;
    desc: string;
    icon: React.ReactNode;
}

export default function VisualDnaGeometricSlide({ brand }: { brand: BrandData }) {

    // Switch Data & Styles based on Brand ID
    const isSQC = brand.id === "sqc";
    const isMTB = brand.id === "mtb";
    const isMRE = brand.id === "mre";

    // 1. Technical Metrics
    const technicalMetrics = [
        { label: "Ref", value: `${brand.id.toUpperCase()}-GEO-V1` },
        { label: "Grid", value: "8PT System" },
        { label: "Ratio", value: "1:1.618" },
        { label: "Scale", value: isSQC ? "1:1.2" : (isMTB ? "1:1.0" : "1:1.618") },
    ];

    // 2. Theme Colors
    const theme = {
        bg: isSQC ? "bg-[#0B1221]" : (isMTB ? "bg-[#1A1816]" : "bg-[#020617]"),
        accent: isSQC ? "text-[#C5A572]" : (isMTB ? "text-[#FFBE18]" : "text-[#E6AF4B]"),
        accentBg: isSQC ? "bg-[#C5A572]" : (isMTB ? "bg-[#FFBE18]" : "bg-[#E6AF4B]"),
        selection: isSQC ? "selection:bg-[#C5A572] selection:text-[#0B1221]" :
            (isMTB ? "selection:bg-[#FFBE18] selection:text-[#1A1816]" :
                "selection:bg-[#E6AF4B] selection:text-[#020617]"),
        blueprintBg: isSQC ? "bg-[#0F1629]" : (isMTB ? "bg-black/20" : "bg-[#0F1629]"),
        blueprintGrid: isSQC ? "border-[#C5A572]/20" : (isMTB ? "border-[#FFBE18]/20" : "border-[#E6AF4B]/20"),
    };

    // 3. Logic Points
    const getLogicPoints = (): GeometricPoint[] => {
        if (isSQC) return [
            { id: "01", title: "Otoritas Terstruktur", desc: "Logo ini tidak menonjolkan ekspresi personal, melainkan ketenangan institusional. Bentuk geometris yang kaku melambangkan disiplin.", icon: <Shield className="w-4 h-4" /> },
            { id: "02", title: "Empat Pilar Vertikal", desc: "Merepresentasikan empat saudara pendiri, berdiri sejajar dan setara. Integritas, Tanggung Jawab, dan Arah yang konsisten.", icon: <Users className="w-4 h-4" /> },
            { id: "03", title: "Geometri Mahkota", desc: "Keselarasan lebih penting daripada kompleksitas. Struktur atas melambangkan tata kelola terpadu dan visi yang terpusat.", icon: <Crown className="w-4 h-4" /> },
            { id: "04", title: "Lingkaran Pelindung", desc: "Kekuatan yang menjaga, bukan mendominasi. Lingkaran adalah simbol perlindungan aset dan keberlanjutan lintas generasi.", icon: <Circle className="w-4 h-4" /> },
            { id: "05", title: "Disiplin Garis", desc: "Satu sistem, satu aturan. Konsistensi ketebalan garis melambangkan keadilan struktural dan transparansi proses.", icon: <Ruler className="w-4 h-4" /> }
        ];
        if (isMTB) return [
            { id: "01", title: "Struktur Terbuka", desc: "Bentuk logo menyerupai bangunan terbuka dengan atap segitiga mengarah ke atas melambangkan tempat terbitnya cahaya—ruang awal di mana energi pertama kali hadir.", icon: <Layers className="w-4 h-4" /> },
            { id: "02", title: "Tiga Pilar Fondasi", desc: "Merepresentasikan fondasi energi yang nyata: alam, bumi, dan sumber daya manusia. Berdiri sejajar menandakan keseimbangan antara potensi dan ketahanan.", icon: <Ruler className="w-4 h-4" /> },
            { id: "03", title: "Momentum Terbit", desc: "Atap segitiga yang mengarah ke atas melambangkan arah timur dan momentum terbit: proses awal yang tenang dan terarah menuju puncak kemakmuran.", icon: <Maximize2 className="w-4 h-4" /> },
            { id: "04", title: "Konektivitas Bumi", desc: "Bentuk terbuka di bagian bawah menandakan keterhubungan dengan bumi—bahwa energi di sini bersifat real, membumi, dan berbasis aset nyata.", icon: <Activity className="w-4 h-4" /> },
            { id: "05", title: "Disiplin Eksplorasi", desc: "Garis geometris yang sederhana menegaskan disiplin dan kehati-hatian dalam fase eksplorasi, di mana nilai potensi dijaga dengan penuh tanggung jawab.", icon: <Compass className="w-4 h-4" /> }
        ];
        if (isMRE) return [
            { id: "0I", title: "The Shield (Perisai)", desc: "Simbol perlindungan dan tanggung jawab mutlak.", icon: <Shield className="w-4 h-4" /> },
            { id: "0II", title: "Vertical Authority", desc: "Satu garis tegas. Kebijakan mengalir dari atas ke bawah.", icon: <Anchor className="w-4 h-4" /> },
            { id: "0III", title: "Balanced Power", desc: "Keseimbangan antara Hak (Eksploitasi) dan Kewajiban (Konservasi).", icon: <Scale className="w-4 h-4" /> },
            { id: "0IV", title: "The Crown Jewel", desc: "Berlian di puncak sebagai simbol Legitimasi sah.", icon: <Crown className="w-4 h-4" /> },
            { id: "0V", title: "Layered Defense", desc: "Energi tidak boleh telanjang; ia harus dibalut hukum.", icon: <Layout className="w-4 h-4" /> }
        ];
        return [];
    };

    return (
        <div className={`flex flex-col w-full min-h-full ${theme.bg} text-white font-sans ${theme.selection} relative overflow-y-auto no-scrollbar scroll-smooth`}>

            {/* Background Grid Pattern */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }} />

            {/* THE SOVEREIGN LINE (MRE Only) */}
            {isMRE && (
                <>
                    <div className="absolute left-8 lg:left-20 top-0 bottom-0 w-px bg-white/10 z-0" />
                    <div className="absolute right-8 lg:right-20 top-0 bottom-0 w-px bg-white/10 z-0" />
                </>
            )}

            {/* HEADER SECTION - Wide & Industrial */}
            <header className={`w-full pt-16 pb-12 px-12 lg:px-20 border-b border-white/5 relative z-10 bg-black/10`}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <div className="space-y-6 max-w-2xl">
                        <div className={`inline-flex items-center gap-3 px-3 py-1 bg-white/5 rounded border border-white/10 text-[10px] font-mono tracking-widest uppercase ${theme.accent} font-bold`}>
                            <div className={`w-1.5 h-1.5 ${theme.accentBg} rounded-full animate-pulse`} />
                            Technical Specification V1.0
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white uppercase">
                            Geometric<br />
                            <span className={theme.accent}>System</span>
                        </h1>
                        <p className="text-slate-400 font-light text-lg leading-relaxed max-w-xl">
                            {isSQC && '"Safar Qawwiy Corp adalah sumbu utama yang menjaga kestabilan seluruh ekosistem grup. Ini adalah tempat di mana orientasi ditetapkan dan nilai-nilai luhur dijaga dengan presisi absolut."'}
                            {isMTB && "Matahari Timur Bumi adalah entitas yang merepresentasikan fase awal perjalanan nilai dalam grup: titik lahir energi, potensi, dan daya dasar yang akan menopang seluruh struktur berikutnya."}
                            {isMRE && '"Keadilan membutuhkan struktur. Setiap garis dalam identitas Mataram Royal Energi ditarik untuk memastikan satu hal: Kepatuhan Nilai."'}
                        </p>
                    </div>

                    <div className="flex flex-col items-end gap-2 text-right">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Project Identity</span>
                        <div className="text-xl font-bold text-white uppercase">{brand.name}</div>
                        <div className="h-px w-32 bg-white/20 my-2" />
                        <div className="flex gap-4">
                            {technicalMetrics.map((m, i) => (
                                <div key={i} className="flex flex-col items-end">
                                    <span className="text-[8px] uppercase text-slate-500 tracking-wider font-bold">{m.label}</span>
                                    <span className={`text-xs font-mono ${theme.accent}`}>{m.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 w-full max-w-[1800px] mx-auto py-20 px-8 lg:px-20 relative z-10">

                {/* BLUEPRINT SECTION - Split Layout */}
                <div className="flex flex-col xl:flex-row gap-0 items-stretch border border-white/10 bg-[#0B1221] shadow-2xl">

                    {/* LEFT: THE BLUEPRINT VISUAL */}
                    <div className="xl:w-[55%] relative border-r border-white/10 bg-[#020617]">
                        <div className="sticky top-0 w-full aspect-square border-b border-white/10 lg:border-b-0 flex items-center justify-center relative group overflow-hidden bg-[#0F1629]">
                            {/* Decorative Technical Guides */}
                            <div className="absolute top-8 left-8 p-3 border border-white/10 bg-black/20 text-[10px] font-mono text-slate-500 z-20">
                                COORDINATE SYSTEM<br />
                                X: {isSQC ? "104.22" : (isMTB ? "112.45" : "118.04")} // Y: {isSQC ? "390.11" : (isMTB ? "382.90" : "402.11")}
                            </div>
                            <div className={`absolute inset-x-0 top-1/2 h-px bg-white/5 border-t border-dashed ${theme.blueprintGrid}`} />
                            <div className={`absolute inset-y-0 left-1/2 w-px bg-white/5 border-l border-dashed ${theme.blueprintGrid}`} />

                            <div className="relative z-10 w-full h-full p-12">
                                <div className={`absolute inset-0 ${theme.accentBg} opacity-[0.03] blur-3xl rounded-full`} />
                                <Image
                                    src={brand.logos.geometric}
                                    alt={`${brand.name} Geometric Blueprint`}
                                    width={800}
                                    height={800}
                                    className="w-full h-full object-contain drop-shadow-2xl contrast-110 group-hover:scale-[1.02] transition-all duration-700 brightness-110"
                                    unoptimized
                                />
                                <div className={`absolute inset-0 border ${theme.blueprintGrid} rounded-full scale-110 opacity-30 m-12`} />
                            </div>

                            <div className={`absolute bottom-8 right-8 text-[10px] font-mono ${theme.accent} tracking-widest z-20`}>
                                ∅ PRECISION GRID
                            </div>
                        </div>
                        <div className="flex justify-between mt-4 text-[10px] font-mono text-white/20 uppercase tracking-widest p-4 pb-8">
                            <span>Ref: BLUEPRINT-{brand.id.toUpperCase()}-GEO</span>
                            <span>Scale: {isSQC ? "1:1.2" : (isMTB ? "1:1.0" : "1:1.618")}</span>
                        </div>
                    </div>

                    {/* RIGHT: THE LOGIC */}
                    <div className="xl:w-[45%] p-12 lg:p-16 bg-[#0B1221] flex flex-col justify-center space-y-12">
                        <div className={`space-y-6 border-l-4 ${theme.accentBg.replace('bg-', 'border-')} pl-8`}>
                            <div className="flex items-center gap-3 text-white">
                                {isMRE ? <ScrollText className={`w-5 h-5 ${theme.accent}`} /> : <Compass className={`w-5 h-5 ${theme.accent}`} />}
                                <h3 className="text-xl font-bold uppercase tracking-widest font-serif text-white uppercase tracking-tighter">
                                    {isMRE ? "The Logic of State" : "Logika Geometri"}
                                </h3>
                            </div>
                            <p className="text-white/70 leading-relaxed font-sans text-lg">
                                {isSQC && '"Setiap tarikan garis adalah batasan adab, dan setiap sudut adalah pilar kekuatan yang tak tergoyahkan."'}
                                {isMTB && '"Struktur yang menampung cahaya, memberikan ruang bagi energi untuk tumbuh secara terukur dan berpijak pada realitas bumi."'}
                                {isMRE && '"Otoritas bukan tentang kekuatan, tapi tentang legitimasi."'}
                            </p>
                        </div>

                        <div className="space-y-4">
                            {getLogicPoints().map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group"
                                >
                                    <span className="font-mono text-white/20 font-bold text-sm w-8">{item.id}</span>
                                    <div className="space-y-1">
                                        <h4 className={`text-sm font-bold text-white uppercase tracking-wide group-hover:${theme.accent} transition-colors`}>{item.title}</h4>
                                        <p className="text-sm text-white/50 leading-relaxed font-sans">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* DIVIDER/CONNECTOR */}
                <div className="w-px h-24 bg-white/20 mx-auto" />

                {/* BOTTOM SECTION - Switch based on Brand */}
                {isSQC && (
                    <div className="space-y-12">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${theme.accent}`}>Color Logic</span>
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-black uppercase italic tracking-tighter text-center mb-12 text-white">Otoritas & Kepercayaan</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-[#151b2e] border border-white/5 p-10 flex flex-col items-center justify-between text-center h-64 text-white shadow-xl group hover:border-[#C5A572]/50 transition-colors">
                                <div><h4 className="text-3xl font-black uppercase italic">Deep Navy</h4><p className="text-slate-400 text-sm mt-4 font-light">Stabilitas & Kewibawaan Institusional.</p></div>
                                <span className="text-[10px] font-mono opacity-30 tracking-[0.3em] uppercase">HEX: #1A1F2B</span>
                            </div>
                            <div className="bg-[#C5A572] p-10 flex flex-col items-center justify-between text-center h-64 text-[#0B1221] shadow-xl group hover:brightness-110 transition-all">
                                <div><h4 className="text-3xl font-black uppercase italic">Muted Gold</h4><p className="text-[#0B1221]/70 text-sm mt-4 font-medium">Nilai, Amanah & Tanggung Jawab.</p></div>
                                <span className="text-[10px] font-mono opacity-40 tracking-[0.3em] uppercase">HEX: #C5A572</span>
                            </div>
                        </div>
                    </div>
                )}

                {isMTB && (
                    <div className="space-y-12">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${theme.accent}`}>Color Logic</span>
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-black uppercase italic tracking-tighter text-center mb-12 text-white">Genesis Palette</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-[#1A1816] border border-white/10 p-12 flex flex-col items-center justify-center text-center space-y-6 shadow-xl group hover:border-[#FFBE18]/30 transition-colors">
                                <h4 className="text-3xl font-black uppercase italic">Deep Charcoal</h4><p className="text-slate-400 text-sm font-light max-w-xs leading-relaxed">Melambangkan kedalaman bumi dan stabilitas pilar fondasi.</p>
                                <span className="text-[10px] font-mono opacity-30 tracking-[0.3em] uppercase">HEX: #1A1816</span>
                            </div>
                            <div className="bg-[#FFBE18] p-12 flex flex-col items-center justify-center text-center space-y-6 shadow-xl group hover:brightness-110 transition-all">
                                <h4 className="text-3xl font-black uppercase italic text-[#1A1816]">Sun Gold</h4><p className="text-[#1A1816]/80 text-sm font-medium max-w-xs leading-relaxed">Melambangkan cahaya awal, nilai potensi, dan energi yang terbit dengan murni.</p>
                                <span className="text-[10px] font-mono opacity-40 tracking-[0.3em] uppercase text-[#1A1816]">HEX: #FFBE18</span>
                            </div>
                        </div>
                    </div>
                )}

                {isMRE && (
                    <div className="w-full border-y border-white/10 relative bg-white/[0.03]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 divide-y sm:divide-y-0 relative z-10">
                            {[
                                { title: "Gold", col: "#E6AF4B", text: "Gold", desc: '"Mewakili awal energi dan nilai murni yang harus dijaga keberlangsungan."' },
                                { title: "Teal", col: "#006786", text: "Teal", desc: '"Elemen transisi yang melambangkan fleksibilitas dan pergerakan energi yang terukur."' },
                                { title: "Navy", col: "#1A1F2B", text: "Navy", desc: '"Sumbu utama otoritas dan stabilitas sistem yang menopang seluruh legitimasi."' },
                                { title: "Maroon", col: "#8B2323", text: "Maroon", desc: '"Marwah dan martabat perlindungan. Simbol keberanian dalam menjaga amanah."' }
                            ].map((p, i) => (
                                <div key={i} className={`p-12 flex flex-col items-center justify-center text-center space-y-6 relative group hover:bg-[${p.col}] hover:text-white transition-all duration-500 bg-[#0B1221]/40`}>
                                    <div className={`w-12 h-12 bg-[${p.col}] rounded-sm shadow-lg`} style={{ backgroundColor: p.col }} />
                                    <h4 className="text-2xl font-black uppercase tracking-widest">{p.text}</h4>
                                    <p className="opacity-70 text-xs font-sans font-medium max-w-[180px] leading-relaxed">{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* FINAL STATEMENT BLOCK */}
                <div className="h-24" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    className={`relative p-12 lg:p-20 ${isMRE ? 'bg-[#0B1221] border border-white/10' : 'bg-white text-[#0B1221]'} shadow-2xl overflow-hidden`}
                >
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none overflow-hidden text-[8px] font-mono leading-none rotate-12">
                        {Array(50).fill("INTERNAL ONLY • CONFIDENTIAL • ").map((s, i) => <div key={i} className="whitespace-nowrap mb-2">{s}</div>)}
                    </div>

                    <div className="relative z-10 space-y-12 flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 text-red-600 border border-red-100 rounded-full text-[10px] font-black uppercase tracking-widest">
                            <Lock className="w-3 h-3" /> Internal Directive
                        </div>

                        <h3 className={`text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-[0.9] ${isMRE ? 'text-white' : 'text-[#0B1221]'}`}>
                            {isSQC && <>Narasi Nilai <span className="text-blue-600">Internal</span></>}
                            {isMTB && <>Titik Awal <span className={theme.accent}>Wujud</span></>}
                            {isMRE && <>Menjaga Martabat <span className={theme.accent}>Energi</span></>}
                        </h3>

                        <p className={`text-lg lg:text-xl font-light leading-relaxed max-w-3xl ${isMRE ? 'text-white/70' : 'text-slate-600'}`}>
                            {isSQC && "Safar Qawiyy berarti Perjalanan yang Kuat dan Terjaga. Ini adalah kompas bagi keluarga pendiri—berbisnis bukan dengan ekspansi kasar, melainkan melalui keterhubungan dan presisi struktural."}
                            {isMTB && "Matahari Timur Bumi memosisikan diri sebagai titik awal wujud: tempat energi dikenali, dihormati, dan dipersiapkan sebelum diarahkan ke fase penjagaan."}
                            {isMRE && "Kami adalah otoritas yang hadir untuk melindungi nilai, bukan sekadar menguasai aset. Kehormatan energi adalah prioritas tertinggi."}
                        </p>
                    </div>
                </motion.div>

                <div className="h-24" />
            </main>
        </div>
    );
}
