import React, { Component } from "react";
import Clock from "./Clock";
import Counter from "./Counter";
import ChangeHeader from "./ChangeHeader"

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      title: "React Learning Zone"
    }
  }

  changeHeader = (value) => {
    this.setState({
      title: value
    })
  }

  render() {
    return(
      <div className="container">
        <div className="top">
          <h1>{this.state.title}</h1>
        </div>
        <div className="bottom">


        <Clock
        title = "Hello World"
        name = "Clock"
        />
      <ChangeHeader headerChange={this.changeHeader} />
        <Counter />
        </div>
      </div>
    );
  }
}

export default App;
