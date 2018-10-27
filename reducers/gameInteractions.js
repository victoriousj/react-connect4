import * as GameInteractionActionTypes from '../actiontypes/gameInteractions';

const initialState = {
    currentPlayer: 1,

    playerOneTime: 0,
    
    playerTwoTime: 0,

    gameBoard: [
        [ 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0 ],
    ],

    winningPieces: [],

    isPlaying: true,
}

export default function GameInteractions(state=initialState, action) {

    switch(action.type) {

        case GameInteractionActionTypes.CELL_SELECTION: {
            if (!state.isPlaying) return state;

            let newGameBoard = [...state.gameBoard];
            newGameBoard[action.columnIndex][action.rowIndex] = state.currentPlayer;
            
            let nextPlayer = state.currentPlayer === 1 ? 2 : 1;

            return {
                ...state,
                gameBoard: newGameBoard,
                currentPlayer: nextPlayer
            };
        };

        case GameInteractionActionTypes.END_GAME: {

            return {
                ...state,
                isPlaying: false,
            }
        }

        case GameInteractionActionTypes.REGISTER_GAME_WINNING_PEICES: {

            return {
                ...state,
                winningPieces: action.winningPieces
            }
        }

        default: 
            return state;
    }
};