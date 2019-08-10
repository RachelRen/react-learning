import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Buttons from './buttons';

export default class Content extends Component{
	

	  constructor () {
	    super()
	    this.state = { themeColor: '' }
	  }

	  componentWillMount () {
	    this._updateThemeColor()
	  }

	  _updateThemeColor () {
	    
	  }

	  render () {
	    return (
	      <div>
	        <p style={{ color: this.state.themeColor }}>React.js 小书内容</p>
	        <Buttons />
	      </div>
	    )
	  }
	
}
