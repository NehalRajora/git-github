function declare() {

}// function declare
declare() //function call

//------------
/*function showMessage(){
    alert("hello");
}
showMessage();*/

//--------
//local variable :-A variable declared inside a function is only visible inside that function.

/*function showMessage(){
    let name = "hello";  //local variable is declare here
    alert(name);
}
showMessage();
alert(name); // error */

//outer variable :- A function can access an outer variable as well. The function has full access to the outer variable
/*let userName = "abc";
function getName(){
  let message = 'hello ' + userName;
  alert(message);
}
getName();*/

//---- The function has full access to the outer variable. It can modify it as well.

/*let userName = "pqr";
function getName(){
    userName = "abc";
    let message = "hello " + userName;
    alert(message);
}
alert(userName);// prq
getName(); //hello abc
alert(userName); //abc */

//--------
/*let userName = 'John';

function showMessage() {
  let userName = "Bob"; // we have again define the local  variable so it's scope will be within the curly bracket that
                        // why the outside the bracket it print the outer variable
  let message = 'Hello, ' + userName; 
  alert(message); //hello bob
}

showMessage();

alert( userName );// john*/

//--------- parameter

/*function showMessage(from, text) {
    alert (form + ":" + text); 
}
showMessage('hello','abc');*/

//----- we have a variable from and pass it to the function. Please note: the function changes from, 
//but the change is not seen outside, because a function always gets a copy of the value:

/*function showMessage(from,text) {
from = '*' + from + '*';
alert(from + ':' + text); 
}
showMessage("ann", "bob");*/

//--------- return value

//A function can return a value back into the calling code as the result.

/*function sum (a,b){
  return a + b;
}
let result = sum(3, 5);
alert(result);*/

// function getSum(a,b){

//     sum = a+b;
//     if(sum<5){
//         return "sum is less then 5";
//     }else{
//         return "sum is greater then 5";
//     }
// } 
// let result = getSum(2,1);
// alert(result);

// store input numbers
/*function getSum(){
let num1 = parseInt(prompt('Enter the first number '));
let num2 = parseInt(prompt('Enter the second number '));

//add two numbers
const sum = num1 + num2;
if(sum<5){
    return "sum is less then 5";
}else{
    return "sum is greater then 5";
}
}
let result = getSum();
 alert(result);*/

 /*let age = prompt("how old are you?", '');
 if(age > 18){
    alert('your age is greater then 18');
 } else if(age <18){
    alert ('your age is less then 18');
 } else {
  alert ('your age is 18');
 }*/

 /*let age = prompt("how old are you?", '');
 let result = (age > 18) ? 'your age is greater then 18' : 'your age is less then 18';
  alert(result);*/
 
  //------ Function Expression
  /*let sayHi = function(){
    alert("hello");
  };

  let func = sayHi;
  func();
  sayHi();*/


  // Callback function
  /*function greet(){
    console.log("hello world");
  }
  function sayName(name){
    console.log('hello' + name);
  }
  setTimeout(greet,2000);
  sayName('john');*/

  // function
/*function greet(firstName, callback, otherCallback) {
  // let data = 1;
  // data = 2;
  // data = 3;
  console.log('Hi');
  callback();
  otherCallback(firstName)
}*/

// callback function
/*function callMe() {
  console.log('I am callback function');
}
function callOther(firstName) {
  console.log('Hello' + ' ' + firstName);
}

// passing function as an argument
greet('Peter', callMe, callOther);*/


//---------- Arrow function
/*let greet = (name) => console.log(name);
greet('nehal'); // Hello*/

