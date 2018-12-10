import * as interactionActionTypes from "../actiontypes/interactions";

export const addPiece = (rowIndex, columnIndex) => ({
  type: interactionActionTypes.ADD_PIECE,
  rowIndex,
  columnIndex
});

export const resetGame = () => ({ type: interactionActionTypes.RESET_GAME });

export const incTimer = () => ({ type: interactionActionTypes.INC_TIMER });
