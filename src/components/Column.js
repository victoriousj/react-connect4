import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Cell from './Cell';

class Column extends Component {
    static propTypes = {
        columnValues: PropTypes.array.isRequired,
        cellSelection: PropTypes.func.isRequired,

    };

    render() {
        let lowestFreeCell = ([...this.props.columnValues].findIndex(cellValue => cellValue !== 0) -1);
        lowestFreeCell = lowestFreeCell === -2 ? 5: lowestFreeCell;

        const cells = this.props.columnValues.map((cellValue, index) =>
            <Cell key={index} cellValue={cellValue} cellSelection={this.props.cellSelection} columnIndex={this.props.columnIndex} rowIndex={index} lowestFreeCell={lowestFreeCell === index ? true : false} /> 
        );

        return(
            <div className="column">
                {cells}
            </div>
        )
    }
}

export default Column;