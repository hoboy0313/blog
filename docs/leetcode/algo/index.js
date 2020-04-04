


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

/* ===== 上面是测试的数据，下面为正题 ===== */
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