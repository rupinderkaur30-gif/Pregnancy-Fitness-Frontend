import { SET_MEALPLAN } from "../actions/actiontypes";

const initialState = {
    mealPlan: []
}

function mealPlanReducer(state = initialState, action) {
    switch(action.type){
        case SET_MEALPLAN:
            return{
                mealPlan: action.mealPlan

            }
            default:
                return state;
    }

}

export default mealPlanReducer