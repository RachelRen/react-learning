import React from 'react';
import PropTypes from 'prop-types';

class Child extends React.Component{
  static contextTypes = {
    name: PropTypes.string
  }
  render(){
    return <div>{this.context.name}</div>
  }
}

export default Child