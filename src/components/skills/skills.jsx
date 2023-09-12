import React from "react";
import { FaCss3, FaHtml5, FaLinux, FaPhp, FaPython, FaReact } from "react-icons/fa";
// import { FcLinux } from "react-icons/fc";
import { DiJavascript1 } from "react-icons/di";
import { FaC } from "react-icons/fa6";
import { Animated } from "../../addons/animated";
import "./skills_style.css";

const Skills = () => {

    return (
        <div className="skills_container">
            <div className="skills">
                <Animated jsxfile={<FaPython className="Animated" />} />
                <Animated jsxfile={<FaReact className="Animated" />} />
                <Animated jsxfile={<FaPhp className="Animated" />} />
                <Animated jsxfile={<FaHtml5 className="Animated" />} />
                <Animated jsxfile={<FaCss3 className="Animated" />} />
                <Animated jsxfile={<FaLinux className="Animated" />} />
                <Animated jsxfile={<DiJavascript1 className="Animated" />} />
                <Animated jsxfile={<FaC className="Animated" />} />
            </div>
        </div>
    )
}

export default Skills;