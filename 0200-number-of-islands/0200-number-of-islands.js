/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let islandCount = 0;

  const backtrack = (i, j) => {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') {
      return;
    }

    grid[i][j] = '0';

    backtrack(i + 1, j);
    backtrack(i - 1, j);
    backtrack(i, j + 1);
    backtrack(i, j - 1);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        islandCount++;
        backtrack(i, j);
      }
    }
  }

  return islandCount;
};