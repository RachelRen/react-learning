import React, { Component } from 'React';
// import HOC from './agent';
// import Wrap from './wrap';

// class WrappedComponent extends Component{
    
//     render(){
//        return (<Wrap>
//            <button onClick={this.btnClick}>HOC</button>
//        </Wrap>)
//     }
// }

// //高阶组件使用
// export default WrappedComponent

import {useList} from './dohooks';

class WrappedComponent extends Component{
    constructor(){
        super();
        const [changeDate] = useList();
        this.btnClick = changeDate.bind(this);
    }
    
    render(){
       return (<div>
           <button onClick={this.btnClick}>HOC</button>
       </div>)
    }
}

//高阶组件使用
export default WrappedComponent