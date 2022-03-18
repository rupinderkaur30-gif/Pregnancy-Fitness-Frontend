import React, { Component } from 'react'
import { fetchMeal } from '../../redux/actions/mealPlanAction'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import MealForm from '../meals/MealForm'
import {deleteMeal} from '../../redux/actions/mealAction'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


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
                <MealForm mealplan_id={id}/>
                <Container>
                {meal&& 
                <Row>
                    {meal.meals.map(meal => 
                    <Col key={meal.id} xs={4}>
                        <Card style={{ width: '21rem' }}>
                        <Card.Img variant="top" src={meal.image} />
                        <Card.Body>
                            <Card.Title>{meal.name}</Card.Title>
                            <Card.Text>
                            {meal.ingredients}
                            </Card.Text>
                            <Card.Text>
                            {meal.instructions}
                            </Card.Text>
                            <Card.Title>{meal.prep_time}</Card.Title>
                        </Card.Body>
                        <button onClick={() => this.props.dispatchDeleteMeal(meal)}>Delete Meal</button>
                        </Card>
                  
                    </Col>
                      )}
                </Row>
    }           
             </Container>
            </div>
            
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
            dispatchFetchMeal: () => dispatch(fetchMeal()),
            dispatchDeleteMeal: (meal) => dispatch(deleteMeal(meal))
     }
 }

 function mapStateToProps(state){
     
     return{
         mealPlan: state.mealPlanReducer.mealPlan
     }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(MealPlanShow)