import { SET_MEALPLAN } from "../actions/actiontypes";
import { ADD_MEAL } from "../actions/actiontypes";
import { DELETE_MEAL } from "../actions/actiontypes";

const initialState = {
    mealPlan: []
}

function mealPlanReducer(state = initialState, action) {
    switch(action.type){
        case SET_MEALPLAN:
            return{
                mealPlan: action.payload

            }


        case ADD_MEAL:
            return{
                mealPlan: [...state.mealPlan.map(mealPlan => mealPlan.id === action.payload.mealplan_id ?
                    {...mealPlan, meals: [...mealPlan.meals, action.payload]} : mealPlan)]
            }

        
        case DELETE_MEAL:
            return{
                mealPlan: [...state.mealPlan.map(mealPlan => mealPlan.id === action.payload.mealplan_id ?
                    {...mealPlan, meals: [...mealPlan.meals.filter(m => m.id != action.payload.id)]} : mealPlan)]
               
            }
            default:
                return state;
    }
    

}

export default mealPlanReducer