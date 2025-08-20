/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    const dsu = edges.map((_, index) => index);

    const findParent = (node) => {
        while (dsu[node] != node) {
            node = dsu[node];
        }

        return node;
    }

    for (let edge = 0; edge < edges.length; edge++) {
        const p = findParent(edges[edge][0]);
        const q = findParent(edges[edge][1]);

        if (p != q) {
            dsu[p] = q;
        } else {
            return edges[edge];
        }
    }

    return [];
};