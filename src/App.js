import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import RegistrationForm from './RegistrationForm';

class App extends Component {
  render() {
    return (
      <div className="application_wrapper">

        <div className="application_routeHandler">
            <RegistrationForm/>
        </div>
        
      </div>
    );
  }
}

export default App;
