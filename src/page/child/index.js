import React, {Component} from 'react';

import PropTypes from 'prop-types';


class Card extends Component {
	constructor(){
		super();
		this.state = {
			test: 1
		}
	}
	test= () => {
		/*this.setState({
			test: this.state.test + 1
		})
		console.log("this.state.test", this.state.test);
		this.setState({
			test: this.state.test + 1
		})
		console.log("this.state.test", this.state.test);
		this.setState({
			test: this.state.test + 1
		})
		console.log("this.state.test", this.state.test);
		return;*/
		this.setState((prevState) => {
			return {
				test: prevState.test + 1
			}
		})
		console.log("this.state.test", this.state.test);
		this.setState((prevState) => {
			return {
				test: prevState.test + 1
			}
		})
		console.log("this.state.test", this.state.test);

		this.setState((prevState) => {
			return {
				test: prevState.test + 1
			}
		})
		console.log("this.state.test", this.state.test);
	}
  render () {
  	console.log("render")
    return (
      <div className='card'>
      	Card
        <div className='card-content'>
          {this.props.children}
        </div>
        <button onClick={this.test}>test{this.state.test}</button>
      </div>
    )
  }
}





export default Card