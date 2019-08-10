import React from "react";

// import Count from 'renderprops';

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        console.log("event.clientX", event.clientX);
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: "100%" }} onMouseMove={this.handleMouseMove}>
                {/* ...但我们如何渲染 <p> 以外的东西? */}
                <p>
                    The current mouse position is ({this.state.x}, {this.state.y})
                </p>
            </div>
        );
    }
}

export default Mouse;
