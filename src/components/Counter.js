import React, { Component } from "react"

class Counter extends Component {
  constructor(props){
    super(props)
    // this.increaseCount = this.increaseCount.bind(this);
    this.state = {
      count: 0,

    }
  }

increaseCount() {
  this.setState((prevState) => {
    return {
      count: prevState.count + 1
    };
  }
);
};

resetCount() {
  this.setState((prevState) => {
    return {
      count: 0,
    };
  });
};



  render(){
    return(
      <div className= "counterDiv">
        <button onClick={() =>this.increaseCount()}>Add to Counter</button>
        <button onClick={() =>this.resetCount()}>Reset Counter</button>
        <span>{this.state.count}</span>
      </div>
    )
  }
}

 export default Counter;
