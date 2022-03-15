import {combineReducers} from "redux"
import allWorkoutReducer from "./allWorkoutReducer"
import userReducer from "./userReducer"
import mealPlanReducer from "./mealPlanReducer"
import fitnessPlannerReducer from "./fitnessPlannerReducer"
import exerciseReducer from "./exerciseReducer"


const rootReducer = combineReducers({
 userReducer: userReducer,
 allWorkoutReducer: allWorkoutReducer,
 mealPlanReducer: mealPlanReducer,
 fitnessPlannerReducer: fitnessPlannerReducer,
 exerciseReducer: exerciseReducer
})

export default rootReducer
