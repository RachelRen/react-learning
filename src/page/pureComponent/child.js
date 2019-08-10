import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';



class PureChild extends PureComponent {
  
  	onChange = () => {
  		 this.props.onChange()
  	}
	
	render() {
		console.log("PureChild")
	    return (
	    	<div>
	    		<button onClick={this.onChange}></button>
	    	</div>
	    )
	}
}




export default PureChild