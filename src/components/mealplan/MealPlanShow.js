import React, { Component } from 'react'
import { fetchMeal } from '../../redux/actions/mealPlanAction'
import { connect } from 'react-redux'


class MealPlanShow extends Component {

    componentDidMount(){
        this.props.dispatchFetchMeal()
    }

    render() {
       const  id = parseInt(this.props.match.params.id)
        const meal = this.props.mealPlan.find(meal=> meal.id === id)
        return(
            <div> 
                <h1>Meals</h1>
                {meal&& 
                <ul>
                    {meal.meals.map(meal => 
                    <React.Fragment key={meal.id}>
                    <li>{meal.name}</li>
                    <li><img src = {meal.image} /></li>
                    <label>Nutrioius</label><li>{meal.description}</li>
                  
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
            dispatchFetchMeal: () => dispatch(fetchMeal())
     }
 }

 function mapStateToProps(state){
     return{
         mealPlan: state.mealPlanReducer.mealPlan
     }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(MealPlanShow)