const removeFromArray = function(array, n) {
  return array.filter(item => item !== n);
};

console.log(removeFromArray([1, 2, 3], 2));

// Do not edit below this line
module.exports = removeFromArray;
