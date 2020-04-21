let test1 = [2,3,4,5,6]
let test2 = [2,4,6,8,10]


function generalizedGCD(num, arr) {
    const arrCopy = arr
    let largestNumber = Math.max(...arrCopy);

    if (num === 1) {
        return arr[0];
    }

    for (let i = num; i >= -1; i--) {
        let numberToTest = arr[i]
        let arrayTruth = [];

        if (!divide(numberToTest)) {
            arrayTruth.push(true)
        } 
    }



    function divide(number, largestGCD) {
        let remainder = number % largestNumber
        if (remainder != 0) {
            return false;
        } else {
            return true 
        }
    }
}

//console.log(generalizedGCD(5, test1), "should be 1")
console.log(generalizedGCD(5, test2), "should be 2")

// NEED TO GET THE LOPPING OVER AND RETURNING CORRECTLY AND i THINK WILL NEED 2 LOOPS CAUSE IT HAS TO CHECK OVER NUMBERS THAT ARE NOT PRESENT IN THE 
// ARRAY AND THEN BACK OVER EACH TIME