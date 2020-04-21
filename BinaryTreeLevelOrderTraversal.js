const binaryTree = {
    val: 3,
    left: {val: 9, left: null, right: null},
    right: {val: 20, left:{val: 15, left: null, right: null}, right:{ val: 7, left: null, right: null}}
}

var levelOrder = function(root) {
    let level = 0;
    let bfsLevels = []

    if (root === null) {
        return bfsLevels
    }

   function insertBranchLevel (branch, level) {
       if (level === bfsLevels.length) {
           bfsLevels.push([])
       }

       bfsLevels[level].push(branch.val);

       if (branch.left !== null) {
            insertBranchLevel(branch.left, level+1)
       }
       if (branch.right !== null) {
            insertBranchLevel(branch.right, level+1)
       }
   }
   insertBranchLevel(root, 0)
   return bfsLevels
}

console.log(levelOrder(binaryTree));