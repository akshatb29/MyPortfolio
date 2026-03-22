import React, { useState, useEffect } from 'react';
import dev2 from '../assets/dev2.png';
import linkedin1 from '../assets/linkedin1.png';
import github1 from '../assets/github1.png';

const PHRASES   = ['Agentic AI', 'ML Engineer', 'Big Data'];
const TYPE_MS   = 80;   // ms per character while typing
const DELETE_MS = 45;   // ms per character while deleting
const PAUSE_MS  = 1600; // pause at full phrase before deleting

const useTypewriter = (phrases) => {
    const [displayText,  setDisplayText]  = useState('');
    const [phraseIndex,  setPhraseIndex]  = useState(0);
    const [isDeleting,   setIsDeleting]   = useState(false);
    const [isPaused,     setIsPaused]     = useState(false);

    useEffect(() => {
        const current = phrases[phraseIndex];

        if (isPaused) {
            const t = setTimeout(() => setIsPaused(false), PAUSE_MS);
            return () => clearTimeout(t);
        }

        if (!isDeleting) {
            // Still typing
            if (displayText.length < current.length) {
                const t = setTimeout(
                    () => setDisplayText(current.slice(0, displayText.length + 1)),
                    TYPE_MS
                );
                return () => clearTimeout(t);
            }
            // Finished typing — pause before deleting
            setIsPaused(true);
            setIsDeleting(true);
        } else {
            // Still deleting
            if (displayText.length > 0) {
                const t = setTimeout(
                    () => setDisplayText(current.slice(0, displayText.length - 1)),
                    DELETE_MS
                );
                return () => clearTimeout(t);
            }
            // Finished deleting — move to next phrase
            setIsDeleting(false);
            setPhraseIndex((i) => (i + 1) % phrases.length);
        }
    }, [displayText, phraseIndex, isDeleting, isPaused, phrases]);

    return displayText;
};

const Hero = () => {
    const typed = useTypewriter(PHRASES);

    return (
        <div className='flex flex-col sm:grid sm:grid-cols-3 gap-8 max-w-[1200px] min-h-[calc(100vh-70px)] mx-auto px-6 py-12 bg-black'>

            {/* Illustration — centered on mobile, left col on desktop */}
            <div className='sm:col-span-1 my-auto mx-auto w-[200px] sm:w-[280px] lg:w-[380px] anim-left' style={{ animationDelay: '0.1s' }}>
                <img src={dev2} alt='Akshat Bhandari' className='w-full h-auto' />
            </div>

            {/* Text content */}
            <div className='sm:col-span-2 my-auto flex flex-col'>
                <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold anim-up' style={{ animationDelay: '0.2s' }}>
                    <span className='primary-color'>Hello!<br /> I am Akshat.</span>
                </h1>

                <p className='text-white sm:text-lg lg:text-xl mt-3 anim-up' style={{ animationDelay: '0.5s' }}>
                    I'm a 4<sup>th</sup> year student Pursuing BTech in Computer Science at PES University
                </p>

                {/* Role cycler */}
                <div className='inline-flex items-center mt-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 anim-up self-start' style={{ animationDelay: '0.6s' }}>
                    <span className='text-base sm:text-lg font-semibold primary-color'>{typed}</span>
                    <span className='inline-block w-[3px] rounded-[1px] bg-pink-500 cursor-blink ml-[2px]' style={{ height: '1.2em', verticalAlign: 'middle' }} />
                </div>

                {/* Buttons */}
                <div className='flex flex-col sm:flex-row gap-3 mt-8 anim-up' style={{ animationDelay: '0.7s' }}>
                    <a
                        href="/Akshat_Bhandari_Resume.pdf"
                        download
                        className="px-6 py-3 rounded-xl text-center bg-gradient-to-br from-orange-500 to-pink-500 text-white font-semibold"
                    >
                        Download Resume
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 rounded-xl text-center border border-gray-600 text-white hover:border-white transition-colors duration-200"
                    >
                        Contact
                    </a>
                </div>

                {/* Social icons — horizontal row */}
                <div className='flex items-center gap-4 mt-6 anim-right' style={{ animationDelay: '0.8s' }}>
                    <a href="https://github.com/akshatb29" target="_blank" rel="noopener noreferrer" className='transition-transform hover:scale-110'>
                        <img src={github1} alt='GitHub' className='h-9 w-9' />
                    </a>
                    <a href='https://www.linkedin.com/in/akshat-bhandari-a7492b24b/' target='_blank' rel="noopener noreferrer" className='transition-transform hover:scale-110'>
                        <img src={linkedin1} alt='LinkedIn' className='h-9 w-9' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
