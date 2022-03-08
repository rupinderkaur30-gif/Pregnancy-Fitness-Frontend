import React from 'react';

class Fitness extends React.Component {
    render(){
        return(
            <li><a href={`/fitnessplanners/${this.props.id}`}>{this.props.name}</a></li>
        )
    }
}

export default Fitness