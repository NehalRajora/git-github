//  objectRef :- let see what they can do for us.



// One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, 
// whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

/*let msg = "hello";
let copy = msg;
alert(copy); */

// A variable assigned to an object stores not the object itself, but its “address in memory”
// – in other words “a reference” to it.

/*let user = {
    name: 'hello'
};
let admin = user; // call ny reference
//We can use either variable to access the object and modify its contents:
admin.name = "helo";
alert(user);*/


//Cloning and merging, Object.assign

// We can create a new object and replicate the structure of the existing one, 
// by iterating over its properties and copying them on the primitive level.
/*let users = {
    name : 'abc'
};
 let copy = {};

 for(let key in users){
    copy[key] = users[key];
 }
 copy.name = 'xyz';
alert(users.name);*/


// Object.assign
/*let user = {
    name: "John",
    age: 30
  };
  
  let clone = Object.assign({}, user);
  
  alert(clone.name); // John
  alert(clone.age);*/

//  Object methods, "this" 
/*let user = {
  name : 'abc',
  age : 30
};
user.sayHi = function(){
    alert ("hello");
}
user.sayHi(); */

// Of course, we could use a pre-declared function as a method,
/*let user = {
    name : 'abc',
    age : 30
  };
 function sayHi(){
   alert("hello");
 } 
 user.sayHi = sayHi;
 user.sayHi(); */

 // “this” in methods
/*let user = {
    name : 'abc',
    age : 30,

    sayHi(){
        alert(this.name);
    }
};
user.sayHi(); */

//

/*let users = {
    name : 'xyz',
    age : 30,

    sayHi(){
        alert(this.name);
    }
};
let admin = users;
users = null;
admin.sayHi(); */



