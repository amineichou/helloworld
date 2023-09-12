import React from "react";
import ProjectBox from "./projectBox";
import "./project_styles.css";
import projectsConfig from "../../config/projects_config";

const Projects = () => {
    const projectsData = projectsConfig.map((project) => 
    {
        return (
            <ProjectBox
                key={project.id}
                id={project.id}
                prname={project.prname}
                url={project.url}
            />
        )
    })
    return (
        <div className="projects_container">
            <div className="projects">
                {projectsData}
            </div>
        </div>
    )
}

export default Projects;