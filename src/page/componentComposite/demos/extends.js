import React from "react";

import Mouse from "./index";

export default class Cat extends Mouse {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div onMouseMove={this.handleMouseMove}>
                Cat
                {this.state.x}
                {this.state.y}
            </div>
        );
    }
}
