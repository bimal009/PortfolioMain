import React from "react";
import { Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import Head from "next/head";

const Hero = () => {
    // SEO metadata
    const pageTitle = "Bimal Pandey | Full Stack Developer & Web Solutions Expert";
    const pageDescription = "Professional Full Stack Developer specializing in scalable web applications, React, Node.js, and enterprise solutions. Freelancer available for projects.";

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="keywords" content="full stack developer, web development, React developer, Node.js, JavaScript expert, frontend developer, backend developer, freelance developer" />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
            </Head>

            <section id="about" className="pt-32 pb-16 px-4 sm:px-6 md:px-12 relative" aria-label="About Bimal Pandey">
                <div className="max-w-6xl mx-auto">
                    {/* Enhanced background effects for better visual balance */}
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] -z-10"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-[80px] -z-10"></div>
                    <div className="absolute top-2/3 right-1/3 w-40 h-40 bg-indigo-500/15 rounded-full blur-[90px] -z-10"></div>

                    <div className="max-w-3xl mx-auto">
                        <div className="text-center">
                            <h2 className="text-purple-400 text-lg mb-2 font-medium">Hello, I'm <span className="font-semibold">Bimal Pandey</span></h2>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                <span className="gradient-text">Full Stack Developer</span>
                            </h1>

                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                I build <span className="text-purple-400 font-bold">scalable web applications</span> with modern frameworks like React and Node.js, solving complex problems and delivering enterprise-grade solutions.
                            </p>

                            <p className="text-gray-300 mb-8 leading-relaxed">
                                Currently accepting freelance projects and collaborations, helping clients transform their ideas into high-performing, user-friendly digital experiences.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                <Link
                                    href="#contact"
                                    className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                                >
                                    Contact Me
                                </Link>

                            </div>

                            {/* Social links */}
                            <div className="flex items-center justify-center gap-5">
                                <Link
                                    href="https://github.com/bimal009"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub Profile"
                                    className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                                >
                                    <Github size={20} />
                                </Link>
                                <Link
                                    href="https://x.com/CodeWithBun"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Twitter Profile"
                                    className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                                >
                                    <Twitter size={20} />
                                </Link>
                                <Link
                                    href="https://instagram.com/bunchoo_graphics11"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Instagram Profile"
                                    className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                                >
                                    <Instagram size={20} />
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