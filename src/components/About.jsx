import React from 'react';
import css from '../assets/css.png'

const About = () => {
    return (
        <div className="text-white max-w-[1200px] mx-auto my-12" id="about">

            <div className="md:grid md:grid-cols-2 sm:py-16">

                <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
                    <div className="my-auto mx-6">
                        <h2 className="text-4xl font-bold mb-4 primary-color">ABOUT ME</h2>
                        <p className="text-base lg:text-lg">
                            Hello, My name is Akshat Bhandari and I am currently pursuing my BTech in Computer Science at PES University in Bengaluru. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore accusantium non nobis, qui in magnam facere eos porro quae ad minima sequi, veritatis aspernatur officia. Impedit sed quo suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis fugiat, nihil id asperiores corporis eius autem illum magni quae vitae natus quidem laudantium soluta. Magni velit nobis aliquam error eligendi!


                        </p>
                    </div>
                </div>

                <div>
                    <img className="mx-auto rounded-3xl py-8 md:py-0" src={css} width={250} height={250} />
                </div>

            </div>
        </div>
    )
}


export default About;
