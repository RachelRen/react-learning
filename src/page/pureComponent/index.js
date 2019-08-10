import React, {PureComponent} from 'react';

import PropTypes from 'prop-types';

import PureChild from './child.js';

class PureDome extends PureComponent {
  
	state = {
	    items: [1, 2, 3]
	}
	handleClick = () => {
	    const { items } = this.state;
	    items.pop();
	    this.setState({ items: [].concat(items) });
	}

	update = (e) => {
		const { items } = this.state;
	    items.pop();
	    this.setState({ items: [].concat(items) });
		
	  	// this.props.update(e.target.value)
	}
	  render() {
	    return (< div>
	      < ul>
	        {this.state.items.map(i => < li key={i}>{i}< /li>)}
	      < /ul>
	      < button onClick={this.handleClick}>delete< /button>
	      <PureChild onChange={this.update} />
	    < /div>)
	  }
}




export default PureDome