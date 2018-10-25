import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Cell from './Cell';

class Column extends Component {
    static propTypes = {
        columnValues: PropTypes.array.isRequired,
        cellSelection: PropTypes.func.isRequired,

    };

    render() {
        const cells = this.props.columnValues.map((cellValue, index) =>
            <Cell key={index} cellValue={cellValue} cellSelection={this.props.cellSelection} columnIndex={this.props.columnIndex} rowIndex={index} /> 
        );
        
        return(
            <div className="column">
                {cells}
            </div>
        )
    }
}

export default Column;