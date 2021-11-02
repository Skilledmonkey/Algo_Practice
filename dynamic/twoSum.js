const numberArr = [2, 7, 11, 15]
const target = 9

// DYNAMIC TO ADD PREVIOUSLY FOUND NUMBERS VALUES SO THAT THE SUBTRACTION IS CONSTANT TIME AND 
// DOES NOT NEED TO HAPPEN AGAIN 

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