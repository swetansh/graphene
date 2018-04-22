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
                    <div className="header-item">location</div>
                    <div className="header-item">our menu</div>
                    <div className="header-item">recipes</div>
                </div>
                <div className="header-right">
                    <div className="header-item">contact</div>
                    <div className="header-item">login</div>
                </div>
            </div>
        )
    }

}

export default Header;
