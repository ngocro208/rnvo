---
title: "Remove Duplicates from Sorted List II"
url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/submissions/"
date: "2022-04-24"
---


```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let curr = head,
    prev = null;
    
    while(curr && curr.next) {
        // If the value has been duplicated
        if(curr.val === curr.next.val) {
            // Loop until its unique
            while(curr && curr.next && curr.val === curr.next.val) {
                curr = curr.next;
            }
            // it will stop at the last duplicated node so we have to set to the next node
            curr = curr.next;
			
			// In case the duplicated node is in the beginning
            if(prev == null) {
                head = curr;
            } else { // else set prev to current
                prev.next = curr;    
            }
        } else { 
			// set prev as the current node and move to the next node
            prev = curr;
            curr = curr.next;    
        }
    }
    return head;
};
```
