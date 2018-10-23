import React, { Component } from 'react';

import Cell from './Cell';

class Column extends Component {

    render() {
        const cells = [];
        for (let i = 0; i < 6; i++) { cells.push(<Cell peice={i % 2 === 0} key={i} />) }

        return(
            <div className="column">
                {cells}
            </div>
        )
    }
}

export default Column;