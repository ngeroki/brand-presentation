"use client";

import { Download, FileArchive, Image as ImageIcon } from "lucide-react";
import { brands } from "@/data/brands";
import Navbar from "@/components/Navbar";

export default function DownloadPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="px-12 py-20 border-b border-zinc-50">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl font-bold text-zinc-900 mb-4">Brand Assets</h1>
                    <p className="text-xl text-zinc-500 max-w-2xl">
                        Download logo files, color palettes, and brand guidelines for all entities in the Safar Qawiyy Corp ecosystem.
                    </p>
                </div>
            </section>

            {/* Download All Section */}
            <section className="px-12 py-12 bg-zinc-50 border-b border-zinc-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm">
                        <div>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-2">Complete Brand Kit</h2>
                            <p className="text-zinc-500">All logos, guidelines, and assets in one package</p>
                        </div>
                        <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-md font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                            <FileArchive className="w-5 h-5" />
                            Download All (ZIP)
                        </button>
                    </div>
                </div>
            </section>

            {/* Individual Brand Downloads */}
            <section className="px-12 py-20">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-zinc-900 mb-12">Individual Brands</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {brands.map((brand) => (
                            <div
                                key={brand.id}
                                className="bg-white border border-zinc-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                {/* Brand Header */}
                                <div className="p-8 border-b border-zinc-50">
                                    <h3 className="text-xl font-bold text-zinc-900 mb-1">{brand.name}</h3>
                                    <p className="text-sm text-zinc-500">{brand.industry}</p>
                                </div>

                                {/* Logo Previews */}
                                <div className="p-6 bg-zinc-50">
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="aspect-square bg-white rounded-lg border border-zinc-200 flex items-center justify-center p-4">
                                            <div className="text-xs text-zinc-400 text-center">Full Shape<br />Logo</div>
                                        </div>
                                        <div className="aspect-square bg-white rounded-lg border border-zinc-200 flex items-center justify-center p-4">
                                            <div className="text-xs text-zinc-400 text-center">Geometric<br />Logo</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Download Options */}
                                <div className="p-6 space-y-3">
                                    <button className="w-full flex items-center justify-between px-4 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors">
                                        <span className="text-sm font-medium">Full Shape Logos</span>
                                        <Download className="w-4 h-4" />
                                    </button>
                                    <button className="w-full flex items-center justify-between px-4 py-3 bg-zinc-100 text-zinc-900 rounded-lg hover:bg-zinc-200 transition-colors">
                                        <span className="text-sm font-medium">Geometric Logos</span>
                                        <Download className="w-4 h-4" />
                                    </button>
                                    <button className="w-full flex items-center justify-between px-4 py-3 border border-zinc-200 text-zinc-600 rounded-lg hover:bg-zinc-50 transition-colors">
                                        <span className="text-sm font-medium">Brand Guidelines (PDF)</span>
                                        <Download className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* File Formats Info */}
            <section className="px-12 py-12 bg-zinc-50 border-t border-zinc-100">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-lg font-bold text-zinc-900 mb-6">Available Formats</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-zinc-200">
                                <ImageIcon className="w-5 h-5 text-zinc-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-zinc-900 mb-1">SVG</h4>
                                <p className="text-sm text-zinc-500">Vector format, scalable to any size</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-zinc-200">
                                <ImageIcon className="w-5 h-5 text-zinc-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-zinc-900 mb-1">PNG</h4>
                                <p className="text-sm text-zinc-500">High-resolution with transparency</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-zinc-200">
                                <ImageIcon className="w-5 h-5 text-zinc-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-zinc-900 mb-1">EPS</h4>
                                <p className="text-sm text-zinc-500">Professional print-ready format</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="px-12 py-8 border-t border-zinc-100">
                <div className="max-w-7xl mx-auto flex items-center justify-between text-sm text-zinc-400">
                    <p>© 2026 Safar Qawiyy Corp. All rights reserved.</p>
                    <p>Brand Identity System v1.0</p>
                </div>
            </footer>
        </main>
    );
}
