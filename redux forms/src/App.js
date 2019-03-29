import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm';
import MediaQuery from './components/Material'

class RegisterFormContainer extends Component {
  submit = values => {
    window.alert(JSON.stringify(values, null, 4));
  };

  getInitialValues() {
    return {
      preference: 'spaces',
      newsletter: true
    };
  }

  render() {
    return (
      <div>
      <RegisterForm
        onSubmit={this.submit}
        initialValues={this.getInitialValues()}
      />
      
      <MediaQuery/>
      </div>
    );
  }
}

export default RegisterFormContainer;
