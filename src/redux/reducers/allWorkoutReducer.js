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
        
    case "ADD_WORKOUT":
        {
         return{
             allWorkout: [...state.allWorkout, action.payload]
         }
        }

    case "ADD_EXERCISE": {

        return{
            allWorkout: [...state.allWorkout.map(
                workout => workout.id === action.payload.workout_id ?
                {...workout, exercises: [...workout.exercises, action.payload]} : workout
            )]
        }
    }

         default:
             return state;
        }

}

export default allWorkoutReducer;