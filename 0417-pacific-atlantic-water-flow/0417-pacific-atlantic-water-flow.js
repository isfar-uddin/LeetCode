/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const rowSize = heights.length;
  const columnSize = heights[0].length;
  const pacific = Array.from({ length: rowSize }, () => Array.from({ length: columnSize }, () => false));
  const atlantic = Array.from({ length: rowSize }, () => Array.from({ length: columnSize }, () => false));

  const backtrack = (i, j, ocean) => {
    if (i < 0 || j < 0 || i >= rowSize || j >= columnSize || ocean[i][j]) return;

    ocean[i][j] = true;

    if (heights[i + 1]?.[j] >= heights[i][j]) {
      backtrack(i + 1, j, ocean);
    }

    if (heights[i - 1]?.[j] >= heights[i][j]) {
      backtrack(i - 1, j, ocean);
    }

    if (heights[i]?.[j + 1] >= heights[i][j]) {
      backtrack(i, j + 1, ocean);
    }

    if (heights[i]?.[j - 1] >= heights[i][j]) {
      backtrack(i, j - 1, ocean);
    }
  }

  for (let i = 0; i < rowSize; i++) {
    for (let j = 0; j < columnSize; j++) {
      if (i == 0 || j == 0) {
        backtrack(i, j, pacific);
      }

      if (i == rowSize - 1 || j == columnSize - 1) {
        backtrack(i, j, atlantic);
      }
    }
  }

  const ans = [];

  for (let i = 0; i < rowSize; i++) {
    for (let j = 0; j < columnSize; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        ans.push([i, j]);
      }
    }
  }

  return ans;
};