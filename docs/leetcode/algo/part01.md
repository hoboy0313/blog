# 第1题 到 第50题

## 1. 两数之和

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

### 示例:

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

### 解题思路
1. 准备一个字典，用于查询之前插入的值情况。(new Map())
2. target - 当前value 得到差值，查询之前的字典中有没有这个差值
3. 如果有，就整合一下数组返回
4. 如果没有，再判断一下字段中是否已经有这个值的索引，有就啥也不做，没有就存起来
5. 循环结束都没找到，则返回空[]

### 代码
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();
  for(let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]
    let index = map.get(diff)
    if (index !== void 0) {
      return [index, i]
    }
    !map.has(diff) && map.set(nums[i], i)
  }
  return []
};
```

## 2. 两数之和

给出两个 `非空` 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 `逆序` 的方式存储的，并且它们的每个节点只能存储 `一位` 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 `0` 之外，这两个数都不会以 `0` 开头。

### 示例：
```
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

### 代码
```js
function ListNode(val) {
  this.val = val;
  this.next = null;
}
// [2,4,3]
let l1 = new ListNode(2)
let l11 = new ListNode(4)
let l12 = new ListNode(3)
l1.next = l11
l11.next = l12

// [5,6,4]
let l2 = new ListNode(5)
let l21 = new ListNode(6)
let l22 = new ListNode(4)
l2.next = l21
l21.next = l22

/* ===== 上面是测试的数据，下面是正题 ===== */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let newListNode = new ListNode(null)
  let header = newListNode

  let step = 0  // 进位符

  while(l1 || l2) {
    let x = 0, y = 0
    l1 && (x = l1.val)
    l2 && (y = l2.val)
    let _res = x + y + step
    _res >= 10 ? (_res -= 10, step = 1) : step = 0
    newListNode.next = new ListNode(_res)
    newListNode = newListNode.next
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
  }

  if(step) {
    newListNode.next = new ListNode(step)
  }
  return header.next
};
```


## 3. 无重复字符的最长子串
给定一个字符串，请你找出其中不含有重复字符的 `最长子串` 的长度。

### 示例 1:
```
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

### 示例 2:
```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

### 示例 3:
```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

### 代码
```js
/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(!s) {
    return 0
  }
  let str = ''
  let n = 0

  for (ch of s) {
    const index = str.indexOf(ch)
    if (index === -1) {
      str += ch;
      n = Math.max(n, str.length)
    } else {
      str = str.slice(index + 1) + ch
    }
  }

  return n
};
```