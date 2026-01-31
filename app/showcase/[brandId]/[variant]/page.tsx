import { brands } from "@/data/brands";
import VariantPageClient from "./VariantPageClient";

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
    return <VariantPageClient />;
}
