"use client";

import { useParams, redirect } from "next/navigation";
import { brands } from "@/data/brands";
import LogoUsageSlide from "@/components/slides/LogoUsageSlide";

// Import Visual DNA Master components
import VisualDnaNarrativeSlide from "@/components/slides/VisualDnaNarrativeSlide";
import VisualDnaGeometricSlide from "@/components/slides/VisualDnaGeometricSlide";

// Generate static paths for all brand/variant combinations
export function generateStaticParams() {
    const variants = ['full-shape', 'geometric'] as const;

    return brands.flatMap((brand) =>
        variants.map((variant) => ({
            brandId: brand.id,
            variant: variant,
        }))
    );
}

export default function VariantPage() {
    const params = useParams();
    const brandId = params?.brandId as string;
    const variantId = params?.variant as string;

    const brand = brands.find((b) => b.id === brandId);

    if (!brand) {
        return <div className="p-12 text-zinc-500">Brand not found.</div>;
    }

    if (!['full-shape', 'geometric'].includes(variantId)) {
        redirect(`/showcase/${brandId}/full-shape`);
    }

    // Type assertion after validation
    const variant = variantId as 'full-shape' | 'geometric';

    // Use consolidated components based on variant
    const VisualDnaComponent = variant === 'geometric' ? VisualDnaGeometricSlide : VisualDnaNarrativeSlide;

    return (
        <div className="flex flex-col w-full h-full"> {/* Long Scroll Container */}

            {/* 1. SECTION: VISUAL DNA */}
            {/* Constraint: These components have h-full or min-h-full, which works well in a stacked column */}
            <div className="w-full relative shrink-0">
                <VisualDnaComponent brand={brand} />
            </div>

            {/* 2. SECTION: LOGO USAGE */}
            {/* Pass variant prop to use transparent logos */}
            <div id="usage" className="w-full relative shrink-0 overflow-hidden">
                <LogoUsageSlide brand={brand} variant={variant} />
            </div>

        </div>
    );
}
