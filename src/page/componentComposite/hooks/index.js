import React, { useState, useEffect } from "react";

import Hooks from "./hooks";
// function boo() {
//     const { mouse, handleMouseMove } = Hooks();
//     return { mouse, handleMouseMove };
// }

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        // this.foo();
        // this.state = {
        //     mouse,
        //     handleMouseMove
        // };
    }
    // foo() {
    //     const { mouse, handleMouseMove } = boo();
    //     handleMouseMove();
    // }
    render() {
        // const { mouse, handleMouseMove } = this.state;
        console.log(Hooks);
        debugger;

        return (
            <div>
                <Hooks />
            </div>
            // <div style={{ height: "100%" }} onMouseMove={handleMouseMove}>
            //     The current mouse position is ({mouse.x}, {mouse.y})
            // </div>
        );
    }
}

const Mouse = () => {
    const { mouse, handleMouseMove } = Hooks();
    return (
        <div style={{ height: "100%" }} onMouseMove={handleMouseMove}>
            The current mouse position is ({mouse.x}, {mouse.y})
        </div>
        // <p >
        //
        // </p>
    );
};

export default Mouse;

// function useBind(init) {
//     let [value, setValue] = useState(init);
//     const onChange = event => {
//         // debugger;
//         const eventVal = event.currentTarget.value;
//         console.log("onChange", eventVal);
//         setValue(eventVal);
//     };
//     // let onChange = useCallback(function(event) {

//     // }, []);
//     return {
//         value,
//         onChange
//     };
// }
// function Page1(props) {
//     let { value, onChange } = useBind("");
//     console.log("Page1", value);
//     return <input value={value} onChange={onChange} />;
// }

// export default Page1;

// import React, { useState } from "react";

// function Example() {
//     const [count, setCount] = useState(0);
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>Click me</button>
//         </div>
//     );
// }

// export default Example;
