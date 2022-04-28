const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let newArr=[];
  let nextChange = false;

  if(!Array.isArray(arr)){
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }


  for(let i=0; i<arr.length; i++){
    if(arr[i]=="--discard-next"){
      if(i+1<arr.length){
        i++;
        nextChange=true;
      }

    }else if(arr[i]=="--discard-prev"){
      if(newArr.length!==0 && !nextChange)
        newArr.pop();
      nextChange=false;
    }else if(arr[i]=="--double-next"){
      if(i+1<arr.length)
        newArr.push(arr[i+1]);
    }else if(arr[i]=="--double-prev"){
      if(i-1>=0 && !nextChange)
        newArr.push(arr[i-1]);
      nextChange=false;
    }else{
      newArr.push(arr[i]);
    }
  }

 return newArr; 
}

module.exports = {
  transform
};
