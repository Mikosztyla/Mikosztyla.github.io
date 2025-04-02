import React from "react";
import "./Portfolio.css";

const Roadmap = () => {
    const jobs = [
        {
            title: "Software Engineer I",
            company: "Sabre",
            date: "2023 - Present",
        },
        {
            title: "Intern",
            company: "Sabre",
            date: "2021 - 2023",
        },
        {
            title: "Game developer",
            company: "AGH Code Industry",
            date: "2019 - 2021",
        },
        {
            title: "Camp Counselor and Lifeguard",
            company: "NorthWoods Camp",
            date: "2018 - 2019",
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
