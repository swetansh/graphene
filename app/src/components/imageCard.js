import React, {Component} from 'react';

class ImageCard extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="card-wrapper u-pos-rel">
                <img className="insta-logo" src="assets/instagram-btn.png" />
                <div className="insta-image" style={{background: `url('${this.props.imageUrl}')`}}></div>
            </div>
        )
    }

}

export default ImageCard;
