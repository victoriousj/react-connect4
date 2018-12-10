import * as actionTypes from '../actiontypes/interactions';

export const resetGame = () => ({ type: actionTypes.RESET_GAME });

export const incTimer = () => ({ type: actionTypes.INC_TIMER });

export const addPiece = (rowIndex, columnIndex) => ({
  type: actionTypes.ADD_PIECE,
  rowIndex,
  columnIndex
});
