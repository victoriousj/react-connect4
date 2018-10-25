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

    isPlaying: false,
}

export default function GameInteractions(state=initialState, action) {

    switch(action.type) {

        case GameInteractionActionTypes.CELL_SELECTION: {
            let newGameBoard = [...state.gameBoard];
            newGameBoard[action.columnIndex][action.rowIndex] = state.currentPlayer;
            
            let nextPlayer = state.currentPlayer === 1 ? 2 : 1;

            return {
                ...state,
                gameBoard: newGameBoard,
                currentPlayer: nextPlayer
            };
        };

        default: 
            return state;
    }
};