import React from "react";
import { useParams } from "react-router-dom";
import { FaGithub, FaYoutube, FaItchIo } from "react-icons/fa";
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { projectId } = useParams();
    const projectData = {
        czasoport: {
            title: "Czasoport",
            description: "A time tracking app for personal productivity.",
            images: ["/images/czasoport-1.jpg", "/images/czasoport-2.jpg"],
            github: "https://github.com/your-username/czasoport",
            youtube: "https://www.youtube.com/watch?v=yourvideoid",
            itch: "https://yourgame.itch.io/czasoport",
        },
        project2: {
            title: "Project 2",
            description: "A description for project 2.",
            images: ["/images/project2-1.jpg"],
            github: null, // No GitHub for this project
            youtube: null, // No YouTube for this project
            itch: "https://yourgame.itch.io/project2",
        },
        project3: {
            title: "Project 3",
            description: "A description for project 3.",
            images: ["/images/project3-1.jpg", "/images/project3-2.jpg"],
            github: "https://github.com/your-username/project3",
            youtube: null, // No YouTube for this project
            itch: null, // No itch.io for this project
        },
    };

    const project = projectData[projectId];

    if (!project) {
        return <div>Project not found!</div>;
    }

    return (
        <div className="project-detail-container">
            <div className="project-links">
                {/* Conditionally render the links if they exist */}
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
    );
};

export default ProjectDetail;
