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
        "Full Stack Developer and freelancer. Portfolio of TheKyban — projects, work history, and skills.",
    authors: [{ name: "TheKyban" }],
    themeColor: "#0b0b0b",
    openGraph: {
        title: "TheKyban",
        description:
            "Full Stack Developer and freelancer. Portfolio of TheKyban — projects, work history, and skills.",
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
            "Full Stack Developer and freelancer. Portfolio of TheKyban — projects, work history, and skills.",
        images: ["https://your-domain.example/og-image.png"],
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
