/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const rowSize = heights.length;
  const columnSize = heights[0].length;
  const pacific = Array.from({ length: rowSize }, () => Array(columnSize).fill(false));
  const atlantic = Array.from({ length: rowSize }, () => Array(columnSize).fill(false));

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
    // Find the isLand that can be reached from pacific 
    backtrack(i, 0, pacific);
    // Find the isLand that can be reached from atlantic
    backtrack(i, columnSize - 1, atlantic);
  }

  for (let i = 0; i < columnSize; i++) {
    // Find the isLand that can be reached from pacific
    backtrack(0, i, pacific);
    // Find the isLand that can be reached from atlantic
    backtrack(rowSize - 1, i, atlantic);
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