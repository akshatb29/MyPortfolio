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
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] min-h-[calc(100vh-70px)] mx-auto py-8 bg-black'>
            <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px] anim-left' style={{ animationDelay: '0.1s' }}>
                <img src={dev2} height={350} width={350} alt='Akshat Bhandari' />
            </div>

            <div className='col-span-2 px-5 my-auto relative'>
                <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold anim-up' style={{ animationDelay: '0.2s' }}>
                    <span className='primary-color'>Hello!<br /> I am Akshat.</span>
                </h1>

                <div className='absolute right-0 top-0 flex flex-col items-center space-y-4 mt-3 mr-3 m-0 anim-right' style={{ animationDelay: '0.8s' }}>
                    <a
                        href="https://github.com/akshatb29"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='transition-transform transform hover:scale-110'
                    >
                        <img src={github1} alt='GitHub' className='h-10 w-10' />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/akshat-bhandari-a7492b24b/'
                        target='_blank'
                        rel="noopener noreferrer"
                        className='transition-transform transform hover:scale-110'
                    >
                        <img src={linkedin1} alt='LinkedIn' className='h-10 w-10' />
                    </a>
                </div>

                <p className='text-white sm:text-lg lg:text-xl mt-0 anim-up' style={{ animationDelay: '0.5s' }}>
                    I'm a 4<sup>th</sup> year student Pursuing BTech in Computer Science at PES University
                </p>

                {/* Role cycler — sits after the subtitle */}
                <div className='inline-flex items-center mt-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 anim-up' style={{ animationDelay: '0.6s' }}>
                    <span className='text-base sm:text-lg font-semibold primary-color'>{typed}</span>
                    <span className='inline-block w-[3px] rounded-[1px] bg-pink-500 cursor-blink ml-[2px]' style={{ height: '1.2em', verticalAlign: 'middle' }} />
                </div>

                <div className='my-8 anim-up' style={{ animationDelay: '0.7s' }}>
                    <a
                        href="/Akshat_Bhandari_Resume.pdf"
                        download
                        className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white"
                    >
                        Download Resume
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 text-white hover:border-none"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
