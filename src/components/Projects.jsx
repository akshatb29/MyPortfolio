//projects
import React from 'react';
import github1 from '../assets/github1.png';

const projectData = [
    // Top 3 main projects (updated)
    {
        title: "SelfAlign",
        link: "https://github.com/selfalign-repo",
        points: [
            "Autonomous AI framework that plans, generates, tests, and corrects software applications",
            "Multi-agent architecture with planners, generators, verifiers, and correctors using Grapgh Of Thought using LangGraph",
            "Multi-strategy generation (Natural Language, Pseudocode, Symbolic Reasoning) for adaptive coding",
            "Self-correcting quality loop with Docker-based testing and automated error fixing"
        ]
    },
    {
        title: "CoverAI",
        link: "https://github.com/coverai-repo",
        points: [
            "Generates tailored cover letters from resumes and job descriptions using AI",
            "Full-stack implementation using React (frontend) and FastAPI (backend) with secure JWT authentication",
            "LLM-powered core (Gemini + LangChain) for personalized and structured output",
            "SQL database integration for user management and saved document handling"
        ]
    },
    {
        title: "Zero-Day Attack Detection & Mitigation",
        link: "https://github.com/your-zero-day-repo",
        points: [
            "Reinforcement Learning-based system for real-time detection and mitigation of zero-day attacks",
            "Adaptive model continuously learns evolving attack patterns using synthetic WGAN-generated traffic",
            "Mininet + POX Controller used for realistic network simulation and traffic control",
            "Streaming and processing pipeline powered by Apache Kafka and Logstash"
        ]
    },

    {
        title: "Encryption-Decryption Using TCP",
        link: "https://github.com/akshatb29/ENCRYPTION-DECRYPTION-USING-TCP",
        points: [
            "Client-server application for secure file transfer using TCP sockets over SSL",
            "Implements XOR-based custom encryption with a shared secret key",
            "Server handles multiple concurrent clients using Python threading and SSL certificates",
            "Client uploads files, receives encrypted response, and performs real-time decryption preview"
        ]
    },

    {
        title: "EchoSense",
        link: "https://github.com/echosense-repo",
        points: [
            "Content-based recommendation system suggesting TED Talks based on user preferences",
            "Built using NLP techniques (TF-IDF Vectorization + Cosine Similarity) for similarity scoring",
            "Processed 4,400+ talks (2006–2020) using Pandas, NumPy, and Scikit-learn pipelines",
            "Tools & Technologies: Python, NLTK, Scikit-learn, Pandas, Matplotlib"
        ]
    },
    // Remaining 6 projects unchanged
    {
        title: "Hybrid Neural Network 3D Scene Reconstruction",
        link: "https://github.com/your-3d-reconstruction-repo",
        points: [
            "Hybrid deep learning model that reconstructs high-fidelity 3D scenes from sparse 2D images",
            "Integrates voxel grids, mesh generation, and Neural Radiance Fields (NeRF) for high-quality 3D output",
            "Uses KITTI dataset for depth-aware feature extraction, disparity mapping, and scene reconstruction",
            "Applications in autonomous navigation, robotics, and AR/VR systems with reduced LiDAR dependency"
        ]
    }
    ,

    ,
    // {
    //     title: "Portfolio Website",
    //     link: "#",
    //     points: [
    //         "Personal portfolio showcasing skills & projects",
    //         "Built with React & Tailwind",
    //         "Fully responsive"
    //     ]
    // },
    // ,
    // {
    //     title: "Weather Dashboard",
    //     link: "#",
    //     points: [
    //         "Fetches weather data using OpenWeather API",
    //         "Responsive UI with graphs",
    //         "Built with React and Chart.js"
    //     ]
    // }
];

const Projects = () => {
    return (
        <section className="max-w-[1400px] mx-auto px-6 py-16" id="projects">
            <h2 className="text-5xl font-extrabold px-5 primary-color text-center mb-16">
                Projects
            </h2>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {projectData.map((project, index) => (
                    <div
                        key={index}
                        className="relative bg-white/5 border border-white/10 
                                   rounded-2xl shadow-lg p-6 backdrop-blur-sm 
                                   hover:shadow-xl hover:border-purple-500/50
                                   transition-all duration-300 group 
                                   flex flex-col justify-between 
                                   min-h-[320px]"
                    >
                        <div>
                            <h3 className="flex items-center text-xl font-bold text-white mb-4">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={github1}
                                        alt="GitHub"
                                        className="w-8 h-8 mr-3 opacity-80 group-hover:opacity-100 transition"
                                    />
                                </a>
                                {project.title}
                            </h3>
                            <ul className="text-sm text-gray-300 space-y-2 text-left list-disc list-outside pl-5">
                                {project.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Glow hover border */}
                        <div className="absolute inset-0 rounded-2xl border border-transparent 
                                        group-hover:border-purple-400/50 
                                        group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition">
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
