import { FC } from "react";
import {
    Code2,
    Server,
    Database,
    Terminal,
    GitBranch,
    Flame,
    Palette,
    Lightbulb,
    Rocket,
    Boxes,
    Code,
    TabletSmartphone,
} from "lucide-react";

/**
 * Interface for tech stack item
 */
interface TechItem {
    name: string;
    icon: React.ReactNode;
    description: string;
}

/**
 * Skills component with SEO optimizations
 * Displays skills in a centered, balanced grid layout with rounded cards
 */
const Skills: FC = () => {
    // Comprehensive tech stack
    const techStack: TechItem[] = [
        {
            name: "JavaScript",
            icon: <Code2 size={18} className="text-yellow-400" />,
            description: "Core language for web development, including ES6+ features and modern patterns"
        },
        {
            name: "TypeScript",
            icon: <Code size={18} className="text-blue-400" />,
            description: "Type-safe JavaScript for building scalable applications"
        },
        {
            name: "React",
            icon: <Boxes size={18} className="text-sky-400" />,
            description: "Component-based UI library for building interactive interfaces"
        },
        {
            name: "Next.js",
            icon: <Terminal size={18} className="text-white" />,
            description: "React framework for production with SSR and static site generation"
        },
        {
            name: "Node.js",
            icon: <Server size={18} className="text-green-500" />,
            description: "JavaScript runtime for server-side applications"
        },
        {
            name: "Express",
            icon: <Rocket size={18} className="text-gray-300" />,
            description: "Web framework for Node.js to build APIs and web applications"
        },
        {
            name: "MongoDB",
            icon: <Database size={18} className="text-green-400" />,
            description: "NoSQL database for flexible, document-based data storage"
        },
        {
            name: "PostgreSQL",
            icon: <Database size={18} className="text-blue-500" />,
            description: "Powerful open-source relational database system"
        },
        {
            name: "Tailwind CSS",
            icon: <Palette size={18} className="text-cyan-400" />,
            description: "Utility-first CSS framework for rapid UI development"
        },
        {
            name: "Redux",
            icon: <Lightbulb size={18} className="text-purple-400" />,
            description: "State management library for JavaScript applications"
        },
        {
            name: "Zustand",
            icon: <Lightbulb size={18} className="text-amber-400" />,
            description: "Minimalistic state management solution for React"
        },
        {
            name: "Git",
            icon: <GitBranch size={18} className="text-orange-400" />,
            description: "Version control system for code management"
        },
        {
            name: "Firebase",
            icon: <Flame size={18} className="text-yellow-500" />,
            description: "Platform for building web and mobile applications"
        },
        {
            name: "Docker",
            icon: <Boxes size={18} className="text-blue-400" />,
            description: "Containerization platform for application deployment"
        },
        {
            name: "AWS",
            icon: <Server size={18} className="text-yellow-500" />,
            description: "Cloud computing services for modern application deployment"
        },
        {
            name: "Figma",
            icon: <Palette size={18} className="text-pink-400" />,
            description: "UI/UX design tool for creating interactive design prototypes"
        },
        {
            name: "Photoshop",
            icon: <Palette size={18} className="text-blue-300" />,
            description: "Photo editing and digital design software"
        },

        {
            name: "Responsive Design",
            icon: <TabletSmartphone size={18} className="text-blue-300" />,
            description: "Creating interfaces that work across all device sizes"
        }
    ];


    // Use original tech stack order
    const sortedTechStack = [...techStack];

    return (
        <section
            id="skills-section"
            className="py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden"
            aria-labelledby="skills-heading"
            itemScope
            itemType="https://schema.org/ItemList"
        >
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2
                        id="skills-heading"
                        className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white"
                        itemProp="name"
                    >
                        Technical Skills
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base" itemProp="description">
                        My technical toolkit includes modern web technologies for building efficient,
                        scalable, and user-friendly applications.
                    </p>
                </div>

                {/* Improved grid for small screens */}
                <div className="grid grid-cols-3 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-3 justify-center">
                    {sortedTechStack.map((tech, index) => (
                        <div
                            key={tech.name}
                            className="backdrop-blur-sm rounded-xl p-2 flex flex-col items-center 
                                 border border-transparent
                                 hover:translate-y-[-5px] hover:scale-105 transition-transform duration-300 group"
                            itemProp="itemListElement"
                            itemScope
                            itemType="https://schema.org/ListItem"
                        >
                            <meta itemProp="position" content={String(index + 1)} />

                            <div className="text-center">
                                <div className="flex justify-center mb-1 group-hover:scale-110 transition-transform duration-300">
                                    {tech.icon}
                                </div>
                                <h4 className="text-xs font-medium truncate max-w-full" itemProp="name">{tech.name}</h4>
                            </div>
                            <div className="hidden" itemProp="description">{tech.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;