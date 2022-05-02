---
title: "Generate Parentheses"
url: "https://leetcode.com/problems/generate-parentheses/"
date: "2022-05-02"
---


```js
/**
* @param {number} n
* @return {string[]}
*/
var generateParenthesis = function (n) {
    const result = []
    generateAll("", result, 0, 0, n)
    return result
};

function generateAll(current, result, open, close, pair) {
    if (current.length === 2 * pair) {
        result.push(current)
        return;
    }
    if (open < pair) {
        generateAll(current + "(", result, open + 1, close, pair)
    }
    if (close < open) {
        generateAll(current + ")", result, open, close + 1, pair)
    }
}
```