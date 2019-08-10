import React from 'react'

const Item = ({name, id, itemClick}) => {
	console.log("item", name);
	return (
		<div>
			{name}
			<button onClick={itemClick(id)}>itemClick</button>
		</div>
	)
}

export default Item;

// export default class Item extends React.PureComponent{
// 	itemClick = (id) => (event) => {
		
// 		this.props.itemClick(id)
// 	}
// 	render(){
// 		console.log("id",this.props.id);
// 		return (
// 			<div>
// 				{this.props.name}
// 				<button onClick={this.itemClick(this.props.id)}>itemClick</button>
// 			</div>
//         )
// 	}
// }