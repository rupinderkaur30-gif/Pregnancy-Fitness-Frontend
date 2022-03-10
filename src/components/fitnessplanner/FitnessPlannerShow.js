import React, { Component } from 'react'
import { fetchFitnessPlanner } from '../../redux/actions/fitnessPlannerAction'
import { connect } from 'react-redux'


class FitnessPlannerShow extends Component {

    componentDidMount(){
        this.props.dispatchFetchFitnessPlanner()
    }

    render() {
       const  id = parseInt(this.props.match.params.id)
        const fitness = this.props.fitnessplanners.find(fitness => fitness.id === id)
        return(
            <div> 
                {fitness&& 
                <ul>
                 <li>{fitness.name}</li>
                 <li>{fitness.address}</li>
                </ul>
    }
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
            dispatchFetchFitnessPlanner: () => dispatch(fetchFitnessPlanner())
     }
 }

 function mapStateToProps(state){
     return{
         fitnessplanners: state.fitnessPlannerReducer.fitnessplanners
     }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(FitnessPlannerShow)