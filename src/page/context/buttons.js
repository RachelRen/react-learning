import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Buttons extends Component{
	static contextTypes = {
	    method: PropTypes.func
	  }

	  constructor () {
	    super()
	    this.state = { themeColor: '' }
	  }

	  componentWillMount () {
	    this._updateThemeColor()
	  }

	  _updateThemeColor () {
	    
	  }

	  click(){

	  	this.context.method();
	  }

	  render () {
	    return (
	      <div>
	        <button style={{ color: this.state.themeColor }} onClick={()=> this.click()}>Red</button>
	        <button style={{ color: this.state.themeColor }}>Blue</button>
	      </div>
	    )
	  }

}
