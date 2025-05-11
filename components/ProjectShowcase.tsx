import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ProjectProps {
    title: string;
    description: string;
    imageSrc: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    isReversed?: boolean;
    slug: string;
    category: string;
}

/**
 * Individual project component with SEO optimizations and balanced design
 */
const Project = ({
    title,
    description,
    imageSrc,
    technologies,
    liveUrl,
    isReversed = false,
    slug,
    category
}: ProjectProps) => {
    return (
        <article
            className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-4 md:gap-8 mb-16 md:mb-24 items-center`}
            itemScope
            itemType="https://schema.org/CreativeWork"
        >
            {/* Text content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="text-sm text-purple-400 mb-2 font-medium" itemProp="category">{category}</div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" itemProp="name">
                    <Link href={`/projects/${slug}`} className="hover:text-purple-400 transition-colors">
                        {title}
                    </Link>
                </h3>

                <div className="card-gradient p-4 md:p-6 rounded-lg border border-white/5 shadow-lg hover:border-purple-500/30 transition-all duration-300">
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed" itemProp="description">
                        {description}
                    </p>
                </div>

                {/* Technologies used - scrollable on mobile */}
                <div className="mt-4 md:mt-6 flex flex-wrap gap-2 md:gap-3 overflow-x-auto pb-2 max-w-full">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs md:text-sm border border-purple-400 text-gray-300 px-2 md:px-3 py-1 rounded-full whitespace-nowrap"
                            itemProp="keywords"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Project links */}
                <div className="mt-4 md:mt-6 flex gap-4 md:gap-6">
                    {liveUrl && (
                        <Link
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live demo for ${title}`}
                            className="flex items-center gap-2 text-xs md:text-sm text-gray-300 hover:text-purple-400 transition-colors"
                            itemProp="url"
                        >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                        </Link>
                    )}
                </div>
            </div>

            {/* Image with optimized loading */}
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <Link href={liveUrl || ''} aria-label={`View details of ${title} project`}>
                    <div className="project-card p-2 md:p-3 overflow-hidden rounded-lg border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-lg">
                        <div className="relative w-full aspect-video overflow-hidden rounded-md">
                            <Image
                                src={imageSrc}
                                alt={`Screenshot of ${title} project`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover rounded-md hover:scale-105 transition-transform duration-500"
                                itemProp="image"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </Link>
            </div>
        </article>
    );
};

const FeaturedProjects = () => {
    const projects = [
        {
            title: "NextGen Club Admin & Public Portal",
            slug: "nextgen-club-admin-portal",
            description: "A fully responsive and scalable web app built for the NextGen Innovator Club to streamline operations and boost student engagement. It features a secure admin panel built with Node.js and Express, allowing admin users to manage events, members, and club resources efficiently. The app uses MongoDB as the database to store user information, events, and announcements. JWT Authentication is used for secure login and user management. The public-facing site, built with Next.js and Tailwind CSS, provides a clean, mobile-friendly layout for showcasing club info and announcements.",
            imageSrc: "/project1.png ", // Add your project image here
            technologies: [
                "Next.js",
                "Tailwind CSS",
                "React",
                "Context API",
                "shadcn/ui",
                "Node.js",
                "MongoDB",
                "JWT Authentication",
                "Express",
                "bcryptjs",
                "jsonwebtoken"
            ],
            liveUrl: "https://next-gen-it-eight.vercel.app/", // Replace with your live URL
            category: "Full Stack Application"
        },
        {
            title: "UrbanAura – Modern E-commerce UI with React",
            slug: "urbanaura-ecommerce-ui",
            description: "UrbanAura is a sleek, responsive e-commerce frontend built using React and styled with Tailwind CSS and shadcn/ui. It features dynamic product listings and category-based filtering powered by the FakeStore API. Data is fetched using TanStack Query, while Zustand handles lightweight state management. On the backend, Express is used to handle API requests, with JWT Authentication for user security. The app's data is stored in a Neon PostgreSQL database and managed through Drizzle ORM, allowing for efficient interaction with the database for product and user data.",
            imageSrc: "/project2.png", // Add your project image here
            technologies: [
                "React",
                "TanStack Query",
                "Zustand",
                "Tailwind CSS",
                "shadcn/ui",
                "Neon PostgreSQL",
                "Drizzle ORM",
                "Express",
                "JWT Authentication"
            ],
            liveUrl: "https://urbanauranp.vercel.app", // Replace with your live URL
            category: "Frontend Application"
        },
        {
            title: "BrandStage - Event Booking Platform",
            slug: "brandstage-event-booking",
            description: "BrandStage is an all-in-one event booking platform that allows users to book events, rent event essentials (like furniture, lighting, and audio equipment), and even reserve venues. Built using React, this platform leverages Zustand for state management to efficiently manage user sessions, event selections, and rental items. Shadcn/ui is utilized for creating a responsive and elegant UI, ensuring the platform works seamlessly across devices. The system provides an intuitive and user-friendly experience for event organizers, venue managers, and renters.",
            imageSrc: "/project3.png", // Replace with your project image here
            technologies: [
                "React",
                "Zustand",
                "Shadcn/ui",
                "Tailwind CSS",
                "Responsive Design"
            ],
            liveUrl: "https://brandstage.vercel.app/", // Live URL
            category: "Frontend Application"
        }
    ];



    return (
        <section
            className="py-16 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden"
            aria-labelledby="projects-heading"
            itemScope
            itemType="https://schema.org/CollectionPage"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section header with balanced styling */}
                <div className="mb-10 md:mb-16 text-center">
                    <p className="text-purple-400 text-sm font-medium mb-2">MY WORK</p>
                    <h2
                        id="projects-heading"
                        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4"
                        itemProp="name"
                    >
                        Featured Projects
                    </h2>
                    <div className="flex justify-center">
                        <div className="w-16 h-1 bg-purple-500 rounded-full mb-4 md:mb-6"></div>
                    </div>
                    <p className="text-gray-300 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-lg" itemProp="description">
                        A curated selection of my recent work showcasing my skills in web development and problem-solving.
                    </p>
                </div>

                {/* Background glow effects for visual interest - positioned to avoid overflow */}
                <div className="relative">
                    <div className="absolute top-1/4 -left-20 w-32 md:w-64 h-32 md:h-64 bg-purple-500/10 rounded-full blur-[50px] md:blur-[100px] -z-10"></div>
                    <div className="absolute bottom-1/4 -right-20 w-32 md:w-64 h-32 md:h-64 bg-blue-500/10 rounded-full blur-[50px] md:blur-[100px] -z-10"></div>

                    {/* Projects list with improved spacing */}
                    <div itemProp="mainEntity" itemScope itemType="https://schema.org/ItemList" className="space-y-16 md:space-y-32">
                        {projects.map((project, index) => (
                            <div key={project.slug} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                                <meta itemProp="position" content={String(index + 1)} />
                                <Project
                                    {...project}
                                    isReversed={index % 2 !== 0}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* View all projects button with balanced styling */}
                <div className="text-center mt-10 md:mt-16">
                    <Link
                        href="/projects"
                        className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 md:py-3 px-6 md:px-8 rounded-lg transition-colors duration-300 text-sm md:text-base"
                        aria-label="View all projects"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;