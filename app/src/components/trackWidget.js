import React, {Component} from 'react';

class TrackWidget extends Component {

    constructor() {
        super();
    }

    getBarList(count, active) {
        let index = 0;
        let retArray = [];
        for(index=0; index<count; index++){
            if(index == active){
                retArray.push(<span className="bar active">{index + 1}</span>)
            }
            else{
                retArray.push(<span className="bar"></span>)                
            }
        }
        return retArray;
    }

    render() {
        return (
            <div className="track-widget">
                {this.getBarList(this.props.bars, this.props.activeBar)}
            </div>
        )
    }

}

export default TrackWidget;
