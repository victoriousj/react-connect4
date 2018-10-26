export const checkGameBoard = gameBoard => {
    
    // vertical
    for (let columnIndex = 0; columnIndex <= 6; columnIndex++) {
        let column = gameBoard[columnIndex];

        for (let cellIndex = 0; cellIndex <= 2; cellIndex++) {
            if (column[cellIndex] === 0) continue;
            
            if (areIdentical(column[cellIndex], column[cellIndex+1], column[cellIndex+2], column[cellIndex+3])) {
                console.log('column four');
            }
        }
    }

    // horizontal
    for (let rowIndex = 5; rowIndex >= 5; rowIndex--) {
        let row = gameBoard.map(column => column[rowIndex]);
        
        for (let cellIndex = 0; cellIndex <=3; cellIndex++) {
            if (row[cellIndex] === 0) return;

            if (areIdentical(row[cellIndex], row[cellIndex+1], row[cellIndex+2], row[cellIndex+3])) {
                console.log('row four');
            }
        }
    }

    // diagonal:  
    //  left - to - right: 0 - 3
    //  bottom - top: 0 - 2

    // diagonal up-right:
    // for (let diagonalGroupIndex = 0; diagonalGroupIndex <= 2; diagonalGroupIndex++) {
    //     let diagonalGroup = 
    // }
};

export const areIdentical = (a,b,c,d) => a === b && a === c && a === d;
