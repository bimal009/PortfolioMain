"use client";

import Image from "next/image";
import { ExternalLink, Github, Instagram, Mail } from "lucide-react";

const AboutPage = () => {
    return (
        <div className=" text-gray-300 min-h-screen py-20  pb-16 px-4 sm:px-6 lg:px-8">
            {/* Background effects */}
            <div className="fixed top-1/4 -left-20 w-64 h-64 rounded-full blur-[100px] -z-10"></div>
            <div className="fixed bottom-1/4 -right-20 w-64 h-64 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-4xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h1>
                    <div className="flex justify-center">
                        <div className="w-16 h-1 bg-purple-500 rounded-full mb-6"></div>
                    </div>
                </div>

                <div className="card-gradient border border-white/5 shadow-lg rounded-lg overflow-hidden hover:border-purple-500/30 transition-all duration-300">
                    {/* Header Section */}
                    <div className="p-8 border-b border-white/10">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="flex items-center mb-6 md:mb-0">
                                <div className="project-card p-2 overflow-hidden rounded-lg border border-white/10 hover:border-purple-500/40 transition-all duration-300">
                                    <div className="relative w-16 h-16 rounded-md overflow-hidden">
                                        <Image
                                            src="/profile.jpg"
                                            alt="Bimal Pandey"
                                            fill
                                            sizes="200px"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h2 className="text-2xl font-bold text-white">Bimal Pandey</h2>
                                    <p className="text-purple-400 text-sm">Full Stack Developer</p>
                                </div>
                            </div>

                            {/* <a
                                href="/bimal pandey.pdf"
                                className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                                download="bimal pandey.pdf"
                            >
                                <Download size={18} className="mr-2" />
                                <span>Download Resume</span>
                            </a> */}
                        </div>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center">
                                <Mail size={18} className="mr-2 text-purple-400" />
                                <a href="mailto:pandeybimal616@gmail.com" className="hover:text-purple-400 transition-colors">pandeybimal616@gmail.com</a>
                            </div>
                            <div className="flex items-center">
                                <Github size={18} className="mr-2 text-purple-400" />
                                <a href="https://github.com/bimal009" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">github.com/bimal-pandey</a>
                            </div>
                            <div className="flex items-center">
                                <Instagram size={18} className="mr-2 text-purple-400" />
                                <a href="https://instagram.com/bunchoo_graphics11" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">instagram.com/bunchoo_graphics11</a>
                            </div>
                            <div className="flex items-center">
                                <ExternalLink size={18} className="mr-2 text-purple-400" />
                                <a href="https://bimalpandey11.com.np" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">bimalpandey11.com.np</a>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                        {/* Summary */}
                        <section className="mb-12">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                <span className="w-8 h-0.5 bg-purple-500 rounded-full mr-3"></span>
                                Professional Summary
                            </h3>
                            <div className="card-gradient p-6 rounded-lg border border-white/5 shadow-md hover:border-purple-500/30 transition-all duration-300">
                                <p className="leading-relaxed">
                                    Motivated and passionate Full Stack Developer with hands-on experience in building responsive web
                                    applications through freelance projects. Skilled in modern UI/UX design and backend development.
                                    Currently pursuing BCA, seeking opportunities to contribute to innovative tech teams.
                                </p>
                            </div>
                        </section>

                        {/* Skills */}
                        <section className="mb-12">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                <span className="w-8 h-0.5 bg-purple-500 rounded-full mr-3"></span>
                                Technical Skills
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="card-gradient p-6 rounded-lg border border-white/5 shadow-md hover:border-purple-500/30 transition-all duration-300">
                                    <h4 className="font-semibold text-purple-400 mb-3">Frontend</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {["React", "Next.js", "Zustand", "Tailwind CSS", "Shadcn/ui", "Responsive Design"].map((tech, index) => (
                                            <span key={index} className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="card-gradient p-6 rounded-lg border border-white/5 shadow-md hover:border-purple-500/30 transition-all duration-300">
                                    <h4 className="font-semibold text-purple-400 mb-3">Backend</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {["Node.js", "Express", "MongoDB", "Mongoose", "Drizzle ORM", "JWT", "Neon DB"].map((tech, index) => (
                                            <span key={index} className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Experience */}
                        <section className="mb-12">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                <span className="w-8 h-0.5 bg-purple-500 rounded-full mr-3"></span>
                                Projects
                            </h3>

                            <div className="space-y-8">
                                <div className="card-gradient p-6 rounded-lg border border-white/5 shadow-md hover:border-purple-500/30 transition-all duration-300">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="text-lg font-semibold text-white">BrandStage - Event Booking Platform</h4>
                                            <p className="text-purple-400">Self-Employed / Freelance</p>
                                        </div>
                                        <p className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">React, Zustand, Shadcn/ui</p>
                                    </div>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <span className="text-purple-400 mr-2">•</span>
                                            <span>Built an all-in-one event booking platform allowing users to book events, rent event essentials, and reserve venues</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-purple-400 mr-2">•</span>
                                            <span>Leveraged Zustand for state management to efficiently handle user sessions, event selections, and rental items</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-purple-400 mr-2">•</span>
                                            <span>Utilized Shadcn/ui for creating a responsive and elegant UI that works seamlessly across devices</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-purple-400 mr-2">•</span>
                                            <span>Designed an intuitive and user-friendly experience for event organizers, venue managers, and renters</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="card-gradient p-6 rounded-lg border border-white/5 shadow-md hover:border-purple-500/30 transition-all duration-300">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="text-lg font-semibold text-white">E-commerce App</h4>
                                            <p className="text-purple-400">Self-Employed / Freelance</p>
                                        </div>
                                        <p className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">Next.js, Drizzle ORM, Zustand</p>
                                    </div>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <span className="text-purple-400 mr-2">•</span>
                                            <span>Created a modern product listing page with filters, search, and cart functionality including admin panel for product management</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-purple-400 mr-2">•</span>
                                            <span>Built dynamic product listing pages with search, category filters, loading states, and responsive design</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-purple-400 mr-2">•</span>
                                            <span>Integrated backend APIs using Express.js and Drizzle ORM to handle CRUD operations and database communication</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-purple-400 mr-2">•</span>
                                            <span>Implemented a fully functional shopping cart system with state management using Zustand</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="card-gradient p-6 rounded-lg border border-white/5 shadow-md hover:border-purple-500/30 transition-all duration-300">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="text-lg font-semibold text-white">Next Gen Club Website with Admin Panel</h4>
                                            <p className="text-purple-400">Self-Employed / Freelance</p>
                                        </div>
                                        <p className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">Next.js, MongoDB, Zustand</p>
                                    </div>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <span className="text-purple-400 mr-2">•</span>
                                            <span>Developed a quiz platform with subject-wise MCQs, real-time scoring, and a clean, responsive user interface</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-purple-400 mr-2">•</span>
                                            <span>Implemented JWT-based authentication to ensure secure user login and role-based access control</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-purple-400 mr-2">•</span>
                                            <span>Integrated backend APIs using Express.js and Mongoose to handle CRUD operations</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-purple-400 mr-2">•</span>
                                            <span>Supported dynamic question loading and state management for smooth user experience</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                <span className="w-8 h-0.5 bg-purple-500 rounded-full mr-3"></span>
                                Education
                            </h3>
                            <div className="space-y-4">
                                <div className="card-gradient p-6 rounded-lg border border-white/5 shadow-md hover:border-purple-500/30 transition-all duration-300">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-lg font-semibold text-white">Bachelor in Computer Applications (BCA)</h4>
                                            <p className="text-purple-400">Kalika Campus</p>
                                        </div>
                                        <p className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">2024 - Present</p>
                                    </div>
                                </div>
                                <div className="card-gradient p-6 rounded-lg border border-white/5 shadow-md hover:border-purple-500/30 transition-all duration-300">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-lg font-semibold text-white">+2</h4>
                                            <p className="text-purple-400">Kanti Secondary School</p>
                                        </div>
                                        <p className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">2022 - 2023</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Footer */}
                    <div className=" px-8 py-4 text-center text-gray-400 border-t border-white/5">
                        <p>© 2025 Bimal Pandey. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;