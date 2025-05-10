"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";

const AboutPage = () => {
    return (
        <div className=" text-gray-300 min-h-screen  pb-16 px-4 sm:px-6 lg:px-8">
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

                            <a
                                href="#"
                                className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                                download="Bimal_Pandey_Resume.pdf"
                            >
                                <Download size={18} className="mr-2" />
                                <span>Download PDF</span>
                            </a>
                        </div>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center">
                                <Mail size={18} className="mr-2 text-purple-400" />
                                <a href="mailto:bimal@example.com" className="hover:text-purple-400 transition-colors">bimal@example.com</a>
                            </div>
                            <div className="flex items-center">
                                <Github size={18} className="mr-2 text-purple-400" />
                                <a href="https://github.com/bimal-pandey" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">github.com/bimal-pandey</a>
                            </div>
                            <div className="flex items-center">
                                <Linkedin size={18} className="mr-2 text-purple-400" />
                                <a href="https://linkedin.com/in/bimal-pandey" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">linkedin.com/in/bimal-pandey</a>
                            </div>
                            <div className="flex items-center">
                                <ExternalLink size={18} className="mr-2 text-purple-400" />
                                <a href="https://bimalpandey.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">bimalpandey.com</a>
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
                                    Dedicated Full Stack Developer with 5+ years of experience building scalable web applications
                                    and optimizing user experiences. Proficient in modern JavaScript frameworks, responsive design,
                                    and server-side technologies. Passionate about clean code and collaborative development.
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
                                        {["React", "Next.js", "Redux", "TypeScript", "Tailwind CSS", "Responsive Design"].map((tech, index) => (
                                            <span key={index} className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="card-gradient p-6 rounded-lg border border-white/5 shadow-md hover:border-purple-500/30 transition-all duration-300">
                                    <h4 className="font-semibold text-purple-400 mb-3">Backend</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "Docker", "AWS"].map((tech, index) => (
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
                                Work Experience
                            </h3>

                            <div className="space-y-8">
                                <div className="card-gradient p-6 rounded-lg border border-white/5 shadow-md hover:border-purple-500/30 transition-all duration-300">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="text-lg font-semibold text-white">Senior Full Stack Developer</h4>
                                            <p className="text-purple-400">TechCorp Solutions</p>
                                        </div>
                                        <p className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">2022 - Present</p>
                                    </div>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <span className="text-purple-400 mr-2">•</span>
                                            <span>Led development of a customer portal using Next.js and Node.js</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-purple-400 mr-2">•</span>
                                            <span>Implemented authentication system reducing login issues by 40%</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-purple-400 mr-2">•</span>
                                            <span>Optimized database queries improving page load times by 60%</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-purple-400 mr-2">•</span>
                                            <span>Mentored junior developers and conducted code reviews</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="card-gradient p-6 rounded-lg border border-white/5 shadow-md hover:border-purple-500/30 transition-all duration-300">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="text-lg font-semibold text-white">Full Stack Developer</h4>
                                            <p className="text-purple-400">WebDev Agency</p>
                                        </div>
                                        <p className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">2019 - 2022</p>
                                    </div>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <span className="text-purple-400 mr-2">•</span>
                                            <span>Built responsive web applications for diverse clients</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-purple-400 mr-2">•</span>
                                            <span>Integrated payment gateways and third-party APIs</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-purple-400 mr-2">•</span>
                                            <span>Developed reusable component library used across projects</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-purple-400 mr-2">•</span>
                                            <span>Collaborated in agile teams for project delivery</span>
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
                            <div className="card-gradient p-6 rounded-lg border border-white/5 shadow-md hover:border-purple-500/30 transition-all duration-300">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white">Bachelor of Science, Computer Science</h4>
                                        <p className="text-purple-400">University of Technology</p>
                                    </div>
                                    <p className="text-sm  text-gray-300 px-3 py-1 rounded-full">2015 - 2019</p>
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