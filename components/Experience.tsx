import React from "react";
import Image from "next/image";

const WorkCard = ({
    title,
    imgSrc
}: {
    title: string;
    imgSrc: string;
}) => {
    return (
        <div className="project-card p-4 h-full flex flex-col">
            <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-md">
                <Image
                    src={imgSrc}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                />
            </div>

            <h3 className="text-sm text-gray-300 mb-2">
                {title}
            </h3>

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
        { id: 1, title: "CIB on the Mobile", imgSrc: "/work1.jpg" },
        { id: 2, title: "CIB on the Mobile", imgSrc: "/work2.jpg" },
        { id: 3, title: "CIB on the Mobile", imgSrc: "/work3.jpg" },
        { id: 4, title: "CIB on the Mobile", imgSrc: "/work4.jpg" },
    ];

    return (
        <section className="py-16 px-4 sm:px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-12">Work Experience</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {workItems.map((item) => (
                        <WorkCard key={item.id} title={item.title} imgSrc={item.imgSrc} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-xl font-medium mb-2">
                        I'm currently looking to join a <span className="text-purple-400">cross-functional</span> team
                    </p>
                    <p className="text-gray-400 text-sm max-w-xl mx-auto">
                        that values improving people's lives through accessible design
                    </p>

                    {/* Tech stack logos */}
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {[...Array(10)].map((_, index) => (
                            <div
                                key={index}
                                className="tech-item w-10 h-10 flex items-center justify-center"
                            >
                                <div className="w-5 h-5 rounded-full bg-purple-500/50"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;