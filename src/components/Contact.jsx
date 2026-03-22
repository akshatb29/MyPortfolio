import React, { useState, useEffect, useRef } from 'react';
import useInView from '../hooks/useInView';

const LINES = [
    { delay: 0,    type: 'prompt',  text: 'akshat.contact()' },
    { delay: 600,  type: 'comment', text: '// initializing connection...' },
    { delay: 1200, type: 'output',  text: '' },
    { delay: 1400, type: 'key',     label: 'email',    value: 'ak.bhandari29@gmail.com',                    href: 'mailto:ak.bhandari29@gmail.com' },
    { delay: 1800, type: 'key',     label: 'linkedin', value: 'linkedin.com/in/akshatb29',                  href: 'https://www.linkedin.com/in/akshat-bhandari-a7492b24b/' },
    { delay: 2200, type: 'key',     label: 'github',   value: 'github.com/akshatb29',                       href: 'https://github.com/akshatb29' },
    { delay: 2600, type: 'output',  text: '' },
    { delay: 2800, type: 'comment', text: '// open to full-time SWE / ML / AI roles' },
    { delay: 3200, type: 'status',  text: 'ready.' },
];

const TerminalLine = ({ line, visible }) => {
    if (!visible) return null;

    if (line.type === 'output') return <div className="h-3" />;

    if (line.type === 'prompt') return (
        <div className="flex items-center gap-2 text-sm md:text-base">
            <span className="text-pink-500 font-bold select-none">❯</span>
            <span className="text-white font-mono">{line.text}</span>
        </div>
    );

    if (line.type === 'comment') return (
        <div className="text-gray-600 font-mono text-sm md:text-base pl-5">{line.text}</div>
    );

    if (line.type === 'status') return (
        <div className="flex items-center gap-2 pl-5 text-sm md:text-base">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
            <span className="text-green-400 font-mono font-semibold">{line.text}</span>
        </div>
    );

    if (line.type === 'key') return (
        <div className="flex items-baseline gap-0 font-mono text-sm md:text-base pl-5 group">
            <span className="text-pink-400 min-w-[90px]">{line.label}</span>
            <span className="text-gray-600 mr-3">:</span>
            <a
                href={line.href}
                target={line.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-pink-400 transition-colors duration-200"
            >
                {line.value}
            </a>
        </div>
    );

    return null;
};

const Contact = () => {
    const [sectionRef, inView] = useInView(0.2);
    const [visibleLines, setVisibleLines] = useState([]);
    const [showCursor, setShowCursor] = useState(true);
    const started = useRef(false);

    useEffect(() => {
        if (!inView || started.current) return;
        started.current = true;

        LINES.forEach((line, i) => {
            setTimeout(() => {
                setVisibleLines(prev => [...prev, i]);
            }, line.delay);
        });
    }, [inView]);

    // Blink cursor
    useEffect(() => {
        const t = setInterval(() => setShowCursor(p => !p), 530);
        return () => clearInterval(t);
    }, []);

    const allDone = visibleLines.length === LINES.length;

    return (
        <section
            id="contact"
            className="relative bg-black text-white py-24 px-6 min-h-[60vh] flex items-center"
        >
            {/* Ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-pink-600/8 blur-[120px] rounded-full -z-10 pointer-events-none" />

            <div ref={sectionRef} className="max-w-3xl mx-auto w-full">

                {/* Section label */}
                <div className="flex items-center gap-3 mb-10">
                    <span className="h-px w-10 bg-pink-500/60" />
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-pink-400/80">
                        Get In Touch
                    </span>
                </div>

                {/* Terminal window */}
                <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                        background: 'rgba(10,10,10,0.9)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: '0 0 80px 0 rgba(236,72,153,0.08), 0 30px 60px rgba(0,0,0,0.5)',
                    }}
                >
                    {/* Title bar */}
                    <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                        <div className="flex items-center gap-1.5 font-mono text-xs">
                            <span className="text-green-400 font-semibold">akshat</span>
                            <span className="text-gray-600">:</span>
                            <span className="text-blue-400">~/contact</span>
                            <span className="text-gray-600 ml-1">$</span>
                        </div>
                        <span className="text-[10px] text-gray-700 font-mono tracking-widest uppercase">bash</span>
                    </div>

                    {/* Terminal body */}
                    <div className="p-6 md:p-8 space-y-2 min-h-[260px]">
                        {LINES.map((line, i) => (
                            <TerminalLine
                                key={i}
                                line={line}
                                visible={visibleLines.includes(i)}
                            />
                        ))}

                        {/* Blinking cursor after last visible line */}
                        {!allDone && inView && (
                            <div className="flex items-center gap-2 pl-5">
                                <span
                                    className="inline-block w-[9px] h-[1.1em] rounded-[2px] bg-pink-400"
                                    style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.1s' }}
                                />
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
