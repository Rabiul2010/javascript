//routine to calculate the sum of an array
var numbers=[0,1,2,3,4,5,6];
var sum = numbers.reduce(add, 0);

function add(a, b) {
  return a + b;
}

console.log(sum);
