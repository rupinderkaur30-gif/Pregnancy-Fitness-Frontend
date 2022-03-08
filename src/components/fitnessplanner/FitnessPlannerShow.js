import React, { Component } from 'react'
import { fetchWorkout } from '../../redux/actions/allWorkoutAction'
import { connect } from 'react-redux'


class FitnessPlannerShow extends Component {

    componentDidMount(){
        this.props.dispatchFetchWorkout()
    }

    render() {
       const  id = parseInt(this.props.match.params.id)
        const fitness = this.props.fitnessplanners.find(fitness => fitness.id === id)
        return(
            <div> 
                <h1>Exercises</h1>
                {workout && 
                <ul>
                  {workout.exercises.map(exercise => 
                    <React.Fragment key={exercise.id}>
                        <li>{exercise.name}</li>
                        <iframe src={exercise.video_url}></iframe>
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
            dispatchFetchWorkout: () => dispatch(fetchWorkout())
     }
 }

 function mapStateToProps(state){
     return{
         allworkout: state.allWorkoutReducer.allWorkout
     }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(WorkoutShow)