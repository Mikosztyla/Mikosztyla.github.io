import React from "react";
import "./Portfolio.css";

const Roadmap = () => {
    const jobs = [
        {
            title: "Software Engineer I",
            company: "Sabre",
            date: "2024.10 - Present",
        },
        {
            title: "Intern",
            company: "Sabre",
            date: "2024.07 - 2024.09",
        },
        {
            title: "Board Member",
            company: "AGH Code Industry",
            date: "2024.05 - Present",
        },
        {
            title: "Game Developer",
            company: "AGH Code Industry",
            date: "2023.04 - Present",
        },
        {
            title: "Unity Developer",
            company: "Geotronics Dystrybucja Sp. z o.o.",
            date: "2023.10 - 2024.01",
        },
        {
            title: "Information Technology Tutor",
            company: "Kodland",
            date: "2023.05 - 2023.09",
        },
        {
            title: "Camp Counselor and Lifeguard",
            company: "YMCA NorthWoods Camp",
            date: "2022.05 - 2022.08",
        },
    ];

    return (
        <section className="roadmap-section">
            <h2 className="section-title">Career Roadmap</h2>
            <div className="roadmap-container">
                <div className="roadmap-line"></div>
                {jobs.map((job, index) => (
                    <div
                        key={index}
                        className={`roadmap-item ${index % 2 === 0 ? "left" : "right"}`}
                    >
                        <div className="roadmap-dot"></div>
                        <div className="roadmap-content">
                            <h3 className="job-title">{job.title}</h3>
                            <p className="job-company">{job.company}</p>
                            <p className="job-date">{job.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Roadmap;
