import PropTypes from 'prop-types';
import React from 'react';


export default class Container extends React.Component {
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
