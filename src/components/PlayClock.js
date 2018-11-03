import React from 'react';

class PlayClock extends React.Component {

    render() {

        return (
            <div className="playclock">
                <h2>Player {this.props.player} Time:</h2>
                <div className="playclock-time"> {this.props.time} </div>
            </div>
        );
    };
}

export default PlayClock;