import * as GameInteractionActionTypes from "../actiontypes/gameInteractions";

export const cellSelection = (rowIndex, columnIndex) => ({
  type: GameInteractionActionTypes.CELL_SELECTION,
  rowIndex,
  columnIndex
});

export const resetGame = () => ({
  type: GameInteractionActionTypes.RESET_GAME
});

export const incTimer = () => ({ type: GameInteractionActionTypes.INC_TIMER });
