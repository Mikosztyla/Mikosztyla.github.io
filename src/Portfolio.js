import React from "react";
import { motion } from "framer-motion";
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <nav className="nav-bar">
                <h1 className="nav-title">My Portfolio</h1>
                <ul className="nav-links">
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </nav>

            <header className="hero-header">
                <motion.h2 className="hero-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    Welcome to My Portfolio
                </motion.h2>
                <p className="hero-description">I create beautiful and functional web applications.</p>
            </header>

            <section id="about" className="about-section">
                <h2 className="section-title">About Me</h2>
                <p className="about-description">Hello</p>
            </section>

            <section id="projects" className="projects-section">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <h3 className="project-title">Project 1</h3>
                        <p className="project-description">Description of the project.</p>
                    </div>
                    <div className="project-card">
                        <h3 className="project-title">Project 2</h3>
                        <p className="project-description">Description of the project.</p>
                    </div>
                    <div className="project-card">
                        <h3 className="project-title">Project 3</h3>
                        <p className="project-description">Description of the project.</p>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact-section">
                <h2 className="section-title">Contact</h2>
                <p className="contact-description">Feel free to reach out via email or social media.</p>
            </section>
        </div>
    );
};

export default Portfolio;
