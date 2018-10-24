import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import Column from './Column';

class Container extends Component {
    static propTypes = {
        Columns: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
    }

    render () {

        return (
            <div className="container">
                <div className="container-top"></div>
                <div className="container-body">
                    {this.props.Columns}
                </div>
                <div className="container-bottom">Connect4</div>
            </div>
        )
    }
} 

export default Container;