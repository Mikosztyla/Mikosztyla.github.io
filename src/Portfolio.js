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
                    <li><a href="#projects-other" className="nav-link">Projects</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </nav>

            <header className="hero-header">
                <p className="hero-description">I'm Mikołaj Gosztyła, a third-year Computer Science student at AGH
                    University of Science and Technology. Explore my journey to discover the key milestones of my
                    career and self-made projects.</p>
            </header>

            <Roadmap/>

            <section id="projects-other" className="projects-section">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
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
                    <div className="project-card" onClick={() => openProjectDetail('learningPlatformDB')}>
                        <img className="project-image" src={"/images/LearningPlatformDB.png"}
                             alt={"Learning Platform Database System"}/>
                        <h3 className="project-title">Learning Platform Database System</h3>
                        <p className="project-description">Database system for a company offering learning courses,
                            webinars, and studies.</p>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('darwinWorld')}>
                        <img className="project-image" src={"/images/darwinWorld.png"}
                             alt={"Darwin World"}/>
                        <h3 className="project-title">Darwin World</h3>
                        <p className="project-description">Simulation of Fighting for Survival</p>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('neuralDungeon')}>
                        <img className="project-image" src={"/images/NeuralDungeon.png"}
                             alt={"Neural Dungeon"}/>
                        <h3 className="project-title">Neural Dungeon</h3>
                        <p className="project-description">3D Game with Procedurally Generated Levels and Adaptive AI
                            Opponents</p>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('cinemaProject')}>
                        <img className="project-image" src={"/images/CinemaProject.png"}
                             alt={"Cinema Project"}/>
                        <h3 className="project-title">Cinema Project</h3>
                        <p className="project-description">Cinema management window app</p>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('chessSimulator')}>
                        <img className="project-image" src={"/images/chessSimulator.png"}
                             alt={"Chess Simulator"}/>
                        <h3 className="project-title">Chess Simulator</h3>
                        <p className="project-description">Simple chess game simulator</p>
                    </div>
                    <div className="project-card" onClick={() => openProjectDetail('aghPinpals')}>
                        <img className="project-image" src={"/images/PinPals.png"}
                             alt={"Pin Pals"}/>
                        <h3 className="project-title">AGH Pin Pals</h3>
                        <p className="project-description">Mobile application designed for AGH students</p>
                    </div>
                </div>
            </section>

            <section id="projects" className="projects-section">
                <h2 className="section-title">My Games</h2>
                <div className="projects-grid">
                    <div className="project-card" onClick={() => openProjectDetail('vampotanica')}>
                        <img className="project-image" src={"/images/Vampotanic.png"} alt={"vampotanica"}/>
                        <h3 className="project-title">Vampotanica</h3>
                        <p className="project-description">Vampire Survivors chaos and strategic Tower Defense</p>
                    </div>
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
