// import logo from './logo.svg';
import './App.css';
// import { Routes, Route } from 'react-router-dom';
import {BrowserRouter as Router, Route , Switch, withRouter} from "react-router-dom"
import React, { Component} from 'react';
import Navbar from './components/Navbar'
import Home from './components/home/Home';
import AllWorkouts from './components/allworkouts/AllWorkouts';
import Mealplan from './components/mealplan/Mealplan';
import Fitnessplanner from './components/fitnessplanner/Fitnessplanner';
import LogIn from './components/login/LogIn';
import { checkLoggedIn } from './redux/actions/userAction';
import { connect } from 'react-redux'

class App extends Component{
  componentDidMount() {
   this.props.checkLoggedIn()
  }
 
  render() {
   return (
  <div className="App">
    <Navbar />
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/login" component={LogIn} />
      <Route path="/allworkouts" component={AllWorkouts} />
      <Route path="/mealplan" component={Mealplan} />
      <Route path="/fitnessplanner" component={Fitnessplanner } />
  </Switch>
  </div>
);
}
}

const mapDispatchToProps = (dispatch) => {
   return {
     checkLoggedIn: () => dispatch(checkLoggedIn())
   }
}

export default connect(null, mapDispatchToProps)(App);
