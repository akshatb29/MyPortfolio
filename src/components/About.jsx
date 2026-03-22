import React, { useState, useRef } from "react";
import useInView from "../hooks/useInView";

const experience = [
    {
        company: 'H2looP AI',
        role: 'Summer Intern',
        period: 'Jul 2024 to Sept 2024',
        description: "Built a pipeline that automatically converted 50+ messy technical PDFs into clean, structured training data for LLMs. Extracted specs, C code snippets, and register maps that would've taken weeks to process by hand.",
        tags: ['Python', 'OCR', 'LLM Data Prep'],
        glowColor: 'rgba(168,85,247,0.10)',
    },
    {
        company: 'Verifast Tech Labs',
        role: 'AI Intern',
        period: 'Dec 2025 to Present',
        description: 'Designed and owned the full architecture of an agentic system that lets the team update a production AI chatbot in about 1 minute. What used to take days of manual coordination. Also improved answer accuracy by ~30% through better RAG retrieval and prompt tuning with DSPy.',
        tags: ['Agentic AI', 'RAG', 'DSPy', 'LangGraph'],
        glowColor: 'rgba(236,72,153,0.10)',
    },
];

/* Spotlight cursor-glow card */
const SpotlightCard = ({ children, className = "", glowColor = "rgba(249,115,22,0.10)" }) => {
    const ref = useRef(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    return (
        <div
            ref={ref}
            onMouseMove={(e) => {
                const r = ref.current.getBoundingClientRect();
                setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${className}`}
            style={{
                background: hovered
                    ? `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, ${glowColor}, rgba(255,255,255,0.025) 60%)`
                    : "rgba(255,255,255,0.025)",
                border: hovered
                    ? "1px solid rgba(255,255,255,0.18)"
                    : "1px solid rgba(255,255,255,0.07)",
                boxShadow: hovered ? "0 0 40px 0 rgba(249,115,22,0.04)" : "none",
            }}
        >
            {children}
        </div>
    );
};

/* Static border card (no spinning animation) */
const BorderCard = ({ children, className = "" }) => (
    <div
        className={`relative rounded-2xl ${className}`}
        style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
    >
        {children}
    </div>
);

/* Ticker tape */
const TICKER_ITEMS = [
    "GenAI",
    "ML Pipelines",
    "Fullstack Dev",
    "Distributed Systems",
    "Agentic AI",
    "LLMs",
    "React",
    "Python",
    "System Design",
];

const Ticker = () => {
    const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
    return (
        <div className="relative overflow-hidden py-3 border-y border-white/[0.06] my-10">
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />
            <div className="about-ticker-track flex gap-10 whitespace-nowrap">
                {items.map((item, i) => (
                    <span key={i} className="flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-gray-500">
                        <span className="w-1 h-1 rounded-full bg-pink-500 inline-block flex-shrink-0" />
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

/* Glitch heading */
const GlitchHeading = ({ text, className = "" }) => (
    <h2
        className={`about-glitch font-extrabold tracking-tighter select-none ${className}`}
        data-text={text}
    >
        {text}
    </h2>
);

/* Main component */
const About = () => {
    const [sectionRef, sectionInView] = useInView(0.08);

    return (
        <section
            id="about"
            className="relative bg-black text-white py-28 px-6 overflow-hidden"
        >
            {/* Dot-grid background */}
            <div
                className="absolute inset-0 -z-20 opacity-[0.18]"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            {/* Ambient blobs */}
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-pink-600/12 blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-pink-700/10 blur-[100px] -z-10 pointer-events-none" />

            <div ref={sectionRef} className="max-w-6xl mx-auto">

                {/* Section label */}
                <div className={`flex items-center gap-3 mb-6 about-stagger-1 ${sectionInView ? "about-stagger-visible" : ""}`}>
                    <span className="h-px w-10 bg-pink-500/60" />
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-pink-400/80">
                        Who I Am
                    </span>
                </div>

                {/* Glitch heading */}
                <div className={`about-stagger-2 ${sectionInView ? "about-stagger-visible" : ""}`}>
                    <GlitchHeading
                        text="ABOUT ME"
                        className="text-5xl md:text-7xl lg:text-8xl primary-color mb-2"
                    />
                </div>

                {/* Ticker */}
                <div className={`about-stagger-3 ${sectionInView ? "about-stagger-visible" : ""}`}>
                    <Ticker />
                </div>

                {/* Main grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

                    {/* Left: bio card */}
                    <div className={`lg:col-span-3 about-stagger-4 ${sectionInView ? "about-stagger-visible" : ""}`}>
                        <BorderCard className="h-full">
                            <div className="p-8 md:p-10 flex flex-col h-full gap-6">
                                {/* Bio */}
                                <div className="space-y-4">
                                    <p className="text-gray-200 text-lg leading-relaxed font-light">
                                        Hi, I'm <span className="text-white font-semibold">Akshat Bhandari</span>, a final-year CS student at{" "}
                                        <span className="text-pink-400 font-semibold">PES University, Bengaluru</span>.
                                        Growing up in a family of CS engineers, I was always around software and machines. It shaped how I think.
                                    </p>
                                    <p className="text-gray-400 text-base leading-relaxed">
                                        Through college, <span className="text-gray-300">AI completely took over my curiosity</span>. The idea that you could use math to make a machine reason, learn, and act. I was hooked.
                                        Understanding transformers for the first time, wrapping my head around attention mechanisms, going deep into ML algorithms. All of it just clicked for me.
                                    </p>
                                    <p className="text-gray-400 text-base leading-relaxed">
                                        What I really want to build are <span className="text-gray-300">large-scale autonomous systems</span> that genuinely help people.
                                        And with AI-assisted development changing how fast and how well you can ship, I'm all in on mastering that too.
                                    </p>
                                </div>
                            </div>
                        </BorderCard>
                    </div>

                    {/* Right: experience cards */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        {experience.map((exp, i) => (
                            <div
                                key={exp.company}
                                className={`about-stagger-${5 + i} ${sectionInView ? "about-stagger-visible" : ""}`}
                            >
                                <SpotlightCard className="p-6 flex flex-col gap-4" glowColor={exp.glowColor}>
                                    <div className="flex items-start justify-between gap-2">
                                        <div>
                                            <p className="text-white font-bold text-base leading-tight">{exp.company}</p>
                                            <p className="text-gray-500 text-sm mt-0.5">{exp.role}</p>
                                        </div>
                                        <span className="text-[11px] text-gray-600 flex-shrink-0">{exp.period}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-500"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </SpotlightCard>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
