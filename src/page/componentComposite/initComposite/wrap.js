import React, { Component } from 'React';
class Wrap extends Component {
    btnClick = () => {
        alert("ewe")
    }
    render () {
      return (
        <div className='card'>
          <div className='card-content'>
            wrap
            {this.props.children}
          </div>
        </div>
      )
    }
}
export default Wrap;