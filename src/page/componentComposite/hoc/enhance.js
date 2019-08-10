class Mouse extends React.Component {
    render(props) {
        const { x, y } = props.mouse;
        return (
            <p>
                The current mouse position is ({x}, {y})
            </p>
        );
    }
}

class Cat extends React.Component {
    render(props) {
        const { x, y } = props.mouse;
        return <img src="/cat.jpg" style={{ position: "absolute", left: x, top: y }} alt="" />;
    }
}

const MouseHoc = MouseComponent => {
    return class extends MouseComponent {
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
            const props = {
                mouse: this.state
            };
            return (
                <div style={{ height: "100%" }} onMouseMove={this.handleMouseMove}>
                    {super.render(props)}
                </div>
            );
        }
    };
};

const EnhanceMouse = MouseHoc(Mouse);
const EnhanceCat = MouseHoc(Cat);

// const EnhanceDog = MouseHoc(Dog);
