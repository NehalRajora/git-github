// alert( "shree ganeshay namah!" );
// let message;
// message='hello';

// let name = "john";
// alert(`hello, ${name}`);

//type conversion
// let value=true;
// alert(typeof value);
// val=String(value);
// alert(typeof val);

//String concatenation with binary +
// let s="my"+"string";
// alert(s);

// let counter = 1;
// let a = ++counter; // (*)

// alert(a); 

// let value= prompt("type a number",0);
// if (value>0){
//     alert(1);
// }
// let result=(a+b<4)? 'below': 'overs';

// Ternary operator
//let message = (login == employee)? hello: (login =='director') ?'greeting': (login == '')? 'no login' :'';

//Function
// let userName='abc';
//     function Message()
//     {
//         let userName= 'xyz';
//         let msg= "hello,how are you, " + userName;
//         alert(msg);
//     }
// alert(userName);
// Message();
// alert(userName);

// // function with parameter
// function showMessage(form,text){
//     alert(form + ':' + text);
// }
// showMessage('hi','hello');
// showMessage('who','how');

// //return value
// function sum(a,b){
//     return a+b;
// }
// let result = sum(2,3);
// alert(result);

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('access the permission form the parent');
//   }
// }
// let age = prompt('how old are you?', 18);
// if (checkAge(age)) {
//   alert('access granted');
// } else {
//   alert('access denied');
// }

// function showPrimes(n) {

//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     alert(i);  // a prime
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }


// function ask(question, yes, no) {
//   if (confirm(question)) (yes)
//   else no();
// }
// function showOk() {
//   alert("you are okay");
// }
// function showCancel() {
//   alert("You canceled the execution.");
// }
// ask("do you agree")

//"use strict";

//let age = prompt("What is your age?", 18);

// conditionally declare a function
/*if (age < 18) {

  function welcome() {
    alert("Hello!");
  }
  welcome();
} else {

  function welcome() {
    alert("Greetings!");
  }
  welcome();
}

// ...use it later
welcome(); */

/*"use strict";
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome();*/

/*let sum = (a,b) => a+b;
alert(sum(1,2));*/

/*let user = {
  name:'abc',
  age: 26
};

user = {
  sayHi() { // same as "sayHi: function(){...}"
    alert("Hello");
  }
};*/
// -------------------------------------------------
// create function that return your name 
// function getName(fnamename, middlename) {
//   return fnamename + middlename;
// }
// let nameRef = "nehal"
// let nameVal = getName(nameRef, " yash");
// console.log(nameVal);

// -------------------------------------------------
// create function that calculate sum and if sum is less then 5 then it will retun "sum is lesthen 5" 
// function sum(a, b=1) {
//   let sum = a+b;
//   if (sum < 5) {
//     return 1;// "sum is less then 5";
//   } else {
//     return 0;// "sum is greater then 5";
//   }
// }
// let a  = sum(1,5);
// if (a === 1) {
//   console.log("sum is less then 5");
// }  else {
//   console.log("sum is greater then 5");
// }

// Method of primitives
/*let obj = {
  name : 'abc',
  sayHi : function() {
    console.log("hello");
  }
};
obj.sayHi();*/

