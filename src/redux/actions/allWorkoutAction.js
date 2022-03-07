import { SET_ALLWORKOUT } from "./actiontypes"

export const fetchWorkout = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/workouts")
        .then(r => r.json())
        .then(data => {
            dispatch({type: SET_ALLWORKOUT, payload: data})
        })
    }
}