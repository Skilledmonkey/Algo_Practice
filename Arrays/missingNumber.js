const test1 = [3,0,1]
const test2 = [9,6,4,2,3,5,7,0,1]
const test3 = [1]
const test4 = [0]

var missingNumber = function(nums) {

    nums = nums.sort((a, b) => a - b);
    
    if (nums[0] !== 0) {
        return 0
    }
    
    for (let i = 0; i < nums.length; i++) {
        let shouldBeNextNumber = nums[i] + 1

        if (!(nums[i+1] === shouldBeNextNumber)) {  
            return shouldBeNextNumber
        }
    }
};

console.log(missingNumber(test1), "should be 2")
console.log(missingNumber(test2), "should be 8")
console.log(missingNumber(test3), "should be 0")
console.log(missingNumber(test4), "should be 1")
