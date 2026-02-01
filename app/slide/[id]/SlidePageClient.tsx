"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import SlideDeck from "@/components/SlideDeck";
import IntroSlide from "@/components/slides/IntroSlide";
import ArchitectureSlide from "@/components/slides/ArchitectureSlide";
import VisualDnaGeometricSlide from "@/components/slides/VisualDnaGeometricSlide";
import VisualDnaNarrativeSlide from "@/components/slides/VisualDnaNarrativeSlide";
import PhilosophySlide from "@/components/slides/PhilosophySlide";
import BrandKitSpecsSlide from "@/components/slides/BrandKitSpecsSlide";
import LogoUsageSlide from "@/components/slides/LogoUsageSlide";
import LogoImplementationSlide from "@/components/slides/LogoImplementationSlide";
import ClosingSlide from "@/components/slides/ClosingSlide";
import { brands } from "@/data/brands";

export default function SlidePageClient() {
    const params = useParams();
    const router = useRouter();
    const slideId = params?.id ? parseInt(params.id as string, 10) : 0;

    // Build slides in presentation order
    const slides: React.ReactNode[] = [
        // Opening section
        <IntroSlide key="intro" />,                           // 0: Welcome
        <ArchitectureSlide key="architecture" />,             // 1: Brand Architecture
    ];

    // Generate slides for each brand
    brands.forEach((brand) => {
        // Philosophy slide for each brand
        slides.push(<PhilosophySlide key={`${brand.id}-philosophy`} brand={brand} />);

        // Visual DNA slides
        slides.push(<VisualDnaNarrativeSlide key={`${brand.id}-dna-narrative`} brand={brand} />);
        slides.push(<VisualDnaGeometricSlide key={`${brand.id}-dna-geometric`} brand={brand} />);

        // Brand kit slides
        slides.push(<BrandKitSpecsSlide key={`${brand.id}-specs`} brand={brand} />);
        slides.push(<LogoUsageSlide key={`${brand.id}-usage`} brand={brand} variant="full-shape" />);
        slides.push(<LogoImplementationSlide key={`${brand.id}-implementation`} brand={brand} variant="full-shape" />);
    });

    // Closing section
    slides.push(<ClosingSlide key="closing" />);

    // Redirect to first slide if invalid
    useEffect(() => {
        if (isNaN(slideId) || slideId < 0 || slideId >= slides.length) {
            router.replace("/slide/0");
        }
    }, [slideId, slides.length, router]);

    return (
        <main className="w-screen h-screen">
            <SlideDeck slides={slides} initialSlide={slideId} />
        </main>
    );
}
