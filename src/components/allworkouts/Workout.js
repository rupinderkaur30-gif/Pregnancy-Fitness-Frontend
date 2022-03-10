import React from 'react';

class Workout extends React.Component {
    render(){
        return(
            <li><a href={`/workouts/${this.props.id}`}>{this.props.name}</a></li>
        )
    }
}

export default  Workout