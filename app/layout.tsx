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
  display: "swap",
});

// Base URL for canonical links
const baseUrl = "https://bimalpandey11.com.np";

// Enhanced metadata for improved SEO targeting "Bimal" and "Bimal Pandey" searches
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Bimal Pandey | Expert Full Stack Developer Nepal | React Next.js Node.js Specialist",
    template: "%s | Bimal Pandey - Full Stack Developer Nepal",
  },
  description: "Bimal Pandey is a leading Full Stack Developer from Nepal specializing in React, Next.js, Node.js, TypeScript, and modern web technologies. Expert in building scalable web applications, REST APIs, and responsive websites. Professional software engineer with proven track record in JavaScript development.",
  keywords: [
    // Primary target keywords
    "Bimal",
    "Bimal Pandey",
    "Bimal Pandey Developer",
    "Bimal Pandey Nepal",
    "Bimal Pandey Full Stack",
    "Bimal Pandey Portfolio",

    // Technical keywords
    "Full Stack Developer Nepal",
    "React Developer Nepal",
    "Next.js Developer",
    "Node.js Expert",
    "JavaScript Developer",
    "TypeScript Specialist",
    "Frontend Developer Nepal",
    "Backend Developer Nepal",
    "Web Developer Nepal",
    "Software Engineer Nepal",

    // Technology stack
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "AWS",
    "Docker",
    "Kubernetes",
    "Tailwind CSS",
    "Bootstrap",
    "REST API",
    "GraphQL",
    "Microservices",

    // Service-related keywords
    "Custom Web Development",
    "E-commerce Development",
    "Web Application Development",
    "Responsive Web Design",
    "Mobile App Development",
    "API Development",
    "Database Design",
    "Cloud Solutions",
    "Performance Optimization",
    "SEO Optimization",

    // Location-based
    "Nepal Developer",
    "Kathmandu Developer",
    "South Asian Developer",

    // Industry terms
    "MERN Stack",
    "MEAN Stack",
    "Jamstack",
    "Serverless",
    "DevOps",
    "Agile Development",
    "Scrum Master",
    "Code Review",
    "Testing",
    "CI/CD"
  ],
  authors: [{ name: "Bimal Pandey", url: baseUrl }],
  creator: "Bimal Pandey",
  publisher: "Bimal Pandey",
  category: "Technology",
  classification: "Web Development Portfolio",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
    date: true,
    url: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Bimal Pandey - Expert Full Stack Developer from Nepal",
    description: "Professional Full Stack Developer Bimal Pandey specializes in React, Next.js, Node.js. Expert in building modern web applications, APIs, and scalable solutions. Based in Nepal, serving global clients.",
    siteName: "Bimal Pandey - Full Stack Developer Portfolio",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Bimal Pandey - Full Stack Developer Nepal - React Next.js Node.js Expert",
        type: "image/webp"
      },
      {
        url: "/profile-photo.webp",
        width: 800,
        height: 800,
        alt: "Bimal Pandey Profile Photo - Full Stack Developer",
        type: "image/webp"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CodeWithBun",
    creator: "@CodeWithBun",
    title: "Bimal Pandey - Expert Full Stack Developer Nepal",
    description: "Professional Full Stack Developer specializing in React, Next.js, Node.js. Building modern web applications and scalable solutions.",
    images: [
      {
        url: "/twitter-card.webp",
        alt: "Bimal Pandey - Full Stack Developer Nepal",
        width: 1200,
        height: 630,
      }
    ],
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'en': baseUrl,
      'ne': `${baseUrl}/ne`, // If you plan to add Nepali version
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
    yandex: "your-yandex-verification-code", // Add if targeting Russian markets
    yahoo: "your-yahoo-verification-code", // Add Yahoo verification
    other: {
      bing: ["your-bing-verification-code"], // Add Bing Webmaster verification
    },
  },
  icons: {
    icon: [
      { url: "/logo.svg", sizes: "any" },
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/apple-touch-icon.webp", sizes: "180x180", type: "image/webp" },
    ],
    apple: [
      { url: "/apple-touch-icon.webp", sizes: "180x180", type: "image/webp" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#030712",
      },
    ],
  },
  manifest: "/manifest.json",
  applicationName: "Bimal Pandey Portfolio",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Bimal Pandey - Developer",
  },
  other: {
    "msapplication-TileColor": "#030712",
    "theme-color": "#030712",
  },
};

// Enhanced viewport settings
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Additional meta tags for better indexing */}
        <meta name="author" content="Bimal Pandey" />
        <meta name="designer" content="Bimal Pandey" />
        <meta name="owner" content="Bimal Pandey" />
        <meta name="url" content={baseUrl} />
        <meta name="identifier-URL" content={baseUrl} />
        <meta name="directory" content="submission" />
        <meta name="category" content="Technology, Web Development, Programming" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Geo-location meta tags */}
        <meta name="geo.region" content="NP" />
        <meta name="geo.country" content="Nepal" />
        <meta name="geo.placename" content="Kathmandu" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* DNS prefetch for social platforms */}
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//twitter.com" />
      </head>
      <body className={`${inter.variable} font-sans text-white antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>

        {/* Enhanced structured data for Person */}
        <Script id="schema-person" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "${baseUrl}/#person",
              "name": "Bimal Pandey",
              "alternateName": ["Bimal", "Bimal Pandey Developer"],
              "url": "${baseUrl}",
              "image": {
                "@type": "ImageObject",
                "url": "${baseUrl}/profile-photo.webp",
                "width": 800,
                "height": 800
              },
              "jobTitle": ["Full Stack Developer", "Software Engineer", "Web Developer"],
              "description": "Expert Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies",
              "nationality": "Nepali",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "NP",
                "addressRegion": "Bagmati",
                "addressLocality": "Kathmandu"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance Developer"
              },
              "knowsAbout": [
                "React.js", "Next.js", "Node.js", "JavaScript", "TypeScript", 
                "MongoDB", "PostgreSQL", "AWS", "Docker", "Kubernetes",
                "Web Development", "Full Stack Development", "API Development",
                "Responsive Design", "Performance Optimization", "SEO"
              ],
              "hasSkill": [
                "React Development", "Next.js Development", "Node.js Development",
                "Database Design", "API Development", "Cloud Computing",
                "DevOps", "Performance Optimization", "SEO Optimization"
              ],
              "sameAs": [
                "https://github.com/bimal009",
                "https://www.linkedin.com/in/bimal-pandey-246780352",
                "https://x.com/CodeWithBun"
              ],
              "email": "pandeybimal616@gmail.com",
              "telephone": "+977-9748807432"
            }
          `}
        </Script>

        {/* Enhanced Website Schema */}
        <Script id="schema-website" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "${baseUrl}/#website",
              "url": "${baseUrl}",
              "name": "Bimal Pandey Portfolio",
              "alternateName": "Bimal Pandey Developer Portfolio",
              "description": "Professional portfolio of Bimal Pandey, Expert Full Stack Developer from Nepal specializing in React, Next.js, Node.js development",
              "inLanguage": "en-US",
              "isPartOf": {
                "@id": "${baseUrl}/#website"
              },
              "about": {
                "@id": "${baseUrl}/#person"
              },
              "publisher": {
                "@id": "${baseUrl}/#person"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "${baseUrl}/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>

        {/* Professional Service Schema */}
        <Script id="schema-professional-service" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "${baseUrl}/#service",
              "name": "Bimal Pandey - Full Stack Development Services",
              "description": "Professional web development services by Bimal Pandey including React, Next.js, Node.js development, API creation, and database design",
              "provider": {
                "@id": "${baseUrl}/#person"
              },
              "areaServed": "Worldwide",
              "serviceType": "Web Development",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Full Stack Web Development",
                      "description": "Complete web application development using React, Next.js, and Node.js"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "API Development",
                      "description": "RESTful API and GraphQL development and integration"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Database Design",
                      "description": "Database architecture and optimization for web applications"
                    }
                  }
                ]
              }
            }
          `}
        </Script>

        {/* Breadcrumb Schema (add to specific pages) */}
        <Script id="schema-breadcrumb" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "${baseUrl}"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Bimal Pandey",
                  "item": "${baseUrl}/#about"
                }
              ]
            }
          `}
        </Script>

        {/* Google Analytics (replace with your GA4 ID) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  );
}