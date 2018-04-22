import React, {Component} from 'react';

class ChefsReciepeImageCard extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="recipe-card-wrapper u-pos-rel" style={{marginBottom:'0px'}}>
                <img className="insta-logo" src="assets/chef-stamp.png" />
                <img className="arrow-logo" src="assets/go-btn.png" />
                <div className="insta-image" style={{background: `url('${this.props.imageUrl}')`}}></div>
            </div>
        )
    }

}

export default ChefsReciepeImageCard;
