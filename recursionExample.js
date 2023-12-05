

 /* The Recursion in JavaScript works the same as it works in any other language.
 Let's analyze the structure of the syntax shown in the recursion function earlier. 
 While writing a recursive function(), you must have the following three basic components of that syntax:

The Function Declaration.
The Base Case.
The Recursive Call command.

 /*********************************  1. The Function Declaration *******************************/
 /* This is where the intended recursive function is declared. The process is similar to how a new function is normally declared in JavaScript.

function recursion() {     //The declared function takes arguments
    // Function and recursive step codes
}

/************************************* 2. The Base Case ****************************************/
 /* The base case is the most important component of each recursive function. When the problem is divided into smaller jobs, 
 it is the smallest component of the actual problem that is to be solved.

It can also be seen as the command that, if the set condition is true, it has the ability to end the recursion process.

In recursive functions, the base case is that iteration of a recursive function that does not need an additional recursion to solve a problem.

Base cases are mandatory on recursive functions. Without a base case a recursive function will never terminate leading it to an infinite loop.

function recursion() {    // The Function Declaration
    if (true) {           // here is the base case command
        return;
    }
    // Function and recursive step codes
}

/**************************************  3. The Recursive Call Command  ***********************/
/* The Recursive Call command in recursion is only responsible for triggering a new recursive call. 
  The Recursive Call command is the actual command that addresses the main problem that you want to solve.

function recursion() {    // The Function Declaration
    if (true) {           // The base case
        return;
    }
    // Function code 
    // and recursive step codes
    return ... ;
}
// here is The Recursive Call command
recursion()    */   

// http://treeindev.net/article/recursive-functions
// https://contactmentor.com/examples-recursion-javascript/

// Sum all values from 0 to given number and display the result.

/* function sum (number) {
    if(number == 0){
        return 0;
    }
    return number + sum(number -1);
}

console.log("sum is :" +sum(10)); */


/******************************* Linear sum for even numbers in recursion **********************************/

/*function even_sum(number){

    // base case if n is 0, the sum is 0

    if ( number < 2) {
        return 0;
    }
    // If n is even, add it to the sum and recursively call with n-2
    else if(number % 2 == 0){
        return number + even_sum(number - 2);
    }
    // If n is odd, recursively call with n-1
    else {
        return even_sum(number -1)
    }
}
console.log("sum of even number is : " + even_sum(10)); */


/************************* factorial of a number **************************/

/* function factorial(number) {
    if(number === 1){
        return 1;
    }
    else{
        return number*factorial(number-1);
    }
}
console.log("Factorial is: " +factorial(5)); */

/*************************************** Fibonacci series ******************************/
// Certainly! The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, 
// usually starting with 0 and 1. The sequence goes 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.

function Fibonacci(number){
    //  Base cases: if n is 0 or 1, return n
    if(number ===0){
        return 0;
    }
    else if(number === 1){
        return 1;
    }
    // Recursive case: F(n) = F(n-1) + F(n-2)
    return Fibonacci(number-1) + Fibonacci(number-2);
}
console.log("fibonacci series is :" +Fibonacci(5));


