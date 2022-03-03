import Home from "./home/Home";
import AllWorkouts from "./allworkouts/AllWorkouts";
import Mealplan from "./mealplan/Mealplan";
import Fitnessplanner from "./fitnessplanner/Fitnessplanner"

export default function Pages({page}) {

    function renderPage(){
        switch (page) {
            case "Home":
                
                return <Home />;

            case "AllWorkouts":
            
                return <AllWorkouts />;

            case "Mealplan":
                
                return <Mealplan />;

            case "Fitnessplanner":
                
                return <Fitnessplanner/>;
        
            default:
                break;
        }
    }

    return <div>{renderPage()}</div>;
}