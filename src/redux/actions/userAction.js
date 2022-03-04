export const loginUser = (userData) => {
    return (dispatch) => {
      return fetch("http://localhost:3000/users",{
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
          'Accept': "application/json"
        },
        body: JSON.stringify({user: userData})
      })
      .then(res => res.json())
      .then(user => {
          localStorage.setItem("userId", user.id)
          dispatch({
              type: "SET_USER" ,
              user: user
          })
      })
    }

}

export const checkLoggedIn = () => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/users/${localStorage.getItem("userId")}`,{
          method: 'GET',
          headers: {
            'Content-Type': "application/json",
            'Accept': "application/json"
          },
        })
        .then(res => {
            if (res.ok){
                return res.json()
                .then(user => {
                    localStorage.setItem("userId", user.id)
                    dispatch({
                        type: "SET_USER" ,
                        user: user
                    })
                })
            } else{
                return res.json()
                .then(json => {
                    return Promise.reject(json.error)
                })
            }
            
        })
        
      }
}

export const logoutUser = () => {
    return dispatch => {
        dispatch({type: "LOGOUT_USER"})
    }
}


