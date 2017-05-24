import React, { Component } from 'react';
import _ from 'underscore';
//import Icon from './components/Icon';
import ExtSelect from './components/ExtSelect';
import Input from './components/Input';
import 'react-select/dist/react-select.css';

import STATES from './components/data/states';


class RegistrationForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: null,
      name: null,
      age: null,
      company: null,
      country: null
    }
  }

  saveAndContinue(e) {
    e.preventDefault();

    var canProceed = this.validateEmail(this.state.email)
      && this.validateInput(this.state.name)
      && this.validateInput(this.state.age);

    if(canProceed) {
      //var data = {
      //  email: this.state.email,
      //}
      console.log("succes");
    } else {
      this.refs.email.isValid();
      this.refs.name.isValid();
      this.refs.age.isValid();
    }
  }

  isConfirmedPassword = (event) => {
    return (event === this.state.password)
  }

  handleTextInput = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleEmailInput = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  validateEmail = (event) => {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    // eslint-disable-next-line
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(event);
  }

  isEmpty = (value) => {
    return !_.isEmpty(value);
  }

  handleCountryInput = (value) => {
    this.setState({
      country: value
    })
  }

  logChange = (val) => {
    console.log("Selected: " + val);
  }

  render() {
    return (
      <div className="registration_screen">

        <div className="registration_form">
          <h1>Registration form</h1>
          <form onSubmit={this.saveAndContinue.bind(this)}>

            <Input 
              text="Email Address" 
              ref="email"
              type="text"
              validate={this.validateEmail}
              value={this.state.email}
              onChange={this.handleEmailInput} 
              errorMessage="Email is invalid"
              emptyMessage="Email can't be empty"
              errorVisible={this.state.showEmailError}
            />

            <Input 
              text="Name" 
              ref="name"
              type="text"
              validate={this.isEmpty}
              value={this.state.name}
              onChange={this.handleTextInput} 
              emptyMessage="Name can't be empty"
            /> 

            <Input 
              text="Age" 
              ref="age"
              type="text"
              validate={this.isEmpty}
              value={this.state.age}
              onChange={this.handleTextInput} 
              emptyMessage="Age can't be empty"
            />

            <Input 
              text="Company" 
              ref="company"
              type="text"
              value={this.state.company}
              onChange={this.handleTextInput} 
            />

            <ExtSelect
              clearable={false}
              autosize={false}
              showPlaceholderWithValue={true}
              placeholder="Choose Your Country"
              placeholderTitle="Your Country"
              value={this.state.country}
              searchable={this.props.searchable}
              options={STATES}
              onChange={this.handleCountryInput}
            />  

            <button 
              type="submit" 
              className="button button_wide">
              Registration
            </button>

          </form>

          {/* 
           <a href="https://github.com/mikepro4/react-signup-form" target="_blank" className="github_link" title="View Source Code"> 
              <Icon type="guthub" />
          </a>*/}
        </div>

      </div>
    );
  }
    
};
    
export default RegistrationForm;