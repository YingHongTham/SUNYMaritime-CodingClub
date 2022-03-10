const a = 1;
let b = 2;
var c = 3;

{
  let b = 4;
  var c = 5;
}

console.log('Redeclaring:');
console.log('b: ', b);
console.log('c: ', c);

{
  b = 6;
  c = 7;
}

console.log('Redefine:');
console.log('b: ', b);
console.log('c: ', c);


// callbacks

console.log('start timeout');

setTimeout(() => {
  console.log('after 1 second');
}, 1000);

setTimeout(console.log('after 2 seconds (doesnt work)'), 2000);

setTimeout(myFunc, 3000);

function myFunc() {
  console.log('myFunc');
}

let myFunc2 = myFunc;

// reading files

//fetch('03-10.txt')
//  .then(response => response.text())
//  .then(text => console.log(text));


// applies func(-,-) to elements from arr1, arr2
// returns new array
// if lengths not equal, only do up to min length
function combineTwoArrays(arr1, arr2, func) {
  const minlength = Math.min(arr1.length, arr2.length);
  const ans = [];
  for (let i = 0; i < minlength; ++i) {
    ans.push(func(arr1[i], arr2[i]));
  }
  return ans;
}

let arr1 = [1,2,3];
let arr2 = [5,6,7,8];
let func = (k,l) => {
  return k+l;
}

console.log(combineTwoArrays(arr1, arr2, func));

