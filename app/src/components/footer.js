import React, {Component} from 'react';

class Footer extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="footer">
                <div className="left-section">
                    <div className="section-wrapper">
                        <div className="footer-section">
                            <div className="section-header">Section 1</div>
                            <div className="section-link">Subsection</div>
                            <div className="section-link">Subsection</div>
                            <div className="section-link">Subsection</div>
                            <div className="section-link">Subsection</div>
                            <div className="section-link">Subsection</div>
                        </div>
                        <div className="footer-section">
                            <div className="section-header">Section 2</div>
                            <div className="section-link">Subsection</div>
                            <div className="section-link">Subsection</div>
                            <div className="section-link">Subsection</div>
                            <div className="section-link">Subsection</div>
                            <div className="section-link">Subsection</div>
                        </div>
                        <div className="footer-section">
                            <div className="section-header">Section 3</div>
                            <div className="section-link">Subsection</div>
                            <div className="section-link">Subsection</div>
                            <div className="section-link">Subsection</div>
                            <div className="section-link">Subsection</div>
                            <div className="section-link">Subsection</div>
                        </div>
                        <div className="footer-section">
                            <div className="section-header">Section 4</div>
                            <div className="section-link">Subsection</div>
                            <div className="section-link">Subsection</div>
                            <div className="section-link">Subsection</div>
                            <div className="section-link">Subsection</div>
                            <div className="section-link">Subsection</div>
                        </div>
                        <div className="footer-section">
                            <div className="section-header">Section 5</div>
                            <div className="section-link">Subsection</div>
                            <div className="section-link">Subsection</div>
                            <div className="section-link">Subsection</div>
                            <div className="section-link">Subsection</div>
                            <div className="section-link">Subsection</div>
                        </div>
                    </div>
                    <div className="section-copyright">2017. Company. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</div>
                </div>
                <div className="right-section">
                    <div className="top-content">
                        <div className="line-1">this is the</div>
                        <div className="line-2">LOGO</div>
                    </div>
                    <img src="assets/social.png" />
                </div>
            </div>
        )
    }

}

export default Footer;
