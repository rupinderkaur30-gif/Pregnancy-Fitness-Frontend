import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createWorkout } from '../../redux/actions/allWorkoutAction'

class AllWorkoutsForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: ""
        };
    }

handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = e => {
  e.preventDefault();
  this.props.createWorkout({...this.state, user_id: this.props.user.user?.id})
  this.setState({
      name: ""
  })
}

render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label class="label">
                    Name
                </label>
                <input onChange={this.handleChange} type="text" name="name" value={this.state.name}></input><br/> 
                <button class="button" type="submit">Add Workout</button>
            </form>
        )
}
}

function mapStateToProps(state) {
return {
    user: state.userReducer
}
}


export default connect(mapStateToProps, {createWorkout})(AllWorkoutsForm)