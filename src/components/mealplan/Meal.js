import React from 'react';

class Meal extends React.Component {
    render(){
        return(
            <li><a href={`/meals/${this.props.id}`}>{this.props.name}</a></li>
        )
    }
}

export default Meal