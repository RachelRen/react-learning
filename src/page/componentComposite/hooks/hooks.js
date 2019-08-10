import React, { useState } from "react";

function Hooks() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    const handleMouseMove = event => {
        setMouse({
            x: event.clientX,
            y: event.clientY
        });
    };
    // return (
    //     <div style={{ height: "100%" }} onMouseMove={handleMouseMove}>
    //         The current mouse position is ({mouse.x}, {mouse.y})
    //     </div>
    // );

    return {
        mouse,
        handleMouseMove
    };
}

export default Hooks;
