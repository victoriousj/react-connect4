import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import PropTypes from "prop-types";
import React from "react";

const Cell = props => {
  const { cellValue, winningPiece, lowestFreeCell, currentPlayer } = props;
  const playerPiece =
    cellValue !== 0 ? (
      <div
        className={`peice-overlay player-piece ${
          cellValue === 1 ? `red` : `black`
        } ${winningPiece ? "winning-piece" : ""}`}
      />
    ) : null;

  return (
    <div className="cell-parent">
      <div
        className={`cell ${lowestFreeCell ? "glow" : ""} ${
          currentPlayer === 1 ? `red` : `black`
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
};

Cell.propTypes = {
  cellValue: PropTypes.number.isRequired,
  winningPiece: PropTypes.bool.isRequired,
  lowestFreeCell: PropTypes.bool.isRequired,
  currentPlayer: PropTypes.number.isRequired
};

export default Cell;
