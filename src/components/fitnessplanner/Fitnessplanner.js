import React, { Component } from 'react'
import { fetchFitnessPlanner } from '../../redux/actions/fitnessPlannerAction'
import { connect } from 'react-redux'
import Fitness from './Fitness'


class FitnessPlanner extends Component {

    componentDidMount(){
        this.props.dispatchFitnessPlanner()
    }

    render(){
        return(
            <div>
            <h1>Fitness places</h1>
            <ul>
            {this.props.fitnessplanners.map(f => <Fitness key={f.id} {...f}/>)}
         </ul>
         </div>
        )
    }
}

    function mapDispatchToProps(dispatch){
        return {
                dispatchFitnessPlanner: () => dispatch(fetchFitnessPlanner())
         }
     }
    
     function mapStateToProps(state){
         return{
            fitnessplanners: state.fitnessPlannerReducer.fitnessplanners
         }
     }
    


export default connect(mapStateToProps, mapDispatchToProps)(FitnessPlanner)