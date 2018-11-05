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
        
        case GameInteractionActionTypes.RESET_GAME: {
            console.log(initialState);
            return initialState;
        }
        
        case GameInteractionActionTypes.REGISTER_GAME_WINNING_PEICES: {

            return {
                ...state,
                winningPieces: action.winningPieces
            }
        }

        case GameInteractionActionTypes.INC_TIMER: {
            if (!state.isPlaying) return state;

            state = state.currentPlayer === 1 
                ? timePlayerOneTimer(state)
                : timePlayerTwoTimer(state);

            return state;
        }

        default: 
            return state;
    }
};



const timePlayerOneTimer = (state) => {
    let playerTime = state.playerOneTime;
    let newPlayerTime = ++playerTime;

    return {
        ...state,
        playerOneTime: newPlayerTime,
    }
}

const timePlayerTwoTimer = (state) => {
    let playerTime = state.playerTwoTime;
    let newPlayerTime = ++playerTime;

    return {
        ...state,
        playerTwoTime: newPlayerTime,
    }
}