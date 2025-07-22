/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islandCount = 0;

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] == '1') {
                islandCount++;
                dfs(grid, i, j);
            }
        }
    }

    return islandCount;
};

function dfs(grid, i, j) {
    if(i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] == '0') {
        return;
    }
    grid[i][j] = '0';

    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
}