import React, {Component} from 'react';

import PropTypes from 'prop-types';

import Content from './content';

export default class ContextIndex extends Component {
  static childContextTypes = {
  	method: PropTypes.func
  }

  getChildContext () {
    return { 
    	method: ()=> {
    		console.log("rere");
    	}
    }
  }

  render () {
    return (
      <div>
        <Content />
      </div>
    )
  }
}
