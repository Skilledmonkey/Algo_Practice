const test1 = 19


var isHappy = function(n) {
    //could use array to hold this cause of the .Includes() method 
    let hashForMemoizeComputedValues = {};

    function computeSquaredValue(number) {
        let splitIntoNumberArr = Array.from(number.toString()).map(Number);
        let currentSum = 0

        if (number === 1 ) {
            return true 
        }

        splitIntoNumberArr.map(value => {
            currentSum += Math.pow(value, 2)
        });

        if ( hashForMemoizeComputedValues.hasOwnProperty(currentSum)) {
            return hashForMemoizeComputedValues[currentSum];
        } else {
            hashForMemoizeComputedValues[currentSum] = false;
        }
        return computeSquaredValue(currentSum)
    }
    return computeSquaredValue(n)
};

console.log(isHappy(test1), "  Should be TRUE")