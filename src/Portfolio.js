import React from 'react';
import './Portfolio.css';
import { FaGithub, FaLinkedin, FaFacebook, FaGoogle, FaItchIo } from 'react-icons/fa';
import Roadmap from './RoadMap';

const Portfolio = ({ openProjectDetail }) => {
    return (
        <div className="portfolio-container">
            <nav className="nav-bar">
                <h1 className="nav-title">Mikołaj Gosztyła - portfolio</h1>
                <div className="nav-icons">
                    <a href={"https://github.com/Mikosztyla"} target="_blank" rel="noopener noreferrer"
                       className="nav-icon">
                        <FaGithub size={30}/>
                    </a>
                    <a href={"https://www.linkedin.com/in/mikosztyla"} target="_blank" rel="noopener noreferrer"
                       className="nav-icon">
                        <FaLinkedin size={30}/>
                    </a>
                    <a href={"https://www.facebook.com/Mikosztyla"} target="_blank" rel="noopener noreferrer"
                       className="nav-icon">
                        <FaFacebook size={30}/>
                    </a>
                    <a href={"mailto:mikosztyla@gmail.com"} target="_blank" rel="noopener noreferrer"
                       className="nav-icon">
                        <FaGoogle size={30}/>
                    </a>
                    <a href={"https://bulba1265.itch.io/"} target="_blank" rel="noopener noreferrer"
                       className="nav-icon">
                        <FaItchIo size={30}/>
                    </a>
                </div>
                <ul className="nav-links">
                    <li><a href="#roadmap" className="nav-link">Career Roadmap</a></li>
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </nav>

            <header className="hero-header">
                <p className="hero-description">I'm Mikołaj Gosztyła, a third-year Computer Science student at AGH
                    University of Science and Technology. Explore my journey to discover the key milestones of my
                    career and self-made projects.</p>
            </header>

            <Roadmap/>

            <section id="projects" className="projects-section">
                <h2 className="section-title">My Games</h2>
                <div className="projects-grid">
                    <div className="project-card" onClick={() => openProjectDetail('czasoport')}>
                        <img className="project-image" src={"/images/czasoport.png"} alt={"czasoport"}/>
                        <h3 className="project-title">Czasoport</h3>
                        <p className="project-description">2D Future Fantasy Adventure and Puzzle game</p>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('thiefGame')}>
                        <img className="project-image" src={"/images/TheftGame.png"} alt={"Thief Game"}/>
                        <h3 className="project-title">Thief Game</h3>
                        <p className="project-description">Will you manage to steal "Mona Lisa"?</p>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('gears')}>
                        <img className="project-image" src={"/images/trybiki.png"} alt={"Trycon"}/>
                        <h3 className="project-title">Trycon</h3>
                        <p className="project-description">2D platformer game vampire-survivor like</p>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('lemurs')}>
                        <img className="project-image" src={"/images/lemury.png"} alt={"Lemuringo"}/>
                        <h3 className="project-title">Lemuringo</h3>
                        <p className="project-description">A 2D top-down educational, writing game developed during
                            HackYeah 2024</p>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('castle')}>
                        <img className="project-image" src={"/images/zamek.png"} alt={"castle"}/>
                        <h3 className="project-title">Castle</h3>
                        <p className="project-description">Mobile app for kids to encourage active sightseeing</p>
                    </div>
                </div>
            </section>

            <section id="projects-other" className="projects-section">
                <h2 className="section-title">Other Projects</h2>
                <div className="projects-grid">
                    <div className="project-card" onClick={() => openProjectDetail('bridgeAnim')}>
                        <img className="project-image" src={"/images/most.png"} alt={"Bridge animation"}/>
                        <h3 className="project-title">Bridge animation</h3>
                        <p className="project-description">Animation of walking bridge</p>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('cubeSolver')}>
                        <img className="project-image" src={"/images/CubeSolver.png"} alt={"Rubik's cube solver"}/>
                        <h3 className="project-title">Rubik's cube solver</h3>
                        <p className="project-description">3D Rubik's cube simulation with solver (LBL method)</p>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('gitCourse')}>
                        <img className="project-image" src={"/images/git.png"} alt={"Git Course"}/>
                        <h3 className="project-title">Git Course</h3>
                        <p className="project-description">Git course for beginners</p>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact-section">
                <h2 className="section-title">Contact</h2>
                <p className="contact-description">Feel free to reach out via email or social media.</p>
                <a href={"https://github.com/Mikosztyla"} target="_blank" rel="noopener noreferrer"
                   className="project-link">
                <FaGithub size={30}/>
                </a>
                <a href={"https://www.linkedin.com/in/mikosztyla"} target="_blank" rel="noopener noreferrer"
                   className="project-link">
                    <FaLinkedin size={30}/>
                </a>
                <a href={"https://www.facebook.com/Mikosztyla"} target="_blank" rel="noopener noreferrer"
                   className="project-link">
                    <FaFacebook size={30}/>
                </a>
                <a href={"mailto:mikosztyla@gmail.com"} target="_blank" rel="noopener noreferrer"
                   className="project-link">
                    <FaGoogle size={30}/>
                </a>
            </section>
        </div>
    );
};

export default Portfolio;
