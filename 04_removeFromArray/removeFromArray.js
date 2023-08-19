
  var removeFromArray = function(array, ...args) {
    console.log(args)  
    console.log(typeof args)
    return array.filter(val => !args.includes(val))
     
};
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)
// Do not edit below this line
module.exports = removeFromArray;
