export const checkGameBoard = gameBoard => {
    
    // vertical
    for (let columnIndex = 0; columnIndex <= 6; columnIndex++) {
        let column = gameBoard[columnIndex];

        for (let cellIndex = 0; cellIndex <= 2; cellIndex++) {
            if (column[cellIndex] === 0) continue;
            
            let verticalGroup = [
                column[cellIndex], 
                column[cellIndex+1], 
                column[cellIndex+2], 
                column[cellIndex+3]
            ];

            if (areIdentical(verticalGroup)) {
                return ({
                    type: 'column', 
                    cells: verticalGroup
                });
            }
        }
    }

    // horizontal
    for (let rowIndex = 5; rowIndex >= 0; rowIndex--) {
        let row = gameBoard.map((column) => column[rowIndex]);
        
        for (let cellIndex = 0; cellIndex <= 3; cellIndex++) {
            if (row[cellIndex] === 0) continue;

            let horizontalGroup = [
                row[cellIndex], 
                row[cellIndex+1], 
                row[cellIndex+2], 
                row[cellIndex+3]
            ];

            if (areIdentical(horizontalGroup)) {
                return ({
                    type: 'row', 
                    cells: horizontalGroup
                });
            }
        }
    }

    for (let diagonalGroupYIndex = 0; diagonalGroupYIndex <= 3; diagonalGroupYIndex++) {
        for (let diagonalGroupXIndex = 0; diagonalGroupXIndex <= 2; diagonalGroupXIndex++) {
            if (gameBoard[diagonalGroupYIndex][diagonalGroupXIndex] === 0) continue;

            let diagonalGroup = [
                gameBoard[diagonalGroupYIndex+0][diagonalGroupXIndex+0],
                gameBoard[diagonalGroupYIndex+1][diagonalGroupXIndex+1],
                gameBoard[diagonalGroupYIndex+2][diagonalGroupXIndex+2],
                gameBoard[diagonalGroupYIndex+3][diagonalGroupXIndex+3]
            ];

            if (areIdentical(diagonalGroup)) {
                return ({
                    type: 'diagonal', 
                    cells: diagonalGroup
                });
            }
        }
    }

    for (let diagonalGroupYIndex = 0; diagonalGroupYIndex <= 3; diagonalGroupYIndex++) {
        for (let diagonalGroupXIndex = 6; diagonalGroupXIndex >= 0; diagonalGroupXIndex--) {
            if (gameBoard[diagonalGroupYIndex][diagonalGroupXIndex] === 0) continue;

            let diagonalGroup = [
                gameBoard[diagonalGroupYIndex+0][diagonalGroupXIndex-0],
                gameBoard[diagonalGroupYIndex+1][diagonalGroupXIndex-1],
                gameBoard[diagonalGroupYIndex+2][diagonalGroupXIndex-2],
                gameBoard[diagonalGroupYIndex+3][diagonalGroupXIndex-3]
            ];

            if (areIdentical(diagonalGroup)) {
                return ({ 
                    type: 'diagonal', 
                    cells: diagonalGroup 
                });
            }
        }
    }
};

export const areIdentical = arr => arr.every(v => v === arr[0])
