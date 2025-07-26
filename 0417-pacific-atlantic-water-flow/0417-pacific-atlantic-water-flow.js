/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    const rowSize = heights.length;
    const columnSize = heights[0].length;
    const ans = [];
    const pacific = Array.from({ length: rowSize }, () => Array.from({ length: columnSize }, () => false));
    const atlantic = Array.from({ length: rowSize }, () => Array.from({ length: columnSize }, () => false));

    const dfs = (row, column, ocean) => {
        if (ocean[row][column] || row < 0 || row >= rowSize || column < 0 || column >= columnSize) return;

        ocean[row][column] = true;
        if (row + 1 < rowSize && heights[row + 1][column] >= heights[row][column]) {
            dfs(row + 1, column, ocean);
        }
        if (row - 1 >= 0 && heights[row - 1][column] >= heights[row][column]) {
            dfs(row - 1, column, ocean);
        }
        if (column + 1 < columnSize && heights[row][column + 1] >= heights[row][column]) {
            dfs(row, column + 1, ocean);
        }
        if (column - 1 >= 0 && heights[row][column - 1] >= heights[row][column]) {
            dfs(row, column - 1, ocean);
        }

    }

    for (let i = 0; i < rowSize; i++) {
        for (let j = 0; j < columnSize; j++) {
            if (i == 0 || j == 0) {
                dfs(i, j, pacific);
            }

            if (i == rowSize - 1 || j == columnSize - 1) {
                dfs(i, j, atlantic);
            }
        }
    }

    for (let i = 0; i < rowSize; i++) {
        for (let j = 0; j < columnSize; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                ans.push([i, j])
            }
        }
    }

    return ans;
};