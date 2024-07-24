import React, { useState } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='relative z-50 bg-black bg-opacity-50 text-gray-100 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
            <h1 className='text-3xl font-bold primary-color ml-0'>AKSHAT'S PORTFOLIO</h1>

            {/* Hamburger Menu Button */}
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

            {/* Desktop Menu */}
            <ul className='hidden md:flex'>
                <li className='p-5 transition-transform transform hover:scale-110'><a href='#about'>About</a></li>
                <li className='p-5 transition-transform transform hover:scale-110 text-1.5xl'><a href='#skills'>Skills</a></li>
                <li className='p-5 transition-transform transform hover:scale-110'><a href='#projects'>Projects</a></li>
                <li className='p-5 transition-transform transform hover:scale-110'><a href='#contact'>Contact</a></li>
            </ul>

            {/* Mobile Menu */}
            <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] bg-opacity-80 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='text-3xl primary-color m-4 scroll-smooth'>Akshat's Portfolio</h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-5 transition-transform transform hover:scale-110'><a href='#about'>About</a></li>
                    <li className='p-5 transition-transform transform hover:scale-110'><a href='#skills'>Skills</a></li>
                    <li className='p-5 transition-transform transform hover:scale-110'><a href='#projects'>Projects</a></li>
                    <li className='p-5 transition-transform transform hover:scale-110'><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
