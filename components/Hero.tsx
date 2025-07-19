import React from "react";
import { Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import Head from "next/head";

const Hero = () => {
    // Enhanced SEO metadata
    const pageTitle = "Bimal Pandey - Expert Full Stack Developer | React, Node.js & Enterprise Web Solutions";
    const pageDescription = "Experienced Full Stack Developer specializing in React, Node.js, JavaScript, and scalable web applications. Available for freelance projects and enterprise solutions. 5+ years building high-performance web apps.";
    const canonicalUrl = "https://bimalpandey11.com.np";
    const authorName = "Bimal Pandey";
    const keywords = "full stack developer, React developer, Node.js expert, JavaScript developer, web development services, freelance developer, enterprise web solutions, scalable applications, frontend development, backend development, MERN stack, full stack engineer, web application development";

    // Structured data for better search engine understanding
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": authorName,
        "jobTitle": "Full Stack Developer",
        "description": pageDescription,
        "url": canonicalUrl,
        "sameAs": [
            "https://github.com/bimal009",
            "https://x.com/CodeWithBun",
            "https://instagram.com/bunchoo_graphics11"
        ],
        "knowsAbout": [
            "React",
            "Node.js",
            "JavaScript",
            "Full Stack Development",
            "Web Development",
            "Frontend Development",
            "Backend Development"
        ],
        "hasOccupation": {
            "@type": "Occupation",
            "name": "Full Stack Developer",
            "description": "Develops scalable web applications using modern frameworks"
        }
    };

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>{pageTitle}</title>
                <meta name="title" content={pageTitle} />
                <meta name="description" content={pageDescription} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={authorName} />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />

                {/* Canonical URL */}
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:site_name" content="Bimal Pandey - Full Stack Developer" />
                <meta property="og:locale" content="en_US" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={canonicalUrl} />
                <meta property="twitter:title" content={pageTitle} />
                <meta property="twitter:description" content={pageDescription} />
                <meta property="twitter:creator" content="@CodeWithBun" />
                <meta property="twitter:site" content="@CodeWithBun" />

                {/* Additional SEO Meta Tags */}
                <meta name="theme-color" content="#8B5CF6" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData)
                    }}
                />
            </Head>

            <section
                id="about"
                className="pt-32 pb-16 px-4 sm:px-6 md:px-12 relative"
                aria-label="About Bimal Pandey - Full Stack Developer"
                itemScope
                itemType="https://schema.org/Person"
            >
                <div className="max-w-6xl mx-auto">
                    {/* Enhanced background effects for better visual balance */}
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] -z-10"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-[80px] -z-10"></div>
                    <div className="absolute top-2/3 right-1/3 w-40 h-40 bg-indigo-500/15 rounded-full blur-[90px] -z-10"></div>

                    <div className="max-w-3xl mx-auto">
                        <div className="text-center">
                            <p className="text-purple-400 text-lg mb-2 font-medium">
                               <span className="font-semibold" itemProp="name">{authorName}</span>
                            </p>

                            <h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                                itemProp="jobTitle"
                            >
                                <span className="gradient-text">Full Stack Developer</span>
                            </h1>

                            <p
                                className="text-gray-300 text-lg mb-6 leading-relaxed"
                                itemProp="description"
                            >
                                I build <span className="text-purple-400 font-bold">scalable web applications</span> with modern frameworks like React and Node.js, solving complex problems and delivering enterprise-grade solutions.
                            </p>

                            <p className="text-gray-300 mb-8 leading-relaxed">
                                Currently accepting freelance projects and collaborations, helping clients transform their ideas into high-performing, user-friendly digital experiences.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                <Link
                                    href="#contact"
                                    className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                                    aria-label="Contact Bimal Pandey for web development projects"
                                >
                                    Contact Me
                                </Link>
                            </div>

                            {/* Social links with enhanced SEO attributes */}
                            <div className="flex items-center justify-center gap-5" role="navigation" aria-label="Social media profiles">
                                <Link
                                    href="https://github.com/bimal009"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit Bimal Pandey's GitHub profile to see coding projects"
                                    className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                                    itemProp="sameAs"
                                >
                                    <Github size={20} aria-hidden="true" />
                                </Link>
                                <Link
                                    href="https://x.com/CodeWithBun"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Follow Bimal Pandey on Twitter for web development insights"
                                    className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                                    itemProp="sameAs"
                                >
                                    <Twitter size={20} aria-hidden="true" />
                                </Link>
                                <Link
                                    href="https://instagram.com/bunchoo_graphics11"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Follow Bimal Pandey on Instagram for creative content"
                                    className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                                    itemProp="sameAs"
                                >
                                    <Instagram size={20} aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;