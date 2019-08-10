import cc from "./functionstate";

import React from "react";

export default class Mouse extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     test: cc.a
        // };
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
        // let newA =
        cc.a = cc.getA();
        // alert(newA);
        this.forceUpdate();
    };
    render() {
        // {}
        return (
            <div style={{ height: "100%" }}>
                The current state 1 is {cc.a}
                <button onClick={this.clickTest} />
            </div>
        );
    }
}

const MouseHoc = (MouseComponent, props) => {
    props.text = props.text + "---I can operate props";
    return class extends React.Component {
        render() {
            return (
                <div style={{ height: "100%" }} onMouseMove={this.handleMouseMove}>
                    <MouseComponent {...props} mouse={this.state} />
                </div>
            );
        }
    };
};
MouseHoc(Mouse, {
    text: "some thing..."
});

function refHOC(WrappedComponent) {
    return class extends Component {
        componentDidMount() {
            this.wapperRef.log();
        }
        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    ref={ref => {
                        this.wapperRef = ref;
                    }}
                />
            );
        }
    };
}

function visibleHOC(WrappedComponent) {
    return class extends Component {
        render() {
            if (this.props.visible === false) return null;
            return <WrappedComponent {...props} />;
        }
    };
}
