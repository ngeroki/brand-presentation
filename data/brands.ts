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
    narrativePhilosophy?: {
        meaning?: string;
        summary?: string;
        breakdown: PhilosophyElement[];
    };
    geometricPhilosophy?: {
        meaning?: string;
        summary?: string;
        breakdown: PhilosophyElement[];
    };
    logos: {
        fullyShape: string;
        geometric: string;
        nobgFull: string;
        nobgGeo: string;
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
        narrativePalette?: string[];
        geometricPalette?: string[];
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
        meaning: "Safar Qawwiy Corp adalah holding yang memaknai bisnis sebagai perjalanan yang diarahkan oleh kekuatan terstruktur dan penjagaan nilai, dengan induk berperan sebagai kiblat orientasi bagi seluruh entitas. Holding ini tidak agresif, tetapi tumbuh tenang, menjalar kuat, sabar, dan presisi.",
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
        geometricPhilosophy: {
            meaning: "Safar Qawwiy Corp adalah holding yang memaknai bisnis sebagai perjalanan terarah yang dibangun di atas kekuatan struktural dan penjagaan nilai, dengan induk berperan sebagai pusat orientasi bagi seluruh entitas.",
            summary: "menjadi pusat arah, membangun kekuatan berlapis, dan menjaga nilai dalam setiap perjalanan.",
            breakdown: [
                {
                    label: "Kiblat & Orientasi",
                    description: "Bentuk utama logo berupa kubus geometris yang mengingatkan pada Ka’bah melambangkan kiblat: pusat arah yang kokoh, stabil, dan menjadi rujukan gerak—bukan simbol dominasi, melainkan orientasi nilai dan tujuan."
                },
                {
                    label: "Empat Pilar Kekuatan",
                    description: "Struktur kubus terbagi menjadi empat sisi vertikal yang saling terhubung, merepresentasikan empat bersaudara di balik Safar Qawwiy sekaligus empat pilar kekuatan yang berdiri sejajar, saling menopang, dan tidak saling meniadakan."
                },
                {
                    label: "Kekuatan Terstruktur",
                    description: "Garis-garis tegas dan presisi menandakan kekuatan yang terstructured: disiplin, tata kelola, dan sistem yang dibangun dengan kesadaran jangka panjang, bukan dorongan sesaat."
                },
                {
                    label: "Orbit Penjagaan",
                    description: "Bentuk lingkaran yang memeluk struktur inti melambangkan penjagaan dan kesatuan: seluruh perjalanan bisnis berlangsung dalam orbit nilai yang sama, diawasi dan dikawal oleh induk."
                },
                {
                    label: "Batas Adab & Amanah",
                    description: "Aksen emas menandakan amanah, legitimasi, dan batas adab—bahwa kekuatan hanya sah ketika berada dalam koridor tanggung jawab."
                },
                {
                    label: "Perjalanan Terjaga",
                    description: "Safar Qawwiy bermakna Perjalanan yang Kuat dan Terjaga. Narasi internal huruf: Qof (misi & nilai), Wau (transparansi & governance), Ya (jaringan & ekosistem). Holding ini tidak agresif, tetapi tumbuh tenang, menjalar kuat, sabar, dan presisi."
                }
            ]
        },
        logos: {
            fullyShape: "/logos/source-full/sqc.png",
            geometric: "/logos/source-geo/sqc.png",
            nobgFull: "/logos/nobg/full/sqc.png",
            nobgGeo: "/logos/nobg/geo/sqc.png",
            transparentFull: "/logos/transparent/full-shape/sqc.png",
            transparentGeo: "/logos/transparent/geometric/sqc.png",
            transparentFullWhite: "/logos/transparent/full-shape-white/sqc.png",
            transparentGeoWhite: "/logos/transparent/geometric-white/sqc.png",
            transparentGeoBlack: "/logos/transparent/geometric-black/sqc.png",
        },
        colors: {
            primary: "#0B1221",
            secondary: "#09101E",
            accent: "#C5A572",
            narrativePalette: ["#0C1322", "#E5C673", "#FFC318"],
            geometricPalette: ["#0D1427", "#E5C673"],
        },
        typography: {
            fontName: "Inter",
            sample: "Safar Qawiyy Corp",
        },
        brandEssence: {
            title: "Brand Essence",
            tagline: "Bergerak dengan arah, berdiri dengan struktur, menjaga nilai.",
            description: "Safar Qawwiy Corp adalah holding company yang berfokus pada penjagaan nilai, tata kelola yang kuat, dan pertumbuhan jangka panjang. Bergerak dengan arah, berdiri dengan struktur, dan menjaga nilai dalam jangka panjang."
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
        geometricPhilosophy: {
            meaning: "Matahari Timur Bumi merepresentasikan fase awal perjalanan nilai: titik lahir energi dan potensi dasar yang menopang seluruh struktur berikutnya.",
            summary: "energi lahir dari awal yang sederhana, terarah, dan berpijak pada bumi.",
            breakdown: [
                {
                    label: "Tempat Terbit Cahaya",
                    description: "Bentuk logo menyerupai bangunan terbuka dengan atap mengarah ke atas, melambangkan tempat terbitnya cahaya—ruang awal di mana energi pertama kali hadir dan dikenali."
                },
                {
                    label: "Fondasi Energi Nyata",
                    description: "Tiga pilar vertikal merepresentasikan fondasi energi yang nyata: alam, bumi, dan sumber daya. Pilar-pilar ini berdiri sejajar, menandakan keseimbangan antara potensi, ketahanan, dan kesinambungan."
                },
                {
                    label: "Momentum Terbit",
                    description: "Arah struktur ke atas melambangkan timur dan momentum terbit: energi tidak muncul dari puncak, tetapi dari proses awal yang tenang dan terarah."
                },
                {
                    label: "Keterhubungan Bumi",
                    description: "Bentuk terbuka di bagian bawah menandakan keterhubungan langsung dengan bumi—bahwa energi di sini bersifat real, membumi, dan berbasis aset nyata, bukan spekulasi."
                },
                {
                    label: "Eksplorasi Terukur",
                    description: "Warna emas merepresentasikan cahaya awal dan potensi nilai, sementara struktur yang sederhana menegaskan kehati-hatian dan disiplin dalam fase eksplorasi."
                },
                {
                    label: "Titik Awal Wujud",
                    description: "Matahari Timur Bumi memosisikan diri sebagai titik awal wujud: tempat energi dikenali, dihormati, dan dipersiapkan sebelum diarahkan."
                }
            ]
        },
        logos: {
            fullyShape: "/logos/source-full/mtb.png",
            geometric: "/logos/source-geo/mtb.png",
            nobgFull: "/logos/nobg/full/mtb.png",
            nobgGeo: "/logos/nobg/geo/mtb.png",
            transparentFull: "/logos/transparent/full-shape/mtb.png",
            transparentGeo: "/logos/transparent/geometric/mtb.png",
            transparentFullWhite: "/logos/transparent/full-shape-white/mtb.png",
            transparentGeoWhite: "/logos/transparent/geometric-white/mtb.png",
            transparentGeoBlack: "/logos/transparent/geometric-black/mtb.png",
        },
        colors: {
            primary: "#1A1816",
            secondary: "#0B1221",
            accent: "#FFBE18",
            narrativePalette: ["#10264D", "#B17814"],
            geometricPalette: ["#B58E4D", "#ECD489"],
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
        geometricPhilosophy: {
            meaning: "Mataram Royal Energi merepresentasikan fase penjagaan dan legitimasi dalam perjalanan nilai—di mana energi yang telah lahir kini dilindungi, diarahkan, dan dijaga kehormatannya.",
            summary: "melindungi nilai, mengarahkan kekuatan, dan menjaga kehormatan energi.",
            breakdown: [
                {
                    label: "Perisai Amanah",
                    description: "Bentuk utama logo menyerupai perisai (shield) yang mengerucut ke bawah, melambangkan perlindungan, kedaulatan, dan tanggung jawab. Perisai ini adalah simbol amanah, bukan agresi."
                },
                {
                    label: "Ketertiban Simetris",
                    description: "Struktur yang simetris menandakan keadilan, keseimbangan, dan ketertiban dalam pengelolaan energi, selalu berada dalam koridor hukum dan tata kelola."
                },
                {
                    label: "Sumbu Otoritas",
                    description: "Elemen vertikal di tengah perisai merepresentasikan sumbu otoritas dan arah kebijakan—satu garis keputusan yang tegas, konsisten, dan menjadi rujukan."
                },
                {
                    label: "Keseimbangan Kekuatan",
                    description: "Bidang kiri dan kanan melambangkan keseimbangan kekuatan: antara eksploitasi dan konservasi, antara kepentingan ekonomi dan keberlanjutan."
                },
                {
                    label: "Amanah Berlian",
                    description: "Bentuk berlian di puncak perisai melambangkan legitimasi tertinggi dan amanah, bahwa energi hanya boleh dikelola oleh pihak yang sah dan bertanggung jawab."
                },
                {
                    label: "Sistem Penjagaan",
                    description: "Warna biru tua merepresentasikan otoritas dan stabilitas. Warna emas melambangkan kehormatan. Lapisan warna yang saling mengunci menandakan sistem penjagaan berlapis: regulasi, pengawasan, dan kontrol agar energi tetap berada dalam koridor nilai."
                }
            ]
        },
        logos: {
            fullyShape: "/logos/source-full/mre.png",
            geometric: "/logos/source-geo/mre.png",
            nobgFull: "/logos/nobg/full/mre.png",
            nobgGeo: "/logos/nobg/geo/mre.png",
            transparentFull: "/logos/transparent/full-shape/mre.png",
            transparentGeo: "/logos/transparent/geometric/mre.png",
            transparentFullWhite: "/logos/transparent/full-shape-white/mre.png",
            transparentGeoWhite: "/logos/transparent/geometric-white/mre.png",
            transparentGeoBlack: "/logos/transparent/geometric-black/mre.png",
        },
        colors: {
            primary: "#020617",
            secondary: "#0B1221",
            accent: "#E6AF4B",
            narrativePalette: ["#00255A", "#312845", "#DED5CB"],
            geometricPalette: ["#D6A34A", "#103C5F", "#7D3550"],
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
