import React, { Component } from 'react'
import { fetchExercise } from '../../redux/actions/exerciseAction'
import { connect } from 'react-redux'
import {deleteExercise } from '../../redux/actions/exerciseAction'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class ExerciseShow extends Component {

    componentDidMount(){
        this.props.dispatchFetchExercise()
    }

    render() {
       const  id = parseInt(this.props.match.params.id)
       console.log(id)
        const exercise = this.props.allExercise.find(exercise => exercise.id === id)

        if (!exercise) {
            return null
        }
        return(
            <div> 
    
                      <Card  >
                        <iframe src={exercise.video_url}></iframe>
                      <Card.Body>
                          <Card.Title>{exercise.name}</Card.Title>
                          <Card.Text>
                          {exercise.description}
                          </Card.Text>
                          <Card.Title>
                          {exercise.minute}
                          </Card.Title>
                          <Card.Title>{exercise.equipment}</Card.Title>
                          <Card.Title>{exercise.targetareas}</Card.Title>
                      </Card.Body>
                      <button class="button" onClick={() => this.props.dispatchDeleteExercise(exercise)}>Delete Exercise</button>
                      </Card>
                      
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
            dispatchFetchExercise: () => dispatch(fetchExercise()),
            dispatchDeleteExercise: (exercise) =>  dispatch(deleteExercise(exercise))
     }
 }

 function mapStateToProps(state){
     return{
         allExercise: state.exerciseReducer.allExercise
     }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(ExerciseShow)