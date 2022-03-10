import React, { Component } from 'react'
import { fetchMeal } from '../../redux/actions/mealPlanAction'
import { connect } from 'react-redux'
import Meal from './Meal'



 class Mealplan extends Component {

    componentDidMount(){
        this.props.dispatchFetchMeal()
    }
    render() {
        return(
            <div> 
                <h1>All Meals</h1>
                <ul>
                   {this.props.mealPlan.map(m => <Meal k={m.id} {...m}/>)} 
                </ul>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
            dispatchFetchMeal: () => dispatch(fetchMeal())
     }
 }

 function mapStateToProps(state){
     return{
         mealPlan: state.mealPlanReducer.mealPlan
     }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(Mealplan)