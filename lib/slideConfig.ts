export interface SlideConfig {
    id: number;
    slug: string;
    title: string;
}

export const slideConfigs: SlideConfig[] = [
    { id: 0, slug: "welcome", title: "Welcome - Brand Identity System" },
    { id: 1, slug: "architecture", title: "Brand Architecture - Branded House" },
    { id: 2, slug: "visual-dna", title: "Visual DNA - Core Elements" },
    { id: 3, slug: "strategic-comparison", title: "Strategic Comparison" },
    { id: 4, slug: "sqc-philosophy", title: "Safar Qawiyy Corp - Philosophy" },
    { id: 5, slug: "sqc-brand-kit", title: "Safar Qawiyy Corp - Brand Kit" },
    { id: 6, slug: "sqc-specs", title: "Safar Qawiyy Corp - Specifications" },
    { id: 7, slug: "sqc-applications", title: "Safar Qawiyy Corp - Applications" },
    { id: 8, slug: "mtb-philosophy", title: "Matahari Timur Bumi - Philosophy" },
    { id: 9, slug: "mtb-brand-kit", title: "Matahari Timur Bumi - Brand Kit" },
    { id: 10, slug: "mtb-specs", title: "Matahari Timur Bumi - Specifications" },
    { id: 11, slug: "mtb-applications", title: "Matahari Timur Bumi - Applications" },
    { id: 12, slug: "mre-philosophy", title: "Mataram Royal Energi - Philosophy" },
    { id: 13, slug: "mre-brand-kit", title: "Mataram Royal Energi - Brand Kit" },
    { id: 14, slug: "mre-specs", title: "Mataram Royal Energi - Specifications" },
    { id: 15, slug: "mre-applications", title: "Mataram Royal Energi - Applications" },
    { id: 16, slug: "consistency", title: "Consistency Guidelines" },
    { id: 17, slug: "closing", title: "Thank You - Contact" },
];

export function getSlideBySlug(slug: string): SlideConfig | undefined {
    return slideConfigs.find(s => s.slug === slug);
}

export function getSlideById(id: number): SlideConfig | undefined {
    return slideConfigs.find(s => s.id === id);
}
