import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
    try {
        // ImageResponse isn't recognized as a standard Response by Next's types in
        // some versions. Cast to Response to satisfy the route handler signature.
        return new ImageResponse(
            (
                <div
                    style={{
                        width: "1200px",
                        height: "630px",
                        background: "#0b0b0b",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily:
                            'Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
                    }}
                >
                    <div
                        style={{
                            padding: 48,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: 12,
                        }}
                    >
                        <div style={{ fontSize: 64, fontWeight: 800 }}>
                            TheKyban
                        </div>
                        <div style={{ fontSize: 28 }}>
                            Aditya Kumar — Full Stack Developer
                        </div>
                        <div style={{ fontSize: 20, opacity: 0.85 }}>
                            React · Next.js · APIs · Performance
                        </div>
                    </div>
                </div>
            ),
            { width: 1200, height: 630 }
        ) as unknown as Response;
    } catch (e) {
        return new Response("Failed to generate image", { status: 500 });
    }
}
