import React from "react";

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <div style={{ width: "200px", height: "200px" }}>
                Cat
                <p>
                    The current mouse position is ({mouse.x}, {mouse.y})
                </p>
            </div>
        );
    }
}

class Dog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }
    render() {
        const mouse = this.props.mouse;
        return (
            <div style={{ width: "200px", height: "200px" }}>
                Dog
                {this.state.count}
                <p>
                    The current mouse position is ({mouse.x}, {mouse.y})
                </p>
            </div>
        );
    }
}

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
                {this.props.render(this.state)}
            </div>
        );
    }
}

class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>移动鼠标!</h1>
                <Mouse render={mouse => <Dog mouse={mouse} />} />
            </div>
        );
    }
}

export class MouseDogTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>移动鼠标!</h1>
                <Mouse render={mouse => <Dog mouse={mouse} />} />
            </div>
        );
    }
}
//  MouseDogTracker;
export default MouseTracker;
