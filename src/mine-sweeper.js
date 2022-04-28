const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  let field = matrix.map( el => el.map( v => 0));
  for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[0].length; j++){
      if(matrix[i][j]){
        field[i][j]=1;

        let rowFrom = i>0 ? i-1 : i;
        let rowTo = i<(matrix.length-1) ? i+1 : i; 
        let colFrom = j>0 ? j-1 : j;
        let colTo = j<(matrix[0].length-1) ? j+1 : j;

        for(let row=rowFrom; row<=rowTo; row++){
          for(let col=colFrom; col<=colTo; col++){
            if(!matrix[row][col]){
              field[row][col]++;              
            }              
          }
        }
      }
    }
  }

  return field;

}

module.exports = {
  minesweeper
};
