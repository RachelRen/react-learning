import React, {Component} from 'react';

import Child from './child.js';

class Normal extends Component {
	state = {
	    items: [1, 2, 3]
	}
	handleClick = () => {
	    const { items } = this.state;
	    items.pop();
	    this.setState({ items: [].concat(items) });
	}
	render(){
		return (
			<div> Normal
		      <ul>
		        {this.state.items.map(i => < li key={i}>{i}< /li>)}
		      </ul>
		      <button onClick={this.handleClick}>delete< /button>
		      <Child />
		    </div>
		)
	}
}

export default Normal