export const checkGameBoard = gameBoard => {
  let winningPeices = [];
  // vertical
  for (let columnIndex = 0; columnIndex <= 6; columnIndex++) {
    let column = gameBoard[columnIndex];

    for (let cellIndex = 0; cellIndex <= 2; cellIndex++) {
      if (column[cellIndex] === 0) continue;

      let verticalGroup = [
        column[cellIndex],
        column[cellIndex + 1],
        column[cellIndex + 2],
        column[cellIndex + 3]
      ];

      if (areIdentical(verticalGroup)) {
        winningPeices = [
          { column: columnIndex, row: cellIndex + 0 },
          { column: columnIndex, row: cellIndex + 1 },
          { column: columnIndex, row: cellIndex + 2 },
          { column: columnIndex, row: cellIndex + 3 }
        ];
      }
    }
  }

  // horizontal
  for (let rowIndex = 5; rowIndex >= 0; rowIndex--) {
    let rows = gameBoard.map((column, i) => [column[rowIndex], i]);

    for (let cellIndex = 0; cellIndex <= 3; cellIndex++) {
      if (rows[cellIndex][0] === 0) continue;

      let horizontalGroup = [
        rows[cellIndex + 0][0],
        rows[cellIndex + 1][0],
        rows[cellIndex + 2][0],
        rows[cellIndex + 3][0]
      ];

      if (areIdentical(horizontalGroup)) {
        winningPeices = [
          ...winningPeices,
          { column: rows[cellIndex + 0][1], row: rowIndex },
          { column: rows[cellIndex + 1][1], row: rowIndex },
          { column: rows[cellIndex + 2][1], row: rowIndex },
          { column: rows[cellIndex + 3][1], row: rowIndex }
        ];
      }
    }
  }

  // diagonal, up-to-the-right
  for (
    let diagonalGroupYIndex = 0;
    diagonalGroupYIndex <= 3;
    diagonalGroupYIndex++
  ) {
    for (
      let diagonalGroupXIndex = 0;
      diagonalGroupXIndex <= 2;
      diagonalGroupXIndex++
    ) {
      if (gameBoard[diagonalGroupYIndex][diagonalGroupXIndex] === 0) continue;

      let diagonalGroup = [
        gameBoard[diagonalGroupYIndex + 0][diagonalGroupXIndex + 0],
        gameBoard[diagonalGroupYIndex + 1][diagonalGroupXIndex + 1],
        gameBoard[diagonalGroupYIndex + 2][diagonalGroupXIndex + 2],
        gameBoard[diagonalGroupYIndex + 3][diagonalGroupXIndex + 3]
      ];

      if (areIdentical(diagonalGroup)) {
        winningPeices = [
          ...winningPeices,
          { column: diagonalGroupYIndex + 0, row: diagonalGroupXIndex + 0 },
          { column: diagonalGroupYIndex + 1, row: diagonalGroupXIndex + 1 },
          { column: diagonalGroupYIndex + 2, row: diagonalGroupXIndex + 2 },
          { column: diagonalGroupYIndex + 3, row: diagonalGroupXIndex + 3 }
        ];
      }
    }
  }

  // diagonal down-to-the-right
  for (
    let diagonalGroupYIndex = 0;
    diagonalGroupYIndex <= 3;
    diagonalGroupYIndex++
  ) {
    for (
      let diagonalGroupXIndex = 6;
      diagonalGroupXIndex >= 0;
      diagonalGroupXIndex--
    ) {
      if (gameBoard[diagonalGroupYIndex][diagonalGroupXIndex] === 0) continue;

      let diagonalGroup = [
        gameBoard[diagonalGroupYIndex + 0][diagonalGroupXIndex - 0],
        gameBoard[diagonalGroupYIndex + 1][diagonalGroupXIndex - 1],
        gameBoard[diagonalGroupYIndex + 2][diagonalGroupXIndex - 2],
        gameBoard[diagonalGroupYIndex + 3][diagonalGroupXIndex - 3]
      ];

      if (areIdentical(diagonalGroup)) {
        winningPeices = [
          ...winningPeices,
          { column: diagonalGroupYIndex + 0, row: diagonalGroupXIndex - 0 },
          { column: diagonalGroupYIndex + 1, row: diagonalGroupXIndex - 1 },
          { column: diagonalGroupYIndex + 2, row: diagonalGroupXIndex - 2 },
          { column: diagonalGroupYIndex + 3, row: diagonalGroupXIndex - 3 }
        ];
      }
    }
    if (winningPeices.length > 0) return winningPeices;
  }
};

const areIdentical = arr => arr.every(v => v === arr[0]);
