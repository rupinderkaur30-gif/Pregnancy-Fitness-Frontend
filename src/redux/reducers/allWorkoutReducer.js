import {SET_ALLWORKOUT} from "../actions/actiontypes";

const initialState = {
    allWorkout: []
}

function allWorkoutReducer(state = initialState, action){
 switch (action.type){
   case "SET_ALLWORKOUT":
       return {
           allWorkout: action.payload
         }
   default:
       return state;

    }

}

export default allWorkoutReducer;