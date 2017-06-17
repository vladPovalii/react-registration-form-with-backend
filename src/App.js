import React, { Component } from 'react';
import './App.css';
import RegistrationForm from './RegistrationForm';
import AdminPage from './AdminPage';
import { Switch, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (AdminPage
		<Switch>
			<Route exact path='/' component={RegistrationForm}/>
			<Route path='/admin' component={}/>
		</Switch>
    );
  }
}

export default App;
