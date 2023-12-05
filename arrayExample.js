/*let fruit = ["apple","banana",'orange'];
for(let i =0; i< fruit.length; i++ )
{
    alert(fruit[i]);
}*/

// Define an array of objects
/*const fruits = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Orange", color: "Orange" },
    { name: "Grape", color: "Purple" }
  ];
  
  // Access and manipulate objects in the array
  console.log(fruits[0].name); // Output: "Apple"
  console.log(fruits[1].color); // Output: "Yellow"
  
  // You can also loop through the array
  for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit: ${fruits[i].name}, Color: ${fruits[i].color}`);
  }*/
  
//   // Or use forEach for a more concise way to loop through the array
//   fruits.forEach(fruit => {
//     console.log(`Fruit: ${fruit.name}, Color: ${fruit.color}`);
//   });


//Array declaration
//let fruit = ["apple","banana","orange"];
//We can replace an element:
//fruit[2] = 'Pear';
//Array elements are numbered, starting with zero.

//We can get an element by its number in square brackets
/*console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);*/

// Get last elements with “at”
//alert(fruit.at(-1));

//pop
// Extracts the last element of the array and returns it:

//console.log(fruit.pop());
//console.log(fruit);

//shift
//Extracts the first element of the array and returns it:
//console.log(fruit.shift());
//console.log(fruit);

//push
//console.log(fruit.push("pear"));
//console.log(fruit);

//unshift
//Add the element to the beginning of the array:
//fruit.unshift('Apple');
//console.log(fruit);


// let arr = ['apple',{name : 'john'}, true, function(){alert ('hello');}];
// alert(arr[1].name);
// arr[3]();


/* let userData = [
  {
    name: 'john',
    age: 32,
    address : 'chandkedha',
    pwd: 'abc'
  },
  {
    name: 'abc',
    age: 23,
    address : 'ahmedabad',
    pwd: 'pwd'
  },
  {
    name: 'example',
    age: 24,
    address : 'pune',
    pwd: 'example'
  },
  {
    name: 'sdk',
    age: 45,
    address : 'delhi',
    pwd: 'sdk'
  },
  {
    name: 'asd',
    age: 65,
    address : 'chennai',
    pwd: 'asd'
  },
  {
    name: 'pqr',
    age: 55,
    address : 'mp',
    pwd: 'pqr'
  },
  {
    name: 'balaji',
    age: 34,
    address : 'up',
    pwd: 'balaji'
  },
  {
    name: 'jaipur',
    age: 66,
    address : 'jaipur',
    pwd: 'jaipur'
  },
  {
    name: 'jk',
    age: 62,
    address : 'jk',
    pwd: 'jk'
  },
  {
    name: 'senthail',
    age: 32,
    address : 'dubai',
    pwd: 'senthail'
  }
] */
// print the index in array of object
/* for (var i = 0; i < userData.length; i++) {
  console.log(i);
} */


// print the specific index  
/* for (var i = 0; i < userData.length; i++) {
  if (i == 5 ) {
   console.log(userData[i]);
  }
} */

//
// print the name of fourth data
//alert(userData[4].name);

// for (var i = 0; i < userData.length; i++) {
//   if (userData[i] == '5' ) {
//     alert(userData[i].name);
//   }
// }
// for (let i = 0; i < userData.length; i++) {
//   const index = userData.indexOf(5);

//   console.log(index);
// }


/********************** splice() **********************/

// Array splice 
// The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.

//splice() Syntax
/*The syntax of the splice() method is:

arr.splice(start, deleteCount, item1, ..., itemN)
Here, arr is an array.

The splice() method takes in:

start - The index from where the array is changed.
deleteCount (optional) - The number of items to remove from start.
item1, ..., itemN (optional) - The elements to add to the start index. If not specified, splice() will only remove elements from the array.

*/

/*let arr = ["I", "study", "js"];
arr.splice(1, 1);
alert(arr);*/

/*let arr = ["I", "study", "js", "right", "now"];
arr.splice(0,3, "let's","Dance");
alert(arr);*/

/*let arr = ["I", "study", "JavaScript", "right", "now"];

let removed = arr.splice(0, 2);

alert( removed );*/


/********************** slice() **********************/
//slice The method arr.slice is much simpler than similar-looking arr.splice.
/*let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); 
alert( arr.slice(-2) ); */


/********************** forEach() **********************/
//syntax: array.forEach(callbackFn);
//The arr.forEach method allows to run a function for every element of the array.


/*syntax : arr.forEach(function(item, index, array) {
  // ... do something with item
}); */

/*let arr = ["red", "orange", "pink"];
arr.forEach(arrs => {
  console.log(arrs);
});*/

/*let number =[1,2,3,4];
number.forEach(num => {
  console.log(num*=2);
});*/


/*let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); //true */

/*let fruit = ["apple","banana","orange"];
alert(fruit.indexOf('apple'));
alert(fruit.lastIndexOf('orange'));*/

//find and findIndex/findLastIndex
/*let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});*/

// find() with Object elements
/*let iteam = [{
  name : "bill",
  age: 10,
},
{
  name : "Linus",
  age: 15,
},
{
  name : "Alan",
  age: 20,
},
{
  name : "steave",
  age: 34,
}];

let check = iteam.find(({ age }) => age > 18);
alert(check);*/


/********************** find , findIndex, findLastIndex *******************************/
/*let users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Pete'},
  {id: 3, name: 'Mary'}
];
let user = users.find(iteam => iteam.name === 'Mary');
console.log(user);
alert(users.findIndex(iteam => iteam.name == 'John'));
alert(users.findLastIndex(iteam => iteam.name == 'Pete'));*/


/********************** filter *******************************/
/*let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); */

/********************** Map ********************************/

// It calls the function for each element of the array and returns the array of results.

/*let array = [1,2,3,4,5];
let result = array.map( x => x*2);
console.log(result); */ 

/*let number = [1,2,3,4];
let root = number.map((num) => Math.sqrt(num)); */

/********************** Map in object *******************************/

/*let people = [
  {name : 'john', age : 30},
  {name : 'jane', age : 23},
  {name : 'peter', age : 21},
];

let result = people.map((person) => person.age);
console.log(result);*/


/********************** sort(fn) *******************************/


// The sort() method in JavaScript is used to sort the elements of an array in place and returns the sorted array. 
// It sorts the elements in ascending order by default, 
// but you can also specify a custom sort order by passing a compare function as a parameter to the sort() method.


/*let number = [5,3,2,1,4];
number.sort();
console.log(number);  \*/

// sort() method to sort an array of objects.

/*let people = [
  {
    name : 'johne',
    age : 32
  },
  {
    name : 'mary',
    age : 22
  },
  {
    name : 'Bob',
    age : 22
  },
];
people.sort((a,b) => a.name.localeCompare(b.name));
console.log(people);

// The localeCompare() method checks if a given string comes before, after, or is equivalent as another string in sort order.
*/


/********************** split *******************************/

//The str.split(delim) method does exactly that. It splits the string into an array by the given delimiter delim.


/*let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
  console.log( `A message to ${name}` );
}*/


// The call arr.join(glue) does the reverse to split. It creates a string of arr items joined by glue between them.

/*let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.join(';'); 

alert( str ); */

/********************** reduce **********************/ 

/* let arr = [1,2,3,4,5];
let result = arr.reduce((a,b) => a + b);
console.log(`your result is : ${result}`); */

/********************** Map **********************/

// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

//Methods and properties are:

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element (the key/value pair) by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.

/*let map = new Map();
map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');
console.log(map.get(1));
console.log(map .get('1'));
console.log(map.size); */


/*
Iteration over Map
For looping over a map, there are 3 methods:

map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.


let recipe = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipe.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipe.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipe) { // the same as of recipeMap.entries()
  console.log(entry); // cucumber,500 (and so on)
}
*/


// Object.entries: Map from Object
// When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:

/*let map = new Map([
  ['1', 'str'],
  [1, 'num'],
  [true, 'boolean '],
]);
console.log(map.get('1'));*/

/********************** object with Map **********************/
// If we have a plain object, and we’d like to create a Map from it, 
// then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.

/*let student = {
  name : 'abc',
  age : 32
};

let map = new Map(Object.entries(student));
console.log(map.has("age")); */

// Object.fromEntries: Object from Map

// We’ve just seen how to create Map from a plain object with Object.entries(obj).

// There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them:

/* let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// now prices = { banana: 1, orange: 2, meat: 4 }

alert(prices.orange); // 2 */

/*We can use Object.fromEntries to get a plain object from Map.

// E.g. we store the data in a Map, but we need to pass it to a 3rd-party code that expects a plain object.

// Here we go:

let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map); // make a plain object (*)

// done!
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); */



/********************** Set **********************/
// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

// Its main methods are:

// new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

// For example, we have visitors coming, and we’d like to remember everyone.
//  But repeated visits should not lead to duplicates. A visitor must be “counted” only once.

/*let set = new Set();
let john = { name : "john" };
let pete = { name : "pete" };
let mary = { name : "Mary" };
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set.size);
for(let user of set){
  console.log(user.name);
}
*/

// Iteration over Set
// We can loop over a set either with for..of or using forEach:

/*let set = new Set(["orange", "apple", "banana"]);
for( let value of set){
  console.log(value);
}
 // Now with forEach

 set.forEach((value, valueAgain, set) => {
  console.log(value);
 }); */

 let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // convert prices to array, map each key/value pair into another pair
  // and then fromEntries gives back the object
  Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
);

console.log(doublePrices.meat);


//The JavaScript Object.fromEntries() method takes an iterable object of key-value pairs and returns an object.

/* The Object.entries() method returns an array of key-value pairs for the enumerable properties of an object.
// The syntax is:
// Object.entries(obj)

The return value is an array of arrays, where each inner array contains a key-value pair. 
The keys are strings, and the values can be any type of data.
For example, the following code gets the key-value pairs for the object obj:
const obj = {
  a: 1,
  b: 2,
  c: 3
};

const entries = Object.entries(obj);

console.log(entries) 

o/p:- [['a', 1], ['b', 2], ['c', 3]]

*/

/* The Object.fromEntries() method in JavaScript is a standard built-in object method that takes an iterable object of key-value pairs and returns an object with the same key-value pairs.
The syntax for the Object.fromEntries() method is:
Object.fromEntries(iterable)

where iterable is an iterable object of key-value pairs.
The Object.fromEntries() method is useful for converting an array of key-value pairs to an object. For example, the following code converts an array of key-value pairs to an object:
const entries = [['a', 1], ['b', 2]];
const object = Object.fromEntries(entries);
console.log(object); // { a: 1, b: 2 }

The Object.fromEntries() method is also useful for converting an object to an array of key-value pairs. For example, the following code converts an object to an array of key-value pairs:
const object = { a: 1, b: 2 };
const entries = Object.entries(object);
console.log(entries); // [['a', 1], ['b', 2]]

The Object.fromEntries() method is a powerful tool for working with key-value pairs in JavaScript.

*/




arr =[1,2,{}]

// Array of object inside the another array of object
let userData = [
  "Apple",
  "Orange",
  "Plum",
  {
    name: 'john',
    age: 32,
    address : 'chandkedha',
    pwd: 'abc'
  },
  {
    name: 'abc',
    age: 23,
    address : 'ahmedabad',
    pwd: 'pwd'
  },
  {
    name: 'example',
    age: 24,
    address : 'pune',
    pwd: 'example'
  },
  {
    name: 'sdk',
    age: 45,
    address : 'delhi',
    pwd: 'sdk',
    anotherArray : [{
      name: 'childarray',
      age: 41,
      address : 'canada',
      pwd: 'pwdchildarray',
    },
    {
      name: 'childarray2',
      age: 78,
      address : 'america',
      pwd: 'childarray2',
    }
  ]
  },
  {
    name: 'asd',
    age: 65,
    address : 'chennai',
    pwd: 'asd'
  },
  {
    name: 'pqr',
    age: 55,
    address : 'mp',
    pwd: 'pqr',
    anotherArray : [{
      name: 'anotherchildarray1',
      age: 58,
      address : 'canada',
      pwd: 'anotherchildarray1',
    },
    {
      name: 'anotherchildarray2',
      age: 48,
      address : 'america',
      pwd: 'anotherchildarray2',
    }
  ]
  },
  {
    name: 'balaji',
    age: 34,
    address : 'up',
    pwd: 'balaji'
  },
  {
    name: 'jaipur',
    age: 66,
    address : 'jaipur',
    pwd: 'jaipur'
  },
  {
    name: 'jk',
    age: 62,
    address : 'jk',
    pwd: 'jk'
  },
  {
    name: 'senthail',
    age: 32,
    address : 'dubai',
    pwd: 'senthail',
  }
]

// 
/*for(let result of userData){
  console.log(result.name);
}*/


//Display anotherArray data in js using loop

/*for(i = 0; i < userData.length; i++){
  console.log(userData[i].age);
    if(userData[i].anotherArray){
      for(j = 0; j < userData[i].anotherArray.length; j++){
        console.log(userData[i].anotherArray[j].name);
      }
    }
}*/

// using for..of

/*for (let user of userData) {
  console.log(`Name : ${user.name}`);

  // Check if the user has anotherArray property
  if (user.anotherArray) {
    // Loop through the anotherArray
    for (let childArrayDisplay of user.anotherArray) {
      console.log( childArrayDisplay.name);
      console.log(`  Age: ${childArrayDisplay.age}`);
      console.log(`  Address: ${childArrayDisplay.address}`);
      console.log(`  Password: ${childArrayDisplay.pwd}`);
    }
  }
}*/

// check if age is greater then 24 
/*for (let user of userData) {
  if (user.age > 24) {
    console.log(`User: ${user.name}`);

    if (user.anotherArray) {
      
      for (let childArrayItem of user.anotherArray) {
        console.log(`  Name: ${childArrayItem.name}`);
        console.log(`  Age: ${childArrayItem.age}`);
        console.log(`  Address: ${childArrayItem.address}`);
        console.log(`  Password: ${childArrayItem.pwd}`);
      }
    }
   
  }
}*/

for (let i = 0; i < userData.length; i++) {
  if (userData[i].name === 'john') {
    userData[i].name = 'abc';
    console.log(userData[i].name);
  } else if (userData[i].name === 'abc') {
    userData[i].name = 'john';
    console.log(userData[i].name);
  }
}
//console.log(userData.name);




//console.log(userData[0].name); 
//console.log(userData[0].anotherArray[0].name);
// for(let i = 0; i < userData.length; i++){
//   for(let j = 0 ; j < userData[i].length ; j++){
//       console.log(j);
//   }
// }


/*for (const object of originalArray) {
  object.age = object.age + 1;
}*/


