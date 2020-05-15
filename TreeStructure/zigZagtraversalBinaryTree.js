const binaryTree = {
    val: 3,
    left: {val: 9, left: null, right: null},
    right: {val: 20, left:{val: 15, left: null, right: null}, right:{ val: 7, left: null, right: null}}
}

var zigzagLevelOrder = function(root) {
    let level = 0;
    let shouldBeReversed = false;
    let levelsArray = [];

    if (!root) {
        return levelsArray
    }

    // helper function to use the call staack and closure 
    function insertLevels (branch, level) {
        if (level === levelsArray.length) {
            levelsArray.push([])
        }

        levelsArray[level].push(branch.val)

        if (branch.left !== null) {
            insertLevels(branch.left, level+1)
        }
        if (branch.right !== null) {
            insertLevels(branch.right, level+1)
        }
    }

    insertLevels(root, 0)

    levelsArray.forEach(level => {
        if (shouldBeReversed) {
            level.reverse();
            shouldBeReversed = false;
        } else {
            shouldBeReversed = true;
        }
    });
    return levelsArray
};

console.log(zigzagLevelOrder(binaryTree))