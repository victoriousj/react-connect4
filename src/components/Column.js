import PropTypes from 'prop-types';
import React from 'react';

import Cell from './Cell';

export default class Column extends React.Component {
    static propTypes = {
        isPlaying: PropTypes.bool.isRequired,
        columnIndex: PropTypes.number.isRequired,
        columnValues: PropTypes.array.isRequired,
        cellSelection: PropTypes.func.isRequired,
        winningPieces: PropTypes.array.isRequired,
        currentPlayer: PropTypes.number.isRequired,
    };

    render() {
        let lowestFreeCell = ([...this.props.columnValues].findIndex(cellValue => cellValue !== 0) -1);
        // Initial value with no selected cells will be -2
        lowestFreeCell = lowestFreeCell === -2 ? 5: lowestFreeCell;
        
        let hasWinningPieces = false;
        if (this.props.winningPieces.length > 0) {
            hasWinningPieces = this.props.winningPieces.some(winningPeice => winningPeice.column === this.props.columnIndex);
        }

        const cells = this.props.columnValues.map((cellValue, i) =>
            <Cell 
            key={i} 
            cellIndex={i}
            cellValue={cellValue} 
            columnIndex={this.props.columnIndex}
            currentPlayer={this.props.currentPlayer} 
            lowestFreeCell={this.props.isPlaying && lowestFreeCell === i ? true : false} 
            winningPiece={
                hasWinningPieces 
                    ? this.props.winningPieces.some(cell => 
                        cell.row === i && 
                        cell.column === this.props.columnIndex) 
                            ? true
                            : false
                    : false} 
            /> 
        );

        return (
            <div className="column" onClick={() => this.props.cellSelection(lowestFreeCell, this.props.columnIndex)}>
                {cells}
            </div>
        )
    }
}
