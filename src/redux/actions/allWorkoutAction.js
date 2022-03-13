import { ADD_WORKOUT, SET_ALLWORKOUT, DELETE_WORKOUT } from "./actiontypes"

export const fetchWorkout = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/workouts")
        .then(r => r.json())
        .then(data => {
            dispatch({type: SET_ALLWORKOUT, payload: data})
        })
    }
}

export const createWorkout = (formData) => {
    return (dispatch) => {
        fetch("http://localhost:3000/workouts", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
              },
              body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => {
            dispatch({type: ADD_WORKOUT, payload: data})
        })
    }
}

export const deleteWorkout = (id) => {
    return dispatch => {
        fetch(`http://localhost:3000/workouts/${id}`, {
          method: "DELETE"
        })
        .then(data => dispatch({type: DELETE_WORKOUT, payload: id}))
      }
}

