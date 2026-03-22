import React, { useState, useEffect } from 'react';

const navLinks = [
    { label: 'About',    href: '#about'    },
    { label: 'Skills',   href: '#skills'   },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact',  href: '#contact'  },
];

const LOGO_TEXT = 'AB';

const Navbar = () => {
    const [nav,           setNav]           = useState(false);
    const [scrolled,      setScrolled]      = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [logoText,      setLogoText]      = useState('');
    const [logoDone,      setLogoDone]      = useState(false);

    // Type "Akshat" once on mount
    useEffect(() => {
        let i = 0;
        const t = setInterval(() => {
            i++;
            setLogoText(LOGO_TEXT.slice(0, i));
            if (i >= LOGO_TEXT.length) {
                clearInterval(t);
                setLogoDone(true);
            }
        }, 110);
        return () => clearInterval(t);
    }, []);

    // Frosted-glass trigger
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Active section — fires when a section crosses the middle band of the viewport
    useEffect(() => {
        const ids = navLinks.map(l => l.href.slice(1));
        const observers = ids.map(id => {
            const el = document.getElementById(id);
            if (!el) return null;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
            );
            obs.observe(el);
            return obs;
        });
        return () => observers.forEach(obs => obs?.disconnect());
    }, []);

    const handleNav = () => setNav(prev => !prev);
    const closeOverlay = (e) => { if (e.target.id === 'overlay') setNav(false); };

    return (
        <>
            {/* ── Fixed bar ── */}
            <div
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? 'bg-black/70 backdrop-blur-md border-b border-white/10 shadow-lg'
                        : 'bg-transparent'
                }`}
            >
                <div className='max-w-[1200px] mx-auto px-4 flex justify-between items-center h-[70px]'>
                    <h1
                        data-text="AB"
                        className='glitch-heading text-3xl font-extrabold tracking-tighter flex items-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500'
                    >
                        {logoText}
                        {!logoDone && (
                            <span className='inline-block w-[2px] h-[1em] bg-pink-500 cursor-blink ml-[2px]' />
                        )}
                    </h1>

                    {/* Hamburger */}
                    <div className='md:hidden'>
                        <button onClick={handleNav} className='text-white p-4'>
                            {nav ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Desktop links */}
                    <ul className='hidden md:flex items-center'>
                        {navLinks.map(({ label, href }) => {
                            const id = href.slice(1);
                            const isActive = activeSection === id;
                            return (
                                <li key={id} className='relative px-5 py-4'>
                                    <a
                                        href={href}
                                        className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                                            isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                                        }`}
                                    >
                                        {label}
                                    </a>
                                    {/* Sliding gradient underline */}
                                    <span
                                        className={`absolute bottom-2 left-1/2 -translate-x-1/2 h-[2px] rounded-full
                                                    bg-gradient-to-r from-red-500 to-pink-500
                                                    transition-all duration-300 ease-out ${
                                            isActive ? 'w-4/5 opacity-100' : 'w-0 opacity-0'
                                        }`}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            {/* Spacer so Hero isn't hidden under the fixed bar */}
            <div className='h-[70px]' />

            {/* Overlay */}
            {nav && (
                <div
                    id='overlay'
                    className='fixed inset-0 bg-black/50 z-40'
                    onClick={closeOverlay}
                />
            )}

            {/* Mobile drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-[60%] bg-black z-50
                            transition-transform duration-500 ease-in-out ${
                    nav ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <h1 className='text-2xl font-extrabold tracking-tighter m-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500'>AB</h1>
                <ul className='p-6 text-xl space-y-2'>
                    {navLinks.map(({ label, href }) => {
                        const id = href.slice(1);
                        const isActive = activeSection === id;
                        return (
                            <li key={id}>
                                <a
                                    href={href}
                                    onClick={handleNav}
                                    className={`block px-4 py-3 rounded-xl transition-colors duration-200 ${
                                        isActive
                                            ? 'text-white bg-white/10'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default Navbar;
