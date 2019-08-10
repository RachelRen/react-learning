import React from "react";

const HOC = WrappedComponent =>
    class WrapperComponent extends React.Component {
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
                    <WrappedComponent {...props} {...this.props} />
                </div>
            );
        }
    };

export default HOC;
