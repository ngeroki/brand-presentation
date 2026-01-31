"use client";

import ArchitectureSlide from "@/components/slides/ArchitectureSlide";
import Image from "next/image";

export default function ShowcaseOverviewPage() {
    return (
        <div className="min-h-full bg-white flex flex-col">
            {/* Architecture Section */}
            <section className="w-full bg-zinc-50">
                <ArchitectureSlide />
            </section>
        </div>
    );
}
