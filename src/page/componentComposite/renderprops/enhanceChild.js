import React from "react";
class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: "100%" }} onMouseMove={this.handleMouseMove}>
                {this.props.children(this.state)}
            </div>
        );
    }
}

class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                ChildMouse
                <Mouse>
                    {mouse => (
                        <p>
                            ChildMouse 鼠标的位置是 {mouse.x}，{mouse.y}
                        </p>
                    )}
                </Mouse>
            </div>
        );
    }
}

export default MouseTracker;
