import React, { Component } from 'React';
//高阶组件定义
const HOC = (WrappedComponent) =>
  class WrapperComponent extends Component {
    btnClick = () => {
        alert("ewe")
    }
    render() {
      return (
          <div>
              rere HOC
              <WrappedComponent {...this.props} />
          </div>
      )
      
    }
}

export default HOC;