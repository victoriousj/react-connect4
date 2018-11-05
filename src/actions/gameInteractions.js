import * as GameInteractionActionTypes from '../actiontypes/gameInteractions';

export const endGame = () => ({ type: GameInteractionActionTypes.END_GAME });

export const cellSelection = (rowIndex, columnIndex) => ({ type: GameInteractionActionTypes.CELL_SELECTION, rowIndex, columnIndex });

export const registerGameWinningPeices = winningPieces => ({ type: GameInteractionActionTypes.REGISTER_GAME_WINNING_PEICES, winningPieces });

export const resetGame = () => ({ type: GameInteractionActionTypes.RESET_GAME });

export const incTimer = () => ({ type: GameInteractionActionTypes.INC_TIMER });