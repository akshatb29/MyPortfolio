import React, { useState } from 'react';


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='bg-black text-gray-100 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
            <h1 className='text-3xl font-bold primary-color ml-0'>AKSHAT'S PORTFOLIO</h1>
            <ul className='hidden md:flex'>
                <li className='p-5 transition-transform transform hover:scale-110'><a href='#about'>About</a></li>
                <li className='p-5 transition-transform transform hover:scale-110 text-1.5xl'><a href='#skills'>Skills</a></li>
                <li className='p-5 transition-transform transform hover:scale-110'><a href='#projects'>Projects</a></li>
                <li className='p-5 transition-transform transform hover:scale-110'><a href='#contact'>Contact</a></li>

            </ul>

        </div>
    );
};

export default Navbar;
