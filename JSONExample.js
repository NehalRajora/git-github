// https://javascript.info/


// The JSON (JavaScript Object Notation) is a general format to represent values and objects. It is described as in RFC 4627 standard. 
// Initially it was made for JavaScript, but many other languages have libraries to handle it as well. 
// So it’s easy to use JSON for data exchange when the client uses JavaScript and the server is written on Ruby/PHP/Java/Whatever.


/************************** JSON.stringify ************************/
/* JavaScript provides methods:

JSON.stringify to convert objects into JSON.
JSON.parse to convert JSON back into an object. */

/* let student = {
 name: 'john',
 age: 30,
 isAdmin: false,
 course: ['html', 'css', 'js'],
};

let json = JSON.stringify(student);
console.log(typeof json);
console.log(json); */

/* The method JSON.stringify(student) takes the object and converts it into a string.

The resulting json string is called a JSON-encoded or serialized or stringified or marshalled object. We are ready to send it over the wire or put into a plain data store.


Please note that a JSON-encoded object has several important differences from the object literal:

Strings use double quotes. No single quotes or backticks in JSON. So 'John' becomes "John".
Object property names are double-quoted also. That’s obligatory. So age:30 becomes "age":30. */

// The great thing is that nested objects are supported and converted automatically.


/* let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"]
    }
  };
  
  console.log( JSON.stringify(meetup) ); */

  /* The full syntax of JSON.stringify is:

let json = JSON.stringify(value[, replacer, space]) 
value
A value to encode.
replacer
Array of properties to encode or a mapping function function(key, value).
space
Amount of space to use for formatting
Most of the time, JSON.stringify is used with the first argument only.
 But if we need to fine-tune the replacement process, like to filter out circular references, 
 we can use the second argument of JSON.stringify. */

 let room = {
    number : 23
 };

 let meetup = {
    title : "conference",
    participant : [{ name : 'john',  age : 23}],
    place : room
 };

 room.occupiedBy = meetup;
 console.log(JSON.stringify(meetup,['title', 'participant','place', 'name', 'number']));

 // https://www.scaler.com/topics/json-stringify/

 /*
 The Replacer Parameter
Consider that you have your personal data as a javascript object. Now you need to convert this object into a JSON string, but the catch is you don't want to include each key in the JSON string.
Instead, you want only some of the keys to be included. Doing this manually would end up taking a lot of time, especially when dealing with many such objects.
This is why the JSON to stringify method also provides a second parameter called the replacer.
The replacer argument is used to signify if any changes are to be made to the object before converting the object into a JSON string.
To be very precise, the replacer argument refers to which particular keys of the Javascript objects have to be included in the string and which ones should be left out. 
Now, we can do so in two ways: in the form of an array or in the form of a function.*/


/******************************** Replacer as an Array in JSON  ********************************* */

/*As an array, its elements indicate the names of the properties in the object that should be included in the resulting JSON string.
 Only string and number values are taken into account; symbol keys are ignored. 

 let obj = {
  a: 1,
  b : 2,
  c : 3,
  d : 4,
  e : 5
 };
 let replacer = ['a', 'c', 'e'];
 let JsonString = JSON.stringify(obj,replacer);
 console.log(JsonString); // o/p:- {"a":1,"c":3,"e":5}

 In this example, the replacer parameter is an array containing the strings "a", "c", and "e". 
 This means that only the properties with those names will be included in the resulting JSON string. 
 The properties "b" and "d" will be excluded. */


 /********************************** Replacer as an function in JSON ***********************************/

 // define a javascript object
const personalData = {
  name: 'John',
  age: 35,
  occupation: 'Doctor',
  home: 'Australia',
  employed: true
};

// print the object
console.log("The object is:");
console.log(personalData);

// define the replacer function
function replacer(key, value){
  if(typeof value === 'string'){
      return undefined;
  }
  return value;
}

// use JSON stringify method to convert the object into a JSON string
const personalData_string = JSON.stringify(personalData, replacer);

// print the JSON string
console.log("The resultant string is:");
console.log(personalData_string);


/******************************************* JSON.parse() ***********************************/

/* The JSON.parse() method in JavaScript is used to parse a JSON string and returns a JavaScript object. 
The string has to be written in JSON format.
The JSON.parse() method can optionally transform the result with a function.

var myObject = JSON.parse('{"name": "John", "age": 30}');

console.log(myObject); // { name: 'John', age: 30 }

// parse JSON arrays

var myArray = JSON.parse('[1, 2, 3, 4, 5]');

console.log(myArray); // [1, 2, 3, 4, 5]  

// For nested object

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

console.log( user.friends[1] );
console.log(user.age); */
