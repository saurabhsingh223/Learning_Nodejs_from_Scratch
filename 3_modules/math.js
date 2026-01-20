function add(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}

// we use js objects method to pass multiple fuctions
module.exports = {
    addFn : add,
    subFn : sub
}

// or we use
// exports.add = (a, b)=> a+b;
// exports.sub = (a, b)=> a-b;