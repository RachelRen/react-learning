import cc from "./functionstate";

import React from "react";

export default class Mouse extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     test: a
        // };
        // cc.foo();
    }

    // handleMouseMove(event) {
    //     console.log("event.clientX", event.clientX);
    //     this.setState({
    //         x: event.clientX,
    //         y: event.clientY
    //     });
    // }
    clickTest = () => {
        cc.foo();
        this.forceUpdate();
    };
    render() {
        return (
            <div style={{ height: "100%" }}>
                The current state 2 is
                <button onClick={this.clickTest} />
            </div>
        );
    }
}
