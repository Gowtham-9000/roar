import React from "react";


class LifeCycleMethods extends React.Component{
  constructor(){
    super();
    this.state = {
      count:0
    }
    console.log('I am inside constructor')
  }


componentDidMount(){
  console.log("I am in componentDidMount")
}
componentDidUnmount(){
    console.log("I am in Unmount")
}

render(){
  console.log("I am in render")
  return(
    <div>
      Hello world the Count is {this.state.count} 
      <button onClick={() => this.setState({count: this.state.count + 1})}>Update count</button>
    </div>
  )
}
}
export default LifeCycleMethods;