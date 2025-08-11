/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let preMap = {};
    let visited = {};

    function dfs(currNode) {
        if(visited[currNode]) {
            return false;
        }

        visited[currNode] = true;

        for(let i = 0; i < preMap[currNode]?.length; i++) {
            if(!dfs(preMap[currNode][i])) {
                return false;
            }
        }

        visited[currNode] = false;
        preMap[currNode] = [];

        return true;

    }

    for(let i = 0; i < prerequisites.length; i++) {
        const currItem = prerequisites[i];
        if(preMap[currItem[0]] == undefined) {
            preMap[currItem[0]] = [currItem[1]];
        } else {
            preMap[currItem[0]].push(currItem[1]);
        }
    }

    for(let key in preMap) {
        if(!dfs(key)) {
            return false;
        }
    }

    return true;
};