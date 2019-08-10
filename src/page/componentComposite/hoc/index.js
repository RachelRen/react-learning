import React from "react";

import HOC from "./hoc";

class Mouse extends React.Component {
    render() {
        const { mouse } = this.props;
        return (
            <p>
                The current mouse position is ({mouse.x}, {mouse.y})
            </p>
        );
    }
}

class Cat extends React.Component {
    render() {
        const { mouse } = this.props;
        return (
            <div>
                Cat
                <p>
                    The current mouse position is ({mouse.x}, {mouse.y})
                </p>
            </div>
        );
    }
}

export const HOCCat = HOC(Cat);
export default HOC(Mouse);
