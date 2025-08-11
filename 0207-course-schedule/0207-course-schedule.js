/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let preMap = {};
    let visited = {};

    for (let i = 0; i < prerequisites.length; i++) {
        const curr = prerequisites[i];
        if(preMap[curr[0]] == undefined) {
            preMap[curr[0]] = [curr[1]];
        } else {
            preMap[curr[0]].push(curr[1]);
        }
    }

    const dfs = (node) => {
        if (visited[node]) return false;
        if (!preMap[node]?.length) return true;

        visited[node] = true;

        for (let i = 0; i < preMap[node].length; i++) {
            if (!dfs(preMap[node][i])) return false;
        }
        preMap[node] = [];
        visited[node] = false
        return true;
    }

    for(let key in preMap) {
        if (!dfs(key)) {
            return false;
        }
    }

    return true;
};