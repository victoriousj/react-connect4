import * as GameInteractionActionTypes from '../actiontypes/gameInteractions';

export const cellSelection = (rowIndex, columnIndex) => ({ type: GameInteractionActionTypes.CELL_SELECTION, rowIndex, columnIndex });