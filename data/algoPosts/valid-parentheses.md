---
title: "Valid Parentheses"
url: "https://leetcode.com/problems/valid-parentheses/"
date: "2022-05-01"
---

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const length = s.length;
    if (length < 2 || length % 2 !== 0) return false
    let balance = 0
    const brackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    const openBrackets = Object.keys(brackets)
    const store = []
    for (let i = 0; i < length; i++) {
        const char = s[i]
        if (openBrackets.includes(char)) {
            balance++
            store.push(char)
        } else {
            if (brackets[store[store.length - 1]] !== char || balance === 0) return false
            balance--
            store.pop()
        }
    }
    return balance === 0
};
```
