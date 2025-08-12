/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    let courseOrder = [];
    let mySet = new Set();
    let preMap = {};
    let visited = {};

    function dfs(course) {
        if (visited[course]) return false;
        visited[course] = true;

        for (let i = 0; i < preMap[course]?.length; i++) {
            if (!dfs(preMap[course][i])) {
                return false;
            }
        }

        visited[course] = false;
        preMap[course] = [];
        mySet.add(parseInt(course))
        return true;
    }

    for (let i = 0; i < prerequisites.length; i++) {
        let courses = prerequisites[i];
        if (preMap[courses[0]] == undefined) {
            preMap[courses[0]] = [courses[1]];
        } else {
            preMap[courses[0]].push(courses[1]);
        }
    }

    for (let i = 0; i < numCourses; i++) {
        if (!preMap[i]) {
            mySet.add(i);
        }
    }

    for (let key in preMap) {
        if (!dfs(key)) {
            return [];
        }
        mySet.add(parseInt(key));
    }

    return [...mySet];
};