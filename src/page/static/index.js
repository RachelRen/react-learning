import React from 'react';

import PropTypes from 'prop-types';

import Child from './child.js';

class Hello extends React.Component{
  
	static defaultProps = {
	    name: "bar545"
	};
	static staticProperty = {
	    foo: "bar"
	};
	static childContextTypes = {
	    name: PropTypes.string
	}
    getChildContext(){
    	return {
      		name: 'Tenmic ewew'
    	}
    }
    render(){
	    return <div>Hello  343 {this.props.name} 4343
	    	<p>P; 43{this.props.foo}</p>
	    	<Child />
	    </div>
    }
}



Hello.propTypes = {
	name: PropTypes.any.isRequired
}

export default Hello