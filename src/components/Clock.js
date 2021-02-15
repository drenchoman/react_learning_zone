import React, { Component } from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);

    }

    tick() {
      this.setState({
        date: new Date()
      });
    }

  render() {
    const {title, name} = this.props;
    const {date} = this.state;
    return (

      <div>
        <h1> {title}</h1>
        <p>I present to you a {name}</p>
        <p>It is {date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock
