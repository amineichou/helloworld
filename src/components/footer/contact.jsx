import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import "./contact_style.css";

const Contact = () => {
    return (
        <div className="contact">
            <a href="https://github.com/amineichou" target={"_blank"} rel="noreferrer">
                <FaGithub />
            </a>
            <a href="https://facebook.com/amineichoureal" target={"_blank"} rel="noreferrer">
                <FaFacebook />
            </a>
            <a href="https://instagram.com/amineichou.exe" target={"_blank"} rel="noreferrer">
                <FaInstagram />
            </a>
            <a href="/" rel="noreferrer">
                <FaTwitter />
            </a>
        </div>
    )
}

export default Contact;