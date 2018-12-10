import * as interactionActionTypes from '../actiontypes/interactions';
import { checkGameBoard } from '../helpers';

const getInitialState = () => ({
  isPlaying: true,
  currentPlayer: 1,
  playerOneTime: 0,
  playerTwoTime: 0,
  showOverlay: false,
  gameBoard: [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ],
  winningPieces: []
});

const initialState = getInitialState();

export default function interactions(state = initialState, action) {
  switch (action.type) {
    case interactionActionTypes.ADD_PIECE: {
      if (!state.isPlaying) return state;

      const newState = { ...state };

      newState.gameBoard[action.columnIndex][action.rowIndex] =
        newState.currentPlayer;

      const winningPieces = checkGameBoard(state.gameBoard);
      if (winningPieces) {
        newState.winningPieces = winningPieces;
        newState.showOverlay = true;
        newState.isPlaying = false;
      } else {
        newState.currentPlayer = newState.currentPlayer === 1 ? 2 : 1;
      }

      return newState;
    }

    case interactionActionTypes.RESET_GAME: {
      return getInitialState();
    }

    case interactionActionTypes.INC_TIMER: {
      if (!state.isPlaying) return state;

      state =
        state.currentPlayer === 1
          ? timePlayerOneTimer(state)
          : timePlayerTwoTimer(state);

      return state;
    }

    default:
      return state;
  }
}

const timePlayerOneTimer = state => ({
  ...state,
  playerOneTime: 1 + state.playerOneTime
});

const timePlayerTwoTimer = state => ({
  ...state,
  playerTwoTime: 1 + state.playerTwoTime
});
