import React, { Component } from 'react'
import { fetchFitnessPlanner } from '../../redux/actions/fitnessPlannerAction'
import { connect } from 'react-redux'
import Fitness from './Fitness'


class FitnessPlanner extends Component {
 

    constructor(props){
        super(props)
        this.state = {
            search_term: ""
        }
    }
    componentDidMount(){
        this.props.dispatchFitnessPlanner()
        
    }

    handleChange = (e) => {
       this.setState({
           search_term: e.target.value
       })
    }

    render(){
        const filteredFitnessPlanners = this.props.fitnessplanners.filter(f => f.name.includes(this.state.search_term))
        return(
            <div>
            <h1>Fitness places</h1>

            <label>Search</label>
            <input onChange={this.handleChange} type="text"></input>
            <ul>
            {filteredFitnessPlanners.map(f => <Fitness key={f.id} {...f}/>)}
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