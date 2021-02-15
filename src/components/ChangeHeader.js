import React, { Component } from "react";


class ChangeHeader extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      value: "Change Header",
      header: "Change Me",

    }
    }
    handleChange = (e) => {
      this.setState({
        value: e.target.value}
      );

    }

  handleSubmit = (e) => {
    console.log("State request submitted. The value is " + this.state.value)
      e.preventDefault();
    this.props.headerChange(this.state.value)
    this.setState({
      value: ""
    });
  };

  render(){
    return(
<div>
  <form onSubmit={this.handleSubmit}>
    <h2>{this.state.header}</h2>
    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
    <button type="submit">Submit</button>
  </form>

</div>
    );
  }
}

export default ChangeHeader
