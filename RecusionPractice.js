

//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
let array = [1,2,3,4,5,6,7,8,9]
//let i = 0
myfunction = (arr) => {
    while (i <= arr.length-1) {
        console.log(arr[i]);
        i++
    }
}
// myfunction(array)

//2. Next, try looping just like above except using recursion
function myRecursiveFunction(arr) {
    let i = arguments[1] ? arguments[1]: 0;
    let finalArray = arguments[2] ? arguments[2] : [];

    if (i > arr.length-1){
        return finalArray
    }
    finalArray.push(arr[i])
    return myRecursiveFunction(arr, ++i)
}

// console.log(myRecursiveFunction(array))

computeFactorials = (number) => {
    if (number === 1) {
        return 1;
    } else {
        return number * computeFactorials(number-1);
    }
}

console.log(computeFactorials(5))

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse