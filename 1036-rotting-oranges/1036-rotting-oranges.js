/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    function dfs(i, j, requiredTime) {
        if(!grid[i]?.[j] || (1 < grid[i][j] && grid[i][j] < requiredTime)) return;

        grid[i][j] = requiredTime;

        dfs(i + 1, j, requiredTime + 1);
        dfs(i - 1, j, requiredTime + 1);
        dfs(i, j + 1, requiredTime + 1);
        dfs(i, j - 1, requiredTime + 1);
    }

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] == 2) {
                dfs(i, j, 2);
            }
        }
    }

    const flattedTimeMatrix = grid.flat();

    const maxTime = Math.max(2, ...flattedTimeMatrix);

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] == 1) return -1;
        }
    }

    return maxTime - 2;
};