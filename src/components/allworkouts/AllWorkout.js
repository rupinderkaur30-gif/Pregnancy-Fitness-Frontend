import React, { Component } from 'react'
import { fetchWorkout } from '../../redux/actions/allWorkoutAction'
import AllWorkoutsForm from './AllWorkoutsForm'
import { connect } from 'react-redux'
import Workout from './Workout'




 class AllWorkout extends Component {


    componentDidMount(){
        this.props.dispatchFetchWorkout()
    }
    render() {
        return(
            <div> 
                <h1>All Workouts</h1>
                <AllWorkoutsForm /><br/>
                <ul>

                    {this.props.allworkout.map(w => <Workout key={w.id} {...w}/> )}
                </ul>
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

 export default connect(mapStateToProps, mapDispatchToProps)(AllWorkout)
