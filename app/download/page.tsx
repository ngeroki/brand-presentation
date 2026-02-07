"use client";

import { useState } from "react";
import { Download, FileArchive, Image as ImageIcon, ArrowLeft, Check, Loader2 } from "lucide-react";
import { brands, BrandData } from "@/data/brands";
import Link from "next/link";
import Image from "next/image";
import JSZip from "jszip";
import { saveAs } from "file-saver";

type VariantType = 'full-shape' | 'geometric';
type LogoType = 'fullColor' | 'white' | 'black' | 'nobg';

interface SelectedAssets {
    brandId: string;
    variant: VariantType;
    logoTypes: LogoType[];
}

export default function DownloadPage() {
    const [selectedAssets, setSelectedAssets] = useState<SelectedAssets[]>([]);
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadProgress, setDownloadProgress] = useState("");

    // Helper to check if an asset is selected
    const isAssetSelected = (brandId: string, variant: VariantType, logoType: LogoType) => {
        const asset = selectedAssets.find(a => a.brandId === brandId && a.variant === variant);
        return asset?.logoTypes.includes(logoType) || false;
    };

    // Toggle asset selection
    const toggleAsset = (brandId: string, variant: VariantType, logoType: LogoType) => {
        setSelectedAssets(prev => {
            const existingIndex = prev.findIndex(a => a.brandId === brandId && a.variant === variant);

            if (existingIndex === -1) {
                // Add new selection
                return [...prev, { brandId, variant, logoTypes: [logoType] }];
            }

            const existing = prev[existingIndex];
            const logoIndex = existing.logoTypes.indexOf(logoType);

            if (logoIndex === -1) {
                // Add logo type to existing
                const updated = { ...existing, logoTypes: [...existing.logoTypes, logoType] };
                return [...prev.slice(0, existingIndex), updated, ...prev.slice(existingIndex + 1)];
            } else {
                // Remove logo type
                const newLogoTypes = existing.logoTypes.filter(lt => lt !== logoType);
                if (newLogoTypes.length === 0) {
                    // Remove entire selection if no logo types left
                    return [...prev.slice(0, existingIndex), ...prev.slice(existingIndex + 1)];
                }
                const updated = { ...existing, logoTypes: newLogoTypes };
                return [...prev.slice(0, existingIndex), updated, ...prev.slice(existingIndex + 1)];
            }
        });
    };

    // Select all logos for a brand variant
    const selectAllForVariant = (brandId: string, variant: VariantType) => {
        const allLogoTypes: LogoType[] = ['fullColor', 'white', 'black', 'nobg'];
        setSelectedAssets(prev => {
            const existingIndex = prev.findIndex(a => a.brandId === brandId && a.variant === variant);
            const updated = { brandId, variant, logoTypes: allLogoTypes };

            if (existingIndex === -1) {
                return [...prev, updated];
            }
            return [...prev.slice(0, existingIndex), updated, ...prev.slice(existingIndex + 1)];
        });
    };

    // Get logo URL based on selection
    const getLogoUrl = (brand: BrandData, variant: VariantType, logoType: LogoType): string => {
        const isGeo = variant === 'geometric';
        switch (logoType) {
            case 'fullColor':
                return isGeo ? brand.logos.geometric : brand.logos.fullyShape;
            case 'white':
                return isGeo ? brand.logos.transparentGeoWhite : brand.logos.transparentFullWhite;
            case 'black':
                return isGeo ? brand.logos.transparentGeoBlack : brand.logos.transparentFullBlack;
            case 'nobg':
                return isGeo ? brand.logos.nobgGeo : brand.logos.nobgFull;
            default:
                return brand.logos.nobgFull;
        }
    };

    // Download selected assets as ZIP
    const downloadSelectedAssets = async () => {
        if (selectedAssets.length === 0) {
            alert("Pilih minimal satu asset untuk diunduh.");
            return;
        }

        setIsDownloading(true);
        setDownloadProgress("Mempersiapkan file...");

        try {
            const zip = new JSZip();

            for (const asset of selectedAssets) {
                const brand = brands.find(b => b.id === asset.brandId);
                if (!brand) continue;

                const folderName = `${brand.name}/${asset.variant}`;
                const folder = zip.folder(folderName);

                for (const logoType of asset.logoTypes) {
                    const logoUrl = getLogoUrl(brand, asset.variant, logoType);
                    const fileName = `${brand.id}-${asset.variant}-${logoType}.png`;

                    setDownloadProgress(`Mengunduh ${brand.name} - ${logoType}...`);

                    try {
                        const response = await fetch(logoUrl);
                        if (response.ok) {
                            const blob = await response.blob();
                            folder?.file(fileName, blob);
                        }
                    } catch (error) {
                        console.error(`Failed to fetch ${logoUrl}:`, error);
                    }
                }
            }

            setDownloadProgress("Membuat file ZIP...");
            const content = await zip.generateAsync({ type: "blob" });

            const timestamp = new Date().toISOString().slice(0, 10);
            saveAs(content, `SQC-BrandAssets-${timestamp}.zip`);

            setDownloadProgress("Selesai!");
            setTimeout(() => {
                setIsDownloading(false);
                setDownloadProgress("");
            }, 1500);

        } catch (error) {
            console.error("Download error:", error);
            alert("Terjadi kesalahan saat mengunduh. Silakan coba lagi.");
            setIsDownloading(false);
            setDownloadProgress("");
        }
    };

    // Download all assets
    const downloadAllAssets = async () => {
        setIsDownloading(true);
        setDownloadProgress("Mempersiapkan semua file...");

        try {
            const zip = new JSZip();
            const allLogoTypes: LogoType[] = ['fullColor', 'white', 'black', 'nobg'];
            const variants: VariantType[] = ['full-shape', 'geometric'];

            for (const brand of brands) {
                for (const variant of variants) {
                    const folderName = `${brand.name}/${variant}`;
                    const folder = zip.folder(folderName);

                    for (const logoType of allLogoTypes) {
                        const logoUrl = getLogoUrl(brand, variant, logoType);
                        const fileName = `${brand.id}-${variant}-${logoType}.png`;

                        setDownloadProgress(`Mengunduh ${brand.name} - ${variant} - ${logoType}...`);

                        try {
                            const response = await fetch(logoUrl);
                            if (response.ok) {
                                const blob = await response.blob();
                                folder?.file(fileName, blob);
                            }
                        } catch (error) {
                            console.error(`Failed to fetch ${logoUrl}:`, error);
                        }
                    }
                }
            }

            setDownloadProgress("Membuat file ZIP...");
            const content = await zip.generateAsync({ type: "blob" });

            const timestamp = new Date().toISOString().slice(0, 10);
            saveAs(content, `SQC-Complete-BrandKit-${timestamp}.zip`);

            setDownloadProgress("Selesai!");
            setTimeout(() => {
                setIsDownloading(false);
                setDownloadProgress("");
            }, 1500);

        } catch (error) {
            console.error("Download error:", error);
            alert("Terjadi kesalahan saat mengunduh. Silakan coba lagi.");
            setIsDownloading(false);
            setDownloadProgress("");
        }
    };

    const totalSelected = selectedAssets.reduce((sum, a) => sum + a.logoTypes.length, 0);

    return (
        <main className="min-h-screen bg-white flex flex-col">
            {/* Simple Header */}
            <header className="flex items-center justify-between py-4 sm:py-6 px-4 sm:px-12 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-zinc-100">
                <Link href="/showcase" className="flex items-center gap-2 sm:gap-3 group">
                    <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center rotate-45 shadow-lg shadow-blue-200 transition-transform group-hover:scale-110">
                        <div className="w-4 sm:w-5 h-4 sm:h-5 bg-white rounded-sm -rotate-45" />
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="font-black text-base sm:text-xl tracking-tighter text-zinc-900 leading-none">SAFAR QAWIYY</span>
                        <span className="text-[8px] sm:text-[10px] uppercase font-bold text-blue-600 tracking-[0.2em] sm:tracking-[0.3em]">Corporation</span>
                    </div>
                </Link>
                <Link href="/showcase" className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Back to Portal</span>
                </Link>
            </header>

            {/* Hero Section */}
            <section className="px-4 sm:px-12 py-12 sm:py-20 border-b border-zinc-50">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl font-bold text-zinc-900 mb-4">Brand Assets</h1>
                    <p className="text-xl text-zinc-500 max-w-2xl">
                        Pilih dan unduh logo sesuai kebutuhan Anda. Semua asset akan dikemas dalam file ZIP.
                    </p>
                </div>
            </section>

            {/* Download All Section */}
            <section className="px-4 sm:px-12 py-12 bg-zinc-50 border-b border-zinc-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm">
                        <div>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-2">Complete Brand Kit</h2>
                            <p className="text-zinc-500">Semua logo dari semua brand dalam satu paket</p>
                        </div>
                        <button
                            onClick={downloadAllAssets}
                            disabled={isDownloading}
                            className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-md font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isDownloading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <FileArchive className="w-5 h-5" />
                            )}
                            Download All (ZIP)
                        </button>
                    </div>
                </div>
            </section>

            {/* Selection Summary & Download Button */}
            {totalSelected > 0 && (
                <section className="px-4 sm:px-12 py-6 bg-emerald-50 border-b border-emerald-100 sticky top-[72px] z-40">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                {totalSelected}
                            </div>
                            <span className="text-emerald-800 font-medium">asset terpilih</span>
                        </div>
                        <button
                            onClick={downloadSelectedAssets}
                            disabled={isDownloading}
                            className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isDownloading ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    {downloadProgress}
                                </>
                            ) : (
                                <>
                                    <Download className="w-4 h-4" />
                                    Download Terpilih
                                </>
                            )}
                        </button>
                    </div>
                </section>
            )}

            {/* Individual Brand Downloads */}
            <section className="px-4 sm:px-12 py-20">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-zinc-900 mb-12">Pilih Asset per Brand</h2>

                    <div className="space-y-16">
                        {brands.map((brand) => (
                            <div key={brand.id} className="bg-white border border-zinc-100 rounded-3xl overflow-hidden">
                                {/* Brand Header */}
                                <div className="p-8 border-b border-zinc-100 bg-gradient-to-r from-zinc-50 to-white">
                                    <h3 className="text-2xl font-bold text-zinc-900 mb-1">{brand.name}</h3>
                                    <p className="text-sm text-zinc-500">{brand.industry}</p>
                                </div>

                                {/* Variants Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-zinc-100">
                                    {/* Full Shape Variant */}
                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-6">
                                            <h4 className="font-bold text-zinc-900">Full Shape</h4>
                                            <button
                                                onClick={() => selectAllForVariant(brand.id, 'full-shape')}
                                                className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                                            >
                                                Pilih Semua
                                            </button>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            {/* Full Color */}
                                            <LogoCard
                                                label="Full Color"
                                                logoUrl={brand.logos.fullyShape}
                                                bgColor="white"
                                                isSelected={isAssetSelected(brand.id, 'full-shape', 'fullColor')}
                                                onToggle={() => toggleAsset(brand.id, 'full-shape', 'fullColor')}
                                            />
                                            {/* White */}
                                            <LogoCard
                                                label="White"
                                                logoUrl={brand.logos.transparentFullWhite}
                                                bgColor={brand.colors.primary}
                                                isSelected={isAssetSelected(brand.id, 'full-shape', 'white')}
                                                onToggle={() => toggleAsset(brand.id, 'full-shape', 'white')}
                                            />
                                            {/* Black */}
                                            <LogoCard
                                                label="Black"
                                                logoUrl={brand.logos.transparentFullBlack}
                                                bgColor="#F8FAFC"
                                                isSelected={isAssetSelected(brand.id, 'full-shape', 'black')}
                                                onToggle={() => toggleAsset(brand.id, 'full-shape', 'black')}
                                            />
                                            {/* No BG */}
                                            <LogoCard
                                                label="No Background"
                                                logoUrl={brand.logos.nobgFull}
                                                bgColor="white"
                                                isSelected={isAssetSelected(brand.id, 'full-shape', 'nobg')}
                                                onToggle={() => toggleAsset(brand.id, 'full-shape', 'nobg')}
                                            />
                                        </div>
                                    </div>

                                    {/* Geometric Variant */}
                                    <div className="p-8">
                                        <div className="flex items-center justify-between mb-6">
                                            <h4 className="font-bold text-zinc-900">Geometric</h4>
                                            <button
                                                onClick={() => selectAllForVariant(brand.id, 'geometric')}
                                                className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                                            >
                                                Pilih Semua
                                            </button>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            {/* Full Color */}
                                            <LogoCard
                                                label="Full Color"
                                                logoUrl={brand.logos.geometric}
                                                bgColor="white"
                                                isSelected={isAssetSelected(brand.id, 'geometric', 'fullColor')}
                                                onToggle={() => toggleAsset(brand.id, 'geometric', 'fullColor')}
                                            />
                                            {/* White */}
                                            <LogoCard
                                                label="White"
                                                logoUrl={brand.logos.transparentGeoWhite}
                                                bgColor={brand.colors.primary}
                                                isSelected={isAssetSelected(brand.id, 'geometric', 'white')}
                                                onToggle={() => toggleAsset(brand.id, 'geometric', 'white')}
                                            />
                                            {/* Black */}
                                            <LogoCard
                                                label="Black"
                                                logoUrl={brand.logos.transparentGeoBlack}
                                                bgColor="#F8FAFC"
                                                isSelected={isAssetSelected(brand.id, 'geometric', 'black')}
                                                onToggle={() => toggleAsset(brand.id, 'geometric', 'black')}
                                            />
                                            {/* No BG */}
                                            <LogoCard
                                                label="No Background"
                                                logoUrl={brand.logos.nobgGeo}
                                                bgColor="white"
                                                isSelected={isAssetSelected(brand.id, 'geometric', 'nobg')}
                                                onToggle={() => toggleAsset(brand.id, 'geometric', 'nobg')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* File Formats Info */}
            <section className="px-4 sm:px-12 py-12 bg-zinc-50 border-t border-zinc-100">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-lg font-bold text-zinc-900 mb-6">Format yang Tersedia</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-zinc-200">
                                <ImageIcon className="w-5 h-5 text-zinc-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-zinc-900 mb-1">PNG</h4>
                                <p className="text-sm text-zinc-500">Format gambar dengan resolusi tinggi dan transparansi</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-zinc-200">
                                <FileArchive className="w-5 h-5 text-zinc-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-zinc-900 mb-1">ZIP Package</h4>
                                <p className="text-sm text-zinc-500">Semua asset dikemas dalam satu file kompres</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-zinc-200">
                                <Download className="w-5 h-5 text-zinc-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-zinc-900 mb-1">Instant Download</h4>
                                <p className="text-sm text-zinc-500">Unduh langsung ke perangkat Anda</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="px-4 sm:px-12 py-8 border-t border-zinc-100">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
                    <p>© 2026 Safar Qawiyy Corp. All rights reserved.</p>
                    <p>Brand Identity System v1.0</p>
                </div>
            </footer>
        </main>
    );
}

// Logo Card Component
function LogoCard({
    label,
    logoUrl,
    bgColor,
    isSelected,
    onToggle
}: {
    label: string;
    logoUrl: string;
    bgColor: string;
    isSelected: boolean;
    onToggle: () => void;
}) {
    return (
        <button
            onClick={onToggle}
            className={`relative aspect-square rounded-xl border-2 transition-all overflow-hidden group ${isSelected
                    ? 'border-emerald-500 ring-2 ring-emerald-200'
                    : 'border-zinc-200 hover:border-zinc-300'
                }`}
            style={{ backgroundColor: bgColor }}
        >
            {/* Logo Image */}
            <div className="absolute inset-4">
                <Image
                    src={logoUrl}
                    alt={label}
                    fill
                    className="object-contain"
                    unoptimized
                />
            </div>

            {/* Selection Indicator */}
            {isSelected && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                </div>
            )}

            {/* Label */}
            <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm py-2 px-3">
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{label}</span>
            </div>

            {/* Hover Overlay */}
            <div className={`absolute inset-0 transition-opacity ${isSelected ? 'bg-emerald-500/5' : 'bg-zinc-900/0 group-hover:bg-zinc-900/5'}`} />
        </button>
    );
}
