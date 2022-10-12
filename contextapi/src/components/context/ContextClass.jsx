import React from "react";
import MyContext from "./context/Context";
import ContextConsumer from "./ContextConsumer";
import UseContextHook from "./UseContextHook";
import NormalComponent from "./NormalComponent";
import PureComponent from "./PureComponentClass";

class ContextClass extends React.Component{
    constructor(){
        super();
        this.state ={
            userName: '',
            lastName: ''
        }
    }

    handleUpdateUserName = (e) => {
        this.setState({userName: e.target.value})
    }

    handleUpdateLastName = (e) => {
        this.setState({lastName: e.target.value})
    }

    render(){
        return(
      <MyContext.Provider value={{userName:this.state.userName,aliases:['GS','Gowtham','Sai']}}>
        UserName:<input type="text" value={this.state.userName} onChange={this.handleUpdateUserName}/><br/>
        LastName:<input type="text" value={this.state.lastName} onChange={this.handleUpdateLastName}/>
            <ContextConsumer />
            <UseContextHook />
            <NormalComponent userName={this.state.userName}/>
            <PureComponentClass lastName={this.state.lastName}/>
            </MyContext.Provider>
        )
    }
}

export default ContextClass;