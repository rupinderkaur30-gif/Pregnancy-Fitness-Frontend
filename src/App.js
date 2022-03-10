// import logo from './logo.svg';
import './App.css';
// import { Routes, Route } from 'react-router-dom';
import {BrowserRouter as Router, Route , Switch, withRouter} from "react-router-dom"
import React, { Component} from 'react';
import Navbar from './components/Navbar'
import Home from './components/home/Home';
import AllWorkout from './components/allworkouts/AllWorkout';
import WorkoutShow from './components/allworkouts/WorkoutShow';
import Mealplan from './components/mealplan/Mealplan';
import Fitnessplanner from './components/fitnessplanner/Fitnessplanner';
import FitnessplannerShow from './components/fitnessplanner/FitnessPlannerShow';

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
      <Route path="/allworkouts" component={AllWorkout} />
      <Route path="/workouts/:id" component={WorkoutShow} />
      <Route path="/mealplan" component={Mealplan} />
      <Route path="/fitnessplanner" component={Fitnessplanner } />
      <Route path="/fitnessplanners/:id" component={FitnessplannerShow } />
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
