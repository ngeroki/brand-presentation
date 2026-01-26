export interface PhilosophyElement {
    label: string;
    description: string;
    icon?: string;
}

export interface BrandData {
    id: string;
    name: string;
    industry: string;
    meaning: string;
    philosophySummary: string;
    philosophyBreakdown: PhilosophyElement[];
    logos: {
        fullyShape: string;
        geometric: string;
        transparentFull: string;
        transparentGeo: string;
        transparentFullWhite: string;
        transparentGeoWhite: string;
        transparentGeoBlack: string;
    };
    colors: {
        primary: string;
        secondary: string;
        accent: string;
    };
    typography: {
        fontName: string;
        sample: string;
    };
    brandEssence?: {
        title: string;
        tagline: string;
        description: string;
    };
}

export const brands: BrandData[] = [
    {
        id: "sqc",
        name: "Safar Qawwiy Corp",
        industry: "The Holding • The Guardian",
        meaning: "Safar Qawwiy Corp adalah holding yang memaknai bisnis sebagai perjalanan yang diarahkan oleh kekuatan terstruktur dan penjagaan nilai, dengan induk berperan sebagai kiblat orientasi bagi seluruh entitas.",
        philosophySummary: "bergerak dengan arah, berdiri dengan struktur, dan menjaga nilai dalam jangka panjang.",
        philosophyBreakdown: [
            {
                label: "Bentuk menyerupai Ka’bah",
                description: "Melambangkan pusat arah: diam, teguh, dan menjadi rujukan seluruh perjalanan—bukan pusat dominasi."
            },
            {
                label: "Empat pilar tegak",
                description: "Merepresentasikan empat bersaudara di balik Safar Qawwiy sekaligus Four Pillars of Strength: amanah, kebersamaan, dan kekuatan berlapis yang menopang perjalanan jangka panjang."
            },
            {
                label: "Garis emas di puncak pilar",
                description: "Adalah batas adab, legitimasi, dan tata kelola yang menyatukan seluruh kekuatan agar tetap berada dalam koridor nilai."
            },
            {
                label: "Lingkaran orbit",
                description: "Menandakan penjagaan dan kesatuan: seluruh entitas bergerak dalam satu ekosistem nilai, dipandu dan dikawal oleh induk."
            },
            {
                label: "Safar Qawwiy (Qof, Wau, Ya)",
                description: "Bermakna Perjalanan yang Kuat dan Terjaga. Narasi internal huruf: Qof (misi & nilai), Wau (transparansi & governance), Ya (jaringan & ekosistem)."
            }
        ],
        logos: {
            fullyShape: "/logos/source-full/sqc.png",
            geometric: "/logos/source-geo/sqc.png",
            transparentFull: "/logos/transparent/full-shape/sqc.png",
            transparentGeo: "/logos/transparent/geometric/sqc.png",
            transparentFullWhite: "/logos/transparent/full-shape-white/sqc.png",
            transparentGeoWhite: "/logos/transparent/geometric-white/sqc.png",
            transparentGeoBlack: "/logos/transparent/geometric-black/sqc.png",
        },
        colors: {
            primary: "#111827",
            secondary: "#374151",
            accent: "#9CA3AF",
        },
        typography: {
            fontName: "Inter",
            sample: "Safar Qawiyy Corp",
        },
        brandEssence: {
            title: "Brand Essence",
            tagline: "Guiding Strength, Guarding Value",
            description: "Safar Qawwiy Corp adalah holding company yang berfokus pada penjagaan nilai, tata kelola yang kuat, dan pertumbuhan jangka panjang. Brand ini dirancang untuk mencerminkan stabilitas institusional, disiplin strategis, dan kepercayaan lintas sektor."
        }
    },
    {
        id: "mtb",
        name: "Matahari Timur Bumi",
        industry: "Upstream • Resource Generator",
        meaning: "Matahari Timur Bumi merepresentasikan awal wujud energi dan potensi alam sebagai fase pertama dalam perjalanan nilai grup.",
        philosophySummary: "energi lahir dari awal yang tenang, nyata, dan penuh potensi.",
        philosophyBreakdown: [
            {
                label: "Bentuk matahari terbit",
                description: "Melambangkan kemunculan energi awal: cahaya yang muncul perlahan, belum eksplosif, namun menentukan arah seluruh perjalanan berikutnya."
            },
            {
                label: "Bentuk gunung dan bentang bumi",
                description: "Merepresentasikan real asset—sumber daya mineral dan energi yang kokoh, berumur panjang, dan bernilai intrinsik."
            },
            {
                label: "Lengkungan matahari emas",
                description: "Menandakan tajalli awal: energi mentah yang mulai menampakkan diri dan siap dikembangkan secara terukur."
            },
            {
                label: "Garis horizon di dasar",
                description: "Melambangkan batas kesadaran dan pijakan realitas, menegaskan bahwa eksplorasi dilakukan dengan kendali dan tanggung jawab."
            }
        ],
        logos: {
            fullyShape: "/logos/source-full/mtb.png",
            geometric: "/logos/source-geo/mtb.png",
            transparentFull: "/logos/transparent/full-shape/mtb.png",
            transparentGeo: "/logos/transparent/geometric/mtb.png",
            transparentFullWhite: "/logos/transparent/full-shape-white/mtb.png",
            transparentGeoWhite: "/logos/transparent/geometric-white/mtb.png",
            transparentGeoBlack: "/logos/transparent/geometric-black/mtb.png",
        },
        colors: {
            primary: "#111827",
            secondary: "#4B5563",
            accent: "#D1D5DB",
        },
        typography: {
            fontName: "Inter",
            sample: "Matahari Timur Bumi",
        },
        brandEssence: {
            title: "Brand Essence",
            tagline: "Rising Energy, Grounded Value",
            description: "Matahari Timur Bumi adalah entitas upstream yang fokus pada eksplorasi dan pengelolaan sumber daya mineral dan energi. Brand ini dirancang untuk mencerminkan kemunculan energi awal yang tenang, kokoh, dan penuh potensi—sebagai fondasi perjalanan nilai grup."
        }
    },
    {
        id: "mre",
        name: "Mataram Royal Energi",
        industry: "Authority • Asset Control",
        meaning: "Mataram Royal Energi adalah otoritas energi yang memegang mandat pengaturan, pengelolaan, dan penjagaan aset strategis dalam ekosistem grup.",
        philosophySummary: "energi yang diarahkan dengan otoritas, dijaga dengan tata kelola, dan diwariskan dengan tanggung jawab.",
        philosophyBreakdown: [
            {
                label: "Nama Mataram & Royal",
                description: "Mataram merepresentasikan kedaulatan dan tatanan Nusantara, sementara Royal dimaknai sebagai legitimasi dan tanggung jawab—bukan kemewahan."
            },
            {
                label: "Struktur simetris & vertikal",
                description: "Merepresentasikan otoritas yang sah, arah yang jelas, dan hierarki kendali atas energi."
            },
            {
                label: "Bentuk mahkota",
                description: "Melambangkan mandat penjagaan: kekuasaan yang hadir untuk mengatur dan melindungi nilai, bukan untuk mendominasi."
            },
            {
                label: "Lapisan-lapisan horizontal",
                description: "Menandakan sistem tata kelola, regulasi, dan pengawasan berlapis yang memastikan energi bergerak tertib dan berkelanjutan."
            },
            {
                label: "Elemen siklus energi",
                description: "Di pusat dasar melambangkan kesinambungan, efisiensi, dan regenerasi daya."
            }
        ],
        logos: {
            fullyShape: "/logos/source-full/mre.png",
            geometric: "/logos/source-geo/mre.png",
            transparentFull: "/logos/transparent/full-shape/mre.png",
            transparentGeo: "/logos/transparent/geometric/mre.png",
            transparentFullWhite: "/logos/transparent/full-shape-white/mre.png",
            transparentGeoWhite: "/logos/transparent/geometric-white/mre.png",
            transparentGeoBlack: "/logos/transparent/geometric-black/mre.png",
        },
        colors: {
            primary: "#111827",
            secondary: "#1F2937",
            accent: "#E5E7EB",
        },
        typography: {
            fontName: "Inter",
            sample: "Mataram Royal Energi",
        },
        brandEssence: {
            title: "Brand Essence",
            tagline: "Sovereign Authority, Sustained Energy",
            description: "Mataram Royal Energi adalah otoritas energi yang memegang mandat pengaturan, pengelolaan, dan penjagaan aset strategis. Brand ini dirancang untuk mencerminkan kedaulatan Nusantara, legitimasi tata kelola, dan tanggung jawab dalam mengarahkan energi secara tertib dan berkelanjutan."
        }
    }
];
