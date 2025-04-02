import React from 'react';
import './Portfolio.css';

const Portfolio = ({ openProjectDetail }) => {
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
                Welcome to My Portfolio
                <p className="hero-description">I create beautiful and functional web applications.</p>
            </header>

            <section id="about" className="about-section">
                <h2 className="section-title">About Me</h2>
                <p className="about-description">Hello</p>
            </section>

            <section id="projects" className="projects-section">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                    <div className="project-card" onClick={() => openProjectDetail('czasoport')}>
                        <h3 className="project-title">Czasoport</h3>
                        <p className="project-description">2D Future Fantasy Adventure and Puzzle game</p>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('project2')}>
                        <h3 className="project-title">Castle</h3>
                        <p className="project-description">Mobile app for kids to encourage active sightseeing</p>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('project3')}>
                        <h3 className="project-title">Thief Game</h3>
                        <p className="project-description">Will you manage to steal MonaLisa?</p>
                    </div>
                    {/* Add more project cards as needed */}
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
