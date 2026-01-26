import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const slideId = parseInt(params.id, 10);

    const slideTitles = [
        "Welcome - Brand Identity System",
        "Brand Architecture - Branded House",
        "Visual DNA - Core Elements",
        "Strategic Comparison - Full Shape vs Geometric",
        "Safar Qawiyy Corp - Philosophy",
        "Safar Qawiyy Corp - Brand Kit",
        "Safar Qawiyy Corp - Specifications",
        "Safar Qawiyy Corp - Applications",
        "Matahari Timur Bumi - Philosophy",
        "Matahari Timur Bumi - Brand Kit",
        "Matahari Timur Bumi - Specifications",
        "Matahari Timur Bumi - Applications",
        "Mataram Royal Energi - Philosophy",
        "Mataram Royal Energi - Brand Kit",
        "Mataram Royal Energi - Specifications",
        "Mataram Royal Energi - Applications",
        "Consistency Guidelines",
        "Thank You - Contact",
    ];

    const title = slideTitles[slideId] || "Brand Identity Presentation";

    return {
        title: `${title} | Safar Qawiyy Corp`,
        description: "Brand identity presentation for Safar Qawiyy Corp and subsidiaries.",
    };
}
