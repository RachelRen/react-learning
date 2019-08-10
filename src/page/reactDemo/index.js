import React from 'react'

import Item from "./item"
import AddBtn from "./addBtn"


export default class ReactDemo extends React.Component{
	constructor(){
		super();
		this.state ={
			list: []
		}
	}
	add = () => {
		let randomId = parseInt(Math.random(100) * 1000);
		const {list} = this.state;
		list.push({
			id: randomId,
			name: `name_${randomId}`
		})
		this.setState({
			list: list
		})
	}
	change = () => {
		const {list} = this.state;

		list[0].name = "change name"
		this.setState({
			list
		})
	}
	itemClick = (id) => {
		console.log(id);
	}
	render(){
		
		return(
			<div>
				<AddBtn add={this.add} />
				<div>
					<button onClick={this.change}>change </button>
				</div>
				<div>
					<ul>
						{this.state.list.map(item => 
							<Item id={item.id} 
								key={item.id} name={item.name}
								itemClick={this.itemClick} />
						)}
					</ul>
				</div>
			</div>
		)
		
	}
}