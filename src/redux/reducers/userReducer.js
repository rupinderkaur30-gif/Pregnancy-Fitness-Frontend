const userReducer = (state = {
    user: null, loggedIn: false
}, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                user: action.user,
                loggedIn: true
            }

        case "LOGOUT_USER":
            localStorage.removeItem("userId")
            return{
                user: null,
                loggedIn: false
            }
        default: 
           return state

          
    }
}



export default userReducer