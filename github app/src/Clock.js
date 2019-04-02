import React, { Component } from 'react';

class Clock extends React.Component {
   
   state = {
     date: new Date()
    };
    // componentDidMount(){
    //   alert("hi component is mounting")
    // }
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
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
export default Clock