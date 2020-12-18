'use strict';

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red',
  },
  isMarried: false,
  knownLanguages: ['Russian', 'English', 'Chinese'],
  age: 21,
  makeTest: function () {
    console.log('Test');
  },
  isProgrammer: true,
};

options.makeTest();

const { border, bg } = options.colors;
console.log(bg);

console.log(options.knownLanguages.length);
console.log(Object.keys(options));
console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

/*
let counter = 0;
for (let key in options) {
  if (typeof options[key] === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++;
  }
}
console.log(counter);
 */
