import { SET_MEALPLAN } from "../actions/actiontypes";
import { ADD_MEAL } from "../actions/actiontypes";

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
                mealPlan: [...state.mealPlan.map(meal => meal.id === action.payload.meal_id ?
                    {...meal, meals: [...meal.meals, action.payload]} : meal)]
            }
            default:
                return state;
    }
    

}

export default mealPlanReducer