import React, {Component} from 'react';

import PropTypes from 'prop-types';



class Child extends Component {
  
  	onChange = () => {
  		
  	}
	componentDidUpdate(){
		console.log("this.props.name componentDidUpdate", this.props.name);
	}
	componentDidMount(){
		console.log("this.props.name componentDidMount", this.props.name);
	}

	componentWillUnmount(){
		console.log("this.props.name componentWillUnmount", this.props.name);
	}
	render() {
		console.log("Child")
	    return (
	    	<div>
	    		{this.props.name}
	    	</div>
	    )
	}
}




export default Child