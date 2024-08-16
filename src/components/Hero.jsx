import React from 'react';
import dev2 from '../assets/dev2.png';
import linkedin1 from '../assets/linkedin1.png';
import github1 from '../assets/github1.png';

const Hero = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] h-[70vh] mx-auto py-8 bg-black'>
            <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
                <img src={dev2} height={350} width={350} alt='hero image' />
            </div>

            <div className='col-span-2 px-5 my-auto relative'>
                <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                    <span className='primary-color'>Hello!<br /> I am Akshat.</span><br />
                </h1>

                <div className='absolute right-0 top-0 flex flex-col items-center space-y-4 mt-3 mr-3 m-0 hover:h-10'>
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

                <p className='text-white sm:text-lg lg:text-xl mt-0'>
                    I'm a 3<sup>rd</sup> year student pursuing BTech in Computer Science at PES University
                </p>

                <div className='my-8'>
                    <a
                        href="file:///D:/downloads/Akshat_bhandari_resume.pdf"
                        className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white"
                    >
                        Download Resume
                    </a>
                    <a
                        href="#contact" // This will scroll to the element with id="contact"
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
