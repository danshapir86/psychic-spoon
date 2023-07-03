function solveNQueens(n) {
  const solutions = [];
  const board = Array.from(Array(n), () => new Array(n).fill('.'));

  backtrack(board, 0, solutions);

  return solutions;
}

function backtrack(board, row, solutions) {
  if (row === board.length) {
    solutions.push([...board.map(row => row.join(''))]);
    return;
  }

  for (let col = 0; col < board.length; col++) {
    if (isValid(board, row, col)) {
      board[row][col] = 'Q';
      backtrack(board, row + 1, solutions);
      board[row][col] = '.';
    }
  }
}

function isValid(board, row, col) {
  const n = board.length;

  for (let i = 0; i < row; i++) {
    if (board[i][col] === 'Q') {
      return false;
    }
  }

  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 'Q') {
      return false;
    }
  }

  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === 'Q') {
      return false;
    }
  }

  return true;
}

const n = 4;
const solutions = solveNQueens(n);
console.log(`Все возможные расстановки ферзей на доске ${n}x${n}:`);
for (let solution of solutions) {
  console.log(solution);
}
