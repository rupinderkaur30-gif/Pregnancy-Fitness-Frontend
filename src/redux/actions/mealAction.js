import { ADD_MEAL } from './actiontypes'

export const createMeal= (formData) => {
    return (dispatch) => {
        fetch("http://localhost:3000/meals", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
              },
              body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => {
            dispatch({type: ADD_MEAL, payload: data})
        })
    }
}