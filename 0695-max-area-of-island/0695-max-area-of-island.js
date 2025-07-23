/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] == '1') {
                const area = dfs(grid, i, j, 1);
                maxArea = Math.max(area, maxArea);
            }
        }
    }

    return maxArea;
};

var dfs = function(grid, i, j, count) {
    if(i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] == '0')
    {
        return 0;
    }
    grid[i][j] = 0;

    count = count + dfs(grid, i + 1, j, count) + dfs(grid, i - 1, j, count) + dfs(grid, i, j + 1, count) + dfs(grid, i, j - 1, count);

    return count;
}