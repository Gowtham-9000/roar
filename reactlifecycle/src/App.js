import React from 'react';
import LifeCycleMethods from './LifeCycleMethods';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      removeComponent: false
    }
}

render(){
  return(
    <div>
      {!this.state.removeComponent && <LifeCycleMethods /> }
      <button onClick={ () => this.setState({removeComponent: !this.state.removeComponent})}>Toggle Component</button>
    </div>
  )
}
}

export default App;