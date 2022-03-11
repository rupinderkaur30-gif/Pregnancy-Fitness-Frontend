import {SET_ALLWORKOUT} from "../actions/actiontypes";

const initialState = {
    allWorkout: []
}

function allWorkoutReducer(state = initialState, action){
    let idx;
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

        case "DELETE_WORKOUT": {
            idx = state.allWorkout.findIndex(w => w.id === action.payload)
            return{
                allWorkout: [
                    ...state.allWorkout.slice(0, idx),
                    ...state.allWorkout.slice(idx + 1)
                ]

            }
        }
    
         default:
             return state;
        }

}

export default allWorkoutReducer;