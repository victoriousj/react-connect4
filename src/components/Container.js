import React, { Component } from 'react';

import Column from './Column';

class Container extends Component {

    render () {
        const columns = [];
        for (let i = 0; i < 7; i++) { columns.push(<Column key={i} />) }

        return (
            <div className="container">
                <div className="container-top"></div>
                <div className="container-body">
                    {columns}
                </div>
                <div className="container-bottom">Connect4</div>
            </div>
        )
    }
} 

export default Container;