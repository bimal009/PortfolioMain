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
  category,
}: ProjectProps) => {
  return (
    <article
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } gap-6 md:gap-10 mb-16 md:mb-24 items-center`}
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      {/* Text content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div
          className="text-sm text-purple-400 mb-2 font-medium tracking-wide"
          itemProp="category"
        >
          {category}
        </div>

        <h3
          className="text-2xl md:text-3xl font-bold mb-4 md:mb-5"
          itemProp="name"
        >
          <Link
            href={`/projects/${slug}`}
            className="hover:text-purple-400 transition-colors"
          >
            {title}
          </Link>
        </h3>

        <div className="card-gradient p-5 md:p-6 rounded-lg border border-white/10 shadow-lg hover:border-purple-500/30 transition-all duration-300">
          <p
            className="text-gray-300 text-base leading-relaxed"
            itemProp="description"
          >
            {description}
          </p>
        </div>

        {/* Technologies used - scrollable on mobile */}
        <div className="mt-5 md:mt-6 flex flex-wrap gap-2 md:gap-3 overflow-x-auto pb-2 max-w-full">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs md:text-sm border border-purple-400/50 text-gray-300 px-3 py-1 rounded-full whitespace-nowrap bg-purple-900/20 hover:bg-purple-900/30 transition-colors"
              itemProp="keywords"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project links */}
        <div className="mt-5 md:mt-6 flex gap-4 md:gap-6">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo for ${title}`}
              className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors group"
              itemProp="url"
            >
              <ExternalLink
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
              <span>Live Demo</span>
            </Link>
          )}
        </div>
      </div>

      {/* Image with optimized loading - MODIFIED FOR STATIC EXPORT */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <Link
          href={liveUrl || ""}
          aria-label={`View details of ${title} project`}
        >
          <div className="project-card p-3 md:p-4 overflow-hidden rounded-lg border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-xl ">
            <div className="relative w-full aspect-video overflow-hidden rounded-md">
              <Image
                src={imageSrc}
                alt={`Screenshot of ${title} project`}
                width={800}
                height={450}
                className="object-cover rounded-md hover:scale-105 transition-transform duration-500 w-full h-auto"
                itemProp="image"
                priority={true}
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
      description:
        "Developed a fully responsive, scalable web app for NextGen Innovator Club to streamline operations and boost student engagement. Built a secure admin panel with Node.js and Express for managing events, members, and resources. Implemented JWT authentication, role-based access, Zustand state management, and Express APIs with Mongoose/MongoDB CRUD. Integrated Tanstack Query, reducing latency by 30%, and used Tailwind CSS for a responsive UI. Added an AI chatbot powered by Google Gemini for interactive support.",
      imageSrc: "/nextgen.webp",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "React",
        "Context API",
        "shadcn/ui",
        "Node.js",
        "MongoDB",
        "JWT Auth",
      ],
      liveUrl: "https://nextgenkalika.vercel.app/",
      category: "Full Stack Application",
    },
    {
      title: "BrandStage - Event Booking Platform",
      slug: "brandstage-event-booking",
      description:
        "BrandStage is an all-in-one event booking platform that allows users to book events, rent event essentials, and reserve venues. Built using React with Zustand for state management to efficiently manage user sessions, event selections, and rental items.",
      imageSrc: "/project3.webp",
      technologies: [
        "React",
        "Zustand",
        "Shadcn/ui",
        "Tailwind CSS",
        "Responsive Design",
      ],
      liveUrl: "https://brandstage.io/",
      category: "Frontend Application",
    },
    {
      title: "Auto Twitter Bot with Gemini AI",
      slug: "auto-twitter-gemini-bot",
      description:
        "An automated Twitter bot that generates and posts trending tech-related tweets using Google Gemini for content generation and Twitter API for publishing. Built with Next.js and Tailwind CSS, the bot fetches trending hashtags, crafts engaging tweets, and auto-posts them using scheduled triggers or API routes.",
      imageSrc: "/twitter2.jpg",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Google Gemini API",
        "Twitter API",
        "Express.js",
        "Serverless Functions",
        "REST API",
      ],
      liveUrl:
        "https://www.linkedin.com/feed/update/urn:li:activity:7332789167132737537/",
      category: "AI & Automation",
    },
  ];

  return (
    <section
      className="py-20 md:py-28 px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b "
      aria-labelledby="projects-heading"
      itemScope
      itemType="https://schema.org/CollectionPage"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header with balanced styling */}
        <div className="mb-16 md:mb-20 text-center">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-3">
            MY WORK
          </p>
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            itemProp="name"
          >
            Featured Projects
          </h2>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mb-6"></div>
          </div>
          <p
            className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg"
            itemProp="description"
          >
            A curated selection of my recent work showcasing my skills in web
            development and problem-solving.
          </p>
        </div>

        {/* Background glow effects for visual interest - positioned for better balance */}
        <div className="relative">
          <div className="absolute top-1/3 -left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>
          <div className="absolute bottom-1/3 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-purple-500/5 rounded-full blur-[80px] -z-10"></div>

          {/* Projects list with improved spacing */}
          <div
            itemProp="mainEntity"
            itemScope
            itemType="https://schema.org/ItemList"
            className="space-y-20 md:space-y-32"
          >
            {projects.map((project, index) => (
              <div
                key={project.slug}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={String(index + 1)} />
                <Project {...project} isReversed={index % 2 !== 0} />
              </div>
            ))}
          </div>
        </div>

        {/* View all projects button with balanced styling */}
        <div className="text-center mt-16 md:mt-20">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 text-base shadow-lg hover:shadow-purple-500/20"
            aria-label="View all projects"
          >
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
