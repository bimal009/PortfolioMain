import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";

// Load Inter font with specified weights
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap", // Improves performance by allowing text to render in fallback font first
});

// Base URL for canonical links
const baseUrl = "https://bimalpandey11.com.np";

// Metadata for improved SEO
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Bimal Pandey - Full Stack Developer | React, Node.js, TypeScript",
    template: "%s | Bimal Pandey - Full Stack Developer",
  },
  description: "Portfolio of Bimal Pandey, a Full Stack Developer specialized in building scalable web applications with React, Next.js, Node.js, and modern technologies.",
  keywords: [
    "Bimal Pandey",
    "Full Stack Developer",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "JavaScript Developer",
    "TypeScript",
    "Next.js",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Tailwind CSS",
    "Responsive Web Design",
    "API Development"
  ],
  authors: [{ name: "Bimal Pandey" }],
  creator: "Bimal Pandey",
  publisher: "Bimal Pandey",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Bimal Pandey - Full Stack Developer",
    description: "Expert in building modern web applications with React, Next.js, and Node.js",
    siteName: "Bimal Pandey Portfolio",
    images: [
      {
        url: "/og-image.png", // Make sure to create this image
        width: 1200,
        height: 630,
        alt: "Bimal Pandey - Full Stack Developer"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@CodeWithBun",
    title: "Bimal Pandey - Full Stack Developer",
    description: "Expert in building modern web applications with React, Next.js, and Node.js",
    images: ["/twitter.jpg"], // Make sure to create this image
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" }
    ],

  },
};

// Viewport settings for better mobile experience
export const viewport: Viewport = {
  themeColor: "#030712", // Match your site's theme color
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.variable} font-sans bg-dark text-white antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <footer className="text-center text-sm py-4 text-gray-400">
          © {new Date().getFullYear()} Bimal Pandey. All rights reserved.
        </footer>

        {/* Structured data for better search engine understanding */}
        <Script id="schema-person" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "${baseUrl}/#person",
              "name": "Bimal Pandey",
              "url": "${baseUrl}",
              "image": "${baseUrl}/profile-photo.jpg",
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "sameAs": [
                "https://github.com/bimal009",
                "https://www.linkedin.com/in/bimal-pandey-246780352",
                "https://twitter.com/CodeWithBun"
              ],
              "knowsAbout": ["React", "Next.js", "Node.js", "JavaScript", "TypeScript", "Web Development"]
            }
          `}
        </Script>

        <Script id="schema-website" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "${baseUrl}/#website",
              "url": "${baseUrl}",
              "name": "Bimal Pandey Portfolio",
              "description": "Portfolio of Bimal Pandey, a Full Stack Developer specialized in building scalable web applications",
              "publisher": {
                "@id": "${baseUrl}/#person"
              }
            }
          `}
        </Script>
      </body>
    </html>
  );
}