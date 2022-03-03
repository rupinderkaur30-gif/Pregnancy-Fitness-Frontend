export default function Navbar({setPage}) {
    return <div>
        <button onClick={e => setPage("Home")}>Home</button>
        <button onClick={e => setPage("AllWorkouts")}>AllWorkouts</button>
        <button onClick={e => setPage("Mealplan")} >MealPlan</button>
        <button onClick={e => setPage("Fitnessplanner")}>FitnessPlanner</button>
    </div>;
}