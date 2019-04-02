import React, { Component } from 'react';
class UnControlledForm extends Component {
    handleSubmit = () => {
     alert("theee" , this.input)
    
    }
    render () {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder="enter text"
            ref={this.input} />
          <button type='submit'>Submit</button>
        </form>
      )
    }
  }
export default UnControlledForm