import Image from "next/image";
import {
  ExternalLink,
  Github,
  Instagram,
  Mail,
  User,
  Code2,
  GraduationCap,
  Briefcase,
  Zap,
  Database,
  Monitor,
  Server,
  Cloud,
} from "lucide-react";
import Head from "next/head";

const AboutPage = () => {
  // Enhanced SEO metadata
  const pageTitle =
    "About Bimal Pandey - Expert Full Stack Developer | React, Node.js & Modern Web Solutions";
  const pageDescription =
    "Learn about Bimal Pandey, a passionate Full Stack Developer with expertise in React, Next.js, Node.js, and MongoDB. Currently pursuing BCA with hands-on experience in building scalable web applications and e-commerce platforms.";
  const canonicalUrl = "https://bimalpandey.com.np/about";
  const keywords =
    "about bimal pandey, full stack developer bio, React developer experience, Node.js expert, web developer portfolio, freelance developer Nepal, BCA student developer, modern web applications";

  // Structured data for About page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bimal Pandey",
    jobTitle: "Full Stack Developer",
    description: pageDescription,
    url: canonicalUrl,
    image: "https://bimalpandey.com.np/profile.webp",
    email: "pandeybimal616@gmail.com",
    worksFor: {
      "@type": "Organization",
      name: "Synthbit Group PVT",
      description: "Full Stack Developer Intern",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Kalika Campus",
        description: "Bachelor in Computer Applications (BCA)",
      },
      {
        "@type": "EducationalOrganization",
        name: "Kanti Secondary School",
        description: "+2 Education",
      },
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "JavaScript",
      "TypeScript",
      "Full Stack Development",
      "Web Development",
      "E-commerce Development",
      "UI/UX Design",
      "AWS",
      "Docker",
    ],
    sameAs: [
      "https://github.com/bimal009",
      "https://instagram.com/bunchoo_graphics11",
      "https://bimalpandey11.com.np",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      description:
        "Develops modern web applications using React, Node.js, and other cutting-edge technologies",
      skills:
        "React, Next.js, Node.js, MongoDB, JavaScript, TypeScript, Tailwind CSS, AWS, Docker",
    },
  };

  // Enhanced skills data with AWS and Docker
  const skillsData = {
    frontend: [
      { name: "React", level: "Advanced", years: "2+" },
      { name: "Next.js", level: "Advanced", years: "2+" },
      { name: "Zustand", level: "Intermediate", years: "1+" },
      { name: "Tailwind CSS", level: "Advanced", years: "2+" },
      { name: "Shadcn/ui", level: "Intermediate", years: "1+" },
      { name: "Responsive Design", level: "Advanced", years: "2+" },
    ],
    backend: [
      { name: "Node.js", level: "Advanced", years: "2+" },
      { name: "Express", level: "Advanced", years: "2+" },
      { name: "MongoDB", level: "Advanced", years: "2+" },
      { name: "Mongoose", level: "Advanced", years: "2+" },
      { name: "Drizzle ORM", level: "Intermediate", years: "1+" },
      { name: "JWT", level: "Advanced", years: "2+" },
      { name: "Neon DB", level: "Intermediate", years: "1+" },
      { name: "Server Actions", level: "Intermediate", years: "1+" },
    ],
    devops: [
      { name: "AWS", level: "Intermediate", years: "1+" },
      { name: "Docker", level: "Intermediate", years: "1+" },
      { name: "Git", level: "Advanced", years: "2+" },
      { name: "CI/CD", level: "Beginner", years: "1" },
    ],
  };

  // Work experience data
  const workItems = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company: "Synthbit Group PVT",
      duration: "July 2025 - Present",
      description:
        "Developing full-stack applications using modern web technologies. Working on both frontend and backend development, contributing to various projects and gaining hands-on experience in software development lifecycle.",
    },
  ];

  // Projects data with enhanced SEO information
  const projectsData = [
    {
      title: "BrandStage - Event Booking Platform",
      company: "Self-Employed / Freelance",
      technologies: "React, Zustand, Shadcn/ui",
      description:
        "All-in-one event booking platform with venue reservation and equipment rental",
      achievements: [
        "Built an all-in-one event booking platform allowing users to book events, rent event essentials, and reserve venues",
        "Leveraged Zustand for state management to efficiently handle user sessions, event selections, and rental items",
        "Utilized Shadcn/ui for creating a responsive and elegant UI that works seamlessly across devices",
        "Designed an intuitive and user-friendly experience for event organizers, venue managers, and renters",
      ],
      category: "Event Management",
    },
    {
      title: "E-commerce Application",
      company: "Self-Employed / Freelance",
      technologies: "Next.js, Drizzle ORM, Zustand",
      description:
        "Modern e-commerce platform with admin panel and complete shopping functionality",
      achievements: [
        "Created a modern product listing page with filters, search, and cart functionality including admin panel for product management",
        "Built dynamic product listing pages with search, category filters, loading states, and responsive design",
        "Integrated backend APIs using Express.js and Drizzle ORM to handle CRUD operations and database communication",
        "Implemented a fully functional shopping cart system with state management using Zustand",
      ],
      category: "E-commerce",
    },
    {
      title: "Next Gen Club Website with Admin Panel",
      company: "Self-Employed / Freelance",
      technologies: "Next.js, MongoDB, Zustand",
      description:
        "Educational quiz platform with real-time scoring and admin management",
      achievements: [
        "Developed a quiz platform with subject-wise MCQs, real-time scoring, and a clean, responsive user interface",
        "Implemented JWT-based authentication to ensure secure user login and role-based access control",
        "Integrated backend APIs using Express.js and Mongoose to handle CRUD operations",
        "Supported dynamic question loading and state management for smooth user experience",
      ],
      category: "Education",
    },
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:image"
          content="https://bimalpandey.com.np/profile.webp"
        />
        <meta property="og:site_name" content="Bimal Pandey Portfolio" />
        <meta property="profile:first_name" content="Bimal" />
        <meta property="profile:last_name" content="Pandey" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta
          property="twitter:image"
          content="https://bimalpandey.com.np/profile.webp"
        />
        <meta property="twitter:creator" content="@CodeWithBun" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      <main
        id="main-content"
        className="text-gray-300 min-h-screen pt-32 pb-16 px-4 sm:px-6 md:px-12"
        itemScope
        itemType="https://schema.org/Person"
      >
        {/* Enhanced background effects with better performance */}
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] -z-10"
          aria-hidden="true"
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-[80px] -z-10"
          aria-hidden="true"
        ></div>
        <div
          className="absolute top-2/3 right-1/3 w-40 h-40 bg-indigo-500/15 rounded-full blur-[90px] -z-10"
          aria-hidden="true"
        ></div>

        <div className="max-w-6xl mx-auto">
          {/* Enhanced page header with structured data */}

          <article className="card-gradient border border-white/5 shadow-lg rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
            {/* Enhanced Header Section with structured data */}
            <section className="p-6 md:p-10 border-b border-white/10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                  <div className="project-card p-3 overflow-hidden rounded-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 group">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src="/profile.webp"
                        alt="Bimal Pandey - Full Stack Developer Professional Photo"
                        fill
                        sizes="(max-width: 768px) 80px, 96px"
                        className="object-cover"
                        priority
                        itemProp="image"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h2
                      className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
                      itemProp="name"
                    >
                      Bimal Pandey
                    </h2>
                    <p
                      className="text-purple-400 text-base md:text-lg font-medium"
                      itemProp="jobTitle"
                    >
                      Full Stack Developer
                    </p>
                    <p className="text-gray-400 text-sm md:text-base">
                      Passionate about creating scalable web solutions
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced contact information with structured data */}
              <div
                className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6"
                itemProp="contactPoint"
                itemScope
                itemType="https://schema.org/ContactPoint"
              >
                <div className="flex items-center justify-center sm:justify-start p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                  <Mail
                    size={20}
                    className="mr-3 text-purple-400 group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:pandeybimal616@gmail.com"
                    className="hover:text-purple-400 transition-colors text-sm md:text-base font-medium truncate"
                    itemProp="email"
                    aria-label="Send email to Bimal Pandey"
                  >
                    pandeybimal616@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center sm:justify-start p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                  <Github
                    size={20}
                    className="mr-3 text-purple-400 group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  />
                  <a
                    href="https://github.com/bimal009"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors text-sm md:text-base font-medium truncate"
                    itemProp="sameAs"
                    aria-label="Visit Bimal Pandey's GitHub profile"
                  >
                    github.com/bimal009
                  </a>
                </div>
                <div className="flex items-center justify-center sm:justify-start p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                  <Instagram
                    size={20}
                    className="mr-3 text-purple-400 group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  />
                  <a
                    href="https://instagram.com/bunchoo_graphics11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors text-sm md:text-base font-medium truncate"
                    itemProp="sameAs"
                    aria-label="Follow Bimal Pandey on Instagram"
                  >
                    @bunchoo_graphics11
                  </a>
                </div>
                <div className="flex items-center justify-center sm:justify-start p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                  <ExternalLink
                    size={20}
                    className="mr-3 text-purple-400 group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  />
                  <a
                    href="https://bimalpandey11.com.np"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors text-sm md:text-base font-medium truncate"
                    itemProp="url"
                    aria-label="Visit Bimal Pandey's website"
                  >
                    bimalpandey11.com.np
                  </a>
                </div>
              </div>
            </section>

            {/* Enhanced Content Section */}
            <div className="p-6 md:p-10 space-y-12 lg:space-y-16">
              {/* Professional Summary with enhanced SEO */}
              <section>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
                  <User
                    className="w-6 md:w-7 h-6 md:h-7 text-purple-400 mr-4"
                    aria-hidden="true"
                  />
                  Professional Summary
                </h3>
                <div className="card-gradient p-6 md:p-8 rounded-xl border border-white/5 shadow-md hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                  <p
                    className="leading-relaxed text-base md:text-lg lg:text-xl text-gray-200"
                    itemProp="description"
                  >
                    Motivated and passionate{" "}
                    <span className="text-purple-400 font-semibold">
                      Full Stack Developer
                    </span>{" "}
                    currently working as an intern at{" "}
                    <span className="text-purple-400 font-semibold">
                      Synthbit Group PVT
                    </span>
                    , with hands-on experience in building responsive web
                    applications through professional and freelance projects.
                    Skilled in modern{" "}
                    <span className="text-purple-400 font-semibold">
                      UI/UX design
                    </span>{" "}
                    and{" "}
                    <span className="text-purple-400 font-semibold">
                      backend development
                    </span>
                    using{" "}
                    <span className="text-purple-400 font-semibold">
                      React, Next.js, Node.js, and MongoDB
                    </span>
                    . Currently pursuing{" "}
                    <span className="text-purple-400 font-semibold">BCA</span>,
                    continuously learning and contributing to innovative tech
                    solutions while delivering scalable, user-centric digital
                    applications.
                  </p>
                </div>
              </section>

              {/* Enhanced Technical Skills with structured data */}
              <section>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
                  <Code2
                    className="w-6 md:w-7 h-6 md:h-7 text-purple-400 mr-4"
                    aria-hidden="true"
                  />
                  Technical Skills & Expertise
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                  <div className="card-gradient p-6 md:p-8 rounded-xl border border-white/5 shadow-md hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                    <h4 className="font-semibold text-purple-400 mb-6 text-lg md:text-xl flex items-center">
                      <Monitor
                        className="w-5 md:w-6 h-5 md:h-6 mr-3"
                        aria-hidden="true"
                      />
                      Frontend Development
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {skillsData.frontend.map((skill, index) => (
                        <span
                          key={index}
                          className="text-sm md:text-base border border-purple-400/50 text-gray-300 px-3 md:px-4 py-2 rounded-full whitespace-nowrap bg-purple-900/20 hover:bg-purple-900/30 hover:border-purple-400/70 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
                          itemProp="knowsAbout"
                          title={`${skill.name} - ${skill.level} level, ${skill.years} experience`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="card-gradient p-6 md:p-8 rounded-xl border border-white/5 shadow-md hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                    <h4 className="font-semibold text-purple-400 mb-6 text-lg md:text-xl flex items-center">
                      <Server
                        className="w-5 md:w-6 h-5 md:h-6 mr-3"
                        aria-hidden="true"
                      />
                      Backend Development
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {skillsData.backend.map((skill, index) => (
                        <span
                          key={index}
                          className="text-sm md:text-base border border-purple-400/50 text-gray-300 px-3 md:px-4 py-2 rounded-full whitespace-nowrap bg-purple-900/20 hover:bg-purple-900/30 hover:border-purple-400/70 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
                          itemProp="knowsAbout"
                          title={`${skill.name} - ${skill.level} level, ${skill.years} experience`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="card-gradient p-6 md:p-8 rounded-xl border border-white/5 shadow-md hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 lg:col-span-2 xl:col-span-1">
                    <h4 className="font-semibold text-purple-400 mb-6 text-lg md:text-xl flex items-center">
                      <Cloud
                        className="w-5 md:w-6 h-5 md:h-6 mr-3"
                        aria-hidden="true"
                      />
                      DevOps & Tools
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {skillsData.devops.map((skill, index) => (
                        <span
                          key={index}
                          className="text-sm md:text-base border border-purple-400/50 text-gray-300 px-3 md:px-4 py-2 rounded-full whitespace-nowrap bg-purple-900/20 hover:bg-purple-900/30 hover:border-purple-400/70 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
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

              {/* Enhanced Work Experience Section with structured data */}
              <section>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
                  <Briefcase
                    className="w-6 md:w-7 h-6 md:h-7 text-purple-400 mr-4"
                    aria-hidden="true"
                  />
                  Professional Experience
                </h3>

                <div className="space-y-6 md:space-y-8 mb-12 lg:mb-16">
                  {workItems.map((work) => (
                    <article
                      key={work.id}
                      className="card-gradient p-6 md:p-8 rounded-xl border border-white/5 shadow-md hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group"
                      itemScope
                      itemType="https://schema.org/WorkExperience"
                    >
                      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-4">
                        <div className="flex-1">
                          <h4
                            className="text-lg md:text-xl lg:text-2xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300"
                            itemProp="jobTitle"
                          >
                            {work.title}
                          </h4>
                          <p
                            className="text-purple-400 text-base md:text-lg mt-2"
                            itemProp="hiringOrganization"
                          >
                            {work.company}
                          </p>
                        </div>
                        <time
                          className="text-sm md:text-base border border-purple-400/50 text-gray-300 px-3 md:px-4 py-2 rounded-full whitespace-nowrap bg-purple-900/20 hover:bg-purple-900/30 hover:border-purple-400/70 hover:text-white transition-all duration-300 self-start"
                          itemProp="employmentDuration"
                        >
                          {work.duration}
                        </time>
                      </header>
                      <div className="flex items-start gap-3">
                        <Zap
                          className="w-4 md:w-5 h-4 md:h-5 text-purple-400 mt-2 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <p
                          className="text-base md:text-lg text-gray-200 leading-relaxed"
                          itemProp="description"
                        >
                          {work.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Enhanced Projects Section with structured data */}
              <section>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
                  <Database
                    className="w-6 md:w-7 h-6 md:h-7 text-purple-400 mr-4"
                    aria-hidden="true"
                  />
                  Featured Projects & Development Work
                </h3>

                <div className="space-y-6 md:space-y-8">
                  {projectsData.map((project, index) => (
                    <article
                      key={index}
                      className="card-gradient p-6 md:p-8 rounded-xl border border-white/5 shadow-md hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group"
                      itemScope
                      itemType="https://schema.org/CreativeWork"
                    >
                      <header className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-4">
                        <div className="flex-1">
                          <h4
                            className="text-lg md:text-xl lg:text-2xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300"
                            itemProp="name"
                          >
                            {project.title}
                          </h4>
                          <p
                            className="text-purple-400 text-base md:text-lg mt-2"
                            itemProp="creator"
                          >
                            {project.company}
                          </p>
                          <p className="sr-only" itemProp="description">
                            {project.description}
                          </p>
                        </div>
                        <span
                          className="text-sm md:text-base border border-purple-400/50 text-gray-300 px-3 md:px-4 py-2 rounded-full whitespace-nowrap bg-purple-900/20 hover:bg-purple-900/30 hover:border-purple-400/70 hover:text-white transition-all duration-300 self-start"
                          itemProp="keywords"
                        >
                          {project.technologies}
                        </span>
                      </header>
                      <ul className="space-y-3 md:space-y-4" itemProp="text">
                        {project.achievements.map(
                          (achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start gap-3"
                            >
                              <Zap
                                className="w-4 md:w-5 h-4 md:h-5 text-purple-400 mt-2 flex-shrink-0"
                                aria-hidden="true"
                              />
                              <span className="text-base md:text-lg text-gray-200 leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>

              {/* Enhanced Education Section with structured data */}
              <section>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
                  <GraduationCap
                    className="w-6 md:w-7 h-6 md:h-7 text-purple-400 mr-4"
                    aria-hidden="true"
                  />
                  Education & Academic Background
                </h3>
                <div className="space-y-4 md:space-y-6">
                  <div
                    className="card-gradient p-6 md:p-8 rounded-xl border border-white/5 shadow-md hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group"
                    itemScope
                    itemType="https://schema.org/EducationalOccupationalCredential"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div className="flex-1">
                        <h4
                          className="text-lg md:text-xl lg:text-2xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300"
                          itemProp="name"
                        >
                          Bachelor in Computer Applications (BCA)
                        </h4>
                        <p
                          className="text-purple-400 text-base md:text-lg mt-2"
                          itemProp="sourceOrganization"
                        >
                          Kalika Campus
                        </p>
                      </div>
                      <time
                        className="text-sm md:text-base border border-purple-400/50 text-gray-300 px-3 md:px-4 py-2 rounded-full whitespace-nowrap bg-purple-900/20 hover:bg-purple-900/30 hover:border-purple-400/70 hover:text-white transition-all duration-300 self-start"
                        itemProp="dateCreated"
                      >
                        2024 - Present
                      </time>
                    </div>
                  </div>
                  <div
                    className="card-gradient p-6 md:p-8 rounded-xl border border-white/5 shadow-md hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group"
                    itemScope
                    itemType="https://schema.org/EducationalOccupationalCredential"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div className="flex-1">
                        <h4
                          className="text-lg md:text-xl lg:text-2xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300"
                          itemProp="name"
                        >
                          Higher Secondary Education (+2)
                        </h4>
                        <p
                          className="text-purple-400 text-base md:text-lg mt-2"
                          itemProp="sourceOrganization"
                        >
                          Kanti Secondary School
                        </p>
                      </div>
                      <time
                        className="text-sm md:text-base border border-purple-400/50 text-gray-300 px-3 md:px-4 py-2 rounded-full whitespace-nowrap bg-purple-900/20 hover:bg-purple-900/30 hover:border-purple-400/70 hover:text-white transition-all duration-300 self-start"
                        itemProp="dateCreated"
                      >
                        2022 - 2023
                      </time>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Enhanced Footer */}
            <footer className="px-6 md:px-10 py-6 text-center text-gray-400 border-t border-white/5 bg-black/20">
              <p className="text-sm md:text-base">
                © 2025{" "}
                <span itemProp="name" className="text-purple-400 font-medium">
                  Bimal Pandey
                </span>
                . All rights reserved.
              </p>
            </footer>
          </article>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
