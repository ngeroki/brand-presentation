"use client";

import { useState } from "react";
import { Download, FileArchive, Loader2, FolderOpen, Image as ImageIcon, FileCode } from "lucide-react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { SQCBackground, SQCTag } from "@/styles/sqc-theme";

type CategoryType = 'full-shape' | 'geometric';

// Define the folder structure for each category - matching actual source folders
const categoryConfig: Record<CategoryType, {
    title: string;
    description: string;
    subfolders: { name: string; path: string; files: string[]; format: string }[];
}> = {
    'full-shape': {
        title: 'Full Shape Logo',
        description: 'Logo lengkap dengan bentuk penuh untuk semua brand',
        subfolders: [
            {
                name: 'Color With Background',
                path: '/logos/full-shape/color-withbg',
                files: ['sqc.png', 'mtb.png', 'mre.png'],
                format: 'PNG'
            },
            {
                name: 'Color No Background',
                path: '/logos/full-shape/color-nobg',
                files: ['sqc.png', 'mtb.png', 'mre.png'],
                format: 'PNG'
            },
            {
                name: 'White No Background',
                path: '/logos/full-shape/white-nobg',
                files: ['sqc.png', 'mtb.png', 'mre.png'],
                format: 'PNG'
            },
            {
                name: 'Black No Background',
                path: '/logos/full-shape/black-nobg',
                files: ['sqc.png', 'mtb.png', 'mre.png'],
                format: 'PNG'
            },
            {
                name: 'SVG Vector',
                path: '/logos/full-shape/svg',
                files: ['sqc-color.svg', 'sqc-white.svg', 'sqc-black.svg', 'mtb-color.svg', 'mtb-white.svg', 'mtb-black.svg', 'mre-color.svg', 'mre-white.svg', 'mre-black.svg'],
                format: 'SVG'
            },
        ]
    },
    'geometric': {
        title: 'Geometric Logo',
        description: 'Logo geometris minimalis untuk semua brand',
        subfolders: [
            {
                name: 'Color With Background',
                path: '/logos/geometric/color-withbg',
                files: ['sqc.png', 'mtb.png', 'Mataram Royal Energy.png'],
                format: 'PNG'
            },
            {
                name: 'Color No Background',
                path: '/logos/geometric/color-nobg',
                files: ['sqc.png', 'mtb.png', 'mre.png'],
                format: 'PNG'
            },
            {
                name: 'White No Background',
                path: '/logos/geometric/white-nobg',
                files: ['sqc.png', 'mtb.png', 'mre.png'],
                format: 'PNG'
            },
            {
                name: 'Black No Background',
                path: '/logos/geometric/black-nobg',
                files: ['sqc.png', 'mtb.png', 'mre.png'],
                format: 'PNG'
            },
            {
                name: 'SVG Vector',
                path: '/logos/geometric/svg',
                files: ['sqc-color.svg', 'sqc-white.svg', 'sqc-black.svg', 'mtb-color.svg', 'mtb-white.svg', 'mtb-black.svg', 'mre-color.svg', 'mre-white.svg', 'mre-black.svg'],
                format: 'SVG'
            },
        ]
    }
};

export default function DownloadPage() {
    const [isDownloading, setIsDownloading] = useState<CategoryType | 'all' | null>(null);
    const [downloadProgress, setDownloadProgress] = useState("");

    // Download a specific category
    const downloadCategory = async (category: CategoryType) => {
        setIsDownloading(category);
        setDownloadProgress("Mempersiapkan file...");

        try {
            const zip = new JSZip();
            const config = categoryConfig[category];

            for (const subfolder of config.subfolders) {
                const folder = zip.folder(subfolder.name);

                for (const file of subfolder.files) {
                    const url = `${subfolder.path}/${encodeURIComponent(file)}`;
                    setDownloadProgress(`Mengunduh ${subfolder.name}/${file}...`);

                    try {
                        const response = await fetch(url);
                        if (response.ok) {
                            const blob = await response.blob();
                            folder?.file(file, blob);
                        }
                    } catch (error) {
                        console.error(`Failed to fetch ${url}:`, error);
                    }
                }
            }

            setDownloadProgress("Membuat file ZIP...");
            const content = await zip.generateAsync({ type: "blob" });

            const timestamp = new Date().toISOString().slice(0, 10);
            saveAs(content, `SQC-${config.title.replace(/\s+/g, '-')}-${timestamp}.zip`);

            setDownloadProgress("Selesai!");
            setTimeout(() => {
                setIsDownloading(null);
                setDownloadProgress("");
            }, 1500);

        } catch (error) {
            console.error("Download error:", error);
            alert("Terjadi kesalahan saat mengunduh. Silakan coba lagi.");
            setIsDownloading(null);
            setDownloadProgress("");
        }
    };

    // Download all assets
    const downloadAll = async () => {
        setIsDownloading('all');
        setDownloadProgress("Mempersiapkan semua file...");

        try {
            const zip = new JSZip();

            for (const [category, config] of Object.entries(categoryConfig)) {
                const categoryFolder = zip.folder(config.title);

                for (const subfolder of config.subfolders) {
                    const folder = categoryFolder?.folder(subfolder.name);

                    for (const file of subfolder.files) {
                        const url = `${subfolder.path}/${encodeURIComponent(file)}`;
                        setDownloadProgress(`${config.title}/${subfolder.name}/${file}...`);

                        try {
                            const response = await fetch(url);
                            if (response.ok) {
                                const blob = await response.blob();
                                folder?.file(file, blob);
                            }
                        } catch (error) {
                            console.error(`Failed to fetch ${url}:`, error);
                        }
                    }
                }
            }

            setDownloadProgress("Membuat file ZIP...");
            const content = await zip.generateAsync({ type: "blob" });

            const timestamp = new Date().toISOString().slice(0, 10);
            saveAs(content, `SQC-Complete-Brand-Assets-${timestamp}.zip`);

            setDownloadProgress("Selesai!");
            setTimeout(() => {
                setIsDownloading(null);
                setDownloadProgress("");
            }, 1500);

        } catch (error) {
            console.error("Download error:", error);
            alert("Terjadi kesalahan saat mengunduh. Silakan coba lagi.");
            setIsDownloading(null);
            setDownloadProgress("");
        }
    };

    // Calculate total files
    const getTotalFiles = (config: typeof categoryConfig['full-shape']) => {
        return config.subfolders.reduce((sum, sf) => sum + sf.files.length, 0);
    };

    return (
        <div className="relative min-h-full bg-white text-zinc-900">
            <SQCBackground />

            {/* Main Content */}
            <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 sm:px-8 lg:px-12 py-8 sm:py-12">

                {/* Hero Header */}
                <header className="mb-12 sm:mb-16 text-center">
                    <SQCTag className="mb-4 mx-auto">Download Center</SQCTag>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1221] tracking-tighter mb-4">
                        Brand <span className="text-[#C5A572]">Assets</span>
                    </h1>
                    <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
                        Unduh semua logo dan asset brand dalam format PNG dan SVG berkualitas tinggi.
                    </p>
                </header>

                {/* Download All Section */}
                <section className="mb-12">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 bg-gradient-to-br from-[#0B1221] to-[#1E293B] rounded-3xl border border-white/10 shadow-2xl">
                        <div className="text-center sm:text-left">
                            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Complete Brand Kit</h2>
                            <p className="text-white/60 text-sm">Semua logo Full Shape & Geometric (PNG + SVG)</p>
                        </div>
                        <button
                            onClick={downloadAll}
                            disabled={isDownloading !== null}
                            className="flex items-center gap-3 bg-[#C5A572] text-[#0B1221] px-8 py-4 rounded-xl font-bold hover:bg-[#D4B682] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px] justify-center"
                        >
                            {isDownloading === 'all' ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span className="text-sm truncate max-w-[150px]">{downloadProgress}</span>
                                </>
                            ) : (
                                <>
                                    <FileArchive className="w-5 h-5" />
                                    Download All (ZIP)
                                </>
                            )}
                        </button>
                    </div>
                </section>

                {/* Two Category Cards */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {/* Full Shape Card */}
                    <CategoryCard
                        category="full-shape"
                        config={categoryConfig['full-shape']}
                        isDownloading={isDownloading === 'full-shape'}
                        downloadProgress={downloadProgress}
                        onDownload={() => downloadCategory('full-shape')}
                        disabled={isDownloading !== null}
                        totalFiles={getTotalFiles(categoryConfig['full-shape'])}
                    />

                    {/* Geometric Card */}
                    <CategoryCard
                        category="geometric"
                        config={categoryConfig['geometric']}
                        isDownloading={isDownloading === 'geometric'}
                        downloadProgress={downloadProgress}
                        onDownload={() => downloadCategory('geometric')}
                        disabled={isDownloading !== null}
                        totalFiles={getTotalFiles(categoryConfig['geometric'])}
                    />
                </section>

                {/* Info Section */}
                <section className="mt-12 sm:mt-16 p-6 sm:p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <h3 className="text-lg font-bold text-[#0B1221] mb-4">Isi Paket Download</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        <InfoItem icon={<ImageIcon className="w-4 h-4" />} title="Color + BG" desc="Logo berwarna dengan background" />
                        <InfoItem icon={<ImageIcon className="w-4 h-4" />} title="Color No BG" desc="Logo berwarna transparan" />
                        <InfoItem icon={<ImageIcon className="w-4 h-4" />} title="White No BG" desc="Logo putih transparan" />
                        <InfoItem icon={<ImageIcon className="w-4 h-4" />} title="Black No BG" desc="Logo hitam transparan" />
                        <InfoItem icon={<FileCode className="w-4 h-4" />} title="SVG Vector" desc="Format vektor untuk cetak" />
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-12 pt-8 border-t border-zinc-200 text-center">
                    <p className="text-sm text-zinc-400">
                        © 2026 Safar Qawiyy Corp. All rights reserved.
                    </p>
                </footer>
            </div>
        </div>
    );
}

// Category Card Component
function CategoryCard({
    category,
    config,
    isDownloading,
    downloadProgress,
    onDownload,
    disabled,
    totalFiles,
}: {
    category: CategoryType;
    config: typeof categoryConfig['full-shape'];
    isDownloading: boolean;
    downloadProgress: string;
    onDownload: () => void;
    disabled: boolean;
    totalFiles: number;
}) {
    // Get preview image URLs for all 3 brands
    const previewUrls = category === 'full-shape'
        ? [
            '/logos/full-shape/color-withbg/sqc.png',
            '/logos/full-shape/color-withbg/mtb.png',
            '/logos/full-shape/color-withbg/mre.png',
        ]
        : [
            '/logos/geometric/color-withbg/sqc.png',
            '/logos/geometric/color-withbg/mtb.png',
            '/logos/geometric/color-withbg/sqc.png', // Using sqc as fallback
        ];

    return (
        <div className="bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
            {/* Preview Images - Stacked Cards */}
            <div className="relative h-52 sm:h-64 bg-gradient-to-br from-zinc-100 to-zinc-50 flex items-center justify-center p-6 overflow-hidden">
                <div className="flex items-center justify-center">
                    {previewUrls.map((src, index) => (
                        <div
                            key={index}
                            className="w-28 h-28 sm:w-36 sm:h-36 rounded-xl overflow-hidden shadow-lg bg-white border border-zinc-100 flex-shrink-0"
                            style={{
                                transform: `rotate(${(index - 1) * 6}deg)`,
                                zIndex: index === 1 ? 10 : 5,
                                marginLeft: index > 0 ? '-20px' : '0',
                            }}
                        >
                            <img
                                src={src}
                                alt={`Preview ${index + 1}`}
                                className="w-full h-full object-contain p-2"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#0B1221] rounded-xl flex items-center justify-center flex-shrink-0">
                        <FolderOpen className="w-6 h-6 text-[#C5A572]" />
                    </div>
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0B1221] mb-1">{config.title}</h3>
                        <p className="text-sm text-zinc-500">{config.description}</p>
                    </div>
                </div>

                {/* Subfolder List */}
                <div className="mb-6 space-y-2">
                    {config.subfolders.map((subfolder, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zinc-600">
                            <div className={`w-1.5 h-1.5 rounded-full ${subfolder.format === 'SVG' ? 'bg-emerald-500' : 'bg-[#C5A572]'}`} />
                            <span className="flex-1">{subfolder.name}</span>
                            <span className="text-xs text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded">{subfolder.format}</span>
                            <span className="text-zinc-400">{subfolder.files.length} files</span>
                        </div>
                    ))}
                </div>

                {/* Total Files Badge */}
                <div className="mb-4 text-center">
                    <span className="text-xs text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">
                        Total: {totalFiles} files
                    </span>
                </div>

                {/* Download Button */}
                <button
                    onClick={onDownload}
                    disabled={disabled}
                    className="w-full flex items-center justify-center gap-2 bg-[#0B1221] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#1E293B] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isDownloading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span className="text-sm truncate">{downloadProgress}</span>
                        </>
                    ) : (
                        <>
                            <Download className="w-5 h-5" />
                            Download {config.title}
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}

// Info Item Component
function InfoItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
    return (
        <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-zinc-200 text-zinc-600 flex-shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-zinc-900 text-sm">{title}</h4>
                <p className="text-xs text-zinc-500">{desc}</p>
            </div>
        </div>
    );
}
