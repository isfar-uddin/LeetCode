/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    let step = Infinity;
    const wordSet = new Set(wordList);

    if (!wordSet.has(endWord)) return 0;

    /* 
    // DFS approach with time limit

    function dfs(currWord, currStep) {
        if (currStep >= step) return;

        if (currWord === endWord) {
            step = Math.min(step, currStep);
            return;
        }

        for (let i = 0; i < currWord.length; i++) {
            for (let j = 0; j < 26; j++) {
                const newWord = currWord.slice(0,i) +
                        String.fromCharCode(j+97) + currWord.slice(i+1);
                if (wordSet.has(newWord)) {
                    wordSet.delete(newWord);
                    dfs(newWord, currStep + 1);
                    wordSet.add(newWord);
                }
            }
        }
    }

    dfs(beginWord, 1); 
    */

    // BFS Approach
    const queue = [beginWord];
    step = 1;

    while (queue.length) {
        let size = queue.length;
        while (size--) {
            const currWord = queue.shift();
            for (let i = 0; i < currWord.length; i++) {
                for (let j = 0; j < 26; j++) {
                    const newWord = currWord.slice(0, i) + String.fromCharCode(j + 97) + currWord.slice(i + 1);
                    if (wordSet.has(newWord)) {
                        if (newWord == endWord) return step + 1;
                        queue.push(newWord);
                        wordSet.delete(newWord);
                    }
                }
            }
        }
        step++;
    }

    return 0;
};