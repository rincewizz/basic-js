const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  dns={};
  for(val of domains){
    let dnsArr = val.split(".").reverse();
    for(let i=0; i<dnsArr.length; i++){
      let dnsStr = "."+dnsArr.slice(0,i+1).join(".");
      dns[dnsStr] = dns[dnsStr] ? ++dns[dnsStr]: 1;
    }
  }
  return dns;

}

module.exports = {
  getDNSStats
};
