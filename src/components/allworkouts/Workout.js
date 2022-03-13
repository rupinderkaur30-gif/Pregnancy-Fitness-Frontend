import React from 'react';
import { connect } from 'react-redux';
import { deleteWorkout } from '../../redux/actions/allWorkoutAction';

class Workout extends React.Component {
    render(){
        return(
            <>
            <li><a href={`/workouts/${this.props.id}`}>{this.props.name}</a></li>
            <button onClick={() => this.props.deleteWorkout(this.props.id)}>Delete workout</button>
            </>
        )
    }
}

export default connect(null , { deleteWorkout })(Workout)