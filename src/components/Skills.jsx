//skills
import React from 'react';


// Data object for skills, making it easy to manage and update.
const skillsData = {
    frontend: [
        "HTML", "CSS", "JavaScript (ES6+)", "React", "Next.js", "Tailwind CSS", "Framer Motion"
    ],
    backend: [
        "Node.js", "Express", "Python", "FastAPI", "SQL (PostgreSQL)", "MongoDB", "REST APIs", "GraphQL"
    ],
    mlAndCloud: [
        "PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "Docker", "AWS (S3, EC2)", "Git & GitHub", "Agile Methodologies"
    ]
};

// A reusable component for displaying each skill as a "pill" or "tag".
const SkillPill = ({ skill }) => (
    <div className="py-2 px-4 bg-gray-800/60 border border-purple-900/50 rounded-full text-sm 
                 font-medium text-gray-300 transition-all duration-300
                 hover:bg-purple-600/40 hover:text-white hover:shadow-lg hover:shadow-purple-600/20
                 hover:scale-105 cursor-default">
        {skill}
    </div>
);

// Main Skills component
const Skills = () => {
    return (
        <div className="relative bg-black text-gray-300 w-full min-h-screen flex items-center justify-center px-4 py-20" id="skills">
            {/* Decorative Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[800px] h-[60vh] max-h-[600px] 
                     bg-purple-600/20 blur-[150px] rounded-full -z-10" />

            <div className="max-w-6xl mx-auto w-full">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 md:mb-20 text-center primary-color ">
                    SKILLS AND TECHNOLOGIES
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Frontend Category */}
                    <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl">
                        <h2 className="text-2xl font-bold text-purple-400 mb-6">
                            Frontend
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {skillsData.frontend.map((skill, index) => (
                                <SkillPill key={index} skill={skill} />
                            ))}
                        </div>
                    </div>

                    {/* Backend Category */}
                    <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl transform md:scale-105">
                        <h2 className="text-2xl font-bold text-pink-400 mb-6">
                            Backend & Systems
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {skillsData.backend.map((skill, index) => (
                                <SkillPill key={index} skill={skill} />
                            ))}
                        </div>
                    </div>

                    {/* ML & Cloud Category */}
                    <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl">
                        <h2 className="text-2xl font-bold text-sky-400 mb-6">
                            ML & Cloud
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {skillsData.mlAndCloud.map((skill, index) => (
                                <SkillPill key={index} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main App component to render the Skills section
export default function App() {
    return (
        <div className="bg-black">
            <Skills />
        </div>
    );
}

