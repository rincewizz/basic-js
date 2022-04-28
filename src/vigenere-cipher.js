const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct=true){
    this.direct= direct;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  isLatin(symbol){
    return this.alphabet.includes(symbol.toUpperCase())
  }
  letterPos(letter){
    return this.alphabet.indexOf(letter);
  }
  encrypt(message, key) {
    if(!message || !key){
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptMessage="";

    for(let i=0, k=0; i<message.length; i++){
      if(this.isLatin(message[i])){
        if(k==key.length) k=0;
        let messageLetterPos = this.letterPos(message[i]);
        let keyLetterPos = this.letterPos(key[k]);
        encryptMessage+=this.alphabet[(messageLetterPos+keyLetterPos)%(this.alphabet.length)];
        k++;
      }else{
        encryptMessage+=message[i];
      }
    }
    return this.direct ? encryptMessage : encryptMessage.split("").reverse().join("");
  }
  decrypt(message, key) {
    if(!message || !key){
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let decryptMessage="";

    for(let i=0, k=0; i<message.length; i++){
      if(this.isLatin(message[i])){
        if(k==key.length) k=0;
        let messageLetterPos = this.letterPos(message[i]);
        let keyLetterPos = this.letterPos(key[k]);
        decryptMessage+=this.alphabet[(messageLetterPos-keyLetterPos+26)%(this.alphabet.length)];
        k++;
      }else{
        decryptMessage+=message[i];
      }
    }
    return this.direct ? decryptMessage : decryptMessage.split("").reverse().join("");

  }
}

module.exports = {
  VigenereCipheringMachine
};
