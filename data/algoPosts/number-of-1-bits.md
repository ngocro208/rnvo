---
title: "Number of 1 Bits"
url: "https://leetcode.com/problems/number-of-1-bits/"
date: "2022-04-28"
---

```js
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
	// Parse to binary then filter the appearance of 1
	return [...n.toString(2).padStart(32, 0)].filter((c) => c == 1).length;
};
```
