/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let x = 0; x < nums.length - 1; x++){
        if(nums[x] === nums[x + 1]){
            nums.splice([x + 1], 1);
            x--;
        }
    }
    
    return nums.length;
};