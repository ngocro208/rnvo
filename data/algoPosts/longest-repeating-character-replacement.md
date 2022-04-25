---
title: "Longest Repeating Character Replacement"
url: "https://leetcode.com/problems/longest-repeating-character-replacement/"
date: "2022-04-25"
---

## Summary

Store the frequency of char into map then get Max

## Code

```js
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
	let start = 0,
		map = new Map(),
		maxCount = 0,
		maxLength = 0;

	for (let end = 0; end < s.length; end++) {
		map.set(s[end], map.get(s[end]) + 1 || 1);
		maxCount = Math.max(maxCount, map.get(s[end]));

		while (end - start - maxCount + 1 > k) {
			map.set(s[start], map.get(s[start]) - 1);
			start++;
		}

		maxLength = Math.max(maxLength, end - start + 1);
	}

	return maxLength;
};
```
