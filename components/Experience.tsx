import React from "react";

const WorkCard = ({
  title,
  company,
  duration,
  description,
}: {
  title: string;
  company: string;
  duration: string;
  description: string;
}) => {
  return (
    <div className="project-card p-6 h-full flex flex-col bg-gray-900/50 border border-gray-800 rounded-lg">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-purple-400 text-sm font-medium mb-2">{company}</p>
        <p className="text-gray-400 text-xs">{duration}</p>
      </div>

      <p className="text-gray-300 text-sm mb-4 flex-grow">{description}</p>

      <div className="mt-auto">
        <button className="text-xs border border-white/10 rounded px-3 py-1 hover:bg-white/5 transition-colors">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

const WorkExperience = () => {
  const workItems = [
    {
      id: 1,
      title: "Junior Full Stack Developer",
      company: "Synthbit Group PVT",
      duration: "July 2025 - Present",
      description:
        "Developing full-stack applications using modern web technologies. Working on both frontend and backend development, contributing to various projects and gaining hands-on experience in software development lifecycle.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-12">Work Experience</h2>

        <div className="grid grid-cols-1  gap-6">
          {workItems.map((item) => (
            <WorkCard
              key={item.id}
              title={item.title}
              company={item.company}
              duration={item.duration}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
