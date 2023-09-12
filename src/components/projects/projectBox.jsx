import React from "react";
import "./projectbox_style.css";

const ProjectBox = (param) => {
    return (
        <a href="/" target={param.url} className="project_box">
            <h1>{param.prname}</h1>
            <div className="link_vert" style={{ display: (param.id % 3 !== 0) ? "block" : "none" }}></div>
            <div className="link_horiz" style={{ display: (param.id % 3 === 0) ? "block" : "none" }}></div>
        </a>
    )
}

export default ProjectBox;