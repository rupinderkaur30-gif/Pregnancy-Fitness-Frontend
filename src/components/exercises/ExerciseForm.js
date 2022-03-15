import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createExercise} from '../../redux/actions/exerciseAction'

class ExerciseForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            video_url: "",
            description: "",
            minute: "",
            equipment: "",
            targetareas: "",
            workout_id: props.workout_id,
            user_id: props.user.user?.id
        };
    }

handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value,
    })
}

handleSubmit = e => {
  e.preventDefault();
  this.props.createExercise(this.state)
  this.setState({
      name: "",
      video_url: "",
      description: "",
      minute: "",
      equipment: "",
      targetareas: "",
   
  })
}

render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                </label>
                <input onChange={this.handleChange} type="text" name="name" value={this.state.name}></input><br/>
                <label>Video</label><input onChange={this.handleChange} type="text" name="video_url" value={this.state.video_url}></input><br/>    
                <label>Description</label><input onChange={this.handleChange} type="text" name="description" value={this.state.description}></input><br/>
                <label>Minute</label><input onChange={this.handleChange} type="text" name="minute" value={this.state.minute}></input><br/>
                <label>Equipment</label><input onChange={this.handleChange} type="text" name="equipment" value={this.state.equipment}></input><br/>
                <label>Targetareas</label><input onChange={this.handleChange} type="text" name="targetareas" value={this.state.targetareas}></input><br/>
                <button class="button" type="submit">Add Exercise</button>


            </form>
        )
}
}

function mapStateToProps(state) {
return {
    user: state.userReducer
}
}


export default connect(mapStateToProps, {createExercise})(ExerciseForm)