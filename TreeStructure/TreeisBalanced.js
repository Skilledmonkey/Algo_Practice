const test1 = {val: 1, left:{val: 2, left: {val: 3, left: null, right: null}, right: {val: 4, left: null, right: null}}, right:{ val: 2, left: {val: 4, left: null, right: null}, right: {val: 3, left: null, right: null}}}

const test2 = {val: 1, left: {val: 2, left: null, right: {val: 3, left: null, right: null}}, right: {val: 2, left: null, right: {val: 3, left: null, right: null}}}

var maxPathSum = function(root) {
    let depth = 0;
    let rightDepth = 0;

    function helper(branch) {
        if (branch.left !== null  && branch.right !== null) {
            depth++
        } else {
            return "what the hell just happened   " + depth
        }
        return helper(branch.left) && helper(branch.right)
    }
    return helper(root)
};


console.log(maxPathSum(test1), "  should return TRUE")
//console.log(maxPathSum(test2), "  should return FALSE")
