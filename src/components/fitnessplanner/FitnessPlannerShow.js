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
                 <label className= "label" >Name</label><li>{fitness.name}</li>
                 <label className= "label">Address</label><li><a target="_blank" href={`https://maps.google.com?q=${fitness.address}`}>{fitness.address}</a></li>
                 <label className= "label">Phone_number</label><li>{fitness.phone_number}</li>
                 <label className= "label"> Open_time</label><li>{fitness.open_time}</li>
                 <label className= "label">close_time</label><li>{fitness.close_time}</li>
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