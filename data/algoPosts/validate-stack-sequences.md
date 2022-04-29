---
title: "Validate Stack Sequences"
url: "https://leetcode.com/problems/validate-stack-sequences/"
date: "2022-04-29"
---

```js
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
	let i = 0;
	const arr = [];
	for (const ele of pushed) {
		arr.push(ele);
		while (arr.length > 0 && arr[arr.length - 1] === popped[i]) {
			i++;
			arr.pop();
		}
	}

	return arr.length === 0;
};
```
