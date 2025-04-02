import React from 'react';
import './Portfolio.css';
import Roadmap from './RoadMap';

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

            <Roadmap />

            <section id="projects" className="projects-section">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                    <div className="project-card" onClick={() => openProjectDetail('czasoport')}>
                        <h3 className="project-title">Czasoport</h3>
                        <p className="project-description">2D Future Fantasy Adventure and Puzzle game</p>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('castle')}>
                        <h3 className="project-title">Castle</h3>
                        <p className="project-description">Mobile app for kids to encourage active sightseeing</p>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('thiefGame')}>
                        <h3 className="project-title">Thief Game</h3>
                        <p className="project-description">Will you manage to steal MonaLisa?</p>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('bridgeAnim')}>
                        <h3 className="project-title">Bridge animation</h3>
                        <p className="project-description">Animation of walking bridge</p>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('cubeSolver')}>
                        <h3 className="project-title">Rubik's cube solver</h3>
                        <p className="project-description">3D Rubik's cube simulation with solver (LBL method)</p>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('gears')}>
                        <h3 className="project-title">"Trybiki"</h3>
                        <p className="project-description">2D platformer game vampire-survivor like</p>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('lemurs')}>
                        <h3 className="project-title">Lemuringo</h3>
                        <p className="project-description">A 2D top-down educational, writing game developed during HackYeah 2024</p>
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
