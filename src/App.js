import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";

import Column from "./components/Column";
import Container from "./components/Container";
import PlayClock from "./components/PlayClock";
import MessageOverlay from "./components/MessageOverlay";

import * as interactionCreators from "./actions/interactions";

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

    this.incTimer = bindActionCreators(interactionCreators.incTimer, dispatch);

    this.resetGame = bindActionCreators(
      interactionCreators.resetGame,
      dispatch
    );

    this.addPiece = bindActionCreators(interactionCreators.addPiece, dispatch);
  }

  componentDidMount() {
    setInterval(this.incTimer, 1000);
  }

  render() {
    const { props } = this;

    let columns = props.gameBoard.map((columnValues, index) => (
      <Column
        key={index}
        columnIndex={index}
        addPiece={this.addPiece}
        columnValues={columnValues}
        isPlaying={props.isPlaying}
        currentPlayer={props.currentPlayer}
        winningPieces={props.winningPieces}
      />
    ));

    return (
      <div className="App">
        <MessageOverlay
          resetGame={this.resetGame}
          showOverlay={props.showOverlay}
          winningPlayer={props.currentPlayer === 1 ? 2 : 1}
        />
        <div className="playclocks">
          <PlayClock player={1} time={props.playerOneTime} />
          <PlayClock player={2} time={props.playerTwoTime} />
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
