import React, {Component} from 'react';
import Header from './header';
import TrackWidget from './trackWidget';

class Banner extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="banner-wrapper u-pos-rel u-text-center" style={{backgroundImage : 'url("assets/bg-pic.png")'}}>
                <Header />
                <div className="logo-wrapper">
                	<img src="assets/stamp.png"/>
                </div>
                <div className="request-info">
                	request info
                </div>
                <div className="main-header">
                	<div className="first-line">the best foodie</div>
                	<div className="second-line">experiance</div>
                	<div className="third-line">now in london</div>
                </div>
                <div className="left-widget">
                	<TrackWidget bars={this.props.sectionCount} activeBar={this.props.activeSection}/>
                </div>
            </div>
        )
    }

}

export default Banner;
