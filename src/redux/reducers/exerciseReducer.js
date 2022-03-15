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

         default:
             return state;
        }
    }

export default exerciseReducer;