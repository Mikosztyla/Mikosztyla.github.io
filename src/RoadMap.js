import React from 'react';
import { profile } from './data/profile';
import './Portfolio.css';

const Roadmap = () => {
    const { experience } = profile;

    return (
        <section id="experience" className="roadmap-section">
            <div className="fade-in-section">
                <h2 className="section-title">Experience</h2>
                <p className="section-subtitle">Professional journey - backend, microservices &amp; production systems</p>
            </div>
            <div className="experience-list">
                {experience.map((job) => (
                    <article
                        key={`${job.company}-${job.title}`}
                        className="experience-card fade-in-section"
                    >
                        <div className="experience-header">
                            <div>
                                <h3 className="job-title">{job.title}</h3>
                                <p className="job-company">{job.company}</p>
                            </div>
                            <div className="experience-meta">
                                <span className="job-date">{job.date}</span>
                                <span className="job-location">{job.location}</span>
                            </div>
                        </div>
                        <ul className="job-highlights">
                            {job.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Roadmap;
