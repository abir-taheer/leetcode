/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(matrix){
    let num = 0;

        function traverse(row, col){
            if(matrix[row][col] === "1"){
                matrix[row][col] = "0";
            } else {
                return;
            }

            if(row + 1 < matrix.length){
                traverse(row+1, col);
            }

            if(row - 1 >= 0){
                traverse(row - 1, col);
            }

            if(col + 1 < matrix[row].length){
                traverse(row, col+1);
            }

            if(col - 1 >= 0){
                traverse(row, col-1);
            }
        }

        for(let row = 0; row < matrix.length ; row++){
            for(let col = 0; col < matrix[row].length ; col++){
                if(matrix[row][col] === "1"){
                    num++;
                    traverse(row, col);
                }
            }
        }

        return num;
}