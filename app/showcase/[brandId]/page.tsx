import { brands } from "@/data/brands";
import BrandComparisonPageClient from "./BrandComparisonPageClient";

// Generate static paths for all brands
export function generateStaticParams() {
    return brands.map((brand) => ({
        brandId: brand.id,
    }));
}

export default function BrandComparisonPage() {
    return <BrandComparisonPageClient />;
}
