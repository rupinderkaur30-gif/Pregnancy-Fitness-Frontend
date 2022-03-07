import { SET_MEALPLAN } from "./actiontypes";

export const fetchWorkout = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/mealplan")
        .then(r => r.json)
        .then(data => dispatch({type: SET_MEALPLAN, payload: data}))
    }
}