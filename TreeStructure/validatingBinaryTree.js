//NEED TO DO dEPTH FIRST SEARCH AND COMPARE THE LEFT VALUE > VALUE AND RIGHT VALUE < VALUE 
  // ALSO NEITHER CHILD VALUE CAN BE GREATER THAN THE ROOT

  /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const goodTree = {
    val: 2, 
    left: { val: 1, left: null, right: null }, 
    right: { val: 3, left: null, right: null }
 };

 const badTree = {
     val: 10,
     left: {val: 5, left: null, right: null},
     right: {val: 15, left: {val: 6, left: null, right: null}, right: {val: 20, left: null, right: null}}
 };


var isValidBST = function(root) {
    if (!root) {
        return true;
    }

    function nodeChecker(root, smallestValue, largestValue) {
        if (!root) {
            return true;
        }

        if (( smallestValue !== null && root.val <= smallestValue ) || (largestValue !== null && root.val >= largestValue)) {
            return false;
        }
        return nodeChecker(root.left, smallestValue, root.val) && nodeChecker(root.right, root.val, largestValue)
    }
    return nodeChecker(root, null, null)
};

// var isValidBST = function(root) {
//     if (!root) {
//         return true; // Sanity check for passing test case '[]'
//     }

//     function helper(root, min, max) {
//         if (!root) {
//             return true; // We hit the end of the path
//         }
        
//         if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
//             return false; // current node's val doesn't satisfy the BST rules
//         }
        
//         // Continue to scan left and right
//         return helper(root.left, min, root.val) && helper(root.right, root.val, max);
//     }
    
//     return helper(root, null, null);
// };

console.log(isValidBST(goodTree))
console.log(isValidBST(badTree))

