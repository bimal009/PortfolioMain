"use client";

import Image from "next/image";
import { ExternalLink, Github, Instagram, Mail } from "lucide-react";
import Head from "next/head";

const AboutPage = () => {
    // Enhanced SEO metadata
    const pageTitle = "About Bimal Pandey - Expert Full Stack Developer | React, Node.js & Modern Web Solutions";
    const pageDescription = "Learn about Bimal Pandey, a passionate Full Stack Developer with expertise in React, Next.js, Node.js, and MongoDB. Currently pursuing BCA with hands-on experience in building scalable web applications and e-commerce platforms.";
    const canonicalUrl = "https://bimalpandey.com.np/about";
    const keywords = "about bimal pandey, full stack developer bio, React developer experience, Node.js expert, web developer portfolio, freelance developer Nepal, BCA student developer, modern web applications";

    // Structured data for About page
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Bimal Pandey",
        "jobTitle": "Full Stack Developer",
        "description": pageDescription,
        "url": canonicalUrl,
        "image": "https://bimalpandey.com.np/profile.jpg", // Replace with your actual domain
        "email": "pandeybimal616@gmail.com",
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
        },
        "alumniOf": [
            {
                "@type": "EducationalOrganization",
                "name": "Kalika Campus",
                "description": "Bachelor in Computer Applications (BCA)"
            },
            {
                "@type": "EducationalOrganization",
                "name": "Kanti Secondary School",
                "description": "+2 Education"
            }
        ],
        "knowsAbout": [
            "React",
            "Next.js",
            "Node.js",
            "MongoDB",
            "JavaScript",
            "TypeScript",
            "Full Stack Development",
            "Web Development",
            "E-commerce Development",
            "UI/UX Design"
        ],
        "sameAs": [
            "https://github.com/bimal009",
            "https://instagram.com/bunchoo_graphics11",
            "https://bimalpandey11.com.np"
        ],
        "hasOccupation": {
            "@type": "Occupation",
            "name": "Full Stack Developer",
            "description": "Develops modern web applications using React, Node.js, and other cutting-edge technologies",
            "skills": "React, Next.js, Node.js, MongoDB, JavaScript, TypeScript, Tailwind CSS"
        }
    };

    // Skills data for better organization
    const skillsData = {
        frontend: [
            { name: "React", level: "Advanced", years: "2+" },
            { name: "Next.js", level: "Advanced", years: "2+" },
            { name: "Zustand", level: "Intermediate", years: "1+" },
            { name: "Tailwind CSS", level: "Advanced", years: "2+" },
            { name: "Shadcn/ui", level: "Intermediate", years: "1+" },
            { name: "Responsive Design", level: "Advanced", years: "2+" }
        ],
        backend: [
            { name: "Node.js", level: "Advanced", years: "2+" },
            { name: "Express", level: "Advanced", years: "2+" },
            { name: "MongoDB", level: "Advanced", years: "2+" },
            { name: "Mongoose", level: "Advanced", years: "2+" },
            { name: "Drizzle ORM", level: "Intermediate", years: "1+" },
            { name: "JWT", level: "Advanced", years: "2+" },
            { name: "Neon DB", level: "Intermediate", years: "1+" }
        ]
    };

    // Projects data with enhanced SEO information
    const projectsData = [
        {
            title: "BrandStage - Event Booking Platform",
            company: "Self-Employed / Freelance",
            technologies: "React, Zustand, Shadcn/ui",
            description: "All-in-one event booking platform with venue reservation and equipment rental",
            achievements: [
                "Built an all-in-one event booking platform allowing users to book events, rent event essentials, and reserve venues",
                "Leveraged Zustand for state management to efficiently handle user sessions, event selections, and rental items",
                "Utilized Shadcn/ui for creating a responsive and elegant UI that works seamlessly across devices",
                "Designed an intuitive and user-friendly experience for event organizers, venue managers, and renters"
            ],
            category: "Event Management"
        },
        {
            title: "E-commerce Application",
            company: "Self-Employed / Freelance",
            technologies: "Next.js, Drizzle ORM, Zustand",
            description: "Modern e-commerce platform with admin panel and complete shopping functionality",
            achievements: [
                "Created a modern product listing page with filters, search, and cart functionality including admin panel for product management",
                "Built dynamic product listing pages with search, category filters, loading states, and responsive design",
                "Integrated backend APIs using Express.js and Drizzle ORM to handle CRUD operations and database communication",
                "Implemented a fully functional shopping cart system with state management using Zustand"
            ],
            category: "E-commerce"
        },
        {
            title: "Next Gen Club Website with Admin Panel",
            company: "Self-Employed / Freelance",
            technologies: "Next.js, MongoDB, Zustand",
            description: "Educational quiz platform with real-time scoring and admin management",
            achievements: [
                "Developed a quiz platform with subject-wise MCQs, real-time scoring, and a clean, responsive user interface",
                "Implemented JWT-based authentication to ensure secure user login and role-based access control",
                "Integrated backend APIs using Express.js and Mongoose to handle CRUD operations",
                "Supported dynamic question loading and state management for smooth user experience"
            ],
            category: "Education"
        }
    ];

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>{pageTitle}</title>
                <meta name="title" content={pageTitle} />
                <meta name="description" content={pageDescription} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content="Bimal Pandey" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />

                {/* Canonical URL */}
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="profile" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content="https://bimalpandey.com.np/profile.jpg" />
                <meta property="og:site_name" content="Bimal Pandey Portfolio" />
                <meta property="profile:first_name" content="Bimal" />
                <meta property="profile:last_name" content="Pandey" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={canonicalUrl} />
                <meta property="twitter:title" content={pageTitle} />
                <meta property="twitter:description" content={pageDescription} />
                <meta property="twitter:image" content="https://bimalpandey.com.np/profile.jpg" />
                <meta property="twitter:creator" content="@CodeWithBun" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData)
                    }}
                />
            </Head>

            <main
                id="main-content"
                className="text-gray-300 min-h-screen py-20 pb-16 px-4 sm:px-6 lg:px-8"
                itemScope
                itemType="https://schema.org/Person"
            >
                {/* Enhanced background effects with better performance */}
                <div className="fixed top-1/4 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] -z-10" aria-hidden="true"></div>
                <div className="fixed bottom-1/4 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10" aria-hidden="true"></div>

                <div className="max-w-4xl mx-auto">
                    {/* Enhanced page header with structured data */}
                    <header className="mb-8 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            About <span itemProp="name">Bimal Pandey</span>
                        </h1>
                        <div className="flex justify-center">
                            <div className="w-16 h-1 bg-purple-500 rounded-full mb-6" aria-hidden="true"></div>
                        </div>
                        <p className="sr-only" itemProp="description">{pageDescription}</p>
                    </header>

                    <article className="card-gradient border border-white/5 shadow-lg rounded-lg overflow-hidden hover:border-purple-500/30 transition-all duration-300">
                        {/* Enhanced Header Section with structured data */}
                        <section className="p-8 border-b border-white/10">
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="flex items-center mb-6 md:mb-0">
                                    <div className="project-card p-2 overflow-hidden rounded-lg border border-white/10 hover:border-purple-500/40 transition-all duration-300">
                                        <div className="relative w-16 h-16 rounded-md overflow-hidden">
                                            <Image
                                                src="/profile.jpg"
                                                alt="Bimal Pandey - Full Stack Developer Professional Photo"
                                                fill
                                                sizes="(max-width: 768px) 64px, 64px"
                                                className="object-cover"
                                                priority
                                                itemProp="image"
                                            />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h2 className="text-2xl font-bold text-white" itemProp="name">Bimal Pandey</h2>
                                        <p className="text-purple-400 text-sm" itemProp="jobTitle">Full Stack Developer</p>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced contact information with structured data */}
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4" itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                                <div className="flex items-center">
                                    <Mail size={18} className="mr-2 text-purple-400" aria-hidden="true" />
                                    <a
                                        href="mailto:pandeybimal616@gmail.com"
                                        className="hover:text-purple-400 transition-colors"
                                        itemProp="email"
                                        aria-label="Send email to Bimal Pandey"
                                    >
                                        pandeybimal616@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <Github size={18} className="mr-2 text-purple-400" aria-hidden="true" />
                                    <a
                                        href="https://github.com/bimal009"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-purple-400 transition-colors"
                                        itemProp="sameAs"
                                        aria-label="Visit Bimal Pandey's GitHub profile"
                                    >
                                        github.com/bimal009
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <Instagram size={18} className="mr-2 text-purple-400" aria-hidden="true" />
                                    <a
                                        href="https://instagram.com/bunchoo_graphics11"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-purple-400 transition-colors"
                                        itemProp="sameAs"
                                        aria-label="Follow Bimal Pandey on Instagram"
                                    >
                                        instagram.com/bunchoo_graphics11
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <ExternalLink size={18} className="mr-2 text-purple-400" aria-hidden="true" />
                                    <a
                                        href="https://bimalpandey11.com.np"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-purple-400 transition-colors"
                                        itemProp="url"
                                        aria-label="Visit Bimal Pandey's website"
                                    >
                                        bimalpandey11.com.np
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Enhanced Content Section */}
                        <div className="p-8">
                            {/* Professional Summary with enhanced SEO */}
                            <section className="mb-12">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <span className="w-8 h-0.5 bg-purple-500 rounded-full mr-3" aria-hidden="true"></span>
                                    Professional Summary
                                </h3>
                                <div className="card-gradient p-6 rounded-lg border border-white/5 shadow-md hover:border-purple-500/30 transition-all duration-300">
                                    <p className="leading-relaxed" itemProp="description">
                                        Motivated and passionate <strong>Full Stack Developer</strong> with hands-on experience in building responsive web
                                        applications through freelance projects. Skilled in modern <strong>UI/UX design</strong> and <strong>backend development</strong>
                                        using <strong>React, Next.js, Node.js, and MongoDB</strong>. Currently pursuing <strong>BCA</strong>, seeking opportunities
                                        to contribute to innovative tech teams and deliver scalable, user-centric digital solutions.
                                    </p>
                                </div>
                            </section>

                            {/* Enhanced Technical Skills with structured data */}
                            <section className="mb-12">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <span className="w-8 h-0.5 bg-purple-500 rounded-full mr-3" aria-hidden="true"></span>
                                    Technical Skills & Expertise
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="card-gradient p-6 rounded-lg border border-white/5 shadow-md hover:border-purple-500/30 transition-all duration-300">
                                        <h4 className="font-semibold text-purple-400 mb-3">Frontend Development</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {skillsData.frontend.map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full hover:bg-gray-700 transition-colors"
                                                    itemProp="knowsAbout"
                                                    title={`${skill.name} - ${skill.level} level, ${skill.years} experience`}
                                                >
                                                    {skill.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="card-gradient p-6 rounded-lg border border-white/5 shadow-md hover:border-purple-500/30 transition-all duration-300">
                                        <h4 className="font-semibold text-purple-400 mb-3">Backend Development</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {skillsData.backend.map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full hover:bg-gray-700 transition-colors"
                                                    itemProp="knowsAbout"
                                                    title={`${skill.name} - ${skill.level} level, ${skill.years} experience`}
                                                >
                                                    {skill.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Enhanced Projects Section with structured data */}
                            <section className="mb-12">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <span className="w-8 h-0.5 bg-purple-500 rounded-full mr-3" aria-hidden="true"></span>
                                    Featured Projects & Experience
                                </h3>

                                <div className="space-y-8">
                                    {projectsData.map((project, index) => (
                                        <article
                                            key={index}
                                            className="card-gradient p-6 rounded-lg border border-white/5 shadow-md hover:border-purple-500/30 transition-all duration-300"
                                            itemScope
                                            itemType="https://schema.org/CreativeWork"
                                        >
                                            <header className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h4 className="text-lg font-semibold text-white" itemProp="name">{project.title}</h4>
                                                    <p className="text-purple-400" itemProp="creator">{project.company}</p>
                                                    <p className="sr-only" itemProp="description">{project.description}</p>
                                                </div>
                                                <span
                                                    className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                                                    itemProp="keywords"
                                                >
                                                    {project.technologies}
                                                </span>
                                            </header>
                                            <ul className="space-y-2" itemProp="text">
                                                {project.achievements.map((achievement, achievementIndex) => (
                                                    <li key={achievementIndex} className="flex items-start">
                                                        <span className="text-purple-400 mr-2" aria-hidden="true">•</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </article>
                                    ))}
                                </div>
                            </section>

                            {/* Enhanced Education Section with structured data */}
                            <section>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <span className="w-8 h-0.5 bg-purple-500 rounded-full mr-3" aria-hidden="true"></span>
                                    Education & Academic Background
                                </h3>
                                <div className="space-y-4">
                                    <div
                                        className="card-gradient p-6 rounded-lg border border-white/5 shadow-md hover:border-purple-500/30 transition-all duration-300"
                                        itemScope
                                        itemType="https://schema.org/EducationalOccupationalCredential"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="text-lg font-semibold text-white" itemProp="name">Bachelor in Computer Applications (BCA)</h4>
                                                <p className="text-purple-400" itemProp="sourceOrganization">Kalika Campus</p>
                                            </div>
                                            <time className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full" itemProp="dateCreated">2024 - Present</time>
                                        </div>
                                    </div>
                                    <div
                                        className="card-gradient p-6 rounded-lg border border-white/5 shadow-md hover:border-purple-500/30 transition-all duration-300"
                                        itemScope
                                        itemType="https://schema.org/EducationalOccupationalCredential"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="text-lg font-semibold text-white" itemProp="name">Higher Secondary Education (+2)</h4>
                                                <p className="text-purple-400" itemProp="sourceOrganization">Kanti Secondary School</p>
                                            </div>
                                            <time className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full" itemProp="dateCreated">2022 - 2023</time>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Enhanced Footer */}
                        <footer className="px-8 py-4 text-center text-gray-400 border-t border-white/5">
                            <p>© 2025 <span itemProp="name">Bimal Pandey</span>. All rights reserved.</p>
                        </footer>
                    </article>
                </div>
            </main>
        </>
    );
};

export default AboutPage;