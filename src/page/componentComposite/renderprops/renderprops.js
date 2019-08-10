import React from 'react';

export default class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            number: 0
        };

    }
  
    btnClick = () => {
        this.setState({
            number: this.state.number++
        })
    }
  
    render() {
      return (
            <div style={{ height: '100%' }} onClick={this.btnClick}>
                {this.props.render(this.state)}
            </div>
      );
    }
}
  