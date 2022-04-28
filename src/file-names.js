const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let createdFiles = [];
  function createFile(filename,number=0){
    let postfix = number==0 ? "" : `(${number})`;
    if(createdFiles.includes(filename+postfix)){
      createFile(filename, number+1);
    }else{     
      createdFiles.push(filename+postfix);
    }
  }
  for(let i =0; i<names.length; i++){
    createFile(names[i]);
  }
  return createdFiles;
}

module.exports = {
  renameFiles
};
