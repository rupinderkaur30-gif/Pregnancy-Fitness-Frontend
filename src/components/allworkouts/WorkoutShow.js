import React, { Component } from 'react'
import { fetchWorkout } from '../../redux/actions/allWorkoutAction'
import { connect } from 'react-redux'
import ExerciseForm from '../exercises/ExerciseForm'
import {deleteExercise } from '../../redux/actions/exerciseAction'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class WorkoutShow extends Component {

    componentDidMount(){
        this.props.dispatchFetchWorkout()
    }

    render() {
       const  id = parseInt(this.props.match.params.id)
        const workout = this.props.allworkout.find(workout => workout.id === id)
        return(
            <div> 
                <h1>Exercises</h1>
               {workout&& <ExerciseForm workout_id={workout.id}/>}
               <Container>
                 {workout && 
        <Row>
                  {workout.exercises.map(exercise => 
                  <Col key={exercise.id} xs={4}>
                      <Card  >
                        <iframe src={exercise.video_url}></iframe>
                      <Card.Body>

                          <Card.Title><a href={`/exercises/${exercise.id}`}>{exercise.name}</a></Card.Title>
                          </Card.Body>
                          {/* <Card.Text>
                          {exercise.description}
                          </Card.Text>
                          <Card.Title>
                          {exercise.minute}
                          </Card.Title>
                          <Card.Title>{exercise.equipment}</Card.Title>
                          <Card.Title>{exercise.targetareas}</Card.Title>
                      </Card.Body>
                      <button class="button" onClick={() => this.props.dispatchDeleteExercise(exercise)}>Delete Exercise</button> */}
                      </Card>
                      </Col>

                    
                  )}
                  </Row>  }    </Container>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
            dispatchFetchWorkout: () => dispatch(fetchWorkout()),
            dispatchDeleteExercise: (exercise) =>  dispatch(deleteExercise(exercise))
     }
 }

 function mapStateToProps(state){
     return{
         allworkout: state.allWorkoutReducer.allWorkout
     }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(WorkoutShow)