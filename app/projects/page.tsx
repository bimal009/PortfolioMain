"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Filter,
  Code,
  Layout,
  Calendar,
  Briefcase,
  User,
  Bot,
  ShoppingCart,
  Globe,
  Palette,
  Database,
  Shield,
  Search,
  Users,
  Trophy,
  MessageCircle,
  Smartphone,
  Monitor,
  Zap,
  Settings,
  Star,
} from "lucide-react";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "BrandStage - Event Booking Platform",
      category: "freelance",
      categoryIcon: Briefcase,
      projectIcon: Calendar,
      image: "/project3.webp",
      description:
        "An all-in-one event booking platform allowing users to book events, rent event essentials, and reserve venues.",
      technologies: [
        "React",
        "Zustand",
        "Shadcn/ui",
        "Tailwind CSS",
        "ReactQuery",
      ],
      features: [
        {
          icon: Calendar,
          text: "Event booking system with calendar integration",
        },
        { icon: Globe, text: "Venue selection and reservation functionality" },
        {
          icon: ShoppingCart,
          text: "Equipment rental with availability tracking",
        },
        { icon: Smartphone, text: "Responsive design" },
        { icon: Shield, text: "User authentication and profile management" },
      ],
      demo: "https://brandstage.io/",
      date: "January 2025",
    },
    {
      id: 2,
      title: "Auto Twitter Bot with Gemini AI",
      category: "ai",
      categoryIcon: Bot,
      projectIcon: MessageCircle,
      image: "/twitter2.jpg",
      description:
        "An automated Twitter bot that generates and posts trending tech-related tweets using Google Gemini for content generation and Twitter API for publishing. Built with Next.js and Tailwind CSS, the bot fetches trending hashtags, crafts engaging tweets, and auto-posts them using scheduled triggers or API routes.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Google Gemini API",
        "Twitter API",
        "Express.js",
        "Serverless Functions",
        "REST API",
      ],
      features: [
        {
          icon: Bot,
          text: "Automated tweet generation using Google Gemini AI",
        },
        { icon: Star, text: "Trending hashtag detection and integration" },
        { icon: Zap, text: "Scheduled posting with API routes" },
        { icon: Settings, text: "Content optimization for engagement" },
        { icon: Globe, text: "Real-time Twitter API integration" },
        { icon: Database, text: "Serverless function deployment" },
      ],
      demo: "https://www.linkedin.com/feed/update/urn:li:activity:7332789167132737537/",
      date: "December 2024",
    },
    {
      id: 3,
      title: "Urbanaura - E-commerce App",
      category: "freelance",
      categoryIcon: Briefcase,
      projectIcon: ShoppingCart,
      image: "/project2.webp",
      description:
        "A modern e-commerce platform with product listings, cart functionality, and comprehensive admin controls.",
      technologies: [
        "Next.js",
        "Drizzle ORM",
        "Zustand",
        "Tailwind CSS",
        "Neon DB",
        "JWT",
      ],
      features: [
        {
          icon: Search,
          text: "Dynamic product listing with search and filters",
        },
        { icon: ShoppingCart, text: "Shopping cart with state persistence" },
        { icon: Shield, text: "User authentication and order history" },
        {
          icon: Settings,
          text: "Admin panel for product and order management",
        },
        { icon: Monitor, text: "Responsive design for mobile and desktop" },
      ],
      demo: "https://urbanauranp.vercel.app/",
      date: "November 2024",
    },
    {
      id: 4,
      title: "Next Gen Club Website with Admin Panel",
      category: "freelance",
      categoryIcon: Briefcase,
      projectIcon: Users,
      image: "/nextgen.webp",
      description:
        "Developed a fully responsive, scalable web app for NextGen Innovator Club to streamline operations and boost student engagement. Built a secure admin panel with Node.js and Express for managing events, members, and resources. Implemented JWT authentication, role-based access, Zustand state management, and Express APIs with Mongoose/MongoDB CRUD. Integrated Tanstack Query, reducing latency by 30%, and used Tailwind CSS for a responsive UI. Added an AI chatbot powered by Google Gemini for interactive support.",
      technologies: [
        "Next.js",
        "MongoDB",
        "Zustand",
        "JWT",
        "Express",
        "Mongoose",
      ],
      features: [
        {
          icon: Trophy,
          text: "Subject-wise quiz modules with real-time scoring",
        },
        { icon: Shield, text: "User authentication with role-based access" },
        { icon: Settings, text: "Admin panel for content management" },
        { icon: Users, text: "Member profiles and leaderboard" },
        { icon: Calendar, text: "Event calendar and announcements" },
        { icon: Smartphone, text: "Responsive design" },
      ],
      demo: "https://nextgenkalika.vercel.app/",
      date: "August 2024",
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "personal",
      categoryIcon: User,
      projectIcon: Globe,
      image: "/portfolio.webp",
      description:
        "A personal portfolio showcasing my skills, projects, and experience as a full stack developer.",
      technologies: ["Next.js", "Tailwind CSS", "React", "Shadcn/ui"],
      features: [
        { icon: Palette, text: "Responsive design with dark theme" },
        { icon: Filter, text: "Project showcase with filtering" },
        { icon: User, text: "Skills and experience sections" },
        { icon: MessageCircle, text: "Contact form with validation" },
        { icon: Zap, text: "Performance optimized loading" },
        { icon: Search, text: "SEO friendly" },
      ],
      demo: "https://bimalpandey11.com.np",
      date: "May 2024",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="text-gray-300 min-h-screen py-12 sm:py-16 lg:py-20 pb-8 sm:pb-12 lg:pb-16 px-3 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="fixed top-1/4 -left-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] -z-10"></div>
      <div className="fixed bottom-1/4 -right-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-10 lg:mb-12 text-center px-2 sm:px-0">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <Code size={24} className="sm:size-8 text-purple-400 mr-3" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              My Projects
            </h1>
            <Code
              size={24}
              className="sm:size-8 text-purple-400 ml-3 scale-x-[-1]"
            />
          </div>
          <div className="flex justify-center">
            <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-purple-500 rounded-full mb-4 sm:mb-6"></div>
          </div>
          <p className="max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto text-sm sm:text-base text-gray-400 leading-relaxed">
            <Monitor className="inline size-4 mr-2 text-purple-400" />
            Explore my portfolio of projects showcasing my skills in frontend
            and backend development.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex justify-center mb-8 sm:mb-10 lg:mb-12 px-2 sm:px-0">
          <div className="card-gradient p-1 sm:p-2 rounded-lg border border-white/5 shadow-md">
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-md transition-all duration-300 flex items-center text-xs sm:text-sm ${
                  filter === "all"
                    ? "bg-purple-600 text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <Layout size={12} className="sm:size-4 mr-1 sm:mr-2" />
                <span className="hidden xs:inline sm:inline">All</span>
              </button>
              <button
                onClick={() => setFilter("freelance")}
                className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-md transition-all duration-300 flex items-center text-xs sm:text-sm ${
                  filter === "freelance"
                    ? "bg-purple-600 text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <Briefcase size={12} className="sm:size-4 mr-1 sm:mr-2" />
                <span className="hidden xs:inline sm:inline">Freelance</span>
              </button>
              <button
                onClick={() => setFilter("personal")}
                className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-md transition-all duration-300 flex items-center text-xs sm:text-sm ${
                  filter === "personal"
                    ? "bg-purple-600 text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <User size={12} className="sm:size-4 mr-1 sm:mr-2" />
                <span className="hidden xs:inline sm:inline">Personal</span>
              </button>
              <button
                onClick={() => setFilter("ai")}
                className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-md transition-all duration-300 flex items-center text-xs sm:text-sm ${
                  filter === "ai"
                    ? "bg-purple-600 text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                <Bot size={12} className="sm:size-4 mr-1 sm:mr-2" />
                <span className="hidden xs:inline sm:inline">AI</span>
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-gradient border border-white/5 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 lg:h-64 w-full overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5 sm:p-6 lg:p-8 flex-grow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-purple-900/30 rounded-lg">
                      <project.projectIcon
                        size={18}
                        className="text-purple-400"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs border border-purple-400/50 text-purple-400 px-3 py-1.5 rounded-full capitalize self-start bg-purple-900/20 hover:bg-purple-900/30 transition-colors">
                    <project.categoryIcon size={12} />
                    <span className="font-medium">{project.category}</span>
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-400 mb-5">
                  <Calendar size={14} className="mr-2" />
                  <span>{project.date}</span>
                </div>

                <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                {project.technologies && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-3 flex items-center">
                      <Code size={14} className="mr-2" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs sm:text-sm border border-purple-400/50 text-gray-300 px-3 py-1.5 rounded-full whitespace-nowrap bg-purple-900/20 hover:bg-purple-900/30 transition-colors font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                {project.features && (
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-purple-400 mb-3 flex items-center">
                      <Star size={12} className="mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          className="text-xs sm:text-sm flex items-start"
                        >
                          <div className="p-1.5 bg-purple-900/30 rounded mr-3 mt-0.5 flex-shrink-0">
                            <feature.icon
                              size={12}
                              className="text-purple-400"
                            />
                          </div>
                          <span className="leading-relaxed">
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Project Links */}
              <div className="p-5 sm:p-6 lg:p-8 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-300 hover:text-purple-400 transition-colors duration-300 group"
                  >
                    <div className="p-2.5 bg-purple-900/30 rounded-lg mr-3 group-hover:bg-purple-900/50 transition-colors">
                      <ExternalLink size={16} className="sm:size-[18px]" />
                    </div>
                    <span className="font-medium">Live Demo</span>
                  </a>
                  <div className="flex items-center gap-3 text-purple-400">
                    <Globe size={14} />
                    <Zap size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 sm:py-20 px-4">
            <Filter
              size={32}
              className="sm:size-48 mx-auto text-gray-600 mb-3 sm:mb-4"
            />
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              No projects found
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              Try changing your filter criteria
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 sm:mt-16 px-4 sm:px-8 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-400 border-t border-white/5">
          <div className="flex items-center justify-center mb-2">
            <Code size={16} className="text-purple-400 mr-2" />
            <span>Built with passion and precision</span>
            <Code size={16} className="text-purple-400 ml-2 scale-x-[-1]" />
          </div>
          <p>© 2025 Bimal Pandey. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
