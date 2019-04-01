import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends Component {
    
    handleChange = input => e => {
        this.setState({
            [input] : e.target.value
        })

    }
   
    
    render() {
            const {handleSubmit} = this.props
      return (
        <form onSubmit={handleSubmit}>
          <Field
            name="email"
            component="input"
            type="email"
            label="First Name"
            onChange= {this.handleChange('email')}
          
          />
         
          <Field
            name="password"
            component="input"
            type="password"
            label="Password"
            onChange={this.handleChange('password')}
          />
         
          
         
          <button type="submit">Submit</button>
        </form>
      );
    }
  }
  
  LoginForm = reduxForm({
    form: 'login',
  
  })(LoginForm);
  
  export default LoginForm;
  