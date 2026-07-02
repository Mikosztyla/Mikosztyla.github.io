import React from 'react';
import { FaGithub, FaLinkedin, FaItchIo, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { profile } from './data/profile';
import Roadmap from './RoadMap';
import './Portfolio.css';

const Portfolio = ({ openProjectDetail }) => {
    const { name, title, location, email, links, about, skills, education, achievement } = profile;

    return (
        <div className="portfolio-container" id="top">
            <nav className="nav-bar">
                <a href="#top" className="nav-brand">{name}</a>
                <ul className="nav-links">
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#experience" className="nav-link">Experience</a></li>
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                    <li><a href="#games" className="nav-link">Games</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
                <div className="nav-icons">
                    <a href={links.github} target="_blank" rel="noopener noreferrer" className="nav-icon" aria-label="GitHub">
                        <FaGithub size={20} />
                    </a>
                    <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="nav-icon" aria-label="LinkedIn">
                        <FaLinkedin size={20} />
                    </a>
                    <a href={`mailto:${email}`} className="nav-icon" aria-label="Email">
                        <FaEnvelope size={20} />
                    </a>
                </div>
            </nav>

            <header className="hero-header">
                <div className="hero-content animate-in">
                    <p className="hero-eyebrow">Portfolio</p>
                    <h1 className="hero-title">{name}</h1>
                    <h2 className="hero-subtitle">{title}</h2>
                    <p className="hero-location"><FaMapMarkerAlt /> {location}</p>
                    <p className="hero-description">
                        Building scalable backend systems in Java &amp; C# - microservices, production reliability, and clean engineering practices.
                    </p>
                    <div className="hero-actions">
                        <a href="#experience" className="btn btn-primary">View experience</a>
                        <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            <FaGithub /> GitHub
                        </a>
                    </div>
                </div>
            </header>

            <section id="about" className="about-section fade-in-section">
                <h2 className="section-title">About</h2>
                <div className="about-grid">
                    <div className="about-text">
                        {about.map((paragraph, i) => (
                            <p key={i} className="about-paragraph">{paragraph}</p>
                        ))}
                    </div>
                    <div className="about-sidebar">
                        <div className="info-card">
                            <h3 className="info-card-title">Education</h3>
                            <p className="info-card-main">{education.degree}</p>
                            <p className="info-card-sub">{education.school}</p>
                            <p className="info-card-meta">{education.period}</p>
                            {education.thesis && (
                                <a
                                    href={education.thesis.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="info-card-link"
                                >
                                    B.Sc. thesis: Neural Dungeon (PDF)
                                </a>
                            )}
                        </div>
                        <div className="info-card">
                            <h3 className="info-card-title">Achievement</h3>
                            <p className="info-card-sub">{achievement}</p>
                        </div>
                        <div className="info-card">
                            <h3 className="info-card-title">Languages</h3>
                            <p className="info-card-sub">Polish - Native</p>
                            <p className="info-card-sub">English - C1</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" className="skills-section fade-in-section">
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="skill-group">
                            <h3 className="skill-category">{category}</h3>
                            <div className="skill-tags">
                                {items.map((skill) => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Roadmap />

            <section id="projects" className="projects-section fade-in-section">
                <h2 className="section-title">Projects</h2>
                <p className="section-subtitle">Selected work - backend, databases, and tools</p>
                <div className="projects-grid">
                    <div className="project-card project-card--featured" onClick={() => openProjectDetail('stockMarket')}>
                        <div className="project-card-bg project-card-bg--api" />
                        <div className="project-overlay">
                            <span className="project-badge">Java · Spring Boot</span>
                            <h3 className="project-title">Stock Market API</h3>
                            <p className="project-description">Distributed trading simulation with observability &amp; k6 load tests</p>
                        </div>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('aghPinpals')}>
                        <img className="project-image" src="/images/PinPals.png" alt="AGH Pin Pals" />
                        <div className="project-overlay">
                            <span className="project-badge">Spring Boot</span>
                            <h3 className="project-title">AGH Pin Pals</h3>
                            <p className="project-description">Campus social app - Flutter + Spring Boot backend</p>
                        </div>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('learningPlatformDB')}>
                        <img className="project-image" src="/images/LearningPlatformDB.png" alt="Learning Platform Database System" />
                        <div className="project-overlay">
                            <span className="project-badge">SQL</span>
                            <h3 className="project-title">Learning Platform DB</h3>
                            <p className="project-description">Database system for courses, webinars, and studies</p>
                        </div>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('cinemaProject')}>
                        <img className="project-image" src="/images/CinemaProject.png" alt="Cinema Project" />
                        <div className="project-overlay">
                            <span className="project-badge">Java · Spring</span>
                            <h3 className="project-title">Cinema Project</h3>
                            <p className="project-description">Cinema management app with REST API</p>
                        </div>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('gitCourse')}>
                        <img className="project-image" src="/images/git.png" alt="Git Course" />
                        <div className="project-overlay">
                            <span className="project-badge">Education</span>
                            <h3 className="project-title">Git Course</h3>
                            <p className="project-description">Git course for beginners</p>
                        </div>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('cubeSolver')}>
                        <img className="project-image" src="/images/CubeSolver.png" alt="Rubik's cube solver" />
                        <div className="project-overlay">
                            <span className="project-badge">Algorithms</span>
                            <h3 className="project-title">Rubik's Cube Solver</h3>
                            <p className="project-description">3D simulation with LBL solving algorithm</p>
                        </div>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('darwinWorld')}>
                        <img className="project-image" src="/images/darwinWorld.png" alt="Darwin World" />
                        <div className="project-overlay">
                            <span className="project-badge">JavaFX</span>
                            <h3 className="project-title">Darwin World</h3>
                            <p className="project-description">Natural selection simulation</p>
                        </div>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('neuralDungeon')}>
                        <img className="project-image" src="/images/NeuralDungeon.png" alt="Neural Dungeon" />
                        <div className="project-overlay">
                            <span className="project-badge">B.Sc. Thesis · Unity</span>
                            <h3 className="project-title">Neural Dungeon</h3>
                            <p className="project-description">Procedural levels with adaptive AI enemies</p>
                        </div>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('chessSimulator')}>
                        <img className="project-image" src="/images/chessSimulator.png" alt="Chess Simulator" />
                        <div className="project-overlay">
                            <span className="project-badge">Java</span>
                            <h3 className="project-title">Chess Simulator</h3>
                            <p className="project-description">Full chess rules implementation</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="games" className="projects-section games-section fade-in-section">
                <h2 className="section-title">Games</h2>
                <p className="section-subtitle">Unity projects from AGH Code Industry and game jams</p>
                <div className="projects-grid">
                    <div className="project-card" onClick={() => openProjectDetail('castle')}>
                        <img className="project-image" src="/images/zamek.png" alt="Zwiedzaj i Graj" />
                        <div className="project-overlay">
                            <span className="project-badge">Released · iOS &amp; Android</span>
                            <h3 className="project-title">Zwiedzaj i Graj</h3>
                            <p className="project-description">QR-based tourism app for the Karkonosze region</p>
                        </div>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('czasoport')}>
                        <img className="project-image" src="/images/czasoport.png" alt="Czasoport" />
                        <div className="project-overlay">
                            <h3 className="project-title">Czasoport</h3>
                            <p className="project-description">2D fantasy adventure &amp; puzzle - 20+ team</p>
                        </div>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('vampotanica')}>
                        <img className="project-image" src="/images/Vampotanic.png" alt="Vampotanic" />
                        <div className="project-overlay">
                            <h3 className="project-title">Vampotanic</h3>
                            <p className="project-description">Vampire Survivors meets Tower Defense</p>
                        </div>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('thiefGame')}>
                        <img className="project-image" src="/images/TheftGame.png" alt="Thief Game" />
                        <div className="project-overlay">
                            <h3 className="project-title">Thief Game</h3>
                            <p className="project-description">Steal the Mona Lisa - educational heist</p>
                        </div>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('gears')}>
                        <img className="project-image" src="/images/trybiki.png" alt="Trycon" />
                        <div className="project-overlay">
                            <h3 className="project-title">Trycon</h3>
                            <p className="project-description">2D platformer - 24h Game Jam</p>
                        </div>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('lemurs')}>
                        <img className="project-image" src="/images/lemury.png" alt="Lemuringo" />
                        <div className="project-overlay">
                            <h3 className="project-title">Lemuringo</h3>
                            <p className="project-description">Educational writing game - HackYeah 2024</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact-section fade-in-section">
                <h2 className="section-title">Contact</h2>
                <p className="contact-description">
                    Open to opportunities in backend engineering and distributed systems. Reach out anytime.
                </p>
                <a href={`mailto:${email}`} className="contact-email">{email}</a>
                <div className="contact-links">
                    <a href={links.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FaGithub size={24} /> GitHub
                    </a>
                    <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FaLinkedin size={24} /> LinkedIn
                    </a>
                    <a href={links.itch} target="_blank" rel="noopener noreferrer" className="contact-link">
                        <FaItchIo size={24} /> itch.io
                    </a>
                </div>
            </section>

            <footer className="site-footer">
                <p>&copy; {new Date().getFullYear()} {name}</p>
            </footer>
        </div>
    );
};

export default Portfolio;
