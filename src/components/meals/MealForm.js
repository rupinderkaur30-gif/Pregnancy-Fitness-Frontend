import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createMeal} from '../../redux/actions/mealAction'


class MealForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            image: "",
            ingredients: "",
            instructions: "",
            prep_time: "",
            mealplan_id: props.mealplan_id,
            user_id: props.user.user?.id
        };
    }

handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value,
    })
}

handleSubmit = e => {
  e.preventDefault();
  this.props.createMeal(this.state)
  this.setState({
    name: "",
    image: "",
    ingredients: "",
    instructions: "",
    prep_time: "",
   
  })
}

render(){

        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                </label>
                <input onChange={this.handleChange} type="text" name="name" value={this.state.name}></input><br/>
                <label>Image</label><input onChange={this.handleChange} type="text" name="image" value={this.state.image}></input><br/>    
                <label>Ingredients</label><input onChange={this.handleChange} type="text" name="ingredients" value={this.state.ingredients}></input><br/>
                <label>Instructions</label><input onChange={this.handleChange} type="text" name="instructions" value={this.state.instructions}></input><br/>
                <label>Prep_time</label><input onChange={this.handleChange} type="text" name="prep_time" value={this.state.prep_time}></input><br/>
                <button type="submit">Add Meal</button>
            </form>
        )
}
}

function mapStateToProps(state) {
return {
    user: state.userReducer
}
}


export default connect(mapStateToProps, {createMeal})(MealForm)