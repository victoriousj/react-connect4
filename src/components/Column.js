import PropTypes from "prop-types";
import React from "react";

import Cell from "./Cell";

const Column = props => {
  const {
    isPlaying,
    columnIndex,
    columnValues,
    winningPieces,
    currentPlayer,
    cellSelection
  } = props;

  let lowestFreeCell =
    [...columnValues].findIndex(cellValue => cellValue !== 0) - 1;
  // Initial value with no selected cells will be -2
  lowestFreeCell = lowestFreeCell === -2 ? 5 : lowestFreeCell;

  const hasWinningPieces =
    winningPieces.length > 0 &&
    winningPieces.some(winningPeice => winningPeice.column === columnIndex);

  const cells = columnValues.map((cellValue, i) => {
    const isLowestFreeCell = isPlaying && i === lowestFreeCell;
    const isWinningPiece =
      hasWinningPieces &&
      winningPieces.some(x => x.row === i && x.column === columnIndex);

    return (
      <Cell
        key={i}
        cellIndex={i}
        cellValue={cellValue}
        columnIndex={columnIndex}
        winningPiece={isWinningPiece}
        currentPlayer={currentPlayer}
        lowestFreeCell={isLowestFreeCell}
      />
    );
  });

  return (
    <div
      className="column"
      onClick={() => cellSelection(lowestFreeCell, columnIndex)}
    >
      {cells}
    </div>
  );
};

Column.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  columnIndex: PropTypes.number.isRequired,
  columnValues: PropTypes.array.isRequired,
  cellSelection: PropTypes.func.isRequired,
  winningPieces: PropTypes.array.isRequired,
  currentPlayer: PropTypes.number.isRequired
};

export default Column;
