/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const row = grid.length;
    const col = grid[0].length;

    const dfs = (i, j, requiredTime) => {
        if (i < 0 || j < 0 || i >= row || j >= col || !grid[i][j] || (grid[i][j] > 1 && grid[i][j] < requiredTime)) return;

        grid[i][j] = requiredTime;
        dfs(i + 1, j, requiredTime + 1);
        dfs(i - 1, j, requiredTime + 1);
        dfs(i, j + 1, requiredTime + 1);
        dfs(i, j - 1, requiredTime + 1);
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == 2) {
                dfs(i, j, 2);
            }
        }
    }

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(grid[i][j] == 1) return -1;
        }
    }

    const flattenedMatrix = grid.flat();
    const maxTime = Math.max(2, ...flattenedMatrix);

    return maxTime - 2;
};