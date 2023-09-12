import React from "react";
import AnimatedCursor from "react-animated-cursor"

const Cursor = () => {
    return (
        <AnimatedCursor
            innerSize={20}
            outerSize={30}
            innerScale={1}
            outerScale={1.7}
            outerAlpha={0.5}
            outerStyle={{
                border: '2px solid #fff',
                backgroundColor: '#00000050'
            }}
            innerStyle={{
                backgroundColor: '#fff'
            }}
        />
    )
}

export default Cursor;