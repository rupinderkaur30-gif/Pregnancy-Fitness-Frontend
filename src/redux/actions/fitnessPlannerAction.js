import { SET_FITNESSPLANNER } from "./actiontypes"

export const fetchFitnessPlanner = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/fitnessplanners")
        .then(r => r.json())
        .then(data => {
            dispatch({type: SET_FITNESSPLANNER, payload: data})
        })
    }
}