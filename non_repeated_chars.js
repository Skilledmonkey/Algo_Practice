// const logArr = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo","a2 act car"]


// var reorderLogFiles = function (logs) {
//     let letterLogs = [];
//     let numberLogs = [];

//     logs.forEach(log => {
//         let logMinusLet = log.substr(log.indexOf(' ') + 1)
        
//         if (isNaN(parseInt(logMinusLet[0]))) {
//             letterLogs.push(log)
//         } else {
//             numberLogs.push(log)
//         }
//     });

//         letterLogs.sort((a,b) => {
//             let aSlice = a.slice(a.indexOf(' ')+1);
//             let bslice = b.slice(b.indexOf(' ')+1);

//             if (aSlice === bslice) {
//                 return a > b ? 1 : -1
//             } else {
//                 return aSlice > bslice ? 1 : -1 
//             }
//         });


//     return [...letterLogs, ...numberLogs]
// };

// var reorderLogFiles = function(logs) {
//     let letters = [];
//     let digits = [];
    
//     for (let i = 0; i < logs.length; i++) {
//       if (isFinite(logs[i].split(' ')[1])) {
//         digits.push(logs[i]);
//       } else letters.push(logs[i]);
//     } 
    
//     letters.sort((a,b) => {
//       let aCut = a.slice(a.indexOf(' ') + 1);
//       let bCut = b.slice(b.indexOf(' ') + 1);
//       if (aCut === bCut) {
//         return a > b ? 1 : -1;
//       } else return aCut > bCut ? 1 : -1; 
//     });
    
//     return [...letters, ...digits]
//   };


console.log(reorderLogFiles(logArr), '  should be   ["a2 act car","g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]')