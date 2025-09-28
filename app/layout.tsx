import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "TheKyban",
    description:
        "Aditya Kumar (TheKyban) — Full Stack Developer specializing in React, Next.js, and scalable web platforms. I build fast, maintainable products used by small businesses and teams; available for freelance and contract work.",
    keywords: [
        "TheKyban",
        "thekyban",
        "the kyban",
        "thekybans",
        "kyban",
        "KYBAN",
        "Full Stack Developer",
        "Portfolio",
    ],
    authors: [{ name: "TheKyban" }],
    themeColor: "#0b0b0b",
    openGraph: {
        title: "TheKyban",
        description:
            "Portfolio of Aditya Kumar (TheKyban). Examples of production projects, technical skills, and measurable impact — help for startups and businesses to ship fast, reliable web apps.",
        siteName: "TheKyban",
        type: "profile",
        url: "https://kyban.in/",
        images: [
            {
                url: "https://kyban.in/og-image.png",
                width: 1200,
                height: 630,
                alt: "TheKyban",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "TheKyban",
        description:
            "Aditya Kumar (TheKyban) is a Full Stack Developer focused on building performant React and Next.js applications, backend APIs, and developer tools. Available for freelance contracts and collaborations.",
        images: ["https://kyban.in/og-image.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "TheKyban",
                            alternateName: "thekyban",
                            url: "https://kyban.in/",
                            sameAs: [
                                "https://github.com/thekyban",
                                "https://www.linkedin.com/in/thekyban",
                            ],
                            jobTitle: "Full Stack Developer",
                            description:
                                "I am a Full Stack Developer and part time freelancer.",
                        }),
                    }}
                />

                {children}
            </body>
        </html>
    );
}
