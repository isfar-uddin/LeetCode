/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

  const backtrack = (row, column, wordIndex) => {
    if (wordIndex >= word.length) {
      return true;
    }

    if (row < 0 || row >= board.length || column < 0 || column >= board[0].length || board[row][column] !== word[wordIndex]) {
      return false;
    }

    const char = board[row][column];
    board[row][column] = '*';

    const isMatched = backtrack(row + 1, column, wordIndex + 1) || backtrack(row - 1, column, wordIndex + 1) || backtrack(row, column + 1, wordIndex + 1) || backtrack(row, column - 1, wordIndex + 1);

    board[row][column] = char;

    return isMatched;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (backtrack(i, j, 0)) return true;
    }
  }

  return false;
};