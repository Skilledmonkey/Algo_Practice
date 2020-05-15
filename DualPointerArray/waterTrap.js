var elevationArr = [0,1,0,2,1,0,1,3,2,1,2,1]


var trap = function(height) {
    let leftPointer = 0;
    let rightPointer = height.length-1;
    let leftWall = 0;
    let rightWall = 0;
    let totalWater = 0;

    while (rightPointer > leftPointer) {
        if (height[leftPointer] < height[rightPointer]) {
            if (height[leftPointer] > leftWall) {
                leftWall = height[leftPointer]
            } else {
                totalWater += (leftWall - height[leftPointer]);
            }
            leftPointer++
        } else {
            if (height[rightPointer] > rightWall) {
                rightWall = height[rightPointer]
            } else {
                totalWater += (rightWall - height[rightPointer]);   
            }
            rightPointer--
        }
    }
    return totalWater
};

console.log(trap(elevationArr));