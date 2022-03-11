const a = 1;
let b = 2;
var c = 3;

{
  let b = 4;
  var c = 5;
  let d = 6;
}

// no good, because out of scope of defn of d
//console.log(d);

console.log('Redeclaring:');
console.log('b: ', b);
console.log('c: ', c);

{
  b = 6;
  c = 7;
}

console.log('Reassign:');
console.log('b: ', b);
console.log('c: ', c);


let e = 0;
{
  let e = 1;
  //let e = 5; // bad, cannot redeclare
  {
    let e = 2; // will be reassigned to 3
    {
      e = 3;
      console.log('e: ', e); // 3
    }
    console.log('e: ', e); // 3
  }
  console.log('e: ', e); // 1
}
console.log('e: ', e); // 0


// funciton namespace

let v = 100;
function recur(n) {
  if (n < 0)
    return;
  v++;
  recur(n-1);
}

//recur(10);
//recur(10):
//  
//  recur(9):
//    let a = 0;
//    recur(8):
//      ...
//


// {
//   {
//     let a = 0;
//   }
//   {
//     a = 5; // error: no such variable
//   }
// }

//===============================================================
// callbacks

console.log('start timeout');

() => { ... }
let fn = (a) => { console.log(a); }
function fn(a) {
  console.log(a);
}

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

function readFile(filename) {
  fetch(filename)
    .then( (response) => { return response.text();} )
    .then( doSomethingToText );
}

function doSomethingToText(filetext) {
  console.log(filetext);
}

fetch API {
  send request to whatever (internet/filesystem))
    for the thing you want
  .. wait ..
  data received, in some special formj
pass to first .then callback
data => data.text()
pass output of that to next .then callback
data.text() =>  console.log(data.text())

// applies func(-,-) to elements from arr1, arr2
// returns new array
// if lengths not equal, only do up to min length
// func expect two input variables, of type
// same as entries of arr1,arr2
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
let func2 = (k,l) => {
  return k*l;
}

console.log('arr1: ', arr1);
console.log('arr2: ', arr2);
console.log('ans: ', combineTwoArrays(arr1, arr2, func));


////THREE.js
//const v1 = new Vector3(0,1,0);
//const v2 = new Vector3(2,-1,1);
//const v3 = v1.add(v2);
//
//function addVectors(a,b) {
//  return a.add(b);
//}


