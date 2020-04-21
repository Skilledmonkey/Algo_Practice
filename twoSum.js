const numberArr = [2, 7, 11, 15]
const target = 9

// var twoSum = function(nums, target) {
//     let indexesOfMatch = []
//     let arrayLength = nums.length

//     for (let i = 0; i < arrayLength; i++) {
//         for (let k = i+1; k < arrayLength; k++) {
//             if ((nums[i] + nums[k]) === target) {
//                 indexesOfMatch.push(i, k);
//                 return indexesOfMatch
//             }
//         }
//     }
//     return indexesOfMatch
// };

var twoSum = function(nums, target) {
    let numbersObj = {};

    for (let i = 0; i < nums.length; i++) {
        let numMinusTarget = target - nums[i];

        if (numbersObj.hasOwnProperty(numMinusTarget)) {
            return [numbersObj[numMinusTarget], i]
        }
        numbersObj[nums[i]] = i;
    }
};



console.log(twoSum(numberArr, target))