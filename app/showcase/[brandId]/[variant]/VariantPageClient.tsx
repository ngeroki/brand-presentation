"use client";

import { useParams, redirect } from "next/navigation";
import { brands } from "@/data/brands";

// Unified Visual DNA component (handles both variants, including Logo Usage section)
import VisualDnaSlide from "@/components/slides/VisualDnaSlide";

export default function VariantPageClient() {
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

    return (
        <div className="flex flex-col w-full h-full">
            {/* UNIFIED VISUAL DNA - Includes Philosophy, Colors, Logo Usage, and Gallery */}
            <div className="w-full relative shrink-0">
                <VisualDnaSlide brand={brand} variant={variant} />
            </div>
        </div>
    );
}
