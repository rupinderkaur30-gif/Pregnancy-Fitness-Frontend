import React from 'react';

class Fitness extends React.Component {
    render(){
        return(
            <div className="bt">
            <li><a href={`/fitnessplanners/${this.props.id}`}>{this.props.name}</a></li>
        </div>
        )
    }
}

export default Fitness