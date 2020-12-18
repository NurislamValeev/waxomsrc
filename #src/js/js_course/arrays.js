'use strict';

const arr = [2, 3, 16, 48, 10, 9];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
  return a - b;
}

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} внутри массива ${arr}`);
});

// arr.pop();
// arr.push(10);

// console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let value of arr) {
  console.log(value);
}

const str = prompt('', '');
const products = str.split(', ');
products.sort();
console.log(products.join('; '));

const add = {
  color: 'red',
  size: 'big',
  opacity: 1,
  fontSize: 14,
  name: 'Logan',
  isObject: true,
  data: {
    duration: '5 seconds',
  },
};

const addClone = Object.assign({}, add);

addClone.size = 'small';
addClone.color = 'white';

console.log(add);
console.log(addClone);

const brandNewArray = ['a', 'b', 'c'];
const brandNewArrayClone = brandNewArray.slice();
brandNewArrayClone[1] = 'dsadsadsfdff3';
console.log(brandNewArray);
console.log(brandNewArrayClone);
