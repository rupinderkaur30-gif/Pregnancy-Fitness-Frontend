const initialState = {
    fitnessplanners: []
}

function fitnessPlannerReducer(state = initialState, action){
 switch (action.type){
   case "SET_FITNESSPLANNER":
       return {
           fitnessplanners: action.payload
         }
   default:
       return state;

    }

}

export default fitnessPlannerReducer;