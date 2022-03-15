import React from 'react';
import { connect } from 'react-redux';
import { deleteWorkout } from '../../redux/actions/allWorkoutAction';

class Workout extends React.Component {
    render(){
        return(
            <ul>
            <li><a href={`/workouts/${this.props.id}`}>{this.props.name}</a></li>
            <button class="button" onClick={() => this.props.deleteWorkout(this.props.id)}>Delete workout</button>
            <br/>
            <br/>
            </ul>
        )
    }
}

export default connect(null , { deleteWorkout })(Workout)