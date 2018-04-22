import React, {Component} from 'react';

class Location extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div style={{width:'100%'}} className="location-wrapper">
            <iframe width="100%" height="600" style={{width:'100%',height:'600px'}} src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=12%20Upper%20St.%20Martin%E2%80%99s%20Lane%20WC2H%209FB%2C%20London+(LOCATION)&ie=UTF8&t=&z=14&iwloc=B&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            <a href="https://www.mapsdirections.info/en/custom-google-maps/">Add Google Map to website</a> by <a href="https://www.mapsdirections.info/en/">Measure area on map</a>
            </iframe></div>
        )
    }

}

export default Location;
