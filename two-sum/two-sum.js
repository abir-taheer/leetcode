/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numIndexes = {};
    
    for(let x = 0; x < nums.length; x++){
        const num = nums[x];
        
        const complement = target - num;
        
        const complementIndex = numIndexes[complement];
        
        if( typeof complementIndex !== "undefined" ){
            return [complementIndex, x];
        }
        
        numIndexes[num] = x;
    }
};