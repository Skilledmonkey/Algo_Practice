// Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

const test1 = 5;
const test2 = 1;
const test3 = -1;

var findComplement = function(num) {

 // USING BITWISE OPERATORS SHOULD BE ABLE TO REFACTOR THE CODE TO JUST SWAP ALL THE BITS 
 // WOULD NEED TO GET RID OF THE ZERO BEFORE BY SHIFTING OR SLICING   

    let toBitsArray = (num >>> 0).toString(2).split('');

    for (let i = 0; i < toBitsArray.length; i++) {
            if (toBitsArray[i] == '1') {
                toBitsArray[i] = '0'
            } else {
                toBitsArray[i] = '1'
            }    
    }

    let arrayToNumber = toBitsArray.join('')
    
    return parseInt(arrayToNumber, 2)
};

console.log(findComplement(test1), "  should be 2")
console.log(findComplement(test2), "  should be 0")
console.log(findComplement(test3), "  should be 0")