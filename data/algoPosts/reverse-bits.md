---
title: "Reverse Bits"
url: "https://leetcode.com/problems/reverse-bits/"
date: "2022-04-28"
---

```js
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
	// Parse to binary then assign into 32 bits, reverse. Convert to interger
	return parseInt(
		[...`${Number(n).toString(2)}`.padStart(32, 0)].reverse().join(""),
		2
	);
};
```
