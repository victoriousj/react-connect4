import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";

import Column from "./components/Column";
import Container from "./components/Container";
import PlayClock from "./components/PlayClock";
import MessageOverlay from "./components/MessageOverlay";

import * as Helpers from "./helpers/helpers";
import * as GameInteractionCreators from "./actions/gameInteractions";

class App extends React.Component {
  static propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    gameBoard: PropTypes.array.isRequired,
    winningPieces: PropTypes.array.isRequired,
    currentPlayer: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.dispatch = dispatch;

    this.endGame = bindActionCreators(
      GameInteractionCreators.endGame,
      dispatch
    );
    this.incTimer = bindActionCreators(
      GameInteractionCreators.incTimer,
      dispatch
    );
    this.resetGame = bindActionCreators(
      GameInteractionCreators.resetGame,
      dispatch
    );
    this.cellSelection = bindActionCreators(
      GameInteractionCreators.cellSelection,
      dispatch
    );
  }

  componentDidMount() {
    setInterval(this.incTimer, 1000);
  }

  componentDidUpdate() {
    if (this.props.isPlaying) {
      let winningPieces = Helpers.checkGameBoard(this.props.gameBoard);
      if (winningPieces) {
        console.log(winningPieces);
        this.endGame();
        this.dispatch(
          GameInteractionCreators.registerGameWinningPeices(winningPieces)
        );
      }
    }
  }

  render() {
    let columns = this.props.gameBoard.map((columnValues, index) => (
      <Column
        key={index}
        columnIndex={index}
        columnValues={columnValues}
        cellSelection={this.cellSelection}
        isPlaying={this.props.isPlaying}
        currentPlayer={this.props.currentPlayer}
        winningPieces={this.props.winningPieces}
      />
    ));

    return (
      <div className="App">
        <MessageOverlay
          winningPlayer={this.props.currentPlayer === 1 ? 2 : 1}
          showOverlay={this.props.showOverlay}
          resetGame={this.resetGame}
        />
        <div className="playclocks">
          <PlayClock player={1} time={this.props.playerOneTime} />
          <PlayClock player={2} time={this.props.playerTwoTime} />
        </div>
        <Container Columns={columns} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gameBoard: state.gameBoard,
  isPlaying: state.isPlaying,
  showOverlay: state.showOverlay,
  currentPlayer: state.currentPlayer,
  winningPieces: state.winningPieces,
  playerOneTime: state.playerOneTime,
  playerTwoTime: state.playerTwoTime
});

export default connect(mapStateToProps)(App);
