import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import PropTypes from "prop-types";
import React from "react";

export default class Cell extends React.Component {
  static propTypes = {
    cellValue: PropTypes.number.isRequired,
    winningPiece: PropTypes.bool.isRequired,
    lowestFreeCell: PropTypes.bool.isRequired,
    currentPlayer: PropTypes.number.isRequired
  };

  render() {
    const playerPiece =
      this.props.cellValue !== 0 ? (
        <div
          className={`peice-overlay player-piece ${
            this.props.cellValue === 1 ? `red` : `black`
          } ${this.props.winningPiece ? "winning-piece" : ""}`}
        />
      ) : null;

    return (
      <div className="cell-parent">
        <div
          className={`cell ${this.props.lowestFreeCell ? "glow" : ""} ${
            this.props.currentPlayer === 1 ? `red` : `black`
          }`}
        />
        <ReactCSSTransitionGroup
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {playerPiece}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
