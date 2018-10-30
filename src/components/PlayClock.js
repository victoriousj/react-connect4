import React from 'react';

class PlayClock extends React.Component {

    componentDidMount() {
        this.interval = setInterval(this.onTick, 1000);
    }

    onTick = () => {
        if (this.props.isPlaying && this.props.currentPlayer === this.props.player) {
            this.props.incTimer();
        }
    }

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