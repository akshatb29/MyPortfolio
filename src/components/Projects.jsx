import React from 'react';
import github1 from '../assets/github1.png';

const Projects = () => {
    return (
        <div className='max-w-[1200px] mx-auto pb-4' id='projects'>
            <div className="my-auto mx-5">
                <h2 className="text-4xl font-bold mb-14 primary-color">PROJECTS</h2>

                <div className='text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center'>
                    <div className='bg-neutral-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
                        <h3 className='flex items-center justify-start font-bold text-.5xl'>
                            <a href="https://github.com/your-repo-link" target="_blank" >
                                <img src={github1} alt="GitHub" className="w-10 h-10 mr-4 mix-blend-normal" />
                            </a>
                            Encryption Decryption using Sockets
                        </h3>
                        <div className='font-serif mt-2 text-sm overflow-y-auto h-[300px] py-2 text-left'>
                            - Server sends ENCRYPTED file to client upon    request, the file is DECRYPYED using private key <br></br>
                            - Used Secure Socket Layering (SSL) in TCP<br></br>
                            - Made using Python<br></br>

                        </div>
                    </div>

                    <div className='bg-neutral-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
                        <h3 className='flex items-center justify-start font-bold text-1.5xl'>
                            <a href="https://github.com/your-repo-link" target="_blank" >
                                <img src={github1} alt="GitHub" className="w-10 h-10 mr-4" />
                            </a>
                            Urban Applause
                        </h3>
                        <div className='font-serif mt-2 text-sm overflow-y-auto h-full py-3'>
                            - Web Application for booking urban services that makes use of CRUD operations with friendly UI.
                            - Users log in, select services, add to a dynamic cart, and see the total cost.
                            - Packages of Services and User login data stored in MongoDB.
                            - Made using React, Node.js, MongoDB
                        </div>
                    </div>

                    <div className='bg-neutral-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
                        <h3 className='flex items-center justify-start font-bold text-1.5xl '>
                            <a href="https://github.com/your-repo-link" target="_blank" >
                                <img src={github1} alt="GitHub" className="w-10 h-10 mr-4" />
                            </a>
                            Python Quiz Game
                        </h3>
                        <div className='font-serif mt-2 text-sm overflow-y-auto h-full py-3'>
                            - Developed a interactive Quiz Game in Python.
                            - Randomly generates questions from a dictionary and displays final score upon completion
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Projects;
