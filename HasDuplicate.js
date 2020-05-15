const test1 = [1,2,3,1];
const test2 = [1,2,3,4];

// BRUTE FORCE

// var containsDuplicate = function(nums) {

//     for (let i = 0; i < nums.length-1; i++) {
//         let numberForChecking = nums[i]
//         let arrayForComparison = nums.slice(i+1)

//         if (arrayForComparison.includes(numberForChecking)) {
//             return true;
//         }
//     }
//     return false;
// };

// BEST COMPLEXITY for time and memory
var containsDuplicate = function(nums) {
    let cannotHaveDuplicatesSet = new Set(nums)
    return nums.length === cannotHaveDuplicatesSet.size ? false : true 
};

//  COULD CHANGE TO A SET (NO DUPLICATES AND COMPARE THE SIZE 'LENGTH'
//  COULD PUSH TO HASH TABLE AND THEN COMPARE NUMBER OF KEYS TO LENGTH 

console.log(containsDuplicate(test1), "  Should Be TRUE")
console.log(containsDuplicate(test2), "  Should Be FALSE")