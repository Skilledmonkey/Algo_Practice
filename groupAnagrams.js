let test1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const test2 = [];
const test3 = []


var groupAnagrams = function(strs) {
    /* 
    value to hole the arrays that are created

    for each word iterate the array 
        split into letters
        for each letter in the selected word 
            check if word includes the letter 
                if does add check if array exists and add to the array then remove the word from the list splice(from index, to index)
                else 
                go to the next word 
    */
    let finalAnagrams = [];
    let hashmap = {};

    strs.forEach(word => {
        let sortedWord = word.localeCompare(b);
        
        if (hashmap.hasOwnProperty(sortedWord)) {
            hashmap[sortedWord].push(word)
        } else {
            hashmap[sortedWord] = [word]
        }

    });


    return finalAnagrams
};


console.log(groupAnagrams(test1))
// console.log(groupAnagrams(test2))