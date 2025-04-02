import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <nav className="fixed w-full bg-white shadow-md p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">My Portfolio</h1>
                <ul className="flex space-x-6">
                    <li><a href="#about" className="hover:text-blue-500">About</a></li>
                    <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                </ul>
            </nav>

            <header className="h-screen flex flex-col items-center justify-center text-center">
                <motion.h2 className="text-4xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    Welcome to My Portfolio
                </motion.h2>
                <p className="mt-4 text-lg text-gray-600">I create beautiful and functional web applications.</p>
            </header>

            <section id="about" className="p-8 text-center bg-white">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-gray-700">Hello</p>
            </section>

            <section id="projects" className="p-8 bg-gray-200 text-center">
                <h2 className="text-3xl font-bold mb-4">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Project 1</h3>
                        <p className="text-gray-600">Description of the project.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Project 2</h3>
                        <p className="text-gray-600">Description of the project.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Project 3</h3>
                        <p className="text-gray-600">Description of the project.</p>
                    </div>
                </div>
            </section>

            <section id="contact" className="p-8 bg-white text-center">
                <h2 className="text-3xl font-bold mb-4">Contact</h2>
                <p className="text-gray-700">Feel free to reach out via email or social media.</p>
            </section>
        </div>
    );
};

export default Portfolio;
