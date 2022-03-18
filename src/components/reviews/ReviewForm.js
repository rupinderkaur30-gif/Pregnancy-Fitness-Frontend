import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createReview} from '../../redux/actions/reviewAction'

class ReviewForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: "",
            exercise_id: props.exercise_id,
            user_id: localStorage.getItem("userId")
        };
    }

handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value,
    })
}

handleSubmit = e => {
  e.preventDefault();
  this.props.createReview(this.state)
  this.setState({
      content: ""
   
  })
}

render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                  Content
                </label>
                <input onChange={this.handleChange} type="text" name="content" value={this.state.content}></input><br/>
                <button className="button" type="submit">Add Review</button>
            </form>
        )
}
}

function mapStateToProps(state) {
return {
    user: state.userReducer
}
}


export default connect(mapStateToProps, {createReview})(ReviewForm)