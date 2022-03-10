import { SET_MEALPLAN } from "./actiontypes";

export const fetchMeal = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/mealplans")
        .then(r => r.json())
        .then(data => dispatch({type: SET_MEALPLAN, payload: data}))
    }
}

