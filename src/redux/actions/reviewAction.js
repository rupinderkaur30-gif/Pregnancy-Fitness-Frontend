import {ADD_REVIEW} from './actiontypes'

export const createReview = (review) => {
    return (dispatch) => {
        fetch("http://localhost:3000/reviews", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
              },
              body: JSON.stringify(review)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            dispatch({type: ADD_REVIEW, payload: data})
        })
    }
}