import {combineReducers} from "redux"
import allWorkoutReducer from "./allWorkoutReducer"
import userReducer from "./userReducer"
import mealPlanReducer from "./mealPlanReducer"


const rootReducer = combineReducers({
 userReducer: userReducer,
 allWorkoutReducer: allWorkoutReducer,
 mealPlanReducer: mealPlanReducer
})

export default rootReducer