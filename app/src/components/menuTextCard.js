import React, {Component} from 'react';

class MenuTextCard extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className={`menu-card-wrapper ${this.props.color}`}>
                <div className="card-title">{this.props.title}</div>
                <div className="card-text">{this.props.text}</div>
            </div>
        )
    }

}

export default MenuTextCard;
