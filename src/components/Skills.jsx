import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import reactImage from '../assets/react.png';
import c from '../assets/c1.png';
import cpp1 from '../assets/cpp1.png';
import python1 from '../assets/python1.png';

const Skills = () => {
    return (
        <div className='bg-black text-gray-300 max-w-[1100px] mx-auto px-4 py-8' id='skills'>
            <h1 className='  text-4xl md:text-5xl font-bold mb-16 text-center primary-color '>
                MY Tech Skills
            </h1>

            <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-8'>
                <div className='flex flex-col items-center transition-transform transform hover:scale-110'>
                    <img src={html} alt="HTML" width={100} height={100} />
                    <p className='mt-2 text-lg'>HTML</p>
                </div>

                <div className='flex flex-col items-center transition-transform transform hover:scale-110'>
                    <img src={css} alt="CSS" width={100} height={100} />
                    <p className='mt-2 text-lg'>CSS</p>
                </div>

                <div className='flex flex-col items-center transition-transform transform hover:scale-110'>
                    <img src={javascript} alt="JavaScript" width={100} height={100} />
                    <p className='mt-2 text-lg'>JavaScript</p>
                </div>

                <div className='flex flex-col items-center transition-transform transform hover:scale-110'>
                    <img src={tailwind} alt="Tailwind" width={100} height={100} />
                    <p className='mt-2 text-lg'>Tailwind</p>
                </div>

                <div className='flex flex-col items-center transition-transform transform hover:scale-110'>
                    <img src={reactImage} alt="React" width={100} height={100} />
                    <p className='mt-2 text-lg'>React</p>
                </div>

                <div className='flex flex-col items-center transition-transform transform hover:scale-110'>
                    <img src={python1} alt="Python" width={100} height={100} />
                    <p className='mt-2 text-lg'>Python</p>
                </div>

                <div className='flex flex-col items-center transition-transform transform hover:scale-110'>
                    <img src={c} alt="C" width={100} height={100} />
                    <p className='mt-2 text-lg'>C</p>
                </div>

                <div className='flex flex-col items-center transition-transform transform hover:scale-110'>
                    <img src={cpp1} alt="C++" width={120} height={120} />
                    <p className='mt-2 text-lg'>C++</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;
