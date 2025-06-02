const sumAll = function(x, y) {
  let sum = 0;
  for (let i = x; i <= y; i++) {
    sum += i;
  }
  return sum;
};
console.log(sumAll(1, 10));

// Do not edit below this line
module.exports = sumAll;
