import SlidePageClient from "./SlidePageClient";
import { brands } from "@/data/brands";

// Generate static paths for all slide IDs
export function generateStaticParams() {
    // Calculate total number of slides
    // 2 base slides (intro + architecture) + 6 slides per brand + 1 closing
    const slidesPerBrand = 6;
    const baseSlides = 2;
    const closingSlides = 1;
    const totalSlides = baseSlides + (brands.length * slidesPerBrand) + closingSlides;

    return Array.from({ length: totalSlides }, (_, i) => ({
        id: i.toString(),
    }));
}

export default function SlidePage() {
    return <SlidePageClient />;
}
