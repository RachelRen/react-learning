import React from "react";
var LogMixin = {
    log: function() {
        console.log("log");
    },
    componentDidMount: function() {
        console.log("in");
    },
    componentWillUnmount: function() {
        console.log("out");
    }
};

var User = React.createClass({
    mixins: [LogMixin],
    render: function() {
        return <div>...</div>;
    }
});

var Goods = React.createClass({
    mixins: [LogMixin],
    render: function() {
        return <div>mixins</div>;
    }
});

export default Goods;
