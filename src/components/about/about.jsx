import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./about_style.css";

const About = () => {

    return (
        <div className="about_container">
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'My name is Amine Ichou',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'I\'m a full stack web developer',
                    1000,
                    'a computer science student',
                    1000,
                    'Check out my project page',
                    1000
                ]}
                wrapper="span"
                speed={50}
                style={{ color : "#F0F8FF", fontSize: '6vmin', display: 'inline-block' }}
                repeat={Infinity}
            />
        </div>
    )
}

export default About;