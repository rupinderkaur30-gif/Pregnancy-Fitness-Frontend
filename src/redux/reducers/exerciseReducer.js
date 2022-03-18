import {SET_ALLEXERCISE} from "../actions/actiontypes";

const initialState = {
    allExercise: []
}

function exerciseReducer(state = initialState, action){
 switch (action.type){
   case "SET_ALLEXERCISE":
       return {
           allExercise: action.payload
         }

         case "ADD_REVIEW":
     
            return{
        allExercise: [...state.allExercise.map(exercise => exercise.id === action.payload.exercise_id ?
                {...exercise, reviews: [...exercise.reviews, action.payload]} : exercise)]
            }

         default:
             return state;
        }
    }

export default exerciseReducer;