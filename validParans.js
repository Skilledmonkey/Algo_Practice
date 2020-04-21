tests = {
     'valid' : "()[]{}",
     'valid3' : "",
     'notvalid3' : "}{",
     'valid2' : "{[]}",
     'notValid' : "([)]",
     'notValid2' : "){",
     'notValid4' : "(])"
}

var isValid = function(s) {
    let stackTracker = [];

    if (s.length === 1) {
        return false
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stackTracker.push(s[i])
        } else if (s[i] === ")" && stackTracker.length > 0 && stackTracker[stackTracker.length-1] === "(") {
            stackTracker.pop()
        } else if (s[i] === "]" && stackTracker.length > 0 && stackTracker[stackTracker.length-1] === "[") {
            stackTracker.pop()
        } else if (s[i] === "}" && stackTracker.length > 0 && stackTracker[stackTracker.length-1] === "{") {
            stackTracker.pop()
        } else {
            return false;
        }
    }
    return stackTracker.length === 0;
};


test = (testObj) => {
    for (const key in testObj) {
        console.log(isValid(testObj[key]), key)
    }
}

test(tests)
