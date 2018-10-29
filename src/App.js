import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import Column from './components/Column';
import * as Helpers from './helpers/helpers';
import Container from './components/Container';
import * as GameInteractionCreators from '../actions/gameInteractions';


class App extends React.Component {
    static propTypes = {
        isPlaying: PropTypes.bool.isRequired,
        gameBoard: PropTypes.array.isRequired,
        winningPieces: PropTypes.array.isRequired,
        currentPlayer: PropTypes.number.isRequired,
    };

    constructor(props) {
        super(props);
        
        const { dispatch } = props;
        this.dispatch = dispatch;

        this.endGame = bindActionCreators(GameInteractionCreators.endGame, dispatch);
        this.cellSelection = bindActionCreators(GameInteractionCreators.cellSelection, dispatch);
    };

    componentDidUpdate() {
        if (this.props.isPlaying) {
            const winningPieces = Helpers.checkGameBoard(this.props.gameBoard);
            if (winningPieces) {
                this.endGame();
                this.dispatch(GameInteractionCreators.registerGameWinningPeices(winningPieces));
            }
        }
    }
    
    render() { 
        let columns = this.props.gameBoard.map((columnValues, index) =>
            <Column 
                key=            {index} 
                columnIndex=    {index} 
                columnValues=   {columnValues} 
                cellSelection=  {this.cellSelection} 
                isPlaying=      {this.props.isPlaying} 
                currentPlayer=  {this.props.currentPlayer} 
                winningPieces=  {this.props.winningPieces}/>
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