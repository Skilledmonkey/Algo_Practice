const test1 =  [0,1,0,3,12]


var moveZeroes = function(nums) {
    let leftToCheck = nums.length
    for (let i = 0; i < leftToCheck;) {
        if (nums[i] === 0) {
            let sliced = nums.splice(i, 1);
            nums.push(...sliced)
            leftToCheck--
        } else {
            i++
        }
    }
    return nums
};     

console.log(moveZeroes(test1), "   should Be [1,3,12,0,0]")