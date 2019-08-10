

import React from 'react'

export default class AddBtn extends React.Component{
	
	render(){
		console.log("AddBtn");
		return (
            <button onClick={this.props.add}>button</button>
        )
	}
}