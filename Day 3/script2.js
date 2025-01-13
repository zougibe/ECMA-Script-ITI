const handler = {
    set: function(target, prop, val) {
        if (prop === 'name') {
            if (typeof val !== 'string' || val.length !== 7) {
                throw'Name must be a string of 7 characters.';
            }
        } else if (prop === 'address') {
            if (typeof val !== 'string') {
                throw 'Address must be a string.';
            }
        } else if (prop === 'age') {
            if (typeof val !== 'number' || val < 25 || val > 60) {
                throw 'Age must be a number between 25 and 60.';
            }
        } else {
            throw `Property ${prop} is not allowed.`;
        }
        target[prop] = val;
    }
};

const details = new Proxy({}, handler);

details.name = "zougibe"
details.address = "FYM"
details.age = 25

details.age=44

console.log(details);


