//about
import React from "react";

const About = () => {
    return (
        <section
            className="relative bg-black text-white flex items-center justify-center py-16 px-6"
            id="about"
        >
            {/* Gradient Glow Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[50vw] h-[50vh] max-w-[700px] max-h-[500px]
                      bg-gradient-to-r from-pink-600/20 via-purple-500/20 to-sky-500/20 
                      blur-[150px] rounded-full -z-10" />

            {/* Card Container */}
            <div
                className="relative bg-white/5 backdrop-blur-xl rounded-2xl 
                   border border-white/10 shadow-lg 
                   max-w-3xl mx-auto text-center px-8 py-12
                   transition-transform duration-500 hover:scale-[1.02]"
            >
                <h2
                    className="text-4xl md:text-5xl font-bold mb-6 
                     bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400 
                     bg-clip-text text-transparent"
                >
                    ABOUT ME
                </h2>
                <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                    Hello, my name is{" "}
                    <span className="font-semibold text-pink-400">Akshat Bhandari</span> and
                    I am currently pursuing my BTech in Computer Science at PES University
                    in Bengaluru. I love designing and building solutions that make a
                    difference. I'm always eager to learn, start new projects, and tackle
                    complex problems, especially when it comes to{" "}
                    <span className="text-purple-300 font-medium">
                        data structures, algorithms, and machine learning
                    </span>
                    . My passion lies in finding intuitive ways to solve challenges and
                    continuously grow through every project I take on.
                </p>

                {/* Decorative Divider */}
                <div className="h-[2px] w-24 mx-auto mt-10 bg-gradient-to-r from-pink-500 via-purple-600 to-sky-500 rounded-full" />
            </div>
        </section>
    );
};

export default About;

