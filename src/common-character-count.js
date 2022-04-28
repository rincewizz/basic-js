const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count=0;
  let countS1={};
  let countS2={};
  for(let i =0; i<s1.length; i++){
    countS1[s1[i]] = countS1[s1[i]] ? ++countS1[s1[i]] : 1;
  }
  for(let i =0; i<s2.length; i++){
    countS2[s2[i]] = countS2[s2[i]] ? ++countS2[s2[i]] : 1;
  }
  for(let [key, val] of Object.entries(countS1)){
    if(countS2[key]){
      count+=Math.min(val, countS2[key]);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
