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
            responsibilities: 'In this project i did:\n- all the UI animations (time changing animation, item picking, etc)\n- player movement (with blend tree in Unity)\n- implementation of more then 50% of all the puzzles in the game'
        },
        castle: {
            title: 'Project "Castle"',
            description: 'I\'m still working on this project, and ',
            images: [],
            github: null,
            youtube: null,
            itch: null,
            responsibilities: 'In this project i did:\n- all the UI main screen animations\n- 3d procedural terrain generation'
        },
        thiefGame: {
            title: 'Thief game',
            description: 'A description for project 3.',
            images: [],
            github: 'https://github.com/your-username/project3',
            youtube: null,
            itch: null,
            responsibilities: 'In this project i did:\n- guards movement\n- background animations\n- player animations'
        },
        bridgeAnim: {
            title: 'Brige animation',
            description: 'A time tracking app for personal productivity.',
            images: [],
            github: null,
            youtube: 'https://youtu.be/rxFoa_v7JbY',
            itch: null,
            responsibilities: ''
        },
        cubeSolver: {
            title: 'Rubik\'s cube solver',
            description: '3D representation of Rubik\'s cube is renderend without any external libraries. It uses matrix additions and multiplications to render the cube in perspective and enable rotating it. Additionaly, a solver, that return sequences of moves (written in official notation) to perform in order to solve the cube.',
            images: [],
            github: 'https://github.com/Mikosztyla/CubeSolver',
            youtube: null,
            itch: null,
            responsibilities: 'This project was developed only by me.'
        },
        gears: {
            title: '"Trycon"',
            description: 'This 2D platformer vampire-survivor like game was developed during 24h GameJam. The theme of the event was "Trybiki". As a team of 3 developers and 2 graphic designer we craeted a game, where gears are the essential amunition and also your currency. You have to updrade your base (rotate it 180 degrees), before the enemies get you, in order to win.',
            images: [],
            github: null,
            youtube: null,
            itch: null,
            responsibilities: 'In this project i did:\n'
        },
        lemurs: {
            title: 'Lemuringo',
            description: 'A time tracking app for personal productivity.',
            images: [],
            github: 'https://github.com/Mikosztyla/Lemuringo',
            youtube: 'https://youtu.be/_RzD-e05kFg',
            itch: null,
            responsibilities: ''
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
