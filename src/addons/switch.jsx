import React, { useState } from "react";
import Switch from "react-switch";
import { FaMoon, FaSun } from "react-icons/fa";
import Particles from "react-tsparticles";
import particlesConfig from "../config/tsparticles_config";
import lightParticlesConfig from "../config/tsparticles_config_light";
import "./switch.css";
const SwitchToggle = () => {
    const onToggle = () => {
        setToggle(Toggle ? false : true);
        localStorage.setItem("theme", !Toggle);
    };

    let defaultTheme = localStorage.getItem("theme") === "true" ? true : false;
    const [Toggle, setToggle] = useState(defaultTheme);
    return (
        <div className="switch">
            <Particles params={Toggle ? particlesConfig : lightParticlesConfig}>
            </Particles>
            <Switch
                onChange={onToggle}
                checked={Toggle}
                checkedIcon={
                    <FaMoon
                        size={22}
                        style={{
                            padding: "6px 0px 5px 6px",
                            color: "#ffffff"
                        }}
                    />
                }
                uncheckedIcon={
                    <FaSun
                        size={22}
                        style={{
                            padding: "6px 8px",
                            color: "#ffffff"
                        }}
                    />
                }
                handleDiameter={25}
                activeBoxShadow={"0"}
                onColor="#5e5e5e"
                offColor="#302f2f"
                width={65}
                height={35}
            />
        </div>
    )
}

export default SwitchToggle;