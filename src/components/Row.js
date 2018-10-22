import React, { Component } from 'react';

import Cell from './Cell';

class Row extends Component {

    render() {
        const cells = [];
        for (let i = 0; i < 7; i++) {
            cells.push(<Cell key={i} />);
        }

        return(
            <div className="row">
                {cells}
            </div>
        )
    }
}

export default Row;