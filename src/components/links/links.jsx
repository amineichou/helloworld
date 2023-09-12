import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./links.css";

const Links = () => {
    var filename = useLocation().pathname.replace('/', '');

    return (
        <div className="links_container">
            <Link to={"/helloworld"} className="circle" style={{ backgroundColor: filename === "helloworld/" ? "red" : "#fff", color: filename === "helloworld/" ? "#fff" : "#000" }}>home
            </Link>
            <Link to={"/about"} className="circle" style={{ backgroundColor: filename === "about" ? "red" : "#fff" , color: filename === "about" ? "#fff" : "#000"}}>about
            </Link>
            <Link to={"/res"} className="circle" style={{ backgroundColor: filename === "res" ? "red" : "#fff" , color: filename === "res" ? "#fff" : "#000"}}>skills
            </Link>
            <Link to={"/projects"} className="circle" style={{ backgroundColor: filename === "projects" ? "red" : "#fff" , color: filename === "projects" ? "#fff" : "#000"}}>projects
            </Link>
        </div>
    )
}

export default Links;