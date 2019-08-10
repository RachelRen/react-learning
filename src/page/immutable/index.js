import React, {Component} from 'react';
import { Map, fromJS } from "immutable";  

class ImmutableDemo extends Component{
	constructor(){
		super();

		this.state = {
			data: fromJS({
				count: 0,
				foo: [{
					name: "rach A 1",
					key: 1
				},{
					name: "rach A 2",
					key: 2
				}],
				a: {
					b: "rachrach"
				}

			}),
			bar: fromJS({
				a: {
					b: "rerere"
				}
			})
		}
	}

	handleClick = () => {
		const map1 = Map({ a: { aa: 1 }, b: 2, c: 3 });  
		const map2 = map1.set('b', 50);  
		console.log("map1 !== map2", map1 !== map2); // true  
		console.log("map1.get('b')", map1.get('b')); // 2  
		console.log("map2.get('b')", map2.get('b')); // 50  
		console.log("map1.get('a') === map2.get('a')", map1.get('a') === map2.get('a'));
	}

	changeClick = () => {
		var test = "rerertest";
		this.setState(({data}) => ({

		    data: data.updateIn(['a','b'], ()=>test)
		  }));

		return;
		this.setImmState(d => d.updateIn(['a','b'], ()=>"rrere"));
		return;
		debugger;
		this.setState(({data}) => {
			var test = "rerer";
			data: data.updateIn(['a','b'], ()=>{
				debugger;
				return test
			})
		})
		return;
		this.setState(({foo}) => ({
			foo: foo.update("", )
		}))
		this.setState(({bar}) => {
			bar: bar.updateIn(['a', 'b'], val => val + "4335445")
		})
		return;
		console.log("this.state.bar", this.state.bar);
		//return;
		// this.setState(bar, {a: {b: "tetetetet"}})

		
	}
	setImmState(fn) {
		  return this.setState(({data}) => ({
		    data: data.updateIn(['a','b'], ()=>"rrere")
		  }));
	}
	changeCount = () => {
		this.setState(({data}) => ({
	    	data: data.update('count', v => v + 1)
	    }));
		// thissetImmState.(d => d.update('count', v => v+1))
	}

	changeFoo = () => {

		this.setState(({data}) => ({
			data: data.update('foo', foo => foo.push(Map({
				name: "foo foo foo",
				key: 55
			})))
		}))
		
	}

	render(){

		return (<div>
			<header>
				immutable
			</header>
			<div>
				{this.state.data.get('foo').map(item => 
					<div key={item.key}>immutable name{item.get("name")}</div>
				)}
			</div>
			<div>
				{this.state.data.get("count")}
			</div>

			<div>
				a.b : {this.state.data.getIn(["a","b"])}
			</div>
			
			<div><button onClick={this.changeCount}>immutable changeCount</button></div>
			<div><button onClick={this.changeFoo}>changeFoo</button></div>
			<div><button onClick={this.handleClick}>immutable</button></div>
			<div><button onClick={this.changeClick}>change immutable</button></div>
			test
		</div>)
	}
}

export default ImmutableDemo