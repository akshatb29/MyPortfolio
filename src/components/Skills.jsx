import React from 'react';
import useInView from '../hooks/useInView';

const cloudItems = [
    // ── ML (sky) — upper-left ─────────────────────────────────────────────
    { text: 'PyTorch',           size: 'text-lg',  color: 'text-gray-300',   bold: false, left: '15%', top: '6%',  float: 'float3', dur: '8s', delay: '1.3s' },
    { text: 'Pandas',            size: 'text-base',color: 'text-gray-400',   bold: false, left: '30%', top: '7%',  float: 'float1', dur: '7s', delay: '2.8s' },
    { text: 'ML',                size: 'text-2xl', color: 'text-sky-400',    bold: true,  left: '18%', top: '17%', float: 'float4', dur: '6s', delay: '1.6s' },
    { text: 'NumPy',             size: 'text-base',color: 'text-gray-400',   bold: false, left: '13%', top: '27%', float: 'float2', dur: '9s', delay: '0.6s' },
    { text: 'TensorFlow',        size: 'text-base',color: 'text-gray-400',   bold: false, left: '30%', top: '23%', float: 'float1', dur: '7s', delay: '2.1s' },
    { text: 'Scikit-learn',      size: 'text-sm',  color: 'text-gray-500',   bold: false, left: '16%', top: '33%', float: 'float3', dur: '6s', delay: '3.3s' },
    { text: 'Docker',            size: 'text-base',color: 'text-gray-400',   bold: false, left: '30%', top: '31%', float: 'float4', dur: '8s', delay: '0.7s' },

    // ── GENAI (emerald) — upper-right ─────────────────────────────────────
    { text: 'LangGraph',         size: 'text-base',color: 'text-gray-400',   bold: false, left: '57%', top: '6%',  float: 'float4', dur: '7s', delay: '0.9s' },
    { text: 'LangChain',         size: 'text-base',color: 'text-gray-400',   bold: false, left: '72%', top: '8%',  float: 'float2', dur: '9s', delay: '3.4s' },
    { text: 'Agentic Frameworks',size: 'text-sm',  color: 'text-gray-500',   bold: false, left: '77%', top: '16%', float: 'float1', dur: '6s', delay: '2s'   },
    { text: 'GENAI',             size: 'text-2xl', color: 'text-emerald-400',bold: true,  left: '62%', top: '19%', float: 'float3', dur: '6s', delay: '1.6s' },
    { text: 'DSPy',              size: 'text-base',color: 'text-gray-400',   bold: false, left: '57%', top: '29%', float: 'float1', dur: '9s', delay: '3.1s' },
    { text: 'FAISS',             size: 'text-base',color: 'text-gray-400',   bold: false, left: '72%', top: '30%', float: 'float3', dur: '7s', delay: '2.6s' },
    { text: 'Prompt Engineering',size: 'text-sm',  color: 'text-gray-500',   bold: false, left: '62%', top: '37%', float: 'float4', dur: '6s', delay: '1.4s' },
    { text: 'RAG',               size: 'text-lg',  color: 'text-gray-300',   bold: false, left: '80%', top: '24%', float: 'float2', dur: '8s', delay: '1.8s' },

    // ── FULLSTACK (purple) — lower-left ───────────────────────────────────
    { text: 'JavaScript',        size: 'text-xl',  color: 'text-gray-300',   bold: false, left: '15%', top: '54%', float: 'float2', dur: '8s', delay: '0s'   },
    { text: 'Next.js',           size: 'text-sm',  color: 'text-gray-500',   bold: false, left: '33%', top: '53%', float: 'float1', dur: '9s', delay: '1.5s' },
    { text: 'FULLSTACK',         size: 'text-2xl', color: 'text-purple-400', bold: true,  left: '18%', top: '63%', float: 'float4', dur: '6s', delay: '0.5s' },
    { text: 'React',             size: 'text-xl',  color: 'text-gray-300',   bold: false, left: '14%', top: '73%', float: 'float3', dur: '7s', delay: '3s'   },
    { text: 'Node.js',           size: 'text-base',color: 'text-gray-400',   bold: false, left: '33%', top: '68%', float: 'float2', dur: '8s', delay: '2s'   },
    { text: 'SQL',               size: 'text-lg',  color: 'text-gray-300',   bold: false, left: '16%', top: '80%', float: 'float1', dur: '7s', delay: '1s'   },
    { text: 'FastAPI',           size: 'text-base',color: 'text-gray-400',   bold: false, left: '33%', top: '77%', float: 'float3', dur: '9s', delay: '2.7s' },
    { text: 'REST APIs',         size: 'text-sm',  color: 'text-gray-500',   bold: false, left: '23%', top: '86%', float: 'float4', dur: '6s', delay: '0.8s' },

    // ── DISTRIBUTED SYSTEMS (pink) — lower-right ──────────────────────────
    { text: 'Kafka',             size: 'text-lg',  color: 'text-gray-300',   bold: false, left: '56%', top: '55%', float: 'float1', dur: '7s', delay: '1.2s' },
    { text: 'HDFS',              size: 'text-base',color: 'text-gray-400',   bold: false, left: '71%', top: '58%', float: 'float3', dur: '8s', delay: '2.4s' },
    { text: 'DISTRIBUTED',       size: 'text-2xl', color: 'text-pink-400',   bold: true,  left: '54%', top: '65%', float: 'float2', dur: '7s', delay: '0.4s' },
    { text: 'SYSTEMS',           size: 'text-2xl', color: 'text-pink-400',   bold: true,  left: '54%', top: '72%', float: 'float2', dur: '7s', delay: '0.4s' },
    { text: 'Redis',             size: 'text-lg',  color: 'text-gray-300',   bold: false, left: '70%', top: '75%', float: 'float4', dur: '6s', delay: '3s'   },
];

const Skills = () => {
    const [headingRef, headingInView] = useInView();
    const [cloudRef,   cloudInView]   = useInView(0.05);

    return (
        <div
            className="relative bg-black text-gray-300 w-full min-h-screen flex items-center justify-center px-4 py-20"
            id="skills"
        >
            <div className="absolute top-[18%]  left-[14%]  w-[28vw] h-[22vh] bg-sky-600/10      blur-[120px] rounded-full -z-10" />
            <div className="absolute top-[18%]  right-[14%] w-[24vw] h-[20vh] bg-emerald-600/10  blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-[18%] left-[14%] w-[28vw] h-[25vh] bg-purple-600/10  blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-[18%] right-[14%] w-[28vw] h-[25vh] bg-pink-600/10   blur-[120px] rounded-full -z-10" />

            <div className="max-w-5xl mx-auto w-full">
                <div className={`reveal ${headingInView ? 'visible' : ''} flex items-center gap-3 mb-6`}>
                    <span className="h-px w-10 bg-pink-500/60" />
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-pink-400/80">What I Know</span>
                </div>
                <h2
                    ref={headingRef}
                    data-text="SKILLS AND TECHNOLOGIES"
                    className={`reveal ${headingInView ? 'visible' : ''} glitch-heading text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-12 primary-color`}
                >
                    SKILLS AND TECHNOLOGIES
                </h2>

                {/* Mobile: clustered groups */}
                <div className="md:hidden flex flex-col gap-6">
                    {[
                        { label: 'ML', color: 'text-sky-400', border: 'border-sky-500/30', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Docker'] },
                        { label: 'GENAI', color: 'text-emerald-400', border: 'border-emerald-500/30', items: ['LangGraph', 'LangChain', 'RAG', 'DSPy', 'FAISS', 'Prompt Engineering', 'Agentic Frameworks'] },
                        { label: 'FULLSTACK', color: 'text-purple-400', border: 'border-purple-500/30', items: ['React', 'Next.js', 'JavaScript', 'Node.js', 'FastAPI', 'SQL', 'REST APIs'] },
                        { label: 'DISTRIBUTED', color: 'text-pink-400', border: 'border-pink-500/30', items: ['Kafka', 'HDFS', 'Redis'] },
                    ].map(({ label, color, border, items }) => (
                        <div key={label} className={`rounded-2xl border ${border} bg-white/[0.02] p-4`}>
                            <p className={`text-xs font-extrabold tracking-widest uppercase mb-3 ${color}`}>{label}</p>
                            <div className="flex flex-wrap gap-2">
                                {items.map(item => (
                                    <span key={item} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 font-medium">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop: floating word cloud */}
                <div
                    ref={cloudRef}
                    className="hidden md:block relative w-full"
                    style={{ height: '700px' }}
                >
                    {cloudItems.map(({ text, size, color, bold, left, top, float: f, dur, delay }, i) => (
                        <span
                            key={text}
                            className={`
                                absolute reveal ${cloudInView ? 'visible' : ''}
                                ${size} ${color}
                                ${bold ? 'font-extrabold tracking-tight' : 'font-medium'}
                                cursor-default select-none
                                transition-[opacity,transform,filter] duration-300
                                hover:brightness-[1.8] hover:scale-110
                            `}
                            style={{
                                left,
                                top,
                                transitionDelay: cloudInView ? `${i * 40}ms` : '0ms',
                                animation: cloudInView
                                    ? `${f} ${dur} ease-in-out infinite ${delay}`
                                    : 'none',
                            }}
                        >
                            {text}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
