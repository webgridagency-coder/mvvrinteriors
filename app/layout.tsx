import type { Metadata, Viewport } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "MVVR CON & INTERIO — Premium Interior Design | Visakhapatnam",
  description: "MVVR Constructions & Interiors — Andhra Pradesh's premier interior design studio. Specializing in Modern Apartments, Villas, Concept Houses & Corporate Workspaces. Vastu-Compliant designs across AP & Telangana.",
  keywords: "interior design Visakhapatnam, interior design Andhra Pradesh, modular kitchen, wardrobe design, apartment interiors, villa interiors, MVVR constructions, Madhurawada interior designer",
  authors: [{ name: "MVVR Constructions & Interiors" }],
  openGraph: {
    title: "MVVR CON & INTERIO — Premium Interior Design",
    description: "Transforming spaces across Andhra Pradesh & Telangana with Vastu-Compliant, concept-driven interior designs.",
    url: "https://mvvrconinterio.com",
    siteName: "MVVR CON & INTERIO",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVVR CON & INTERIO — Premium Interior Design",
    description: "Premier interior design studio serving AP & Telangana",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.addEventListener('error', function(e) {
                  if (e.filename && e.filename.indexOf('chrome-extension://') !== -1) {
                    e.stopImmediatePropagation();
                  }
                }, true);
              }
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=Syne:wght@700;800&family=Syncopate:wght@700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=Cinzel:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
