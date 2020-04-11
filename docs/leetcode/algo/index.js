


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

console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbbb"))  // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3
console.log(lengthOfLongestSubstring("aab"))  // 2
console.log(lengthOfLongestSubstring("dvdf"))  // 3