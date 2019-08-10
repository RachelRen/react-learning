import React, {Component} from 'react';

import PropTypes from 'prop-types';



class Child extends Component {
  
  	onChange = () => {
  		
  	}
	
	render() {
		console.log("Child")
	    return (
	    	<div>
	    		<button onClick={this.onChange}></button>
	    	</div>
	    )
	}
}




export default Child