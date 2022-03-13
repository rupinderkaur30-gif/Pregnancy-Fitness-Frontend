import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../redux/actions/userAction.js'
const  Navbar = (props) => {

  const logout = () => {
    props.logoutUser()
      window.location = "/login"
    
  }
    return <div className="header">
    {props.loggedIn && <NavLink className='headerlink' to="/home">Home</NavLink>}
    {!props.loggedIn && <NavLink className='headerlink' to="/login">Log In</NavLink>}
    {props.loggedIn && <NavLink className='headerlink' to="/allworkouts">AllWorkouts</NavLink>}
     {props.loggedIn && <NavLink className='headerlink' to="/mealplan">Mealplan</NavLink>}
     {props.loggedIn && <NavLink className='headerlink' to="/fitnessplanner">Fitnessplanner</NavLink>}
    {props.loggedIn && <NavLink onClick={logout} className='headerlink' to="#">Log Out</NavLink>}
    </div>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
}
const mapStateToProps = (state) => {
   return {
     loggedIn: state.userReducer.loggedIn
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar)