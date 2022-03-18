import React from 'react';

class Meal extends React.Component {
    render(){
        return(
            <div className="bt">
            <li><a href={`/meals/${this.props.id}`}>{this.props.name}</a></li>
            </div>
        )
    }
}

export default Meal