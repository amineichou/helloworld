import React, { useEffect, useState } from "react";
import "./home_style.css";
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Hey', 'ama', 'software', 'programmer'];

const Home = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            1000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    return (
        <div className="home_container">
            <div className="name">
                <h1>AMINE ICHOU</h1>
                <TextTransition springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition>
            </div>
        </div>
    )
}

export default Home; 