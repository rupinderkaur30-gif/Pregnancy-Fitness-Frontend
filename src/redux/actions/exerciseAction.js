import { ADD_EXERCISE } from "./actiontypes"
import { DELETE_EXERCISE } from "./actiontypes"
import { SET_ALLEXERCISE } from "./actiontypes"

export const createExercise = (formData) => {
    return (dispatch) => {
        fetch("http://localhost:3000/exercises", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
              },
              body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => {
            dispatch({type: ADD_EXERCISE, payload: data})
        })
    }
}

export const deleteExercise = (exercise) => {
    return dispatch => {
        fetch(`http://localhost:3000/exercises/${exercise.id}`, {
          method: "DELETE"
        })
        .then(data => dispatch({type: DELETE_EXERCISE, payload: exercise}))
        .then(() => {
            window.location = "/allworkouts"
        })
      }
}

export const fetchExercise = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/exercises")
        .then(r => r.json())
        .then(data => {
            dispatch({type: SET_ALLEXERCISE, payload: data})
        })
    }
}