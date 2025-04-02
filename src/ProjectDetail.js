import React, { useEffect } from 'react';
import { FaGithub, FaYoutube, FaItchIo } from 'react-icons/fa';
import './ProjectDetail.css';

const ProjectDetail = ({ projectId, closeProjectDetail }) => {
    const projectData = {
        czasoport: {
            title: 'Czasoport',
            description: 'This project is the result of my first big and finished group project in AGH Code Industry. Working with over 20 people, first as a developer then also as a Scrum Master I\'ve led this project to the finish. It\'s a 2D future, fantasy, adventure and puzzle game made with C# and Unity, where you have to save the humanity from distinction.\n\nImmerse yourself in this world and crack all the puzzles!',
            images: ['/images/czasoport-1.jpg', '/images/czasoport-2.jpg'],
            github: 'https://github.com/Mikosztyla/czasoport',
            youtube: 'https://youtu.be/YTEHO9jmnjw',
            itch: 'https://bulba1265.itch.io/czasoport',
        },
        castle: {
            title: 'Project "Castle"',
            description: 'I\'m still working on this project, and ',
            images: ['/images/project2-1.jpg'],
            github: null,
            youtube: null,
            itch: null,
        },
        thiefGame: {
            title: 'Thief game',
            description: 'A description for project 3.',
            images: ['/images/project3-1.jpg', '/images/project3-2.jpg'],
            github: 'https://github.com/your-username/project3',
            youtube: null,
            itch: null,
        },
        bridgeAnim: {
            title: 'Brige animation',
            description: 'A time tracking app for personal productivity.',
            images: ['/images/czasoport-1.jpg', '/images/czasoport-2.jpg'],
            github: null,
            youtube: 'https://youtu.be/rxFoa_v7JbY',
            itch: null,
        },
        cubeSolver: {
            title: 'Rubik\'s cube solver',
            description: 'A time tracking app for personal productivity.',
            images: ['/images/czasoport-1.jpg', '/images/czasoport-2.jpg'],
            github: 'https://github.com/Mikosztyla/CubeSolver',
            youtube: null,
            itch: null,
        },
        gears: {
            title: '"Trybiki"',
            description: 'A time tracking app for personal productivity.',
            images: ['/images/czasoport-1.jpg', '/images/czasoport-2.jpg'],
            github: null,
            youtube: null,
            itch: null,
        },
        lemurs: {
            title: 'Lemuringo',
            description: 'A time tracking app for personal productivity.',
            images: ['/images/czasoport-1.jpg', '/images/czasoport-2.jpg'],
            github: 'https://github.com/Mikosztyla/Lemuringo',
            youtube: 'https://youtu.be/KHQsq9ipwfg',
            itch: null,
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
