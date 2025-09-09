/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const preMap = {};
  const visited = {};

  const dfs = (node) => {
    if (visited[node]) return false;
    visited[node] = true;

    for (let i = 0; i < preMap[node]?.length; i++) {
      const currNode = preMap[node][i];
      if (!dfs(currNode)) {
        return false;
      }
    }
    visited[node] = false;
    preMap[node] = [];
    return true;
  }

  for (let i = 0; i < prerequisites.length; i++) {
    const course = prerequisites[i];

    if (preMap[course[0]] === undefined) {
      preMap[course[0]] = [course[1]];
    } else {
      preMap[course[0]].push(course[1]);
    }
  }

  for(const key in preMap) {
    if(!dfs(key)) {
      return false;
    }
  }

  return true;
};