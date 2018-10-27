import React, {Component } from 'react';
import PropTypes from 'prop-types';

class Cell extends Component {
    static propTypes = {
        cellValue: PropTypes.number.isRequired,
        lowestFreeCell: PropTypes.bool.isRequired,
    }

    constructor(props) {
        super(props);
    }
    
    render() {
        const playerPiece = this.props.cellValue !== 0
            ? (<div className={`player-piece ${this.props.cellValue === 1 ? `red` : `black`}`}></div>)
            : (null);

        return (
            <div className="cell-parent">
                <div className={`cell ${this.props.lowestFreeCell ? 'glow' : ''} ${this.props.currentPlayer === 1 ? `red` : `black`}`} >
                </div>
                {playerPiece}
            </div>
        );
    }
}

export default Cell;