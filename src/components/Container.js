import React, { Component } from 'react';

import Row from './Row';

class Container extends Component {

    render () {
        const rows = [];
        for (let i = 0; i < 6; i++) { rows.push(<Row key={i} />) }

        return (
            <div className="container">
                <div className="container-top"></div>
                <div>
                    {rows}
                </div>
                <div className="container-bottom">Connect4</div>
            </div>
        )
    }
} 

export default Container;