import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onDone }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const t1 = setTimeout(() => setFadeOut(true), 1300);
        const t2 = setTimeout(() => onDone(),         1800);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, [onDone]);

    return (
        <div
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center gap-6 px-4 overflow-hidden"
            style={{
                opacity:    fadeOut ? 0 : 1,
                transition: 'opacity 0.5s ease',
                pointerEvents: fadeOut ? 'none' : 'auto',
            }}
        >
            <div className="overflow-hidden">
                <h1
                    data-text="Akshat"
                    className="glitch-heading text-6xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500"
                    style={{ animation: 'fadeSlideUp 0.6s ease-out both', animationDelay: '0.1s' }}
                >
                    Akshat
                </h1>
            </div>
            {/* Thin loading bar */}
            <div className="w-32 h-[2px] rounded-full bg-white/10 overflow-hidden">
                <div
                    className="h-full rounded-full bg-gradient-to-r from-orange-500 to-pink-500"
                    style={{ animation: 'loadBar 1.2s ease-out forwards' }}
                />
            </div>
        </div>
    );
};

export default LoadingScreen;
