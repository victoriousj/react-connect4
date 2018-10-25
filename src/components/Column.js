import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Cell from './Cell';

class Column extends Component {
    static propTypes = {
        columnIndex: PropTypes.number.isRequired,
        columnValues: PropTypes.array.isRequired,
        cellSelection: PropTypes.func.isRequired,

    };

    render() {
        let lowestFreeCell = ([...this.props.columnValues].findIndex((cellValue, i) => cellValue !== 0) -1);
        // Initial value with no selected cells will be -2
        lowestFreeCell = lowestFreeCell === -2 ? 5: lowestFreeCell;

        const cells = this.props.columnValues.map((cellValue, i) =>
            <Cell key={i} cellValue={cellValue} lowestFreeCell={lowestFreeCell === i ? true : false} /> 
        );

        return(
            <div className="column" onClick={() => this.props.cellSelection(lowestFreeCell, this.props.columnIndex)}>
                {cells}
            </div>
        )
    }
}

export default Column;