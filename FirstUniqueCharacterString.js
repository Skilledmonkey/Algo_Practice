const test1 = "leetcode"
const test2 = "1122334"


var firstUniqChar = function(s) {
    let toArrayS = s.split('')

    for (let i = 0; i < toArrayS.length; i++) {
        let timeSeen = 0;
        for (let k = 1; k < toArrayS.length; k++) {
            if (toArrayS[i] === toArrayS[k]) {
                timeSeen+= 1 
            } else if (timeSeen > 1) {
                break
              }
            if (timeSeen === 0 && k === toArrayS.length - 1) {
                return i
            } 
        }
    }
};


// console.log(firstUniqChar(test1), "  should be l")
console.log(firstUniqChar(test2), "  should be 4")