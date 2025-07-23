/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const getIslandArea = function (i, j) {
        if (!grid[i]?.[j]) return 0;

        grid[i][j] = 0;
        return 1 + getIslandArea(i + 1, j) + getIslandArea(i - 1, j) + getIslandArea(i, j + 1) + getIslandArea(i, j - 1)
    }

    let maxArea = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j]) {
                const area = getIslandArea(i, j);
                maxArea = Math.max(area, maxArea);
            }
        }
    }

    return maxArea;
};