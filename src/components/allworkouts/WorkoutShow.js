import React, { Component } from 'react'
import { fetchWorkout } from '../../redux/actions/allWorkoutAction'
import { connect } from 'react-redux'
import ExerciseForm from '../exercises/ExerciseForm'
import {deleteExercise } from '../../redux/actions/exerciseAction'


class WorkoutShow extends Component {

    componentDidMount(){
        this.props.dispatchFetchWorkout()
    }

    render() {
       const  id = parseInt(this.props.match.params.id)
        const workout = this.props.allworkout.find(workout => workout.id === id)
        return(
            <div> 
                <h1>Exercises</h1>
               {workout&& <ExerciseForm workout_id={workout.id}/>}
                {workout && 
                <ul>
                  {workout.exercises.map(exercise => 
                    <React.Fragment key={exercise.id}>
                        <li>{exercise.name}</li>
                        <iframe src={exercise.video_url}></iframe>
                        <li>{exercise.description}</li>
                        <li>{exercise.minute}</li>
                        <li>{exercise.equipment}</li>
                        <li>{exercise.targetareas}</li>
                        <button onClick={() => this.props.dispatchDeleteExercise(exercise)}>Delete Exercise</button>
                        <br/>
                        <br/>
                        <br/>
                    </React.Fragment>
                  )}
                </ul>
    }
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
            dispatchFetchWorkout: () => dispatch(fetchWorkout()),
            dispatchDeleteExercise: (exercise) =>  dispatch(deleteExercise(exercise))
     }
 }

 function mapStateToProps(state){
     return{
         allworkout: state.allWorkoutReducer.allWorkout
     }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(WorkoutShow)