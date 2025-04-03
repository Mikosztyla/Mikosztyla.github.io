import React, { useEffect } from 'react';
import { FaGithub, FaYoutube, FaItchIo } from 'react-icons/fa';
import './ProjectDetail.css';

const ProjectDetail = ({ projectId, closeProjectDetail }) => {
    const projectData = {
        czasoport: {
            title: 'Czasoport',
            description: 'This project is the result of my first big and finished group project in AGH Code Industry. Working with over 20 people, first as a developer then also as a Scrum Master I\'ve led this project to the finish. It\'s a 2D future, fantasy, adventure and puzzle game made with C# and Unity, where you have to save the humanity from distinction.\n\nImmerse yourself in this world and crack all the puzzles!',
            images: [],
            github: 'https://github.com/Mikosztyla/czasoport',
            youtube: 'https://youtu.be/YTEHO9jmnjw',
            itch: 'https://bulba1265.itch.io/czasoport',
            responsibilities: 'In this project i did:\n- all the UI animations (time changing animation, item picking, etc)\n- player movement (with blend tree in Unity)\n- implementation of more then 50% of all the puzzles in the game',
            showcase: null
        },
        castle: {
            title: 'Project "Castle"',
            description: 'I\'m still working on this project, and ',
            images: [],
            github: null,
            youtube: null,
            itch: null,
            responsibilities: 'In this project i did:\n- all the UI main screen animations\n- 3d procedural terrain generation',
            showcase: null
        },
        thiefGame: {
            title: 'Thief Game',
            description: 'This is my first finished project. As a thief, your goal is to still "Mona Lisa" but it has a little twist at the end... It\' also an educational game, where you can get to know some paintings in the museum, that you want to rob.',
            images: [],
            github: null,
            youtube: 'https://youtu.be/bbnjuUQ-Wy4',
            itch: null,
            responsibilities: 'In this project i did:\n- guards movement\n- player animations',
            showcase: 'https://youtu.be/81JqwqenrBw'
        },
        bridgeAnim: {
            title: 'Brige animation',
            description: 'As for the university project my friend and I created a key frame animation of the bridge in python for the 3D bridge model. We were working in the Maya software.',
            images: [],
            github: null,
            youtube: 'https://youtu.be/rxFoa_v7JbY',
            itch: null,
            responsibilities: 'In this project I did:\n - key frame based walking animation',
            showcase: 'https://youtu.be/rxFoa_v7JbY'
        },
        cubeSolver: {
            title: 'Rubik\'s cube solver',
            description: '3D representation of Rubik\'s cube is renderend without any external libraries. It uses matrix additions and multiplications to render the cube in perspective and enable rotating it. Additionaly, a solver, that return sequences of moves (written in official notation) to perform in order to solve the cube.',
            images: [],
            github: 'https://github.com/Mikosztyla/CubeSolver',
            youtube: 'https://youtu.be/C1gxVrBb6Ho',
            itch: null,
            responsibilities: 'This project was developed only by myself.',
            showcase: null
        },
        gears: {
            title: 'Trycon',
            description: 'This 2D platformer vampire-survivor like game was developed during 24h GameJam. The theme of the event was "Trybiki". As a team of 3 developers and 2 graphic designer we craeted a game, where gears are the essential amunition and also your currency. You have to updrade your base (rotate it 180 degrees), before the enemies get you, in order to win.',
            images: [],
            github: 'https://github.com/Mikosztyla/immerse-trybiki',
            youtube: 'https://youtu.be/-Kd6_FO9Kuw',
            itch: null,
            responsibilities: 'In this project i did:\n - modular shop\n - player blend tree animations\n - background animations',
            showcase: 'https://youtu.be/FYZvwRLlRNU'
        },
        lemurs: {
            title: 'Lemuringo',
            description: 'A 2D top-down educational game that combines writing and language learning. By utilizing a free, open-source dictionary API, we created an interactive platform where users can learn new words in their chosen language. The game allows players to create their own flashcards and test their knowledge in a fun and engaging way.',
            images: [],
            github: 'https://github.com/Mikosztyla/Lemuringo',
            youtube: 'https://youtu.be/_RzD-e05kFg',
            itch: null,
            responsibilities: 'In this project I did:\n- writing animation\n- boss attacks and animation\n- level selection\n- UI animations',
            showcase: null
        },
    };

    const project = projectData[projectId];

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    if (!project) {
        return <div>Project not found!</div>;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <button onClick={closeProjectDetail} className="close-button">X</button>
                <div className="project-links">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                            <FaGithub size={30} />
                        </a>
                    )}
                    {project.youtube && (
                        <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="project-link">
                            <FaYoutube size={30} />
                        </a>
                    )}
                    {project.itch && (
                        <a href={project.itch} target="_blank" rel="noopener noreferrer" className="project-link">
                            <FaItchIo size={30} />
                        </a>
                    )}
                </div>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <p className="project-responsibilities">{project.responsibilities}</p>
                {project.showcase && (
                    <div className="youtube-link align-left">
                        <a href={project.showcase} target="_blank" rel="noopener noreferrer" className="project-link">
                            <FaYoutube size={30} />
                        </a>
                    </div>
                )}
                <div className="project-images">
                    {project.images.map((img, index) => (
                        <img key={index} src={img} alt={`${project.title} ${index + 1}`} className="project-image" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
