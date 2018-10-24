import React, { Component } from 'react';

import Cell from './Cell';

class Column extends Component {

    render() {
        let i = 0;
        const cells = [];
        cells.push(<Cell key={++i} />);
        cells.push(<Cell key={++i} />);
        cells.push(<Cell key={++i} />);
        cells.push(<Cell key={++i} />);
        cells.push(<Cell key={++i} />);
        cells.push(<Cell key={++i} />);
        
        return(
            <div className="column">
                {cells}
            </div>
        )
    }
}

export default Column;