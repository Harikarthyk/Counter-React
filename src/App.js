import React from "react" ;
import "./App.css" ;

class App extends React.Component{
  
  constructor(props){
    super(props) ;
    this.state = {
      count : 0 , 
      add : 1 ,
      temp : 1
    }
  }

  incrementCount(){
    this.setState({
      count : this.state.count-(-(this.state.add))
    });
  }

  decrementCount(){
    this.setState({
      count : this.state.count-this.state.add
    });
  }

  resetCount (){
    this.setState({
      add : 1 ,
      count : 0 , 
      temp : 1 
    
    });
  }
  UpdateAdd(n){
    this.setState({
      temp : n
    });
  }
  setAdd(n) {
    this.setState({ add : this.state.temp , temp : 1 }) ;
  }

  render(){
    
    let count = this.state.count ;
    return(

      <div className="App-container">
        <div className="App-header">
          <h2>Counter - In React</h2> 
        </div>
        <div className="App-body" >
          <div className="App-counter">
            <h1 className="counter" > {count} </h1>
          </div>
          <div className="counter-input-form">
            <input type="number" className="input-form" placeholder="eg : 1" onChange={ e => this.UpdateAdd( e.target.value ) } />
            <div className="add-counter-btn" onClick={  () => this.setAdd( this.state.temp ) } > <h3>Set Count</h3> </div>
          </div>
          <div className="counter-btn">
            <div className="decr-btn" onClick={ () => this.decrementCount() } >
              <h3> Decrement </h3>
            </div>
            <div className="incr-btn" onClick={ () => this.incrementCount() } >
              <h3> Increment </h3>
            </div>
            <div className="reset-btn" onClick={ () => this.resetCount() } >
              <h3> Reset </h3>
            </div>
          </div>
        </div>
      </div>
    
    );
  
  }

}

export default App ;