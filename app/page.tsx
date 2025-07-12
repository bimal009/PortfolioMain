import type { Metadata } from "next";
import Hero from "@/components/Hero";
// import WorkExperience from "@/components/Experience";
import FeaturedProjects from "@/components/ProjectShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Script from "next/script";

// Enhanced metadata specifically for homepage
export const metadata: Metadata = {
  title: "Bimal Pandey | Expert Full Stack Developer Nepal | React Next.js Node.js Specialist",
  description: "Bimal Pandey is a professional Full Stack Developer from Nepal with expertise in React, Next.js, Node.js, TypeScript, MongoDB, and AWS. Specialized in building scalable web applications, REST APIs, and modern responsive websites. Available for freelance projects worldwide.",
  keywords: [
    "Bimal Pandey",
    "Bimal Pandey Developer",
    "Bimal Pandey Nepal",
    "Bimal Pandey Full Stack Developer",
    "Bimal Pandey Portfolio",
    "Bimal",
    "Full Stack Developer Nepal",
    "React Developer Nepal",
    "Next.js Developer Nepal",
    "Node.js Expert Nepal",
    "JavaScript Developer Nepal",
    "TypeScript Developer Nepal",
    "Web Developer Kathmandu",
    "Software Engineer Nepal",
    "MERN Stack Developer",
    "Frontend Developer Nepal",
    "Backend Developer Nepal",
    "API Developer Nepal",
    "MongoDB Expert",
    "PostgreSQL Developer",
    "AWS Developer Nepal",
    "Tailwind CSS Expert",
    "Responsive Web Design Nepal",
    "E-commerce Developer Nepal",
    "Custom Web Applications",
    "Freelance Developer Nepal",
    "Professional Web Developer",
    "Modern Web Technologies",
    "Scalable Applications",
    "Performance Optimization",
    "SEO Expert Developer"
  ],
  openGraph: {
    title: "Bimal Pandey - Expert Full Stack Developer from Nepal",
    description: "Professional Full Stack Developer Bimal Pandey creates modern web applications using React, Next.js, Node.js. Serving clients worldwide from Nepal.",
    url: "https://bimalpandey11.com.np",
    type: "website",
    images: [
      {
        url: "/og-home.webp",
        width: 1200,
        height: 630,
        alt: "Bimal Pandey - Full Stack Developer Nepal - Homepage",
      }
    ],
  },
  twitter: {
    title: "Bimal Pandey - Expert Full Stack Developer Nepal",
    description: "Professional Full Stack Developer creating modern web applications with React, Next.js, Node.js",
    images: ["/twitter-home.webp"],
  },
  alternates: {
    canonical: "https://bimalpandey11.com.np",
  },
};

export default function Home() {
  return (
    <>
      {/* SEO-optimized semantic HTML structure */}
      <main role="main" itemScope itemType="https://schema.org/Person">
        {/* Hidden structured data for better indexing */}
        <div style={{ display: 'none' }}>
          <h1 itemProp="name">Bimal Pandey</h1>
          <span itemProp="jobTitle">Full Stack Developer</span>
          <span itemProp="description">Expert Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies</span>
          <span itemProp="nationality">Nepali</span>
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="addressCountry">Nepal</span>
            <span itemProp="addressLocality">Kathmandu</span>
          </div>
          <span itemProp="knowsAbout">React</span>
          <span itemProp="knowsAbout">Next.js</span>
          <span itemProp="knowsAbout">Node.js</span>
          <span itemProp="knowsAbout">TypeScript</span>
          <span itemProp="knowsAbout">JavaScript</span>
          <span itemProp="knowsAbout">MongoDB</span>
          <span itemProp="knowsAbout">PostgreSQL</span>
          <span itemProp="knowsAbout">AWS</span>
          <span itemProp="knowsAbout">Full Stack Development</span>
          <span itemProp="knowsAbout">Web Development</span>
          <span itemProp="knowsAbout">API Development</span>
          <span itemProp="knowsAbout">Database Design</span>
          <span itemProp="knowsAbout">Responsive Design</span>
          <span itemProp="knowsAbout">Performance Optimization</span>
        </div>

        {/* Hero Section with SEO keywords */}
        <section
          aria-label="Hero section introducing Bimal Pandey"
          itemProp="mainContentOfPage"
        >
          <Hero />
        </section>

        {/* Work Experience Section (commented out but SEO ready) */}
        {/* <section 
          aria-label="Work experience of Bimal Pandey"
          itemScope 
          itemType="https://schema.org/WorkHistory"
        >
          <WorkExperience />
        </section> */}

        {/* Featured Projects Section */}
        <section
          aria-label="Featured projects by Bimal Pandey"
          itemScope
          itemType="https://schema.org/CreativeWork"
        >
          <header style={{ display: 'none' }}>
            <h2>Featured Projects by Bimal Pandey - Full Stack Developer</h2>
            <p>Showcase of web applications, React projects, and Node.js applications built by Bimal Pandey</p>
          </header>
          <FeaturedProjects />
        </section>

        {/* Skills Section */}
        <section
          aria-label="Technical skills of Bimal Pandey"
          itemScope
          itemType="https://schema.org/SkillSet"
        >
          <header style={{ display: 'none' }}>
            <h2>Bimal Pandey's Technical Skills</h2>
            <p>Full Stack Development skills including React, Next.js, Node.js, TypeScript, and modern web technologies</p>
          </header>
          <Skills />
        </section>

        {/* Contact Section */}
        <section
          aria-label="Contact Bimal Pandey"
          itemScope
          itemType="https://schema.org/ContactPage"
        >
          <header style={{ display: 'none' }}>
            <h2>Contact Bimal Pandey - Full Stack Developer</h2>
            <p>Get in touch with Bimal Pandey for web development projects, React applications, and custom software solutions</p>
          </header>
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Enhanced FAQ Schema for common searches */}
      <Script id="faq-schema" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who is Bimal Pandey?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bimal Pandey is an expert Full Stack Developer from Nepal specializing in React, Next.js, Node.js, and modern web technologies. He builds scalable web applications and provides professional development services worldwide."
                }
              },
              {
                "@type": "Question",
                "name": "What technologies does Bimal Pandey specialize in?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bimal Pandey specializes in React.js, Next.js, Node.js, TypeScript, JavaScript, MongoDB, PostgreSQL, AWS, Docker, Tailwind CSS, and modern full-stack web development technologies."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Bimal Pandey located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bimal Pandey is based in Nepal and provides web development services to clients worldwide. He is available for both local and international projects."
                }
              },
              {
                "@type": "Question",
                "name": "What services does Bimal Pandey offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bimal Pandey offers full-stack web development, React application development, API development, database design, e-commerce solutions, and custom web application development services."
                }
              },
              {
                "@type": "Question",
                "name": "How can I contact Bimal Pandey for a project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can contact Bimal Pandey through his website contact form, email, or connect with him on LinkedIn and GitHub for web development projects and collaborations."
                }
              }
            ]
          }
        `}
      </Script>

      {/* Portfolio/Creative Work Schema */}
      <Script id="creative-work-schema" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": "https://bimalpandey11.com.np/#portfolio",
            "name": "Bimal Pandey Portfolio - Full Stack Developer Projects",
            "description": "Portfolio showcasing web development projects, React applications, and Node.js solutions by Bimal Pandey",
            "creator": {
              "@type": "Person",
              "name": "Bimal Pandey",
              "@id": "https://bimalpandey11.com.np/#person"
            },
            "about": [
              "Web Development",
              "React Development", 
              "Next.js Applications",
              "Node.js Development",
              "Full Stack Projects",
              "JavaScript Applications",
              "TypeScript Projects",
              "Database Design",
              "API Development"
            ],
            "keywords": "Bimal Pandey, Full Stack Developer, React Projects, Next.js Applications, Node.js Development, Web Development Portfolio",
            "inLanguage": "en-US",
            "dateModified": "${new Date().toISOString().split('T')[0]}",
            "url": "https://bimalpandey11.com.np"
          }
        `}
      </Script>

      {/* Article Schema for better content understanding */}
      <Script id="article-schema" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": "https://bimalpandey11.com.np/#homepage-article",
            "headline": "Bimal Pandey - Expert Full Stack Developer Nepal",
            "description": "Professional portfolio and services of Bimal Pandey, a skilled Full Stack Developer from Nepal specializing in modern web technologies",
            "image": "https://bimalpandey11.com.np/og-home.webp",
            "author": {
              "@type": "Person",
              "name": "Bimal Pandey",
              "@id": "https://bimalpandey11.com.np/#person"
            },
            "publisher": {
              "@type": "Person",
              "name": "Bimal Pandey",
              "logo": {
                "@type": "ImageObject",
                "url": "https://bimalpandey11.com.np/logo.svg"
              }
            },
            "datePublished": "2024-01-01",
            "dateModified": "${new Date().toISOString().split('T')[0]}",
            "mainEntityOfPage": "https://bimalpandey11.com.np",
            "articleSection": "Technology",
            "keywords": "Bimal Pandey, Full Stack Developer Nepal, React Developer, Next.js Expert, Node.js Specialist",
            "articleBody": "Bimal Pandey is a professional Full Stack Developer from Nepal with extensive experience in building modern web applications using React, Next.js, Node.js, and other cutting-edge technologies."
          }
        `}
      </Script>

      {/* Local Business Schema (if offering services locally) */}
      <Script id="local-business-schema" type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://bimalpandey11.com.np/#business",
            "name": "Bimal Pandey - Full Stack Development Services",
            "description": "Professional web development services by Bimal Pandey including React, Next.js, Node.js development and custom web applications",
            "url": "https://bimalpandey11.com.np",
            "telephone": "+977-XXXXXXXXX",
            "email": "contact@bimalpandey11.com.np",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Your Street Address",
              "addressLocality": "Kathmandu",
              "addressRegion": "Bagmati",
              "postalCode": "44600",
              "addressCountry": "NP"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "27.7172",
              "longitude": "85.3240"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "serviceArea": {
              "@type": "Country",
              "name": "Worldwide"
            },
            "priceRange": "$$",
            "paymentAccepted": "Cash, Credit Card, Bank Transfer",
            "currenciesAccepted": "NPR, USD",
            "founder": {
              "@id": "https://bimalpandey11.com.np/#person"
            },
            "employee": {
              "@id": "https://bimalpandey11.com.np/#person"
            }
          }
        `}
      </Script>
    </>
  );
}