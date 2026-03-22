import React, { useState, useEffect, useCallback } from "react";
import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import About         from "./components/About";
import Skills        from "./components/Skills";
import Projects      from "./components/Projects";
import Contact       from "./components/Contact";
import LoadingScreen from "./components/LoadingScreen";

/* ── Cursor glow ── */
const CursorGlow = () => {
    const [pos, setPos] = useState({ x: -400, y: -400 });

    useEffect(() => {
        const move = (e) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', move, { passive: true });
        return () => window.removeEventListener('mousemove', move);
    }, []);

    return (
        <div
            className="fixed pointer-events-none z-[9990]"
            style={{
                left:       pos.x - 250,
                top:        pos.y - 250,
                width:      500,
                height:     500,
                background: 'radial-gradient(circle, rgba(219,39,119,0.13) 0%, transparent 70%)',
                transition: 'left 0.08s ease-out, top 0.08s ease-out',
            }}
        />
    );
};

/* ── Noise / grain overlay ── */
const NoiseOverlay = () => (
    <div
        className="fixed inset-0 pointer-events-none z-[9991]"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '300px 300px',
            opacity: 0.038,
        }}
    />
);

function App() {
    const [loaded, setLoaded] = useState(false);
    const onDone = useCallback(() => setLoaded(true), []);

    return (
        <>
            {!loaded && <LoadingScreen onDone={onDone} />}

            <CursorGlow />
            <NoiseOverlay />

            <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease' }}>
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </>
    );
}

export default App;
