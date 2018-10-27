import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import "./App.css";
import Column from './components/Column';
import * as Helpers from './helpers/helpers';
import Container from './components/Container';
import * as GameInteractionCreators from '../actions/gameInteractions';


class App extends Component {
    static propTypes = {
        gameBoard: PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);
        
        const { dispatch } = props;
        this.dispatch = dispatch;

        this.endGame = bindActionCreators(GameInteractionCreators.endGame, dispatch);
        this.cellSelection = bindActionCreators(GameInteractionCreators.cellSelection, dispatch);
    };

    componentDidUpdate() {
        const winningPieces = Helpers.checkGameBoard(this.props.gameBoard);
        if (winningPieces && this.props.isPlaying) {
            this.endGame();
            this.dispatch(GameInteractionCreators.registerGameWinningPeices(winningPieces.cells));
        }
    }
    
    render() { 
        let columns = this.props.gameBoard.map((columnValues, index) =>
            <Column 
                key={index} 
                columnIndex={index} 
                columnValues={columnValues} 
                isPlaying={this.props.isPlaying} 
                cellSelection={this.cellSelection} 
                currentPlayer={this.props.currentPlayer} 
                winningPieces={this.props.winningPieces}/>
        );

        
        return (
            <div className = "App">
                <Container Columns={columns} />
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        gameBoard: state.gameBoard,
        isPlaying: state.isPlaying,
        currentPlayer: state.currentPlayer,
        winningPieces: state.winningPieces,
    }
);

export default connect(mapStateToProps)(App);