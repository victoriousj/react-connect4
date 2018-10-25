import React, {Component } from 'react';
import PropTypes from 'prop-types';

class Cell extends Component {
    static propTypes = {
        rowIndex: PropTypes.number.isRequired,
        cellValue: PropTypes.number.isRequired,
        columnIndex: PropTypes.number.isRequired,
        cellSelection: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="cell" onClick={() => this.props.cellSelection(this.props.rowIndex, this.props.columnIndex)}>
                {
                    this.props.cellValue !== 0
                    ? (<div className={`player-piece ${this.props.cellValue === 1 ? `red` : `black`}`}></div>)
                    : (null)
                }
            </div>
        );
    }
}

export default Cell;