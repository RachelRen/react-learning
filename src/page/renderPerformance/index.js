import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import Item from './item';
import Item from './statelessItem';
import PureItem from './item';






export default class Performance extends Component{
	

	  constructor () {
	    super()
	    this.index = 0;
	    this.state = { 
	    	index: 0,
	    	purelist: this.creatList(10),
	    	stalelesslist: this.creatList(10)
	     }
	  }

	  creatList(len){
	  	let arr = [];
	  	let index = this.index;
	  	for(let i = 0; i < len; i++){
	  		arr.push({
	  			id: index + i,
	  			name: `name ${index + i}`
	  		})
	  	}
	  	this.index = index + len;
	  	
	  	return arr;
	  }
	  add= (flag)=> () => {
	  	if("pure" == flag){
	  		let list = this.state.purelist;
		  	Array.prototype.push.apply(list, this.creatList(10))

		  	this.setState({
		  		purelist: list
		  	})
		  }else{
		  	let list = this.state.stalelesslist;
		  	Array.prototype.push.apply(list, this.creatList(10))

		  	this.setState({
		  		stalelesslist: list
		  	})
		  }
	  	
	  }

	  render () {
	    return (
	      <div>
	        <ul>
	        	{this.state.purelist.map(item => 
	        		<Item name={item.name} key={item.id}/>
	        	)}
	        </ul>
	        pure
	        <ul>
	        	{this.state.stalelesslist.map(item => 
	        		<PureItem name={item.name} key={item.id}/>
	        	)}
	        </ul>
	        <button onClick={this.add("pure")}>add pure</button>
	        <button onClick={this.add("stateless")}>add stateless</button>
	      </div>
	    )
	  }
	
}
