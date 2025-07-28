/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const rowSize = board.length;
    const columnSize = board[0].length;

    function dfs(i, j) {
        if(!board[i]?.[j] || board[i][j] != 'O') return;

        if(board[i][j] == 'O') {
            board[i][j] = 'T';
            dfs(i + 1, j);
            dfs(i - 1, j);
            dfs(i, j + 1);
            dfs(i, j - 1);
        }
    }

    for(let i = 0; i < rowSize; i++) {
        for(let j = 0; j < columnSize; j++) {
            if(i == 0 || i == rowSize - 1 || j == 0 || j == columnSize - 1) {
                dfs(i, j);
            }
        }
    }

    for(let i = 0; i < rowSize; i++) {
        for(let j = 0; j < columnSize; j++) {
            if(board[i][j] == 'T') {
                board[i][j] = 'O';
            } else if(board[i][j] == 'O') {
                board[i][j] = 'X';
            }
        }
    }
};