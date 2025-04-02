import React, { useState } from 'react';
import Portfolio from './Portfolio';
import ProjectDetail from './ProjectDetail';
import './App.css';

function App() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openProjectDetail = (projectId) => {
        setSelectedProject(projectId);
    };

    const closeProjectDetail = () => {
        setSelectedProject(null);
    };

    return (
        <div className="App">
            <Portfolio openProjectDetail={openProjectDetail} />
            {selectedProject && (
                <ProjectDetail
                    projectId={selectedProject}
                    closeProjectDetail={closeProjectDetail}
                />
            )}
        </div>
    );
}

export default App;
