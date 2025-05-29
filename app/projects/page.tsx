"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Filter, Code, Layout, Calendar, Tag } from "lucide-react";

const ProjectsPage = () => {
    const [filter, setFilter] = useState("all");

    const projects = [
        {
            id: 1,
            title: "BrandStage - Event Booking Platform",
            category: "freelance",
            image: "/project3.jpg",
            description: "An all-in-one event booking platform allowing users to book events, rent event essentials, and reserve venues.",
            technologies: ["React", "Zustand", "Shadcn/ui", "Tailwind CSS", "ReactQuery"],
            features: [
                "Event booking system with calendar integration",
                "Venue selection and reservation functionality",
                "Equipment rental with availability tracking",
                "Responsive design",
                "User authentication and profile management",
            ],
            demo: "https://brandstage.io/",
            date: "January 2025"
        },
        {
            id: 2,
            title: "Urbanaura - E-commerce App",
            category: "freelance",
            image: "/project2.jpg",
            description: "A modern e-commerce platform with product listings, cart functionality, and comprehensive admin controls.",
            technologies: ["Next.js", "Drizzle ORM", "Zustand", "Tailwind CSS", "Neon DB", "JWT"],
            features: [
                "Dynamic product listing with search and filters",
                "Shopping cart with state persistence",
                "User authentication and order history",
                "Admin panel for product and order management",
                "Responsive design for mobile and desktop"
            ],
            demo: "https://urbanauranp.vercel.app/",
            date: "November 2024"
        },
        {
            id: 3,
            title: "Next Gen Club Website with Admin Panel",
            category: "freelance",
            image: "/nextgen.png",
            description: "A comprehensive club website featuring a quiz platform with subject-wise MCQs and real-time scoring.",
            technologies: ["Next.js", "MongoDB", "Zustand", "JWT", "Express", "Mongoose"],
            features: [
                "Subject-wise quiz modules with real-time scoring",
                "User authentication with role-based access",
                "Admin panel for content management",
                "Member profiles and leaderboard",
                "Event calendar and announcements",
                "Responsive design"
            ],
            demo: "https://next-gen-it-eight.vercel.app/",
            date: "August 2024"
        },
        {
            id: 4,
            title: "Portfolio Website",
            category: "personal",
            image: "/portfolio.png",
            description: "A personal portfolio showcasing my skills, projects, and experience as a full stack developer.",
            technologies: ["Next.js", "Tailwind CSS", "React", "Shadcn/ui"],
            features: [
                "Responsive design with dark theme",
                "Project showcase with filtering",
                "Skills and experience sections",
                "Contact form with validation",
                "Performance optimized loading",
                "SEO friendly"
            ],
            demo: "https://bimalpandey11.com.np",
            date: "May 2024"
        },

    ];

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <div className="text-gray-300 min-h-screen py-20 pb-16 px-4 sm:px-6 lg:px-8">
            {/* Background effects */}
            <div className="fixed top-1/4 -left-20 w-64 h-64 rounded-full blur-[100px] -z-10"></div>
            <div className="fixed bottom-1/4 -right-20 w-64 h-64 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Projects</h1>
                    <div className="flex justify-center">
                        <div className="w-16 h-1 bg-purple-500 rounded-full mb-6"></div>
                    </div>
                    <p className="max-w-2xl mx-auto text-gray-400">
                        Explore my portfolio of projects showcasing my skills in frontend and backend development.
                    </p>
                </div>

                {/* Filter Controls */}
                <div className="flex justify-center mb-12">
                    <div className="card-gradient p-2 rounded-lg border border-white/5 shadow-md flex space-x-2">
                        <button
                            onClick={() => setFilter("all")}
                            className={`px-4 py-2 rounded-md transition-all duration-300 flex items-center ${filter === "all" ? "bg-purple-600 text-white" : "hover:bg-gray-800"
                                }`}
                        >
                            <Layout size={16} className="mr-2" />
                            All
                        </button>
                        <button
                            onClick={() => setFilter("freelance")}
                            className={`px-4 py-2 rounded-md transition-all duration-300 flex items-center ${filter === "freelance" ? "bg-purple-600 text-white" : "hover:bg-gray-800"
                                }`}
                        >
                            <Code size={16} className="mr-2" />
                            Freelance
                        </button>
                        <button
                            onClick={() => setFilter("personal")}
                            className={`px-4 py-2 rounded-md transition-all duration-300 flex items-center ${filter === "personal" ? "bg-purple-600 text-white" : "hover:bg-gray-800"
                                }`}
                        >
                            <Tag size={16} className="mr-2" />
                            Personal
                        </button>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="card-gradient border border-white/5 rounded-lg overflow-hidden hover:border-purple-500/30 transition-all duration-300 shadow-lg flex flex-col"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 w-full overflow-hidden border-b border-white/10">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                                    {/* Placeholder for project image */}
                                    <Image src={project.image} alt={project.title} width={800} height={450} className="object-cover" />
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 flex-grow">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                    <span className="text-xs bg-gray-800 text-purple-400 px-3 py-1 rounded-full capitalize">
                                        {project.category}
                                    </span>
                                </div>

                                <div className="flex items-center text-sm text-gray-400 mb-4">
                                    <Calendar size={14} className="mr-1" />
                                    <span>{project.date}</span>
                                </div>

                                <p className="text-gray-400 mb-4">{project.description}</p>

                                {/* Technologies */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Features */}
                                <div>
                                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features</h4>
                                    <ul className="space-y-1">
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="text-sm flex items-start">
                                                <span className="text-purple-400 mr-2">•</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Project Links */}
                            <div className="p-6 border-t border-white/10 flex justify-between">

                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300"
                                >
                                    <ExternalLink size={16} className="mr-2" />
                                    <span>Live Demo</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <Filter size={48} className="mx-auto text-gray-600 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
                        <p className="text-gray-400">Try changing your filter criteria</p>
                    </div>
                )}

                {/* Footer */}
                <div className="mt-16 px-8 py-4 text-center text-gray-400 border-t border-white/5">
                    <p>© 2025 Bimal Pandey. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;