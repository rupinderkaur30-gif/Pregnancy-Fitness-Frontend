import React, { Component } from 'react'

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
  e.preventDeafault();
  this.props.addWorkout({...this.state})
  this.setState({
      Name: ""
  })
}



     
render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                </label>
                <input onChange={this.handleChange}type="text" name="Name"></input>
                <button type="submit">Add Workout</button>
            </form>
        )
}
}

export default AllWorkoutsForm