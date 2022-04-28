const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let strN=n+"";
  for(let i=1; i<strN.length; i++){
    if(+strN[i-1] < +strN[i]){
      let arrN=strN.split("");
      arrN.splice(i-1,1);
      return +arrN.join("");
    }
  }
  return +strN.slice(0,-1);
}

module.exports = {
  deleteDigit
};
