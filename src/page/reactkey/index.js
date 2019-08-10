import React, {Component} from 'react';

import Child from './child.js';

class ReactKey extends Component {
  state = {
      items: [1, 2, 3]
  }
  handleClick = () => {
      const { items } = this.state;
      //items.push(4);
      this.setState({ items: [1,"a","b",3,"c"] });
  }
  render(){
    return (
      <div> react key  react key
          {this.state.items.map(i => <Child key={i} name={i} />)}
          <div><button onClick={this.handleClick}>handleClick</button></div>
        </div>

    )
  }
}

export default ReactKey