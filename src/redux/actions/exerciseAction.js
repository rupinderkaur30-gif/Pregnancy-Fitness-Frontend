import { ADD_EXERCISE } from "./actiontypes"

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