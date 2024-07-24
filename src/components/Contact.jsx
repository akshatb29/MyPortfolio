import React from 'react';

const Contact = () => {
    return (
        <div className="text-white max-w-[1200px] mx-auto my-12" id="contact">
            <div className="md:grid md:grid-cols-2 sm:py-16">
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
                    <div className="my-auto mx-6">
                        <h2 className="text-4xl font-bold mb-8 primary-color">CONTACT</h2>
                        <div>
                            <div className="flex items-center mb-2">
                                <p className="font-semibold mr-2">Email:</p>
                                <a href="mailto:bhandariakshat29@gmail.com" className="text-zinc-500 hover:underline">bhandariakshat29@gmail.com</a>
                            </div>
                            <div className="flex items-center mb-2">
                                <p className="font-semibold mr-2">Phone:</p>
                                <a href="tel:+1234567890" className="text-zinc-500 hover:underline">+91 6360085404</a>
                            </div>
                            <div className="flex items-center mb-2">
                                <p className="font-semibold mr-2">GitHub:</p>
                                <a href="https://github.com/akshatb29" target="_blank" className="text-zinc-500 hover:underline">GitHub Profile</a>
                            </div>
                            <div className="flex items-center mb-2">
                                <p className="font-semibold mr-2">LinkedIn:</p>
                                <a href="https://www.linkedin.com/in/akshat-bhandari-a7492b24b/" target="_blank" className="text-zinc-500 hover:underline">LinkedIn Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
