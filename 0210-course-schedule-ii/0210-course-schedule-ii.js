/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    const preMap = new Map();
    const coursesSet = new Set();
    const visited = [];

    const dfs = course => {
        if (visited[course]) return false;

        visited[course] = true;

        const preCourses = preMap.get(course);
        for (let i = 0; i < preCourses?.length; i++) {
            if (!dfs(preCourses[i])) {
                return false;
            }
            coursesSet.add(preCourses[i]);
        }

        visited[course] = false;
        preMap.set(course, []);
        coursesSet.add(course);
        return true;
    }

    for (let i = 0; i < prerequisites.length; i++) {
        const course = prerequisites[i];
        if (!preMap.has(course[0])) {
            preMap.set(course[0], [course[1]]);
        } else {
            preMap.get(course[0]).push(course[1]);
        }
    }

    for(let i = 0; i < numCourses; i++) {
        if(!preMap.get(i)) {
            coursesSet.add(i);
        }
    }

    for (let [course] of preMap) {
        if (!dfs(course)) {
            return [];
        }
    }

    return [...coursesSet];
};