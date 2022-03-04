 import React, { Component } from 'react'
 import { loginUser } from '../../redux/actions/userAction';
 import { connect } from 'react-redux'

 class LogIn extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: ""
        };
    }

    handleChange = e => {
     this.setState({
      [e.target.name]: e.target.value
     })
    }

    handleSubmit = e => {
        e.preventDefault() 
        this.props.loginUser(this.state)
        .then(() => {
            window.location = "/home"
        } )
    }
 
    render(){
     return(
         <form onSubmit={this.handleSubmit}>
             <label>
                 username
             </label>
             <input onChange={this.handleChange}type="text" name="username"></input>
             <button type="submit">Log In</button>
         </form>
     )
 }
}

const mapDispatchToProps = (dispatch) => {
 return {
     loginUser: userData => dispatch(loginUser(userData))
 }
}


export default connect(null, mapDispatchToProps)(LogIn)