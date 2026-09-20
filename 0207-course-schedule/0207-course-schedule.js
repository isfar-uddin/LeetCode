/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const visited = [];
    const preMap = new Map();

    const dfs = (course) => {
        if (visited[course]) return false;

        visited[course] = true;
        const courses = preMap.get(course);

        for (let i = 0; i < courses?.length; i++) {
            const currCourse = courses[i];
            if (!dfs(currCourse)) {
                return false;
            }
        }

        preMap.set(course, []);
        visited[course] = false;
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

    console.log("Premap: ", preMap);

    for (let [course] of preMap) {
        console.log('course: ', course);
        if (!dfs(course)) {
            return false;
        }
    }

    return true;
};