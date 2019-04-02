import React, { Component } from 'react';
class ControlledForm extends Component {
    state = {
      username: '',
    }
    updateUsername = (e) => {
      this.setState({
        username: e.target.value,
      })
    }

    handleSubmit = (event) => {
       
      alert('A name was submitted: ' + this.state.username);
  console.log(event)
      event.preventDefault();

    //   submit form auto api

       
      
    }
    render () {
      
      return (
                 
    <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name = "username"
            value={this.state.username}
            onChange={this.updateUsername}
            />
           
          <button type='submit'>Submit</button>
        </form>
      )
    }
  }

  export default ControlledForm