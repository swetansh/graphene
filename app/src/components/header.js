import React, {Component} from 'react';

class Header extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="header u-pos-fixed">
                <div className="header-left">
                    <div className="header-item logo">LOGO</div>
                    <div className="header-item" data-section="0">about</div>
                    <div className="header-item" data-section="1">community</div>
                    <div className="header-item" data-section="2">location</div>
                    <div className="header-item" data-section="3">our menu</div>
                    <div className="header-item" data-section="4">recipes</div>
                </div>
                <div className="header-right">
                    <div className="header-item" data-section="5">contact</div>
                    <div className="header-item">login</div>
                </div>
            </div>
        )
    }

}

export default Header;
