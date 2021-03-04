/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = function(candyType) {
    const types = new Set(candyType);
    
    const numCanEat = candyType.length / 2;
    
    if(numCanEat > types.size){
        return types.size;
    }
    
    return numCanEat;
};