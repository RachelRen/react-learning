import React, {Component, PureComponent} from 'react';



export default class PureItem extends PureComponent{
	

	  

	  render () {
	  	console.log("item render")
	    return (
	      <li>{this.props.name}</li>
	    )
	  }
	
}
